import React from "react";
import styled from "styled-components";

const Content = styled.div`
  flex: 1 0 auto;
`;

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Main = styled.main``;

const Layout = ({ children }) => {
  return (
    <>
      <Content>
        <Header>
          <h1>Header</h1>
        </Header>
        <Main className="container">{children}</Main>
      </Content>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </>
  );
};

export default Layout;
