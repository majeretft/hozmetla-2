import React from "react";
import { Link } from "gatsby";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import styled from "styled-components";

const Photo = ({ className, img }) => {
  console.log(img);

  return (
    <Img
      image={img}
      formats={["auto", "webp", "avif"]}
      placeholder="tracedSVG"
      alt="Щетка-сметка"
      className={className}
    />
  );
};

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: all 0.25s ease-in 0s;
`;

const Header = styled.div`
  height: 55%;
  background: linear-gradient(
    146deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(14, 125, 150, 1) 100%
  );
  position: relative;
  padding: 30px 40% 20px 20px;
  display: flex;
  flex-direction: column;

  h3 {
    color: #fff;
  }

  p {
    line-height: 1;
    color: #fff;
  }
`;

const Body = styled.div`
  height: 45%;
  padding: 20px;
  padding-right: 20%;
  display: flex;
  flex-direction: column;

  small {
    color: #757575;
  }

  table {
    line-height: 1.1;
  }

  a {
    position: absolute;
    right: 0;
    bottom: 15px;
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px 15px;
    background: #ec7505;
    border-radius: 5px;
    text-transform: uppercase;
    font-family: var(--ws-font-header);
    font-weight: 700;
    transition: all 0.25s ease-in 0s;

    &:hover {
      color: #fff;
      background: #db710d;
      text-decoration: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 30px;
      border-radius: 5px;
      z-index: -1;
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      transition: all 0.25s ease-in 0s;
    }
  }
`;

const Image = styled(Photo)`
  transform: translateX(20%);
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
`;

const FancyText = styled.span`
  font-family: "Alegreya Sans", sans-serif;
  text-transform: uppercase;
  font-size: 5.3rem;
  font-weight: 800;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  color: rgb(0, 0, 0);
  opacity: 0.1;
  margin-left: -6px;
  margin-bottom: -9px;
`;

const Stretch = styled.span`
  transform: scale(1, 1.3);
  transform-origin: bottom;
  display: block;
`;

const Card = styled.div`
  height: 400px;
  padding-right: 30px;
  padding-top: 15px;
  position: relative;
  min-width: 272px;
  margin-bottom: 30px;

  h3 {
    line-height: 1;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      ${Content} {
        box-shadow: 0px 5px 14px 2px rgba(34, 60, 80, 0.35);
      }

      ${Body} a::before {
        box-shadow: 0px 5px 14px 2px rgba(34, 60, 80, 0.35);
      }
    }
  }
`;

const CardComponent = ({
  fancyText = "TEXT",
  shortText = "Some short description of given item",
  name = "Item name",
  code = "000000",
  icon,
  link = "/",
}) => {
  return (
    <Card>
      <Content>
        <Header>
          <FancyText>
            <Stretch>{fancyText}</Stretch>
          </FancyText>
          <h3>{name}</h3>
          <p>{shortText}</p>
        </Header>
        <Body>
          <h3>
            {name}
            <br />
            <small>
              <small>Арт. </small>
              <span>A</span>
              {code}
            </small>
          </h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Колодка:</b>
                </td>
                <td>PP</td>
              </tr>
              <tr>
                <td>
                  <b>Волокно:</b>
                </td>
                <td>PET</td>
              </tr>
              <tr>
                <td>
                  <b>Цвет:</b>
                </td>
                <td>Черный / Цветной</td>
              </tr>
            </tbody>
          </table>
          <Link to={link}>подробнее</Link>
        </Body>
      </Content>
      <Image img={icon} />
    </Card>
  );
};

export default CardComponent;
