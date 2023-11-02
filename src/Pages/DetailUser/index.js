import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classNames from "classnames/bind";
import { useState } from 'react';
import styles from "./DetailUser.module.scss";
import Popup from 'reactjs-popup';
const cx = classNames.bind(styles);
export default function DetailUser() {
  const [search, setSearch] = useState("");
  const [play, setPlay] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [genre, setGenre] = useState("");
  const [ten, setTen] = useState("");

  const contentStyle = { background: 'white', width: 460, height: 370, borderRadius: 20 };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className={cx("header")}>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel>
          <div className={cx("volt8A")}>
            <div className={cx("title-feedback")}> Beat Review</div>
            <form style={{ marginTop: 20 }}>
              <table className={classNames("profile-2")}>
                <div className={cx("part0")}>
                  <h3 style={{ marginLeft: 72 }}>Beat Name</h3>
                  <td>
                    <div className={cx("text-username0")}>
                      <td>
                        <label className={cx("login-text")}>Dont coi</label>
                        <label style={{ marginLeft: 20 }} className={cx("login-text")}>Vo Quoc Doanh</label>
                      </td>
                      <div>
                        <input className={cx("input-username0")} type="text" placeholder value="Beat hay qua" onChange={handleSearch} />
                      </div>
                    </div>
                  </td>
                </div>
                <div className={cx("part5")}>
                  <Popup className={cx("part-5")} style={{ width: "120%" }} trigger={<button type="button" className={cx("button-save-details")} aria-disabled="false" >Ban</button>}  {...{ contentStyle }} position="top center">
                    <div className={cx("text-all")} style={{ padding: 10 }}>
                      <div style={{ display: 'grid' }}>
                        <td style={{ fontWeight: 'bold', fontSize: "2.2rem", marginLeft: 120, color: 'red' }}>Reason For Ban</td>
                        <td style={{ paddingTop: 15, paddingLeft: 30 }}>
                          <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar4.png"} />
                          <a href="#" style={{ fontWeight: 'bold' }}>Mila Kunis</a>
                        </td>
                      </div>
                      <textarea className={cx("text-des")} style={{ resize: 'none', width: '385px', border: 1, height: 150, marginLeft: 24, marginTop: 20, marginBottom: 20, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12 }} />
                      <td className={cx("button-type")}>
                        <button type="button" className={cx("button-send")} aria-disabled="false" >Send</button>
                      </td>
                    </div>
                  </Popup>
                  <Popup style={{ width: "120%" }} trigger={<button type="button" className={cx("button-save-details2")} aria-disabled="false" >Unban</button>}   {...{ contentStyle }} position="top center">
                    <div className={cx("text-all")} style={{ padding: 10 }}>
                      <div style={{ display: 'grid' }}>
                        <td style={{ fontWeight: 'bold', fontSize: "2.9rem", marginLeft: 0, color: 'red', textAlign: 'center', marginTop: 40 }}>Notice!</td>
                        <td style={{ fontWeight: '500', fontSize: "2.5rem", marginLeft: 0, color: 'black', textAlign: 'center', marginTop: 60 }}>Are you sure you want to unban this user?</td>
                      </div>
                      <td className={cx("button-type")}>
                        <button type="button" className={cx("button-send-2")} aria-disabled="false" >Accept</button>
                      </td>
                    </div>
                  </Popup>
                </div>
              </table>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};