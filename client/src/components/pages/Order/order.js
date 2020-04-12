import React from 'react'
import styles from './order.module.scss'
import Button from '../../common/Button/Button'
import Delivery from '../../common/delivery/delivery'
//import DataPersonal from '../../common/DataPersonal/dataPersonal'
import Table from '../../common/Table/table'

class Order extends React.Component {
  state = {
    order: {
      name: '',
      surname: '',
      email: '',
      addres: '',
      price: 11,
      delivery: 2
    },
    isError: false
  }

  updateTextField = ({ target }) => {
    const { order } = this.state
    const { value, name } = target

    this.setState({ order: { ...order, [name]: value } })
  }
  updateChoseField = ({target}) => {
    const {order} = this.state;
    const {value, name} = target;

    this.setState({order: {...order,[name]: value}});
  }
  SubmitForm = async e => {
    const { order } = this.state
    const { addProduct } = this.props
    e.preventDefault()
    if (order.name && order.surname && order.email && order.addres) {
      await addProduct(order)
      this.setState({
        order: {
          name: '',
          surname: '',
          email: '',
          addres: '',
          price: '',
          delivery: '',
        },
        isError: false
      })
    } else {
      this.setState({ isError: true })
    }
  }

  render() {
    const { SubmitForm, updateTextField } = this
    const { order, isError } = this.state

    return (
      <div className={styles.container} onSubmit={SubmitForm}>
        <div className={styles.headerOrder}>
          <h3 className={styles.title}>Zawartość Twojego koszyka</h3>
          <Table  />
        </div>
        <div className={styles.personalData}>
          <h5>Dane do wysyłki:</h5>

          <input
            type="text"
            value={order.name}
            id="fname"
            name="fname"
            onChange={updateTextField}
            placeholder="Imie"
          />
          <input
            type="text"
            value={order.surname}
            id="Sname"
            name="Sname"
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
            value={order.addres}
            id="adress"
            name="adress"
            onChange={updateTextField}
            placeholder="UL."
          />
          <input
            type="text"
            value={order.addres}
            id="adress"
            name="adress"
            placeholder="Miejsowość"
          />
          <input
            value={order.addres}
            type="text"
            id="adress"
            name="adress"
            placeholder="Kod-Pocztowy"
          />
        </div>

        <div className={styles.deliveryContainer}>
          <h5>Dostawa:</h5>
          <Delivery
            value={order.delivery}
            label="Kurier GLS - Przedpłata"
            description="dostawa nawet w 24h"
            price={11.9}
          />
          <Delivery
            value={order.delivery}
            label="Kurier GLS - Pobranie"
            description="dostawa nawet w 24h"
            price={20.9}
          />
          <Delivery
            value={order.delivery}
            label="Paczkomaty inPost - Przedpłata"
            description="dostawa nawet w 48h"
            price={10.9}
          />
        </div>
        <div className={styles.paymentContainer}>
          <h5>Płatność:</h5>
          <Delivery
            value={order.delivery}
            label="Przelew"
            description="Przedpłata na konto bankowe"
          />
          <Delivery
            value={order.delivery}
            label="DotPay.pl"
            description="Karty płatnicze / Blik /Etc. "
          />
          <Delivery
            value={order.delivery}
            label="Pobranie "
            description="Gotówka przy dostawie"
          />
        </div>
        <div className={styles.summaryContainer}>
          <span>Razem: {order.price.toFixed(2)}zł</span>
          {order.delivery === null || ' ' ?  <span>Koszt dostawy: 0zł</span> : <span>Koszt dostawy: {order.delivery.toFixed(2)}</span>}
          <span>Do zapłaty: {(order.price + order.delivery).toFixed(2)}zł</span>
        </div>
        <div className={styles.BoxPosition}>
          <div className={styles.position}>
            <Button>Kontynuj Zakupy</Button>
          </div>
          <div className={styles.position}>
            <Button>Zamawiam</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Order
