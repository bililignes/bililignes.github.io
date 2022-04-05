module.exports = {
  siteMetadata: {
    title: 'ephraim.bililign',
    description:
      'Ephraim is a physics grad student with an interest in complex systems',
    url: 'https://ephraim.bililign.com',
    author: 'Ephraim Bililign',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Ephraim is a physics grad student with an interest in complex systems',
    menuLinks: [
      {
        name: 'ephraim.bililign',
        slug: '/',
      },
      {
        name: 'Example',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: 'Gatsby + Amsterdam',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: ['gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
