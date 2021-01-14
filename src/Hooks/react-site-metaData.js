import { graphql, useStaticQuery } from "gatsby";

const useSiteMetaData = () => {
  const info = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return info.site.siteMetadata;
};

export default useSiteMetaData;
