// import React from 'react'
import { Button } from "@mui/material";
import styles from "./ViewDetailSong.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import React, { useState } from 'react';

const cx = classNames.bind(styles);


function ViewDetailSong() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const [isCommenting, setIsCommenting] = useState(false);
    const [commentText, setCommentText] = useState('');

    const handleCommentClick = () => {
        setIsCommenting(true);
    };

    const handleInputChange = (event) => {
        setCommentText(event.target.value);
    };

    const handlePostComment = () => {
        console.log('Posted comment:', commentText);
        setIsCommenting(false);
        setCommentText('');
    };
    
    return (
        <div className={cx('view-detail-song')}>
            <div className={cx('song-name')}>
                <div className={cx('song-title')}>
                    <h1>Trước Khi Em Tồn Tại</h1>
                </div>
                <div className={cx('icon-star')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <g clip-path="url(#clip0_1249_123)">
                            <path d="M22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0ZM22.6483 7.8717L26.1942 18.9432L37.815 19.2041L28.3805 25.9937L31.7231 37.1283L22.349 30.2536L12.7936 36.8756L16.4355 25.8344L7.18504 18.7921L18.8113 18.8443L22.6483 7.8717Z" fill="#699BF7" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1249_123">
                                <rect width="45" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className={cx('version-bar')}>
                <div className={cx('version-bar-left')}>
                    <div className={cx('song-author')}>
                        <div className={cx('button-bb-big')}>
                            <Button className={cx('button')}>
                                <div className={cx('text-button-bb-big')}>
                                    <span>Bb</span>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('button-author')}>
                            <span>Vũ Đinh Trọng Thắng</span>
                            <div className={cx('button-bb-small')}>
                                <Button className={cx('button')}>
                                    <div className={cx('text-button-bb-small')}>
                                        <span>Bb</span>
                                    </div>
                                </Button>
                            </div>
                            <div className={cx('button-play')}>
                                <Button className={cx('button')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M4.09078 15.3226C3.69805 15.3226 3.32168 15.2551 2.96168 15.1313C2.1435 14.8388 1.63623 14.2651 1.63623 13.6351V4.47758C1.63623 3.84758 2.1435 3.27383 2.96168 2.98133C3.77987 2.68883 4.76168 2.73383 5.51441 3.10508L14.9562 7.68383C15.6108 7.99883 15.9871 8.51633 15.9871 9.06758C15.9871 9.61883 15.5944 10.1251 14.9562 10.4513L5.51441 15.0188C5.08896 15.2213 4.59805 15.3338 4.10714 15.3338L4.09078 15.3226ZM4.09078 3.91508C3.95987 3.91508 3.82896 3.93758 3.71441 3.98258C3.43623 4.08383 3.27259 4.26383 3.27259 4.47758V13.6351C3.27259 13.8488 3.43623 14.0401 3.71441 14.1301C3.99259 14.2313 4.3035 14.2088 4.56532 14.0851L14.0071 9.50633C14.113 9.45342 14.1991 9.38405 14.2584 9.30388C14.3178 9.22372 14.3487 9.13504 14.3487 9.04508C14.3487 8.95513 14.3178 8.86645 14.2584 8.78629C14.1991 8.70612 14.113 8.63675 14.0071 8.58383L4.56532 4.01633C4.42527 3.95094 4.26007 3.91569 4.09078 3.91508Z" fill="white" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className={cx('dropdown')}>
                            <Button className={cx('button')}>
                                <div className={cx('text-button-ballad')}>
                                    <span>Điệu Ballad</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('clearfix')}>
                        <div className={cx('text-dashed-underline')}>
                            <h3>Chọn phiên bản</h3>
                        </div>
                        <div className={cx('number-of-chords')}>
                            <div className={cx('text-chords')}>
                                <span>29</span>
                            </div>
                            <div className={cx('icon-file-text')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M24.8719 9.81563L18.3094 3.25313C18.1776 3.12123 17.9989 3.04704 17.8125 3.04688H6.5625C6.12738 3.04688 5.71008 3.21973 5.4024 3.5274C5.09473 3.83508 4.92188 4.25238 4.92188 4.6875V25.3125C4.92188 25.7476 5.09473 26.1649 5.4024 26.4726C5.71008 26.7803 6.12738 26.9531 6.5625 26.9531H23.4375C23.8726 26.9531 24.2899 26.7803 24.5976 26.4726C24.9053 26.1649 25.0781 25.7476 25.0781 25.3125V10.3125C25.078 10.1261 25.0038 9.94736 24.8719 9.81563ZM18.5156 5.44687L22.6781 9.60938H18.5156V5.44687ZM23.4375 25.5469H6.5625C6.50034 25.5469 6.44073 25.5222 6.39677 25.4782C6.35282 25.4343 6.32812 25.3747 6.32812 25.3125V4.6875C6.32812 4.62534 6.35282 4.56573 6.39677 4.52177C6.44073 4.47782 6.50034 4.45312 6.5625 4.45312H17.1094V10.3125C17.1094 10.499 17.1835 10.6778 17.3153 10.8097C17.4472 10.9415 17.626 11.0156 17.8125 11.0156H23.6719V25.3125C23.6719 25.3747 23.6472 25.4343 23.6032 25.4782C23.5593 25.5222 23.4997 25.5469 23.4375 25.5469ZM19.4531 15.9375C19.4531 16.124 19.379 16.3028 19.2472 16.4347C19.1153 16.5665 18.9365 16.6406 18.75 16.6406H11.25C11.0635 16.6406 10.8847 16.5665 10.7528 16.4347C10.621 16.3028 10.5469 16.124 10.5469 15.9375C10.5469 15.751 10.621 15.5722 10.7528 15.4403C10.8847 15.3085 11.0635 15.2344 11.25 15.2344H18.75C18.9365 15.2344 19.1153 15.3085 19.2472 15.4403C19.379 15.5722 19.4531 15.751 19.4531 15.9375ZM19.4531 19.6875C19.4531 19.874 19.379 20.0528 19.2472 20.1847C19.1153 20.3165 18.9365 20.3906 18.75 20.3906H11.25C11.0635 20.3906 10.8847 20.3165 10.7528 20.1847C10.621 20.0528 10.5469 19.874 10.5469 19.6875C10.5469 19.501 10.621 19.3222 10.7528 19.1903C10.8847 19.0585 11.0635 18.9844 11.25 18.9844H18.75C18.9365 18.9844 19.1153 19.0585 19.2472 19.1903C19.379 19.3222 19.4531 19.501 19.4531 19.6875Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className={cx('music-tab')}>
                            <div className={cx('text-music')}>
                                <span>0</span>
                            </div>
                            <div className={cx('icon-music')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M24.9516 3.01049C24.8393 2.92299 24.7085 2.86221 24.5692 2.83277C24.4299 2.80332 24.2858 2.80599 24.1477 2.84057L9.14766 6.59057C8.94484 6.64127 8.76479 6.7583 8.63612 6.92307C8.50744 7.08784 8.43754 7.29089 8.43751 7.49994V20.3999C7.65544 19.8774 6.72117 19.6312 5.78315 19.7004C4.84512 19.7697 3.95714 20.1504 3.26029 20.7822C2.56343 21.4139 2.09767 22.2604 1.93701 23.1871C1.77634 24.1139 1.92999 25.0677 2.37353 25.8972C2.81708 26.7266 3.52508 27.384 4.38506 27.765C5.24503 28.1459 6.20765 28.2286 7.11998 27.9998C8.0323 27.771 8.842 27.2439 9.42043 26.5022C9.99887 25.7605 10.3129 24.8468 10.3125 23.9062V13.8574L23.4375 10.5761V16.6499C22.6554 16.1274 21.7212 15.8812 20.7831 15.9504C19.8451 16.0197 18.9571 16.4004 18.2603 17.0322C17.5634 17.6639 17.0977 18.5104 16.937 19.4371C16.7763 20.3639 16.93 21.3177 17.3735 22.1472C17.8171 22.9766 18.5251 23.634 19.3851 24.015C20.245 24.3959 21.2077 24.4786 22.12 24.2498C23.0323 24.021 23.842 23.4939 24.4204 22.7522C24.9989 22.0105 25.3129 21.0968 25.3125 20.1562V3.74994C25.3125 3.60736 25.28 3.46664 25.2175 3.3385C25.155 3.21036 25.064 3.09818 24.9516 3.01049ZM6.09376 26.2499C5.63021 26.2499 5.17707 26.1125 4.79164 25.855C4.40621 25.5974 4.10581 25.2314 3.92841 24.8031C3.75102 24.3748 3.70461 23.9036 3.79504 23.449C3.88547 22.9943 4.10869 22.5767 4.43647 22.2489C4.76425 21.9211 5.18187 21.6979 5.63651 21.6075C6.09116 21.517 6.56241 21.5635 6.99067 21.7409C7.41893 21.9182 7.78498 22.2186 8.04251 22.6041C8.30005 22.9895 8.43751 23.4426 8.43751 23.9062C8.43751 24.5278 8.19058 25.1239 7.75104 25.5635C7.3115 26.003 6.71536 26.2499 6.09376 26.2499ZM10.3125 11.9238V8.23237L23.4375 4.95112V8.64252L10.3125 11.9238ZM21.0938 22.4999C20.6302 22.4999 20.1771 22.3625 19.7916 22.105C19.4062 21.8474 19.1058 21.4814 18.9284 21.0531C18.751 20.6248 18.7046 20.1536 18.795 19.699C18.8855 19.2443 19.1087 18.8267 19.4365 18.4989C19.7643 18.1711 20.1819 17.9479 20.6365 17.8575C21.0912 17.767 21.5624 17.8135 21.9907 17.9909C22.4189 18.1682 22.785 18.4686 23.0425 18.8541C23.3 19.2395 23.4375 19.6926 23.4375 20.1562C23.4375 20.464 23.3769 20.7688 23.2591 21.0531C23.1413 21.3375 22.9687 21.5958 22.751 21.8135C22.5334 22.0311 22.275 22.2038 21.9907 22.3215C21.7063 22.4393 21.4015 22.4999 21.0938 22.4999Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className={cx('sign')}>
                            <span>/</span>
                        </div>
                        <div className={cx('cus-info')}>
                            <div className={cx('icon-image')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M25.0772 23.3718C26.4236 21.7519 27.36 19.8315 27.8072 17.7732C28.2544 15.7149 28.1993 13.5791 27.6466 11.5466C27.0938 9.51402 26.0596 7.64451 24.6316 6.09618C23.2035 4.54785 21.4235 3.36625 19.4421 2.65134C17.4608 1.93643 15.3364 1.70924 13.2487 1.98899C11.161 2.26874 9.17139 3.0472 7.44817 4.25852C5.72495 5.46983 4.31883 7.07837 3.34874 8.94805C2.37866 10.8177 1.87316 12.8936 1.87501 14.9999C1.87571 18.062 2.95477 21.026 4.92282 23.3718L4.90407 23.3877C4.96969 23.4665 5.04469 23.534 5.11219 23.6118C5.19657 23.7084 5.2875 23.7993 5.37469 23.893C5.63719 24.178 5.90719 24.4518 6.19032 24.7087C6.27657 24.7874 6.36563 24.8605 6.45282 24.9355C6.75282 25.1943 7.06126 25.4399 7.38094 25.6687C7.42219 25.6968 7.45969 25.7334 7.50094 25.7624V25.7512C9.69666 27.2963 12.316 28.1256 15.0009 28.1256C17.6858 28.1256 20.3052 27.2963 22.5009 25.7512V25.7624C22.5422 25.7334 22.5788 25.6968 22.6209 25.6687C22.9397 25.439 23.2491 25.1943 23.5491 24.9355C23.6363 24.8605 23.7253 24.7865 23.8116 24.7087C24.0947 24.4509 24.3647 24.178 24.6272 23.893C24.7144 23.7993 24.8044 23.7084 24.8897 23.6118C24.9563 23.534 25.0322 23.4665 25.0978 23.3868L25.0772 23.3718ZM15 7.49992C15.8344 7.49992 16.65 7.74734 17.3438 8.21091C18.0376 8.67447 18.5783 9.33335 18.8976 10.1042C19.2169 10.8751 19.3005 11.7233 19.1377 12.5417C18.9749 13.3601 18.5731 14.1118 17.9831 14.7018C17.3931 15.2918 16.6414 15.6936 15.823 15.8564C15.0047 16.0191 14.1564 15.9356 13.3856 15.6163C12.6147 15.297 11.9558 14.7562 11.4922 14.0625C11.0287 13.3687 10.7813 12.5531 10.7813 11.7187C10.7813 10.5998 11.2257 9.52673 12.0169 8.73556C12.8081 7.94439 13.8811 7.49992 15 7.49992ZM7.50657 23.3718C7.52283 22.1408 8.02308 20.9658 8.89909 20.1008C9.7751 19.2358 10.9564 18.7505 12.1875 18.7499H17.8125C19.0436 18.7505 20.2249 19.2358 21.1009 20.1008C21.9769 20.9658 22.4772 22.1408 22.4934 23.3718C20.4374 25.2246 17.7677 26.25 15 26.25C12.2323 26.25 9.56265 25.2246 7.50657 23.3718Z" fill="#699BF7" />
                                </svg>
                            </div>
                            <div className={cx('cus-name')}>
                                <span>cherry15:</span>
                            </div>
                        </div>
                        <div className={cx('chord-basic')}>
                            <span>Hợp âm cơ bản</span>
                        </div>
                    </div>
                </div>
                <div className={cx('version-right')}>
                    <h1>hello</h1>
                </div>
            </div>
            <div className={cx('song-lyric-sum')}>
                <div className={cx('song-lyric')}>
                    <div className={cx('chord-lyric-left')}>
                        <div className={cx('pre-inline')}>
                            <div className={cx('tone')}>
                                <div className={cx('text-tone')}>
                                    <span>Tone</span>
                                </div>
                                <div className={cx('not')}>
                                    <span>[Bb]</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('lyric-left-right')}>
                            <div className={cx('lyric-left')}>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Ngày sương gió</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Quấn áo ấm quanh thân mà đi</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>mấy lúc lái xe hay thầm nghĩ</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>“làm sao sống sót qua đông này?” </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Ngày em tới</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Sức sống cứ trong anh nhẹ nâng</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Sức sống ấy theo em trào dâng </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Làm đơm hoa ngập tràn bao</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>vô vàn, vô vàn ý</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbsus2]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Dường như</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>trước khi em tồn tại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nắng sương hay mặt trời chưa từng</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>có lý do ở lại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nắng sinh ra để làm những gì</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>trong vắt trong mắt em</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Trong vắt trong mắt em thêm nhiệm màu</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Dường như</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>trước khi em tồn tại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Ánh sao đêm chỉ là những giọt</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>nước cơn mưa để lại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Trước khi em tồn tại anh</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>tìm em khắp nơi đó đây</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Theo gió đông gió tây em ở đâu?</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Hóa ra em ở đây. </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Hóa ra em ở đây. </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Hóa ra em ở đây. </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Hóa ra em ở đây. </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Mùa hè tới</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nó chỉ tới khi em lại chơi</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('lyric-right')}>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Sức sống véo von giai điệu mới </span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Làm đơm hoa ngập tràn bao</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>vô vàn, vô vàn ý</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Anh không muốn</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>nhìn về đằng sau</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Muốn tìm về không đâu</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nếu như nước mắt đã rơi hôm qua sẽ cùng nắng bốc hơi hôm nay</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nên anh</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>tìm về tương lai muốn ở gần em mãi</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Hãy ném quá khứ cứ theo bên</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>anh chỉ là những vết thương chưa lành</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Thì để sáng sớm nay (?) không còn đau lòng</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[F7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>nữa ~</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Dường như</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>trước khi em tồn tại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nắng sương hay mặt trời chưa từng</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>có lý do ở lại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Nắng sinh ra để làm những gì</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>trong vắt trong mắt em</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Trong vắt trong mắt em thêm nhiệm</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>màu</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Dường như</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>trước khi em tồn tại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Ánh sao đêm chỉ là những giọt nước</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>cơn mưa để lại</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Trước khi em tồn tại anh</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Cm7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>tìm em khắp nơi đó đây</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Theo gió đông gió tây em ở</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Bbmaj7]</span>
                                    </div>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>đâu?</span>
                                    </div>
                                </div>
                                <div className={cx('lyric-item-left')}>
                                    <div className={cx('text-lyric-item-left')}>
                                        <span>Hóa ra em ở đây.</span>
                                    </div>
                                    <div className={cx('not-lyric-item-left')}>
                                        <span>[Ebmaj7]</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('chord-list-show-all')}>
                <div className={cx('chord-list')}>
                    <div className={cx('chord-list-title')}>
                        <div className={cx('icon-tags')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <g clip-path="url(#clip0_1258_121)">
                                    <path d="M29.9985 15.9312C29.9757 15.1985 29.6663 14.504 29.1368 13.9971L18.2561 3.39733C18.0929 3.23453 17.8991 3.10553 17.686 3.01775C17.4728 2.92996 17.2444 2.8851 17.0139 2.88575H15.072L27.831 15.3428L27.8364 15.3479C28.0142 15.5166 28.1185 15.7485 28.1267 15.9934C28.1348 16.2384 28.0461 16.4767 27.8798 16.6567L18.7157 26.8143L20.002 28.0656L29.2645 17.921C29.7608 17.3797 30.0244 16.6651 29.9985 15.9312Z" fill="#699BF7" />
                                    <path d="M25.0137 16.5915C25.1031 16.3454 25.1218 16.0791 25.0676 15.8229C25.0135 15.5666 24.8886 15.3307 24.7072 15.1418C24.701 15.1353 24.6954 15.1283 24.6892 15.1219L13.143 3.38186L13.1375 3.37635C12.9638 3.20169 12.7571 3.06322 12.5296 2.96895C12.302 2.87468 12.058 2.82648 11.8116 2.82716H3.52699C2.84045 2.82793 2.18226 3.101 1.6968 3.58646C1.21135 4.07191 0.938275 4.73011 0.9375 5.41665V13.6842C0.937918 13.9396 0.990316 14.1923 1.0915 14.4268C1.19269 14.6613 1.34055 14.8728 1.52607 15.0483L13.8495 26.7788L13.854 26.783C14.1138 27.0286 14.458 27.1651 14.8155 27.1644C14.8329 27.1644 14.8505 27.164 14.8682 27.1634C15.0026 27.1585 15.1356 27.1345 15.2632 27.0921C15.4887 27.0169 15.6913 26.8855 15.8519 26.7102L24.7256 17.0644C24.852 16.9274 24.9499 16.7667 25.0137 16.5915ZM14.7949 25.0899L2.81701 13.6883L2.8125 13.684V5.41665C2.81272 5.22722 2.88806 5.04561 3.02201 4.91166C3.15596 4.77772 3.33756 4.70237 3.52699 4.70216H11.8116L23.044 16.1231L14.7949 25.0899Z" fill="#699BF7" />
                                    <path d="M8.20313 6.5625C7.60051 6.5625 7.01143 6.7412 6.51037 7.07599C6.00932 7.41079 5.61879 7.88664 5.38818 8.44339C5.15757 9.00013 5.09723 9.61276 5.2148 10.2038C5.33236 10.7948 5.62255 11.3377 6.04866 11.7638C6.47477 12.19 7.01767 12.4801 7.60871 12.5977C8.19975 12.7153 8.81237 12.6549 9.36911 12.4243C9.92586 12.1937 10.4017 11.8032 10.7365 11.3021C11.0713 10.8011 11.25 10.212 11.25 9.60938C11.2491 8.80157 10.9278 8.02712 10.3566 7.45592C9.78538 6.88472 9.01093 6.56341 8.20313 6.5625ZM8.20313 10.7812C7.97135 10.7813 7.74478 10.7125 7.55207 10.5838C7.35935 10.455 7.20915 10.272 7.12045 10.0578C7.03176 9.8437 7.00855 9.60807 7.05377 9.38075C7.09899 9.15343 7.2106 8.94462 7.37449 8.78073C7.53838 8.61684 7.74718 8.50523 7.9745 8.46002C8.20183 8.4148 8.43745 8.43801 8.65158 8.5267C8.86572 8.6154 9.04874 8.7656 9.1775 8.95832C9.30627 9.15103 9.375 9.3776 9.375 9.60938C9.37464 9.92007 9.25106 10.2179 9.03137 10.4376C8.81168 10.6573 8.51382 10.7809 8.20313 10.7812Z" fill="#699BF7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1258_121">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={cx('text-chord-list-title')}>
                            <span>Danh sách hợp âm (Click để tắt)</span>
                        </div>
                        <div className={cx('button-instrument')}>
                            <Button className={cx('button')}>
                                <div className={cx('text-button-bb-big')}>
                                    <span>Guitar</span>
                                </div>
                            </Button>
                            <Button className={cx('button')}>
                                <div className={cx('text-button-bb-big')}>
                                    <span>Ukulele</span>
                                </div>
                            </Button>
                            <Button className={cx('button')}>
                                <div className={cx('text-button-bb-big')}>
                                    <span>Piano</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('inmage-chord')}>
                        <img src={require("../../assets/images/Other/Screenshot 2023-10-18 232748.png")}>
                        </img>
                    </div>
                    <div className={cx('change-tone')}>
                        <Button className={cx('button')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_1259_125)">
                                    <path d="M11.5692 4.17214L11.6175 4.16797H11.7158L11.7642 4.17214L11.8142 4.17964L11.8575 4.18797L11.9475 4.21464L12.0033 4.23714L12.1133 4.29547L12.1883 4.34964L12.2558 4.41047L12.325 4.4888L12.37 4.55297L12.415 4.63297L12.4292 4.66297L12.4517 4.7188L12.4783 4.8088L12.4867 4.85297L12.495 4.90297L12.4983 4.95047L12.5 4.99964V14.9996C12.5 15.7096 11.6783 16.0805 11.1475 15.6521L11.0775 15.5888L6.07749 10.5888C5.93401 10.4453 5.84781 10.2544 5.83508 10.0519C5.82234 9.84935 5.88394 9.64914 6.00832 9.4888L6.07749 9.41047L11.0775 4.41047L11.1558 4.3413L11.22 4.2963L11.3 4.2513L11.33 4.23714L11.3858 4.21464L11.4758 4.18797L11.52 4.17964L11.57 4.1713L11.5692 4.17214Z" fill="#699BF7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1259_125">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>
                        <span>Đổi tông</span>
                        <Button className={cx('button')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_1259_129)">
                                    <path d="M7.5 4.99979C7.5 4.28979 8.32167 3.91896 8.8525 4.34729L8.9225 4.41063L13.9225 9.41063C14.066 9.55412 14.1522 9.74504 14.1649 9.94756C14.1776 10.1501 14.116 10.3503 13.9917 10.5106L13.9225 10.589L8.9225 15.589L8.84417 15.6581L8.78 15.7031L8.7 15.7481L8.67 15.7623L8.61417 15.7848L8.52417 15.8115L8.48 15.8198L8.43 15.8281L8.3825 15.8315L8.33333 15.8331L8.28417 15.8315L8.23583 15.8273L8.18583 15.8198L8.1425 15.8115L8.0525 15.7848L7.99667 15.7623L7.88667 15.704L7.81167 15.6498L7.74417 15.589L7.675 15.5106L7.63 15.4465L7.585 15.3665L7.57083 15.3365L7.54833 15.2806L7.52167 15.1906L7.51333 15.1465L7.505 15.0965L7.50167 15.049L7.5 4.99979Z" fill="#699BF7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1259_129">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('comment-all')}>
                <div className={cx('comment')}>
                    <textarea style={{width: '80%'}} id="ABC" name="ABC" rows="2" cols="174" placeholder=' Comment...'></textarea>
                    <div className={cx('post-button')}>
                        <button>Post a comment</button>
                    </div>
                    <div>
                        <select name="comment" id="comment">
                            <option value="Latest comments">Latest comments</option>
                            <option value="Oldest comment">Oldest comment</option>
                        </select>
                    </div>
                    <div className={cx('show-comment-of-cus')}>
                        <div className={cx('show-comment-left')}>
                            <img className={cx('background-image')} src="https://static.hopamchuan.com/assets/images/default-ava.png" />
                        </div>
                        <div className={cx('show-comment-right')}>
                            <div className={cx('comment-item-username')}>
                                <span className={cx('username')}>ecilalicie0110</span>
                                <span className={cx('times')}>2 tháng trước</span>
                            </div>
                            <div className={cx('comment-username')}>
                                <div className={cx('text-comment-username')}>
                                    <span>Bài hát hay mà hợp âm dễ học nữa ^^^^</span>
                                </div>
                                <div className={cx('eidt-delete')}>
                                    <React.Fragment>
                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                            <Tooltip title="Chỉnh sửa hoặc xóa bình luận này">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="small"
                                                    sx={{ ml: 2 }}
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar sx={{
                                                        width: 20,
                                                        height: 20,
                                                        color: 'black',
                                                        backgroundColor: 'white',
                                                        '&:hover': {
                                                            backgroundColor: 'lightgray',
                                                            cursor: 'pointer'
                                                        },
                                                    }}>...</Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                Chỉnh sửa
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                Xóa
                                            </MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                </div>
                            </div>
                            <div className={cx('reply')}>
                                <div className={cx('replay-title')}>
                                    <div className={cx('comment-box')}>
                                        <span
                                            onClick={handleCommentClick}
                                        >
                                            trả lời
                                        </span>
                                        {isCommenting && (
                                            <div>
                                                <textarea
                                                    value={commentText}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your comment..."
                                                    rows="2"
                                                    cols="50"
                                                />
                                                <br />
                                                <button onClick={handlePostComment}>Post a comment</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetailSong;
