import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DescriptionBlock from "../descriptionBlock/descriptionBlock";
import { imagesGrid, imageBig, imageSmall } from "./flatDescription.module.css";

const FlatDescription = () => (
  <DescriptionBlock
    title="Accogliente, con una vista suggestiva"
    copy="L’appartamento si trova in una palazzina tranquilla, offrendo pace e privacy. Il punto di forza è nel suo terrazzino panoramico, perfetto per colazioni all’aperto o serate rilassanti sotto le stelle con vista sulla Cupola della Basilica di Santa Maria degli Angeli e dei giardini del Domus Madonna delle Rose."
  >
    <div className={imagesGrid}>
      <StaticImage
        className={imageBig}
        src={
          "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        aspectRatio={1}
        transformOptions={{ cropFocus: "center" }}
      />
      <StaticImage
        className={imageSmall}
        src={
          "https://images.unsplash.com/photo-1598897451897-a1fb4356827a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        aspectRatio={3 / 2}
        transformOptions={{ cropFocus: "center" }}
      />
    </div>
  </DescriptionBlock>
);

export default FlatDescription;
