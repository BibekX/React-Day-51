import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.png";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const content = (
  <div>
    <header>
      <h1>Simple Website</h1>
    </header>
    <section>
      This is a simple website made with React.
      <ol>
        <li>
          First, I used <span className="command">create-react-app</span>
        </li>
        <li>
          Second, I ran <span className="command">yarn start</span>
        </li>
      </ol>
    </section>
    <footer>
      <img
        src={logo}
        style={{
          height: "300px",
          width: "300px",
          display: "block",
          margin: "0 auto",
        }}
        alt="logo"
      />
    </footer>
  </div>
);

ReactDOM.render(content, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
