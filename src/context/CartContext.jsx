import { createContext, useContext, useState } from "react"
//1. crear caontexto
const CartContext = createContext();

//2. hook para usar el contexto
export const useCart = () => useContext(CartContext);

//3  proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

//Agregar al carrito
const addToCart = (pizza) => {
    setCart((prev) => {
        const found = prev.find((item) => item.id  === pizza.id);
        if (found) {
            return prev.map((item) =>
            item.id === pizza.id
        ? { ...item, count: item.count + 1 }
    : item
);
} else {
    return [...prev, { ...pizza, count:1}];
}
})
}

//Aumentar cantidad
const increase = (id) => {
    setCart((prev)=>
    prev.map((item) =>
    item.id === id ? { ...item, count: item.count + 1} : item
)
)
};

// disminuir cantidad 
const decrease = (id) => { setCart((prev)=>
prev.map((item) => 
    item.id === id ? { ...item, count: item.count -1 } : item
).filter((item) => item.count > 0)
)}

// Calcular total
const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

return (
    <CartContext.Provider value={{cart, setCart, addToCart, total, increase, decrease}}>
        {children}      
    </CartContext.Provider>
  )




}
 



export default CartContext
