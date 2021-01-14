import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import useSiteMetaData from "../../Hooks/react-site-metaData";

const GlobalStyle = createGlobalStyle`
  html{ 
    font-size: 1px;/*for using REM units*/
  }

  body{
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   font-size: 16rem;
   font-weight: 400;
   line-height: 1.3;
   color: #222;
  }

  a{text-decoration:none; color:inherit; cursor:pointer;}
  button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}
  figure{margin:0;}
  input::-moz-focus-inner {border:0; padding:0; margin:0;}
  ul, ol, dd{margin:0; padding:0; list-style:none;}
  h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}
  p{margin:0;}
  cite {font-style:normal;}
  fieldset{border-width:0; padding:0; margin:0;}

`;
export default function Layout({ children }) {
  const { title, description } = useSiteMetaData();

  return (
    <>
      <GlobalStyle theme="purple" />
      <Helmet>
        <html lang="es_mx" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}
