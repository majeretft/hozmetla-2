import React from "react";
import { Link, graphql } from "gatsby";
import slugify from "slugify";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";
import styled from "styled-components";

const Text = styled.div`
  font-size: 1.1em;

  a,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
  }
`;

const Lead = styled.p`
  font-size: 1.2em;
`;

const Page = ({ data }) => {
  const products = {};
  data?.products?.nodes.forEach(({ childJson }) => {
    products[childJson.code] = slugify(childJson.slugRaw, { lower: true });
  });

  const catalogUrl = data?.catalog?.publicURL;

  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h1>Продукция</h1>

        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Text>
              <Lead>
                Предприятие ООО "Центр ВТО" изготавливает уборочный инвентарь:
                круглые метлы, плоские метлы, щетки - технического и бытового
                назначения.
              </Lead>
              <p>
                Каталог доступен по ссылке: <a href={catalogUrl}>загрузить</a>
              </p>
              <p>Метлы:</p>
              <ul>
                <li>
                  Круглая метла Прима
                  <ul>
                    <li>Прима 2 кольца (под заказ)</li>
                    <li>
                      <Link to={products["150121"] || "/"}>Прима 3 кольца</Link>
                    </li>
                    <li>Прима 4 кольца (под заказ)</li>
                    <li>
                      <Link to={products["150122"] || "/"}>Прима 5 колец</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Плоская метла
                  <ul>
                    <li>
                      <Link to={products["150126"] || "/"}>Гардена Люкс</Link>
                    </li>
                    <li>
                      <Link to={products["150131"] || "/"}>Нора</Link>
                    </li>
                    <li>
                      <Link to={products["150125"] || "/"}>Герда</Link>
                    </li>
                    <li>
                      <Link to={products["150124"] || "/"}>Мишель</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>Щетки:</p>
              <ul>
                <li>
                  <Link to={products["150180"] || "/"}>Щетка-сметка</Link>
                </li>
                <li>Щетка для бутылок (под заказ)</li>
                <li>
                  Щетка Карбоник
                  <ul>
                    <li>
                      <Link to={products["150160"] || "/"}>Карбоник 200</Link>
                    </li>
                    <li>
                      <Link to={products["150161"] || "/"}>Карбоник Авто</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={products["150170"] || "/"}>
                    Щетка утюжок (Карбоник айрон)
                  </Link>
                </li>
              </ul>
              <p>
                Метлы круглые собираются на деревянном черенке с использованием
                пластиковых колец, декоративного пластикового колпака и
                искуственного ворса. Подобное изделие часто называют
                полипропиленовой метлой. Материал колпака, колец и ворса -
                полипропилен (PP). Материал ручки - береза в.с. Цвета: черенок
                естественного цвета, колпак цвтной (под заказ возможно
                изготовление определенного цвета), ворса - цветной (под заказ
                возможно изготовление определенного цвета).
              </p>
              <p>
                Щетки изготавливаются из пластиковой колодки и искуственного
                ворса. Материал колодки - полипропилен (PP), материал ворса -
                полиэтилентерефталат (PET). Цвета: колодка - черный/темный, ворс
                - цветной (под заказ возможно изготовление определенного цвета).
              </p>
              <p>
                <b>Замечания:</b>
              </p>
              <ul>
                <li>
                  Ворс уличных метел остается гибким зимой при низких
                  температурах.
                </li>
                <li>
                  Хранить изделия с деревянными элементами (ручка/черенок)
                  рекомендуется в сухом помещении, без упаковочной пленки.
                </li>
              </ul>
            </Text>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ProductsPageQuery {
    products: allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        base: { in: ["index.json"] }
      }
    ) {
      nodes {
        childJson {
          name
          code
          slugRaw
        }
      }
    }
    catalog: file(ext: { eq: ".pdf" }) {
      base
      publicURL
    }
  }
`;
