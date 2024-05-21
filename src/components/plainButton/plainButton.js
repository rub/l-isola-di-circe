import React from "react";
import Icon from "../icon/icon";
import { plainButton } from "./plainButton.module.css";

const PlainButton = ({ onClick, label, icon }) => (
  <button className={plainButton} onClick={onClick}>
    <span>{label}</span>
    <Icon name={icon} width={24} height={24} />
  </button>
);

export default PlainButton;
