import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import { useState } from "react";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  if (!isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div>Chat </div>
      ) : (
        <div className="room">
          {" "}
          <label>Enter Room Name: </label>
          <input type="" />
          <button>Enter Chat</button>
        </div>
      )}
    </div>
  );
}

export default App;
