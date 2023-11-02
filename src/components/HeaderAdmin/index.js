// Import library
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';


// Import component
import Search from "../Search";

// Import css
import styles from "./HeaderAdmin.module.scss";
import Button from '@mui/material/Button';
import { useContext, useState, useRef, useMemo } from "react";
import jwtDecode from "jwt-decode";
import useToken from "../../authorization/useToken";
import LogoutIcon from '@mui/icons-material/Logout';
import { ShopContext } from "../../context/shop-context";


const cx = classNames.bind(styles);


function HeaderAdmin() {

  const navigate = useNavigate()
  const { checkOut } = useContext(ShopContext)
  const token = useToken()
  let userRole = ''
  let name = ''
  const { setViewBeatFirstTime } = useContext(ShopContext);
  if (token) {
    userRole = jwtDecode(token).role
    name = jwtDecode(token).username
  }
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token")
      setViewBeatFirstTime(0)
      checkOut()
    }
  }
  const [page, setPage] = useState("Page");
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-left")}>
        <Link to="/" className={cx("header-link")}>
          <span className={cx("logo")}>YourChords</span>
        </Link>
        <div className={cx("search")}>
          <Search />
        </div>
      </div>
      <img className={cx("img-header")} src={require("../../assets/images/Other/Logo.png")} />
      <div className={cx("header-right")}>
        <div className={cx("navigation")}>
          <Link to={"/"}><div className={cx("nav-item")}>Home</div></Link>
          <Link to="/listuser"><div className={cx("nav-item")}>User</div></Link>
          <Popup trigger={<button className={cx("button-page")}>Report</button>} position="bottom left center" closeOnDocumentClick on={['hover', 'focus']}>
            <div className={cx("text-all")}>
              <Link to="/myprofile"><div className={cx("link-text")}>User</div></Link>
              <Link to="/listBeatPurchased"><div className={cx("link-text")}>Song</div></Link>
            </div>
          </Popup>
          <div className={cx("nav-item")}>Contact</div>
          <div className={cx("nav-item")}>
          </div>
        </div>

        {/* Phan quyen header */}
        <div className={cx("pop-up")}>
          <Popup trigger={<button className={cx("button-popup")}>Hi, {name}</button>} position="bottom left center">
            <div className={cx("text-all")}>
              <Link to="/adminprofile"><div className={cx("link-text")}>Account</div></Link>
              <Link to="/listuser"><div className={cx("link-text")}>View User</div></Link>
              <Link to="/"><div className={cx("link-text")} onClick={handleLogout}> Log out</div></Link>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
