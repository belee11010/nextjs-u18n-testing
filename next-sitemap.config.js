module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'daily',
  priority: 1.0,
  generateRobotsTxt: true, // (optional)
  exclude: [
    '/dpa', 
    '/ccpa', 
  ],
  alternateRefs: [
    {
      href: process.env.SITE_URL + '/en',
      hreflang: 'en',
    },
    {
      href: process.env.SITE_URL + '/de',
      hreflang: 'de',
    },
  ],
}