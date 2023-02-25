import { useState } from "react";
import AsyncSelect from "react-select";
import makeAnimated from "react-select/animated";
const options = [
  { id: 1, label: "cover 405", value: "cover 405", color: "green" },
  { id: 2, label: "cover 2008", value: "cover 2008", color: "blue" },
  { id: 3, label: "cover 206", value: "cover 206", color: "red" },
];
const Sync1 = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const handleChange = (e) => {
    console.log(e);
    setSelectedValue(e);
  };
  const loasOptions = (searchValue, callback) => {
    console.log(searchValue);
  };
  const animation = makeAnimated();
  const styles = {
    option: (styles, data) => {
      return {
        ...styles,
        color: "red",
        backgroundColor: `${data.isFocused ? data.data.color : "white"}`,
        ":hover": { backgroundColor: data.data.color, color: "white" },
      };
    },
    multiValue: (styles, data) => {
      console.log(data);
      return {
        ...styles,
        color: "red",
        backgroundColor: `${data.isFocused ? "green" : "white"}`,
        ":hover": { backgroundColor: data.data.color, color: "white" },
      };
    },
    multiValueLabel: (styles, data) => {
      console.log(data);
      return {
        ...styles,
        color: data.data.color,
        cursor: "pointer",
        ":hover": { backgroundColor: data.data.color, color: "white" },
        backgroundColor: `${data.isFocused ? data.data.color : "white"}`,
      };
    },
  };

  return (
    <AsyncSelect
      loasOptions={loasOptions}
      onChange={handleChange}
      value={selectedValue}
      options={options}
      styles={styles}
      placeholder="select"
      isMulti
      components={animation}
    />
  );
};

export default Sync1;
