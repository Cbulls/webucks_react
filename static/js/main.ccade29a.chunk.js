(this["webpackJsonpwebucks-project"]=this["webpackJsonpwebucks-project"]||[]).push([[0],{13:function(e,c,s){},15:function(e,c,s){},16:function(e,c,s){},17:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s(8),j=s.n(i),l=s(5),n=s(2),r=s(3),a=(s(13),s(0)),d=function(){var e=Object(t.useState)(""),c=Object(r.a)(e,2),s=c[0],i=c[1],j=Object(t.useState)(""),l=Object(r.a)(j,2),d=l[0],b=l[1],h=Object(n.f)();function x(e,c){return!(e.includes("@")&&c.length>7)}var O=x(s,d)?"#ADD3EA":"#60ADED";return Object(a.jsx)("div",{className:"Login",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"WeBucks"})}),Object(a.jsxs)("form",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",id:"ID",className:"boxes",placeholder:"\uc804\ud654\ubc88\ud638, \uc0ac\uc6a9\uc790 \uc774\ub984 \ub610\ub294 \uc774\uba54\uc77c",onChange:function(e){i(e.target.value)}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"password",id:"password",className:"boxes",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:function(e){b(e.target.value)}})}),Object(a.jsx)("button",{className:"boxes",type:"button",onClick:function(){h("/list")},style:{backgroundColor:O},disabled:x(s,d),children:"\ub85c\uadf8\uc778"})]}),Object(a.jsx)("div",{className:"footer",children:"\ube44\ubc00\ubc88\ud638\ub97c \uc78a\uc73c\uc168\ub098\uc694?"})]})})})},b=(s(15),function(e){var c=e.coffeeImg,s=e.coffeeName;return Object(a.jsx)("div",{className:"photoBox",children:Object(a.jsxs)(l.b,{to:"/detail",style:{textDecoration:"none"},children:[Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:c,alt:s})}),Object(a.jsx)("p",{children:s})]})})}),h=function(){return Object(a.jsxs)("nav",{className:"boxes",children:[Object(a.jsx)("span",{className:"cursiveWord",children:"WeBucks"}),Object(a.jsxs)("ul",{className:"linkList",children:[Object(a.jsx)("li",{children:"COFFEE"}),Object(a.jsx)("li",{children:"MENU"}),Object(a.jsx)("li",{children:"STORE"}),Object(a.jsx)("li",{children:"WHAT'S NEW"})]})]})},x=function(){var e=Object(t.useState)([]),c=Object(r.a)(e,2),s=c[0],i=c[1];return Object(t.useEffect)((function(){fetch("http://localhost:3000/data/imgData.json").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(a.jsx)("div",{className:"List",children:Object(a.jsxs)("section",{children:[Object(a.jsx)(h,{}),Object(a.jsxs)("div",{className:"boxes",id:"box-title",children:[Object(a.jsx)("h3",{className:"small-title",children:"\ucf5c\ub4dc \ube0c\ub8e8 \ucee4\ud53c"}),Object(a.jsx)("span",{className:"material-icons",children:"coffee"}),Object(a.jsx)("span",{className:"small-description",children:"\ub514\uce74\ud398\uc778 \uc5d0\uc2a4\ud504\ub808\uc18c\uc0f7 \ucd94\uac00 \uac00\ub2a5(\uc77c\ubd80 \uc74c\ub8cc \uc81c\uc678)"})]}),Object(a.jsx)("div",{className:"photo",children:Object(a.jsx)("ul",{className:"photoList",children:s[0]&&s[0].map((function(e,c){return Object(a.jsx)(b,{coffeeImg:e.img,coffeeName:e.title},c)}))})}),Object(a.jsxs)("div",{className:"boxes",id:"box-title",children:[Object(a.jsx)("h3",{className:"small-title",children:"\ube0c\ub8e8\ub4dc \ucee4\ud53c"}),Object(a.jsx)("span",{className:"material-icons",children:"coffee"}),Object(a.jsx)("span",{className:"small-description",children:"\ub514\uce74\ud398\uc778 \uc5d0\uc2a4\ud504\ub808\uc18c\uc0f7 \ucd94\uac00 \uac00\ub2a5(\uc77c\ubd80 \uc74c\ub8cc \uc81c\uc678)"})]}),Object(a.jsx)("div",{className:"photo",children:Object(a.jsx)("ul",{className:"photoList",children:s[1]&&s[1].map((function(e,c){return Object(a.jsx)(b,{coffeeImg:e.img,coffeeName:e.title},c)}))})})]})})},O=(s(16),function(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"footer-boxes",children:[Object(a.jsx)("div",{className:"footer-box",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"COMPANY"}),Object(a.jsx)("li",{children:"\ud55c\ub208\uc5d0 \ubcf4\uae30"}),Object(a.jsx)("li",{children:"\uc704\ubc85\uc2a4 \uc0ac\uba85"}),Object(a.jsx)("li",{children:"\uc704\ubc85\uc2a4 \uc18c\uac1c"}),Object(a.jsx)("li",{children:"\uad6d\ub0b4 \ub274\uc2a4\ub8f8"}),Object(a.jsx)("li",{children:"\uc138\uacc4\uc758 \uc704\ubc85\uc2a4"}),Object(a.jsx)("li",{children:"\uae00\ub85c\ubc8c \ub274\uc2a4\ub8f8"})]})}),Object(a.jsx)("div",{className:"footer-box",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"CORPORATE SALES"}),Object(a.jsx)("li",{children:"\ub2e8\uccb4 \ubc0f \uae30\uc5c5 \uad6c\ub9e4 \uc548\ub0b4"})]})}),Object(a.jsx)("div",{className:"footer-box",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"PARTNERSHIP"}),Object(a.jsx)("li",{children:"\uc2e0\uaddc \uc785\uc810 \uc81c\uc758"}),Object(a.jsx)("li",{children:"\ud611\ub825 \uace0\uac1d\uc0ac \ub4f1\ub85d \uc2e0\uccad"})]})}),Object(a.jsx)("div",{className:"footer-box",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"ONLINE COMMUNITY"}),Object(a.jsx)("li",{children:"\ud398\uc774\uc2a4\ubd81"}),Object(a.jsx)("li",{children:"\ud2b8\uc704\ud130"}),Object(a.jsx)("li",{children:"\uc720\ud29c\ube0c"}),Object(a.jsx)("li",{children:"\uc778\uc2a4\ud0c0\uadf8\ub7a8"})]})}),Object(a.jsx)("div",{className:"footer-box",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"RECRUIT"}),Object(a.jsx)("li",{children:"\ucc44\uc6a9 \uc18c\uac1c"}),Object(a.jsx)("li",{children:"\ucc44\uc6a9 \uc9c0\uc6d0\ud558\uae30"})]})}),Object(a.jsx)("div",{className:"footer-box",children:Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:"WEBUCKS"})})})]})})}),o=function(e){var c=e.coffeeImg,s=e.coffeeName;return Object(a.jsx)("div",{className:"coffee-image",children:Object(a.jsx)("img",{src:c,alt:s})})},m=function(){var e=Object(t.useState)([]),c=Object(r.a)(e,2),s=c[0],i=c[1];Object(t.useEffect)((function(){fetch("http://localhost:3000/data/imgDetailData.json").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var j=Object(t.useState)("black"),l=Object(r.a)(j,2),n=l[0],d=l[1];var b=Object(t.useState)([]),x=Object(r.a)(b,2),m=x[0],u=x[1],f=function(e){return Object(a.jsx)("li",{children:e.comment})};return Object(a.jsx)("div",{className:"Detail",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("header",{children:Object(a.jsx)(h,{})}),Object(a.jsxs)("div",{className:"boxes",id:"second-box",children:[Object(a.jsx)("div",{className:"title",children:"\ucf5c\ub4dc \ube0c\ub8e8"}),Object(a.jsx)("div",{className:"ul-box",children:Object(a.jsxs)("ul",{className:"small-linkList",children:[Object(a.jsx)("li",{children:"\ud648"}),Object(a.jsx)("i",{className:"material-icons",children:"keyboard_arrow_right"}),Object(a.jsx)("li",{children:"MENU"}),Object(a.jsx)("i",{className:"material-icons",children:"keyboard_arrow_right"}),Object(a.jsx)("li",{children:"\uc74c\ub8cc"}),Object(a.jsx)("i",{className:"material-icons",children:"keyboard_arrow_right"}),Object(a.jsx)("li",{children:"\uc5d0\uc2a4\ud504\ub808\uc18c"}),Object(a.jsx)("i",{className:"material-icons",children:"keyboard_arrow_right"}),Object(a.jsx)("li",{children:"\ucee4\ud53c 1"})]})})]}),Object(a.jsxs)("section",{children:[s.detailData&&s.detailData.map((function(e,c){return Object(a.jsx)(o,{coffeeImg:e.img,coffeeName:e.title},c)})),Object(a.jsxs)("article",{children:[Object(a.jsxs)("div",{className:"coffee-title",children:[Object(a.jsxs)("h4",{className:"small-title",children:["\ucee4\ud53c 1",Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"small-title-English",children:"Coffee 1"})]}),Object(a.jsx)("span",{className:"material-icons",id:"heart",onClick:function(){return d("red"===n?"black":"red")},style:{color:n},children:"favorite_border"})]}),Object(a.jsx)("div",{className:"coffee-description",children:Object(a.jsx)("p",{children:"\ub2ec\ub2ec\ud55c \ucee4\ud53c\uc5d0 \ubc14\ud034\ubc8c\ub808 \ud55c \ub9c8\ub9ac\uc640 \uc950 \ubc1c\ud1b1 3\uac1c, \ub2ed \ubaa9 3\uac1c, \uc9c0\ub098\uac00\ub294 \ud560\uc544\ubc84\uc9c0 \uba38\ub9ac\uce74\ub77d 7\uac00\ub2e5, \uc7a1\ucd08 \ud55c \uc6c0\ud07c, \ub2e4\uc2dc\ub9c8 \ud55c \uc2a4\ud47c\uc744 \ub123\uc5b4\uc11c \ub9cc\ub4e4\uc5c8\uc73c\ub2c8 \uc808\ub300 \ub4dc\uc2dc\uc9c0 \ub9c8\uc2ed\uc2dc\uc624!!!!!"})}),Object(a.jsxs)("div",{className:"coffee-nutrition",children:[Object(a.jsx)("p",{children:"\uc81c\ud488 \uc601\uc591 \uc815\ubcf4"}),Object(a.jsx)("p",{children:"Tall(\ud1a8) / 355ml(12 fl oz)"})]}),Object(a.jsxs)("div",{className:"coffee-nutrition-detail",children:[Object(a.jsx)("div",{className:"coffee-nutrition-detail-in",children:Object(a.jsxs)("ul",{id:"left",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"1\ud68c \uc81c\uacf5\ub7c9 (kcal)"}),Object(a.jsx)("span",{children:"16000"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"\ud3ec\ud654\uc9c0\ubc29 (g)"}),Object(a.jsx)("span",{children:"600"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"\ub2e8\ubc31\uc9c8 (g)"}),Object(a.jsx)("span",{children:"6"})]})]})}),Object(a.jsx)("div",{className:"coffee-nutrition-detail-in",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"\ub098\ud2b8\ub968 (mg)"}),Object(a.jsx)("span",{children:"2000"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"\ub2f9\ub958 (g)"}),Object(a.jsx)("span",{children:"540"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"\uce74\ud398\uc778 (mg)"}),Object(a.jsx)("span",{children:"570"})]})]})})]}),Object(a.jsx)("div",{className:"allergy",children:Object(a.jsx)("div",{children:"\uc54c\ub808\ub974\uae30 \uc720\ubc1c \uc694\uc778: \ud560\uc544\ubc84\uc9c0 \uba38\ub9ac\uce74\ub77d"})}),Object(a.jsxs)("div",{className:"review",children:[Object(a.jsx)("h3",{children:"\ub9ac\ubdf0"}),Object(a.jsx)("div",{className:"review-list",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{href:"https://www.naver.com/",children:"coffee_lover"}),Object(a.jsx)("span",{children:"\ub2f9\uc7a5 \ud658\ubd88\ud574\uc8fc\uc138\uc694"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{href:"https://www.naver.com/",children:"webucks_hater"}),Object(a.jsx)("span",{children:"\uace0\uc18c\ud558\uaca0\uc2b5\ub2c8\ub2e4."})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{href:"https://www.naver.com/",children:"webucks_killer"}),Object(a.jsx)("span",{children:"\uc624\ud568\ub9c8 \ub4e4\uace0 \ucc3e\uc544\uac11\ub2c8\ub2e4."})]}),m.map((function(e,c,s){return Object(a.jsx)(f,{comment:e,index:s},c)}))]})})]}),Object(a.jsx)("div",{className:"review-input",children:Object(a.jsx)("span",{children:Object(a.jsx)("input",{type:"text",placeholder:"\ub9ac\ubdf0\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onKeyPress:function(e){"Enter"===e.key&&(u(m.concat(e.target.value)),e.target.value=null)}})})})]})]}),Object(a.jsx)(O,{})]})})};function u(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)(n.c,{children:[Object(a.jsx)(n.a,{path:"/",element:Object(a.jsx)(d,{})}),Object(a.jsx)(n.a,{path:"/list",element:Object(a.jsx)(x,{})}),Object(a.jsx)(n.a,{path:"/detail",element:Object(a.jsx)(m,{})})]})})}j.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ccade29a.chunk.js.map