import React from "react";

const WifiIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#EEB5A0"
      d="M56.6 92H34.7a5.7 5.7 0 0 1-5.7-5.8V49.8c0-3.3 2.5-5.8 5.7-5.8h44.1c3.3 0 5.8 2.5 5.8 5.8v36.4c0 3.3-2.5 5.8-5.7 5.8H56.6Z"
    />
    <path
      stroke="#44433c"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M35.8 35V24a13 13 0 1 1 26 0v11"
    />
    <path fill="#44433c" d="M48.8 66a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M48.8 60v12m-.2 13H25.8c-3.4 0-6-2.6-6-6V41c0-3.4 2.6-6 6-6h10m13 0h23c3.4 0 6 2.6 6 6v4.8"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M74.8 91a19 19 0 0 1-15.7-29.8M74 53h.8a19 19 0 0 1 13.3 32.6"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m69 71.8 4.6 4.6 9.6-9.8"
    />
  </svg>
);

export default WifiIcon;
