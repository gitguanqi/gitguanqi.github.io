(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{359:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("之前说的是本地代理设置，现在记录一下远程代理服务器squid的使用方法。")])]),s._v(" "),a("h2",{attrs:{id:"squid简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#squid简介"}},[s._v("#")]),s._v(" squid简介")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.squid-cache.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("squid官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("据官网介绍，Squid是Web的缓存代理，支持HTTP，HTTPS，FTP等。通过缓存和重用经常请求的网页，它减少了带宽并缩短了响应时间。Squid具有广泛的访问控制，是一个出色的服务器加速器。它可以在大多数可用的操作系统（包括Windows）上运行，并已获得GNU GPL的许可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/squid.jpg",alt:"squid原理"}})]),s._v(" "),a("p",[a("strong",[s._v("资源网址：")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.squid-cache.org/Doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("squid-cache"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/bluestorm/p/9032086.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bluestorm's Space"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"squid作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#squid作用"}},[s._v("#")]),s._v(" squid作用")]),s._v(" "),a("ul",[a("li",[s._v("缓存经常请求使用的网页")]),s._v(" "),a("li",[s._v("减少带宽缩小响应时间")]),s._v(" "),a("li",[s._v("加速网页访问")]),s._v(" "),a("li",[s._v("对访问内容进行过滤控制")]),s._v(" "),a("li",[s._v("共享网络连接，节省ip开销")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/squid-tcp.jpg",alt:"squid在TCP/IP"}})]),s._v(" "),a("h2",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),a("p",[s._v("安装前准备工作：")]),s._v(" "),a("ul",[a("li",[s._v("一台远程Linux服务器")]),s._v(" "),a("li",[s._v("一台具有上网功能的本地计算机")])]),s._v(" "),a("h3",{attrs:{id:"安装squid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装squid"}},[s._v("#")]),s._v(" 安装squid")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" squid httpd-tools "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置squid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置squid"}},[s._v("#")]),s._v(" 配置squid")]),s._v(" "),a("p",[s._v("打开"),a("code",[s._v("/etc/squid/squid.conf")])]),s._v(" "),a("p",[a("strong",[s._v("配置文件全部内容：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Recommended minimum configuration:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example rule allowing access from your local networks.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Adapt to list your (internal) IP networks from where browsing")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# should be allowed")]),s._v("\nacl localnet src "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0/8     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RFC1918 possible internal network")]),s._v("\nacl localnet src "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".0.0/12  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RFC1918 possible internal network")]),s._v("\nacl localnet src "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/16 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RFC1918 possible internal network")]),s._v("\nacl localnet src fc00::/7       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RFC 4193 local private network range")]),s._v("\nacl localnet src fe80::/10      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RFC 4291 link-local (directly plugged) machines")]),s._v("\n\nacl SSL_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ftp")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gopher")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wais")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1025")]),s._v("-65535  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unregistered ports")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("280")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http-mgmt")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("488")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gss-http")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("591")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# filemaker")]),s._v("\nacl Safe_ports port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# multiling http")]),s._v("\nacl CONNECT method CONNECT\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Recommended minimum Access Permission configuration:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Deny requests to certain unsafe ports")]),s._v("\nhttp_access deny "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("Safe_ports\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Deny CONNECT to other than secure SSL ports")]),s._v("\nhttp_access deny CONNECT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("SSL_ports\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Only allow cachemgr access from localhost")]),s._v("\nhttp_access allow localhost manager\nhttp_access deny manager\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# We strongly recommend the following be uncommented to protect innocent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# web applications running on the proxy server who think the only")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# one who can access services on "localhost" is a local user')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http_access deny to_localhost")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# INSERT YOUR OWN RULE(S) HERE TO ALLOW ACCESS FROM YOUR CLIENTS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example rule allowing access from your local networks.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Adapt localnet in the ACL section to list your (internal) IP networks")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from where browsing should be allowed")]),s._v("\nhttp_access allow localnet\nhttp_access allow localhost\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# And finally deny all other access to this proxy")]),s._v("\nhttp_access deny all\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Squid normally listens to port 3128")]),s._v("\nhttp_port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3128")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment and adjust the following to add a disk cache directory.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cache_dir ufs /var/spool/squid 100 16 256")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Leave coredumps in the first cache dir")]),s._v("\ncoredump_dir /var/spool/squid\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add any of your own refresh_pattern entries above these.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nrefresh_pattern ^ftp:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1440")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10080")]),s._v("\nrefresh_pattern ^gopher:        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1440")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1440")]),s._v("\nrefresh_pattern "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/cgi-bin/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nrefresh_pattern "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4320")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br")])]),a("p",[s._v("修改以下信息")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听端口号")]),s._v("\nhttp_port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3128")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样写会同时监听ipv6和ipv4的端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  http_port 0.0.0.0:3128")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到末尾")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内存中的缓存大小")]),s._v("\ncache_mem "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" MB\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大缓存文件大小")]),s._v("\nmaximum_object_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" MB\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 限定下载文件大小")]),s._v("\nreply_body_max_size  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024000")]),s._v(" allow all\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 缓存文件夹，默认在内存中，指定缓存大小为100M，第一层子目录为16个，第二层为256")]),s._v("\ncache_dir ufs /var/spool/squid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义访问日志路径")]),s._v("\naccess_log /var/log/squid/access.log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义管理员邮箱")]),s._v("\ncache_mgr jcguanqi@126.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("**是否认证访问：**如果使用访问认证，会更安全。")]),s._v(" "),a("h3",{attrs:{id:"访问认证配置方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问认证配置方法"}},[s._v("#")]),s._v(" 访问认证配置方法")]),s._v(" "),a("ul",[a("li",[s._v("生成密码文件")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("htpasswd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/squid/passwd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回车后输入密码，不要超过8位")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("测试是否生效")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/usr/lib64/squid/basic_ncsa_auth /etc/squid/passwd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入用户名和密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果ok说明成功")]),s._v("\nOK\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("加入配置文件")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释以下内容：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http_access deny !Safe_ports")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http_access deny CONNECT !SSL_ports")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http_access deny to_localhost")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http_access allow localnet")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http_access deny all")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义每个IP最大允许16个连接，防止攻击")]),s._v("\nacl OverConnLimit maxconn "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n\nauth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/squid/passwd\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 认证程序的进程数")]),s._v("\nauth_param basic children "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端提示")]),s._v("\nauth_param basic realm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" Squid Server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有效时间")]),s._v("\nauth_param basic credentialsttl "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" hours\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 认证用户")]),s._v("\nacl auth_user proxy_auth REQUIRED\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超出之前设定的连接数则拒绝")]),s._v("\nhttp_access deny OverConnLimit\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许的访问")]),s._v("\nhttp_access allow auth_user\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝其它所有访问")]),s._v("\nhttp_access deny all\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("如果不使用访问认证，就在配置文件末尾加入"),a("code",[s._v("http_access allow all")])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("h3",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("squid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" squid:squid/cache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"验证语法配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证语法配置"}},[s._v("#")]),s._v(" 验证语法配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("squid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" parse\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动并输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动并输出"}},[s._v("#")]),s._v(" 启动并输出")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/usr/local/squid/sbin/squid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-N")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[s._v("#")]),s._v(" 查看进程")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ax")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" squid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"停止服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止服务"}},[s._v("#")]),s._v(" 停止服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("squid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("h3",{attrs:{id:"初始化服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化服务"}},[s._v("#")]),s._v(" 初始化服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./squid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"开启防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启防火墙"}},[s._v("#")]),s._v(" 开启防火墙")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("firewall-cmd --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3128")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"开启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启服务"}},[s._v("#")]),s._v(" 开启服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" squid\nsystemctl start squid\nsystemctl status squid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"查看端口状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看端口状态"}},[s._v("#")]),s._v(" 查看端口状态")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tnl")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/squid-port.jpg",alt:"squid port"}})]),s._v(" "),a("h2",{attrs:{id:"本地设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地设置"}},[s._v("#")]),s._v(" 本地设置")]),s._v(" "),a("p",[s._v("打开本地游览器，进入代理设置，然后保存。")]),s._v(" "),a("p",[s._v("随便打开一个网站，F12检查查看网络请求情况。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/squid-eg.jpg",alt:"案例：百度"}})]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("p",[s._v("squid功能还有很大，这里只是介绍一种功能。")])])}),[],!1,null,null,null);a.default=e.exports}}]);