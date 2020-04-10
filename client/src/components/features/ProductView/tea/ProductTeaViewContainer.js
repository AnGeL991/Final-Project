import { connect } from "react-redux";
import ProductTeaView from "./ProductTeaView";
import {
  getTeaProduct,
  getRequest,
  loadTeaProductRequest,
} from "../../../../redux/teaRedux";

const mapStateToProps = state => ({
  teaProduct: getTeaProduct(state),
  request: getRequest(state),
});
const mapDispachToProps = dispatch => ({
  loadTea: () => dispatch(loadTeaProductRequest()),
});

export default connect(mapStateToProps, mapDispachToProps)(ProductTeaView);
