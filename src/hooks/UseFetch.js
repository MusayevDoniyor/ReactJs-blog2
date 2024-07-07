import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/posts";
const useFetch = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await api.get(path, { cancelToken: source.token });
        setData(response.data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError("Failed to fetch data. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Fetch cancelled by the user");
    };
  }, [path]);

  return { data, loading, error };
};

export default useFetch;
