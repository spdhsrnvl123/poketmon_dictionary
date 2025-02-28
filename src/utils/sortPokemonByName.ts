import { Pokemon } from "../types/pokemons";

// 네이밍에 따라 정렬
export const sortPokemonByName = <T extends {name : string}>(pokemons : T[]) : T[] => {
    return pokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
};
