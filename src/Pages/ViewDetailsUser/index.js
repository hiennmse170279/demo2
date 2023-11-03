
import classNames from "classnames/bind";
import styles from "./ViewDetailsUser.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
import { red } from "@mui/material/colors";
import Popup from "reactjs-popup";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "abc",
    },
]
function ViewDetailsUser() {
    const { id } = useParams()
    const [search, setSearch] = useState("");
    const [ten, setTen] = useState("");
    const [user, setUser] = useState();
    const [report, setReport] = useState("")
    const [checkReport, setCheckReport] = useState("")
    const navigate = useNavigate()
    const token = useToken()
    let userId = ""
    if(token){
        userId = jwtDecode(token).sub
    }
    const contentStyle = { background: 'white', width: 460, height: 370, borderRadius: 20 };

    useEffect(() => {
        loadDetailsUser()
    }, [])
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch1 = (e) => {
        setTen(e.target.value);
    }
    const handleReport = async() => {
        if(!token){
            navigate("/login")
            return
        }
        await axiosInstance("http://localhost:8080/api/v1/report/user",{userId:userId, userReported: id, content: report})
        .then((res) => {
            setCheckReport("Report Successfully")
        })
    }

    const loadDetailsUser = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/admin/${id}`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <h2 className={cx("title-myprofile")}>
                    My Profile
                </h2>
            </div>
            {user ?
                <div className={cx("profile")}>
                    <div className={cx("volt8A")}>
                        <form style={{ marginTop: 20 }}>
                            <table className={classNames("profile-2")}>
                                <div className={cx("part0")}>
                                    <td>
                                        <div className={cx("text-username0")}>
                                            <td >
                                                <label className={cx("login-text")}>Full Name</label>
                                            </td>
                                            <div>
                                                <input className={cx("input-username0")} type="text" value={user.fullName} placeholder readOnly />
                                            </div>
                                        </div>
                                    </td>
                                </div>
                                <div className={cx("part1")}>
                                    <td className={cx("")}>
                                        <td>
                                            <label className={cx("text-name")}>Address</label>
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-username")} type="text" placeholder value={user.address} readOnly />
                                        </div>
                                    </td>
                                </div>
                                <div className={cx("part2")}>
                                    <td>
                                        <div className={cx("email-text")}>
                                            Email:
                                        </div>
                                        <div className={cx("email-change")}>
                                            {user.mail}
                                        </div>
                                    </td>

                                </div>
                                <div className={cx("part3")}>
                                    <td className={cx("phone-number")}>
                                        Phone number
                                    </td>
                                    <div className={cx("placeholder-ten")}>
                                        <input className={cx("input-phonenumber")} type="text" placeholder value={user.phoneNumber} onChange={handleSearch1} />
                                    </div>
                                </div>
                                <div className={cx("part5")}>
                                    <Popup className={cx("part-5")} style={{ width: "120%" }} trigger={<button type="button" className={cx("button-save-details")} aria-disabled="false" >Report</button>}  {...{ contentStyle }} position="top center">
                                        <div className={cx("text-all")} style={{ padding: 10 }}>
                                            <div style={{ display: 'grid' }}>
                                                <td style={{ fontWeight: 'bold', fontSize: "2.2rem", marginLeft: 120, color: 'red' }}>Report</td>
                                                <td style={{ paddingTop: 15, paddingLeft: 30 }}>
                                                    {user.avatar !== null ?
                                                        <img className={cx("img-user")} src={user.avatar} />
                                                        : <img className={cx("img-user")} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"} />}
                                                    <a href="#" style={{ fontWeight: 'bold' }}>{user.username}</a>
                                                </td>
                                            </div>
                                            <textarea className={cx("text-des")} style={{ resize: 'none', width: '385px', border: 1, height: 150, marginLeft: 24, marginTop: 20, marginBottom: 20, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12 }} onChange={(e) => setReport(e.target.value)} />
                                            <td className={cx("button-type")}>
                                                <button type="button" className={cx("button-send")} aria-disabled="false" onClick={() => handleReport()}>Send</button>
                                            </td>
                                            
                                        </div>
                                    </Popup>
                                </div>
                                <div style={{fontSize:15,color:"green", marginLeft:50, marginTop:20}}>{checkReport}</div>

                            </table>
                        </form>
                    </div>
                    <div className={cx("line")} />
                    <div className={cx("img-user-div")}>
                        <div className={cx("img-user-div1")}>
                            <div className={cx("img-user-div2")}>
                                <div className={cx("img-user-div3")}>
                                    {user.avatar !== null ?
                                        <img className={cx("box-img")} src={user.avatar} />
                                        : <img className={cx("box-img")} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"} />}
                                </div>
                                {/* <input className={cx("img-click")} type="file" accept=".jpg,.jpeg,.png" /> */}
                                <div className={cx("info-user")}>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td style={{ marginLeft: 10 }}>
                                        Customer
                                    </td>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div></div>}
        </div>
    );
}

export default ViewDetailsUser;