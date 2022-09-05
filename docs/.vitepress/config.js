import { mdPlugin } from '../../src/vitepress/composables/plugins.ts'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
const getBase = require('../../src/vitepress/config/baseConfig')
const path = require('path')

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src'),
          '@': path.join(__dirname, '../../src'),
        }
      },
      plugins: [
        Unocss({
          presets: [presetUno()],
          shortcuts: {
            'flex-center': 'flex justify-center items-center',
          },
          theme: {
            colors: {
              primary: 'var(--el-color-primary)',
            },
          },
        }),
      ]
    },

    lang: 'zh-CN',
    title: 'Mushroom Admin',
    description: 'Mushroom Admin Docs',
    lastUpdatedText: '最后更新',
    markdown: {
      config: (md) => mdPlugin(md),
    },

    themeConfig: {
      logo: '/img/logo-vue.svg',

      /* algolia: {
        indexName: 'vuejs-v3',
        appId: 'BH4D9OD16A',
        apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
      }, */

      socialLinks: [
        { icon: 'github', link: 'https://github.com/TothingWay/vue-mushroom-admin' },
      ],

      nav: [
        {
          text: '指南',
          activeMatch: `^/guide/`,
          items: [
            {
              items: [
                { text: 'Guide', link: '/guide/introduction' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Events', link: 'https://events.vuejs.org/' }
              ]
            }
          ]
        },
      ],

      sidebar: {
        '/guide/': [
          {
            text: 'Essentials',
            items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
            ]
          }
        ]
      }
    }
  }
})()
