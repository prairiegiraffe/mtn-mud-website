
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Runs on route change

  return null; // No UI needed
};

export default BackToTop;
