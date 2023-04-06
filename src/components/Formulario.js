import { useState } from "react";

const Formulario = ({guardarPokemon}) => {

    const [busqueda, guardarBusqueda] = useState('')

    const guardarNombre = e => {
        e.preventDefault()

        guardarPokemon(busqueda)
    }

    const handleChange = e => {
        guardarBusqueda(e.target.value)
    }

    return ( 
        <form
            onSubmit={guardarNombre}
        >
            <input 
                type="text"
                placeholder="Ingrese su pokemon"
                value={busqueda}
                onChange={handleChange}
            />
            <button 
                type="submit"
            >Buscar</button>
        </form>
     );
}
 
export default Formulario;