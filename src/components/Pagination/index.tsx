import styles from "./styles.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  perPage: number; // Max items por pagina
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItems: number; // Max items
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItems,
}: Props) => {
  // Como saber cual es la ultima pagina
  const lastPage = Math.ceil(maxItems / perPage);

  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={previousPage}>
        &lt;
      </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </div>
  );
};
