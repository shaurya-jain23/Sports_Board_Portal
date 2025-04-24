import { useState, useEffect } from "react";

const useRoundedStyle = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateMobileStatus = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateMobileStatus);

    return () => {
      window.removeEventListener("resize", updateMobileStatus);
    };
  }, []);

  const roundedStyle = isMobile
    ? {
        borderRadius: "50% 50% 0% 0% / 100px 100px 0% 0%",
        clipPath: "inset(0% 10% 0% 10%)",
        padding: "0 20%",
        width: "130%",
        position: "relative",
      }
    : {
        borderRadius: "60% 60% 0% 0% / 100px 100px 0% 0%",
        clipPath: "inset(0% 10% 0% 10%)",
        padding: "0 25%",
        width: "145%",
        position: "relative",
      };

  return roundedStyle;
};

export default useRoundedStyle;
