import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import FlatDescription from "../components/flatDescription/flatDescription";
import Gallery from "../components/gallery/gallery";
import PositionDescription from "../components/positionDescription/positionDescription";
import Amenities from "../components/amenities/amenities";
import Directions from "../components/directions/directions";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FlatDescription />
      <Gallery />
      <PositionDescription />
      <Amenities />
      <Directions />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>L'Isola di Circe - Assisi</title>;
