import React from 'react'
import CartItems from '../../Components/CartItems/CartItems'

const Cart = () => {
  return (
    <div>
      <CartItems/>
    </div>
  )
}

export default Cart





// import React, {useContext} from 'react'
// import './Cart.css'
// import { CartContext } from '../../Context/CartContext';

// const Cart = () => {
//   const {cart}  = useContext(CartContext);
//   return (
//     <div>
//       {cart.map((item,index) => {
//         return(
//           <div className='added-cart'>
//               <img className='cart-pic' src={item.image} alt='' />
//               <div>
//               <h2>{item.name}</h2>
//               <p>{item.new_price}</p>
//               <p>{item.old_price}</p>

//               </div>
//           </div>
//         )
//       })}
//       </div>
//   )
// }

// export default Cart