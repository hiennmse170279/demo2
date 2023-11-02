import React, { useEffect, useState } from 'react';

import classNames from "classnames/bind"

import styles from "./Pagination.module.scss"
import { grey } from '@mui/material/colors';

const cx = classNames.bind(styles)
// Example items, to simulate fetching from another resources.
function Pagination({ pages, page, setPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  let list = []
  for (let i = 0; i < pages; i++) {
    list.push(i + 1)
  }
  const [active, setActive] = useState(0);

  console.log(page)
  return (
    <div className={cx("pagination-header")} style={{ marginTop: 50 }}>
      {page > 1 ?
        <span onClick={() => setPage(page - 1)}><button className={cx('button-pagi')}>Previous</button></span>
        : <span><button className={cx('button-pagi')}>Previous</button> </span>
      }

      {list.map((item, index) => {
        return <span key= {index} className={cx("number-pagi")} onClick={() => setPage(item)}>
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
  );
}
export default Pagination;