import { useQuery } from "react-query";
import "./PokeCard.css";
import { BeatLoader } from "react-spinners";
import { useMemo } from "react";

const PokeCard = ({ pokemon }) => {
  const getPokemon = async () => {
    const result = await fetch(pokemon.url);
    return result.json();
  };

  const { data, isLoading, isError } = useQuery(
    `pokemon-${pokemon.name}`,
    getPokemon
  );
  const pokeImage = useMemo(() => {
    if (data && data.sprites && data.sprites.other.home.front_default) {
      return (
        <div className="pokeimage">
          <img
            style={{ height: 200 }}
            src={data.sprites.other.home.front_default}
            alt={`img-${data.name}`}
          />
        </div>
      );
    }
  }, [data]);

  return (
    <div className="pokecard">
      <h4 className="pokename">{pokemon.name}</h4>
      {isLoading ? (
        <BeatLoader
          color={"#ee1515"}
          loading={true}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="pokecontent">
          {pokeImage}
          <span>
            <b>Height:</b> {data.height}dm
          </span>
          <span>
            <b>Weight:</b> {data.height}hg
          </span>
          <span>
            <b>Abilities: </b>
            {data.abilities.map(({ ability }) => ability.name).join(", ")}
          </span>
        </div>
      )}
    </div>
  );
};

export default PokeCard;
