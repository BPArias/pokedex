

const Pokemon = ({resultado}) => {

    const { name, id, sprites } = resultado

    // resultado.sprites.other['official-artwork'].front_default

    return (
        <>
            {(name) ? (<h1>#{id} {name}</h1>) : null }
            {(sprites) ? <img src={sprites.other['official-artwork'].front_default} alt="pokemon" /> : null }
        </>
    );
}
 
export default Pokemon;