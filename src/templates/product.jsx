import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage as Image } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, EffectFade, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";

SwiperCore.use([FreeMode, EffectFade, Thumbs]);

const Code = styled.p`
  font-family: var(--ws-font-header);
  font-size: 1.2rem;
  color: #b3b3b3;

  span {
    font-size: 0.8em;
  }
`;

const CustomSwiper = styled.div`
  position: relative;
  padding: 25px 0;
  margin-bottom: 25px;

  &:before {
    content: "";
    position: absolute;
    top: 10%;
    bottom: 0;
    left: 0;
    width: 85%;
    background-color: #ececec;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 30px;
  }

  .my-swiper {
    margin-bottom: 25px;
  }

  .my-swiper-thumb {
    .swiper-wrapper {
      display: dlex;
      justify-content: center;
    }

    .swiper-slide {
      width: 80px;
    }

    .swiper-slide-thumb-active {
      filter: grayscale(1);
      opacity: 0.5;
    }
  }
`;

const Page = ({ data }) => {
  const photos = data.photos?.nodes;
  const photoIcons = data.photoIcons?.nodes;
  const json = data.indexFile?.childJson;
  const dim = data.dimFile?.childImageSharp.gatsbyImageData;
  const mdx = data.mdxFile?.childMdx.body;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <h1>{json && json.name}</h1>
          <Code>
            <span>Арт. </span>A{json && json.code}
          </Code>
        </div>

        <CustomSwiper>
          <div className="container">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="my-swiper"
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
            >
              {photos &&
                photos.map((p) => {
                  return (
                    <SwiperSlide key={p.childImageSharp.id}>
                      <Image alt="" image={p.childImageSharp.gatsbyImageData} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={false}
              spaceBetween={0}
              slidesPerView={"auto"}
              freeMode={true}
              watchSlidesProgress={true}
              className="my-swiper-thumb"
            >
              {photos &&
                photoIcons.map((p) => {
                  return (
                    <SwiperSlide key={p.childImageSharp.id}>
                      <Image alt="" image={p.childImageSharp.gatsbyImageData} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </CustomSwiper>

        <div className="container">
          {mdx && <MDXRenderer>{mdx}</MDXRenderer>}
          <table>
            <thead>
              <tr>
                <th>Артикул</th>
                {json && json.dim.map((x) => <th key={x.label}>{x.label}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{json && json.code}</td>
                {json && json.dim.map((x) => <td key={x.label}>{x.value}см</td>)}
              </tr>
            </tbody>
          </table>
          {dim && <Image alt="" image={dim} />}
          <div>
            {json && json.material.decoration && (
              <p>
                {json.material.decoration.name}: {json.material.decoration.value}{" "}
                ({json.material.decoration.color})
              </p>
            )}
          </div>
          <div>
            {json && json.material.handle && (
              <p>
                {json.material.handle.name}: {json.material.handle.value} (
                {json.material.handle.color})
              </p>
            )}
          </div>
          <div>
            {json && json.material.handle && (
              <p>
                {json.material.filament.name}: {json.material.filament.value} (
                {json.material.filament.color})
              </p>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ProductPageQuery($dirPhoto: String, $dir: String) {
    photos: allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativeDirectory: { eq: $dirPhoto }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
          id
        }
      }
    }
    photoIcons: allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativeDirectory: { eq: $dirPhoto }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 80)
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
    mdxFile: file(
      sourceInstanceName: { eq: "content" }
      relativeDirectory: { eq: $dir }
      base: { eq: "description.mdx" }
    ) {
      childMdx {
        body
        id
      }
    }
  }
`;
