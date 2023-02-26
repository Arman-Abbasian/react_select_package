import chroma from "chroma-js";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const optonsTopping = [
  { id: 1, value: "cheese", label: "cheese" },
  { id: 2, value: "onions", label: "onions" },
  { id: 3, value: "bacon", label: "bacon" },
];
const optonsSize = [
  { id: 1, value: "9", label: "small -9Inch",color:"red" },
  { id: 2, value: "12", label: "medium -12Inch",color:"green" },
  { id: 3, value: "14", label: "big -14Inch",color:"blue" },
  { id: 4, value: "18", label: "extra -18Inch",color:"black" },
];
const customTheme = (theme) => {
  console.log(theme);
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "red",
      primary: "red",
      neutral0: "brown",
      neutral5: "blue",
    },
  };
};

export function PizzaCard() {
  const [topping, setTopping] = useState([]);
  const [size, setSize] = useState([]);
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };
  return (
    <>
      <Select
        components={makeAnimated()}
        onChange={(e) => setTopping(e)}
        theme={customTheme}
        options={optonsTopping}
        className="mb-10"
        placeholder="select pizza topping"
        noOptionsMessage={() => "no other pizza toppings :("}
        isMulti
        autoFocus
        isSearchable
      />
      <Select
        components={makeAnimated()}
        onChange={(e) => setSize(e)}
        options={optonsSize}
        className="mb-3"
        placeholder="select pizza size"
        styles={colorStyles}
      />
    </>
  );
}
