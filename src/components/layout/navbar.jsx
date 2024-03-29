import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { Turn as Hamburger } from "hamburger-react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/brand/vto_logo_txt.svg";

const Container = styled.div`
  height: 58px;
`;

const ItemsContainer = styled.div`
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  top: 0;
  bottom: 0;
  width: 100%;
  transition: left 0.25s ease-in-out 0s;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 1.5%;

  a {
    font-family: var(--ws-font-header);
    font-weight: 400;
    color: #eee;
    text-decoration: none;
    text-align: center;
  }

  img {
    height: 50px;
  }
`;

const HamburgerContainer = styled.button`
  padding: 5px 0;
  margin-left: -8px;
  outline: none;
  border: none;
  background: none;
  position: absolute;
  z-index: 101;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  hr {
    background-color: #fff;
    width: 100%;
  }

  img {
    height: 3.5rem;
  }
`;

const Contacts = styled.div`
  hr {
    background-color: #fff;
    width: 100%;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  a {
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
    margin-right: 5px;
  }

  span {
    color: #fff;
    font-size: 1.15em;
    line-height: 1;
    font-family: var(--ws-font-header);
  }
`;

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  let handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  let handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav ref={menuRef}>
      <Container className="container mb-3">
        <ItemsContainer onClick={() => setOpen(false)} isOpen={isOpen}>
          <div className="container">
            <Brand>
              <img src={logo} alt="" />
              <hr />
            </Brand>
            <Items>
              <Item>
                <Link to="/">Домашняя</Link>
              </Item>
              <Item>
                <Link to="/products">Продукция</Link>
              </Item>
              <Item>
                <Link to="/about">О Компании</Link>
              </Item>
              <Item>
                <Link to="/contact">Контакты</Link>
              </Item>
            </Items>
            <Contacts>
              <hr />
              <Contact>
                <a href="mailto:sales@hozmetla.ru">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <span>sales@hozmetla.ru</span>
              </Contact>
              <Contact>
                <a href="tel:+74912950643">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <span>+7 4912 950643</span>
              </Contact>
            </Contacts>
          </div>
        </ItemsContainer>
        <HamburgerContainer>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? "#f0f0f0" : "#5674b9"}
          />
        </HamburgerContainer>
      </Container>
    </nav>
  );
};

export default Navbar;
