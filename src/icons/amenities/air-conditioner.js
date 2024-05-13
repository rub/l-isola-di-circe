import React from "react";

const AirConditionerIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#ADE4EB"
      d="M85.6 20H26.4a8.3 8.3 0 0 0-8.2 8.4V42c0 .6.2 1.2.4 1.8l4.6 9.8A4.2 4.2 0 0 0 27 56h58c1.6 0 3.2-1 3.8-2.4l4.6-9.8c.2-.6.4-1.2.4-1.8V28.2c0-4.4-3.6-8.2-8.2-8.2Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M35.2 13H77a8 8 0 0 1 8 8v14H11V21a8 8 0 0 1 8-8h6.2m35 36H19.6a4 4 0 0 1-3.6-2.4L11 35h74l-5 11.6a4 4 0 0 1-3.6 2.4h-5.2m.6-24H73M48 87.2V89m0-30v18M33 59c0 10.2 0 18.6-10 26m40-26c0 10.2 0 18.6 10 26"
    />
  </svg>
);

export default AirConditionerIcon;
