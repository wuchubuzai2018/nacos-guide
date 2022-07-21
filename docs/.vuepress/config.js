module.exports = {
  title: 'Nacos Guide',
  description: '分享微服务组件Nacos，学习其源码与思想',
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
                        },{
                            title: "第3节.Nacos命名空间说明",
                            path: "/basic/03-Nacos命名空间说明/第3节.Nacos命名空间说明.md" ,
                            collapsable: false
                        },{
                            title: "第4节.Nacos临时实例与持久化实例",
                            path: "/basic/04-Nacos的临时实例与持久化实例/第4节.Nacos临时实例与持久化实例.md" ,
                            collapsable: false
                        },{
                            title: "第5节.Nacos注册中心AP模式的数据一致性",
                            path: "/basic/05-Nacos注册中心AP模式的数据一致性/第5节.Nacos注册中心AP模式的数据一致性.md" ,
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
                          path: "/nacos2/第1节.Nacos源码开篇及环境搭建/第1节.Nacos源码开篇及环境搭建.md"
                        },{
                            title: "第2节.Nacos客户端服务注册源码分析",
                            collapsable: true,
                            path: "/nacos2/第2节.Nacos客户端服务注册源码分析/第2节.Nacos客户端服务注册源码分析.md"
                        },{
                            title: "第3节.Nacos服务端服务注册之基本处理流程",
                            collapsable: true,
                            path: "/nacos2/第3节.Nacos服务端服务注册之基本处理1/第3节.Nacos服务端服务注册之基本处理流程.md"
                        }

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
                            },
                            {
                                title: "第3节.Nacos中的生产者消费者多线程模式的使用",
                                collapsable: true,
                                path: "/design/第3节.Nacos中的生产者消费者多线程模式的使用.md"
                            }, {
                                title: "第4节.Nacos中的优雅的重试请求代码",
                                collapsable: true,
                                path: "/design/第4节.Nacos中的优雅的重试请求代码.md"
                            }, {
                                title: "第5节.Nacos中委托设计模式的使用",
                                collapsable: true,
                                path: "/design/第5节.Nacos中委托设计模式的使用.md"
                            },{
                                title: "第6节.Nacos中多个子类容器注入冲突问题设计",
                                collapsable: true,
                                path: "/design/第6节.Nacos中多个子类容器注入冲突问题设计.md"
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