
import classNames from "classnames/bind";
import styles from "./ViewDetailsMusicain.module.scss";
import { Link, useParams } from "react-router-dom";
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
    const [avatar, setAvatar] = useState("")
    const [prize, setPrize] = useState("")
    const [professional, setProfessional] = useState("")
    const [year, setYear] = useState("")
    const [username, setUserName] = useState("")
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const [feedBacks, setFeedBacks] = useState([]);
    const { id } = useParams()


    useEffect(() => {
        loadDetailUser()
    }, [])
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
                    Musician Profile
                </h2>
            </div>
            <div className={cx("profile")}>
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                {avatar !== "" ?
                                    <img className={cx("box-img")} alt="" src={avatar} />
                                    : <img className={cx("box-img")} alt="" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"} />}
                            </div>
                            <div className={cx("info-user")}>
                                <td style={{ fontSize: 30, display: 'flex', justifyContent: 'center' }}>
                                    {username}
                                </td>
                                <td style={{ fontSize: 20, display: 'flex', justifyContent: 'center' }}>
                                    Musician
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                    <label className={cx("login-text")}>Full Name</label>
                                                </td>
                                                <div>
                                                    <input className={cx("input-username0")} type="text" placeholder value={fullName} readOnly />
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
                                                <input className={cx("input-username")} type="text" placeholder value={address} readOnly />
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
                                    <div className={cx("part3")}>
                                        <td className={cx("phone-number")}>
                                            Phone number
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={phone} readOnly />
                                        </div>
                                    </div>
                                    <div className={cx("part3")}>
                                        <td className={cx("phone-number")}>
                                            Sex
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={phone} readOnly />
                                        </div>
                                    </div>

                                    <div style={{ marginLeft: 70, marginTop: 50, fontSize: 18, fontWeight: "bolder" }}>*More Information</div>
                                    <div className={cx("part3")}>
                                        <td className={cx("phone-number")}>
                                            Prize
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={prize} readOnly />
                                        </div>
                                    </div>
                                    <div className={cx("part3")}>
                                        <td className={cx("phone-number")}>
                                            Professional
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={professional} readOnly />
                                        </div>
                                    </div>
                                    <div className={cx("part3")}>
                                        <td className={cx("phone-number")}>
                                            Year of Operation
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value={year} readOnly />
                                        </div>
                                    </div>
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
            </div>
        </div>
    );
}

export default MyProfile;