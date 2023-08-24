import './Pokecard.css';

const Pokecard = (pokemon) => {
  return (
    <>
      <div className="Pokecard">
        <h4 className="Pokecard-header">{pokemon.name}</h4>
        <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon" />
        <span className="Pokecard-type">Type: { pokemon.type }</span>
        <br></br>
        <span>EXP: {pokemon.base_experience}</span>
      </div>
    </>
  )
}

export default Pokecard;