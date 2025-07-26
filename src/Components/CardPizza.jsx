import { useCart } from "../context/CartContext";

const CardPizza = ({pizza}) => {
  const { addToCart } = useCart();
  const { name, price, ingredients, img } = pizza;
  
  
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <p><strong>Precio:</strong> ${price.toLocaleString()}</p>
      <div className="card-buttons">
        <button>Ver más</button>
        <button onClick={() => addToCart(pizza)}>Añadir</button>
      </div>
    </div>
  );
}


export default CardPizza;
