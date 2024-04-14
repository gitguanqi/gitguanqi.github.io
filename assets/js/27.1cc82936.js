(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{355:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("有时候在本地开发时候也需要配置ssl证书，这样保证和线上环境一样，更适合调试，所以本篇介绍如何配置本地免费ssl证书。")])]),s._v(" "),a("h2",{attrs:{id:"安装mkcert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mkcert"}},[s._v("#")]),s._v(" 安装mkcert")]),s._v(" "),a("h3",{attrs:{id:"linux安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" linux安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/FiloSottile/mkcert",target:"_blank",rel:"noopener noreferrer"}},[s._v("mkcert"),a("OutboundLink")],1),s._v("是Google公司开发的一款小工具，用来自签本地证书。")]),s._v(" "),a("ul",[a("li",[s._v("安装certutil")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libnss3-tools\n    -or-\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nss-tools\n    -or-\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" nss\n    -or-\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zypper")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mozilla-nss-tools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("安装"),a("a",{attrs:{href:"https://docs.brew.sh/Homebrew-on-Linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("brew"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("记得使用非root账号操作，否则报错！")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/bin/bash "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://raw.githubusercontent.com/Homebrew/install/master/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" ~/.linuxbrew "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("~/.linuxbrew/bin/brew shellenv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" /home/linuxbrew/.linuxbrew "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("/home/linuxbrew/.linuxbrew/bin/brew shellenv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" ~/.bash_profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eval \\'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/bin/brew shellenv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eval \\'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/bin/brew shellenv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("安装mkcert")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mkcert\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"签署证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签署证书"}},[s._v("#")]),s._v(" 签署证书")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root certbot")]),s._v("\nmkcert "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# command")]),s._v("\nmkcert -key-file key.pem -cert-file cert.pem example.com *.example.com\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# option")]),s._v("\n-cert-file FILE, -key-file FILE, -p12-file FILE\n    Customize the output paths.\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-client")]),s._v("\n    Generate a certificate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" client authentication.\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ecdsa")]),s._v("\n    Generate a certificate with an ECDSA key.\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pkcs12")]),s._v("\n    Generate a "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".p12"')]),s._v(" PKCS "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#12 file, also know as a ".pfx" file,')]),s._v("\n    containing certificate and key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" legacy applications.\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-csr")]),s._v(" CSR\n    Generate a certificate based on the supplied CSR. Conflicts with\n    all other flags and arguments except "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-install")]),s._v(" and -cert-file.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展示"}},[s._v("#")]),s._v(" 展示")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/linux-ssl.jpg",alt:"linux ssl"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);