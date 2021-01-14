import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "..//../componentes/Layout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        titulo
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.titulo}</h1>
    <p>Posted by {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
