
import classNames from "classnames/bind";
import styles from "./AdminProfile.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Tab } from "bootstrap";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";
import { TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.scss';
import 'react-tabs/style/react-tabs.css';
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "abc",
    },
]

const SEX = [
    {
        title: "Male",
        value: "MALE",
    }, {
        title: "Female",
        value: "FEMALE",
    }
]
function MyProfile() {
    const [fullName, setFullname] = useState("");
    const [mail, setMail] = useState("")
    const [gender, setGender] = useState(SEX[0].value);
    const [checkEdit, setCheckEdit] = useState("")
    const [username, setUserName] = useState("")
    let id = ""
    const token = useToken()
    if (token) {
        id = jwtDecode(token).sub
    }
   

    useEffect(() =>{
        loadDetailUser()
    },[])

    const loadDetailUser = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/user/${id}`)
        .then((res) =>{
            if(res.data.fullName !== null){
                setFullname(res.data.fullName)
            }
            if(res.data.username !== null){
                setUserName(res.data.username)
            }
            // if(res.data.address !== null){
            //     console.log(123)
            //     setFullname()
            // }
            if(res.data.mail !== null){
                setMail(res.data.mail)
            }  
            if(res.data.gender !== null){
                setGender(res.data.gender)
            }   
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const handleEdit = async () => {
        if (!fullName || !gender || !id) {
            alert("Please fill in all fields!")
            return
        }
        const userProfile = { fullName, gender, id };


        await axiosInstance.patch("http://localhost:8080/api/v1/admin", userProfile)
            .then((res) => {
                setCheckEdit("Edit Successfully")              
            })
            .catch((error) => {
                setCheckEdit("Edit Failed!")
                console.log(error)
            })
    }

    return (
        <div style={{marginTop:50}}>
            <div>
                <h2 className={cx("title-myprofile")}>
                    My Profile
                </h2>
            </div>
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
                                            <input className={cx("input-username0")} type="text" placeholder value={fullName} onChange={(e) => setFullname(e.target.value)} />
                                        </div>
                                    </div>
                                </td>
                            </div>
                            
                            <div className={cx("part2")}>
                                <td>
                                    <div className={cx("email-text")}>
                                        Email:
                                    </div>
                                    <div className={cx("email-change")}>
                                        {mail}
                                    </div>
                                </td>

                            </div>
                            
                            <div className={cx("part4")} style={{ marginLeft: 65 }}>
                                <td className={cx("sex")}>
                                    Sex
                                </td>
                                <td>
                                    <div className={cx("sex-button")}>
                                        <div className={cx("stardus-radio-group")}>
                                            <div className={cx("footer")}>
                                                {
                                                    SEX.map((item) => {
                                                        return <div className={cx("footer-left")}>
                                                            <input
                                                                type="radio"
                                                                id="remember"
                                                                name="rememeber"
                                                                value="check"
                                                                checked={item.value === gender}
                                                                onChange={() => setGender(item.value)}
                                                                className={cx("input-check")}
                                                            />
                                                            <label htmlFor="remember" className={cx("text")}>
                                                                {item.title}
                                                            </label>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                            {/* <div className={cx("footer")}>
                                                    <div className={cx("footer-left")}>
                                                        <input
                                                            type="radio"
                                                            id="remember"
                                                            name="rememeber"
                                                            value="check"
                                                            checked={isChecked}
                                                            onChange={() => setIsChecked(!isChecked)}
                                                            className={cx("input-check")}
                                                        />
                                                        <label htmlFor="remember" className={cx("text")}>
                                                            Female
                                                        </label>
                                                    </div>
                                                </div> */}

                                        </div>
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part5")}>
                                <td className={cx("save-button")}>
                                </td>
                                <td className={cx("button-type")}>
                                    <button type="button" className={cx("button-save-details")} aria-disabled="false" onClick={() => handleEdit()}>Edit</button>
                                </td>
                            </div>
                            <div style={{color:"green"}}>{checkEdit}</div>

                        </table>
                    </form>
                </div>
                <div className={cx("line")} />
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                <img className={cx("box-img")} alt="" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"} />
                            </div>
                            <div className={cx("info-user")}>
                                <td>
                                    {username}
                                </td>
                                <td style={{fontSize:20}}>
                                    Admin
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;