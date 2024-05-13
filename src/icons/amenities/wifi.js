import React from "react";

const WifiIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#F3CEE9"
      d="M56.5 94a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM95 35.4a59.5 59.5 0 0 0-77.8 0 4.1 4.1 0 0 0-.4 5.8l20.3 21.9a4.1 4.1 0 0 0 5.5.4c8-5.8 19-5.8 27 0 1.8 1.3 4.1 1.1 5.6-.4l20.2-21.9a4.1 4.1 0 0 0-.3-5.8Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeWidth={3}
      d="M57.7 76a9.2 9.2 0 1 1-9.6-9.2"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeWidth={3}
      d="M48.3 50.9c5.8 0 11.5 2.2 16 6.6m-32.3 0c1.3-1.3 2.7-2.4 4.2-3.3m35-15c2 1.4 3.9 3 5.7 4.7m-57.5.1c10.9-11 26.5-14.4 40.3-10.3M22.3 19.2c21.8-10.8 49-7 67.2 11.1m-82.7 0c1.7-1.7 3.5-3.3 5.4-4.8"
    />
  </svg>
);

export default WifiIcon;
