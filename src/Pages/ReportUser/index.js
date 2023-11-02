
import classNames from "classnames/bind";
import styles from "./ReportUser.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
import { red } from "@mui/material/colors";
import Popup from "reactjs-popup";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import 'react-tabs/style/react-tabs.css';
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "abc",
    },
]
function ReportUser() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [play, setPlay] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [ten, setTen] = useState("");
    const contentStyle = { background: 'white', width: 460, height: 370, borderRadius: 20 };
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch1 = (e) => {
        setTen(e.target.value);
    }


    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        setList(data);
    }, [search])
    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(ten.toLowerCase()));
        setList(data);
    }, [ten])
    return (
        <div>
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
                                                    <label className={cx("login-text")}>Full Name</label>
                                                </td>
                                                <div>
                                                    <input className={cx("input-username0")} type="text" value="User Name" placeholder onChange={handleSearch} />
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
                                                <input className={cx("input-username")} type="text" placeholder value="User Name" onChange={handleSearch1} />
                                            </div>
                                        </td>
                                    </div>
                                    <div className={cx("part2")}>
                                        <td>
                                            <div className={cx("email-text")}>
                                                Email:
                                            </div>
                                            <div className={cx("email-change")}>
                                                do******@fpt.edu.vn
                                            </div>
                                            <button className={cx("email-button")}>Change</button>
                                        </td>

                                    </div>
                                    <div className={cx("part3")}>
                                        <td className={cx("phone-number")}>
                                            Phone number
                                        </td>
                                        <div className={cx("placeholder-ten")}>
                                            <input className={cx("input-phonenumber")} type="text" placeholder value="095-XXX-XXX-XXX" onChange={handleSearch1} />
                                        </div>
                                    </div>
                                </table>
                            </form>
                        </div>
                    </TabPanel>
                    {/* Feedback */}
                    <TabPanel>
                        <div className={cx("volt8A")}>
                            <div style={{ color: 'red', fontWeight: 'bold', fontSize: '3.2rem', display: 'flex', justifyContent: 'center' }} className={cx("title-feedback")}>List Reported</div>
                            <div style={{ fontSize: 18, fontWeight: 500, marginLeft: 70, marginTop: 20 }} className={cx("title-feedback")}> User has been reported:</div>
                            <form style={{ marginTop: 20 }}>
                                <table className={classNames("profile-2")}>
                                    <div className={cx("part0")}>
                                        <td>
                                            <div className={cx("text-username0")}>
                                                <td>
                                                    <label style={{ fontFamily: 'Sono', fontWeight: 400 }} className={cx("login-text")}>Vo Quoc Doanh</label>
                                                </td>
                                                <div>
                                                    <input className={cx("input-username0")} type="text" placeholder value="Beat hay qua" onChange={handleSearch} />
                                                </div>
                                            </div>
                                        </td>
                                    </div>
                                </table>
                            </form>
                            <div className={cx("part5")}>
                                <Popup className={cx("part-5")} style={{ width: "120%" }} trigger={<button type="button" className={cx("button-save-details")} aria-disabled="false" >Ban</button>}  {...{ contentStyle }} position="top center">
                                    <div className={cx("text-all")} style={{ padding: 10 }}>
                                        <div style={{ display: 'grid' }}>
                                            <td style={{ fontWeight: 'bold', fontSize: "2.2rem", display:'flex', justifyContent:'center', color: 'red' }}>Report</td>
                                            <td style={{ paddingTop: 15, paddingLeft: 30 }}>
                                                <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar4.png"} />
                                                <a href="#" style={{ fontWeight: 'bold' }}>Mila Kunis</a>
                                            </td>
                                        </div>
                                        <textarea className={cx("text-des")} style={{ resize: 'none', width: '385px', border: 1, height: 150, marginLeft: 24, marginTop: 20, marginBottom: 20, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12 }} />
                                        <td className={cx("button-type")}>
                                            <button type="button" className={cx("button-send")} aria-disabled="false" >Send</button>
                                        </td>
                                    </div>
                                </Popup>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
                <div className={cx("line")} />
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                <img className={cx("box-img")} alt="" />
                            </div>
                            {/* <input className={cx("img-click")} type="file" accept=".jpg,.jpeg,.png" /> */}
                            <div className={cx("info-user")}>
                                <td>
                                    User Name
                                </td>
                                <td style={{ marginLeft: 10 }}>
                                    Customer
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportUser;