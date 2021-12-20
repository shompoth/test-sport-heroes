import React from "react";

import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg";

const SvgStar = ({ colorOne = "#4731B4", colorTwo = "black" }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            fill="none"
            viewBox="0 0 52 52"
        >
            <Path
                fill="url(#paint0_linear_1827_4260)"
                fillRule="evenodd"
                stroke={colorTwo}
                strokeWidth="3"
                d="M26 50c13.255 0 24-10.745 24-24S39.255 2 26 2 2 12.745 2 26s10.745 24 24 24z"
                clipRule="evenodd"
            ></Path>
            <Path
                fill={colorTwo}
                d="M33.73 24.95c.528-.545.237-1.497-.493-1.608l-4.431-.682a.04.04 0 01-.028-.021l-1.884-4.048a.975.975 0 00-1.794 0l-1.88 4.05a.037.037 0 01-.027.021l-4.431.686c-.73.112-1.02 1.064-.492 1.609l3.208 3.316a.04.04 0 01.01.035l-.716 4.45c-.14.867.718 1.527 1.451 1.117l3.764-2.102a.034.034 0 01.034 0l3.765 2.098c.734.41 1.591-.252 1.451-1.119l-.721-4.449a.041.041 0 01.01-.035l3.205-3.317z"
            ></Path>
            <Defs>
                <LinearGradient
                    id="paint0_linear_1827_4260"
                    x1="2.965"
                    x2="2.965"
                    y1="3.196"
                    y2="49.265"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFC72F"></Stop>
                    <Stop offset="1" stopColor="#FEA932"></Stop>
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default SvgStar;
