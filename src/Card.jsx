import React, { useState, useEffect } from "react";
import { startingHexColor, colorToShadows } from "./utils";
import octopus from './assets/octopus.jpg';


const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export default function Card({ bgColor = startingHexColor(), media = octopus, text = defaultText }) {
    const [backgroundColor, setBackgroundColor] = useState(bgColor);
    const [shadows, setShadows] = useState({});

    useEffect(() => {
        setShadows(colorToShadows(backgroundColor));
    }, [backgroundColor]);

    let style = {
        borderRadius: "50px",
        background: backgroundColor,
        boxShadow: `18px 18px 36px ${shadows.darkShadow},
                 -18px -18px 36px ${shadows.lightShadow}`
    };

    return (
        <div style={style}>
            <img src={media}></img>
            <p>{text}</p>
        </div>
    );
}