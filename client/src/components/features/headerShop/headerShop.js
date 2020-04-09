import React from 'react';
import styles from './headerShop.module.scss';
import PropTypes from "prop-types";
import SearchBox from '../../common/SearchBox/searchBox';

const headerShop =({title})=>(
    <header className={styles.upBox}>
    <h3 className={styles.title}>{title}</h3>
   <SearchBox maxLength="100" placeholder="Wyszukaj"/>
  </header>

);

headerShop.propTypes= {
    title: PropTypes.string.isRequired
}


export default headerShop;