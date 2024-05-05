import * as React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import FlatDescription from "../components/flatDescription/flatDescription";
import PositionDescription from "../components/positionDescription/positionDescription";
import Directions from "../components/directions/directions";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FlatDescription />
      <PositionDescription />
      <Directions />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>L'Isola di Circe - Assisi</title>;
