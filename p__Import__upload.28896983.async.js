(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{ODIB:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("J+/v");var u=n(a("MoRW"));a("T2oS");var o=n(a("W9HT"));a("+L6B");var i=n(a("2/Rp")),r=n(a("qIgq")),d=a("Hx5s"),c=l(a("q1tI")),f=n(a("ppLR")),s=n(a("c06g")),p=function(){var e=(0,c.useState)(!0),t=(0,r.default)(e,2),a=t[0],l=t[1],n=(0,c.useState)(1),p=(0,r.default)(n,2),m=p[0],g=p[1];(0,c.useEffect)(function(){setTimeout(function(){l(!1)},3e3)},[]);var v=function(){console.log(";;;"),g(3)},b=function(){g(1)};return 1==m?c.default.createElement(d.PageHeaderWrapper,{content:"\u6570\u636e\u5f55\u5165\uff1aExcle \u4e0a\u4f20",className:f.default.main},c.default.createElement(s.default,null),c.default.createElement(i.default,{key:"submit",style:{margin:"10px auto",width:"150px",height:"40px",float:"right"},size:"large",type:"primary",onClick:function(){v()}},"\u63d0\u4ea4"),c.default.createElement("div",{style:{paddingTop:100,textAlign:"center"}},c.default.createElement(o.default,{spinning:a,size:"large"}))):2==m?c.default.createElement(u.default,{status:"success",title:"\u6570\u636e\u5f55\u5165\u6210\u529f\uff01~"}):3==m?c.default.createElement(u.default,{status:"error",title:"\u5931\u8d25\u5566~",subTitle:"\u53ef\u4ee5\u518d\u4e00\u6b21\u5c1d\u8bd5\u4e0b\u54c8...",extra:[c.default.createElement(i.default,{type:"primary",size:"large",onClick:function(){b()}},"\u8fd4\u56de")]}):void 0};t.default=p},c06g:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var n=l(a("CtXQ"));a("miYZ");var u=l(a("tsqr"));a("DZo9");var o=l(a("8z0m")),i=l(a("q1tI")),r=l(a("vr1b")),d=o.default.Dragger,c={name:"file",multiple:!0,action:"https://property.ieexx.com/admin/import/upload",method:"post",onChange:function(e){var t=e.file.status;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?u.default.success("".concat(e.file.name," file uploaded successfully.")):"error"===t&&u.default.error("".concat(e.file.name," file upload failed."))}},f=function(){return i.default.createElement("div",{className:r.default.container},i.default.createElement("div",{id:"components-upload-demo-drag"},i.default.createElement(d,Object.assign({},c),i.default.createElement("p",{className:"ant-upload-drag-icon"},i.default.createElement(n.default,{type:"inbox"})),i.default.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),i.default.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"))))};t.default=f},ppLR:function(e,t,a){e.exports={main:"antd-pro-pages-import-upload-index-main","submit-button":"antd-pro-pages-import-upload-index-submit-button"}},vr1b:function(e,t,a){}}]);