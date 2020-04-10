import React from "react";
import { Alert, Progress } from "reactstrap";
import DataProductBox from "../../DataProductBox/DataProductBox";

class ProductYerbaView extends React.Component {
  componentDidMount() {
    const { loadYerba } = this.props;
    loadYerba();
  }
  render() {
      const { request , yerbaProduct} =this.props;
      if(request.panding)
      return <Progress animated color="primary" value={50}/>
      else if (request.error)
      return <Alert color="warning">{request.error}</Alert>;
      else if (!request.success || !yerbaProduct.length)
      return <Alert color="info">don't have yerba on the warehouse</Alert>;
      else if (request.success)
      return (
          <>
          <DataProductBox Product={yerbaProduct}/>
          </>
      );

  }
}

export default ProductYerbaView;
