import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonsList: [],
  loadingPokemons: false,
  errorLoadingPokemons: false,
};

export const pokemonsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPokemons: (state, { payload }) => {
      state.pokemonsList = [...state.pokemonsList, ...payload];
      state.loadingPokemons = false;
    },
    loadingPokemonsStart: (state) => {
      state.loadingPokemons = true;
    },
    loadingPokemonsError: (state) => {
      state.errorLoadingPokemons = true;
      state.loadingPokemons = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemons, loadingPokemonsStart, loadingPokemonsError } =
  pokemonsSlice.actions;

export default pokemonsSlice.reducer;

// Async actions
export const getPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
  return res.json();
};
