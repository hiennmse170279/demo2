
import classNames from "classnames/bind";
import styles from "./CustomerBeats.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ListBeatBox from "../../components/ListBeatBox";
import videoBg from '../../assets/video/video (2160p).mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

import music from "../../assets/audio/Dont_Coi.mp3";
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan edf",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {

        name: "Hot Xoan xyz",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {
        name: "Hot Xoan wyx",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {

        name: "Hot Xoan abc",
        type: "BeatName",
        price: "85$",
        member: "85",
    },



]

function CustomerBeats() {

    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [play, setPlay] = useState(false);
    const audioRef = useRef();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // setList(data);
    }

    const handleClickBeat = () => {

    }

    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        setList(data);
    }, [search])
    // useEffect(() => {
    //     const video = document.querySelector('video');
    //     if (video) {
    //         video.playbackRate = 1.5;
    //     }
    // }, []);

    console.log(play);

    useEffect(() => {
        if (play) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [play])

    return (
        <div className={cx("list-header")}>
            <div className={cx("text-header")}>
                <h1 className={cx("text-welcome")}>
                   YOUR BEATS
                </h1>

            </div>

            <div className={cx("icon-shopping")}>
                <div className={cx("searchBox")}>
                    <input className={cx("searchInput")} type="text" placeholder="Search Beat..." value={search} onChange={handleSearch} />
                    <button className={cx("searchButton")} href="#">
                        <i className={cx("material-icons")}>
                            <svg className={cx("icon-search")} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 35 35" fill="none">
                                <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" />
                            </svg>
                        </i>
                    </button>
                </div>

            </div>

            <div className={cx("list-beat")}>
                {list.map((item, index) => {
                    return <ListBeatBox key={index} name={item.name} type={item.type} price={item.price} member={item.member} play={play} setPlay={setPlay} />
                })}
            </div>

            <div className={cx("audio")}>
                <div className={cx("image-audio")}>
                    <img className={cx("trending-ellipse")} src={require("../../assets/images/Trending/beautiful-girl-sitting-down-playing-the-piano.webp")}>
                    </img>
                </div>
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

                <audio id="audio" ref={audioRef} src={music}></audio>

            </div>
        </div>

    );
}

export default CustomerBeats;