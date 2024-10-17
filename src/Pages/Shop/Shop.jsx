import React from 'react'
import { Footer, Header } from '../../Components'
import useProducts from '../../hooks/useProducts'
import './Shop.css'
import {useNavigate} from 'react-router-dom'

const solicitarDatos = async () => {
    const respuestaHttp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const resultado = await respuestaHttp.json()
    console.log(resultado)
  }


const Shop = () => {
    
    const { isLoading, products } = useProducts()

    const navigate = useNavigate();

    return (
        <>
        <div className="header"><Header /></div>
            <main className="shop-main">
                {
                    isLoading
                        ? <div className="cargando">
                        <h2>Cargando...</h2>
                        </div>
                        : products.map(
                            (producto) => {
                                return (
                                    <div key={producto.id} className="product-card">
                                        <img src={producto.photo} alt={producto.title} />
                                        <h3>{producto.title}</h3>
                                        <span>Precio: ${producto.price}</span>
                                        <button onClick={() => navigate(`/shop/detail/${producto.id}`)}>Ver detalle</button>  
                                    </div>
                                )
                            }
                        )
                }
            </main>
            <div className="footer"> <Footer /></div>
            </>
    )
}


export default Shop