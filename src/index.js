import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import ChatThread from "./components/ChatThread";
import Clock from "./components/Clock";
import LoginSection from "./components/LoginSection";
import { BrowserRouter, Route } from "react-router-dom";
// npm add react-router-dom
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";

ReactDOM.render(
  <>
    {/* Simon says Your codes are awesome */}
    <BrowserRouter>
      <switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/main" component={Main} />
      </switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
