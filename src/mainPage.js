import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import ChatThread from "./components/ChatThread";
import Clock from "./components/Clock";
import LoginSection from "./components/Login";

ReactDOM.render(
  <>
    <div className="container">
      {/* <LoginSection /> */}
      <Clock />
      <ChatThread />
    </div>
  </>,
  document.getElementById("root")
);
