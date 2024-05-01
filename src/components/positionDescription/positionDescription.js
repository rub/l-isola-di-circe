import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DescriptionBlock from "../descriptionBlock/descriptionBlock";
import Sticker from "../sticker/sticker";
import {
  imageGrid,
  parkingInfo,
  trainInfo,
  busInfo,
  image,
} from "./positionDescription.module.css";

const PositionDescription = () => (
  <DescriptionBlock
    title="Base ideale per scoprire Assisi e dintorni"
    copy={
      <>
        <p>
          A pochi passi da parcheggi gratuiti e dalla navetta che impiega solo
          10 minuti per Assisi, l’Isola di Circe offre una soluzione perfetta
          per esplorare la città di San Francesco e non solo.
        </p>
        <p>
          Con la stazione ferroviaria a 500 metri e la principale arteria
          stradale a 1,5 km, è facile avventurarsi nel Cuore verde d’Italia.
        </p>
        <p>
          L’area è ben servita da ristoranti, pizzerie, bar e gelaterie, oltre a
          farmacie e centri commerciali raggiungibili comodamente a piedi.
        </p>
      </>
    }
  >
    <div className={imageGrid}>
      <Sticker
        className={parkingInfo}
        iconWrapperStyle={{ transform: "rotate(270deg)" }}
        primaryText="Parcheggio gratuito"
        secondaryText="a 2 minuti a piedi"
      />
      <Sticker
        className={trainInfo}
        iconWrapperStyle={{ transform: "rotate(180deg)" }}
        primaryText="Stazione ferroviaria"
        secondaryText="a 500 mt"
        iconRight
      />
      <Sticker
        className={busInfo}
        primaryText="Navetta per Assisi"
        secondaryText="a 250 mt, ogni 30 min"
      />
      <StaticImage
        className={image}
        src={
          "https://images.unsplash.com/photo-1521661488642-d86e85a90de2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        aspectRatio={1}
        transformOptions={{ cropFocus: "center" }}
      />
    </div>
  </DescriptionBlock>
);

export default PositionDescription;
