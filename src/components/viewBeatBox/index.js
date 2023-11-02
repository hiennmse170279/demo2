import classNames from "classnames/bind";
import styles from "./viewBeatBox.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlay, faPause, faCheckCircle, faUsersViewfinder, faEye, faStar, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Button, colors } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import useToken from "../../authorization/useToken";
import axiosInstance from "../../authorization/axiosInstance";


const cx = classNames.bind(styles);

function ViewBeatBox({ id, name, genre, price, view, like, onClick, handleLike, rating, vocalRange, fullName, status }) {
    const token = useToken()
    const audioRef = useRef()
    const { addToCart, cartItems } = useContext(ShopContext)
    return (<div className={cx("list-box")} onClick={onClick}>
        <div className={cx("card-item")}>
            <img className={cx("box-img")} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} alt="anh" />
        </div>
        <div className={cx("content")}>
            {/* Content left */}
            <div className={cx("content-left")}>
                <h2 className={cx("name-beat")}> <Link to={`/viewdetailbeatmusician/${id}`}>{name}</Link> <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} /></h2>
                <span className={cx("type-beat")}>{fullName}</span> <br />
                <span className={cx("type-beat")}>{vocalRange}</span>

                <div className={cx("footer")}>
                    <span className={cx("price")}>${price}</span>
                    <div className={cx("number-sell")}>
                        <span className={cx("box")}></span>
                        <FontAwesomeIcon icon={faEye} />
                        <span className={cx("number")}>{view}</span>
                    </div>
                    <span className={cx("like")}>
                        <FontAwesomeIcon icon={faHeart} onClick={() => handleLike(id)} />
                        <span className={cx("number")}>{like}</span>
                    </span>
                    <span className={cx("rating")}>
                        <FontAwesomeIcon icon={faStar} />
                        <span className={cx("number")}>{rating}</span>
                    </span>
                </div>
                {status === 1 ?
                    <div style={{ background: "green", padding: 10, height: 45, color: 'white', fontSize: '1.8rem', borderRadius: 18, marginBottom: 20, marginRight: 110 }}>Active</div>
                    :
                    <div style={{ background: "red", padding: 10, height: 45, color: 'white', fontSize: '1.8rem', borderRadius: 18, marginBottom: 20, marginRight: 110 }}>UnSell</div>
                }

            </div>
            {/* Content right  */}

        </div>
        {/* <div className={cx("control")}>
            <div className={cx("btn", "btn-prev")}>
                <i className="fas fa-step-backward"></i>
                <FontAwesomeIcon icon={faStepBackward} />
            </div>
            <div className={cx("btn", "btn-toggle-play")} onClick={() => setPlay(!play)}>
                <FontAwesomeIcon icon={faPause} className={cx("icon-pause", "icon", {
                    "play": play === true,
                })} />
                <FontAwesomeIcon icon={faPlay} className={cx("icon-play", "icon", {
                    "play": play === false,
                })} />
            </div>
            <div className={cx("btn", "btn-next")}>
                <FontAwesomeIcon icon={faStepForward} />
            </div>

        </div> */}
    </div>);
}
export default ViewBeatBox;