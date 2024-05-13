import React from "react";

const KitchenIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#EDD19B"
      d="M83.3 31.2c-3.8-1-7.4-.7-10.7.5a17.3 17.3 0 0 0-32.4 0A17.3 17.3 0 1 0 34 65.1h1v22.4a4 4 0 0 0 4.1 4.1h34.6a4 4 0 0 0 4.1-4V65h1a17.3 17.3 0 0 0 4.5-34Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={20}
      strokeWidth={3}
      d="M28.4 71h31.4M41.4 57v4m14-4v4"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M64.4 24.1a17 17 0 0 0-31.9 0 17 17 0 0 0-15.5 30M27.4 57v22a4 4 0 0 0 4 4h34a4 4 0 0 0 4-4V57h1a17 17 0 0 0 6.9-32.6"
    />
  </svg>
);

export default KitchenIcon;
