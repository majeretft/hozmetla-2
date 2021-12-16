import React, { useEffect, useRef } from "react";
// import styled from "styled-components";

import Layout from "../components/layout";
import Navbar from "../components/layout/navbar";

const Page = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const el = mapContainer.current;

    const script = document.createElement("script");

    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A_arpLO4PE819A1YjFE9m3U46OvMaJ1Kv&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true";
    script.async = true;
    script.type = "text/javascript";

    el.appendChild(script);
  }, []);

  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h1>Контакты</h1>
        <p>+7 4912 50 643</p>
        <p>sales@hozmetla.ru</p>
        <p>
          390017 Россия, Рязанская область, Рязань, Ряжское шоссе 20 литер Щ'
        </p>
        <p>Офис: 8:00-17:00</p>
        <div ref={mapContainer}></div>
      </main>
    </Layout>
  );
};

export default Page;
