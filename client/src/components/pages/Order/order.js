import React from 'react'
import styles from './order.module.scss'
import Delivery from '../../common/delivery/delivery'
import { Alert, Progress } from 'reactstrap'
import Button from '../../common/Button/Button'
import Table from '../../common/Table/table'

class Order extends React.Component {
  state = {
    order: {
      name: '',
      surname: '',
      email: '',
      addresStreet: '',
      addressCity: '',
      addressPostCode: '',
      price: 0,
      delivery: 0
    },
    isError: false
  }

  updateTextField = ({ target }) => {
    const { order } = this.state
    const { value, name } = target

    this.setState({ order: { ...order, [name]: value } })
  }
  updateChoseField = ({ target }) => {
    const { order } = this.state
    const { value, name } = target

    this.setState({ order: { ...order, [name]: value } })
  }
  SubmitForm = async e => {
    const { order } = this.state
    const { addProduct } = this.props
    e.preventDefault()
    if (
      order.name &&
      order.surname &&
      order.email &&
      order.addresStreet &&
      order.addressCity &&
      order.addressPostCode
    ) {
      await addProduct(order)
      this.setState({
        order: {
          name: '',
          surname: '',
          email: '',
          addresStreet: '',
          addressCity: '',
          addressPostCode: ''
        },
        isError: false
      })
    } else {
      this.setState({ isError: true })
    }
  }

  render() {
    const { SubmitForm, updateTextField } = this
    const { requests } = this.props
    const { order, isError } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.headerOrder}>
          <h3 className={styles.title}>Zawartość Twojego koszyka</h3>
          <Table />
        </div>
        <div className={styles.personalData}>
          <form  onSubmit={SubmitForm}>
            {isError && <Alert color="warning">NIe działa</Alert>}
            {requests['ADD_PRODUCT'] &&
              requests['ADD_PRODUCT'].error &&
              !isError && (
                <Alert color="danger">{requests['ADD_PRODUCT'].error}</Alert>
              )}
            {requests['ADD_PRODUCT'] &&
              requests['ADD_PRODUCT'].success &&
              !isError && (
                <Alert color="success">
                  You've booked your ticket! Check you email in order to make a
                  payment.
                </Alert>
              )}
            {requests['ADD_PRODUCT'] && requests['ADD_PRODUCT'].pending && (
              <Progress animated className="mb-5" color="primary" value={75} />
            )}
            <h5>Dane do wysyłki:</h5>
            <input
              type="text"
              value={order.name}
              id="fname"
              name="name"
              onChange={updateTextField}
              placeholder="Imie"
            />
            <input
              type="text"
              value={order.surname}
              id="Sname"
              name="surname"
              onChange={updateTextField}
              placeholder="Nazwisko"
            />
            <input
              type="email"
              value={order.email}
              id="email"
              name="email"
              onChange={updateTextField}
              placeholder="email"
            />
            <input
              type="text"
              value={order.addresStreet}
              name="addresStreet"
              onChange={updateTextField}
              placeholder="UL."
            />
            <input
              type="text"
              value={order.addressCity}
              name="addressCity"
              onChange={updateTextField}
              placeholder="Miejsowość"
            />
            <input
              value={order.addressPostCode}
              type="text"
              name="addressPostCode"
              onChange={updateTextField}
              placeholder="Kod-Pocztowy"
            />
            <div className={styles.BoxPosition}>
              <div className={styles.position}>
                <Button>Kontynuj Zakupy</Button>
              </div>
              <div className={styles.position}>
                <Button props="submit">Zamawiam</Button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.deliveryContainer}>
          <h5>Dostawa:</h5>
          <Delivery
            //value={order.delivery}
            //onChange={updateTextField}
            label="Kurier GLS - Przedpłata"
            description="dostawa nawet w 24h"
            price={11.9}
          />
          <Delivery
            //onChange={updateTextField}
            //value={order.delivery}
            label="Kurier GLS - Pobranie"
            description="dostawa nawet w 24h"
            price={20.9}
          />
          <Delivery
            //onChange={updateTextField}
            //value={order.delivery}
            label="Paczkomaty inPost - Przedpłata"
            description="dostawa nawet w 48h"
            price={10.9}
          />
        </div>
        <div className={styles.paymentContainer}>
          <h5>Płatność:</h5>
          <Delivery
            //value={order.delivery}
            label="Przelew"
            description="Przedpłata na konto bankowe"
          />
          <Delivery
            //value={order.delivery}
            label="DotPay.pl"
            description="Karty płatnicze / Blik /Etc. "
          />
          <Delivery
            // value={order.delivery}
            label="Pobranie "
            description="Gotówka przy dostawie"
          />
        </div>
        <div className={styles.summaryContainer}>
          <span>Razem: {order.price}zł</span>
          {order.delivery === null || ' ' ? (
            <span>Koszt dostawy: 0zł</span>
          ) : (
            <span>Koszt dostawy: {order.delivery.toFixed(2)}</span>
          )}
          <span>Do zapłaty: {order.price + order.delivery}zł</span>
        </div>
      </div>
    )
  }
}

export default Order
