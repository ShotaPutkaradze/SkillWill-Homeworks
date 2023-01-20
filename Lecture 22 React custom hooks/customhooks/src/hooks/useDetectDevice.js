import { useState, useEffect } from "react";

const breakpoint = 600;
const detectDevice = () => {
  return document.documentElement.getBoundingClientRect().width <= breakpoint
    ? "mobile"
    : "desktop";
};

const useDetectDevice = () => {
  const [device, setDevice] = useState(detectDevice);

  useEffect(() => {
    const handlerWidth = () => {
      setDevice(detectDevice());
    };
    window.addEventListener("resize", handlerWidth);
    return () => window.removeEventListener("resize", handlerWidth);
  }, []);

  return device;
};

export default useDetectDevice;
