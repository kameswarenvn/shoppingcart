import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li><Link style={{textDecoration:'none'}} to='/contact'>Company</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/contact'>Products</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/contact'>Offices</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/contact'>About</Link></li>
            <li><Link style={{textDecoration:'none'}} to='/contact'>Contact</Link></li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icons-container">
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt='Instagram' />
          </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <img src={pintester_icon} alt='Instagram' />
          </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt='Instagram' />
          </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook_icon} alt='Instagram' />
          </a>
            </div>
           
        </div>
           <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>

           </div>
    </div>
  )
}

export default Footer