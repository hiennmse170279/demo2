import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useState } from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import videoBg from '../../assets/video/video (2160p).mp4'

import axios from "axios";
import ValidationLogin from "../../Validation/ValidationLogin";
import jwtDecode from "jwt-decode";
const cx = classNames.bind(styles);

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loginMessage, setLoginMessage] = useState("");
  const user = { username, password }
  
  const handleSubmit = async () => {
    console.log(username, password, isChecked);

    // Validation form
    const form = { username: username, password: password };
    let err = ValidationLogin(form);

    if (username === "" || password === "") {
      console.log(err);
      setError(err);
      setLoginMessage("");
      return;
    }
    
      await axios.post("http://localhost:8080/api/auth/login", user)
      .then((res) =>{
        setLoginMessage();
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token);
        if(jwtDecode(res.data.token).role === "CUS"){
          navigate("/")
        }else if(jwtDecode(res.data.token).role === "MS"){
          navigate("/ViewBeat")
        }else{
          navigate("/ListUser")
        }
      })
      .catch((error) =>{
        if (error.response && error.response.status === 403) {
          // Handle 403 error here
          console.error("Access Denied (403)");
          setError(err);
          setLoginMessage("Access Denied (403): You are banned by Admin");
        } else {
          // Handle other errors
          console.error(error);
          setError(err);
          setLoginMessage("Wrong username or password!");
        }
      })
  };

  return (
    <div className={cx("login-wrapper")}>
      <div className={cx("main")}>
        <div className={cx("overlay")}></div>
        <video src={videoBg} autoPlay loop muted ></video>
      </div>
      <div className={cx("heading")}>
        <span className={cx("title")}>Do not have an account ?</span>
        <Link to="/register" className={cx("link")}>
          <span className={cx("title-link")}>Register here</span>
        </Link>
      </div>
      <h1 className={cx("form-heading")}>Login</h1>
      {/* Form */}
      <div className={cx("form")}>
        {/* Username or email */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Username or email"
            className={cx("input-text")}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {error.username && (
          <p style={{ color: "red",paddingLeft: 5 , marginBottom: -210}}>
            {error.username}
          </p>
        )}

        {/* Password */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5 31.875C21.5054 31.875 20.5516 31.4799 19.8484 30.7766C19.1451 30.0734 18.75 29.1196 18.75 28.125C18.75 26.0438 20.4187 24.375 22.5 24.375C23.4946 24.375 24.4484 24.7701 25.1516 25.4734C25.8549 26.1766 26.25 27.1304 26.25 28.125C26.25 29.1196 25.8549 30.0734 25.1516 30.7766C24.4484 31.4799 23.4946 31.875 22.5 31.875ZM33.75 37.5V18.75H11.25V37.5H33.75ZM33.75 15C34.7446 15 35.6984 15.3951 36.4016 16.0984C37.1049 16.8016 37.5 17.7554 37.5 18.75V37.5C37.5 38.4946 37.1049 39.4484 36.4016 40.1516C35.6984 40.8549 34.7446 41.25 33.75 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1516C7.89509 39.4484 7.5 38.4946 7.5 37.5V18.75C7.5 16.6687 9.16875 15 11.25 15H13.125V11.25C13.125 8.7636 14.1127 6.37903 15.8709 4.62087C17.629 2.86272 20.0136 1.875 22.5 1.875C23.7311 1.875 24.9502 2.11749 26.0877 2.58863C27.2251 3.05977 28.2586 3.75032 29.1291 4.62087C29.9997 5.49142 30.6902 6.52492 31.1614 7.66234C31.6325 8.79977 31.875 10.0189 31.875 11.25V15H33.75ZM22.5 5.625C21.0082 5.625 19.5774 6.21763 18.5225 7.27252C17.4676 8.32742 16.875 9.75816 16.875 11.25V15H28.125V11.25C28.125 9.75816 27.5324 8.32742 26.4775 7.27252C25.4226 6.21763 23.9918 5.625 22.5 5.625Z"
              fill="white"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className={cx("input-text")}
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        {error.password && (
          <p style={{ color: "red",paddingLeft: 5 , marginBottom: -210}}>
            {error.password}
          </p>
        )}
        <Button variant="contained" className={cx("submit-wrapper")} onClick={handleSubmit}>
          <input
            type="submit"
            value="Sign in"
            className={cx("input-submit")}
          />
        </Button>
        {loginMessage && (
        <p style={{ color: "red",paddingLeft: 5 , marginBottom: -210}}>
          {loginMessage}
        </p>
      )}
      </div>
      
      
      
      {/* Footer */}
      <div className={cx("footer")}>
        <div className={cx("footer-left")}>
          <input
            type="checkbox"
            id="remember"
            name="rememeber"
            value="check"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className={cx("input-check")}
          />
          <label htmlFor="remember" className={cx("text")}>
            Remember me
          </label>
        </div>
        <div className={cx("footer-right", "text")}>Forgot password ?</div>
      </div>
    </div>
  );
}

export default Login;
