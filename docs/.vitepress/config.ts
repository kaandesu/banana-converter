import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Banana Converter',
  description: 'Convert Lengths and Distances to Bananas',
  lang: 'en-US',
  base: '/banana-converter/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/kaandesu/banana-converter' }],
  },
})
