import React, {useState, createContext, useEffect} from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import ShopCategory from './Pages/ShopCategory/ShopCategory'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import LoginSignUp from './Pages/LoginSignup/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { Provider } from 'react-redux'
import store from './store'
import Contact from './Pages/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import upArrow from './Components/Assets/upArrow.png'
import { CartProvider } from './Context/CartContext'


// export const CartContext = createContext();
const App = () => {
  const [cart, setCart] = useState([]);
  const [showUpArrow, setShowUpArrow] = useState(false);

    // const addToCart = (item) => {
    //     setCart((prevCart) => [...prevCart, item]);
    // };

    // console.log('INITIALIZE CART',cart)

    useEffect(() => {
      const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolledPercentage = (scrolled / (documentHeight - windowHeight)) * 100;
  
        if (scrolledPercentage > 25) {
          setShowUpArrow(true);
        } else {
          setShowUpArrow(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  return (
    <CartProvider>
     {/* <Provider store={store}> */}
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar/>
        {showUpArrow && (
          <div style={{ position: 'fixed', top: 120, right: 20, cursor: 'pointer', zIndex:10 }} onClick={scrollToTop}>
            <img src={upArrow} alt='Up Arrow' />
          </div>
        )}
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* </Provider> */}
     </CartProvider> 
  )
}

export default App