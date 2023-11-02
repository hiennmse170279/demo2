import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind"
import styles from "./ListBeatSoldOut.module.scss"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axiosInstance from '../../authorization/axiosInstance'
import useToken from '../../authorization/useToken'
import jwtDecode from 'jwt-decode'
import Pagination from '../../components/Pagination'
import CardBeatItem from "../../components/CardBeatItem";
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function ListBeatSoldOut() {
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [beatSoldOut, setBeatSoldOut] = useState([])
  const [income, setIncome] = useState(0)
  const token = useToken()
  const navigate = useNavigate()
  let userId = ""
  if (token) {
    userId = jwtDecode(token).sub
  }

  useEffect(() => {
    loadBeatSoldOut()
  }, [page])

  useEffect(() => {
    loadIncome()
  },[])

  const loadBeatSoldOut = async () => {
    if(!token){
      navigate("/login")
      return
    }
    await axiosInstance.get(`http://localhost:8080/api/v1/beat/musician/bought/${userId}/${page}`)
      .then((res) => {
        setBeatSoldOut(res.data.dtoList)
        setPages(res.data.max)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const loadIncome = async () => {
    await axiosInstance.get(`http://localhost:8080/api/v1/beat/musician/beatSoldOut/income/${userId}`)
    .then((res) => {
      setIncome(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div style={{ marginTop: 100 }}>
      <div className={cx("text-header")} >
        <h1 className={cx("text-welcome")}>
          My Beats Sold Out
        </h1>
      </div>
      {/* <section className={cx("card-wrapper")}> */}
      {/* Shop cart */}
      <section className={cx("shop-card")}>
        {/* Header */}
        <header className={cx("card-header")}>
          <h2 className={cx("cart-heading")}>Beat Sold Out</h2>
          <h3>{income}</h3>
        </header>
        {/* Content */}
        <div className={cx("card-names")}>
          <div className={cx("card-product", "card-title")}>PRODUCT</div>
          <div className={cx("card-genre", "card-title")}>DATE</div>
          <div className={cx("card-author", "card-title")}>CUSTOMER</div>
          <div className={cx("card-price", "card-title")}>PRICE</div>
          {/* <div className={cx("card-quantity", "card-title")}>QUANTITY</div> */}
          {/* <div className={cx("card-sub", "card-title")}>TOTAL</div> */}
        </div>

        {beatSoldOut.length !== 0 ?
          <div className={cx("list-card")}>


            {beatSoldOut.map((item) => {
              return (
                <CardBeatItem
                  id={item.id}
                  name={item.beatName}
                  author={""}
                  genre={""}
                  price={item.price}
                  beatId={item.id}
                />
              );


            })}
          </div> : <div>Your Beats are not sold out</div>}
      </section>
    </div>
  );
}

export default ListBeatSoldOut