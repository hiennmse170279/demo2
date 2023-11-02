import classNames from "classnames/bind";
import styles from "./Songs.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import { faComment, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
const cx = classNames.bind(styles);

function Songs() {
    const [listSongs, setListSongs] = useState(null)
    const [listGenres, setListGenres] = useState(null)

    useEffect(() => {
        loadGenres()
    }, [])
    useEffect(() => {
        loadSongs()
    }, [])

    const loadSongs = async () => {
        await axiosInstance.get("http://localhost:8080/api/v1/song")
            .then((res) => {
                setListSongs(res.data)
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
    return (

        <div className={cx("list-songs")}>
            <h1 className={cx("title")}> CHORDS OF SONGS</h1>
            <footer className={cx("Add-Songs")}>
                <Link to="/UploadSong" className={cx("Add-Songs-body", "card-action")}>Add new song</Link>
            </footer>
                <h3 className={cx("title-song-style2")}>  Most Popular Today</h3>   
            {/* <div className={cx("button-chords")}>
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
            </div> */}
            <div className={cx("searchBox")}>
                <input className={cx("searchInput")} style={{ color: 'grey' }} type="text" placeholder="Search Song..." />
                <button className={cx("searchButton")} href="#">
                    <i className={cx("material-icons")}>
                        <svg style={{ marginTop: 25, marginLeft: 20 }} className={cx("icon-search")} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 35 35" fill="none">
                            <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" />
                        </svg>
                    </i>
                </button>
            </div>

            <div className={cx("middle-moinoi")}>
                <div className={cx("panel-content-text-center-padding-both")}>
                    <div className={cx("title-song-style")}>
                        <h2>Songs Style</h2>
                    </div>
                    <div className={cx('sum')}>
                        {listGenres ?
                            <div className={cx("rhythm-list")} id="rhythms">
                                {listGenres.map((item) => {


                                    return <a className={cx("rhythm-item")} data-rhythm="ballad" >
                                        {item.name}
                                    </a>
                                })}

                            </div> : <div></div>}
                    </div>


                </div>


                <div className={cx('body-right')}>
                    {listSongs ?
                        <div className={cx('scroll-container')}>
                            {listSongs.map((song, index) => (
                                <div className={cx('song')} key={index}>
                                    <div className={cx("name-and-musician")}>
                                        <div className={cx('number-song')}>
                                            <span>{index + 1}.</span>
                                        </div>
                                        <div className={cx('song-name')}>
                                            <span style={{ fontWeight: 500 }}>{song.songName}</span>
                                            <span>{song.author}</span>
                                        </div>
                                    </div>
                                    <Popup trigger={<button className={cx("button-page")}>...</button>} position="bottom centers">
                                        <div className={cx("text-all")}>
                                            <div style={{ fontWeight: 500, fontSize: '2rem', padding: 5, display: 'flex', justifyContent: 'center', background: 'white' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                    <path d="M6.25016 19.7917C6.25016 20.9375 7.18766 21.875 8.3335 21.875H16.6668C17.8127 21.875 18.7502 20.9375 18.7502 19.7917V7.29167H6.25016V19.7917ZM19.7918 4.16667H16.146L15.1043 3.125H9.896L8.85433 4.16667H5.2085V6.25H19.7918V4.16667Z" fill="black" />
                                                </svg>
                                                <a>Add to Playlist</a>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            ))}
                        </div>
                        : <div> There are no songs in the system! </div>}

                    {/* <div className={cx('pagination')}>
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10L13 19L14.4 17.5L7 10L14.4 2.5L13 1L4 10Z" fill="black" />
                            </svg>
                        </button>
                        <span>{`Page ${currentPage} of ${totalPages}`}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.00001 1L5.60001 2.5L13 10L5.60001 17.5L7.00001 19L16 10L7.00001 1Z" fill="black" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Songs;
