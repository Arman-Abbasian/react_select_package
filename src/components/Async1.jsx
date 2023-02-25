import axios from "axios";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import toast from "react-hot-toast";

const options = [
  { id: 1, label: "cover 405", value: "cover 405", color: "green" },
  { id: 2, label: "cover 2008", value: "cover 2008", color: "blue" },
  { id: 3, label: "cover 206", value: "cover 206", color: "red" },
];
const ASync1 = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const handleChange = (e) => {
    console.log(e);
    setSelectedValue(e);
  };
  const loadOptions = (searchValue, callback) => {
    if(!searchValue){
        callback([])
    }else{
        axios
      .get(`http://localhost:4000/options?value_like=${searchValue}`)
      .then((res) => {
        callback(res.data)
        console.log(res.data)
    })
      .catch((err) => toast.error(err.message));
    }
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
      loadOptions={loadOptions}
      defaultOptions
      onChange={handleChange}
      value={selectedValue}
      styles={styles}
      placeholder="select"
      isMulti
      components={animation}
    />
  );
};

export default ASync1;
