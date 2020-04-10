import { connect } from "react-redux";
import ProductYerbaView from "./ProductYerbaView";
import {
  getYerbaProduct,
  getRequest,
  loadYerbaProductRequest,
} from "../../../../redux/yerbaRedux";

const mapStateToProps = (state) => ({
  yerbaProduct: getYerbaProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadYerba: () => dispatch(loadYerbaProductRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductYerbaView);
