
import classNames from "classnames/bind";
import styles from "./MusicianProfile.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "bootstrap";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import 'react-tabs/style/react-tabs.css';
import Pagination from "../../components/Pagination";
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
    const [isChecked, setIsChecked] = useState(false);
    const [fullName, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState(SEX[0].value);
    const [userImg, setUserImg] = useState()
    const [avatar, setAvatar] = useState("")
    const [prize, setPrize] = useState("")
    const [professional, setProfessional] = useState("")
    const [year, setYear] = useState("")
    const [checkEdit, setCheckEdit] = useState("")
    const [username, setUserName] = useState("")
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const [feedBacks, setFeedBacks] = useState([]);

    let id = ""
    const token = useToken()
    if (token) {
        id = jwtDecode(token).sub
    }


    useEffect(() => {
        loadDetailUser()
    }, [checkEdit])

    useEffect(() => {
        loadFeedBack()
    }, [page])

    const loadDetailUser = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/user/${id}`)
            .then((res) => {
                if (res.data.fullName !== null) {
                    setFullname(res.data.fullName)
                }
                if (res.data.username !== null) {
                    setUserName(res.data.username)
                }
                if (res.data.address !== null) {
                    console.log(123)
                    setAddress(res.data.address)
                }
                if (res.data.mail !== null) {
                    setMail(res.data.mail)
                }
                if (res.data.phone !== null) {
                    setPhone(res.data.phone)
                }
                if (res.data.gender !== null) {
                    setGender(res.data.gender)
                }
                if (res.data.avatar !== null) {
                    setAvatar(res.data.avatar)
                }
                if (res.data.prize !== null) {
                    setPrize(res.data.prize)
                }
                if (res.data.professional !== null) {
                    setProfessional(res.data.professional)
                }
                if (res.data.year !== null) {
                    setYear(res.data.year)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleEdit = async () => {
        if (!fullName || !address || !phone || !gender || !id || !prize || !professional || !year) {
            alert("Please fill in all fields!")
            return
        } else if (phone.length < 10) {
            alert("Phone must be equal or higher than 10 numbers!")
        }
        const userProfile = { fullName, address, phone, gender, id };
        const formData = new FormData();
        formData.append('json', new Blob([JSON.stringify(userProfile)], { type: 'application/json' }));
        console.log(userImg)
        formData.append('file', userImg);


        await axiosInstance.patch("http://localhost:8080/api/v1/user/customer", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                setCheckEdit("Edit Successfully")
            })
            .catch((error) => {
                setCheckEdit("Edit Failed!")
                console.log(error)
            })
    }

    const loadFeedBack = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/feedback/${id}/${page}`)
            .then((res) => {
                setFeedBacks(res.data.dtoList)
                setPages(res.data.max)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div style={{ marginTop: 50 }}>
            <div>
                <h2 className={cx("title-myprofile")}>
                    My Profile
                </h2>
            </div>
            <div className={cx("profile")}>
                <Tabs style={{ marginTop: -50 }}>
                    <TabList>
                        <Tab >Profile</Tab>
                        <Tab >Feedback</Tab>
                    </TabList>
                    {/* Detail musician */}
                    <TabPanel>
                        <div className={cx("volt8A")}>
                            <form style={{ marginTop: 20 }}>
                                <table className={classNames("profile-2")}>
                                    <div className={cx("part0")}>
                                        <td>
                                            <div className={cx("text-username0")}>
                                                <td >
                                                    <label style={{fontWeight: 500}} className={cx("login-text")}>Full Name</label>
                                                </td>
                                                <div>
                                                    <input  className={cx("input-username0")} type="text" placeholder value={fullName} onChange={(e) => setFullname(e.target.value)} />
                                                </div>
                                            </div>
                                        </td>
                                    </div>
                                    <div className={cx("part1")}>
                                        <td className={cx("")}>
                                            <td>
                                                <label style={{fontWeight: 500}}  className={cx("text-name")}>Address</label>
                                            </td>
                                            <div className={cx("placeholder-ten")}>
                                                <input className={cx("input-username")} type="text" placeholder value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                        </td>
                                    </div>
                                    <div className={cx("part2")}>
                                        <td>
                                            <div style={{fontWeight: 500}}  className={cx("email-text")}>
                                                Email:
                                            </div>
                                            <div className={cx("email-change")}>
                                                {mail}
                                            </div>
                                        </td>

                                    </div>
                                    <div className={cx("part3")}>
                                        <td style={{fontWeight: 500}} className={cx("phone-number")}>
                                            Phone number
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={cx("part4")} style={{ marginLeft: 65 }}>
                                        <td style={{fontWeight: 500}} className={cx("sex")}>
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

                                    <div style={{ marginLeft: 70, marginTop: 50, fontSize: 18, fontWeight: "bolder" }}>*More Information</div>
                                    <div className={cx("part3")}>
                                        <td style={{fontWeight: 500}} className={cx("phone-number")}>
                                            Prize
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input  className={cx("input-phonenumber")} type="text" placeholder value={prize} onChange={(e) => setPrize(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={cx("part3")}>
                                        <td style={{fontWeight: 500}} className={cx("phone-number")}>
                                            Professional
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={professional} onChange={(e) => setProfessional(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={cx("part3")}>
                                        <td style={{fontWeight: 500}} className={cx("phone-number")}>
                                            Year of Operation
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input  className={cx("input-phonenumber")} type="text" placeholder value={year} onChange={(e) => setYear(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={cx("part5")}>
                                        <td className={cx("save-button")}>
                                        </td>
                                        <td className={cx("button-type")}>
                                            <button type="button" className={cx("button-save-details")} aria-disabled="false" onClick={() => handleEdit()}>Edit</button>
                                        </td>
                                    </div>
                                    <div style={{ color: "green" }}>{checkEdit}</div>

                                </table>
                            </form>
                        </div>
                    </TabPanel>
                    {/* Feedback */}
                    <TabPanel>
                        <div className={cx("volt8A")}>
                            <div style={{ color: '#06c', fontWeight: 'bold' }} className={cx("title-feedback")}> Beat Review</div>
                            {console.log(feedBacks)}
                            {feedBacks.length !== 0 ?

                                <form style={{ marginTop: 20 }}>
                                    {feedBacks.map((feedback) => {
                                        return (
                                            <table className={classNames("profile-2")}>
                                                <div className={cx("part0")}>
                                                    <td>
                                                        <div className={cx("text-username0")}>
                                                            <td>
                                                                <label style={{ fontFamily: 'sono', fontWeight: 400, marginLeft: -2 }} className={cx("login-text")}>{feedback.beat.beatName}</label>
                                                                <label style={{ marginLeft: 20, fontFamily: 'Sono', fontWeight: 400 }} className={cx("login-text")}>{feedback.user.fullName}</label>
                                                            </td>
                                                            <div>
                                                                <input className={cx("input-username0")} type="text" placeholder value={feedback.content} readOnly />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </div>
                                            </table>)
                                    })}
                                    <div className={cx("pagination")}>
                                        <Pagination pages={pages} page={page} setPage={setPage} />
                                    </div>
                                </form>
                                : <div> There are no feedbacks </div>}
                        </div>
                    </TabPanel>
                </Tabs>
                <div className={cx("line")} />
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                {avatar !== "" ?
                                    <img className={cx("box-img")} alt="" src={avatar} />
                                    : <img className={cx("box-img")} alt="" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"} />}
                            </div>
                            <div className={cx("info-user")}>
                                <td style={{ fontSize: 27, fontWeight: 500, display: 'flex', justifyContent: 'center' }}>
                                    {username}
                                </td>
                                <td style={{ fontSize: 18, fontWeight: 400, display: 'flex', justifyContent: 'center' }}>
                                    Musician
                                </td>
                            </div>
                            <input className={cx("img-click")} style={{ marginLeft:110 }} type="file" accept=".jpg,.jpeg,.png" onChange={(e) => setUserImg(e.target.files[0])} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;