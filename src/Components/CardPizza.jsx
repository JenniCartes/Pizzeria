const CardPizza = ({ name, price, ingredients, img }) => {
 
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
        <button>Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;
