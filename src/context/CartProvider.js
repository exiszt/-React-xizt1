import { useState } from "react"
import { CartContext } from "./CartContext"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

const addQuantity = (item, quantity, stock) => {
    const exist = cart.find ((el) => el.id === item.id)
    if (exist) {
        if (exist.stock < quantity){
            Toastify({
                text: (`¡Lo sentimos! Nos quedan ${exist.stock} unidades en stock`),
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "red",
                },
                onClick: function(){}
              }).showToast()
        }else {
            exist.quantity = exist.quantity + quantity
            exist.stock = exist.stock - quantity
            setCart([...cart])
            Toastify({
                text: "Producto/s agregado/s satisfactoriamente",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                background: "deepskyblue",
                },
                onClick: function(){}
              }).showToast()
        }
    }else{
        setCart([...cart, {...item, quantity, stock}])
        Toastify({
            text: "Producto/s agregado/s satisfactoriamente",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "deepskyblue",
            },
            onClick: function(){}
          }).showToast()
    }
}

const deleteProduct = (prodId) =>{
    const item = cart.findIndex((prod) => prod.id === prodId) 
    let newArray = []
    cart.forEach(prod=> {
        if (prod.id !== prodId){
            newArray.push(prod)
        }
    })
    setCart(newArray)
}

const clearCart = () => {
    setCart([])
}


  return (
    <CartContext.Provider value={{cart, addQuantity, clearCart, deleteProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider