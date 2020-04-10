import React from "react";
import { Alert, Progress } from "reactstrap";
import BrandDetail from "../brandDetail/BrandDetail";

class BrandList extends React.Component {
  componentDidMount() {
    const { loadBrand } = this.props;
    loadBrand();
  }
  render() {
    const { request, brandProduct } = this.props;
    if(request.pending)
    return <Progress animated color="primary" value={50}/>
    else if(request.error)
    return <Alert color="warining">{request.error}</Alert>;
    else if(!request.success || !brandProduct.length)
    return <Alert color="info"> Something is wrong!!</Alert>
    else if(request.success)
    return (
        <>
        <section>
            {brandProduct.map(el => <BrandDetail kay={el.id} {...el}/>)}
        </section>
        </>
    );
}
}
export default BrandList;
