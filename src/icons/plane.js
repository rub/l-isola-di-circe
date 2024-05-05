import React from "react";

const PlaneIcon = ({ className, width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 24"
    className={className}
    width={width}
    height={height}
  >
    <path
      fill={fill}
      d="m12.9 10.6-5.52 5.5-1.87-.77-.16.17 2.38 1.58 1.58 2.38.17-.16-.77-1.88 5.5-5.5 4.33 6.25.21-.2-2.88-7.7 4.4-4.4a.94.94 0 0 0-1.33-1.33l-4.4 4.4-7.7-2.88-.2.2 6.25 4.33Zm5.38 10.48-4.33-6.26-3.04 3.04.78 1.87-2.67 2.67-2.64-3.97L2.4 15.8l2.67-2.67 1.87.78 3.04-3.04-6.26-4.33 2.65-2.65 7.7 2.89 3.54-3.55a2.8 2.8 0 1 1 3.97 3.97l-3.55 3.55 2.89 7.7-2.65 2.64Z"
    />
  </svg>
);
export default PlaneIcon;
