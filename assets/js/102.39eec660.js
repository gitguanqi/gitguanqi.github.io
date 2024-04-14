(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{430:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("导语：之前说的是如何下载、更新、卸载npm包，今天说一下如何发布自己的npm包到npm的平台上，让别人可以作为项目的依赖包来下载安装和使用。本次使用一个拖拽的案例来演示如何操作。")])]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("ul",[a("li",[s._v("初始化npm")]),s._v(" "),a("li",[s._v("登录npm")]),s._v(" "),a("li",[s._v("发布包")]),s._v(" "),a("li",[s._v("更新包")]),s._v(" "),a("li",[s._v("删除包")])]),s._v(" "),a("h2",{attrs:{id:"初始化npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化npm包"}},[s._v("#")]),s._v(" 初始化npm包")]),s._v(" "),a("p",[s._v("在初始化之前一定要安装node环境，然后到npm官网查看包名是否存在，如果存在则换一个。这次我使用g-drag来作为本次包名，你也在本地写一个通用的方法作为一个单独的包。")]),s._v(" "),a("p",[s._v("开始初始化")]),s._v(" "),a("p",[s._v("npm init 会生成一个packagejson的文件，项目的配置信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"g-drag"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//包名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//版本号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is a grag elem package!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//描述")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//入口文件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"directories"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grag"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitguanqi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("到这里初始化就完成了。")]),s._v(" "),a("h2",{attrs:{id:"登录npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录npm"}},[s._v("#")]),s._v(" 登录npm")]),s._v(" "),a("p",[s._v("接着就是到官网注册一个账号登录。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入用户名和密码，即可登录成功。一定要设置为国外的npm源，")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就登录了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Username: XXX\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN Name may not contain non-url-safe chars\nUsername: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("XXX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" XXX\nPassword: XXX\nEmail: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("this IS public"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" XXX\nLogged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" as XXX on https://registry.npmjs.org/.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"发布包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布包"}},[s._v("#")]),s._v(" 发布包")]),s._v(" "),a("p",[s._v("接着我们发布自己的包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice package: g-drag@1.0.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Tarball Contents "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice 324B  package.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4kB src/index.js\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Tarball Details "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice name:          g-drag\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice version:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice package size:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("757")]),s._v(" B\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice unpacked size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" kB\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice shasum:        3f1b5ca4746b4be1fd42285fbf62d9683a7757bc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice integrity:     sha512-ClYLLs51O7jSw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("6tjR0e+5c16aw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice total files:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice\n+ g-drag@1.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("到这里就发布完成。")]),s._v(" "),a("p",[s._v("可以运行"),a("code",[s._v("npm view <包名> version")]),s._v("查看包信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view g-drag version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以试着运行"),a("code",[s._v("npm install g-drag --save")]),s._v("安装依赖了。")]),s._v(" "),a("h2",{attrs:{id:"更新包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新包"}},[s._v("#")]),s._v(" 更新包")]),s._v(" "),a("p",[s._v("更新包分为三个版本。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("第一个版本是补丁修复，可以使用"),a("code",[s._v("npm version patch")]),s._v(",例如从0.0.1到0.0.2；")])]),s._v(" "),a("li",[a("p",[s._v("第二个版本是新功能，可以使用"),a("code",[s._v("npm version minor")]),s._v(",例如从0.2.1到0.4.2；")])]),s._v(" "),a("li",[a("p",[s._v("第三个版本是重大更新，可以使用"),a("code",[s._v("npm version major")]),s._v(",例如从1.2.1到2.4.2；")])])]),s._v(" "),a("h2",{attrs:{id:"删除包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除包"}},[s._v("#")]),s._v(" 删除包")]),s._v(" "),a("p",[s._v("可以使用"),a("code",[s._v("npm unpublish <包名> –force")]),s._v(",或者"),a("code",[s._v("npm deprecate <包名>")])]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("p",[s._v("心动不如行动，快练习一下巩固知识。")])])}),[],!1,null,null,null);a.default=e.exports}}]);