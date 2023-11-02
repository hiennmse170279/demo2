import { Button } from "@mui/material";
import styles from "./UploadSong.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { React, useState, useRef, useEffect } from "react";
import MarkdownPreview from '../../MarkdownPreview';
import TextArea from "antd/es/input/TextArea";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";

import IMG_A7 from "../../assets/ImageForChords/Guitar/A/A7.png";
import IMG_C7 from "../../assets/ImageForChords/Guitar/C/C7.png";
import IMG_D7 from "../../assets/ImageForChords/Guitar/D/D7.png";
import Popup from "reactjs-popup";

const cx = classNames.bind(styles);

const TONE = [
    {
        name_tone: "[A7]",
        img: IMG_A7,
    }, {
        name_tone: "[C7]",
        img: IMG_C7,
    }, {
        name_tone: "[D7]",
        img: IMG_D7,
    }
]
function UploadSong() {
    const [vocalRange, setVocalRange] = useState("");
    const [inputGenres, setInputGenres] = useState("");
    let genres = []
    const [singer, setSinger] = useState("");
    const [tone, setTone] = useState("");
    const [songUrl, setSongUrl] = useState("");
    const [songName, setSongName] = useState("");
    const [description, setDescription] = useState("");
    const [listGenres, setListGenres] = useState(null)
    const [listChords, setListChords] = useState(null)
    const token = useToken()
    let userid = "";
    if (token) {
        userid = jwtDecode(token).sub
    }
    const [listTone, setListTone] = useState([]);
    const songInput = { description, songName, userid, singer, tone, songUrl, genres, vocalRange }
    const regValue = useRef(/\[[^\]]{0,6}\]/g);
    const navigate = useNavigate()


    useEffect(() => {
        let tmp = description.match(regValue.current);
        if (Array.isArray(tmp)) {
            const a = tmp.map((item) => {
                let check = tone.includes(item);
                if (check) return "da hop le";
                else return "khong hop le"
            })
            console.log(a);
        }
    }, [description])

    useEffect(() => {
        loadGenres()
    }, [])
    useEffect(() => {
        loadChords()
    }, [])

    const handleUploadSong = async () => {
        if (!token) {
            navigate("/login")
        }
        console.log(inputGenres)
        const values = inputGenres.split(',');
        console.log(values[0])
        for (let i = 0; i < values.length; i++) {
            genres.push(values[i])
        }
        console.log(genres)
        if (description === "" || songName === "" || userid === "" || singer === "" || tone === "" || songUrl === "" || genres[0] === "" || vocalRange === "") {
            alert("Please fill in all fields!")
            return;
        }
        await axiosInstance.post("http://localhost:8080/api/v1/song/user", songInput)
            .then((res) => {
                alert("Upload Successfully")
                navigate("/songs")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadGenres = async () => {
        await axiosInstance.get("http://localhost:8080/api/v1/genre")
            .then((res) => {
                setListGenres(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadChords = async () => {
        await axiosInstance.get("http://localhost:8080/chord/guitar")
            .then((res) => {
                setListChords(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    /* 
        [
            {
                id: 1,
                name: 
                Img: 
                check: true || false
            }
        ]

    */

    useEffect(() => {
        let tmp = description.match(regValue.current); // Text .....
        if (Array.isArray(tmp)) {
            const a = tmp.filter((item) => {
                let index_tone = listChords.findIndex((x) => x.chordName === item);
                if (index_tone >= 0) {
                    let tone = listTone.some((x) => x.name_tone === item);
                    if (!tone) {
                        setListTone(prev => [...prev, {
                            name_tone: listChords[index_tone].chordName,
                            img: listChords[index_tone].image,
                            check: true,
                        }])
                    }
                } else {
                    let tone = listTone.some((x) => x.name_tone === item);
                    if (!tone) {
                        setListTone(prev => [...prev, {
                            name_tone: item,
                            img: null,
                            check: false,
                        }])
                    }
                }
            })
        }
        setListTone(prev => prev.reduce((finalArray, current) => {
            let obj = finalArray.find((item) => item.name_tone === current.name_tone);
            if (obj) {
                return finalArray;
            }
            return finalArray.concat([current]);
        }, [])
        )
    }, [description])

    console.log("listTone: ", listTone);
    if (listGenres !== null) {
        return (
            <div className={cx('page-content')}> {/* trang tổng */}
                {console.log(songInput)}
                <div className={cx('container-16')}>
                    <h1>Upload new song</h1>
                    <div className={cx('grid-9')}> {/* trang tổng gổm 2 div trái phải*/}
                        <div className={cx('page-content-left')}> {/* trang tổng bên trái*/}
                            <h2><b>Song name: </b></h2>
                            <input
                                type="text"
                                placeholder="Ex: Silent Night"
                                value={songName}
                                className={cx('input-song-name')}
                                onChange={(event) => setSongName(event.target.value)}
                            />
                            <h2><b>Lyrics and chords: </b></h2>
                            {/* <div className={cx('toolbox')} style={{ width: '80%' }}>
                            <div className={cx('pull-left')}>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M6.25005 4.66699L4.16672 5.83366L5.33338 3.75033L4.16672 1.66699L6.25005 2.83366L8.33338 1.66699L7.16672 3.75033L8.33338 5.83366L6.25005 4.66699ZM16.25 12.8337L18.3334 11.667L17.1667 13.7503L18.3334 15.8337L16.25 14.667L14.1667 15.8337L15.3334 13.7503L14.1667 11.667L16.25 12.8337ZM18.3334 1.66699L17.1667 3.75033L18.3334 5.83366L16.25 4.66699L14.1667 5.83366L15.3334 3.75033L14.1667 1.66699L16.25 2.83366L18.3334 1.66699ZM11.1167 10.6503L13.15 8.61699L11.3834 6.85033L9.35005 8.88366L11.1167 10.6503ZM11.975 6.07533L13.925 8.02533C14.25 8.33366 14.25 8.87533 13.925 9.20033L4.20005 18.9253C3.87505 19.2503 3.33338 19.2503 3.02505 18.9253L1.07505 16.9753C0.750049 16.667 0.750049 16.1253 1.07505 15.8003L10.8 6.07533C11.125 5.75033 11.6667 5.75033 11.975 6.07533Z" fill="#699BF7" />
                                            </svg>
                                        </div>
                                        <span>Định dạng</span>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <g clip-path="url(#clip0_1245_129)">
                                                    <path d="M0.209196 16.692L4.64286 12.8125L3.17313 11.6004C2.49813 11.0098 2.97616 10 3.93071 10H8.93071C9.52246 10 10 10.4197 10 10.9375V15.3125C10 16.1477 8.84808 16.566 8.17313 15.9754L6.78571 14.6875L2.35205 18.567C2.07313 18.811 1.62085 18.811 1.34192 18.567L0.209196 17.5758C-0.0697322 17.3318 -0.0697322 16.936 0.209196 16.692ZM19.7908 3.30805L15.3571 7.1875L16.8269 8.39957C17.5019 8.9902 17.0238 10 16.0693 10H11.0693C10.4775 10 10 9.58027 10 9.0625V4.6875C10 3.85227 11.1519 3.43398 11.8269 4.02457L13.2143 5.3125L17.6479 1.43305C17.9269 1.18898 18.3792 1.18898 18.6581 1.43305L19.7908 2.42418C20.0697 2.66824 20.0697 3.06398 19.7908 3.30805Z" fill="#699BF7" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1245_129">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Nhập dòng</span>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 4.16699V15.8337M10 4.16699L15 9.16699M10 4.16699L5 9.16699" stroke="#699BF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 4.16699V15.8337M10 15.8337L15 10.8337M10 15.8337L5 10.8337" stroke="#699BF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M17.5782 6.28155L14.3438 3.04718C13.9922 2.69557 13.5153 2.49805 13.018 2.49805C12.5208 2.49805 12.0439 2.69557 11.6922 3.04718L2.42193 12.3175C2.07033 12.6691 1.8728 13.146 1.8728 13.6433C1.8728 14.1405 2.07033 14.6174 2.42193 14.9691L4.77037 17.3175C4.82864 17.3757 4.89785 17.4218 4.974 17.4532C5.05015 17.4846 5.13176 17.5006 5.21412 17.5003H16.8751C17.0408 17.5003 17.1998 17.4345 17.317 17.3172C17.4342 17.2 17.5001 17.0411 17.5001 16.8753C17.5001 16.7095 17.4342 16.5506 17.317 16.4334C17.1998 16.3161 17.0408 16.2503 16.8751 16.2503H10.2579L17.5782 8.93312C17.9298 8.58149 18.1273 8.10459 18.1273 7.60733C18.1273 7.11007 17.9298 6.63318 17.5782 6.28155ZM16.693 8.04718L12.5001 12.2417L8.38365 8.1253L12.5782 3.93312C12.6362 3.875 12.7052 3.82891 12.781 3.79745C12.8569 3.766 12.9382 3.74981 13.0204 3.74981C13.1025 3.74981 13.1838 3.766 13.2597 3.79745C13.3356 3.82891 13.4045 3.875 13.4626 3.93312L16.6954 7.16593C16.8125 7.28313 16.8783 7.44204 16.8783 7.60772C16.8783 7.77341 16.8125 7.93232 16.6954 8.04952L16.693 8.04718Z" fill="#699BF7" />
                                            </svg>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('pull-right')}>
                                <Button className={cx('button')}>
                                    <div className={cx('button-icon')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                        </svg>
                                    </div>
                                    <span>Xem trước</span>
                                </Button>
                            </div>
                        </div> */}
                            <div className={cx('song-lyric')}>
                                <textarea style={{ width: '80%', resize: 'none', padding: 15 }} className={cx("textarea-box")} value={description} id="ABC" name="ABC" rows="20" cols="174" onChange={e => setDescription(e.target.value)}></textarea>
                            </div>
                            <div className={cx('toolbox-bottom')} style={{ width: '80%' }}>
                                <span>Chords: </span>
                            </div>
                            <h2><b>Chords used:</b></h2>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }} className={cx("list-tone")}>
                                {listTone.map((item, index) => <span key={index} style={{ fontSize: 20 }}>
                                    <div className={cx("tone-item")}>
                                        <h5 className={cx("name-tone")}>{item.name_tone}</h5>
                                        {item.check === true ? <img src={item.img} alt={item.name_tone} /> : <span>Chord is not supported</span>}
                                    </div>
                                </span>)}
                            </div>
                            <div className={cx('blue-header')}>
                                <h4>Preview</h4>
                            </div>
                            <div className={cx('review-panel')} style={{ width: '80%' }}>
                                <hr />
                                <MarkdownPreview inputProps={{ maxLength: 1200 }} markdown={description} />
                            </div>
                            <div className={cx('grid-5-alpha')} style={{ width: '80%' }}>
                                <div className={cx('song-singers')}>
                                    <h2><b>Singer:</b></h2>
                                    <input
                                        type="text"
                                        placeholder="Ex: Michael Buble"
                                        value={singer}
                                        className={cx('input-song-name')}
                                        onChange={(event) => setSinger(event.target.value)}
                                    />
                                </div>
                                <div className={cx('song-genres')}>
                                    <h2><b>Genres:</b></h2>
                                    <Popup trigger={<input
                                        type=""
                                        placeholder="Ex: Pop"
                                        value={inputGenres}
                                        className={cx('input-song-name')}
                                        onChange={(event) => setInputGenres(event.target.value)}
                                    />} position="right center">
                                        {listGenres.map((item) => {
                                            return <div >{item.name}</div>
                                        })}
                                    </Popup>

                                    <br></br>
                                    {/* <button onClick={handleAddToList}>Add to list genre</button> */}
                                </div>
                                <div className={cx('tone-info')}>
                                    <h2><b>Tone:</b></h2>
                                    <input
                                        type="text"
                                        placeholder="Ex: Am"
                                        value={tone}
                                        className={cx('input-song-name')}
                                        onChange={(event) => setTone(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={cx('blue-header')} style={{ width: '80%' }}>
                            </div>
                            <div className={cx('grid-3-alpha')} style={{ width: '80%' }}>
                                <div className={cx('singer-info')}>
                                    <h2><b>Vocal Range:</b></h2>
                                    <input
                                        type="text"
                                        placeholder="Ex: C3 to D6"
                                        value={vocalRange}
                                        className={cx('input-song-name')}
                                        onChange={(event) => setVocalRange(event.target.value)}
                                    />
                                </div>
                                <div className={cx('link-music')}>
                                    <h2><b>Link:</b></h2>
                                    <input
                                        type="text"
                                        placeholder="Ex: http://mp3.zing.vn/..."
                                        value={songUrl}
                                        className={cx('input-song-name')}
                                        onChange={(event) => setSongUrl(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={cx('add-singer')} style={{ width: '80%' }} onClick={() => handleUploadSong()}>
                                <footer className={cx("Add-Songs")} >
                                    <Link to="/UploadSong" className={cx("Add-Songs-body", "card-action")}>Add new song</Link>
                                </footer>
                            </div>
                        </div>

                        <div className={cx('page-content-right')}> {/* trang tổng bên phải*/}
                            <div className={cx('white-box')}>
                                <div className={cx('white-box-final')}>
                                    <div className={cx('white-box-text')}>
                                        <h3><b>Get your post correctness</b></h3>
                                        <h4>You can refer to the suggestions below</h4>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {description === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>
                                            <div>
                                                {description === "" && <span>Existed lyrics and chords</span>}
                                                {description !== "" && <span style={{ color: "green" }}>Existed lyrics and chords </span>}
                                                {description !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {songName === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>
                                            <div>
                                                {songName === "" && <span>Existed 1 Song name</span>}
                                                {songName !== "" && <span style={{ color: "green" }}>Existed 1 Song name </span>}
                                                {songName !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {songUrl === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>

                                            <div>
                                                {songUrl === "" && <span>Existed 1 Song Url</span>}
                                                {songUrl !== "" && <span style={{ color: "green" }}>Existed 1 Song Url </span>}
                                                {songUrl !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {singer === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>
                                            <div>
                                                {singer === "" && <span>Existed 1 Singer</span>}
                                                {singer !== "" && <span style={{ color: "green" }}> Existed 1 Singer </span>}
                                                {singer !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {tone === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>
                                            <div>
                                                {tone === "" && <span>Existed 1 Tone</span>}
                                                {tone !== "" && <span style={{ color: "green" }}> Existed 1 Tone </span>}
                                                {tone !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {inputGenres === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>
                                            <div>
                                                {inputGenres === "" && <span>Existed 1 Genres</span>}
                                                {inputGenres !== "" && <span style={{ color: "green" }}>Existed 1 Genres </span>}
                                                {inputGenres !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('check-failed-pass')}>
                                        <div className={cx('icon-times-left')}>
                                            {vocalRange === "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>}

                                        </div>
                                        <div className={cx('text-failed')}>
                                            <div>
                                                {vocalRange === "" && <span>Existed 1 Vocal Range</span>}
                                                {vocalRange !== "" && <span style={{ color: "green" }}>Existed 1 Vocal Range </span>}
                                                {vocalRange !== "" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('white-box-text')}>
                                        <h6>After posting, you can still add/edit song information. Please note to monitor your post if Admin has feedback on your post.</h6>
                                        <h6>Thank you for your contribution!</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

export default UploadSong;