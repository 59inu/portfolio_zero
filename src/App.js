import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Links from "./components/Links";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <Header />
          <div id="body">
            <div className="section title">
              <h1>최방실</h1>
              <h2>코드로 현실의 문제를 해결하고 싶은 개발자</h2>
            </div>
            <div className="history">
              <div>2019.09 ~ 2019.12</div>
              <div>부트캠프 CodeStates Immersive 15th 수료</div>
            </div>
            <div className="section body">
              <Skills />
              <Projects />
            </div>
          </div>
          <footer id="footer">
            <Links />
          </footer>
        </div>
      </Router>
    </Provider>
  );
}
