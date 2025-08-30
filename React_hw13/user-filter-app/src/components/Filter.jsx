import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

function Filter({ setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Фильтр по имени..."
        onChange={handleChange}
        className={styles.filterInput}
      />
    </div>
  );
}

export default connect(null, { setFilter })(Filter);
