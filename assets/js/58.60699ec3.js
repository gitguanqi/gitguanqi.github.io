(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{388:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("导语:最近无数据库编程语言的博客程序大行其道,成为了博客爱好者的首选,这篇博文目的就是教大家如何建立自己的博客程序和网站。")])]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("ul",[a("li",[s._v("检测node和npm")]),s._v(" "),a("li",[s._v("安装hexo")]),s._v(" "),a("li",[s._v("切换主题")]),s._v(" "),a("li",[s._v("发布到coding")])]),s._v(" "),a("h2",{attrs:{id:"检测node和npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测node和npm"}},[s._v("#")]),s._v(" 检测node和npm")]),s._v(" "),a("p",[s._v("先检测一下有没有node.js和npm")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n//如果有，说明node.js安装成功！\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nv8.4.0\n//如果有，说明npm安装成功！\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(".0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"安装hexo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装hexo"}},[s._v("#")]),s._v(" 安装hexo")]),s._v(" "),a("p",[s._v("在git-bash中运行以下命令安装hexo")]),s._v(" "),a("ul",[a("li",[s._v("安装hexo全局")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" hexo-cli\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("建立文件夹")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hexo init blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("就能够建立起一个本地的服务器，端口是"),a("code",[s._v("4000")]),s._v("，打开浏览器 "),a("code",[s._v("http://localhost:4000")]),s._v(" 就能访问属于你自己的博客了。")]),s._v(" "),a("h2",{attrs:{id:"切换主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换主题"}},[s._v("#")]),s._v(" 切换主题")]),s._v(" "),a("p",[s._v("hexo博客程序有默认主题,但是你可以拥有自己的博客主题,下面介绍一款好的主题。")]),s._v(" "),a("ul",[a("li",[s._v("主题代码拷贝")])]),s._v(" "),a("p",[s._v("主题的拷贝也是直接使用 git 即可，首先进入到你博客的根目录，再打开 git-bash 运行")]),s._v(" "),a("p",[a("code",[s._v("git clone https://github.com/iissnan/hexo-theme-next themes/next")])]),s._v(" "),a("ul",[a("li",[s._v("启用主题")])]),s._v(" "),a("p",[s._v("在博客根目录下找到 "),a("code",[s._v("_config.yml")]),s._v(" 文件，找到里面的 "),a("code",[s._v("theme")]),s._v("，改为"),a("code",[s._v("theme: next")])]),s._v(" "),a("p",[s._v("这时再运行一次 "),a("code",[s._v("hexo s")]),s._v(" ，看看主题有没有生效吧。")]),s._v(" "),a("h2",{attrs:{id:"发布到coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布到coding"}},[s._v("#")]),s._v(" 发布到coding")]),s._v(" "),a("ul",[a("li",[s._v("前提是你先注册一个"),a("a",{attrs:{href:"https://coding.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coding"),a("OutboundLink")],1),s._v("账号")])]),s._v(" "),a("p",[s._v("hexo 提供了一个部署命令 hexo deploy，首先需要安装一下 hexo-deployer-git插件")]),s._v(" "),a("p",[a("code",[s._v("npm install hexo-deployer-git --save")])]),s._v(" "),a("ul",[a("li",[s._v("然后配置一下 "),a("code",[s._v("_config.yml")]),s._v(" 文件：")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repoistory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//git.coding.net/myblog/blog.git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("预览效果")])]),s._v(" "),a("p",[s._v("在 coding 上建立一个私人仓库，找到代码的 coding 地址，填好上面的配置，然后直接执行")]),s._v(" "),a("p",[a("code",[s._v("hexo deploy")])]),s._v(" "),a("p",[s._v("不出意外的话会让你填写 coding 的用户名和密码完成上传操作。如果你有配置 ssh 方式的话就更加方便了。")]),s._v(" "),a("p",[s._v("这个时候再到 coding 对应的项目里面打开 pages 服务，根据 coding 建议，因为不是 jekyll 项目，所以需要再新建一个"),a("code",[s._v(".nojekyll")]),s._v(" 文件（空文件就行，其实不建立也行），等上一会就能够访问自己的博客了。")]),s._v(" "),a("ul",[a("li",[s._v("最后运行以下命令上传到coding")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hexo g\nhexo d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果不行用git,输入以下命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# blog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://git.coding.net/myblog/blog.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"最后总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后总结"}},[s._v("#")]),s._v(" 最后总结")]),s._v(" "),a("p",[s._v("今天的hexo+coding配置免费博客就到这里，赶快体验一下吧！")])])}),[],!1,null,null,null);a.default=e.exports}}]);