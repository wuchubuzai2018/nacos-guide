module.exports = {
  title: 'Nacos Guide',
  description: '微服务核心组件Nacos，值得大家学习和研究',
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
            {
                text: '基本使用', link: '/basic/'
            },
            { 
                text: 'Nacos2.x源码分析', link: '/nacos2/'
            },
            {
                text: 'Nacos代码设计', link: '/design/'
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
                "/basic/":[
                        {
                        title: '基本使用',
                        collapsable: false, // 不折叠
                        children: [{
                          title: "第1节.Nacos数据库表结构说明",
                          path: "/basic/01-Nacos表结构说明/第1节.Nacos数据库表结构说明.md" ,
                          collapsable: false
                        },{
                            title: "第2节.Nacos启动脚本文件说明",
                            path: "/basic/02-Nacos启动脚本文件说明/第2节.Nacos启动脚本文件说明.md" ,
                            collapsable: false
                        }

                      ]
                    }
                ],
                 "/nacos2/":[
                        {
                        title: '基于Nacos2.1.0',
                        collapsable: false, // 不折叠
                        children: [{
                          title: "第1节.Nacos源码开篇及环境搭建",
                           collapsable: true,
                          path: "/nacos2/第1节.Nacos源码开篇及环境搭建/第1节.Nacos源码开篇及环境搭建.md"                        }

                      ]
                    }
                ],
                "/design/":[
                    {
                        title: 'Nacos代码设计',
                        collapsable: false, // 不折叠
                        children: [{
                            title: "第1节.Nacos中的Optional的使用",
                            collapsable: true,
                            path: "/design/第1节.Nacos中的Optional的使用.md"
                            }, {
                                title: "第2节.Nacos中的CAS的使用",
                                collapsable: true,
                                path: "/design/第2节.Nacos中的CAS的使用.md"
                            }

                        ]
                    }
                ],
                "/question/":[
                        {
                        title: '常见问题',
                        path: '/question/',
                        collapsable: false, // 不折叠
                         children: [{
                          // title: "01",
                          // path: "/nacos1/01.md" ,
                          // collapsable: false
                        }

                      ]
                    }
                ]                   

          }
    }
}