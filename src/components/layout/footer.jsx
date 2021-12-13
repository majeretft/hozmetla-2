import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterComponent = () => {
  return (
    <Footer>
      <h1>Footer</h1>
    </Footer>
  );
};

export default FooterComponent;
