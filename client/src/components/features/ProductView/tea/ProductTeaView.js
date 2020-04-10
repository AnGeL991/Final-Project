import React from "react";
import { Alert, Progress } from "reactstrap";
import DataProductBox from "../../DataProductBox/DataProductBox";

class ProductTeaView extends React.Component {
  
    componentDidMount() {
    const { loadTea } = this.props;
    loadTea();
    console.log(loadTea());
  }

  render() {
    const { request, teaProduct } = this.props;
    if (request.panding) {
      return <Progress animated color="primary" value={50} />;
    } else if (request.error)
      return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !teaProduct.length)
      return <Alert color="info">don't have tea in the warehouse</Alert>;
    else if (request.success) return(
    <>
      <DataProductBox Product={teaProduct} />
    </>)
  }
}
export default ProductTeaView;
