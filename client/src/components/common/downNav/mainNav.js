import React from 'react';
import styles from './mainNav.module.scss'
import {NavLink} from 'react-router-dom';

const MainNav =()=> (
    <nav className={styles.nav}>
    
    <NavLink to='/Producenci'>Producenci</NavLink>
    <NavLink to='/Kawa'>Kawa</NavLink>
    <NavLink to='/Herbata'>Herbata</NavLink>
    <NavLink to='/Yerba'>Yerba</NavLink>
    <NavLink to='/Expresy$młynki'>Expresy i młynki</NavLink>
    <NavLink to='/Akcesoria'>Akcesoria</NavLink>
    <NavLink to='/Promocje'>Promocje</NavLink>
    </nav>
);

export default MainNav;