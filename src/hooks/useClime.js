import { useState } from "react";

export const useClime = () => {
  const [dataClime, setDataClime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "5ec5ae37f0213d125b35f6355a2189ba";

  const getClime = async (inputValue) => {
    try {
      if (error) setError(null);
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`
      );
      const data = await res.json();
      setDataClime(data);
      return dataClime;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    getClime,
    dataClime,
    loading,
    error,
  };
};

