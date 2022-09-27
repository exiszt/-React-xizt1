import { createContext, useState } from "react"

export const CartContext = createContext([])

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            addQuantity(item)
        } else {
            setCart([...cart, item])
        }
    }

    console.log(cart)

    const isInCart = (id) => cart.some((product) => product.id === id)

    const addQuantity = (item) => {
        const currentCart = cart.map((product) =>
            product.id === item.id
                ? { ...product, quantity: item.quantity }
                : product
        )
        setCart(currentCart)
    }

    const deleteProduct = (id) => {
        console.log('El producto con la id ' + id + 'ha sido eliminado')
        setCart(cart.filter((product) => product.id !== id))
    }

    const clearCart = () => setCart([])

    const totalQuantityWidget = () => {
        let acumulador = 0
        cart.forEach((product) => {
            acumulador += product.quantity
        })
        return acumulador === 0
            ? ''
            : acumulador
    }

    const qnty = (id) => {
        const item = cart.find(product => product.id === id)
        return item ? item.quantity : 0

    }

    const totalPrice = () => {
        let acumulador = 0
        cart.forEach((product) => {
            acumulador += product.precio * product.quantity
        })
        return acumulador
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, deleteProduct, totalPrice, totalQuantityWidget, qnty }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider