import React from "react";

const WifiIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#EADF8A"
      d="M81 20.3H32.7a7.7 7.7 0 0 0-7.8 7.7v61.8c0 1 .9 2 2 2h6.4a2 2 0 0 0 1.8-1.3l.6-1.4a2 2 0 0 1 1.8-1.2h38.7A2 2 0 0 1 78 89l.5 1.4a2 2 0 0 0 1.8 1.2h6.5c1 0 1.9-.8 1.9-1.9V28c0-4.3-3.5-7.7-7.7-7.7Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M73.7 69h-50m25.1-58v58"
    />
    <path
      fill="#44433c"
      d="M37.8 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm22 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M63.6 81H69a2 2 0 0 1 1.8 1.3l.6 1.4a2 2 0 0 0 1.9 1.3h6.6a2 2 0 0 0 2-2V19a8 8 0 0 0-8-8h-25m-14.1 0h-11a8 8 0 0 0-8 8v64c0 1.1 1 2 2 2h6.7a2 2 0 0 0 1.8-1.3l.6-1.4a2 2 0 0 1 1.9-1.3h22.7"
    />
  </svg>
);

export default WifiIcon;
