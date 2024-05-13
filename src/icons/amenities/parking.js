import React from "react";

const WifiIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#EDD19B"
      d="M79 88H34.2a9.6 9.6 0 0 1-9.6-9.6V33.6c0-5.4 4.4-9.6 9.6-9.6h44.6c5.4 0 9.6 4.4 9.6 9.6v44.6A9.5 9.5 0 0 1 79 88Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M81.6 63.6V71c0 5.6-4.4 10-10 10h-46c-5.6 0-10-4.4-10-10V43.2m0-13.4V25c0-5.6 4.4-10 10-10h46c5.6 0 10 4.4 10 10v25.2"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M39.6 53h11c6 0 11-5 11-11s-5-11-11-11h-11v36"
    />
  </svg>
);

export default WifiIcon;
