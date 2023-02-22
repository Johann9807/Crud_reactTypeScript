import { IPokemon } from '../pokemon/entidades/IPokemon';

const consultarCaratulas = async (): Promise<IPokemon[]> => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    const pokemonList = data.results.map((pokemon: any) => ({
      name: pokemon.name,
    
    }));
    pokemonList.unshift({ name: '' });
    return pokemonList;
  };

export default consultarCaratulas;
