import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext';


const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState (null)
    const [loading, setLoading] = useState (true)
    const { addToCart } = useCart();

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${id}`)
        .then((res) => res.json())
        .then((data) =>{
            setPizza(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error al cargar la pizza:", error);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <p>Cargando pizza...</p>;
    if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className='form-container'>
        <img src={pizza.img} alt={pizza.name} style={{width:"100%", borderRadius:"10px"}} />
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
            {pizza.ingredients.map((ing,i)=>(
                <li key={i}>{ing}</li>
            ))}
        </ul>

        <p><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
        <button onClick={() => addToCart(pizza)} className='pay-btn'>Añadir al carrito</button>
      
    </div>
  )
}

export default Pizza
