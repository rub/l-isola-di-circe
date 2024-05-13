import React from "react";

const WifiIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#ADE4EB"
      d="M94 74.3V33.7c0-4.2-3.4-7.7-7.6-7.7H25.8a7.7 7.7 0 0 0-7.7 7.7v40.6c0 4.2 3.4 7.7 7.7 7.7h60.6c4.2 0 7.7-3.5 7.7-7.7Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M9 63.9V67a8 8 0 0 0 8 8h62a8 8 0 0 0 8-8V41.2m0-12.4V25a8 8 0 0 0-8-8H17a8 8 0 0 0-8 8v27.8"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m59.6 44.2-17.2-9a2 2 0 0 0-2.9 1.8v18a2 2 0 0 0 3 1.8l17-9a2 2 0 0 0 0-3.6Zm-39.8 37 4-6.2m48.6 0 4 6.2"
    />
  </svg>
);

export default WifiIcon;
