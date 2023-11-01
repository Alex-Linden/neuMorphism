import React, { useState, useEffect } from "react";
import { startingHexColor, colorToShadows } from "./utils";
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [backgroundColor, setBackgroundColor] = useState(startingHexColor());
    const [shadows, setShadows] = useState({});

    useEffect(() => {
      setShadows(colorToShadows(backgroundColor));
    }, [backgroundColor]);



    return <OriginalComponent
      {...props}
      backgroundColor={backgroundColor}
      shadows={shadows}

    />;
  }
  return NewComponent;
};
export default UpdatedComponent;