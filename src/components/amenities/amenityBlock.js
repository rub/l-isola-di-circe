import React from "react";
import Icon from "../icon/icon";
import {
  amenityBlock,
  amenityIcon,
  floorPlanIcon,
  title,
  lilac,
  skyBlue,
  butterscotch,
  springGreen,
  cream,
  peach,
} from "./amenityBlock.module.css";

const AmenityBlock = ({ gridArea, color, icon, amenity }) => {
  const colors = {
    lilac,
    skyBlue,
    butterscotch,
    springGreen,
    cream,
    peach,
  }[color];

  return (
    <li className={`${amenityBlock} ${colors}`} style={{ gridArea: gridArea }}>
      <Icon className={amenity ? amenityIcon : floorPlanIcon} name={icon} />
      {amenity && <h3 className={title}>{amenity}</h3>}
    </li>
  );
};

export default AmenityBlock;
