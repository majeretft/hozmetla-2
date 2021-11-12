import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import ProductCard from "../components/product/card";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <h1>Index</h1>
        <ProductCard />
      </Main>
    </Layout>
  );
};

export default IndexPage;
