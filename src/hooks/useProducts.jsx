import { useEffect, useState } from "react"
import solicitarProductos from "../fetching/productsFetching"

const useProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productos = await solicitarProductos()
                setProducts(productos)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setIsLoading(false)
            }
        }

        const timer = setTimeout(() => {
            getProducts()
        }, 3000)

        return () => clearTimeout(timer) // Limpia el timeout si el componente se desmonta

    }, [])

    return { isLoading, products }
}

export default useProducts