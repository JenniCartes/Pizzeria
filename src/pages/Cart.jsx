
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';


const Cart = () => {
    const {cart, increase, decrease, total } = useCart();
    const { token } = useUser();

         

  return (
    <div className='cart-container'>
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
                            
                            <div className='cart-buttons'>

                            <button onClick={() => increase(pizza.id)}>+</button>
                            <button onClick={() => decrease(pizza.id)}>-</button>
                            </div>
                        
                        </div>
                    </div>
                ))}
                

                <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
               
                <button className='pay-btn' 
                disabled={!token}>Pagar</button>
            </div>
        )}
    </div>
  )
}

export default Cart
