import React from 'react';
import styles from './dataPersonal.module.scss';
import {Alert,Progress} from 'reactstrap'
import Button from '../Button/Button';

class dataPersonal extends React.Component {

  state = {
    order: {
      name: '',
      surname: '',
      email: '',
      addresStreet: '',
      addressCity:'',
      addressPostCode:'',
      //price: 11,
      //delivery: 2
    },
    isError: false
  };

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
    e.preventDefault();
    if (order.name && order.surname && order.email && order.addresStreet && order.addressCity && order.addressPostCode) {
      await addProduct(order)
      this.setState({
        order: {
          name: '',
          surname: '',
          email: '',
          addresStreet: '',
          addressCity:'',
          addressPostCode:'',
          // price: '',
          // delivery: '',
        },
        isError: false
      })
    } else {
      this.setState({ isError: true })
    }
  }
  render() {
  const { SubmitForm, updateTextField } = this;
  const {requests} = this.props;
  const { order,isError} = this.state;
  
  return (
    <form className={styles.personalData} onSubmit={SubmitForm}>
    { (isError) && <Alert color="warning">NIe działa</Alert> }
        { (requests['ADD_PRODUCT'] && requests['ADD_PRODUCT'].error && !isError) && <Alert color="danger">{requests['ADD_PRODUCT'].error}</Alert> }
        { (requests['ADD_PRODUCT'] && requests['ADD_PRODUCT'].success && !isError) && <Alert color="success">You've booked your ticket! Check you email in order to make a payment.</Alert> }
        { (requests['ADD_PRODUCT'] && requests['ADD_PRODUCT'].pending) && <Progress animated className="mb-5" color="primary" value={75} /> }
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
        <Button props='submit'>Zamawiam</Button>
      </div>
      </div>
    </form>
  )};
};


export default dataPersonal;
