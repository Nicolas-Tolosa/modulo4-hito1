import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import MyCard from './components/MyCard';
import pizzaPepperoni from './assets/images/pizza-pepperoni.jpg';
import pizzaNapolitana from './assets/images/pizza-napolitana.jpg';
import pizzaEspañola from './assets/images/pizza-española.jpg';
import MyFooter from './components/MyFooter';


function App() {
  const [token, setToken] = useState(null); // Inicialmente, el usuario no está autenticado

  // Función para manejar el login y logout
  const handleAuthClick = () => {
    if (token) {
      // Si hay un token, hacer logout
      setToken(null);
    } else {
      // Si no hay token, hacer login
      setToken("Token123"); // Asigna un token ficticio
    }
  };

  return (
    <>
      <MyNavbar token={token} onAuthClick={handleAuthClick} />
      <MyHeader />
      <div className="pizzaCards">
        <MyCard
          imagen={pizzaPepperoni}
          nombre="Pizza Pepperoni"
          ingredientes={["Mozzarella, ", "Pepperoni, ", "Orégano, "]}
          precio={6900}
        />
        <MyCard
          imagen={pizzaNapolitana}
          nombre="Pizza Napolitana"
          ingredientes={["Mozarella, ", "Tomate, ", "Jamón, ", "Orégano, "]}
          precio={8500}
        />
        <MyCard
          imagen={pizzaEspañola}
          nombre="Pizza Española"
          ingredientes={["Mozarella, ", "Choricillo, ", "Tomate, ", "Jamón, "]}
          precio={8500}
        />
      </div>
      <MyFooter />
    </>
  );
}
export default App;