import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";

const TituloEstilizado = styled.h3`
  font-size: 20rem;
  font-weight: 700;
`;

const ArticuloEst = styled.article`
  margin: 5rem;
  display: flex;

  margin-top: 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6rem;
`;

function PostPreview({ post }) {
  return (
    <ArticuloEst>
      <Link to={post.slug} style={{ margin: "1rem 1rem 0 0", width: "100px" }}>
        <Image
          fluid={post.imagen.sharp.fluid}
          css={`
            * {
              margin-top: 0;
            }
          `}
          alt={post.titulo}
        />
      </Link>
      <div>
        <TituloEstilizado>
          <Link to={post.slug}>{post.titulo}</Link>
        </TituloEstilizado>
        <p>{post.excerpt}</p>
        <Link to={post.slug}>Lee este post!</Link>
      </div>
    </ArticuloEst>
  );
}

export default PostPreview;
