import React from "react";

const WifiIcon = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97 96"
    className={className}
    fill={fill}
  >
    <path
      fill="#BCE4A0"
      d="M67.3 22c-1.2-.2-2.2.8-2.2 2v28.2H25c-1.4 0-2.2 1.2-2 2.4a34.3 34.3 0 0 0 34 28.6c18 0 32.6-13.6 34.2-31.2v-4.8c-.2-13-10.6-24-23.8-25.2Z"
    />
    <path
      stroke="#44433c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M69.1 18.6c-4-2.4-8.4-3.6-13.4-3.6v27.8m26 2.2v-4.4c0-6-2.2-11.6-5.6-16M70.7 85a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-44 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM53.7 74.6a33 33 0 0 0 28-29.6m-12.2 0H15.7a33.4 33.4 0 0 0 26.4 29.4"
    />
    <path
      stroke="#44433c"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M35.5 32.8a5.8 5.8 0 1 0 0-11.6 5.8 5.8 0 0 0 0 11.6ZM26 45c0-.6-.3-1-.3-1.6a9.8 9.8 0 0 1 19.6 0v1.2"
    />
  </svg>
);

export default WifiIcon;
