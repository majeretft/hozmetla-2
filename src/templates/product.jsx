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
    /* top: 10%;
    bottom: 0;
    left: -100%;
    right: 8%; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      141deg,
      rgba(218, 213, 222, 1) 0%,
      rgba(219, 213, 201, 1) 50%,
      rgba(211, 220, 223, 1)
    );
    border-top-right-radius: 150px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 150px;
  }

  .my-swiper {
    margin-bottom: 25px;
  }

  .my-swiper-thumb {
    padding-bottom: 25px;
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

const Table = styled.table`
  border: 1px solid #ffffff;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-family: var(--ws-font-header);

  td,
  th {
    border: 1px solid #ffffff;
    padding: 3px 2px;
  }

  thead {
    /* background: #0b6fa4; */
    background: linear-gradient(
      146deg,
      rgba(0, 177, 212, 1) 0%,
      rgba(14, 125, 150, 1) 100%
    );
    border-bottom: 5px solid #ffffff;
  }

  thead th {
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border-left: 2px solid #ffffff;
  }

  thead th:first-child {
    border-left: none;
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
      <main className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-5 order-md-2 d-md-flex flex-md-column justify-content-md-center">
            <h1>{json && json.name}</h1>
            <Code>
              <span>Арт. </span>A{json && json.code}
            </Code>

            {mdx && <MDXRenderer>{mdx}</MDXRenderer>}
          </div>
          <div className="col-xs-12 col-lg-7">
            <CustomSwiper>
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
                        <Image
                          alt=""
                          image={p.childImageSharp.gatsbyImageData}
                        />
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
                        <Image
                          alt=""
                          image={p.childImageSharp.gatsbyImageData}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </CustomSwiper>
          </div>
        </div>

        <Table className="mb-3">
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
        </Table>
        {dim && <Image alt="" image={dim} />}
        <ul>
          {json && json.material.decoration && (
            <li>
              {json.material.decoration.name}: {json.material.decoration.value}{" "}
              (Цвет: {json.material.decoration.color || " - "})
            </li>
          )}
          {json && json.material.handle && (
            <li>
              {json.material.handle.name}: {json.material.handle.value} (Цвет:{" "}
              {json.material.handle.color || " - "})
            </li>
          )}
          {json && json.material.handle && (
            <li>
              {json.material.filament.name}: {json.material.filament.value}{" "}
              (Цвет: {json.material.filament.color || " - "})
            </li>
          )}
        </ul>
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
