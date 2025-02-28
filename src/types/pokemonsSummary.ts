export interface PokemonSummary {
  name: string;
  url: string;
}

// 처음 포켓몬 데이터에 접근할때 데이터
export interface PokemonListResponse{
    count : number;
    next : string;
    privious : string | null;
    results : PokemonSummary[]
}