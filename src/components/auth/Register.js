import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { userName, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const checked = "hotelManagement";
    if (password === password2) {
      const newUser = {
        userName,
        email,
        password,
        checked,
      };
      console.log("ssssssss");
      console.log(email);
      axios
        .post("http://localhost:3000/user/signup", newUser)
        .then((response) => {
          if (response.data.message === "User created") {
            history.push("/login");
          }
        })
        .catch((err) => {
          // alert(err);
          alert("Mail exists.");
        });
    } else {
      alert("Password not same");
    }
  };

  return (
    <div className="register-form">
      <h1 className="heading">Register</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Create Your Account
      </p>

      <br />
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="userName"
            value={userName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="link">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
