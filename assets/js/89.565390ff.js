(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{417:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("导语：本篇讲解如何使用nginx配置vue打包后的文件站点。")])]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("ul",[a("li",[s._v("linux centos7操作系统")]),s._v(" "),a("li",[s._v("ssh软件")]),s._v(" "),a("li",[s._v("nginx")]),s._v(" "),a("li",[s._v("node环境")])]),s._v(" "),a("h2",{attrs:{id:"nginx配置vue站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置vue站点"}},[s._v("#")]),s._v(" nginx配置vue站点")]),s._v(" "),a("h3",{attrs:{id:"新建文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建文件"}},[s._v("#")]),s._v(" 新建文件")]),s._v(" "),a("p",[s._v("新建nginx配置文件，输入以下内容。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/nginx/vhost/vue.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在里面输入：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n  listen   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听端口")]),s._v("\n  server_name  localhost vue.example.org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问域名  ")]),s._v("\n  access_log  /var/www/vue/access.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 成功日志")]),s._v("\n  error_log  /var/www/vue/error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误日志")]),s._v("\n  root /var/www/vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  index index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ @router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   index index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  location @router "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   rewrite ^.*$ /index.html last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   root html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"打开8080端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开8080端口"}},[s._v("#")]),s._v(" 打开8080端口")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("firewall-cmd --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置完了以后重载重启nginx。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl reload nginx\nsystemctl restart nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"上传文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传文件"}},[s._v("#")]),s._v(" 上传文件")]),s._v(" "),a("p",[s._v("然后创建一个vue文件，上传文件访问地址，便可以看到输出结果。")]),s._v(" "),a("p",[s._v("创建目录："),a("code",[s._v("mkdir /var/www/vue")]),s._v("\n上传文件: "),a("code",[s._v("scp -P 8080 dist/* root@192.168.1.123:/var/www/vue")])]),s._v(" "),a("p",[a("strong",[s._v("scp命令")]),s._v("：")]),s._v(" "),a("p",[s._v("scp命令用于Linux系统之间复制文件和目录。scp是 secure copy的缩写。")]),s._v(" "),a("ul",[a("li",[s._v("-1： 强制scp命令使用协议ssh1")]),s._v(" "),a("li",[s._v("-2： 强制scp命令使用协议ssh2")]),s._v(" "),a("li",[s._v("-4： 强制scp命令只使用IPv4寻址")]),s._v(" "),a("li",[s._v("-6： 强制scp命令只使用IPv6寻址")]),s._v(" "),a("li",[s._v("-B： 使用批处理模式（传输过程中不询问传输口令或短语）")]),s._v(" "),a("li",[s._v("-C： 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）")]),s._v(" "),a("li",[s._v("-p：保留原文件的修改时间，访问时间和访问权限。")]),s._v(" "),a("li",[s._v("-q： 不显示传输进度条。")]),s._v(" "),a("li",[s._v("-r： 递归复制整个目录。")]),s._v(" "),a("li",[s._v("-v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。")]),s._v(" "),a("li",[s._v("-c cipher： 以cipher将数据传输进行加密，这个选项将直接传递给ssh。")]),s._v(" "),a("li",[s._v("-F ssh_config： 指定一个替代的ssh配置文件，此参数直接传递给ssh。")]),s._v(" "),a("li",[s._v("-i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。")]),s._v(" "),a("li",[s._v("-l limit： 限定用户所能使用的带宽，以Kbit/s为单位。")]),s._v(" "),a("li",[s._v("-o ssh_option： 如果习惯于使用ssh_config(5)中的参数传递方式，")]),s._v(" "),a("li",[s._v("-P port：注意是大写的P, port是指定数据传输用到的端口号")]),s._v(" "),a("li",[s._v("-S program： 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。")])]),s._v(" "),a("h2",{attrs:{id:"预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预览"}},[s._v("#")]),s._v(" 预览")]),s._v(" "),a("p",[s._v("在本地hosts文件增加解析记录,这里的ip就是你远程服务器的ip地址了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.123 vue.example.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打开游览器，输入"),a("code",[s._v("http://vue.example.org")]),s._v("或者访问"),a("code",[s._v("192.168.1.123:8080")]),s._v("就可以看到之前编辑的站点的vue文件内容了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);