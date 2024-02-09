import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import Path from 'node:path'
import { genSidebar } from '../../scripts/genSidebar.mjs'
const sidebar = genSidebar(Path.join(__dirname,'../'))
console.log(sidebar)
export default defineConfig({
  title: "Chris's Blog🌈",
  lang: "zh-CN",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Node', link: 'NodeJs/fs'}
    ],
    sidebar: sidebar.items,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
