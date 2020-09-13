module.exports = {
  siteMetadata: {
    title: 'HackBeanpot 2020',
    siteUrl: 'https://hackbeanpot.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-152750259-1'
      }
    }
  ]
};
