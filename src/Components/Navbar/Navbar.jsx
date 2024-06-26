import React, {useState, useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
// import { CartContext } from '../../App'

const Navbar = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState('shop')
  const {cart}  = useContext(CartContext);
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'><img src={logo} alt=''/></Link>
        <Link style={{textDecoration:'none'}} to='/'><p>SHOPPER</p></Link>
      </div>
      <ul className='nav-menu' >
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === 'shop' ? <hr/> : <li></li>}</li>
        <li onClick={() => {setMenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu === 'mens' ? <hr/> : <li></li>}</li>
        <li onClick={() => {setMenu("womens")}}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu === 'womens' ? <hr/> : <li></li>}</li>
        <li onClick={() => {setMenu("kids")}}> <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu === 'kids' ? <hr/> : <li></li>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button onClick={() => {setMenu("login")}} >Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>
          {cart.length}
        </div>
      </div>
    </div>
  )
}

export default Navbar