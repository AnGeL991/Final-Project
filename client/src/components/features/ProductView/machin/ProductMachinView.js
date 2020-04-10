import React from "react";
import { Alert, Progress } from "reactstrap";
import DataProductBox from "../../DataProductBox/DataProductBox";

class ProductMachinView extends React.Component {
  componentDidMount() {
    const { loadMachin } = this.props;
    loadMachin();
  }

  render() {
    const { request, machinProduct } = this.props;
    if (request.pending)
      return <Progress animated color="primary" value={50} />;
    else if (request.error)
      return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !machinProduct.length)
      return <Alert color="info">don't have machin in warehouse</Alert>;
    else if (request.success)
      return (
        <>
          <DataProductBox Product={machinProduct} />
        </>
      );
  }
}

export default ProductMachinView;
