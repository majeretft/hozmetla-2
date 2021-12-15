import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";

const Page = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main>
          <h1>Contact</h1>
      </main>
    </Layout>
  );
};

export default Page;
