module.exports = {
  siteMetadata: {
    title: `Karrinyup Leave No Trace Scout Group`,
    description: `At Karrinyup Leave No Trace Scout Group we offer people of all ages a variety of exciting experiences including camping, hiking, water activities, canoeing, rewarding service project and leadership opportunities and most of all, fun and friendship. Scouting is all about "Learning Through Doing", and we follow the principle of "Plan, Do, Review"`,
    author: `@StevenPeng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karrinyup-Leave-No-Trace-Scout-Group`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#222d65`,
        theme_color: `#222d65`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
