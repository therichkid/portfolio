import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as cors from "cors";
import { initDb } from "./config/db";

interface ContactData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  timer: number;
  hp?: string;
}

const db = initDb.database();

const submit = functions.https.onRequest((request, response) => {
  cors({ origin: true })(request, response, () => {
    if (request.method !== "POST") {
      return;
    }

    const data = request.body as ContactData;
    const errorMessage = "Something went wrong. Please try again later!";

    if (!isValid(data)) {
      console.error("Failed validation check");
      response.status(400).send({ success: false, message: errorMessage });
      return;
    }

    Promise.all([
      sendMail(data),
      db
        .ref("contact-form")
        .push()
        .set(data)
    ])
      .then(() => {
        response.status(200).send({ success: true, message: "Your message has been sent!" });
      })
      .catch(error => {
        console.error(error);
        response.status(400).send({ success: false, message: errorMessage });
      });
  });
});

const isValid = (data: ContactData): boolean => {
  // Spam checks
  if (data.hp || (data.timer && data.timer < 5000)) {
    return false;
  }
  return true;
};

// const gmailOptions = {
//   service: "gmail",
//   auth: {
//     user: functions.config().gmail.email,
//     pass: functions.config().gmail.password
//   }
// };

const gmxOptions = {
  host: "mail.gmx.net",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false
  },
  auth: {
    user: functions.config().gmx.email,
    pass: functions.config().gmx.password
  }
};

const sendMail = async (data: ContactData): Promise<void> => {
  const mailTransport = nodemailer.createTransport(gmxOptions);

  await mailTransport.sendMail({
    from: functions.config().gmx.email,
    replyTo: data.email,
    to: functions.config().gmx.email,
    subject: `A new message from ${data.name}`,
    text: data.message,
    html: [
      "<p>Hi Richard,</p>",
      "<p>You received a new message from:<br>",
      Object.keys(data)
        .filter(key => ["name", "company", "phone"].includes(key) && (data as any)[key])
        .map(key => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${(data as any)[key]}`)
        .join("<br>"),
      `<p>${data.message}</p>`
    ].join("")
  });
};

export { submit };
