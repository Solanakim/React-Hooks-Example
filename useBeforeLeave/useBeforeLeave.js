export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const handle = (event) => {
      const { clientY } = event; //event.clientY
      if (clientY <= 0) {
        onBefore();
      }
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []); //we only want to add it once []
  };