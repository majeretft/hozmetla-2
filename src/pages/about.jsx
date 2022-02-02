import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";

const Lead = styled.p`
  font-size: 1.2em;
`;

const Page = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <h1>О Компании</h1>
            <div>
              <Lead>Мы производим инвентарь для уборки</Lead>
              <div>
                <div>метлы</div>
                <div>щетки</div>
                <div>комплектующие</div>
              </div>
            </div>
            <p>Работаем на рынке России уже более 10 лет, отправляем товары во все регионы страны и постоянно работаем в сторону расширения ассортимента</p>
          </div>
          <div className="col-xs-12 col-md-5"></div>
        </div>
      </main>
    </Layout>
  );
};

export default Page;
