import { Link } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokeCard}>
      <Card style={{ borderColor: backgroundSelected }} className="top d-flex flex-column border border-1 border-start-start-radius-8 border-start-end-radius-8 border-bottom-0">
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
      </Card>
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name || "###"}
      </div>
    </Link>
  );
};
