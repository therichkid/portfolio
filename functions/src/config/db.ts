import * as admin from "firebase-admin";
import * as serviceAccount from "./firebase-adminsdk.json";

export const initDb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://portfolio-1e5a5-default-rtdb.firebaseio.com"
});
