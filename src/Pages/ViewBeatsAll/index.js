
import classNames from "classnames/bind";
import styles from "./ViewBeatsAll.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
import ListBeat2 from "../ListBeat2";
import SideBar from "../../components/SideBar";
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "abc",
    },
]
function ViewBeatsAll() {
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
    return (
        <div className={cx("all")}>

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
            <div className={cx("three-button")}>
                <div className={cx("button-chords")}>
                    <div className={cx("line")}>
                    </div>
                    <Link to="/chordsdetails">
                        <button variant="contained" className={cx("button")}>
                            <div className={cx("text")}>Chords</div>
                        </button>
                    </Link>
                    <Link to="/songs">
                        <button variant="contained" className={cx("button")}>
                            <div className={cx("text")}>Songs</div>
                        </button>
                    </Link>
                    <Link to="/listbeat2">
                        <button variant="contained" className={cx("button")}>
                            <div className={cx("text")}>List Beat</div>
                        </button>
                    </Link>
                    <div className={cx("line")}>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default ViewBeatsAll;