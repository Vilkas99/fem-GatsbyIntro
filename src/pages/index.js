import * as React from "react";
import { Link } from "gatsby";
import Layout from "../componentes/Layout";
import Header from "../componentes/Header";
import usePosts from "../Hooks/use-posts";
import PostPreview from "../componentes/Post-preview";
import Hero from "../componentes/Hero";
import Insta from "../componentes/Insta";

// markup
const IndexPage = () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <Header />{" "}
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};

export default IndexPage;
