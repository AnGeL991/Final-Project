import React from 'react';
import styles from './table.module.scss';
//import PropTypes from 'prop-types';

const Table = () =>(
    <div className={styles.container}>
        <table className={styles.OrderTable}>
            <thead>
                <tr><th>Produkt</th><th>Wysyłka w</th><th>ilość</th><th>cena</th><th>Wartość</th></tr>
            </thead>
            <tbody className={styles.tableBody}>
                <tr>
                    <td>Kawa</td><td>24h</td><td>ilość</td><td>cena</td><td>wartość</td>
                </tr>
            </tbody>
        </table>
    </div>

);


export default Table;