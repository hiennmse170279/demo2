import React, { useEffect, useState } from 'react';
import styles from "./ListOfSong.module.scss";
import classNames from "classnames/bind";
import axiosInstance from '../../authorization/axiosInstance';
const cx = classNames.bind(styles);

function ListOfSong() {
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

    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);

    // const totalPages = Math.ceil(songs.length / itemsPerPage);

    // const handleNextPage = () => {
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };

    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentSongs = songs.slice(startIndex, endIndex);

    return (
        <div className={cx('listofsong')}>
            <div className={cx('text-header')}>
                <h1>List Of Song</h1>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('body')}>
                <div className={cx('body-left')}>
                    <div className={cx('header-bodyleft')}>
                        <h2>Genre</h2>
                    </div>
                    <div className={cx('option')}>
                        <div>
                        {listGenres ?
                                <div className={cx("rhythm-list")} id="rhythms">
                                    {listGenres.map((item) => {
                                        return <label className={cx('container')}>
                                        <input className={cx('custom-radio')} type="radio" name="radio" />
                                        <span className={cx('checkmark')}>{item.name}</span>
                                    </label>
                                    })}

                                </div> : <div></div>}
                        </div>
                        {/* Add more labels as needed */}
                    </div>
                </div>
                <div className={cx('body-right')}>
                    {listSongs ? 
                    <div className={cx('scroll-container')}>
                        {listSongs.map((song, index) => (
                            <div className={cx('song')} key={index}>
                                <div className={cx('number-song')}>
                                    <span>{index + 1}</span>
                                </div>
                                <div className={cx('song-name')}>
                                    <span>{song.songName}</span>
                                    <span>{song.author}</span>
                                </div>
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

export default ListOfSong;
