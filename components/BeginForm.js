import React, { useState } from "react";
import styles from "../styles/begin.module.css";
import Image from "next/Image";
// import Dropdown from "./dropdown/dropdown";
import opendropdown from "/assets/icons/open-dropdown.svg";
import closedropdown from "../assets/icons/close-dropdown.svg";
import progBig from "../assets/icons/progressMarkBig.png";
import progSmall from "../assets/icons/progressMarkSmall.png";
import playStore from "../assets/icons/googlePlay.png";
import AppStore from "../assets/icons/AppStore.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook-1.png";
import Dropdown2 from "./dropdown/dropdown2";

const BeginForm = () => {
  return (
    <div className="begin-form-container">
      <div className="dflex-col">
        <div className="header" />
        <div className={`${styles.header2} dflex-col`}>
          <h4>Welcome Service Seeker</h4>
          <h2>Begin Your Journey with CrossK</h2>
          <p>
            Sed ut persciatis unde omns iste natus error sit voptatem accus
            antium molore mque laudtoptatem accum dolremque laudtorere
          </p>
        </div>
      </div>
      <div className={`${styles.formAndProgressBar}`}>
        <div className={`${styles.progressBar}`}>
          <div className={`${styles.circle1}`}>
            <img src="/icons/progressMarkBig.png" alt="Progress" />
          </div>
          <div className={`${styles.circle2}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle3}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle4}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle5}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle6}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle7}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle8}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle9}`}>
            <img src="/icons/progressMarkSmall.png" alt="Progress" />
          </div>
          <div className={`${styles.circle10}`}>
            <img src="/icons/progressMarkBig.png" alt="Progress" />
          </div>
        </div>
        <div className={`${styles.formContainer}`}>
          <div className={`${styles.formGroup}`}>
            <p className={styles.companyInfo}>Company-Info</p>
            <label>Company Name:</label>
            <input placeholder="ABC Pvt. Ltd." />
          </div>
          <div className={`${styles.formGroup}`}>
            <p></p>
            <label>Company Domain:</label>
            <div className={`${styles.inputGrid}`}>
              <input placeholder="www" />
              <input placeholder="abc" />
              <div className={`${styles.icon}`}>
                <input placeholder=".com" />
                <div className={`${styles.iconInd}`}>
                  <Image src={opendropdown} width="10" height="10" />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.formGroup}`}>
            <p></p>
            <label></label>
            <p className={`${styles.pTag}`}>
              If you have any further Domain, Please fill below detail
            </p>
          </div>
          <div className={`${styles.formGroup}`}>
            <p></p>
            <label></label>
            <div className={`${styles.inputGrid2}`}>
              <div className={`${styles.icon}`}>
                <input
                  className={styles["i-2-g-1"]}
                  placeholder="Parent Domain"
                ></input>
                <div className={`${styles.iconInd}`}>
                  <Image src={opendropdown} width="10" height="10" />
                </div>
              </div>
              <input className={styles["i-2-g-2"]} placeholder="www" />
              <input className={styles["i-2-g-3"]} placeholder="abc" />
              <div className={`${styles.icon}`}>
                <input className={styles["i-2-g-4"]} placeholder=".com" />
                <div className={`${styles.iconInd}`}>
                  <Image src={opendropdown} width="10" height="10" />
                </div>
              </div>

              {/* <div className={styles.drpdn}>
                <Dropdown2 />
              </div> */}
            </div>
          </div>
          <div className={`${styles.formGroup}`}>
            <p> </p>
            <label>Country:</label>
            <div className={`${styles.country}`}>
              <div className={styles.selectAllAndCheckBox}>
                <p className={styles.selectAll}>Select All</p>
                <input type="checkbox"></input>
              </div>
              {[
                { label: "Country Name", value: "India" },
                { label: "Country Name", value: "US" },
                { label: "Country Name", value: "UK" },
                { label: "Country Name", value: "Pakistan" },
                { label: "Country Name", value: "India" },
                { label: "Country Name", value: "US" },
                { label: "Country Name ", value: "UK" },
                { label: "Country Name", value: "Pakistan" },
              ].map((country) => (
                <div className={styles.countrySelect}>
                  <div className={styles.countryName}>
                    <p>{country.label}</p>
                    <input className={styles.checkBox} type="checkbox"></input>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.formGroup}`}>
            <p></p>
            <label>Name:</label>
            <div className={`${styles.inputGrid3}`}>
              <input placeholder="First Name" />
              <input placeholder="Middle Name" />
              <input placeholder="Last Name" />
            </div>
          </div>

          <div className={`${styles.formGroup}`}>
            <p></p>
            <label>Email Address:</label>
            <div className={`${styles.inputGrid5}`}>
              <input placeholder="Username" />
              <input placeholder="@domain" />
              <div className={`${styles.icon}`}>
                <input placeholder=".com" />
                <div className={`${styles.iconInd}`}>
                  <Image src={opendropdown} width="10" height="10" />
                </div>
              </div>
              <button className="btn-primary margin-left">Verify</button>
            </div>
          </div>

          <div className={`${styles.formGroup} ${styles.formGroup2}`}>
            <p></p>
            <label>Phone Number:</label>
            <div className={`${styles.inputGrid4}`}>
              <div className={`${styles.icon}`}>
                <input placeholder="+91" />
                <div className={`${styles.iconInd}`}>
                  <Image src={opendropdown} width="10" height="10" />
                </div>
              </div>
              <input placeholder="Enter your phone number" />
              <button className="btn-primary">Verify</button>
              <button className="btn-grey">Skip</button>
            </div>
          </div>
          <div className={`${styles.formGroup}`}>
            <p></p>
            <label>Password</label>
            <input placeholder="Enter your password" />
          </div>
          <div className={`${styles.formGroup}`}>
            <p></p>
            <label>Confirm-password:</label>
            <input placeholder="Re-enter your pasword" />
          </div>
          <div className="btn-container">
            <button className="btn-primary medium">
              Continue for Eligibility Check
            </button>
          </div>
        </div>
      </div>

      <div className={styles.navBottomContainer}>
        <div className={styles.navBottom}>
          <div className={styles.dCol}>
            <h4>CrossK on Mobile</h4>
            <div>
              <Image src={playStore} />
            </div>
            <div>
              <Image src={AppStore} />
            </div>
          </div>
          <div className={styles.dCol}>
            <h4>Company</h4>
            <a>About us</a>
            <a>Contact us</a>
            <a>FAQ</a>
          </div>
          <div className={`${styles.dCol} ${styles.marginL}`}>
            <h4>Legal</h4>
            <a>Terms & conditions</a>
            <a>Privacy Policy</a>
          </div>
          <div className={styles.dCol}>
            <h4>Follow us</h4>
            <div className={styles.dRow}>
              <div className={styles.social}>
                <Image src={facebook} />
              </div>
              <div className={styles.social}>
                <Image src={twitter} />
              </div>
              <div className={styles.social}>
                <Image src={linkedin} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright @ CrossK 2020</p>
        </div>
      </div>
    </div>
  );
};

export default BeginForm;
