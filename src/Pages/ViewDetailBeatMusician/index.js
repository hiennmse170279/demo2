import classNames from "classnames/bind";
import styles from "./ViewDetailBeatMusician.module.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import axiosInstance from '../../authorization/axiosInstance';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import useToken from '../../authorization/useToken';
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import music from "../../assets/audio/Dont_Coi.mp3";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const cx = classNames.bind(styles);

function ViewDetailBeatMusician() {
    const { beatId } = useParams();
    const [beatDetail, setBeatDetail] = useState(null)
    const audioRef = useRef();
    const token = useToken();
    const navigate = useNavigate();
    const [beatSoundFull, setBeatSoundFull] = useState("")
    const [beatSoundDemo, setBeatSoundDemo] = useState("")
    const [checkFeedBack, setCheckFeedBack] = useState(null)
    const [checkSell, setCheckSell] = useState(true)
    let userId = ""
    if (token) {
        userId = jwtDecode(token).sub
    }
    // Comment Parent
    useEffect(() => {
        loadDetailBeat()

    }, [beatId])

    useEffect(() => {
        loadSoundFull()
    }, [])

    useEffect(() => {
        loadSoundDemo()
    }, [])

    const loadSoundFull = async () => {
        await axiosInstance(`http://localhost:8080/api/v1/beat/user/full/${beatId}`)
            .then((res) => {
                setBeatSoundFull(res.data.beatSound)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadSoundDemo = async () => {
        await axiosInstance(`http://localhost:8080/api/v1/beat/user/demo/${beatId}`)
            .then((res) => {
                setBeatSoundDemo((res.data.beatSound))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadDetailBeat = async () => {

        await axiosInstance.get(`http://localhost:8080/api/v1/beat/${beatId}`)
            .then((res) => {
                setBeatDetail(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const unSellBeat = async () => {
        await axiosInstance.delete(`http://localhost:8080/api/v1/beat/${beatId}`)
            .then((res) => {
                setCheckSell(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (beatDetail !== null) {
        const dateReleasing = new Date(beatDetail.creatAt)
        const month = dateReleasing.getUTCMonth() + 1
        const day = dateReleasing.getUTCDate()
        const year = dateReleasing.getUTCFullYear()

        return (

            <div className={cx('first-container')}>
                {/* <div className={cx("text-header")}>
                <h1>
                    Beats Name
                </h1>
                <div className={cx('header-submit')}>
                    <Button variant="contained" className={cx('button-1')}>
                        <div>Share Beat</div>
                    </Button>
                </div>
            </div> */}
                <div className={cx('view-detail')}>


                    <div className={cx('view-detail-beat')}>
                        <div className={cx('detail-1')}>
                            <div className={cx('mid-detail-left')}>
                                <div>
                                    <div className={cx('container')}>

                                        <img className={cx('image')} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} />
                                        <div className={cx('middle-image')}>
                                            {/* <div className={cx('text')}>Click</div> */}
                                            <Button variant="contained" className={cx('button-1')} onClick={() => loadSoundFull()}>
                                                <div>Click</div>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={cx('information')}>
                                        {console.log(beatDetail)}
                                        <h1><b>{beatDetail.beatName}</b></h1>
                                        <h4> {beatDetail.user.fullName} &#x2022; 2023 </h4>

                                    </div>
                                    {/* <div className={cx('button-submit')}>
                            <Button variant="contained" className={cx('button-1')}>
                                <div>Follow</div>
                            </Button>
                            <Button variant="contained" className={cx('button-1')}>
                                <div>Message</div>
                            </Button>
                        </div> */}
                                    <audio className={cx("audio")} id="audio" ref={audioRef} controls src={beatSoundDemo}>
                                    </audio>
                                    <audio style={{ marginTop: 50 }} className={cx("audio")} id="audio" ref={audioRef} controls src={beatSoundFull}>
                                    </audio>
                                </div>
                            </div>

                            <div className={cx('mid-detail-right')}>

                                <h3><b>Beat information</b></h3>

                                {/* <div className={cx('list-of-beats')}>
                                <div className={cx('cart')}>
                                    <span>$25.00</span>
                                    <span>Standard License</span>
                                    <span>MP3</span>
                                </div>
                                <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                        <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                        <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                        <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                            </div> */}
                                <div className={cx('list')}>
                                    <div className={cx('genre')}>
                                        <span>&#x2022; Beat's Name: {beatDetail.beatName}</span>
                                        {beatDetail.genres !== null ?
                                            <span>&#x2022; Genre:
                                                {
                                                    beatDetail.genres.map((item, index) => {
                                                        return <span> {item.name},</span>
                                                    })

                                                }
                                            </span>
                                            :
                                            <span>&#x2022; Genre:

                                            </span>
                                        }
                                        <span>&#x2022; Price: ${beatDetail.price}</span>
                                        <span>&#x2022; Views: {(beatDetail.view / 2).toFixed()}</span>
                                        <span>&#x2022; Tone: {beatDetail.vocalRange}</span>
                                        <span>&#x2022; Release date: {day}/{month}/{year}</span>
                                        <span>&#x2022; Total Rating: {(beatDetail.totalRating)}</span>
                                        <span>&#x2022; Rating: {(beatDetail.rating)}</span>
                                        <span>&#x2022; Total Like: {(beatDetail.totalLike)}</span>
                                        {beatDetail.status === 1 ?
                                            <div style={{ textAlign: "center", marginTop: 20 }}>
                                                <Button variant="contained" className={cx('button-1')} onClick={() => loadSoundFull()}>
                                                    <div>UnSell</div>
                                                </Button>
                                            </div>
                                            :
                                            <div style={{ textAlign: "center", marginTop: 20 }}>
                                                <Button variant="contained" className={cx('button-1')} onClick={() => loadSoundFull()}>
                                                    <div>Sell</div>
                                                </Button>
                                            </div>
                                        }
                                        <div style={{ textAlign: "center", marginTop: 20 }}>
                                            <Link to={`/updatebeat/${beatId}`}><Button variant="contained" className={cx('button-1')}>
                                                <div>Update</div>
                                            </Button>
                                            </Link>
                                        </div>
                                        <div>
                                            {checkFeedBack}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment */}
                {/* <div className={cx("audio")}>
                    <div className={cx("image-audio")}>
                        <img className={cx("trending-ellipse")} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")}>
                        </img>
                    </div>
                    <div className={cx("control")}>
                        <div className={cx("btn", "btn-prev")}>
                            <i class="fas fa-step-backward"></i>
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

                    </div>
                    <div className={cx("time-audio")}>
                        <span className={cx("start")}>0:00</span>
                        <input id="progress" className={cx("progress")} type="range" value="0" step="1" min="0" max="100" />
                        <span className={cx("end")}>0:00</span>
                    </div>

                    <audio id="audio" ref={audioRef} src={music}></audio>

                </div> */}
            </div>

        );
    }
    else {
        return <h1 className={cx('first-container')}>Loading Page...</h1>
    }
}
export default ViewDetailBeatMusician;