import {connect} from 'react-redux';
import {getRequest,addProductRequest} from '../../../redux/orderRedux';
import order from './order';

const mapStateToProps = state => ({
    requests: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    addProduct:(order) => dispatch(addProductRequest(order)),
})



export default  connect(mapStateToProps,mapDispatchToProps)(order);