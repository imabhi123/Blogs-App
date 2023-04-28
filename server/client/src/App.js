import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About/About";
import BlogState from "./context/blogs/BlogState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content";
import MainCard from "./components/MainCard";
import AddBlog from "./components/AddBlog";
function App() {
  document.querySelector("body").style.backgroundColor = "white";
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [flag, setFlag] = useState(false);
  return (
    <>
      <BlogState>
        <Router>
          <Navbar />
          {!flag && <Content />}
          <Alert alert={alert} />

          <div>
            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/MainCard"
                element={<MainCard setFlag={setFlag} />}
              ></Route>
              <Route
                path="/"
                element={<Home showAlert={showAlert} setFlag={setFlag} />}
              ></Route>
              <Route
                path="/AddBlog"
                element={<AddBlog showAlert={showAlert} setFlag={setFlag} />}
              ></Route>
              <Route
                path="/login"
                element={<Login showAlert={showAlert} setFlag={setFlag} />}
              ></Route>
              <Route
                path="/signup"
                element={<SignUp showAlert={showAlert} setFlag={setFlag} />}
              ></Route>
            </Routes>
          </div>
          {!flag && <Footer />}
        </Router>
      </BlogState>
    </>
  );
}

export default App;
