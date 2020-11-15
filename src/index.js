import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Submit from "./pages/Submit"
import Submitted from "./pages/Submitted"
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
} from "react-router-dom";
import ReactGA from "react-ga";


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/submit" component={Submit} />
      <Route path="/submitted" component={Submitted} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function sendToAnalytics({ id, name, value }) {
  ReactGA.event({
    category: "Web Vitals",
    action: name,
    value: Math.round(name === "CLS" ? value * 1000 : value),
    label: id,
    nonInteraction: true,
  });
}

reportWebVitals(sendToAnalytics);
