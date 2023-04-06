import { useState, useEffect } from "react";
import './index.css'
import Formulario from "./components/Formulario";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";

function App() {

  const [resultado, guardarResultado] = useState({})
  const [pokemon, guardarPokemon] = useState('')

  useEffect(() => {
 
    const consultarAPI = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      
      // consultar la api
      const consulta = await fetch(url)
      const data = await consulta.json()
      guardarResultado(data)
    }
    consultarAPI()
  },[pokemon])

  return (
    <>
      <Header />
      <Formulario 
        guardarPokemon={guardarPokemon}
      />
     <Pokemon resultado={resultado} />
      
    </>
  );
}

export default App;
