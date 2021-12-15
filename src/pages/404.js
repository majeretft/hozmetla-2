import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";

const BackLink = styled(Link)`
  display: inline-block;
  font-family: var(--ws-font-text);
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #5674b9;
  color: #5674b9;
  font-size: 1.2em;
  line-height: 1;
  transition: all 0.25s ease-in 0s;
  text-decoration: none;

  span {
    display: inline-block;
    margin-left: 0.5em;
    line-height: 1;
  }

  &:hover,
  &:active {
    text-decoration: none;
  }

  &:active {
    color: #fff;
    background-color: #5674b9;
  }

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      color: #fff;
      background-color: #5674b9;
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>

      <main className="container mb-5">
        <title>Страница не найдена</title>
        <h1>Страница не найдена (404)</h1>
        <p>Возможные причины, по которым возникла эта ошибка:</p>
        <ul>
          <li>
            <b>Неправильно указан адрес страницы</b>
            <br />
            Проверьте правильность набора адреса страницы в адресной строке
            браузера
          </li>
          <li>
            <b>
              Эта страница была удалена с сервера либо перемещена по другому
              адресу
            </b>
            <br />
            Попробуйте найти интересующий документ, используя навигацию по
            разделам сайта.
          </li>
        </ul>
        <br />
        <BackLink to="/">Вернуться на главную</BackLink>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
