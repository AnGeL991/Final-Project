import { connect } from "react-redux";
import BrandList from "./BrandList";
import {
  getBrand,
  getRequest,
  loadbrandRequest,
} from "../../../redux/brandRedux";

const mapStateToProps = (state) => ({
  brandProduct: getBrand(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBrand: () => dispatch(loadbrandRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);
