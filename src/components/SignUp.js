import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let history = useNavigate();
  const { name, email, password} = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json();
    console.log(json);
    localStorage.setItem('token', json.authToken);
    history("/");
    props.showAlert("SignUp Successful","success")
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  document.querySelector('body').style.backgroundColor='white';
  props.setFlag(true);
  return (
    <div className='container'>
      {/* <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter your Name</label>
          <input type="text" className="form-control" onChange={onChange} id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onChange} id="password" name='password' />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" onChange={onChange} id="cpassword" name='cpassword' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card" style={{height:'70vh',width:'30vw'}}>
            <div
              className="justify-content-center form_container mx-5"
              style={{ color: "black",marginTop:'40px' }}
            >
              <h1 style={{ textDecoration: "none", fontSize: "20px" }}>
                Create Account
              </h1>
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                Enter your email & password to login
              </p>
              <form>
              <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control input_user"
                    defaultValue=""
                    placeholder="username"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="email"
                    className="form-control input_user"
                    defaultValue=""
                    placeholder="username"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Password
                </label>
                <div className="input-group mb-2">
                  <input
                    type="password"
                    name="password"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="password"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group d-flex">
                  <div className="custom-control custom-checkbox">
                    <input
                      name="password"
                      type="checkbox"
                      className="custom-control-input mx-2"
                      id="customControlInline"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlInline"
                      style={{
                        fontSize: "12px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      Remember password
                    </label>
                  </div>
                </div>
                <div className=" justify-content-center mt-3 login_container">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    name="button"
                    className="btn login_btn"
                    style={{ backgroundColor: "#198754" }}
                  >
                    Create Account
                  </button>
                  <p style={{ textAlign: "center" }}>or</p>
                  <button
                    type="button"
                    name="button"
                    className="btn login_btn"
                    style={{ backgroundColor: "#198754" }}
                  >
                    <a href="/login" style={{textDecoration:'none',color:'white',background:'#198754'}}>SignIn</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
