/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `L'Isola di Circe`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-nesting")({
            edition: "2024-02", // Use the latest version of CSS nesting
          }),
        ],
      },
    },
  ],
};
