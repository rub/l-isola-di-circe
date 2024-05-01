import React from "react";
import Icon from "../icon/icon";
import { sticker, info, infoPrimary, icon } from "./sticker.module.css";

const Sticker = ({
  className,
  primaryText,
  secondaryText,
  iconWrapperStyle,
  iconRight = false,
}) => (
  <div className={`${sticker} ${className}`}>
    <div className={info} style={iconRight ? { order: "2" } : {}}>
      <p className={infoPrimary}>{primaryText}</p>
      <p>{secondaryText}</p>
    </div>
    <div className={icon} style={iconWrapperStyle}>
      <Icon name="FootStep" width={40} height={40} />
    </div>
  </div>
);

export default Sticker;
