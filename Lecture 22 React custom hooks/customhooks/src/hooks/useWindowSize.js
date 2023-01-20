import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(
    document.documentElement.getBoundingClientRect().width
  );

  useEffect(() => {
    const handlerWidth = () => {
      setWidth(document.documentElement.getBoundingClientRect().width);
    };
    window.addEventListener("resize", handlerWidth);
    return () => window.removeEventListener("resize", handlerWidth);
  }, []);

  return [width];
};

export default useWindowSize;
