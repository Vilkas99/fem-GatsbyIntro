import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function usePosts() {
  const info = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            titulo
            author
            slug
            imagen {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return info.allMdx.nodes.map((post) => ({
    titulo: post.frontmatter.titulo,
    autor: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    imagen: post.frontmatter.imagen,
  }));
}

export default usePosts;
