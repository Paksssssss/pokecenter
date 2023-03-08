// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import PokeCard from "./PokeCard";
import "./PokeHome.css";

const PokeHome = () => {
  const getPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
    return res.json();
  };
  const { data, isLoading, isError } = useQuery("pokemons", getPokemons);

  return (
    <div>
      <h2 className="poketitle">These are the pokemons in your bag</h2>

      {isLoading ? (
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
          {data.results
            ? data.results.map((poke) => <PokeCard pokemon={poke} />)
            : "No Pokemons Found"}
          <span>Height: {data.height}dm</span>
          <span>Weight: {data.height}hg</span>
        </div>
      )}
    </div>
  );
};

export default PokeHome;
