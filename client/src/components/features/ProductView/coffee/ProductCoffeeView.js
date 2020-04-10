import React from "react";
import { Alert, Progress } from "reactstrap";
import DataProductBox from "../../DataProductBox/DataProductBox";

class ProductCoffeeView extends React.Component {
  componentDidMount() {
    const { loadCoffee } = this.props;
    loadCoffee();
  }

  render() {
    const { request, coffeeProduct } = this.props;
    if (request.pending)
      return <Progress animated color="primary" value={50} />;
    else if (request.error)
      return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !coffeeProduct.length)
      return <Alert color="info">don't have coffee on the warehouse</Alert>;
    else if (request.success)
      return (
        <>
          <DataProductBox Product={coffeeProduct} />
        </>
      );
  }
}

export default ProductCoffeeView;
