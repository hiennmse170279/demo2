import React from 'react'
import styles from "./ListSong.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const cx = classNames.bind(styles);

function ListSong() {
    return (
        <div className={cx('container-content')}>
            <div className={cx('title')}>
                <h1>LIST SONGS</h1>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('main-content')}> {/* trang tổng chứa 3 cột*/}
                <div className={cx('loaded-content')}> {/* cột trái*/}
                    <div className={cx('panel')}> {/* body (tổng của 1 khung)*/}
                        <div className={cx('panel-title')}>
                            <h4>Personal information</h4>
                        </div>
                        <div className={cx('register-login')}>
                            <Link to="/login"><b>LOGIN </b></Link>
                            <span>or</span>
                            <Link to="/register"><b> REGISTER </b></Link>
                            <span>to mark favorite songs and create playlists</span>
                        </div>
                        <div className={cx('click-button')}>
                            <Button variant="contained">
                                <div className={cx('icon')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94395 11.79C3.96033 11.685 4.00972 11.588 4.08495 11.513L14.163 1.43497C14.2567 1.34123 14.3839 1.28857 14.5165 1.28857C14.649 1.28857 14.7762 1.34123 14.87 1.43497L18.76 5.32497C18.8534 5.41869 18.9058 5.54563 18.9058 5.67797C18.9058 5.8103 18.8534 5.93724 18.76 6.03097L8.67995 16.11C8.60481 16.1848 8.5078 16.2339 8.40295 16.25L3.80795 16.956C3.73037 16.9679 3.65108 16.9613 3.57649 16.9369C3.50191 16.9124 3.43412 16.8708 3.37862 16.8153C3.32313 16.7598 3.28147 16.692 3.25703 16.6174C3.23259 16.5428 3.22606 16.4635 3.23795 16.386L3.94295 11.792L3.94395 11.79ZM4.90795 12.104L4.33095 15.864L8.08995 15.286L17.698 5.67797L14.517 2.49597L4.90795 12.104Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4721 8.17306L11.9351 4.64306L12.6421 3.93506L16.1781 7.46506L15.4721 8.17306Z" fill="white" />
                                    </svg>
                                </div>
                                <div className={cx('text-button')}>
                                    <span>Post songs</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('panel')}>
                        <div className={cx('panel-title')}>
                            <h4>Song melody</h4>
                        </div>
                        <div className={cx('rhythm-list')}>
                            <div className={cx('rhythm-item')}>Ballad (20070 bài)</div>
                            <div className={cx('rhythm-item')}>Blues (3088 bài)</div>
                            <div className={cx('rhythm-item')}>Disco (1693 bài)</div>
                            <div className={cx('rhythm-item')}>Slow (1522 bài)</div>
                            <div className={cx('rhythm-item')}>Bollero (1267 bài)</div>
                            <div className={cx('rhythm-item')}>Slow Rock (1242 bài)</div>
                            <div className={cx('rhythm-item')}>Valse (747 bài)</div>
                            <div className={cx('rhythm-item')}>Fox (700 bài)</div>
                            <div className={cx('rhythm-item')}>Boston (440 bài)</div>
                            <div className={cx('rhythm-item')}>Rock (432 bài)</div>
                            <div className={cx('rhythm-item')}>Chachacha (366 bài)</div>
                            <div className={cx('rhythm-item')}>Bossa Nova (360 bài)</div>
                            <div className={cx('rhythm-item')}>Pop (360 bài)</div>
                            <div className={cx('rhythm-item')}>Rhumba (213 bài)</div>
                            <div className={cx('rhythm-item')}>Tango (162 bài)</div>
                        </div>
                    </div>
                    <div>
                        <div className={cx('panel-title')}>
                            <h4>New request</h4>
                        </div>
                        <div className={cx('song-list')}>
                            <div className={cx('song-list-small')}>
                                <h4>Cheri Cheri Lady</h4>
                            </div>
                            <div className={cx('song-info')}>
                                <div className={cx('song-time')}>
                                    <span>about 5 hours ago</span>
                                </div>
                                <div className={cx('song-vote')}>
                                    <span>2</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 15" fill="none">
                                        <path d="M13.9062 2.65625C12.2656 2.65625 10.8391 3.39609 10 4.63594C9.16094 3.39609 7.73438 2.65625 6.09375 2.65625C4.85099 2.6577 3.65955 3.15202 2.78079 4.03079C1.90202 4.90955 1.4077 6.10099 1.40625 7.34375C1.40625 9.625 2.82812 11.9992 5.63281 14.3992C6.91801 15.4943 8.30626 16.4624 9.77813 17.2898C9.84634 17.3265 9.92257 17.3457 10 17.3457C10.0774 17.3457 10.1537 17.3265 10.2219 17.2898C11.6937 16.4624 13.082 15.4943 14.3672 14.3992C17.1719 11.9992 18.5938 9.625 18.5938 7.34375C18.5923 6.10099 18.098 4.90955 17.2192 4.03079C16.3405 3.15202 15.149 2.6577 13.9062 2.65625ZM10 16.3367C8.71797 15.5969 2.34375 11.6969 2.34375 7.34375C2.34478 6.34951 2.7402 5.39628 3.44324 4.69324C4.14628 3.9902 5.09951 3.59478 6.09375 3.59375C7.67813 3.59375 9.00859 4.43984 9.56641 5.80234C9.60172 5.88832 9.6618 5.96185 9.739 6.0136C9.81621 6.06535 9.90706 6.09298 10 6.09298C10.0929 6.09298 10.1838 6.06535 10.261 6.0136C10.3382 5.96185 10.3983 5.88832 10.4336 5.80234C10.9914 4.43984 12.3219 3.59375 13.9062 3.59375C14.9005 3.59478 15.8537 3.9902 16.5568 4.69324C17.2598 5.39628 17.6552 6.34951 17.6562 7.34375C17.6562 11.6969 11.282 15.5969 10 16.3367Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div className={cx('song-list-small')}>
                                <h4>Flowers</h4>
                            </div>
                            <div className={cx('song-info')}>
                                <div className={cx('song-time')}>
                                    <span>about 5 hours ago</span>
                                </div>
                                <div className={cx('song-vote')}>
                                    <span>2</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 15" fill="none">
                                        <path d="M13.9062 2.65625C12.2656 2.65625 10.8391 3.39609 10 4.63594C9.16094 3.39609 7.73438 2.65625 6.09375 2.65625C4.85099 2.6577 3.65955 3.15202 2.78079 4.03079C1.90202 4.90955 1.4077 6.10099 1.40625 7.34375C1.40625 9.625 2.82812 11.9992 5.63281 14.3992C6.91801 15.4943 8.30626 16.4624 9.77813 17.2898C9.84634 17.3265 9.92257 17.3457 10 17.3457C10.0774 17.3457 10.1537 17.3265 10.2219 17.2898C11.6937 16.4624 13.082 15.4943 14.3672 14.3992C17.1719 11.9992 18.5938 9.625 18.5938 7.34375C18.5923 6.10099 18.098 4.90955 17.2192 4.03079C16.3405 3.15202 15.149 2.6577 13.9062 2.65625ZM10 16.3367C8.71797 15.5969 2.34375 11.6969 2.34375 7.34375C2.34478 6.34951 2.7402 5.39628 3.44324 4.69324C4.14628 3.9902 5.09951 3.59478 6.09375 3.59375C7.67813 3.59375 9.00859 4.43984 9.56641 5.80234C9.60172 5.88832 9.6618 5.96185 9.739 6.0136C9.81621 6.06535 9.90706 6.09298 10 6.09298C10.0929 6.09298 10.1838 6.06535 10.261 6.0136C10.3382 5.96185 10.3983 5.88832 10.4336 5.80234C10.9914 4.43984 12.3219 3.59375 13.9062 3.59375C14.9005 3.59478 15.8537 3.9902 16.5568 4.69324C17.2598 5.39628 17.6552 6.34951 17.6562 7.34375C17.6562 11.6969 11.282 15.5969 10 16.3367Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div className={cx('song-list-small')}>
                                <h4>Havana</h4>
                            </div>
                            <div className={cx('song-info')}>
                                <div className={cx('song-time')}>
                                    <span>about 5 hours ago</span>
                                </div>
                                <div className={cx('song-vote')}>
                                    <span>2</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 15" fill="none">
                                        <path d="M13.9062 2.65625C12.2656 2.65625 10.8391 3.39609 10 4.63594C9.16094 3.39609 7.73438 2.65625 6.09375 2.65625C4.85099 2.6577 3.65955 3.15202 2.78079 4.03079C1.90202 4.90955 1.4077 6.10099 1.40625 7.34375C1.40625 9.625 2.82812 11.9992 5.63281 14.3992C6.91801 15.4943 8.30626 16.4624 9.77813 17.2898C9.84634 17.3265 9.92257 17.3457 10 17.3457C10.0774 17.3457 10.1537 17.3265 10.2219 17.2898C11.6937 16.4624 13.082 15.4943 14.3672 14.3992C17.1719 11.9992 18.5938 9.625 18.5938 7.34375C18.5923 6.10099 18.098 4.90955 17.2192 4.03079C16.3405 3.15202 15.149 2.6577 13.9062 2.65625ZM10 16.3367C8.71797 15.5969 2.34375 11.6969 2.34375 7.34375C2.34478 6.34951 2.7402 5.39628 3.44324 4.69324C4.14628 3.9902 5.09951 3.59478 6.09375 3.59375C7.67813 3.59375 9.00859 4.43984 9.56641 5.80234C9.60172 5.88832 9.6618 5.96185 9.739 6.0136C9.81621 6.06535 9.90706 6.09298 10 6.09298C10.0929 6.09298 10.1838 6.06535 10.261 6.0136C10.3382 5.96185 10.3983 5.88832 10.4336 5.80234C10.9914 4.43984 12.3219 3.59375 13.9062 3.59375C14.9005 3.59478 15.8537 3.9902 16.5568 4.69324C17.2598 5.39628 17.6552 6.34951 17.6562 7.34375C17.6562 11.6969 11.282 15.5969 10 16.3367Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div className={cx('song-list-small')}>
                                <h4>We Don't Talk Anymore</h4>
                            </div>
                            <div className={cx('song-info')}>
                                <div className={cx('song-time')}>
                                    <span>about 5 hours ago</span>
                                </div>
                                <div className={cx('song-vote')}>
                                    <span>2</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 15" fill="none">
                                        <path d="M13.9062 2.65625C12.2656 2.65625 10.8391 3.39609 10 4.63594C9.16094 3.39609 7.73438 2.65625 6.09375 2.65625C4.85099 2.6577 3.65955 3.15202 2.78079 4.03079C1.90202 4.90955 1.4077 6.10099 1.40625 7.34375C1.40625 9.625 2.82812 11.9992 5.63281 14.3992C6.91801 15.4943 8.30626 16.4624 9.77813 17.2898C9.84634 17.3265 9.92257 17.3457 10 17.3457C10.0774 17.3457 10.1537 17.3265 10.2219 17.2898C11.6937 16.4624 13.082 15.4943 14.3672 14.3992C17.1719 11.9992 18.5938 9.625 18.5938 7.34375C18.5923 6.10099 18.098 4.90955 17.2192 4.03079C16.3405 3.15202 15.149 2.6577 13.9062 2.65625ZM10 16.3367C8.71797 15.5969 2.34375 11.6969 2.34375 7.34375C2.34478 6.34951 2.7402 5.39628 3.44324 4.69324C4.14628 3.9902 5.09951 3.59478 6.09375 3.59375C7.67813 3.59375 9.00859 4.43984 9.56641 5.80234C9.60172 5.88832 9.6618 5.96185 9.739 6.0136C9.81621 6.06535 9.90706 6.09298 10 6.09298C10.0929 6.09298 10.1838 6.06535 10.261 6.0136C10.3382 5.96185 10.3983 5.88832 10.4336 5.80234C10.9914 4.43984 12.3219 3.59375 13.9062 3.59375C14.9005 3.59478 15.8537 3.9902 16.5568 4.69324C17.2598 5.39628 17.6552 6.34951 17.6562 7.34375C17.6562 11.6969 11.282 15.5969 10 16.3367Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div className={cx('song-list-small')}>
                                <h4>I Do</h4>
                            </div>
                            <div className={cx('song-info')}>
                                <div className={cx('song-time')}>
                                    <span>about 5 hours ago</span>
                                </div>
                                <div className={cx('song-vote')}>
                                    <span>2</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 15" fill="none">
                                        <path d="M13.9062 2.65625C12.2656 2.65625 10.8391 3.39609 10 4.63594C9.16094 3.39609 7.73438 2.65625 6.09375 2.65625C4.85099 2.6577 3.65955 3.15202 2.78079 4.03079C1.90202 4.90955 1.4077 6.10099 1.40625 7.34375C1.40625 9.625 2.82812 11.9992 5.63281 14.3992C6.91801 15.4943 8.30626 16.4624 9.77813 17.2898C9.84634 17.3265 9.92257 17.3457 10 17.3457C10.0774 17.3457 10.1537 17.3265 10.2219 17.2898C11.6937 16.4624 13.082 15.4943 14.3672 14.3992C17.1719 11.9992 18.5938 9.625 18.5938 7.34375C18.5923 6.10099 18.098 4.90955 17.2192 4.03079C16.3405 3.15202 15.149 2.6577 13.9062 2.65625ZM10 16.3367C8.71797 15.5969 2.34375 11.6969 2.34375 7.34375C2.34478 6.34951 2.7402 5.39628 3.44324 4.69324C4.14628 3.9902 5.09951 3.59478 6.09375 3.59375C7.67813 3.59375 9.00859 4.43984 9.56641 5.80234C9.60172 5.88832 9.6618 5.96185 9.739 6.0136C9.81621 6.06535 9.90706 6.09298 10 6.09298C10.0929 6.09298 10.1838 6.06535 10.261 6.0136C10.3382 5.96185 10.3983 5.88832 10.4336 5.80234C10.9914 4.43984 12.3219 3.59375 13.9062 3.59375C14.9005 3.59478 15.8537 3.9902 16.5568 4.69324C17.2598 5.39628 17.6552 6.34951 17.6562 7.34375C17.6562 11.6969 11.282 15.5969 10 16.3367Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('loaded-content')}>  {/* body (tổng giữa)*/}
                    <div className={cx('panel')}> {/* tổng 1 khung */}
                        <div className={cx('panel-title')}>
                            <h4>Hottest today</h4>
                        </div>
                        <div className={cx('hot-today')}> {/* tổng 1 khung nhỏ*/}
                            <div className={cx('a')}>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>1. Shape of you</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Ed Sheeran</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>2. Believer</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Imagine Dragons</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>3. Despacito</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Luis Fonsi, Daddy</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>4. Bad Things</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Machine Gun Kelly</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>5. Rockabye</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Sean Paul&Anne-mMrie</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>6. Havana</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Camila Cabello</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>7. Thunder</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Imagine Dragons</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>8. Don't Wanna Know</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Maroon 5</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>9. Something Just Like This</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>The Chainsmokers</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>10. Perfect</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Ed Sheeran</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>11. That's What I Like</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Bruno Mars</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>12. Say You Won't Let Go</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>James Arthur</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>13. There's Nothing Holdin'Me Back</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Shawn Mendes</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>14. Too Good At Goodbyes</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Sam Smith</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>15. Passionfruit</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Drake</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>16. Look What you Made Me Do</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Taylor Swift</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>17. Goosebumps</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Travis Scott</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>18. Humble.</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Kendrick Lamar</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>19. Love On The Brain</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Rihanna</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>20. Unforgettable</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>French Montana</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('loaded-content')}> {/* body (tổng phải)*/}
                    <div className={cx('panel')}>
                        <div className={cx('panel-title')}>
                            <h4>Emerging</h4>
                        </div>
                        <div className={cx('hot-today')}>
                            <div className={cx('hot-today-one')}>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M8.57168 3.58849C8.71975 3.34169 8.92921 3.13744 9.17967 2.99564C9.43012 2.85383 9.71303 2.7793 10.0008 2.7793C10.2887 2.7793 10.5716 2.85383 10.822 2.99564C11.0725 3.13744 11.2819 3.34169 11.43 3.58849L18.095 14.6968C18.247 14.9498 18.3291 15.2386 18.3329 15.5337C18.3367 15.8288 18.262 16.1197 18.1166 16.3765C17.9712 16.6333 17.7601 16.8469 17.5051 16.9954C17.2501 17.1439 16.9601 17.2221 16.665 17.2218H3.33501C3.03987 17.2221 2.74997 17.1439 2.49493 16.9954C2.23989 16.8469 2.02886 16.6333 1.88342 16.3765C1.73798 16.1197 1.66334 15.8288 1.66713 15.5337C1.67092 15.2386 1.75301 14.9498 1.90501 14.6968L8.57168 3.58849Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>1. Redbone</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Childish Gambino</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M8.57168 3.58849C8.71975 3.34169 8.92921 3.13744 9.17967 2.99564C9.43012 2.85383 9.71303 2.7793 10.0008 2.7793C10.2887 2.7793 10.5716 2.85383 10.822 2.99564C11.0725 3.13744 11.2819 3.34169 11.43 3.58849L18.095 14.6968C18.247 14.9498 18.3291 15.2386 18.3329 15.5337C18.3367 15.8288 18.262 16.1197 18.1166 16.3765C17.9712 16.6333 17.7601 16.8469 17.5051 16.9954C17.2501 17.1439 16.9601 17.2221 16.665 17.2218H3.33501C3.03987 17.2221 2.74997 17.1439 2.49493 16.9954C2.23989 16.8469 2.02886 16.6333 1.88342 16.3765C1.73798 16.1197 1.66334 15.8288 1.66713 15.5337C1.67092 15.2386 1.75301 14.9498 1.90501 14.6968L8.57168 3.58849Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>1. Sign Of the Times</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Harry Styles</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M8.57168 3.58849C8.71975 3.34169 8.92921 3.13744 9.17967 2.99564C9.43012 2.85383 9.71303 2.7793 10.0008 2.7793C10.2887 2.7793 10.5716 2.85383 10.822 2.99564C11.0725 3.13744 11.2819 3.34169 11.43 3.58849L18.095 14.6968C18.247 14.9498 18.3291 15.2386 18.3329 15.5337C18.3367 15.8288 18.262 16.1197 18.1166 16.3765C17.9712 16.6333 17.7601 16.8469 17.5051 16.9954C17.2501 17.1439 16.9601 17.2221 16.665 17.2218H3.33501C3.03987 17.2221 2.74997 17.1439 2.49493 16.9954C2.23989 16.8469 2.02886 16.6333 1.88342 16.3765C1.73798 16.1197 1.66334 15.8288 1.66713 15.5337C1.67092 15.2386 1.75301 14.9498 1.90501 14.6968L8.57168 3.58849Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>1. Attention</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Charlie Puth</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M8.57168 3.58849C8.71975 3.34169 8.92921 3.13744 9.17967 2.99564C9.43012 2.85383 9.71303 2.7793 10.0008 2.7793C10.2887 2.7793 10.5716 2.85383 10.822 2.99564C11.0725 3.13744 11.2819 3.34169 11.43 3.58849L18.095 14.6968C18.247 14.9498 18.3291 15.2386 18.3329 15.5337C18.3367 15.8288 18.262 16.1197 18.1166 16.3765C17.9712 16.6333 17.7601 16.8469 17.5051 16.9954C17.2501 17.1439 16.9601 17.2221 16.665 17.2218H3.33501C3.03987 17.2221 2.74997 17.1439 2.49493 16.9954C2.23989 16.8469 2.02886 16.6333 1.88342 16.3765C1.73798 16.1197 1.66334 15.8288 1.66713 15.5337C1.67092 15.2386 1.75301 14.9498 1.90501 14.6968L8.57168 3.58849Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>1. Whatever It Takes</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Imagine Dragons</span>
                                    </div>
                                </div>
                                <div className={cx('hot-today-list')}>
                                    <div className={cx('hot-today-view')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M8.57168 3.58849C8.71975 3.34169 8.92921 3.13744 9.17967 2.99564C9.43012 2.85383 9.71303 2.7793 10.0008 2.7793C10.2887 2.7793 10.5716 2.85383 10.822 2.99564C11.0725 3.13744 11.2819 3.34169 11.43 3.58849L18.095 14.6968C18.247 14.9498 18.3291 15.2386 18.3329 15.5337C18.3367 15.8288 18.262 16.1197 18.1166 16.3765C17.9712 16.6333 17.7601 16.8469 17.5051 16.9954C17.2501 17.1439 16.9601 17.2221 16.665 17.2218H3.33501C3.03987 17.2221 2.74997 17.1439 2.49493 16.9954C2.23989 16.8469 2.02886 16.6333 1.88342 16.3765C1.73798 16.1197 1.66334 15.8288 1.66713 15.5337C1.67092 15.2386 1.75301 14.9498 1.90501 14.6968L8.57168 3.58849Z" fill="#FFD233" />
                                        </svg>
                                        <span>4198</span>
                                    </div>
                                    <div className={cx('hot-today-songs')}>
                                        <span>1. Ready For It?</span>
                                    </div>
                                    <div className={cx('hot-today-singers')}>
                                        <span>Taylor Swift</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('panel')}>
                        <div className={cx('panel-title')}>
                            <h4>New chords</h4>
                        </div>
                        <div className={cx('emerging')}>
                            <div className={cx('song-title')}>
                                <h4>Anh có đến - Ngọc Quý</h4>
                            </div>
                            <div className={cx('song-infor')}>
                                <div className={cx('song-poster-date')}>
                                    <span>Uyen Thu, 15 tháng 10, 2023</span>
                                </div>
                                <div className={cx('icon-eye')}>
                                    <div className={cx('b')}>
                                        <span>74</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cx('emerging')}>
                            <div className={cx('song-title')}>
                                <h4>Anh có đến - Ngọc Quý</h4>
                            </div>
                            <div className={cx('song-infor')}>
                                <div className={cx('song-poster-date')}>
                                    <span>Uyen Thu, 15 tháng 10, 2023</span>
                                </div>
                                <div className={cx('icon-eye')}>
                                    <div className={cx('b')}>
                                        <span>74</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cx('emerging')}>
                            <div className={cx('song-title')}>
                                <h4>Anh có đến - Ngọc Quý</h4>
                            </div>
                            <div className={cx('song-infor')}>
                                <div className={cx('song-poster-date')}>
                                    <span>Uyen Thu, 15 tháng 10, 2023</span>
                                </div>
                                <div className={cx('icon-eye')}>
                                    <div className={cx('b')}>
                                        <span>74</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cx('emerging')}>
                            <div className={cx('song-title')}>
                                <h4>Anh có đến - Ngọc Quý</h4>
                            </div>
                            <div className={cx('song-infor')}>
                                <div className={cx('song-poster-date')}>
                                    <span>Uyen Thu, 15 tháng 10, 2023</span>
                                </div>
                                <div className={cx('icon-eye')}>
                                    <div className={cx('b')}>
                                        <span>74</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cx('emerging')}>
                            <div className={cx('song-title')}>
                                <h4>Anh có đến - Ngọc Quý</h4>
                            </div>
                            <div className={cx('song-infor')}>
                                <div className={cx('song-poster-date')}>
                                    <span>Uyen Thu, 15 tháng 10, 2023</span>
                                </div>
                                <div className={cx('icon-eye')}>
                                    <div className={cx('b')}>
                                        <span>74</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListSong;
