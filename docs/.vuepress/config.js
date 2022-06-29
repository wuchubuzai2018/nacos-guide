module.exports = {
  title: 'Nacos Guide',
  description: '微服务Nacos组件，值得学习和研究',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
    base: '/nacos-guide/',
    themeConfig: {
     sidebarDepth: 4,
    lastUpdated: 'Last Updated',
        nav: [
            { text: '导读', link: '/guide/list/01.md' },
            // { 
            //     text: 'Nacox1.x', link: '/nacos1/'
            // },
            { 
                text: 'Nacox2.x', link: '/nacos2/'
            },
            { 
                text: '常见问题', link: '/question/'
            },
             { 
                text: '关于', link: '/about/'
            }
        ],
        sidebar: {
               "/guide/":[
                     {
                        title: '阅读指南',
                        collapsable: false, // 不折叠
                         children: [{
                          title: "目录",
                          path: '/guide/list/01.md'
                        }

                      ]
                    }
                ],
                // "/nacos1/":[
                //         {
                //         title: 'Nacos1.4.3',
                //         path: '/nacos1/',
                //         collapsable: false, // 不折叠
                //         children: [{
                //           title: "01",
                //           path: "/nacos1/01.md" ,
                //           collapsable: false
                //         }

                //       ]
                //     }
                // ],
                 "/nacos2/":[
                        {
                        title: 'Nacos2.1.0',
                        collapsable: false, // 不折叠
                        children: [{
                          title: "1.Nacos源码开篇",
                           collapsable: true,
                          path: "/nacos2/01-Nacos源码开篇/Nacos源码分析开篇.md"                        }

                      ]
                    }
                ],
                "/question/":[
                        {
                        title: '常见问题',
                        path: '/question/',
                        collapsable: false, // 不折叠
                         children: [{
                          title: "01",
                          path: "/nacos1/01.md" ,
                          collapsable: false
                        }

                      ]
                    }
                ]                   

          }
    }
}