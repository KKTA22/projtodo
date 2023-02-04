import React from "react";
import Todo from "./todo";
import { auth } from "../services/firebase";

import "../App.css";

const Home = ({ user }) => {
  return (
    <div>
    <div className="home">
      <h1>
        Hello, <span></span>
        {user.displayName}
      </h1>
      <p>
      <img src={user.photoURL} className="profphoto" alt="" />
      </p>
      <button className="button_signout" onClick={() => auth.signOut()}>
        Sign out
      </button>
      </div>
      <div>
      <Todo uid={user.uid}/>
    </div>
    </div>
  );
};

export default Home;
