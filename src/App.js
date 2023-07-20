import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };
  const removeBgColor = () => {
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
  };
  const toggleMode = (cls) => {
    removeBgColor();
    if (cls !== null) {
      document.body.classList.add("bg-" + cls);
    } else {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#000066";
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
  };
  return (
    <>
      <Router>
        <Navbar title={"Navbar"} about={"About"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Please Enter the Text Here to analyse" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
