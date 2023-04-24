import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About/About'
import BlogState from './context/blogs/BlogState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({message:message,type:type});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <BlogState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
    <Route path="/login" element={<Login showAlert={showAlert}/>}></Route>
    <Route path="/signup" element={<SignUp showAlert={showAlert}/>}></Route>
    </Routes>
    </div>
    </Router>
    </BlogState>
    </>
  );
}

export default App;
