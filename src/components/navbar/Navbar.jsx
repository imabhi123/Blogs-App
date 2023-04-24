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
        <nav>
            <ul>
            <li><Link className='navbar-items links' to="/">Postgram</Link></li>
            <li><Link className='navbar-items links' to="/">Home</Link></li>
            <li><Link className='navbar-items links' to="/about">About</Link></li>
            {localStorage.getItem('token')===null?<form className='d-flex'>
              <Link className='btn btn-primary mx-2' role='button'to="/login">login</Link>
              <Link className='btn btn-primary mx-2' role='button' to="/signup">Signup</Link>
            </form>:<form className='d-flex'>
              <button className='btn btn-primary mx-2' onClick={handleLogout}>logout</button>
            </form>}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
