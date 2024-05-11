import React from "react";
import Icon from "../icon/icon";
import {
  stickerButton,
  info,
  infoPrimary,
  icon,
} from "./stickerButton.module.css";

const StickerButton = ({
  className,
  primaryText,
  secondaryText,
  iconWrapperStyle,
  onClick,
}) => (
  <button
    className={`${stickerButton} ${className}`}
    onClick={onClick}
    aria-label={primaryText}
  >
    <div className={info}>
      <p className={infoPrimary}>{primaryText}</p>
      <p>{secondaryText}</p>
    </div>
    <div className={icon} style={iconWrapperStyle}>
      <Icon name="FootStep" width={40} height={40} />
    </div>
  </button>
);

export default StickerButton;
