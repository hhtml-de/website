module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: "HHTML",
  siteDescription: "Hamburg HTML meet-up, a meet-up about HTML, Accessibility, Web Performance and web standards",
  siteType: 'Person',
  locale: 'en_US',
  lang: 'en',
  author: 'Lea Rosema',
  authorEmail: 'lea@hhtml.de',
  authorWebsite: 'https://hhtml.de',
  themeColor: '#DB0072',
  themeBgColor: '#FFFFFF',
  dateFormat: 'DD.MM.YYYY',
  meta_data: {
    opengraph_default: '/assets/images/social-preview/default.jpeg',
    opengraph_default_alt: "Hamburg HTML Meet-Up",
    mastodonProfile: 'https://lea.lgbt/@lea',
  },
  pagination: {
    itemsPerPage: 20,
  },
};
