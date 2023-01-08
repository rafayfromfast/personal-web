import { useEffect, useState } from "react";

export const useTextSizeChange = (offset?: number, max = 60) => {
  const [textSize, setTextSize] = useState(16);

  useEffect(() => {
    function handleScroll() {
      const size = 16 + window.scrollY / 8 - (offset || 0);
      setTextSize(size > max ? max : size);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { size: textSize };
};
