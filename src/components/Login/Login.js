
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase-config";
import { useContext, useState } from "react";
import { UserContaxt } from "../../App";
firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    picture: "",
    success: false,
  });



  const [loggedInUser,setloggedInUser] = useContext(UserContaxt)

  const googleprovider = new firebase.auth.GoogleAuthProvider();
  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const handleSineIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleprovider)
      .then((res) => {
        const { name, email, picture } = res.additionalUserInfo.profile;
        const signInUser = {
          isSignedIn: true,
          name: name,
          email: email,
          picture: picture,
        };
        setUser(signInUser);
        console.log(name, email, picture);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };


  const handleFbSignIn = () =>{
    firebase
  .auth()
  .signInWithPopup(fbprovider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    console.log(user.User._delegate.auth.displayName)
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

  }
  const handleSignOut = () => {
    firebase
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
        setUser(signOutuser);
        console.log(res);
      })
      // An error happened.
      .catch((error) => {});
  };
  const handleChange = (e) => {
    // debugger;
    let isFromValid = true;
    console.log(e.target.name, e.target.value);

    if (e.target.name === "email") {
      isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFromValid = /^(?=.{6,12}$)\D*\d/.test(e.target.value);
    }
    if (isFromValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    // console.log(user.email, user.password)
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setloggedInUser(newUserInfo)
          updateUserName(user.name);
        })
        .catch((error) => {
          const message =
            "The email address is already in use by another account. ";
          const newUserInfo = { ...user };
          newUserInfo.error = message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log("sign in user info", res.user);
        })
        .catch((error) => {
          const message =
            "The email address is already in use by another account. ";
          const newUserInfo = { ...user };
          newUserInfo.error = message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
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
    e.preventDefault();
  };

  return (
    <div style={{textAlign:"center"}}>

      
      {user.isSignedIn ? (
        <button onClick={handleSignOut}>Sign out </button>
      ) : (
        <button onClick={handleSineIn}>Sign In </button>
      )}
      <br />
     {
      <button onClick={handleFbSignIn}>Sign in using facebook</button>
      
      }

      {user.isSignedIn && (
        <div>
          <h1>Welcome to {user.name}</h1>
          <h2>Email : {user.email}</h2>
          <img src={user.picture} alt="" />
        </div>
      )}

      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p> Password : {user.password}</p>
      <h1>Our own Authentication</h1>
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser"> New User Sign up</label>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <input
            name="name"
            onBlur={handleChange}
            type="text"
            placeholder=" Your name"
          />
        )}
        <br />
        <input
          type="email"
          name="email"
          id=""
          onBlur={handleChange}
          placeholder="Your Email Address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          onBlur={handleChange}
          placeholder="Your password"
          required
        />
        <br />
        <input type="submit" value={newUser ? "Sign in" : "Sign up"} />
      </form>
      <h3 style={{ color: "red", fontWeight: "30" }}>{user.error}</h3>
      {user.success && (
        <h3 style={{ color: "green", fontWeight: "30" }}>
          User {newUser ? "created" : "Login  in"} successfully
        </h3>
      )}
    </div>
  );
}

export default Login;
