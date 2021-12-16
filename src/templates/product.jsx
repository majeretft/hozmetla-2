import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage as Image } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";

const Page = ({ data }) => {
  const photos = data.allFile.nodes;
  const json = data.indexFile.childJson;
  const dim = data.dimFile.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h1>
          {json.name} <small>{json.code}</small>
        </h1>

        <table>
          <thead>
            <tr>
              <th>Артикул</th>
              {json.dim.map((x) => (
                <th key={x.label}>{x.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{json.code}</td>
              {json.dim.map((x) => (
                <td key={x.label}>{x.value}см</td>
              ))}
            </tr>
          </tbody>
        </table>
        <Image alt="" image={dim} />

        <div>
          {json.material.decoration && (
            <p>
              {json.material.decoration.name}: {json.material.decoration.value}{" "}
              ({json.material.decoration.color})
            </p>
          )}
        </div>

        <div>
          {json.material.handle && (
            <p>
              {json.material.handle.name}: {json.material.handle.value} (
              {json.material.handle.color})
            </p>
          )}
        </div>

        <div>
          {json.material.handle && (
            <p>
              {json.material.filament.name}: {json.material.filament.value} (
              {json.material.filament.color})
            </p>
          )}
        </div>

        {photos.map((p) => {
          return (
            <Image
              key={p.childImageSharp.id}
              alt=""
              image={p.childImageSharp.gatsbyImageData}
            />
          );
        })}
      </main>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ProductPageQuery($dirPhoto: String, $dir: String) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativeDirectory: { eq: $dirPhoto }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData
          id
        }
      }
    }
    indexFile: file(
      sourceInstanceName: { eq: "content" }
      relativeDirectory: { eq: $dir }
      base: { eq: "index.json" }
    ) {
      childJson {
        name
        code
        dim {
          label
          value
        }
        material {
          decoration {
            name
            color
            value
          }
          handle {
            color
            name
            value
          }
          filament {
            color
            name
            value
          }
        }
      }
    }
    dimFile: file(
      sourceInstanceName: { eq: "content" }
      relativeDirectory: { eq: $dir }
      name: { eq: "dim" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
