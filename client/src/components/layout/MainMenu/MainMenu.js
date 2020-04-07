import React from 'react';
import styles from './MainMenu.module.scss';
import Logo from '../../common/logo/logo';
import ContactNav from '../../common/upNav/ContactNav';
import MainNav from '../../common/downNav/mainNav';

const MainMenu =()=>(

    <header className={styles.header}>
        <Logo/>
        <ContactNav/>
         <MainNav/>

    </header>
);

export default MainMenu;


