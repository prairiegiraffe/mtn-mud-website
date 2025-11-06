 

import { useEffect } from "react";
import niceSelect from "react-nice-select";

const NiceSelectDropDown = () => {
  useEffect(() => {
    niceSelect();
  }, []);
  return (
    <div className="form-group">
      <select
        name="subject"
        id="subject"
        className="single-select nice-select form-select"
      >
        <option value="" disabled selected hidden>
          Your Inquiry
        </option>
        <option value="Web Design">Web Design</option>
        <option value="Web Development">Web Development</option>
        <option value="Engine Diagnostics">Engine Diagnostics</option>
        <option value="Digital Marketing">Digital Marketing</option>
      </select>
    </div>
  );
};

export default NiceSelectDropDown;
