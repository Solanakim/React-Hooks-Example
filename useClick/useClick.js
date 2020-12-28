const useClick = (onClick) => {
    if(typeof onClick !=="function"){
      return;
    }
    const element = useRef();
    useEffect(() => {
      //Mount할 때
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        element.current.removeEventListener("click", onClick);
      };
    }, []);
    return element;
  };
  