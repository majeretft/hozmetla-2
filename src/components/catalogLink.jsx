import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const DownloadCatalog = styled.a`
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

const Component = () => {
  const data = useStaticQuery(graphql`
    query CatalogLinkQuery {
      catalogFile: file(ext: { eq: ".pdf" }) {
        base
        publicURL
      }
    }
  `);

  const url = data.catalogFile?.publicURL;
  const base = data.catalogFile?.base;

  return (
    <DownloadCatalog href={url} download={base}>
      <FontAwesomeIcon icon={faFilePdf} />
      <span>Загрузить каталог</span>
    </DownloadCatalog>
  );
};

export default Component;
