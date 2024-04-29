import React from "react";
import { Link } from "gatsby";
import { buttonLink } from "./buttonLink.module.css";

const ButtonLink = ({ url, label }) => (
  <Link className={buttonLink} to={url}>
    {label}
  </Link>
);

export default ButtonLink;
