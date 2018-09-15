import firebase from "firebase";

const devConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

// const prodConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   databaseURL: process.env.DATABASEURL,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID
// };

// const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

// initialize the app
firebase.initializeApp(devConfig);

const auth = firebase.auth();

// Providers
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, auth, githubAuthProvider };
