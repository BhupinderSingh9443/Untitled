import React, { useState } from "react";
import styles from "../styles/begin.module.css";
import Image from "next/Image";
// import Dropdown from "./dropdown/dropdown";
import opendropdown from "/assets/icons/open-dropdown.svg";
import closedropdown from "../assets/icons/close-dropdown.svg";
import progBig from "../assets/icons/progressMarkBig.png";
import progSmall from "../assets/icons/progressMarkSmall.png";

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
            <Image src={progBig} height="20" width="20" />
          </div>
          <div className={`${styles.circle2}`}>
            <Image src={progSmall} height="15" width="15" />
          </div>
          <div className={`${styles.circle3}`}>
            <Image src={progBig} height="15" width="15" />
          </div>
          <div className={`${styles.circle4}`}>
            <Image src={progSmall} height="15" width="15" />
          </div>
          <div className={`${styles.circle5}`}>
            <Image src={progBig} height="15" width="15" />
          </div>
          <div className={`${styles.circle6}`}>
            <Image src={progSmall} height="15" width="15" />
          </div>
          <div className={`${styles.circle7}`}>
            <Image src={progBig} height="15" width="15" />
          </div>
          <div className={`${styles.circle8}`}>
            <Image src={progSmall} height="15" width="15" />
          </div>
          <div className={`${styles.circle9}`}>
            <Image src={progBig} height="15" width="15" />
          </div>
          <div className={`${styles.circle10}`}>
            <Image src={progSmall} height="15" width="15" />
          </div>
        </div>
        <div className={`${styles.formContainer}`}>
          <div className={`${styles.formGroup}`}>
            <p>Company-Info</p>
            <label>Company Name:</label>
            <input placeholder="ABC Pvt. Ltd." />
          </div>
          <div className={`${styles.formGroup}`}>
            <p>Company-Info</p>
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
            <p id={`${styles.pTag}`}>
              If you have any further Domain, Please fill below detail
            </p>
          </div>
          <div className={`${styles.formGroup}`}>
            <p></p>
            <label></label>
            <div className={`${styles.inputGrid2}`}>
              <div className={`${styles.icon}`}>
                <input placeholder="Parent Domain"></input>
                <div className={`${styles.iconInd}`}>
                  <Image src={opendropdown} width="10" height="10" />
                </div>
              </div>
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
            <p>Country </p>
            <label>Country:</label>
            <div className={`${styles.country}`} />
          </div>

          <div className={`${styles.formGroup}`}>
            <p>Name</p>
            <label>Name:</label>
            <div className={`${styles.inputGrid3}`}>
              <input placeholder="First Name" />
              <input placeholder="Middle Name" />
              <input placeholder="Last Name" />
            </div>
          </div>

          <div className={`${styles.formGroup}`}>
            <p>Name</p>
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
            <p>Name</p>
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
            <p>Password</p>
            <label>Password</label>
            <input placeholder="Enter your password" />
          </div>
          <div className={`${styles.formGroup}`}>
            <p>Password</p>
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
    </div>
  );
};

export default BeginForm;
