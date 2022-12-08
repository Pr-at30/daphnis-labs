import React from "react";
import styles from "./SearchBar.module.scss";
import { BiSearch } from 'react-icons/bi'

function SearchBar() {
  return (
    <div className={styles.searchbox}>
      <BiSearch style={{ padding: "0 10px" }} />

      <input
        className={styles.searchinput}
        type="text"
        placeholder="Paracetamol"
      />
      <button className={styles.searchbtn}>Search</button>
    </div>
  );
}

export default SearchBar;
