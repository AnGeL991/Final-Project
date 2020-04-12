import React from 'react';
import styles from './dataPersonal.module.scss';


const dataPersonal =()=> (
    <div className={styles.container}>
    <h5>Dane do wysyłki:</h5>
    
    <input type="text" id="fname" name ="fname" placeholder="Imie"/>
    <input type="text" id="Sname" name ="Sname" placeholder="Nazwisko"/>
    <input type="email" id="email" name ="email" placeholder="email"/>
    <input type="text" id="adress" name="adress" placeholder="UL."/>
    <input type="text" id="adress" name="adress" placeholder="Miejsowość"/>
    <input type="text" id="adress" name="adress" placeholder="Kod-Pocztowy"/>
  </div>
);


export default dataPersonal;
