import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import imagen from "../../images/fondo1.jpg";
import BackgroundImage from "gatsby-background-image";

const ImagenBg = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
`;

const CajaTexto = styled.div`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw-500px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 30rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

function Hero() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "fondo1.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImagenBg Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <CajaTexto>
        <h1>Encased 💖</h1>
        <p>Bienvenides a la página.</p>
        <Link to="/about">Sobre nosotres</Link>
      </CajaTexto>
    </ImagenBg>
  );
}

export default Hero;
