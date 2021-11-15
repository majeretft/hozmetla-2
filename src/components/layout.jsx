import React from "react";
import styled from "styled-components";

const Content = styled.div`
  flex: 1 0 auto;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Content>
        {children}
      </Content>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </>
  );
};

export default Layout;
