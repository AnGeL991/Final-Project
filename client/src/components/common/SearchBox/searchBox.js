import React from 'react';
import styles from './searchBox.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const searchBox =({placeholder,maxLength})=>(
    <div className={styles.searchInput}>
    <input maxLength={maxLength} name="search" type="search" autoComplete="off" placeholder={placeholder}></input>
    <div className={styles.circleSearch}>
      <FontAwesomeIcon icon={faSearch} className={styles.circleIcon}/>
    </div>
    </div>

);

searchBox.propTypes={
    placeholder: PropTypes.string.isRequired,
    maxLength:PropTypes.number
}
export default searchBox;