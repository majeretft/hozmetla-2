import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/brand/vto_logo_txt.svg";

const Footer = styled.footer`
  background-color: #404040;
`;

const Button = styled.a`
  display: fllex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #111;
  background-color: #eee;
  width: 2rem;
  height: 2rem;
  transition: all 0.25s ease-in 0s;

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      text-decoration: none;
      color: #eee;
      background-color: #404040;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  ${Button} {
    margin-right: 5px;
  }

  span {
    color: #fff;
    font-size: 1.15em;
    line-height: 1;
    font-family: var(--ws-font-header);
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  img {
    height: 4rem;
    margin-right: 15px;
  }
`;

const Address = styled.div`
  color: #ddd;
`;

const Content = styled.div`
  padding: 20px 0;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <div className="container">
        <Content>
          <Brand>
            <img src={logo} alt="" />
          </Brand>
          <Contact>
            <Button href="mailto:sales@hozmetla.ru">
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
            <span>sales@hozmetla.ru</span>
          </Contact>
          <Contact>
            <Button href="tel:+74912950643">
              <FontAwesomeIcon icon={faPhone} />
            </Button>
            <span>+7 4912 950643</span>
          </Contact>
          <Address>
            390017 Россия, Рязанская область, Рязань, Ряжское шоссе 20 литер Щ'
          </Address>
        </Content>
      </div>
    </Footer>
  );
};

export default FooterComponent;
