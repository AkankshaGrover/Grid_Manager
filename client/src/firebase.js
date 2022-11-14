import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCs27ud5xq7ZbcNnyy7mYIfatBw336Nq4",
    authDomain: "grid-manager-19e21.firebaseapp.com",
    projectId: "grid-manager-19e21",
    storageBucket: "grid-manager-19e21.appspot.com",
    messagingSenderId: "100915625465",
    appId: "1:100915625465:web:77b937ad04f2a114a15128",
    measurementId: "G-G5VZM956VD"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
        // console.log(user)
        // console.log(docs)
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
    signOut(auth);
    console.log("signed out " + auth.currentUser)
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logout,
  };
  