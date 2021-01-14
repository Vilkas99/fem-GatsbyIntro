import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

//HEADER

const ContenedorHeader = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem calc((100vw-550px-0.5rem) / 2);
  background-color: #f5dbe2;
`;

const NavLink = styled(Link)`
  color: #fc3a5c;
  font-size: ${(props) => (props.activo ? "30rem" : "20rem")};
  font-weight: ${(props) => props.weight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`;

function Header({}) {
  return (
    <ContenedorHeader>
      <NavLink to="/" weight={2}>
        Hogar
      </NavLink>
      <NavLink to="/about" weight={2}>
        Sobre nosotros
      </NavLink>
    </ContenedorHeader>
  );
}

export default Header;
