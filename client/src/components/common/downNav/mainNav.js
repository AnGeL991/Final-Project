import React from 'react';
import styles from './mainNav.module.scss'
import {NavLink} from 'react-router-dom';

const MainNav =()=> (
    <nav className={styles.nav}>
    <NavLink to='/'>Producenci</NavLink>
    <NavLink to='/'>Kawa</NavLink>
    <NavLink to='/'>Herbata</NavLink>
    <NavLink to='/'>Yerba</NavLink>
    <NavLink to='/'>Expresy i młynki</NavLink>
    <NavLink to='/'>Akcesoria</NavLink>
    <NavLink to='/'>Promocje</NavLink>
    </nav>
);

export default MainNav;