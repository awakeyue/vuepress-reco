module.exports = {
  title: "月岩のblog",
  description: "vuepress blog",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date"
      },
      // {
      //   text: "文档",
      //   icon: "reco-document"
      // },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/awakeYue",
            icon: "reco-github"
          },
          {
            text: "掘金",
            link: "https://juejin.cn/user/2752832847484637",
            icon: "reco-juejin"
          },
        ],
      },
    ],
    sidebar: 'auto',
    subSidebar: "auto",
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
    ],
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "月岩",
    authorAvatar: "/avatar.jpg",
    startYear: "2022",
    valineConfig: { // 评论
      appId: 'IOFmC09u502EGW0nAVLTPsQg-gzGzoHsz',// your appId
      appKey: 'T7fIOCoiodGiAhcQ1wXcBRWR', // your appKey
    }
  },
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
    }
  }
}
