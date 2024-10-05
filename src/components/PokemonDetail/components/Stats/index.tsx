import { IPokemon } from "../../../../interfaces/interfaces";
import { LiaWeightSolid } from "react-icons/lia";
import { TfiRuler } from "react-icons/tfi";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <LiaWeightSolid />
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <TfiRuler />
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
