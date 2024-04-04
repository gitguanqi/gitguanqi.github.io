(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{409:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("记得去年我工作的时候，公司的项目就开始统一使用jitamin进行项目管理，每天进行提出问题，解决问题，归纳总结，对项目进度把控很到位，效率也很高，这次鼓捣linux，也想着部署一个自己的项目管理软件，所以就开始了，这篇主要记录一下过程，日后留念。")])]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("ul",[a("li",[s._v("准备")]),s._v(" "),a("li",[s._v("安装")]),s._v(" "),a("li",[s._v("配置")]),s._v(" "),a("li",[s._v("运行")])]),s._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("ul",[a("li",[s._v("一台Linux")]),s._v(" "),a("li",[s._v("ssh")]),s._v(" "),a("li",[s._v("git")]),s._v(" "),a("li",[s._v("php开发环境（php5.6或以上）")]),s._v(" "),a("li",[s._v("数据库（"),a("a",{attrs:{href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"http://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostgreSQL"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://www.sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQLite"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Composer"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[s._v("#")]),s._v(" 资源")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://jitamin.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jitamin官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jitamin/jitamin",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/jitamin/jitamin",target:"_blank",rel:"noopener noreferrer"}},[s._v("gitee码云"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),a("ul",[a("li",[s._v("简洁、美观的界面")]),s._v(" "),a("li",[s._v("支持多主题")]),s._v(" "),a("li",[s._v("可视化的任务管理")]),s._v(" "),a("li",[s._v("支持列表、看板和甘特图等任务视图")]),s._v(" "),a("li",[s._v("可拖拽式的任务操作")]),s._v(" "),a("li",[s._v("支持多语言，内置英文和简体中文语言包")]),s._v(" "),a("li",[s._v("过滤搜索")]),s._v(" "),a("li",[s._v("可创建团队项目和个人项目")]),s._v(" "),a("li",[s._v("支持任务、子任务、附件和评论")]),s._v(" "),a("li",[s._v("动作自动触发")]),s._v(" "),a("li",[s._v("可视化的统计")]),s._v(" "),a("li",[s._v("第三方集成")]),s._v(" "),a("li",[s._v("支持插件")])]),s._v(" "),a("h3",{attrs:{id:"安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[s._v("#")]),s._v(" 安装git")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装composer"}},[s._v("#")]),s._v(" 安装composer")]),s._v(" "),a("ul",[a("li",[s._v("安装方式1")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装脚本")]),s._v("\nphp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"copy('https://getcomposer.org/installer', 'composer-setup.php');\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取composer签名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HASH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" - https://composer.github.io/installer.sig"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证脚本是否损坏")]),s._v("\nphp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"if (hash_file('SHA384', 'composer-setup.php') === '"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HASH")]),s._v("') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("没有损坏返回 "),a("code",[s._v("Installer verified")]),s._v("，把"),a("code",[s._v("composer")]),s._v("安装到"),a("code",[s._v("/usr/local/bin")]),s._v("全局命令。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("php composer-setup.php --install-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("composer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("没问题会输出：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("All settings correct "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" using Composer\nDownloading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nComposer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.10")]),s._v(".1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" successfully installed to: /usr/local/bin/composer\nUse it: php /usr/local/bin/composer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("打印版本")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\nComposer version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.10")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-13 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":34:27\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("快速安装")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sS")]),s._v(" https://getcomposer.org/installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" composer.phar /usr/local/bin/composer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("安装国内源")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sS")]),s._v(" https://getcomposer.org/installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" composer.phar /usr/local/bin/composer\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" repo.packagist "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" https://packagist.phpcomposer.com\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"克隆代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克隆代码"}},[s._v("#")]),s._v(" 克隆代码")]),s._v(" "),a("p",[s._v("本次使用gitee的仓库地址，国内站点，下载访问速度快。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/jitamin/jitamin.git jitamin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("ul",[a("li",[s._v("设置配置信息")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .env.example .env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打开"),a("code",[s._v(".env")]),s._v("填写数据库信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Jitamin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_DEBUG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SomeRandomString\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_TIMEZONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia/Shanghai\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_LOCALE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh-CN\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_THEME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("black\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_LOG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("daily\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_LOG_LEVEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("error\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://localhost\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_CONNECTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_DATABASE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jitamin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("homestead\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("secret\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("根据你自己的情况进行配置。")]),s._v(" "),a("ul",[a("li",[s._v("安装依赖和数据库")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" --no-dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建数据表")]),s._v("\nvendor/bin/phinx migrate\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装初始数据")]),s._v("\nvendor/bin/phinx seed:run\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("设置目录权限")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#静态文件权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" 0777 bootstrap/cache\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" 0777 storage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#php缓存设置")]),s._v("\nphp artisan config:cache\nphp artisan route:cache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("配置apache或者nginx")])]),s._v(" "),a("p",[s._v("配置站点根目录指向"),a("code",[s._v("public")]),s._v("文件夹。")]),s._v(" "),a("p",[a("strong",[s._v("配置apache")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VirtualHost *:8"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n  ServerName jitamin.yourdomain.com\n  DocumentRoot "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/jitamin/public"')]),s._v("\n  DirectoryIndex index.php\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/jitamin/public"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      AllowOverride all\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/Directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  ErrorLog "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/apache2/jitamin.yourdomain.com-error.log"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/VirtualHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("配置nginx")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name jitamin.yourdomain.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  root "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/jitamin/public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  index index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  charset utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.php?"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$query_string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  access_log off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  error_log  /var/log/nginx/jitamin.yourdomain.com-error.log error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  sendfile off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  client_max_body_size 100m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  location ~ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fastcgi_split_path_info ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/.+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_pass unix:/var/run/php/php7.0-fpm.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fastcgi_pass 127.0.0.1:9000;")]),s._v("\n    fastcgi_index index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    include fastcgi_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_param SCRIPT_FILENAME "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_intercept_errors off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_buffer_size 16k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 16k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  location ~ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".ht "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    deny all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("p",[s._v("配置完成后就可以运行了，访问"),a("code",[s._v("http://jitamin.yourdomain.com")]),s._v("登录。")]),s._v(" "),a("p",[s._v("初始账号：")]),s._v(" "),a("ul",[a("li",[s._v("用户名: "),a("code",[s._v("admin")]),s._v(" or "),a("code",[s._v("admin@admin.com")])]),s._v(" "),a("li",[s._v("密码: "),a("code",[s._v("admin")])])]),s._v(" "),a("p",[s._v("预览图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/jitamin.png",alt:"jitamin"}})]),s._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),a("p",[s._v("以上就是部署过程记录，开始用起来吧！")])])}),[],!1,null,null,null);a.default=e.exports}}]);