import { useEffect } from "react"; 
import WOW from "wow.js";  
import BackToTop from "./BackToTop";


const Wrapper = ({ children }: any) => {

  useEffect(() => {
    // Initialize WOW.js for animations
    const wow = new WOW({ live: false });
    wow.init();
  }, []);
 
  return (
    <>  
      {children}
      <BackToTop /> 
    </>
  );
};

export default Wrapper;
 