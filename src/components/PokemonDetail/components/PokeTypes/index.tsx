import { useContext } from "react";
import { IPokemon } from "../../../../interfaces/interfaces";
import { background } from "../../../../utils/BackgroundsByType";
import { usePagination } from "../../../../hooks/usePagination";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { PokemonContext } from "../../../../context/PokemonContext";

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  const { changePage } = usePagination();
  const navigate = useNavigate();
  const { changeTypeSelected } =
    useContext(PokemonContext);

  const onChangeType = (type: string, url:string) => {
    let newObj = {"type":type,"url":url};

    changePage(1);
    navigate("/?page=1");
     /* @ts-ignore */
    changeTypeSelected(newObj);
  };
console.log(pokemon);

  return (
    <div className={styles.types}>
      {/* @ts-ignore */}
      {pokemon?.types.map(({type: { name, url } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
          className={styles.type}
          onClick={()=>onChangeType(name, url)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
