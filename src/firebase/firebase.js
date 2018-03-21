import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.id);
//   console.log(snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.id);
//   console.log(snapshot.val());
// });

// const expenses = [
//   {
//     description: "Books",
//     note: "",
//     amount: "196090",
//     createdAt: 0
//   },
//   {
//     description: "Krav Maga classes",
//     note: "",
//     amount: "250000",
//     createdAt: 10952350
//   },
//   {
//     description: "Yoga classes",
//     note: "",
//     amount: "86000",
//     createdAt: 12908243
//   }
// ];

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "cooking classes",
//   note: "",
//   amount: "86000",
//   createdAt: 12908243
// });

// expenses.forEach(expense => {
//   database.ref("expenses").push(expense);
// });

// database.ref("notes/-L7YmmYt2m0TAib4G_6i").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular"
// });

// database.ref("notes").set(notes);

// let name, jobTitle, company;

// database
//   .ref()
//   .set({
//     name: "Diana Suescun",
//     age: 22,
//     stressLevel: 7,
//     job: {
//       title: "Teacher",
//       company: "Self-employed"
//     },
//     location: {
//       city: "Tunja",
//       country: "Colombia"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(error => {
//     console.log("This failed: ", error);
//   });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   name = val.name;
//   jobTitle = val.job.title;
//   company = val.job.company;
//   console.log(`${name} is a ${jobTitle} at ${company}`);
// });

// database.ref().update({
//   job: {
//     title: "Engineer",
//     company: "Tesla"
//   }
// });

// database
//   .ref("location/country")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(e => {
//     console.log("error fetching data ", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("isSingle").remove().then(() => {
//   console.log("Data was removed);
// }).catch(() => {
//   console.log("Data was removed);

// });
