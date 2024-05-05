import React from "react";

const TrainIcon = ({ className, width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    width={width}
    height={height}
  >
    <path
      fill={fill}
      d="M8 17h8a2 2 0 0 0 2-2v-2H6v2a2 2 0 0 0 2 2Zm8.81 1.92A2 2 0 0 1 15.13 22H8.87a2 2 0 0 1-1.68-3.08A4 4 0 0 1 4 15V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a4 4 0 0 1-3.19 3.92ZM18 11V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5h12Zm-2-6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1ZM8 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7.13 4h6.26l-.67-1H9.54l-.66 1Z"
    />
  </svg>
);
export default TrainIcon;
