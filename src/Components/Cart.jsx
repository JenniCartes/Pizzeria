import React, { useState } from 'react'
import { pizzaCart } from '../assets/pizzas'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const increase = (id) => {
        setCart(prev =>
            prev.map(item => 
                item.id === id ? { ...item, count: item.count + 1} : item
            )
        )
    }

     const decrease = (id) => {
        setCart(prev => 
            prev
            .map(item => item.id ===id ? {...item, count: item.count -1 } : item    
            )
            . filter (item => item.count > 0) )
     }
     
     const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)
        

  return (
    <div className='form-container'>
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ?(
            <p>No hay  pizzas en el carrito.</p>
        ):(
            <div>
                {cart. map((pizza) => (
                    <div key={pizza.id} className='cart-item'>
                        <img src={pizza.img} alt={pizza.name} width="80" />
                        <div className='cart-info'>
                            <h4>{pizza.name}</h4>
                            <p>Precio: ${pizza.price.toLocaleString()}</p>
                            <p>Cantidad: {pizza.count}</p>
                            <p>Subtotal: $ {(pizza.price*pizza.count).toLocaleString()}</p>
                            <button onClick={() => increase(pizza.id)}>+</button>
                            <button onClick={() => decrease(pizza.id)}>-</button>
                        </div>
                    </div>
                ))}
                <h3>Total: ${total.toLocaleString()}</h3>
                <button className='pay-btn'>Pagar</button>
            </div>
        )}
    </div>
  )
}

export default Cart
