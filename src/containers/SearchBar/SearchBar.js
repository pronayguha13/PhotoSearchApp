import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  const getQuery = (queryString) => {
    setQuery(queryString);
  };

  return (
    <>
      <div className={styles.searchForm}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={query}
          onChange={
            (e) => {
              e.persist();
              e.key === "Enter"
                ? props.queryHandler(e.target.value)
                : getQuery(e.target.value);
            }
            // event.key === "Enter"
            //   ?
          }
        />
        <button
          type="submit"
          className={`btn btn-primary ${styles.customSearchBtn}`}
          onClick={() => props.queryHandler(query)}
          disabled={query.length ? false : true}
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className={styles.searchBtnWrapper}>
        <button
          className={styles.searchBtn}
          onClick={(e) => props.queryHandler(e.target.innerHTML)}
        >
          Mountain
        </button>
        <button
          className={styles.searchBtn}
          onClick={(e) => props.queryHandler(e.target.innerHTML)}
        >
          Beaches
        </button>
        <button
          className={styles.searchBtn}
          onClick={(e) => props.queryHandler(e.target.innerHTML)}
        >
          Birds
        </button>
        <button
          className={styles.searchBtn}
          onClick={(e) => props.queryHandler(e.target.innerHTML)}
        >
          Food
        </button>
      </div>
    </>
  );
};
export default SearchBar;
