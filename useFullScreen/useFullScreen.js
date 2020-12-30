export const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullScreen) {
          element.current.msRequestFullScreen();
        }
        runCb(true);
      }
    };
    const exitFull = () => {
      if (document) {
        if (document.ExitFullscreen) {
          document.ExitFullscreen();
        } else if (document.mozExitFullScreen) {
          document.mozExitFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullScreen) {
          document.msExitFullScreen();
        }
        runCb(false);
      }
    };
    return {
      element,
      triggerFull,
      exitFull
    };
  };
  