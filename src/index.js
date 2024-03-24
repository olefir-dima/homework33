import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Description from "./components/Main/Description";
import Questions from "./components/Questions/Questions";
import Materials from "./components/Materials/Materials";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Description />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>Упс... Щось пішло не так...</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
