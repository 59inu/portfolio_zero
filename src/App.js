import React from "react";
import "./App.css";
import Links from "./components/Links";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import store from "./redux/store";
import { Provider } from "react-redux";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <header id="header">
          <a
            data="resume"
            className="link-icon resume"
            href="https://drive.google.com/file/d/18cVkmDipPnGpmmQOG0CwHsr51zPPTABj/view?usp=sharing"
            target="blank"
          >
            <FontAwesomeIcon icon={faIdBadge} alt="resume" />
          </a>
          <Links />
        </header>
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
    </Provider>
  );
}

export default App;
