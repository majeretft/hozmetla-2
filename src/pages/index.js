import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import ProductCard from "../components/product/card";
import Navbar from "../components/navbar/navbar";

const Main = styled.main`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  overflow-x: hidden;
`;

const FlexColumnCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 58px - 16px);
`;

const StyledH1 = styled.h1`
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  text-transform: uppercase;
`;

const StyledUl = styled.ul`
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  text-transform: uppercase;
`;

const DownloadCatalog = styled.button`
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #5674b9;
  color: #5674b9;
  font-size: 1.2em;
  line-height: 1;

  span {
    display: inline-block;
    margin-left: 0.5em;
    line-height: 1;
  }
`;

const Image = () => {
  return (
    <StaticImage
      className="mb-3"
      objectFit="contain"
      alt=""
      src="../images/bg/Brushes in shape.png"
      formats={["auto", "webp", "avif"]}
      loading="eager"
      placeholder="tracedSVG"
    />
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <Main>
        <div className="container">
          <FlexColumnCenter className="mb-5">
            <Image />
            <StyledH1>
              уборочный <br /> инвентарь
            </StyledH1>
            <StyledUl>
              <li>Метлы круглые</li>
              <li>Метлы плоские</li>
              <li>Щетки</li>
            </StyledUl>
            <DownloadCatalog>
              <FontAwesomeIcon icon={faFilePdf} />
              <span>Загрузить каталог</span>
            </DownloadCatalog>
          </FlexColumnCenter>
        </div>
        <div
          style={{
            paddingTop: 30,
            paddingBottom: 30,
            marginBottom: 25,
            marginTop: 40,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <ProductCard />
              </div>
              <div className="col">
                <ProductCard />
              </div>
              <div className="col">
                <ProductCard />
              </div>
              <div className="col">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export default IndexPage;
