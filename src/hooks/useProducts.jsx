import { useEffect, useState } from "react"
import solicitarProductos from "../fetching/productsFetching"

const useProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState(null)


    const getProducts = async () => {
        const productos = await solicitarProductos()
        setIsLoading(false)
        setProducts(productos)
    }
    
    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 3000)

    }, [])


    return {
        isLoading: isLoading,
        products: products
    }
}


export default useProducts
