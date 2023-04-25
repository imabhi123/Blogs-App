import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  props.setFlag(true);
  document.querySelector('body').style.backgroundColor='white';
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    history('/');
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      history("/");
      props.showAlert("login successful", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  //   document.querySelector
  const onChange = (e) => {
    console.log(credentials);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card" style={{height:'70vh',width:'30vw'}}>
            <div
              className="justify-content-center form_container mx-5"
              style={{ color: "black",marginTop:'40px'}}
            >
              <h1 style={{ textDecoration: "none", fontSize: "20px" }}>
                Sign In
              </h1>
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                Enter your email & password to login
              </p>
              <form>
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
                      Remember me
                    </label>
                    <a
                      href="/"
                      style={{
                        marginLeft: "100px",
                        textDecoration: "none",
                        color: "#09a866",
                        fontSize: "12px",
                        fontWeight: "600",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      forgot password?
                    </a>
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
                    Login
                  </button>
                  <p style={{ textAlign: "center" }}>or</p>
                  <button
                    type="button"
                    name="button"
                    className="btn login_btn"
                    style={{ backgroundColor: "#198754" }}
                  >
                    <a href="/signup" style={{textDecoration:'none',color:'white',background:'rgb(3 121 106)'}}>Signup</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
