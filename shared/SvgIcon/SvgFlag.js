import React from "react";

// Styles
import globalStyles from "../../styles/globalStyles";

import Svg, { Path } from "react-native-svg";

const SvgFlag = ({ colorOne = globalStyles.primary, colorTwo = "black" }) => {
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
                d="M34.319 18.802h-6.393v-.48a1.37 1.37 0 00-1.279-1.44h-6.82a1.126 1.126 0 00-.33.055v-.776a.954.954 0 00-.948-.961.951.951 0 00-.949.96v20.08a.954.954 0 00.949.96.952.952 0 00.948-.96v-8.83h6.727v.48a1.37 1.37 0 001.278 1.44h6.817a1.37 1.37 0 001.278-1.44v-7.632a1.37 1.37 0 00-1.278-1.456z"
            ></Path>
        </Svg>
    );
};

export default SvgFlag;
