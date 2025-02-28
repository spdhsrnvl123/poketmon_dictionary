// pokemonInfo의 타입 정의
export interface PokemonsDetail {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  height: number; // 미터 단위
  weight: number; // kg 단위
  abilities: string[];
}
