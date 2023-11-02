
import classNames from "classnames/bind";
import styles from "./listBeatPurchased.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import audio from "../../assets/audio";
import { ShopContext } from "../../context/shop-context";
import axiosInstance from "../../authorization/axiosInstance";
import Sidebar from "../../components/SideBar";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";
import ListBeatPurchasedBox from "../../components/listBeatPurchasedBox";
import PaginationControlled from "../../components/Pagination";
import Pagination from "../../components/Pagination";

const cx = classNames.bind(styles);

function ListBeatPurchased() {

    //Comment lai cho nay
    const navigate = useNavigate()
    const { setListBeatContext, setDefaultCart, setViewBeatFirstTime, viewBeatFirstTime, checkOut } = useContext(ShopContext)
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);
    const [listGenres, setListGenres] = useState(null);
    const [listMusicianName, setListMusicianName] = useState(null);
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    // const [play, setPlay] = useState(false);
    // const [srcMusic, setSrcMusic] = useState("");
    // const audioRef = useRef();
    const token = useToken();
    const [checkLike, setCheckLike] = useState();
    // 
    // const handleClickAudio = (value) => {

    //     setSrcMusic(`data:audio/mpeg;base64,${atob(value.beatSound)}`);
    //     console.log(srcMusic)

    // }

    // useEffect(() => {
    //     const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    //     setList(data);
    // }, [search])
    // // useEffect(() => {
    // //     const video = document.querySelector('video');
    // //     if (video) {
    // //         video.playbackRate = 1.5;
    // //     }
    // // }, []);

    // //Comment lai cho nay
    // console.log(play);
    //  UseEffect(() => {
    //     if (play) {
    //         audioRef.current.play();

    //     } else {

    //         audioRef.current.pause();
    //     }
    // }, [play])

    useEffect(() => {
        loadBeats()
    }, [checkLike])

    useEffect(() => {
        loadGenres()
    }, [])

    useEffect(() => {
        loadMusicianName()
    }, [])

    const handleSearch = async() => {
        if(!token){
            navigate("/login")
            return
        }
        if(search !== ""){
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/name/${search}`)
        .then((res) => {
            setList(res.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }else{
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/user/${jwtDecode(token).sub}/${page}`)
            .then(res => {
                setList(res.data.dtoList)
                setPages(res.data.max)
                console.log(pages)            
            })
            .catch((error) => {
                if (error.message.includes("Network")) {
                    navigate("/login")
                }
            })
    }
        // setList(data);
    }


    const loadBeats = async () => {
        if(!token){
            navigate("/login")
        }
        console.log(`http://localhost:8080/api/v1/beat/user/${jwtDecode(token).sub}/1`)
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/user/${jwtDecode(token).sub}/${page}`)
            .then(res => {
                setList(res.data.dtoList)
                setPages(res.data.max)
            })
            .catch((error) => {
                if (error.message.includes("Network")) {
                    navigate("/login")
                }
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

    const loadMusicianName = async () => {
        await axiosInstance.get("http://localhost:8080/api/v1/user/musician/name")
            .then((res) => {
                setListMusicianName(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //  
    {console.log(list)}
        return (
            <div className={cx("list-header")}>
                {listGenres && listMusicianName ?
                    <Sidebar listGenres={listGenres} listMusicianName={listMusicianName} page = {2}></Sidebar>
                    : <div></div>}
                <div className={cx("text-header")} >
                    <h1 className={cx("text-welcome")} style={{marginBottom:200}}>
                        My Beat Purchased
                    </h1>

                </div>
                

                {/* <div className={cx("list-beat")}>
                {list.map((item, index) => {
                    return <ListBeatBox key={index} name={item.name} type={item.type} price={item.price} member={item.member} play={play} setPlay={setPlay} />
                })}
            </div> */}
                {list.length !== 0 ?
                    <div>
                        <div className={cx("listbeat")}>
                            {list.map((item) => {
                                return <ListBeatPurchasedBox id={item.id} name={item.beatName} genre={item.genre} price={item.price} view={(item.view / 2).toFixed()} like={item.totalLike} rating={item.rating} vocalRange={item.vocalRange} fullName={item.user.fullName} page={2} />
                            })}
                        </div>
                        <div className={cx("pagination")}>
                            <Pagination pages={pages} page={page} setPage={setPage} />
                        </div>
                    </div>
                    : <div className={cx("sold-out")} style={{ zindex: '1', marginLeft: 800, height: 600 }}> You are not buying any beats<div> Visiting our website to buy the beats </div> </div>}

                {/* <div className={cx("audio")}>

                <div className={cx("control")}>
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

                </div>
                <div className={cx("time-audio")}>
                    <span className={cx("start")}>0:00</span>
                    <input id="progress" className={cx("progress")} type="range" value="0" step="1" min="0" max="100" />
                    <span className={cx("end")}>0:00</span>
                </div>
            </div> */}
                {/* <audio style={{ borderRadius: 10 }} id="audio" ref={audioRef} src={srcMusic}>
            </audio> */}

            </div>

        );
}

export default ListBeatPurchased;