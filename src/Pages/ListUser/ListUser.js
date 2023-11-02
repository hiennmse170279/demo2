import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import styles from "./ListUser.module.scss";
import BasicPagination from "../../components/Pagination";
import PaginationControlled from "../../components/Pagination";
import ReactPaginate from 'react-paginate';
import Pagination from "../../components/Pagination";
import axiosInstance from "../../authorization/axiosInstance";


const cx = classNames.bind(styles);

// Fake API

const DATA = [
    {
        id: 1,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 2,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 3,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 4,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 5,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },


];

function ListUser( ) {

    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const [listUser, setListUser] = useState();
    useEffect(() => {
        loadListUser()
    }, [page])

    const handleDelete = (id) => {
        console.log(id);
    };

    const handleUpdate = (id) => {
        console.log(id);
    };
    const handlePageClick = () => {

    }


    const loadListUser = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/admin/${page}/10`)
            .then((res) => {
                setListUser(res.data.dtoList)
                setPages(res.data.max)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    let list = []
    for (let i = 0; i < pages; i++) {
        list.push(i + 1)
    }
    const [active, setActive] = useState(0);
    console.log(page)
    return (

        <div className={cx("container")}>
            <h1 className={cx("login-wrapper")}>List User</h1>
            <div className={cx("line")}>
            </div>
            <div className={cx("listuser-header")}>
                <thead>
                    <tr>
                        <th><span style={{ paddingRight: 130 }}>User</span></th>
                        <th><span>Created</span></th>
                        <th class="text-center"><span>Status</span></th>
                        <th><span style={{ marginLeft: 40 }}>Email</span></th>
                        <th><span style={{ marginLeft: 190 }}>Role</span></th>
                    </tr>
                </thead>
                {listUser ?
                    <tbody className={cx("grid-row")}>
                        {listUser.map((user) => {
                            const dateReleasing = new Date(user.createAt)
                            const month = dateReleasing.getUTCMonth() + 1
                            const day = dateReleasing.getUTCDate()
                            const year = dateReleasing.getUTCFullYear()
                            return (
                                <div className={cx("row-1")}>
                                    <td style={{ paddingTop: 15, paddingLeft: 50, width: 270 }}>
                                        {user.avatar === null ?
                                            <img className={cx("img-user")} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"} />
                                            : <img className={cx("img-user")} src={user.avatar} />
                                        }

                                        <a href="#" style={{ marginLeft: 10, fontSize: '1.5rem' }} class="user-link"> <Link to={`/viewdetailsuserbyadmin/${user.id}`}>{user.fullName}</Link></a>
                                        {/* <span class="user-subhead">Admin</span> */}
                                    </td>
                                    <td style={{ marginLeft: 200 }}>
                                        {day}/{month}/{year}
                                    </td>
                                    {user.status !== 1 ?
                                        <td class="text-center" style={{ width: 170, textAlign: "center" }}>
                                            <span style={{ background: "red", padding: 5, height: 5, color: 'white', fontSize: '1.8rem', marginLeft: 10, borderRadius: 18 }} class={cx("label label-default")}>Banned</span>
                                        </td>
                                        :
                                        <td class="text-center" style={{ width: 170, textAlign: "center" }}>
                                            <span style={{ background: "green", padding: 5, height: 5, color: 'white', fontSize: '1.8rem', margin: '0 auto', borderRadius: 18 }} class={cx("label label-default")}>Active</span>
                                        </td>}
                                    <td style={{ width: 370 }}>
                                        <a style={{ marginLeft: 20, textDecorationLine: 'underline', color: '#337ab7' }} href="#">{user.mail}</a>
                                    </td>
                                    {user.role === "CUS" ?
                                        <td>
                                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Customer</a>
                                        </td>
                                        :
                                        <td>
                                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Musician</a>
                                        </td>
                                    }

                                </div>
                            )
                        })}

                    </tbody> : <div> </div>}
                <div className={cx("pagination-header")} style={{ marginTop: 50 }}>
                    {page > 1 ?
                        <span onClick={() => setPage(page - 1)}><button className={cx('button-pagi')}>Previous</button></span>
                        : <span><button className={cx('button-pagi')}>Previous</button> </span>
                    }

                    {list.map((item, index) => {
                        return <span key={index} className={cx("number-pagi")} onClick={() => setPage(item)}>
                            <ul>
                                <li className={cx("link", {
                                    "active": active === index
                                })} onClick={() => setActive(index)}>{item}</li>
                            </ul>
                        </span>
                    })}
                    {page < list.length ?
                        <span onClick={() => setPage(page + 1)}><button className={cx('button-pagi')}>Next</button></span>
                        : <span><button className={cx('button-pagi')}>Next</button> </span>
                    }
                </div>
            </div>
        </div>
    );
}

export default ListUser;
