import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Down = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down"
    {...props}
  >
    <Path d="m6 9 6 6 6-6" />
  </Svg>
);

export default Down;
