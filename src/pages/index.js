import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import ProductCard from "../components/product/card";
import Navbar from "../components/navbar/navbar";

const Main = styled.main`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
`;

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <Main>
        <ProductCard />
      </Main>
    </Layout>
  );
};

export default IndexPage;
