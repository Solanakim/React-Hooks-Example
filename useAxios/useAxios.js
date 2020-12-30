import axios from "axios";
import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(new Date());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]); // trigger가 바뀌면 useEffect는 다시 바뀐다. -> refetch
  return { ...state, refetch };
};

export default useAxios;
