import React from "react";
import {
  description,
  wrapper,
  information,
  text,
  media,
} from "./descriptionBlock.module.css";

const DescriptionBlock = ({ title, copy, children }) => (
  <div className={description}>
    <div className={wrapper}>
      <div className={information}>
        <h2>{title}</h2>
        <div className={text}>{copy}</div>
      </div>
      <div className={media}>{children}</div>
    </div>
  </div>
);

export default DescriptionBlock;
