import React from "react";
import { SketchPicker } from "react-color";

export default ({ color, setColor }) => {
  return (
    <div>
      <SketchPicker color={color} onChangeComplete={setColor} />
    </div>
  );
};
