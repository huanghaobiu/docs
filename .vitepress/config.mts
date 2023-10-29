import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
// import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: '指南',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '介绍', link: '/guide/introduction' }
    ]
  },
  {
    text: 'Java',
    activeMatch: `^/java/`,
    link: '/java/'
  },
  {
    text: 'About',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Team', link: '/about/team' },
      { text: 'Releases', link: '/about/releases' },
      {
        text: 'Community Guide',
        link: '/about/community-guide'
      },
      { text: 'Code of Conduct', link: '/about/coc' },
      {
        text: 'The Documentary',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        {
          text: 'Quick Start',
          link: '/guide/quick-start'
        }
      ]
    }
  ],
  '/java/': [
    {
      text: '基础知识',
      items: [
        { text: 'Java概述', link: '/java/basics/index' },
        { text: 'Java编程环境', link: '/java/basics/advance' },
        { text: '基本编程', link: '' },
        { text: '面向对象', link: '' },
        { text: '异常体系', link: '' },
        { text: '集合类', link: '' },
        { text: '并发', link: '' },
      ]
    },
    {
      text: '高级特性',
      items: [
        { text: 'IO操作', link: '/java/basics/index' },
        { text: '网络', link: '/java/basics/advance' },
        { text: '数据库', link: '/java/basics/advance' },
        { text: 'Java Web', link: '/java/basics/advance' },
        { text: '日志体系', link: '/java/basics/advance' },
        { text: '国际化', link: '/java/basics/advance' },
        { text: '版本特性', link: '/java/basics/advance' }
      ]
    },
    {
      text: '深入理解',
      items: [
        { text: 'JVM', link: '/java/basics/index' },
        { text: '快速上手', link: '/java/basics/advance' }
      ]
    }
  ]
}

const i18n: ThemeConfig['i18n'] = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航',
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: '小梦坊+',
  description: 'Vue.js - The Progressive JavaScript Framework',
  srcDir: 'src',
  // srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://sponsors.vuejs.org'
      }
    ],
    // [
    //   'script',
    //   {},
    //   fs.readFileSync(
    //     path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
    //     'utf-8'
    //   )
    // ],
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'XNOLWPLB',
    //     'data-spa': 'auto',
    //     defer: ''
    //   }
    // ],
    // [
    //   'script',
    //   {
    //     src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
    //     async: 'true'
    //   }
    // ]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    i18n,

    localeLinks: [
      {
        link: 'https://cn.vuejs.org',
        text: '简体中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-cn'
      },
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: '',
      appId: '',
      apiKey: '',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xmfplus' }
    ],
    editLink: {
      repo: 'vuejs/docs',
      text: 'Edit this page on GitHub'
    },
    footer: {
    }
  },

  markdown: {
    config(md) {
      // md.use(headerPlugin)
        // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
