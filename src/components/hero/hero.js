import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../logo/logo";
import {
  hero,
  wrapper,
  contentWrapper,
  content,
  logo,
  title,
  presentation,
} from "./hero.module.css";

const Hero = () => (
  <div className={hero}>
    <div className={wrapper}>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt=""
        src={
          "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        formats={["auto", "webp", "avif"]}
        loading="eager"
      />
      <div className={contentWrapper}>
        <div className={content}>
          <div className={logo}>
            <Logo />
            <h1 className={title}>
              Appartamento vacanze <br />a Santa Maria degli Angeli, Assisi
            </h1>
          </div>
          <div className={presentation}>
            <p>
              Situato in una storica palazzina dei primi del ‘900 sulla strada
              dei “Mattoni per Assisi”, adiacente alla meravigliosa Basilica di
              Santa Maria degli Angeli.
            </p>
            <p>
              Con accesso immediato ai servizi di trasporto, questo appartamento
              vi offrirà lo spazio per rilassarvi dopo un’altra giornata alla
              scoperta di Assisi e delle altre perle dell’Umbria.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
