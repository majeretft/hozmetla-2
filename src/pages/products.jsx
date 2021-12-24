import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";
import styled from "styled-components";

const MdxStyle = styled.div`
  font-size: 1.2em;

  a,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;

const Page = ({ data }) => {
  const mdx = data.mdxFile?.childMdx.body;

  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <MdxStyle>{mdx && <MDXRenderer>{mdx}</MDXRenderer>}</MdxStyle>
      </main>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ProductsPageQuery {
    mdxFile: file(
      sourceInstanceName: { eq: "content-pages" }
      base: { eq: "products.mdx" }
    ) {
      childMdx {
        body
        id
      }
    }
  }
`;
