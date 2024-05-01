import React from "react";
import * as Icons from "../../icons";

const Icon = ({ name, className, style, fill, width, height }) => {
  const SVGIcon = Icons[name];

  return (
    <SVGIcon className={className} fill={fill} width={width} height={height} />
  );
};

export default Icon;
