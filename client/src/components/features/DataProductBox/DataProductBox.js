import React from 'react';
import ProductBox from '../../common/ProductBox/productBox';

const DataProductBox =({Product}) => (
    <section>
        {Product.map(el => <ProductBox key={el.id} {...el}/>)}
    </section>
)
export default DataProductBox;