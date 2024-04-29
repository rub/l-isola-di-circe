import React from "react";
import ButtonLink from "../buttonLink/buttonLink";
import { header } from "./header.module.css";

const Header = () => (
  <header className={header}>
    <ButtonLink url="/" label="Verifica disponibilità" />
  </header>
);

export default Header;
