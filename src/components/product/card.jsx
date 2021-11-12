import React from "react";
import styled from "styled-components";

import photo from "../../images/product/DSC09598_1483x600.png";

const Container = styled.div`
  width: 250px;
  height: 350px;
  position: relative;
  backdrop-filter: blur(3px);
  border-radius: 15px;
  box-shadow: 0px 0px 24px 0px rgba(34, 60, 80, 0.2);
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  font-family: 'Nunito', sans-serif;
`;

const Photo = styled.div`
  & > img {
    max-width: 100%;
    padding-bottom: 25px;
  }
  & > h2 {
    font-size: 1.35rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

const Card = () => {
  return (
    <Container>
      <Photo>
        <img src={photo} alt="" />
        <h2>щетка-сметка</h2>
      </Photo>
    </Container>
  );
};

export default Card;
