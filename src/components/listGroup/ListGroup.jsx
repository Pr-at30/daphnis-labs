import React from "react";
import styles from "./ListGroup.module.scss";

function ListGroup({ heading, items }) {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>{heading}</span>
      {items?.map((item) => (
        <span key={item} className={styles.itemsty}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default ListGroup;
