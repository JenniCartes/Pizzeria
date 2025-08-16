
import CardPizza from "../Components/CardPizza";
import Header from "../Components/Header";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas, loading } = usePizzas();
  
  if (loading) return <p>Cargando pizzas...</p>
  

  return (
    <main className="home">
      <Header/>
      <div className="card-container">
        {pizzas.map((pizza) => (
        <CardPizza 
          key={pizza.id} pizza={pizza}
          
        />
        ))}
        
        
      </div>
    </main>
  );
};

export default Home;

