import React, { useEffect } from "react";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { dispatcher } from "./../../redux/actions/dispatchers";
import { Paper } from "@material-ui/core";
const ColorPickerModal = ({ colors, id, addColor }) => {
  const changeColors = (element) => {
    const reColor = JSON.parse(JSON.stringify(colors));
    reColor[id].color = element.hex;
    console.log(reColor);
    addColor(reColor);
  };

  useEffect(() => console.log(colors[id].color), [colors[id].color]);

  return (
    <div elevation={3}>
      <SketchPicker color={colors[id].color} onChangeComplete={changeColors} />
      <button onClick={() => console.log(colors[id].color)}>
        dfsdfsdfsdfsd
      </button>
    </div>
  );
};

const mapStateToProps = (store) => ({
  colors: store.data.colors,
});

const mapDispatch = dispatcher(["addColor"]);

export default connect(mapStateToProps, mapDispatch)(ColorPickerModal);
