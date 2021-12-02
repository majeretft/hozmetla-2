import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ImageComponent = ({ className }) => {
  return (
    <StaticImage
      src="../../images/product/IMG_20211202_165440_750w.png"
      formats={["auto", "webp", "avif"]}
      placeholder="tracedSVG"
      alt="Щетка-сметка"
      className={className}
    />
  );
};

const A = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #000;
  border-radius: 20px 20px 20px 20px;
  margin-top: auto;
  font-weight: 600;
  font-size: 1.1em;
  text-transform: uppercase;
  box-shadow: 0px 8px 12px -7px rgba(31, 58, 79, 0.42);
`;

const H3 = styled.h3`
  transform: translateY(40px);
`;

const Photo = styled(ImageComponent)`
  margin-bottom: 8px;
  transform: rotate(20deg);
`;

const PhotoContainer = styled.div`
  transform: translateY(-20px) translateX(10px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 30px 10px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  z-index: -101;
  display: flex;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #afc6e9ff;
    z-index: -100;
    clip-path: circle(360px at 90% 15%);
  }
`;

const Card = styled.div`
  position: relative;
  margin-bottom: 25px;
  max-width: 350px;
  box-shadow: 0px 5px 12px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
`;

const Table = styled.table`
  transform: translateY(50px);
`;

const CardComponent = () => {
  return (
    <Card>
      <Background></Background>
      <Content>
        <PhotoContainer>
          <Photo />
        </PhotoContainer>
        <H3>Щетка-сметка</H3>
        <Table>
          <tbody>
            <tr>
              <td>Волокно:</td>
              <td>
                <div>
                  <span>PET</span>
                  <span>(цветной)</span>
                </div>
                <div>
                  <span>PP</span>
                  <span>(черный / цветной)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Ручка:</td>
              <td>
                <div>
                  <span>PP</span>
                  <span>(черный / цветной)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Упавоква:</td>
              <td>
                <span>30шт</span>
              </td>
            </tr>
          </tbody>
        </Table>
        <A to="/">Подробнее</A>
      </Content>
    </Card>
  );
};

export default CardComponent;
