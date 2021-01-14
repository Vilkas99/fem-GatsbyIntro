import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../componentes/Layout";
import Header from "../componentes/Header";

function About() {
  return (
    <Layout>
      <Header />
      <h1>Sobre nosotros</h1>
      <p> Hola que hace cuenteme lo que hace</p>
      <Link to="/">Hogar</Link>
    </Layout>
  );
}

export default About;
