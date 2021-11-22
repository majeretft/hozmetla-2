import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
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
        <h1>About</h1>
      </Main>
    </Layout>
  );
};

export default IndexPage;
