import React, { useContext } from 'react';
import './Item.css';
// import { CartContext } from '../../App';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Item = (props) => {
    const {addToCart}  = useContext(CartContext); // Destructure addToCart from the context

    const handleAddToCart = () => {
        const item = {
            image: props.image,
            name: props.name,
            new_price: props.new_price,
            old_price: props.old_price
        };
        addToCart(item); // Call addToCart function
        // console.log('$$$$$$$$',addToCart);
        // console.log('Item added to cart:', item);
    };

    return (
        <div className='item'>
            <Link to={`/product/${props.id}`} >
           <img src={props.image} alt={props.name} />
            </Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className='item-price-old'>
                    ${props.old_price}
                </div>
                <button onClick={handleAddToCart} className='item-cart'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Item;
