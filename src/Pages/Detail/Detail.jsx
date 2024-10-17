import React from "react";
import { Link, useParams } from "react-router-dom"; 
import { Footer, Header } from "../../Components";
import useProducts from '../../hooks/useProducts';
import './Detail.css'

const Detail = () => {
    const { isLoading, products } = useProducts();
    const { id } = useParams();
    const productId = parseInt(id, 10); 

    return (
        <>
            <Header />
            <main className="main">
                {isLoading ? (
                    <div className="cargando">
                        <h2>Cargando...</h2>
                    </div>
                ) : (
                    <>
                        {(!products || products.length === 0) ? (
                            <h2 className="Error">Producto no encontrado</h2>
                        ) : (
                            (() => {
                                const product = products.find((prod) => prod.id === productId);
                                if (!product) {
                                    return <h2 className="Error">Producto no encontrado</h2>;
                                }

                                return (
                                    <div className="detail-product">
                                        <img src={product.photo} alt={product.title} />
                                        <div className="detail-product-info">
                                            <h3>{product.title}</h3>
                                            <span>${product.price}</span>
                                            <p>{product.description}</p>
                                            <Link to="/shop">
                                                <button className="btn-volver">Volver</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })()
                        )}
                    </>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Detail;