// import { Link } from "react-router-dom";
// import classNames from "classnames/bind";
// import React, { useEffect, useMemo, useState } from "react";
// import styles from "./ViewCart.module.scss";
// import { Button } from "@mui/material";

// const cx = classNames.bind(styles);


// const DATA = [

//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },


// ];

// function ViewCart() {
//     const handleDelete = (id) => {
//         console.log(id);
//     };

//     const handleUpdate = (id) => {
//         console.log(id);
//     };
//     const [searchBeat, setSearchBeat] = useState("");
//     const [listBeat, setListBeat] = useState(DATA);

//     const handleSearchBeat = (event) => {
//         setSearchBeat(event.target.value);

//     }
//     // const [quantity, setQuantity] = useState(1);
//     // //Quantity Decrement,Increment
//     // const handleDecrement = () => {
//     //     if (quantity > 1) {
//     //         setQuantity(prevCount => prevCount - 1);
//     //     }

//     // }
//     // const handleIncrement = () => {
//     //     if (quantity < 10) {
//     //         setQuantity(prevCount => prevCount + 1);
//     //     }

//     // }



//     return (

//         <div className={cx("wrapper-viewBeat")}>
//             <div className={cx("header-text")}>
//                 <h1 className={cx("login-wrapper")}>YOUR BAG</h1>
//                 <Link to="/listbeat" className={cx("continue-shopping")}>Continue Shopping</Link>
//             </div>
//             <div className={cx("viewcart-header")}>
//                 <div className={cx("footer-wrapper")}>
//                 <div className={cx("viewcart-1")}>
//                     <div className={cx("navigation-2")}>
//                           <div className={cx("viewcart-img")}>
//                           <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 23.png")}/>
//                           </div>
//                         </div>
//                         <div className={cx("viewcart-details")}>
//                             <div className={cx("navigation-2")}>
//                                 <div className={cx("nav-item")}>NameBeat</div>
//                                 <div className={cx("nav-item")}>oalayonthebeat</div>
//                             </div>
//                             <div className={cx("navigation-2")}>
//                             <div className={cx("nav-item")}>Standar</div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("title-item")}>Contact</div>
//                                 <div className={cx("box-contact")}>
//                                     <div className={cx("contact-item")}>29.5$</div>
//                                 </div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("icon-item")}>Social</div>
//                             </div>
//                         </div>
//                 </div>
//                 <div className={cx("viewcart-2")}>
//                     <div className={cx("navigation-2")}>
//                           <div className={cx("viewcart-img")}>
//                           <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 23.png")}/>
//                           </div>
//                         </div>
//                         <div className={cx("viewcart-details")}>
//                             <div className={cx("navigation-2")}>
//                                 <div className={cx("nav-item")}>NameBeat</div>
//                                 <div className={cx("nav-item")}>oalayonthebeat</div>
//                             </div>
//                             <div className={cx("navigation-2")}>
//                             <div className={cx("nav-item")}>Standar</div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("title-item")}>Contact</div>
//                                 <div className={cx("box-contact")}>
//                                     <div className={cx("contact-item")}>29.5$</div>
//                                 </div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("icon-item")}>Social</div>
//                             </div>
//                         </div>
//                 </div>
//                 </div>

//             </div>
//         </div>


//     );
// }

// export default ViewCart;



//  Cart moi
//  Cart moi
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styles from "./ViewCart.module.scss";
import { Button } from "@mui/material";
import { useReducer, useRef } from "react";
import CardItem from "../../components/CardItem";
import { ShopContext } from "../../context/shop-context";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";
import axios from "axios";

const cx = classNames.bind(styles);


// const DATA = [

//     {
//         name: "Beatname",
//         author: "Quoc Doanh",
//         genre: "POP",
//         price: 70,
//     },
//     {
//         name: "Beatname",
//         author: "Quoc Doanh",
//         genre: "POP",
//         price: 70,
//     },
//     {
//         name: "Beatname",
//         author: "Quoc Doanh",
//         genre: "POP",
//         price: 70,
//     },
// ];

function ViewCart() {
    const { cartItems, getTotalCartAmount, checkOut, listBeatContext } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    let beatCheckout = []
    let beatInvoice = []
    beatCheckout = listBeatContext
        .filter(item => cartItems && cartItems[item.id] !== 0)
        .map(item => {
            // You can also add item to beatInvoice here
            beatCheckout.push(item);
            return item.id;
        });
    beatInvoice = listBeatContext
        .filter(item => cartItems && cartItems[item.id] !== 0)
        .map(item => {
            // You can also add item to beatInvoice here
            beatInvoice.push(item);
            return item;
        });
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount))
    localStorage.setItem("beatCheckout", JSON.stringify(beatCheckout))
    localStorage.setItem("beatInvoice", JSON.stringify(beatInvoice))
    console.log(JSON.parse(localStorage.getItem("beatInvoice")))
    const navigate = useNavigate()
    const token = useToken()
    const [checkoutMessage, setCheckoutMessage] = useState()
    const handleCheckout = async () => {
        if (beatCheckout.length === 0) {
            setCheckoutMessage("You have not chosen anything to buy")
            return
        }
        if (token) {
            await axiosInstance.post(`http://localhost:8080/api/v1/paypal`, { totalprice: totalAmount, description: "Payment Success" })
                .then((res) => {
                    console.log(res.data)
                    window.location.href = res.data
                })
                .catch((error) => {
                    if (error.message.includes("Network")) {
                        navigate("/login")
                    } else if (error.message.includes("501")) {
                        console.log("Beat Bought")
                        navigate("/viewcart")
                    }
                })
        }
        else {
            navigate("/login")
        }

    }
    // const [listData, setListData] = useState(DATA);
    // // Remove product
    // // Remove
    // const handleRemove = (id) => {
    //     const data = listData.filter((item) => item.id !== id);
    //     setListData(data);
    // };

    // // Decrease quantity
    // const handleDecrease = (index) => {
    //     const data = [...listData];
    //     if (data[index].quantity >= 1) data[index].quantity--;
    //     setListData(data);
    // }
    // // Increase quantity
    // const handleIncrease = (index) => {
    //     const data = [...listData];
    //     data[index].quantity++;
    //     setListData(data);
    // };

    // // Sub Total
    // const subTotal = listData.reduce((total, currentValue) => {
    //     return total + currentValue.price * currentValue.quantity;
    // }, 0);

    // // Ship
    // const ship = useRef(0);
    // // Discount
    // const discount = useRef(0);
    // // Tax
    // const tax = useRef(0);



    return (

        <section className={cx("card-wrapper")}>
            {/* Shop cart */}
            <section className={cx("shop-card")}>
                {/* Header */}
                <header className={cx("card-header")}>
                    <h2 className={cx("cart-heading")}>Shopping Cart</h2>
                </header>
                {/* Content */}
                <div className={cx("card-names")}>
                    <div className={cx("card-product", "card-title")}>PRODUCT</div>
                    <div className={cx("card-genre", "card-title")}>GENRE</div>
                    <div className={cx("card-author", "card-title")}>AUTHOR</div>
                    <div className={cx("card-price", "card-title")}>PRICE</div>
                    {/* <div className={cx("card-quantity", "card-title")}>QUANTITY</div> */}
                    {/* <div className={cx("card-sub", "card-title")}>TOTAL</div> */}
                </div>

                {listBeatContext ?
                    <div className={cx("list-card")}>


                        {listBeatContext.map((item, index) => {
                            if (cartItems) {
                                if (cartItems[item.id] !== 0) {
                                    { console.log(123) }
                                    return (

                                        <CardItem
                                            id={item.id}
                                            name={item.beatName}
                                            author={item.user.fullName}
                                            genre={item.genres}
                                            price={item.price}
                                            beatId={item.id}
                                        />
                                    );
                                }
                            }
                        })}
                    </div> : <div></div>}

                {/* Footer */}
                <footer className={cx("card-footer")}>
                    <Link to="/listbeat" className={cx("card-return", "card-action")}>RETURN TO SHOP</Link>
                    {/* <div className={cx("card-update", "card-action")}>UPDATE CART</div> */}
                </footer>
                <div>{checkoutMessage}</div>
            </section>

            {/* Card total */}
            <section className={cx("card-total")}>
                {/* Header */}
                <header className={cx("card-header")}>
                    <h2 className={cx("card-heading")}>Card Totals</h2>
                </header>
                {/* Content */}
                <div className={cx("card-content")}>
                    {/* Item */}
                    <div className={cx("item")}>
                        <span className={cx("card-title")}>Sub-total</span>
                        ${totalAmount}
                    </div>
                    {/* Item */}
                    {/* <div className={cx("item")}>
            <span className={cx("card-title")}>Shipping</span>
            <span className={cx("card-name")}>Free</span>
          </div> */}
                    {/* Item */}
                    {/* <div className={cx("item")}>
            <span className={cx("card-title")}>Discount</span>
            <span className={cx("card-name")}>${discount.current}</span>
          </div> */}
                    {/* Item */}
                    {/* <div className={cx("item")}>
            <span className={cx("card-title")}>Tax</span>
            <span className={cx("card-name")}>${tax.current}</span>
          </div> */}
                </div>
                {/* Footer */}
                <footer className={cx("card-footer")}>
                    <div className={cx("card-title")}>
                        <span className={cx("card-name")}>Total</span>
                        <span className={cx("card-name")}>
                            ${totalAmount}
                        </span>
                    </div>

                    <Button className={cx("card-action")} onClick={() => handleCheckout()}>Proceed to Checkout</Button>
                </footer>
                <div className={cx("card-payment")}>
                    Payment Method
                </div>
                <div className={cx("card-banking")}>
                    <img className={cx("img")} src={require("../../assets/images/Other/1554401.png")}>
                    </img>
                </div>
                <div className={cx("card-banking")}>
                    <img className={cx("img")} src={require("../../assets/images/Other/1200px-PayPal_logo.svg.png")}>
                    </img>
                </div>
                <div className={cx("card-last-info")}>
                    Your Check out is Safe and Secure With PayPal
                </div>
            </section>
        </section>
    );
}

export default ViewCart;
