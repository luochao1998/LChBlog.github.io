import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  title: "LCh",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/browser.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  base:'/LChBlog.github.io/',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/banner_2.png',
    author: 'LCh',
    authorAvatar: '/banner_2.png',
    docsRepo: 'https://github.com/luochao1998/LChBlog.github.io',
    docsBranch: 'gh-pages-source',
    lastUpdatedText: '',
    navbar: [
      {
        text: '微信小程序学习',
        link:'/blogs/weixin/2022/111801.md'
      },
      {
        text: 'Contact',
        children: [
          { text: 'GitHub', link: 'https://github.com/luochao1998/LChBlog.github.io' },
        ]
      }
    ],
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'uBAKoDkIfzTavmYryZabkkww-gzGzoHsz',
        appKey: 'HnIVfK9A0GQ11t7HPn3TlpgJ',
        placeholder: '填写邮箱可以收到回复提醒哦！',
        verify: true, // 验证码服务
        // notify: true, //
        recordIP: true,
        // hideComments: true
      },
    },
    autoAddCategoryToNavbar: true,
  }),
  lang: 'zh-CN',
})
