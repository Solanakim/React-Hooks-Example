export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener); //"beforeunload" allows you to excute function before window close
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener); 
  
    return { enablePrevent, disablePrevent };
  };