import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import customMarkerIcon from "../../images/map-marker.png";
import Icon from "../icon/icon";
import {
  directions,
  wrapper,
  address,
  directionsBlock,
  direction,
  icon,
  mapContent,
} from "./directions.module.css";

const Directions = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GATSBY_GOOGLE_API_KEY,
      version: "quarterly",
      libraries: ["marker"],
    });

    loader.load().then(async () => {
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary(
        "marker"
      );

      // Initialize map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 43.05904963601297, lng: 12.581099046423818 },
        zoom: 17,
        mapTypeControl: false,
        fullscreenControl: false,
        mapId: "c6d9ac87103ca459",
      });

      // Create an image element for the custom icon
      const customIcon = document.createElement("img");
      customIcon.src = customMarkerIcon;

      // Create an AdvancedMarkerElement with the custom icon
      new AdvancedMarkerElement({
        map: map,
        position: { lat: 43.05904963601297, lng: 12.581099046423818 },
        content: customIcon,
        title: "L'Isola di Circe",
      });
    });
  }, []);

  return (
    <div className={directions}>
      <div className={wrapper}>
        <h2>Come arrivare</h2>
        <p className={address}>
          Viale Patrono d’Italia, 10, 06081, Santa Maria degli Angeli - Assisi
          (PG)
        </p>
        <ul className={directionsBlock}>
          <li className={direction}>
            <Icon
              className={icon}
              name="Train"
              width={24}
              height={24}
              fill="#252422"
            />
            <p>Dalla stazione ferroviaria di Assisi, 6 minuti a piedi.</p>
          </li>
          <li className={direction}>
            <Icon
              className={icon}
              name="Car"
              width={24}
              height={24}
              fill="#252422"
            />
            <p>
              Dall’uscita per Santa Maria degli Angeli dalla SS75, 6 minuti in
              auto, con parcheggio a disco orario sotto casa per lasciare i
              bagagli.
            </p>
          </li>
          <li className={direction}>
            <Icon
              className={icon}
              name="Plane"
              width={24}
              height={24}
              fill="#252422"
            />
            <p>
              Dall’aeroporto internazionale dell’Umbria “San Francesco
              d’Assisi”, 24 minuti via autobus o 11 minuti se hai noleggiato un
              auto.
            </p>
          </li>
        </ul>
        <div className={mapContent} ref={mapRef}></div>
      </div>
    </div>
  );
};

export default Directions;
