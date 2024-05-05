import React from "react";

const CarIcon = ({ className, width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 24"
    className={className}
    width={width}
    height={height}
  >
    <path
      fill={fill}
      d="M16.33 19h-8v1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1.67a3 3 0 0 1-2-2.83v-3c0-.62.19-1.2.51-1.67l1.09-6.8A3 3 0 0 1 6.89 2h10.88a3 3 0 0 1 2.96 2.53l1.09 6.79c.32.48.51 1.06.51 1.68v3a3 3 0 0 1-2 2.83v1.67a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V19Zm-11-2h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Zm14.25-6.99-.82-5.17a1 1 0 0 0-.99-.84H6.9a1 1 0 0 0-.99.84l-.82 5.17.25-.01h14l.25.01ZM17.83 14a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-11-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm.7-10.9a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default CarIcon;
