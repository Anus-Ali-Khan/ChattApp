import React from "react";
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider);
};

function Auth() {
  return (
    <div className="auth">
      <p> Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Auth;
