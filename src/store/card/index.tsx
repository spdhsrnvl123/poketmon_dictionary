import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FlavorTextEntry, Pokemon, PokemonSummary, PokemonType } from "../../types/pokemon";

// 비동기 함수: 포켓몬 데이터를 가져오고 추가 정보를 얻기
const asyncUpFetch = createAsyncThunk<Pokemon[], void>(
  "getData/asyncUpFetch",
  async () => {
    try {
      // 포켓몬 목록을 가져오기
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=200"
      );
      const data = await response.json();

      // 각 포켓몬 URL을 통해 상세 정보를 가져오기
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon : PokemonSummary) : Promise<Pokemon> => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();

          // 포켓몬 설명을 가져오기
          const speciesResponse = await fetch(pokemonData.species.url);
          const speciesData = await speciesResponse.json();

          const description = speciesData.flavor_text_entries.find(
            (entry: FlavorTextEntry) => entry.language.name === "en"
          ).flavor_text;

          return {
            name: pokemon.name, // 포켓몬 이름
            imageUrl: pokemonData.sprites.front_default, // 포켓몬 이미지
            id: pokemonData.id, // 포켓몬 ID
            types: pokemonData.types.map((type:PokemonType) => type.type.name), // 포켓몬 타입들
            description: description || "No description available",
          };
        })
      );

      // 포켓몬 정보 정렬 (예: 이름 순으로 정렬)
      const sortedItems = pokemonDetails.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      return sortedItems; // 정렬된 포켓몬 데이터 반환
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch pokemon data"); // 에러 발생 시 처리
    }
  }
);


// Redux slice 설정
let cardData = createSlice({
  name: "cardData", // slice 이름
  initialState: {
    value: [] as Pokemon[], // 초기 데이터는 빈 배열
    status: "Loading", // 로딩 상태
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncUpFetch.pending, (state) => {
        state.status = "Loading"; // 데이터 로딩 중
      })
      .addCase(asyncUpFetch.fulfilled, (state, action) => {
        state.value = action.payload; // 데이터 로딩 완료 후 값 저장
        state.status = "complete"; // 로딩 완료 상태
      })
      .addCase(asyncUpFetch.rejected, (state) => {
        state.status = "fail"; // 에러 발생 시 실패 상태
        console.log("error");
      });
  },
});

export default cardData; // cardData slice를 export
export { asyncUpFetch }; // asyncUpFetch thunk를 export
