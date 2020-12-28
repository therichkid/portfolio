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
  cors({ origin: true })(request, response, async () => {
    if (request.method !== "POST") {
      return;
    }

    const data = request.body as ContactData;

    const validation = validate(data);
    if (!validation.success) {
      response.status(400).send({ success: false, message: validation.message });
      return;
    }

    await sendMail(data);

    await db
      .ref("contact-form")
      .push()
      .set(data);

    response.status(200).send({ success: true, message: "Your message has been sent!" });
  });
});

const validate = (data: ContactData): { success: boolean; message?: string } => {
  // Spam checks
  if (data.hp || (data.timer && data.timer < 5000)) {
    return {
      success: false,
      message: "Something went wrong. Please try again later!"
    };
  }
  return {
    success: true
  };
};

const sendMail = async (data: ContactData): Promise<void> => {
  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: functions.config().gmail.email,
      pass: functions.config().gmail.password
    }
  });

  await mailTransport.sendMail({
    from: data.email,
    replyTo: data.email,
    to: functions.config().gmail.email,
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
