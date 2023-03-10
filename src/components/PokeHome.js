// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import PokeCard from "./PokeCard";
import "./PokeHome.css";
import { useEffect, useRef } from "react";
import {
  addPokemons,
  getPokemons,
  loadingPokemonsStart,
} from "../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

const PokeHome = () => {
  const { pokemonsList, loadingPokemons, errorLoadingPokemons } = useSelector(
    (state) => state.pokemons
  );
  const dispatch = useDispatch();
  const dataFetch = useRef(false);

  useEffect(() => {
    if (dataFetch.current) {
      return;
    }
    dispatch(loadingPokemonsStart());
    getPokemons().then((value) => {
      dispatch(addPokemons(value.results));
    });
    dataFetch.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h2 className="poketitle">These are the pokemons in your bag</h2>
      {loadingPokemons ? (
        <div className="loading-wrapper">
          <BeatLoader
            color={"#ee1515"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="poke-holder">
          {pokemonsList && pokemonsList.length > 0
            ? pokemonsList.map((poke) => <PokeCard pokemon={poke} />)
            : "No Pokemons Found"}
        </div>
      )}
    </div>
  );
};

export default PokeHome;
