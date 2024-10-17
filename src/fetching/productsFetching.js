const getApiUrl = () => {
    return process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5173/data/products.json'
        : '/data/products.json';
}

const solicitarProductos = async () => {
    const URL_API_PRODUCTS = getApiUrl();

    const respuestaHttp = await fetch(URL_API_PRODUCTS, {
        method: 'GET'
    });
    const resultado = await respuestaHttp.json();
    return resultado;
}

export const obtenerProductoPorId = async (id) => {
    const URL_API_PRODUCTS = getApiUrl();

    const respuestaHttp = await fetch(URL_API_PRODUCTS, {
        method: 'GET'
    });
    const productos = await respuestaHttp.json();

    const productoEncontrado = productos.find((producto) => {
        return producto.id === id;
    });
    console.log(productoEncontrado);
    return productoEncontrado;
}

export default solicitarProductos;