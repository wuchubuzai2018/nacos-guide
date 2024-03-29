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
                text: 'Nacos2源码分析', link: '/nacos2/'
            },
            {
                text: 'Nacos代码设计', link: '/design/'
            },
            {
                text: 'Nacos设计模式', link: '/pattern/'
            },
            { 
                text: '常见问题', link: '/question/'
            },
             { 
                text: '关于', link: '/about/'
            },
            {
                text: 'Github', link: 'https://github.com/wuchubuzai2018/nacos-guide'
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
                        },{
                            title: "第6节.Nacos的一致性协议Distro说明",
                            path: "/basic/06-Nacos的一致性协议：Distro协议/第6节.Nacos的一致性协议Distro说明.md" ,
                            collapsable: false
                        },{
                            title: "第7节.Linux环境部署Nacos",
                            path: "/basic/07-Linux环境部署Nacos/第7节.Linux环境部署Nacos.md" ,
                            collapsable: false
                        },{
                            title: "第8节.Nacos的端口占用说明",
                            path: "/basic/08-Nacos的端口占用说明/第8节.Nacos的端口占用说明.md" ,
                            collapsable: false
                        },{
                            title: "第9节.Nacos中的健康检查说明",
                            path: "/basic/09-Nacos中的健康检查说明/第9节.Nacos中的健康检查说明.md" ,
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
                            title: "第3节.服务端服务注册之基本处理流程",
                            collapsable: true,
                            path: "/nacos2/第3节.Nacos服务端服务注册之基本处理1/第3节.Nacos服务端服务注册之基本处理流程.md"
                        },{
                            title: "第4节.服务端服务注册之Distro协议注册与异步复制",
                            collapsable: true,
                            path: "/nacos2/第4节.Nacos服务端服务注册之基本处理2/第4节.Nacos服务端服务注册之Distro协议注册与异步复制.md"
                        },{
                            title: "第5节.Nacos中的DistroFilter服务注册路由",
                            collapsable: true,
                            path: "/nacos2/第5节.Nacos中的DistroFilter服务注册路由/第5节.Nacos中的DistroFilter服务注册路由.md"
                        },{
                            title: "第6节.Nacos服务端服务健康检查源码分析",
                            collapsable: true,
                            path: "/nacos2/第6节.Nacos服务端服务健康检查源码分析/第6节.Nacos服务端服务健康检查源码分析.md"
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
                                title: "第5节.Nacos中多个子类容器注入冲突问题设计",
                                collapsable: true,
                                path: "/design/第5节.Nacos中多个子类容器注入冲突问题设计.md"
                            },{
                                title: "第6节.Nacos中Token过期与保护代码设计",
                                collapsable: true,
                                path: "/design/第6节.Nacos中Token过期与保护代码设计.md"
                            },{
                                title: "第7节.Nacos中的SPI扩展加载代码设计",
                                collapsable: true,
                                path: "/design/第7节.Nacos中的SPI扩展加载代码设计.md"
                            }

                        ]
                    }
                ],
                "/pattern/":[
                    {
                        title: 'Nacos设计模式',
                        collapsable: false, // 不折叠
                        children: [{
                            title: "第1节.Nacos中的委派设计模式的使用",
                            collapsable: true,
                            path: "/pattern/第1节.Nacos中的委派设计模式的使用.md"
                        }, {
                            title: "第2节.Nacos中的模板方法设计模式的使用",
                            collapsable: true,
                            path: "/pattern/第2节.Nacos中的模板方法设计模式的使用.md"
                        }, {
                            title: "第3节.Nacos中的装饰者设计模式的使用",
                            collapsable: true,
                            path: "/pattern/第3节.Nacos中的装饰者设计模式的使用.md"
                        }, {
                            title: "第4节.Nacos中的策略设计模式的使用",
                            collapsable: true,
                            path: "/pattern/第4节.Nacos中的策略设计模式的使用.md"
                        },{
                            title: "第5节.Nacos中建造者设计模式的使用",
                            collapsable: true,
                            path: "/pattern/第5节.Nacos中的建造者设计模式的使用.md"
                        },{
                            title: "第6节.Nacos中的观察者设计模式的使用",
                            collapsable: true,
                            path: "/pattern/第6节.Nacos中的观察者设计模式的使用.md"
                        }]
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