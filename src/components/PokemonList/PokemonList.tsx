import { PokemonCard } from "../PokemonCard/PokemonCard";

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  pokemonsUrls?: string[] | null;
  page: number;
  perPage: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <div className="row gap-5">
       
      {pokemonsUrls
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
  );
};
