(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{280:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第5节-nacos注册中心ap模式的数据一致性说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第5节-nacos注册中心ap模式的数据一致性说明"}},[t._v("#")]),t._v(" 第5节.Nacos注册中心AP模式的数据一致性说明")]),t._v(" "),s("h2",{attrs:{id:"一、nacos2-x版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、nacos2-x版本"}},[t._v("#")]),t._v(" 一、Nacos2.x版本")]),t._v(" "),s("p",[t._v("在该版本中，对于临时实例采用的GRPC的方式，持久化实例还是HTTP的方式。")]),t._v(" "),s("p",[s("strong",[t._v("针对临时实例GRPC：")])]),t._v(" "),s("p",[t._v("1、客户端通过GRPC的方式与服务端进行链接，完成服务注册请求")]),t._v(" "),s("p",[t._v("2、服务端进行处理，并创建client模型，并保存数据")]),t._v(" "),s("p",[s("strong",[t._v("针对持久化HTTP的方式(也是V1版本的2种实例的实现方式)：")])]),t._v(" "),s("p",[t._v("1、客户端通过随机算法或者域名请求模式选举出Nacos集群中的一个节点，发送服务注册请求（客户端NamingProxy类）")]),t._v(" "),s("p",[t._v("2、Nacos集群节点处理客户端的服务注册请求（服务端InstanceControler）")]),t._v(" "),s("p",[t._v("3、用一致性算法处理服务注册请求（服务端ServiceManager）")]),t._v(" "),s("p",[t._v("4、用DistroConsistencyServiceImpl类注册临时节点，并异步复制数据到其他节点，其他节点获得数据后，在将实例数据保存到自己的内存缓存中。")])])}),[],!1,null,null,null);a.default=e.exports}}]);