import React from 'react';
import styles from './productInfo.module.scss';
import Button from '../Button/Button';
const productInfo =()=>(
    <div className={styles.products}>
    <div className={styles.productInfo}>
    <div className={styles.imgProductInfo}>
    <img src="https://images.unsplash.com/photo-1560842877-e8fdccf4a751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60" alt='Lavazza'/>
        <div className={styles.title}><Button>Nasi producenci</Button></div>
    </div>

    </div>
    <div className={styles.productInfo}>
    <div className={styles.imgProductInfo}>
        <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60" alt='Coffee'/>
        <div className={styles.title}><Button>Najlepsze Kawy</Button></div>
    </div>


    </div>
    <div className={styles.productInfo}>
    <div className={styles.imgProductInfo}>
    <img src="https://images.unsplash.com/photo-1536677813196-8fed27bcecdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60" alt='Tea'/>
        <div className={styles.title}><Button>Wspaniałe Herbaty</Button></div>
    </div>
    </div>
    <div className={styles.productInfo}>
    <div className={styles.imgProductInfo}>
    <img src="https://images.unsplash.com/photo-1523642456391-c597480dbdb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60" alt='yerba'/>
        <div className={styles.title}><Button>Orzeźwiająca Yerba</Button></div>
    </div>
    </div>
    <div className={styles.productInfo}>
    <div className={styles.imgProductInfo}>
    <img src="https://images.unsplash.com/photo-1496582490020-60c1344c64aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60" alt='Coffe Machine'/>
        <div className={styles.title}><Button>Expresy i młynki</Button></div>
    </div>
    </div>
    <div className={styles.productInfo}>
    <div className={styles.imgProductInfo}>
    <img src="https://images.unsplash.com/photo-1518975650263-c887d6f1d6f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60" alt='accessories'/>
        <div className={styles.title}><Button>Akcesoria</Button></div>
    </div>
    </div>
</div>

);

export default productInfo;