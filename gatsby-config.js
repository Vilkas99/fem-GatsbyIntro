module.exports = {
  siteMetadata: {
    title: "Encased",
    description:
      'Página oficial de la tienda de fundas personalizables de "Encased" ',
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/componentes/Layout/index.jsx"),
        },
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
        plugins: ["gatsby-remark-images"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "37852769918",
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SYZE,
        generateStatsFile: true,
        analyzerMode: "static",
      },
    },
  ],
};
