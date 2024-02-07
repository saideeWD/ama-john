import { useContext, useState } from "react";
import { UserContaxt } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  handleFbSignIn,
  handleGoogleSineIn,
  handleSignOut,
  initializeLoginFramworke,
  signInWithEmailAndPassword,
} from "./LoginManager";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    picture: "",
    success: false,
  });
  initializeLoginFramworke();

  const [loggedInUser, setloggedInUser] = useContext(UserContaxt);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/shipment";

  const googleSineIn = () => {
    handleGoogleSineIn().then((res) => {
      handleResponsove(res, true);
    });
  };
  const handleResponsove = (res, redrict) => {
    setUser(res);
    setloggedInUser(res);
    if (redrict) {
      navigate(from, { replace: true });
    }
  };
  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponsove(res, false);
    });
  };
  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponsove(res, true);
    });
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
      createUserWithEmailAndPassword(user.email, user.password, user.name).then(
        (res) => {
          handleResponsove(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponsove(res, true);
      });
    }
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      {user.isSignedIn ? (
        <button onClick={signOut}>Sign out </button>
      ) : (
        <button onClick={googleSineIn}>Sign In </button>
      )}
      <br />
      {<button onClick={fbSignIn}>Sign in using facebook</button>}

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
