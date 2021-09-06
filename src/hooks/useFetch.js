const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        if (!didCancel) {
          const json = await res.json();
          setResponse(json);
        }
      } catch (error) {
        if (!didCancel) {
          setError(error);
        }
      }
      setLoading(false);
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url, options]);

  return { response, error, loading };
};
