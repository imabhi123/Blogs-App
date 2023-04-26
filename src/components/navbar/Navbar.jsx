import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './navbar.css';
const Navbar = () => {
  let history=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    history("/login");
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-auto px-md-3 pt-3">
  <h1 className="navbar-brand px-3 text-success fs-1  fw-bold" to="/">CrossVal.</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=" navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li  className="nav-item fw-bold px-3  active">
        <Link className="nav-link " to="/">Home <span className="sr-only d-none">(current)</span></Link>
      </li>
      <li  className="nav-item fw-bold px-3">
        <Link className="nav-link" to="/">Features</Link>
      </li>
      <li  className="nav-item fw-bold px-3">
        <Link className="nav-link " to="/">Testimonials</Link>
      </li>
      <li  className="nav-item fw-bold px-3">
        <Link className="nav-link" to="/">Blog</Link>
      </li>
      <li  className="nav-item fw-bold px-3">
        <Link className="nav-link text-bold" to="/">Contact Us</Link>
      </li>
    </ul>
  </div>
 <form className="form-inline my-2 px-3 my-lg-0">
      <button className="btn-success btn-outline-0 border-0 rounded text-white my-2 py-1 px-3 fw-bold " type="submit" onClick={handleLogout}>Logout</button>
    </form>
</nav>
    </div>
  )
}

export default Navbar
