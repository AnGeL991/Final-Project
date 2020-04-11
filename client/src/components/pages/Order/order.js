import React from 'react'
import styles from './order.module.scss'
import Button from '../../common/Button/Button'
import Delivery from '../../common/delivery/delivery';

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerOrder}>
        <h3 className={styles.title}>Zawartość Twojego koszyka</h3>
      </div>
      <div className={styles.deliveryContainer}>
        <h5>Dostawa:</h5>
       <Delivery label='Kurier GLS - Przedpłata' description="dostawa nawet w 24h" />
       <Delivery label='Kurier GLS - Pobranie' description="dostawa nawet w 24h"/>
       <Delivery label='Paczkomaty inPost - Przedpłata' description="dostawa nawet w 48h"/>
       
        
      </div>
      <div></div>
      <div></div>
      <div className={styles.BoxPosition}>
        <div className={styles.position}>
          <Button>Kontynuuj Zakupy</Button>
        </div>
        <div className={styles.position}>
          <Button>Zamawiam</Button>
        </div>
      </div>
    </div>
  )
}

export default Order
