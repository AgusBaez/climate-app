import { memo, useRef, useState } from "react";
import { useClime } from "../hooks/useClime";
import search_icon from "../assets/images/search.png";
import styles from "./Search.module.css";

export const Search = () => {
  const serchInputRef = useRef(null);
  const [inputValue, setInput] = useState("");
  const { getClime, dataClime, loading, error } = useClime();
  const [history, setHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      getClime(inputValue);
      setHistory((prevHistory) => [...prevHistory, inputValue]);
      setInput("");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTitle = () => {
    serchInputRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Enter city name"
          ref={serchInputRef}
        />
        <button>
          <img src={search_icon} alt="" />
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <>
          <h2 onClick={handleTitle}>
            Oops.. sorry, An error occurred while checking the climate
          </h2>
          <p>Error: {error.message}</p>
        </>
      ) : (
        dataClime && (
          <>
            {dataClime.weather ? (
              <>
                <div className={styles.weatherContainer}>
                  <h1 className={styles.weatherName}>
                    {dataClime?.name} ({dataClime?.sys?.country})
                  </h1>
                  {<p>{dataClime.weather[0].description}</p>}
                  {
                    <img
                      className={styles.weatherIcon}
                      src={`https://openweathermap.org/img/wn/${dataClime.weather[0].icon}@2x.png`}
                    />
                  }
                  <p className={styles.weatherTemp}>
                    {parseInt(dataClime?.main?.temp)}°
                  </p>
                </div>
              </>
            ) : (
              <h2 onClick={handleTitle}>
                Oops.. sorry, i don´t know that city
              </h2>
            )}
          </>
        )
      )}

      <div>
        <h3>History Of Search:</h3>
        <ul>
          {history ? (
            <>
              {history.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </>
          ) : (
            <>
              <li>
                <h5>No search yet</h5>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export const MemoizedSearch = memo(Search);

