import React, { useEffect, useRef, useState, useCallback } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import homeMarker from "../../icons/home-pin.svg";
import busMarker from "../../icons/bus-marker.svg";
import trainMarker from "../../icons/train-marker.svg";
import parkingMarker from "../../icons/parking-marker.svg";
import DescriptionBlock from "../descriptionBlock/descriptionBlock";
import Sticker from "../stickerButton/stickerButton";
import {
  imageGrid,
  selectedSticker,
  parkingInfo,
  trainInfo,
  busInfo,
  mapContent,
} from "./positionDescription.module.css";

const start = { lat: 43.05904963601297, lng: 12.581099046423818 }; // Origin location
const travelMode = "WALKING";

const routes = {
  bus: {
    icon: busMarker,
    destination: { lat: 43.058228, lng: 12.579643 },
    anchor: { x: 15, y: 22 },
    stickerText: ["Bus Assisi Link", "a 150 mt, ogni 30 min"],
    sitckerInfoClass: busInfo,
    stickerIconRotation: "180deg",
  },
  train: {
    icon: trainMarker,
    destination: { lat: 43.059150016326946, lng: 12.585362086572038 },
    anchor: { x: 32, y: 22 },
    stickerText: ["Stazione di Assisi", "a 500 mt"],
    sitckerInfoClass: trainInfo,
    stickerIconRotation: "0deg",
  },
  parking: {
    icon: parkingMarker,
    destination: { lat: 43.058197, lng: 12.581835 },
    anchor: { x: 18, y: 0 },
    stickerText: ["Parcheggio gratuito", "a 200 mt"],
    sitckerInfoClass: parkingInfo,
    stickerIconRotation: "90deg",
  },
};

const PositionDescription = () => {
  const mapRef = useRef(null);
  const directionsServiceRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const currentMarker = useRef(null);

  // Add or update the marker at the destination
  const addEndMarker = useCallback((location, routeId) => {
    if (!directionsRendererRef.current) return;

    const map = directionsRendererRef.current.getMap();

    // Remove the previous marker if it exists
    if (currentMarker.current) {
      currentMarker.current.setMap(null);
    }

    const route = routes[routeId];
    const icon = {
      url: routes[routeId]?.icon || busMarker,
      size: new window.google.maps.Size(40, 40),
      scaledSize: new window.google.maps.Size(40, 40),
      // origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(route.anchor.x, route.anchor.y),
    };

    // Create a new marker and add it to the map
    currentMarker.current = new window.google.maps.Marker({
      position: location,
      map,
      icon,
    });
  }, []);

  // Update the route based on the selected service
  const setRoute = useCallback(
    (routeId) => {
      if (!mapLoaded || !routes[routeId]) return;

      setSelectedRoute(routeId);

      const destination = routes[routeId].destination;
      const request = {
        origin: start,
        destination,
        travelMode,
      };

      // Request directions
      directionsServiceRef.current.route(request, (result, status) => {
        if (status === "OK") {
          directionsRendererRef.current.setDirections(result);
          addEndMarker(destination, routeId); // Add marker at the destination
          // Ensure the zoom is set after the directions are rendered
        } else {
          console.error(`Directions request failed due to ${status}`);
        }
      });
    },
    [addEndMarker, mapLoaded]
  );

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GATSBY_GOOGLE_API_KEY,
      version: "quarterly",
      libraries: ["marker", "places"],
    });

    loader.load().then(async () => {
      // Initialize map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 43.05904963601297, lng: 12.581099046423818 },
        zoom: 16,
        mapTypeControl: false,
        mapTypeId: window.google.maps.MapTypeId.SATELLITE,
        fullscreenControl: false,
        streetViewControl: false,
        gestureHandling: "none",
        zoomControl: false,
        heading: 320,
        tilt: 0,
        mapId: "c6d9ac87103ca459",
      });

      // Set up the Directions service and renderer
      directionsServiceRef.current = new window.google.maps.DirectionsService();
      directionsRendererRef.current = new window.google.maps.DirectionsRenderer(
        {
          map: map,
          preserveViewport: true, // Keep the zoom level fixed
          suppressMarkers: true, // Hide default markers
          polylineOptions: {
            strokeOpacity: 0, // Hide default paths
            icons: [
              {
                icon: {
                  path: 0,
                  scale: 6, // Dot sizes
                  fillOpacity: 1,
                  fillColor: "#ade4eb",
                  strokeOpacity: 1,
                  strokeColor: "#248794",
                  strokeWeight: 2,
                },
                repeat: "16px", // Adjust this for space between dots
              },
            ],
          },
        }
      );

      setMapLoaded(true);

      // Default route
      setRoute("bus");

      // Create an image element for the custom icon
      const customIcon = document.createElement("img");
      customIcon.src = homeMarker;
      customIcon.alt = "L'Isola di Circe";
      customIcon.onload = () => {
        new window.google.maps.Marker({
          position: start,
          map,
          title: "L'Isola di Circe",
          icon: {
            url: homeMarker,
            scaledSize: new window.google.maps.Size(55, 64),
          },
        });
      };
    });
  }, [setRoute]);

  return (
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
            L’area è ben servita da ristoranti, pizzerie, bar e gelaterie, oltre
            a farmacie e centri commerciali raggiungibili comodamente a piedi.
          </p>
        </>
      }
    >
      {/* Fix bus text alignment */}
      <div className={imageGrid}>
        {Object.keys(routes).map((routeId) => (
          <Sticker
            className={`${routes[routeId].sitckerInfoClass} ${
              selectedRoute === routeId ? selectedSticker : ""
            }`}
            iconWrapperStyle={{
              transform: `rotate(${routes[routeId].stickerIconRotation})`,
            }}
            primaryText={routes[routeId].stickerText[0]}
            secondaryText={routes[routeId].stickerText[1]}
            key={routeId}
            onClick={() => setRoute(routeId)}
          />
        ))}
        <div className={mapContent} ref={mapRef}></div>
      </div>
    </DescriptionBlock>
  );
};

export default PositionDescription;
