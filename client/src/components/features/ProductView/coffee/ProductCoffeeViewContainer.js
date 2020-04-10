import {connect} from 'react-redux';
import {getCoffeeProduct,loadCoffeeProductRequest,getRequest} from '../../../../redux/coffeeRedux';
import ProductCoffeeView from './ProductCoffeeView';

const mapStateToProps = state => ({
    coffeeProduct: getCoffeeProduct(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadCoffee: ()=> dispatch(loadCoffeeProductRequest()),
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductCoffeeView);

