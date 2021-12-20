import React from "react";

// SVG
import Svg, { Path, Mask, G } from "react-native-svg";

const SvgWalking = ({ colorOne = "#4731B4", colorTwo = "black" }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            fill="none"
            viewBox="0 0 52 52"
        >
            <Path
                fill={colorOne}
                fillRule="evenodd"
                stroke={colorTwo}
                strokeWidth="3"
                d="M26 50c13.255 0 24-10.745 24-24S39.255 2 26 2 2 12.745 2 26s10.745 24 24 24z"
                clipRule="evenodd"
            ></Path>
            <Path
                fill={colorTwo}
                fillRule="evenodd"
                d="M29.998 17A3 3 0 1124 17a3 3 0 016 0zm1.998 8.75l.976.326a1.5 1.5 0 01-.948 2.847L30 28.249 28.882 26.4l-.62 3.19 2.736 2.188V36.5a1.5 1.5 0 11-3 0v-3.279L24.92 30.76l-1.462 6.091a1.5 1.5 0 11-2.917-.7l2.687-11.197-1.902 1.427-.371 1.483a1.5 1.5 0 01-2.91-.728l.63-2.517 3.145-2.36a6.336 6.336 0 013.78-1.26 6.33 6.33 0 015.04 2.52l.082.124 1.274 2.108z"
                clipRule="evenodd"
            ></Path>
            <Mask
                id="mask0_1827_4354"
                style={{ maskType: "alpha" }}
                width="16"
                height="24"
                x="18"
                y="14"
                maskUnits="userSpaceOnUse"
            >
                <Path
                    fill={colorTwo}
                    fillRule="evenodd"
                    d="M29.998 17A3 3 0 1124 17a3 3 0 016 0zm1.998 8.75l.976.326a1.5 1.5 0 01-.948 2.847L30 28.249 28.882 26.4l-.62 3.19 2.736 2.188V36.5a1.5 1.5 0 11-3 0v-3.279L24.92 30.76l-1.462 6.091a1.5 1.5 0 11-2.917-.7l2.687-11.197-1.902 1.427-.371 1.483a1.5 1.5 0 01-2.91-.728l.63-2.517 3.145-2.36a6.336 6.336 0 013.78-1.26 6.33 6.33 0 015.04 2.52l.082.124 1.274 2.108z"
                    clipRule="evenodd"
                ></Path>
            </Mask>
            <G mask="url(#mask0_1827_4354)">
                <Path fill={colorTwo} d="M14 14H38V38H14z"></Path>
            </G>
        </Svg>
    );
};

export default SvgWalking;
