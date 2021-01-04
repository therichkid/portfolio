import * as admin from "firebase-admin";
import * as serviceAccount from "./firebase-adminsdk.json";

export const initDb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://portfolio-1e5a5-be-rtdb.europe-west1.firebasedatabase.app"
});
