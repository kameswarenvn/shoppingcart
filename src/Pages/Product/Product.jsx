import React, { useContext } from 'react'
// import { CartContext } from '../../App'
import { useParams } from 'react-router-dom';
import Breadcrums from '../../Components/Breadcrums/Breadcrums';
import { CartContext } from '../../Context/CartContext';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import './Product.css'
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(CartContext);
  const {productId} = useParams();
  const product = all_product?.find((e) => e.id === Number(productId))
  return (
    <div className='productContainer'>
      <Breadcrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product