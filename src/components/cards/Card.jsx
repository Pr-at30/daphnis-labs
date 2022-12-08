import React from "react";
import styles from "./Card.module.scss";
import medImg from "../../assets/med.jpg";
import { FaPaperPlane } from "react-icons/fa";

function Card() {
  return (
    <>
      <div className={styles.ccontainer}>
        <img src={medImg} alt="MedicineImage" />
        <h3>Favipiravir 400mg (Fabiflu) Tablets</h3>
        <span>
          {" "}
          <span className={styles.price}>Rs 1,775</span>{" "}
          <span className={styles.dash}>/</span>{" "}
          <span className={styles.stripe}>stripe</span>
        </span>

        <p>
          <b>Glenmark Pharmaceutical Limited</b>
        </p>

        <p className={styles.end}>PARVAT PATIYA, SURAT, GUJRAT</p>

        {/* Line */}
        <div className={styles.line}></div>

        <div className={styles.supp}>
          <FaPaperPlane className={styles.icon} />
          <span>Contact Supplier</span>
        </div>
      </div>
    </>
  );
}

export default Card;
