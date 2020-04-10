import {connect} from 'react-redux';
import {getMachinProduct,loadMachinProductRequest,getRequest} from '../../../../redux/machinRedux';
import ProductMachinView from './ProductMachinView';

const mapStateToProps = state => ({
    machinProduct: getMachinProduct(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadMachin: ()=> dispatch(loadMachinProductRequest()),
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductMachinView);

