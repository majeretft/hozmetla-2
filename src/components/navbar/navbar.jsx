import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { Turn as Hamburger } from "hamburger-react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: #f0f0f0;
  text-decoration: none;
  font-size: 1.5em;
`;

const Container = styled.div`
  height: 59px;
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
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: block;
  padding: 5px;
`;

const HamburgerContainer = styled.button`
  padding: 5px;
  outline: none;
  border: none;
  background: none;
  position: absolute;
  z-index: 101;
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
      <Container className="container">
        <ItemsContainer onClick={() => setOpen(false)} isOpen={isOpen}>
          <Items>
            <Item>
              <StyledLink to="/">Домашняя</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/about">О Компании</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/contact">Контакты</StyledLink>
            </Item>
          </Items>
        </ItemsContainer>
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#f0f0f0" : "currentColor"} />
        </HamburgerContainer>
      </Container>
    </nav>
  );
};

export default Navbar;
