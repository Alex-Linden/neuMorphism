import React from "react";
import bgColorProvider from "./bgColorProvider";

import octopus from './assets/octopus.jpg';


const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

function HOCCard(props) {
  const { backgroundColor, shadows } = props;
  let style = {
    margin: "2rem",
    maxWidth: "30%",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    borderRadius: "50px",
    background: backgroundColor,
    boxShadow: `20px 20px 40px ${shadows.darkShadow},
                 -20px -20px 40px ${shadows.lightShadow}`

  };

  let mediaStyle = {
    borderRadius: "50px",
    padding: "1rem",
    paddingBottom: "0.2rem",
    // maxWidth: "100px"
    maxHeight: "33.33%"
  };

  let textStyle = {
    paddingRight: "1rem",
    paddingLeft: "1rem"
  };

  return (
    <div style={style}>
      <img style={mediaStyle} src={octopus}></img>
      <p style={textStyle}>{defaultText}</p>
    </div>
  );

}


export default bgColorProvider(HOCCard);