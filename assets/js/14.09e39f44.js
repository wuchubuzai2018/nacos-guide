(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{279:function(t,a,s){"use strict";s.r(a);var v=s(13),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第4节-nacos的临时实例与持久化实例说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第4节-nacos的临时实例与持久化实例说明"}},[t._v("#")]),t._v(" 第4节.Nacos的临时实例与持久化实例说明")]),t._v(" "),s("h2",{attrs:{id:"基本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本说明"}},[t._v("#")]),t._v(" 基本说明")]),t._v(" "),s("p",[t._v("当我们使用SpringBoot客户端将服务注册到Nacos的时候，如果没有明确制定指定ephemeral参数的值，默认情况下他是临时实例，即该值默认为true，所有实例的信息都在内存中存储，如果指定该值且值为false，则说明当前需要将实例的注册信息持久化。")]),t._v(" "),s("p",[s("strong",[t._v("临时实例")])]),t._v(" "),s("p",[t._v("默认情况，服务实例仅会注册在Nacos内存，不会持久化到Nacos磁盘，其中：")]),t._v(" "),s("p",[t._v("在V1版本时代，其健康检测机制为Client模式，即Client主动向Server上报其健康状态（类似于推模式），默认心跳间隔为5秒，在15秒内Server未收到Client心跳，则会将其标记为“不健康”状态；在30秒内若收到了Client心跳，则重新恢复“健康”状态，否则该实例将从Server端内存清除。即对于不健康的实例，Server会自动清除；")]),t._v(" "),s("p",[t._v("在V2版本时代，由于临时实例采用GRPC的方式，则由服务端主动检查健康状态。")]),t._v(" "),s("p",[s("strong",[t._v("持久实例")])]),t._v(" "),s("p",[t._v("服务实例不仅会注册到Nacos内存，同时也会被持久化到Nacos磁盘，其健康检测机制为Server模式，即Server会主动去检测Client的健康状态（类似于拉模式）；\n默认每20秒检测一次，健康检测失败后服务实例会被标记为“不健康”状态，但不会被清除，因为其是持久化在磁盘的，其对不健康持久实例的清除，需要专门进行；")]),t._v(" "),s("p",[t._v("对于临时实例和持久化实例的存储，Nacos支持用户缓存和文件来存储相关的元数据信息。从作用范围来看，Nacos的元数据大概分为：服务元数据、集群元数据、实例元数据。")]),t._v(" "),s("h2",{attrs:{id:"元数据字段说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据字段说明"}},[t._v("#")]),t._v(" 元数据字段说明")]),t._v(" "),s("p",[t._v("1、服务的元数据字段")]),t._v(" "),s("p",[t._v("Nacos中通过Service类来定义服务元数据，其中字段如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元数据字段")]),t._v(" "),s("th",[t._v("字段功能描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("服务的名称")])]),t._v(" "),s("tr",[s("td",[t._v("protectThreshold")]),t._v(" "),s("td",[t._v("保护阈值")])]),t._v(" "),s("tr",[s("td",[t._v("appName")]),t._v(" "),s("td",[t._v("服务对应的应用名称")])]),t._v(" "),s("tr",[s("td",[t._v("groupName")]),t._v(" "),s("td",[t._v("服务的组名称")])]),t._v(" "),s("tr",[s("td",[t._v("metadata")]),t._v(" "),s("td",[t._v("服务的元数据信息")])]),t._v(" "),s("tr",[s("td",[t._v("clusterMap")]),t._v(" "),s("td",[t._v("服务的集群列表")])]),t._v(" "),s("tr",[s("td",[t._v("namespaceId")]),t._v(" "),s("td",[t._v("服务的命名空间id")])]),t._v(" "),s("tr",[s("td",[t._v("enabled")]),t._v(" "),s("td",[t._v("服务的开关")])]),t._v(" "),s("tr",[s("td",[t._v("resetWeight")]),t._v(" "),s("td",[t._v("重置服务权重的开关")])]),t._v(" "),s("tr",[s("td",[t._v("owners")]),t._v(" "),s("td",[t._v("服务的拥有者")])]),t._v(" "),s("tr",[s("td",[t._v("token")]),t._v(" "),s("td",[t._v("服务登录需要的token")])]),t._v(" "),s("tr",[s("td",[t._v("ipDeleteTimeout")]),t._v(" "),s("td",[t._v("实例删除的超时时间，默认30s")])])])]),t._v(" "),s("p",[t._v("2、实例的元数据字段")]),t._v(" "),s("p",[t._v("Nacos中通过Instance类来定义实例元数据，其中字段如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元数据字段")]),t._v(" "),s("th",[t._v("字段功能描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("instanceId")]),t._v(" "),s("td",[t._v("实例ID")])]),t._v(" "),s("tr",[s("td",[t._v("ip")]),t._v(" "),s("td",[t._v("实例的IP地址")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("实例的端口号")])]),t._v(" "),s("tr",[s("td",[t._v("weight")]),t._v(" "),s("td",[t._v("实例的权重")])]),t._v(" "),s("tr",[s("td",[t._v("healthy")]),t._v(" "),s("td",[t._v("实例的健康状态")])]),t._v(" "),s("tr",[s("td",[t._v("enabled")]),t._v(" "),s("td",[t._v("实例的开启开关")])]),t._v(" "),s("tr",[s("td",[t._v("ephemeral")]),t._v(" "),s("td",[t._v("实例类型，持久化实例还是临时实例")])]),t._v(" "),s("tr",[s("td",[t._v("clusterName")]),t._v(" "),s("td",[t._v("实例对应的集群名称")])]),t._v(" "),s("tr",[s("td",[t._v("serviceName")]),t._v(" "),s("td",[t._v("实例对应的服务名称")])]),t._v(" "),s("tr",[s("td",[t._v("metadata")]),t._v(" "),s("td",[t._v("实例元数据")])]),t._v(" "),s("tr",[s("td",[t._v("tenant")]),t._v(" "),s("td",[t._v("实例的租户ID")])]),t._v(" "),s("tr",[s("td",[t._v("lastBeat")]),t._v(" "),s("td",[t._v("实例的最新的心跳时间")])])])]),t._v(" "),s("p",[t._v("3、集群的元数据字段")]),t._v(" "),s("p",[t._v("Nacos中通过Cluster类来定义集群元数据，其中字段如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元数据字段")]),t._v(" "),s("th",[t._v("字段功能描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("serviceName")]),t._v(" "),s("td",[t._v("服务的名称")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("集群的名称")])]),t._v(" "),s("tr",[s("td",[t._v("healthChecker")]),t._v(" "),s("td",[t._v("集群的健康检查")])]),t._v(" "),s("tr",[s("td",[t._v("defaultPort")]),t._v(" "),s("td",[t._v("默认端口号")])]),t._v(" "),s("tr",[s("td",[t._v("defaultCheckPort")]),t._v(" "),s("td",[t._v("默认的检查端口号")])]),t._v(" "),s("tr",[s("td",[t._v("metadata")]),t._v(" "),s("td",[t._v("集群的元数据")])]),t._v(" "),s("tr",[s("td",[t._v("persistentInstances")]),t._v(" "),s("td",[t._v("持久化的实例列表，HashSet")])]),t._v(" "),s("tr",[s("td",[t._v("ephemeralInstances")]),t._v(" "),s("td",[t._v("临时的实例列表，HashSet")])]),t._v(" "),s("tr",[s("td",[t._v("service")]),t._v(" "),s("td",[t._v("集群的服务元数据信息，Service")])])])]),t._v(" "),s("h2",{attrs:{id:"元数据的存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据的存储"}},[t._v("#")]),t._v(" 元数据的存储")]),t._v(" "),s("p",[t._v("service信息存储在ServiceManager中的serviceMap对象中。")]),t._v(" "),s("p",[t._v("在1.x版本：")]),t._v(" "),s("p",[t._v("1、对于临时实例，元数据信息使用DataStore类的内存缓存来存储，本质就是包装了一个Map对象")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Datum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" dataMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcurrentHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("2、对于持久化实例，元数据信息使用文件方式存储。")]),t._v(" "),s("p",[t._v("在2.x版本：")]),t._v(" "),s("p",[t._v("服务端使用 Client 对象来记录该客户端使用 gRPC 连接发布了哪些服务，又订阅了哪些服务，并将该 Client 进行服务间同步。")]),t._v(" "),s("p",[t._v("1、对于临时实例，元数据信息被转换为InstancePublishInfo信息，并存储Client的模型设计中，核心类为：ClientServiceIndexesManager")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcurrentHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InstancePublishInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" publishers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcurrentHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("2、对于持久化实例，元数据信息使用文件方式存储。")])])}),[],!1,null,null,null);a.default=e.exports}}]);