import React, { Component } from "react";
import Select from "react-select";
import { SelectOption } from "../../../types";

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export default class SelectDropDownMenu extends Component<{
  ticker: SelectOption | null;
  setTicker: React.Dispatch<React.SetStateAction<SelectOption | null>>;
  defaultValue: SelectOption | null;
  options: SelectOption[];
}> {
  render() {
    const { ticker, setTicker, defaultValue, options } = this.props;

    const colorNames = {
      text: "neutral80",
      bg: "neutral0",
      inputTextColor: "neutral80",
      selectedOption: "primary",
      hoverOption: "primary25",
    };

    const colorValues = {
      gold: "#EAB464",
      bg: "#273b46",
      bgHover: "#646E78",
    };

    return (
      <div style={{ color: "white" }}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={defaultValue}
          isClearable={true}
          isSearchable={true}
          name="color"
          options={options}
          onChange={(value) => setTicker(value ?? null)}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              [colorNames.hoverOption]: colorValues.bgHover,
              [colorNames.selectedOption]: colorValues.gold,
              [colorNames.bg]: colorValues.bg,
              [colorNames.inputTextColor]: colorValues.gold,
            },
          })}
        />

        <div
          style={{
            color: "#black",
            display: "inline-block",
            fontSize: 12,
            fontStyle: "italic",
            marginTop: "1em",
          }}
        ></div>
      </div>
    );
  }
}
