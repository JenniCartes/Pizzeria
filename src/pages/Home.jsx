import { useEffect, useState } from "react";
import CardPizza from "../Components/CardPizza";
import Header from "../Components/Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
    .then((res) => res.json())
    .then((data)=> {
      setPizzas(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error ("Error al cargar las pizzas", error);
      setLoading(false)
    })
  },[]);

  if (loading) return <p>Cargando pizzas...</p>
  

  return (
    <main className="home">
      <Header/>
      <div className="card-container">
        {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
        ))}
        
        
      </div>
    </main>
  );
};

export default Home;

