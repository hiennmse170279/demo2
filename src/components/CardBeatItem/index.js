import classNames from "classnames/bind";
import styles from "./CardBeatItem.module.scss";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
const cx = classNames.bind(styles);

function CartBeatItem({
  id,
  name,
  author,
  date,
  price,
}) {
  const { removeFromCart } = useContext(ShopContext)
  return (
    <div className={cx("card-wrapper")}>
      {/* Card product */}
      <div className={cx("card-product")}>
        <img src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} className={cx("card-img")} alt="anh dep" />
        <h2 className={cx("card-name")}>{name}</h2>

      </div>
      <div className={cx("card-genre")}>
        {date}
      </div>

      <div className={cx("card-author")}>{author}</div>
      <div className={cx("card-price")}>${price}</div>
    </div>
  );
}

export default CartBeatItem;
