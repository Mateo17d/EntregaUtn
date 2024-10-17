import React, { useEffect, useRef } from 'react';

import './Header.css';
import { CiBoxList } from "react-icons/ci";
import { MdClose } from "react-icons/md";

function Header() {
    const navRef = useRef(null);
    const abrirRef = useRef(null);
    const cerrarRef = useRef(null);

    useEffect(() => {
        abrirRef.current.addEventListener("click", (event) => {
            event.preventDefault(); // Add this line to prevent default link behavior
            navRef.current.classList.add("visible");
        });

        cerrarRef.current.addEventListener("click", () => {
            navRef.current.classList.remove("visible");
        });
    }, []);

    return (
        <header className='header'>
            <a href='/home' className='logo'>
                <img src="/logokongo.png" alt="logokongo" />
                <h2 className='nombre'>KING OF THE KONGO</h2>
                <button className='abrir-menu' id='abrir' ref={abrirRef}> <CiBoxList /></button>
            </a>
            <nav className='nav' id='nav' ref={navRef}>
                <button className='cerrar-menu' id='cerrar' ref={cerrarRef}> <MdClose /></button>
                <ul className='nav-list'>
                    <li>  <a href="/home" className="nav-link"> Inicio</a></li>
                    <li>  <a href="/shop" className="nav-link">Productos</a></li>
                    <li>   <a href="/contact" className="nav-link">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;