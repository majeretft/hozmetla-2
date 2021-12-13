import React from "react";
import styled from "styled-components";

import Footer from "./layout/footer";

const Content = styled.div`
  flex: 1 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
