import React, { createContext, useContext, useEffect, useState } from 'react'

const PizzaContext = createContext ();

export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
        .then((res) => res.json())
        .then((data) => {
            setPizzas(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error al cargar las pizzas", error);
            setLoading(false);
        });
    }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading}}>
      {children}
    </PizzaContext.Provider>
  )
}