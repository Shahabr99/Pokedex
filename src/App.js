import React from 'react';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'

const App = () => (
  <>
    <div>
      {Pokedex.map(pokemon => (
        <Pokecard 
          // key={pokemon.id}
          id={pokemon.id}
          name= {pokemon.name}
          type={pokemon.type}
          base_experience={pokemon.base_experience}
          />
      ))}
    </div>
  </>
)

export default App;