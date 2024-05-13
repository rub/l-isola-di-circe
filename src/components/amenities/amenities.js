import React from "react";
import AmenityBlock from "./amenityBlock";
import { amenities, wrapper, amenitiesGrid } from "./amenities.module.css";

const amenitiesList = {
  wifi: {
    gridArea: "wifi",
    color: "lilac",
    icon: "Wifi",
    amenity: "Wi-fi",
  },
  airConditioner: {
    gridArea: "air-conditioner",
    color: "skyBlue",
    icon: "AirConditioner",
    amenity: "Aria condizionata",
  },
  generic: {
    gridArea: "generic",
    color: "cream",
    icon: "FloorPlan",
    amenity: "",
  },
  kitchen: {
    gridArea: "kitchen",
    color: "butterscotch",
    icon: "Kitchen",
    amenity: "Cucina attrezzata",
  },
  washingMashine: {
    gridArea: "washing-machine",
    color: "springGreen",
    icon: "WashingMachine",
    amenity: "Lavatrice",
  },
  heating: {
    gridArea: "heating",
    color: "peach",
    icon: "Heating",
    amenity: "Riscaldamento",
  },
  smartTV: {
    gridArea: "smart-tv",
    color: "skyBlue",
    icon: "SmartTV",
    amenity: "Smart TV",
  },
  closet: {
    gridArea: "closet",
    color: "cream",
    icon: "Closet",
    amenity: "Ampio armadio",
  },
  parking: {
    gridArea: "parking",
    color: "butterscotch",
    icon: "Parking",
    amenity: "Parcheggio libero nelle vicinanze",
  },
  pets: {
    gridArea: "pets",
    color: "lilac",
    icon: "Pets",
    amenity: "Animali ammessi",
  },
  baby: {
    gridArea: "baby",
    color: "springGreen",
    icon: "Baby",
    amenity: "Culla, seggiolone e giochi per bambini",
  },
  selfCheckIn: {
    gridArea: "self-check-in",
    color: "peach",
    icon: "SelfCheckIn",
    amenity: "Self check-in",
  },
};

const Amenities = () => (
  <div className={amenities}>
    <div className={wrapper}>
      <h2>I servizi che troverai</h2>
      <ul className={amenitiesGrid}>
        {Object.entries(amenitiesList).map(
          ([key, { gridArea, color, icon, amenity }]) => (
            <AmenityBlock
              key={key}
              gridArea={gridArea}
              color={color}
              icon={icon}
              amenity={amenity}
            />
          )
        )}
      </ul>
    </div>
  </div>
);

export default Amenities;
