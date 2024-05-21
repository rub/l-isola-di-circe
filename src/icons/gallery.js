import React from "react";

const Close = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={width}
    height={height}
  >
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M44.5 15.5v15a10 10 0 0 1-10 10H15.8"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M24.6 35.5H9.5a6 6 0 0 1-6-6v-16a6 6 0 0 1 6-6h2.3m5.5 0h16.2a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H31"
    />
    <circle cx={30.5} cy={15.5} r={2.5} />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m16.6 31.7 8.8-8.6c.9-.9 2.3-.9 3.2 0l4.3 4.2"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m8 24.9 4.9-4.7c.9-.9 2.3-.9 3.2 0l6.2 6"
    />
  </svg>
);
export default Close;
