import { Link } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];


  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokeCard}>
      <div style={{ borderColor: backgroundSelected }} className={styles.top}>
        <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <figure style={{ height: "140px" }}>
            <img
              src={
                pokemon?.sprites?.other?.dream_world?.front_default ||
                pokemon?.sprites?.front_default
              }
              alt={pokemon?.name}
            />
          </figure>
        ) : (
          <div className={styles.loadingContainer}>
            <Loader color={backgroundSelected} />
          </div>
        )}
      </div>
      
      <div style={{ background: backgroundSelected }} className={styles.bottom} onMouseEnter={()=> document.title = pokemon?.name.toLocaleUpperCase() || ""} onMouseOut={()=>document.title = "Pokemon"}>
        {pokemon?.name || "###"}
      </div> 
    </Link>
  );
};
