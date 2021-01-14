import React from "react";
import Image from "gatsby-image";
import useInstagram from "../../Hooks/use-instagram";

function Insta() {
  const instaFotos = useInstagram();
  const { username } = instaFotos[0];
  return (
    <>
      <h2>Post de Instagram de @{username}</h2>
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 20rem -0.5rem;
        `}
      >
        {instaFotos.map((foto) => (
          <a
            key={foto.id}
            href={`https://instagram.com/p/${foto.id}/`}
            css={`
              box-shadow: 0;
              display: block;
              margin: 48.5rem;
              max-width: calc(33%-1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={foto.fluid}
              alt={foto.caption}
              css={`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://www.instagram.com/${username}`}>
        Visita la página &rarr;
      </a>
    </>
  );
}

export default Insta;
