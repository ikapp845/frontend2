import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Camera = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    viewBox="50 84 20 16"
    {...props}
  >
    <Path
      d="M55.676 89H54a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.676l-.387-1.501A2.002 2.002 0 0 0 62 86h-4a2 2 0 0 0-1.937 1.499L55.676 89Zm-1.55-2c.444-1.725 2.01-3 3.874-3h4a4.002 4.002 0 0 1 3.874 3H66a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H54a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h.126ZM60 97a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="rgba(0,0,0,0.8 )"
      fillRule="evenodd"
      data-name="Path 29"
    />
  </Svg>
);

export default Camera;
