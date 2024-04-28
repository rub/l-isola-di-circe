import * as React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>L'Isola di Circe - Assisi</title>;
