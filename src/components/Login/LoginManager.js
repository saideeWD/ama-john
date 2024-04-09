import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase-config";

export const initializeLoginFramworke = () => {

  if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
  }
 
};

export const handleFbSignIn = () => {
  const fbprovider = new firebase.auth.FacebookAuthProvider();
   return firebase
    .auth()
    .signInWithPopup(fbprovider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;
      user.success = true;
      return user;
      // IdP data available in result.additionalUserInfo.profile.
      // ...

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
};

///giogleSign in

export const handleGoogleSineIn = () => {
  const googleprovider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleprovider)
    .then((res) => {
      const { name, email, picture } = res.additionalUserInfo.profile;
      const signInUser = {
        isSignedIn: true,
        name: name,
        email: email,
        picture: picture,
        success:true,
      };
      return signInUser;
      
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};

export const handleSignOut = () => {
 return firebase
    .auth()
    .signOut()
    // Sign-out successful.
    .then((res) => {
      const signOutuser = {
        isSignedIn: "",
        newUser: false,
        name: "",
        email: "",
        picture: "",
        error: "grgrtgtg",
      };
       return signOutuser;
      console.log(res);
    })
    // An error happened.
    .catch((error) => {});
};

export const createUserWithEmailAndPassword = (email,password,name) => {
 return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password,name)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      verifyEmail()
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const message =
        "The email address is already in use by another account. ";
      const newUserInfo = {};
      newUserInfo.error = message;
      newUserInfo.success = false;
      return newUserInfo;
      
    });

  };
export const signInWithEmailAndPassword = (email,password) => {
 return firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
     return newUserInfo;
    })
    .catch((error) => {
      const message =
        "The email address is already in use by another account. ";
      const newUserInfo = {};
      newUserInfo.error = message;
      newUserInfo.success = false;
     return newUserInfo;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(() => {
      // Update successful
      // ...
      console.log("User nmae updated successfully");
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(error);
    });
};
const verifyEmail = () =>{
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
}