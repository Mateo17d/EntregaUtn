import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <footer className='footer'>
            
                <div className="contact-info">
                    <h2>Direccion</h2>
                    <p>El Salvador 4577, Palermo</p>
                    <h2>Telefono</h2>
                    <p>5491122513184</p>
                    <h2>Correo electrónico:</h2>
                    <p> KingOfTheKongo@kongo.com</p>
                </div>


                <div className="copyright">
                    <p className='footer-text-firma'> © King of the Kongo - 2024</p>
                </div>

                <div className="social-media">
                    <div className='icons'><FaFacebookF /><a href="https://www.facebook.com/Kingofthekongo/"> Facebook </a></div>
                    

                    <div className='icons'><FaYoutube /><a href="https://www.youtube.com/channel/UCwRGTUBD9apPIzmhzjy3fqw"> Youtube </a></div>
                    

                    <div className='icons'><FaInstagram /><a href="https://www.instagram.com/kingofthekongo"> Instagram </a></div>
                    

                </div>



            
        </footer>
    );
}

export default Footer;