const admin = require("firebase-admin");
const XLSX = require("xlsx");

// 🔑 Import service account key
const serviceAccount = require("./serviceAccountKey.json");

// 🚀 Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportCollection(collectionName) {
  console.log(`⏳ Exporting collection: ${collectionName}`);
  const snapshot = await db.collection(collectionName).get();
  const data = [];

  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, collectionName);

  const filename = `${collectionName}.xlsx`;
  XLSX.writeFile(workbook, filename);
  console.log(`✅ Exported to ${filename}`);
}

// ✨ Change collection name below or make dynamic
exportCollection("participants"); // example: replace with your Firestore collection name
