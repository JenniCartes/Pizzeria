import React, { useEffect, useState } from 'react'

const Pizza = () => {
    const [pizza, setPizza] = useState (null)
    const [loading, setLoading] = useState (true)
    const id = "p001"; //fijo por ahora

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas/p001")
        .then((res) => res.json())
        .then((data) =>{
            setPizza(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error al carcgar la pizza:", err);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Cargando pizza...</p>;
    if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className='form-container'>
        <img src={pizza.img} alt={pizza.name} style={{width:"100%", borderRadius:"10px"}} />
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <p><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
        <h4>Ingredientes:</h4>
        <ul>
            {pizza.ingredients.map((ing,i)=>(
                <li key={i}>{ing}</li>
            ))}
        </ul>
        <button className='pay-btn'>Añadir al carrito</button>
      
    </div>
  )
}

export default Pizza
