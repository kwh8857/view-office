(this["webpackJsonpreact-basic"]=this["webpackJsonpreact-basic"]||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(37),s=c.n(i),r=c(19),o=c(33),l=c(14),d=(c(74),c(20)),j=c(5);var b=function(e){var t=e.img,c=e.category,n=e.title,i=e.isopen,s=e.__changOpen,r=e.id,o=e.timestamp,d=e.__delete,b=e.__fixnav,u=Object(a.useState)(i),p=Object(l.a)(u,2),O=p[0],m=p[1],f=Object(a.useState)(!1),x=Object(l.a)(f,2),g=x[0],v=x[1];return Object(a.useEffect)((function(){return m(i),function(){}}),[i]),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"img-wrapper",style:{backgroundImage:"url(".concat(t,")")}}),Object(j.jsx)("div",{className:"category",children:"space"===c?"\uc8fc\uac70\uacf5\uac04":"store"===c?"\uc0c1\uc5c5\uacf5\uac04":"home"===c?"\uc8fc\ud0dd\uac74\ucd95":"\uad00\uacf5\uc2dc\uc124"}),Object(j.jsx)("div",{className:"name",children:n}),Object(j.jsx)("button",{className:"fix",onClick:function(){b(r,c,o)},children:"\uc218\uc815\ud558\uae30"}),Object(j.jsx)("div",{className:"open ".concat(O?"active":""),onClick:function(){m(!O),s(r,!O)},children:Object(j.jsx)("div",{className:"circle"})}),Object(j.jsx)("div",{className:"remove",onClick:function(){v(!0)},children:Object(j.jsx)("img",{src:"/assets/cancel.svg",alt:""})}),Object(j.jsxs)("div",{className:"delete-box ".concat(g?"active":""),children:[Object(j.jsx)("div",{className:"title",children:"\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(j.jsx)("button",{onClick:function(){d(r),v(!1)},children:"\uc0ad\uc81c\ud558\uae30"}),Object(j.jsxs)("svg",{onClick:function(){v(!1)},width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M1 1L19.7136 19.7136",stroke:"#C4C4C4",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),Object(j.jsx)("path",{d:"M19.7136 1L1 19.7136",stroke:"#C4C4C4",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"})]})]})]})},u=c(54);c(77),c(106),c(105);u.a.initializeApp({apiKey:"AIzaSyBd4JVfK90SGj0PUPs64JS7tdIvhu4NiBQ",authDomain:"viewinterior-bc51e.firebaseapp.com",projectId:"viewinterior-bc51e",storageBucket:"viewinterior-bc51e.appspot.com",messagingSenderId:"253940294914",appId:"1:253940294914:web:4c4cc04fd5408127d14e1b",measurementId:"G-YV65LB4MVL"});var p=u.a,O=(c(79),p.firestore()),m=p.storage();var f=function(){var e=Object(r.c)(),t=Object(d.f)(),c=Object(a.useState)(!1),n=Object(l.a)(c,2),i=n[0],s=n[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),p=u[0],f=u[1],v=Object(a.useState)(1),h=Object(l.a)(v,2),y=h[0],N=h[1],E=Object(a.useState)([]),C=Object(l.a)(E,2),w=C[0],k=C[1],T=Object(a.useState)(void 0),I=Object(l.a)(T,2),L=I[0],_=I[1],A=Object(a.useState)([]),S=Object(l.a)(A,2),G=S[0],R=S[1],D=Object(a.useState)([]),M=Object(l.a)(D,2),U=M[0],H=M[1],z=Object(a.useCallback)((function(e,c,a){t("/editor",{state:{type:"fix",category:c,timestamp:a,id:e}})}),[t]),F=Object(a.useCallback)((function(e,t){O.collection("editor").doc(e).update({isopen:t})}),[]),B=Object(a.useCallback)((function(){var e=U.slice(),t=Math.ceil(e.length/10);console.log(t),y+1<=t&&N(y+1)}),[y,U]),P=Object(a.useCallback)((function(){y-1>=1&&N(y-1)}),[y]),K=Object(a.useCallback)((function(t){m.ref("editor/".concat(t)).listAll().then((function(e){e.items.forEach((function(e){m.ref("editor/".concat(t,"/").concat(e.name)).delete()}))})),O.collection("editor").doc(t).delete().then((function(){e({type:"@config/toast",payload:{isactive:!0,msg:"\ud504\ub85c\uc81d\ud2b8\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4"}})}))}),[e]);return Object(a.useEffect)((function(){var e=U.slice(),t=Math.ceil(e.length/10),c=[];if(t<5)for(var a=0;a<Math.ceil(e.length/10);a++)c.push(a+1);else if(y<=3)for(var n=1;n<6;n++)c.push(n);else for(var i=t-y>1?-2:t-y-4;i<(t-y>1?3:t-y+1);i++)c.push(y+i);return k(c),function(){}}),[U,y]),Object(a.useEffect)((function(){var e=G.slice();if(0!==p){var t=e.filter((function(e){var t=e.data;return 1===p?"space"===t.category:2===p?"store"===t.category:3===p?"home"===t.category:"public"===t.category}));H(L?t.filter((function(e){return e.data.title.includes(L)})):t)}else H(L?e.filter((function(e){return e.data.title.includes(L)})):e);return function(){}}),[G,p,L,y]),Object(a.useEffect)((function(){return O.collection("editor").orderBy("timestamp","desc").onSnapshot((function(e){var t=[];e.empty?R([]):(e.forEach((function(e){t.push({key:e.id,data:e.data()})})),R(t))})),function(){}}),[]),Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("div",{className:"title",children:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad00\ub9ac"}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"category ".concat(i?"open":""),onClick:function(){s(!i)},children:[Object(j.jsxs)("div",{className:"now",children:[x[p],Object(j.jsx)("img",{src:"/assets/category.svg",alt:""})]}),x.map((function(e,t){return Object(j.jsx)("div",{className:"select",onClick:function(){f(t)},children:e},t)}))]}),Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:function(e){e.target.value?_(e.target.value):_(void 0)}}),Object(j.jsx)("img",{src:"/assets/search.svg",alt:""})]}),Object(j.jsxs)("button",{className:"insert",onClick:function(){t("/editor",{state:{type:"new",timestamp:Date.now(),category:"space"}})},children:[Object(j.jsx)("img",{src:"/assets/plus.svg",alt:""}),Object(j.jsx)("div",{children:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624\uad00\ub9ac"})]})]})]}),Object(j.jsx)("div",{className:"bottom",children:G.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tag-wrapper",children:g.map((function(e,t){var c=e.title,a=e.type;return Object(j.jsx)("div",{className:a,children:c},t)}))}),Object(j.jsx)("div",{className:"list",children:U.slice().splice(10*(y-1),10).map((function(e,t){var c=e.data,a=c.title,n=c.category,i=c.mainimg.url,s=c.isopen,r=c.timestamp,o=e.key;return Object(j.jsx)(b,{title:a,category:n,isopen:s,img:i,id:o,timestamp:r,__delete:K,__changOpen:F,__fixnav:z},t)}))}),Object(j.jsxs)("div",{className:"index-wrapper",children:[Object(j.jsx)("img",{src:"/assets/arrow.svg",alt:"",onClick:P}),Object(j.jsx)("div",{className:"index-wrapper",children:w.map((function(e,t){return Object(j.jsx)("button",{className:y===e?"active":void 0,onClick:function(){y!==e&&N(e)},children:e},t)}))}),Object(j.jsx)("img",{src:"/assets/arrow.svg",alt:"",className:"right-arrow",onClick:B})]})]}):Object(j.jsxs)("div",{className:"disabled",children:[Object(j.jsx)("img",{src:"/assets/disable.svg",alt:""}),Object(j.jsx)("div",{className:"title",children:"\ub4f1\ub85d\ub41c \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"})]})})]})})},x=["\uc804\uccb4\ubcf4\uae30","\uc8fc\uac70\uacf5\uac04","\uc0c1\uc5c5\uacf5\uac04","\uc8fc\ud0dd\uac74\ucd95","\uad00\uacf5\uc2dc\uc124"],g=[{title:"\ub300\ud45c\uc774\ubbf8\uc9c0",type:"image"},{title:"\uce74\ud14c\uace0\ub9ac",type:"category"},{title:"\ud504\ub85c\uc81d\ud2b8\uba85",type:"name"},{title:"\uc218\uc815",type:"fix"},{title:"\uacf5\uac1c\uc5ec\ubd80",type:"open"},{title:"\uc0ad\uc81c",type:"remove"}],v=c(40);c(80);var h=function(e){var t=e.setIsLogin,c=Object(a.useCallback)((function(){t(!0)}),[t]);return Object(j.jsx)("main",{className:"login",children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("div",{className:"content-wrapper",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c()},action:"",children:[Object(j.jsx)("img",{src:"/assets/logo.svg",alt:""}),Object(j.jsx)("div",{className:"title",children:"\ubdf0\uc778\ud14c\ub9ac\uc5b4 \uad00\ub9ac\uc790 \uc6f9"}),Object(j.jsxs)("div",{className:"list",children:[Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"text",children:"\uc544\uc774\ub514"}),Object(j.jsx)("input",{type:"text",autoComplete:"off"})]}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"text",children:"\ube44\ubc00\ubc88\ud638"}),Object(j.jsx)("input",{type:"password",autoComplete:"new-password"})]})]}),Object(j.jsx)("button",{onClick:c,children:"\ub85c\uadf8\uc778"})]})})})})};c(81);var y=function(e){var t=e.isLogin,c=e.type,a=e.__insert,n=e.setIsLook,i=Object(d.e)();return Object(j.jsx)("header",{className:"".concat("all"===c&&"/editor"===i.pathname?"none":""),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("img",{src:"/assets/header/logo.svg",alt:""}),Object(j.jsx)("div",{className:"title",children:"\uad00\ub9ac\uc790\uc6a9"})]}),"all"===c?Object(j.jsx)("button",{className:"right ".concat(t?"":"none"),children:"\ub85c\uadf8\uc544\uc6c3"}):Object(j.jsxs)("div",{className:"button-wrapper",children:[Object(j.jsx)("button",{className:"look",onClick:function(){n(!0)},children:"\ubbf8\ub9ac\ubcf4\uae30"}),Object(j.jsx)("button",{className:"insert",onClick:a,children:"\ub4f1\ub85d\ud558\uae30"})]})]})})},N=c(11),E=(c(82),[13,15,17,19,21,23,25]);var C=function(){var e=Object(r.d)((function(e){return e.test.editor.size})),t=Object(a.useState)(!1),c=Object(l.a)(t,2),n=c[0],i=c[1],s=Object(a.useCallback)((function(e){document.execCommand("fontSize",!1,e),i(!1)}),[]),o=Object(a.useCallback)((function(){i(!n)}),[n]);return Object(j.jsxs)("div",{className:"ftsize",children:[Object(j.jsxs)("button",{className:"now-ft",onClick:o,children:[Object(j.jsxs)("span",{children:[e,"pt"]}),Object(j.jsx)("img",{src:"/assets/editor/down.svg",alt:"\uc5f4\uae30"})]}),n?Object(j.jsx)("div",{className:"ft-list",children:E.map((function(t,c){return Object(j.jsxs)("button",{className:"ft-card",style:t===e?{fontWeight:"bold",color:"#3597ec"}:void 0,onClick:function(){s(c+1)},children:[t,"pt",e===t?Object(j.jsx)("div",{className:"sky-circle"}):void 0]},c)}))}):void 0]})};var w=function(){var e=Object(r.d)((function(e){return e.test.editor})),t=[{img:"bold",type:"BOLD",callback:Object(a.useCallback)((function(){var e=document.execCommand("bold");console.log(e)}),[])},{img:"line",type:"LINE",callback:Object(a.useCallback)((function(){document.execCommand("underline")}),[])}];return Object(j.jsx)("div",{className:"ftstyle-wrapper",children:t.map((function(t,c){var a=t.img,i=t.type,s=t.callback;return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsx)("button",{className:"style-btn",onClick:s,style:{backgroundColor:"BOLD"===i&&e.bold||"LINE"===i&&e.underline?"#3597ec":void 0},children:Object(j.jsx)("img",{src:"/assets/editor/".concat(a,".svg"),alt:"\uc774\ubbf8\uc9c0"})})},c)}))})},k=[{img:"left",type:"justifyLeft"},{img:"center",type:"justifyCenter"},{img:"right",type:"justifyRight"}];var T=function(){var e=Object(r.c)(),t=Object(r.d)((function(e){return e.test.editor.align})),c=Object(a.useCallback)((function(t){e({type:"@test/CHANGE_ALIGN",payload:"justifyCenter"===t?"center":"justifyRight"===t?"right":"left"}),document.execCommand(t)}),[e]);return Object(j.jsx)("div",{className:"ftalign-wrapper",children:k.map((function(e,a){var n=e.img,i=e.type;return Object(j.jsx)("button",{className:"align-btn",onClick:function(){c(i)},children:Object(j.jsx)("img",{src:"/assets/editor/".concat(n,".svg"),alt:"".concat(n),style:t!==n?{filter:"grayscale(100%)"}:void 0})},a)}))})},I=[{img:"image",type:"IMAGE"},{img:"small",type:"SMALL"},{img:"half",type:"DOUBLE"},{img:"three",type:"THREE"},{img:"two",type:"TWO"}];var L=function(e){var t=e.setIsUp,c=(e.temKey,Object(r.c)()),n=Object(r.d)((function(e){return e.database.editor})),i=Object(a.useCallback)((function(e){var t=n.slice(),a={type:e,content:"IMAGE"===e||"SMALL"===e?{url:""}:[{url:"",resize:""},{url:"",resize:""}],id:"image-".concat((new Date).getTime()-Math.floor(100*Math.random())+1)};t.push(a),c({type:"@layouts/CHANGE_EDITOR",payload:t})}),[n,c]);return Object(j.jsxs)("div",{className:"insert-wrapper",children:[Object(j.jsx)("div",{className:"img-wrapper",children:I.map((function(e,t){var c=e.img,a=e.type;return Object(j.jsx)("label",{className:"test-img",onClick:function(){i(a)},children:Object(j.jsx)("img",{src:"/assets/editor/".concat(c,".svg"),alt:"".concat(c)})},t)}))}),Object(j.jsx)("div",{className:"line"}),Object(j.jsx)("div",{className:"test-img",onClick:function(){t({type:"YOUTUBE",status:!0})},children:Object(j.jsx)("img",{src:"/assets/editor/youtube.svg",alt:""})})]})};var _=function(e){var t=e.setIsUp,c=e.temKey;return Object(j.jsx)("div",{className:"edit-header",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(C,{}),Object(j.jsx)("div",{className:"line"}),Object(j.jsx)(w,{}),Object(j.jsx)("div",{className:"line"}),Object(j.jsx)(T,{}),Object(j.jsx)("div",{className:"line"}),Object(j.jsx)(L,{setIsUp:t,temKey:c})]})})},A=c(18),S=c(43);var G=function(e){var t=e.idx,c=Object(r.c)(),n=Object(r.d)((function(e){return e.database.editor})),i=Object(a.useCallback)((function(){var e=n.slice();t||0===t?e.splice(t,0,{type:"TITLE",content:"",id:"title-".concat((new Date).getTime()-Math.floor(100*Math.random())+1)}):e.push({type:"TITLE",content:"",id:"title-".concat((new Date).getTime()-Math.floor(100*Math.random())+1)}),c({type:"@layouts/CHANGE_EDITOR",payload:e})}),[n,c,t]);return Object(j.jsx)("div",{className:"template-emty",onClick:i})};var R=function(e){var t=e.data,c=(t.resize,t.url),a=e.provided,n=e.setFocus,i=e.idx,s=e.template,r=e.__imageUpdate,o=e.type;return Object(j.jsxs)(j.Fragment,{children:[0===i?Object(j.jsx)(G,{idx:i}):void 0,Object(j.jsx)("div",Object(N.a)(Object(N.a)(Object(N.a)({className:"template-img ".concat(c?"isurl":""),ref:a.innerRef},a.draggableProps),a.dragHandleProps),{},{onClick:function(){n(i)},style:"SMALL"===o?{width:"578px",margin:"20px auto"}:void 0,children:Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"file",style:{opacity:0},accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){r(e,o,i)}}),c?Object(j.jsx)("img",{src:c,alt:"\uc774\ubbf8\uc9c0",className:"url-img"}):Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:"/assets/editor/grey-plus.svg",alt:""}),Object(j.jsxs)("div",{className:"text",children:["\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc ",Object(j.jsx)("br",{})," (jpg / png / gif)"]})]})]})})),s[i+1]&&"TITLE"===s[i+1].type?void 0:Object(j.jsx)(G,{idx:i+1})]})};var D=function(e){var t=e.data,c=e.idx,n=e.provided,i=e.setFocus,s=Object(a.useRef)(null),o=Object(r.c)(),l=Object(r.d)((function(e){return e.test.editor}));return Object(a.useEffect)((function(){return s.current.innerHTML=t,function(){}}),[]),Object(j.jsxs)("div",Object(N.a)(Object(N.a)(Object(N.a)({id:"popo-".concat(c),className:"template-title",ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:[Object(j.jsx)("div",{className:"dnd-icon",children:Object(j.jsx)("img",{src:"/assets/projects/dnd-icon.svg",alt:"\uc6d0\ud558\ub294 \uc704\uce58\ub85c \uc774\ub3d9\ud574\ubcf4\uc138\uc694!"})}),Object(j.jsx)("div",{className:"con-wrapper",children:Object(j.jsx)("p",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",id:"text-line",contentEditable:!0,ref:s,suppressContentEditableWarning:!0,onFocus:function(){i(c)},onInput:function(e){o({type:"@layouts/CHANGE_TITLE",payload:s.current.innerHTML,idx:c})},onSelect:function(e){var t=window.getSelection(),c=window.getComputedStyle(t.focusNode.parentNode),a=parseInt(c.fontSize),n=c.textAlign,i=document.queryCommandState("bold"),s=document.queryCommandState("underline"),r=document.queryCommandValue("ForeColor");void 0===t.focusNode.localName&&a!==l.size&&o({type:"@test/CHANGE_SIZE",payload:a}),s!==l.underline&&o({type:"@test/CHANGE_UNDER",payload:s}),i!==l.bold&&o({type:"@test/CHANGE_BOLD",payload:i}),n!==l.align&&"start"!==n&&o({type:"@test/CHANGE_ALIGN",payload:n}),r!==l.color&&o({type:"@test/CHANGE_COLOR",payload:r})}})})]}))},M=c(60),U=c.n(M);var H=function(e){var t=e.provided,c=e.setFocus,a=e.idx,n=e.template,i=e.__imageUpdate,s=e.type,r=e.data;return Object(j.jsxs)(j.Fragment,{children:[0===a?Object(j.jsx)(G,{idx:a}):void 0,Object(j.jsxs)("div",Object(N.a)(Object(N.a)(Object(N.a)({className:"template-doubleimg ".concat(s),ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{onClick:function(){c(a)},children:[Object(j.jsxs)("label",{className:r[0].url?"isurl":"",children:[Object(j.jsx)("input",{type:"file",style:{opacity:0},accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){i(e,s,a,0)}}),r[0].url?Object(j.jsx)("img",{src:r[0].url,alt:"\uc774\ubbf8\uc9c0",className:"url-img"}):Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:"/assets/editor/grey-plus.svg",alt:""}),Object(j.jsxs)("div",{className:"text",children:["\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc ",Object(j.jsx)("br",{})," (jpg / png / gif)"]})]})]})," ",Object(j.jsxs)("label",{className:r[1].url?"isurl":"",children:[Object(j.jsx)("input",{type:"file",style:{opacity:0},accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){i(e,s,a,1)}}),r[1].url?Object(j.jsx)("img",{src:r[1].url,alt:"\uc774\ubbf8\uc9c0",className:"url-img"}):Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:"/assets/editor/grey-plus.svg",alt:""}),Object(j.jsxs)("div",{className:"text",children:["\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc ",Object(j.jsx)("br",{})," (jpg / png / gif)"]})]})]})]})),n[a+1]&&"TITLE"===n[a+1].type?void 0:Object(j.jsx)(G,{idx:a+1})]})},z=c(49),F=c.n(z);var B=function(e){var t=e.data,c=e.provided,a=e.template,n=e.idx,i=e.setFocus;return Object(j.jsxs)(j.Fragment,{children:[0===n?Object(j.jsx)(G,{idx:n}):void 0,Object(j.jsxs)("div",Object(N.a)(Object(N.a)(Object(N.a)({className:"template-youtube",ref:c.innerRef},c.draggableProps),c.dragHandleProps),{},{onClick:function(){console.log(n),i(n)},children:[Object(j.jsx)("div",{className:"dnd-icon",children:Object(j.jsx)("img",{src:"/assets/projects/dnd-icon.svg",alt:"\uc6d0\ud558\ub294 \uc704\uce58\ub85c \uc774\ub3d9\ud574\ubcf4\uc138\uc694!"})}),Object(j.jsx)(F.a,{className:"player",controls:!0,url:t,width:"100%",height:"100%"})]})),a[n+1]&&"TITLE"===a[n+1].type?void 0:Object(j.jsx)(G,{idx:n+1})]})};function P(e){var t=e.temKey,c=e.Fstore,n=e.Fstorage,i=e.__update,s=Object(r.c)(),o=Object(r.d)((function(e){return e.database.editor})),d=Object(a.useState)(0),b=Object(l.a)(d,2),u=b[0],p=b[1],O=Object(a.useCallback)((function(e){if(p(-1),e.destination){var t=Object(A.a)(o),c=e.source.index,a=e.destination.index,n=t.splice(c,1);t.splice(a,0,n[0]),s({type:"@layouts/CHANGE_EDITOR",payload:t})}}),[o,s]),m=Object(a.useCallback)((function(e){if(o.length>1){p(-1);var t=o.slice();t.splice(e,1),s({type:"@layouts/CHANGE_EDITOR",payload:t})}}),[o,s]),f=Object(a.useCallback)((function(e,c,a){return new Promise((function(i,s){var r=e.split(",")[1],o=a.split(",")[1];n.ref("editor/".concat(t,"/").concat(c)).putString(r,"base64").then((function(e){e.ref.getDownloadURL().then((function(e){n.ref("editor/".concat(t,"/").concat(c,"-resize")).putString(o,"base64").then((function(t){t.ref.getDownloadURL().then((function(t){i({url:e,resize:t})}))}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}))}),[t,n]),x=Object(a.useCallback)((function(e){return new Promise((function(t,c){var a=new FileReader;a.onload=function(c){var a=c.target.result,n=new Image;n.src=a,n.onload=function(c){var n=this;U.a.imageFileResizer(e,375,285,"JPEG",100,0,(function(c){t({url:a,resize:c,name:e.name,width:n.width,height:n.height})}),"base64")}},a.readAsDataURL(e)}))}),[]),g=Object(a.useCallback)((function(e,t,c,a){s({type:"@config/isLoading",payload:!0});var n=Object.values(e.target.files);Promise.all(n.map((function(e){return x(e).then((function(e){return e}))}))).then((function(e){Promise.all(e.map((function(e){var t=e.url,c=e.name,a=e.resize,n=(e.width,e.height,f(t,c,a).then((function(e){return e})));return n}))).then((function(e){s("IMAGE"===t||"SMALL"===t?{type:"@layouts/CHANGE_TITLE",payload:e[0],idx:c}:{type:"@layouts/CHANGE_IMAGE",payload:e[0],idx:c,index:a}),i(),s({type:"@config/isLoading",payload:!1})}))}))}),[f,x,s,i]);return Object(a.useEffect)((function(){function e(e){if("Backspace"===e.key&&o.length>1&&u>-1){var a=o.slice(),i=a[u];if("TITLE"!==i.type){if(p(-1),"IMAGE"===i.type){var r=i.content,l=r.resize,d=r.url;n.refFromURL(l).delete(),n.refFromURL(d).delete()}a.splice(u,1),c.collection("editor").doc(t).update({template:a}),s({type:"@layouts/CHANGE_EDITOR",payload:a})}else a.splice(u,1),"TITLE"===i.type&&0!==u&&0===i.content.length&&s({type:"@layouts/CHANGE_EDITOR",payload:a}),p(-1)}}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[u,o,s,t,c,n]),Object(j.jsx)(S.a,{onDragEnd:O,children:Object(j.jsx)(S.c,{droppableId:"tags",direction:"vertical",children:function(e){return Object(j.jsxs)("div",Object(N.a)(Object(N.a)({className:"editor-screen"},e.droppableProps),{},{ref:e.innerRef,children:[o.length>0?o.map((function(e,t){var c=e.type,a=e.content,n=e.id;return Object(j.jsx)(S.b,{draggableId:n,index:t,children:function(e){return"IMAGE"===c||"SMALL"===c?Object(j.jsx)(R,{data:a,idx:t,provided:e,setFocus:p,template:o,__imageUpdate:g,type:c},t):"TITLE"===c?Object(j.jsx)(D,{data:a,provided:e,idx:t,setFocus:p,focusIdx:u,__delete:m},t):"YOUTUBE"===c?Object(j.jsx)(B,{data:a,setFocus:p,provided:e,idx:t,template:o},t):Object(j.jsx)(H,{data:a,idx:t,provided:e,setFocus:p,template:o,__imageUpdate:g,type:c},t)}},n)})):Object(j.jsx)(G,{}),e.placeholder]}))}})})}Object(S.d)();var K=n.a.memo(P);var Y=function(e){var t=e.__close,c=e.template,n=Object(r.c)(),i=Object(a.useState)(""),s=Object(l.a)(i,2),o=s[0],d=s[1],b=Object(a.useCallback)((function(){var e=c.slice();e.push({type:"YOUTUBE",content:o,id:"yotubue-".concat((new Date).getTime()-Math.floor(100*Math.random())+1)}),n({type:"@layouts/CHANGE_EDITOR",payload:e}),t()}),[o,t,c,n]);return Object(j.jsxs)("div",{className:"popup-wrapper",style:{height:"374px"},children:[Object(j.jsx)("img",{src:"/assets/editor/cancel.svg",alt:"",className:"cancel",onClick:t}),Object(j.jsx)("div",{className:"popup-title",children:"\uc720\ud29c\ube0c \ub4f1\ub85d"}),Object(j.jsx)("input",{type:"text",className:"youtube-link",onChange:function(e){d(e.target.value)}}),Object(j.jsxs)("div",{className:"youtube-sub",children:[Object(j.jsxs)("div",{className:"sub-left",children:[Object(j.jsx)("div",{className:"left-title",children:"\ub9c1\ud06c\ubcf5\uc0ac\ubc29\ubc95"}),Object(j.jsxs)("div",{className:"left-sub",children:["URL \uc5c5\ub85c\ub4dc\ub294 \uc720\ud29c\ube0c \uc601\uc0c1\ub9cc\uc774 \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4. ",Object(j.jsx)("br",{})," \ube0c\ub77c\uc6b0\uc800 \uc0c1\ub2e8\uc758 \uc8fc\uc18c\ucc3d\uc5d0\uc11c \uc8fc\uc18c\ub97c \ubcf5\uc0ac\ud558\uc5ec \ub4f1\ub85d\ud574\uc8fc\uc138\uc694."]})]}),Object(j.jsx)("img",{src:"/assets/editor/youtube-sub.png",srcSet:"/assets/editor/youtube-sub@2x.png 2x,/assets/editor/youtube-sub@3x.png 3x",alt:"\uc124\uba85",className:"sub-right"})]}),Object(j.jsx)("div",{className:"link-btn",style:{backgroundColor:o.length>0?void 0:"grey"},onClick:function(){o.length>0&&b()},children:"\ub4f1\ub85d\ud558\uae30"})]})};var W,V=function(e){var t=e.isUp.status,c=e.setIsUp,n=Object(r.d)((function(e){return e.database.editor})),i=Object(a.useCallback)((function(){c({status:!1,type:""})}),[c]);return t?Object(j.jsxs)("div",{className:"popup-pack",children:[Object(j.jsx)("div",{className:"back-black"}),Object(j.jsx)("div",{className:"popup-main",children:Object(j.jsx)(Y,{__close:i,template:n})})]}):Object(j.jsx)("div",{})},J=c(61),X=c(36),q=c(24),Z=q.a.div(W||(W=Object(X.a)(["\n  width: 989px;\n  margin-bottom: 27.5px;\n  .top {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    .title {\n      font-size: 30px;\n      font-weight: bold;\n    }\n  }\n  .ti {\n    font-size: 13px;\n    font-weight: bold;\n    margin-bottom: 10px;\n  }\n  .grid-wrapper {\n    margin-top: 30px;\n    display: grid;\n    width: 582px;\n    row-gap: 34px;\n    & > .category-wrapper {\n      & > .btn-wrapper {\n        display: flex;\n        column-gap: 14px;\n\n        & > button {\n          cursor: pointer;\n          display: flex;\n          width: 135px;\n          height: 50px;\n          background: #ffffff;\n          border: solid 1px #dbdbdb !important;\n          border-radius: 5px;\n          align-items: center;\n          box-sizing: border-box;\n          padding-left: 11px;\n          column-gap: 8px;\n          & > .circle {\n            width: 21px;\n            height: 21px;\n            border: 1px solid #dbdbdb;\n            border-radius: 21px;\n          }\n          & > .text {\n            font-weight: 500;\n            font-size: 14px;\n          }\n        }\n        & > .active {\n          border: solid 1px #000000 !important;\n          & > .circle {\n            border-color: unset;\n          }\n        }\n      }\n    }\n  }\n  input {\n    width: 100%;\n    height: 50px;\n    border: solid 1px #dbdbdb;\n    border-radius: 5px;\n    font-size: 17px;\n    box-sizing: border-box;\n    padding: 12px 17px;\n    background-color: #ffffff;\n  }\n  textarea {\n    width: 582px;\n    height: 94px;\n    border: solid 1px #dbdbdb;\n    background-color: #ffffff;\n    border-radius: 5px;\n    font-size: 17px;\n    box-sizing: border-box;\n    padding: 12px 17px;\n  }\n"])));var Q,$=function(e){var t=e.category,c=e.dispatch,n=e.info,i=n.title,s=n.sub,r=Object(a.useCallback)((function(e){c({type:"CATEGORY",category:e})}),[c]);return Object(j.jsxs)(Z,{children:[Object(j.jsx)("div",{className:"top",children:Object(j.jsx)("div",{className:"title",children:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \ucd94\uac00"})}),Object(j.jsxs)("div",{className:"grid-wrapper",children:[Object(j.jsxs)("div",{className:"title-wrapper",children:[Object(j.jsx)("div",{className:"ti",children:"\uac8c\uc2dc\uae00 \uc81c\ubaa9"}),Object(j.jsx)("input",{value:i||"",type:"text",maxLength:60,placeholder:"\uac8c\uc2dc\uae00 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:function(e){e.target.value?c({type:"TITLE",title:e.target.value}):c({type:"TITLE",title:void 0})}})]}),Object(j.jsxs)("div",{className:"category-wrapper",children:[Object(j.jsx)("div",{className:"ti",children:"\uce74\ud14c\uace0\ub9ac \uc120\ud0dd"}),Object(j.jsx)("div",{className:"btn-wrapper",children:ee.map((function(e,c){var a=e.title,n=e.type;return Object(j.jsxs)("button",{className:n===t?"active":"",onClick:function(){r(n)},children:[Object(j.jsx)("div",{className:"circle",children:t===n?Object(j.jsx)("img",{src:"/assets/editor/black-check.svg",alt:""}):void 0}),Object(j.jsxs)("div",{className:"text",children:[a," "]})]},c)}))})]}),Object(j.jsxs)("div",{className:"sub-wrapper",children:[Object(j.jsx)("div",{className:"ti",children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"}),Object(j.jsx)("textarea",{type:"text",maxLength:120,value:s||"",placeholder:"\uac1c\uc694\ub294 \ucd5c\ub300 2\uc904\uae4c\uc9c0 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:function(e){var t=e.target.value.split(/\n/g);t.splice(2);var a=t.join().replace(/,/g,"\n");c(a?{type:"SUB",sub:a}:{type:"SUB",sub:void 0})}})]})]})]})},ee=[{title:"\uc8fc\uac70\uacf5\uac04",type:"space"},{title:"\uc0c1\uc5c5\uacf5\uac04",type:"store"},{title:"\uc8fc\ud0dd\uac74\ucd95",type:"home"},{title:"\uad00\uacf5\uc2dc\uc124",type:"public"}],te=c(65),ce=q.a.div(Q||(Q=Object(X.a)(["\n  position: fixed;\n  z-index: 6000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .back-black {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: black;\n    opacity: 0.4;\n    width: 100%;\n    height: 100%;\n  }\n"])));var ae,ne,ie=function(){return Object(r.d)((function(e){return e.config.isLoading}))?Object(j.jsxs)(ce,{children:[Object(j.jsx)("div",{className:"back-black"}),Object(j.jsx)(te.a,{color:"white",height:100,width:100})]}):Object(j.jsx)(j.Fragment,{})},se=q.a.div(ae||(ae=Object(X.a)(["\n  @keyframes arrow-moving {\n    from {\n      opacity: 0.1;\n      transform: translateY(30px);\n    }\n\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  animation: arrow-moving 0.6s;\n  animation-timing-function: cubic-bezier(0.8, -0.03, 0.31, 0.93);\n"])));var re=function(e){var t=e.top;return Object(j.jsx)(oe,{top:t,children:Object(j.jsx)("div",{className:"wrapper",children:le.map((function(e,t){var c=e.title,a=e.link;return Object(j.jsx)("div",{style:"/portfolio"===a?{fontWeight:"bold"}:void 0,children:c},t)}))})})},oe=q.a.div(ne||(ne=Object(X.a)(["\n  position: absolute;\n  top: ",";\n  left: 5px;\n  width: 100%;\n  z-index: 500;\n  & > .wrapper {\n    row-gap: 18px;\n    display: grid;\n    & > div {\n      width: fit-content;\n      cursor: pointer;\n      font-family: mont;\n      font-size: 15px;\n      font-weight: 500;\n      color: black;\n    }\n  }\n  @media screen and (max-width: 1365px) {\n    display: none;\n  }\n"])),(function(e){return"".concat(e.top,"px")})),le=[{title:"MAIN",link:"/"},{title:"ABOUT",link:"/about"},{title:"PORTFOLIO",link:"/portfolio"},{title:"SHOWROOM",link:"/showroom"},{title:"CONTACT",link:"/contact"}];c(102),c(53);var de=function(e){var t=e.data,c=e.type;return Object(j.jsx)("div",{className:"double ".concat(c),children:Object.values(t).map((function(e,t){return Object(j.jsx)("img",{src:e.url,alt:""},t)}))})};var je=function(e){var t=e.data,c=e.type;return Object(j.jsx)("div",{className:"img-wrapper ".concat(c),children:Object(j.jsx)("img",{src:t.url,alt:""})})};var be=function(e){var t=e.data,c=Object(a.useRef)(null);return Object(a.useEffect)((function(){return c.current&&(c.current.innerHTML=t),function(){}}),[t]),Object(j.jsx)("div",{ref:c,children:"\ucf58\ud14d\uc2a4\ud2b8"})};var ue=function(e){var t=e.data;return Object(j.jsx)("div",{className:"player",children:Object(j.jsx)(F.a,{controls:!0,url:t,width:"100%",height:"100%"})})};var pe=function(e){var t=e.isLook,c=e.title,a=e.sub,n=e.category,i=e.template;return Object(j.jsxs)("div",{className:"look ".concat(t?"on":""),children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)(re,{top:90}),Object(j.jsx)("div",{className:"title",children:"VIEW PORTFOLIO"})]}),Object(j.jsx)("div",{className:"bottom",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"title-section",children:[Object(j.jsx)("div",{className:"title",children:c}),Object(j.jsxs)("div",{className:"subject",children:[Object(j.jsx)("div",{className:"category",children:"space"===n?"\uc8fc\uac70\uacf5\uac04":"store"===n?"\uc0c1\uc5c5\uacf5\uac04":"home"===n?"\uc8fc\ud0dd\uac74\ucd95":"\uad00\uacf5\uc2dc\uc124"}),Object(j.jsx)("div",{className:"sub",children:a})]})]}),Object(j.jsx)("div",{className:"template-wrapper",children:i.map((function(e,t){var c=e.type,a=e.content;return"TITLE"===c?Object(j.jsx)(be,{data:a},t):"YOUTUBE"===c?Object(j.jsx)(ue,{data:a},t):"IMAGE"===c||"SMALL"===c?Object(j.jsx)(je,{data:a,type:c},t):Object(j.jsx)(de,{data:a,type:c},t)}))})]})})]})},Oe=p.firestore(),me=p.storage();var fe=function(){var e=Object(r.c)(),t=Object(d.f)(),c=Object(d.e)().state,n=c.type,i=c.timestamp,s=c.category,o=c.id,b=Object(r.d)((function(e){return e.database.key})),u=Object(r.d)((function(e){return e.database.editor})),p=Object(a.useReducer)((function(e,t){switch(t.type){case"RESET":return{title:void 0,sub:void 0,category:"space"};case"INIT":return t.info;case"TITLE":return Object(N.a)(Object(N.a)({},e),{},{title:t.title});case"SUB":return Object(N.a)(Object(N.a)({},e),{},{sub:t.sub});case"CATEGORY":return Object(N.a)(Object(N.a)({},e),{},{category:t.category});default:throw new Error("Unhandled action type: ".concat(t.type))}}),{title:void 0,sub:void 0,category:"space"}),O=Object(l.a)(p,2),m=O[0],f=O[1],x=Object(a.useState)({status:!1,type:""}),g=Object(l.a)(x,2),v=g[0],h=g[1],E=Object(a.useState)(!1),C=Object(l.a)(E,2),w=C[0],k=C[1],T=Object(a.useCallback)((function(e){var c=m.title,a=m.sub,n=m.category,i=u.filter((function(e){var t=e.type;return"IMAGE"===t||"SMALL"===t}));Oe.collection("editor").doc(b).update({template:u,title:c||"\uc784\uc2dc\uc800\uc7a5",sub:a||"",category:n,mainimg:i.length>0?i[0].content:{resize:"",url:""}}).then((function(){e&&t("/")}))}),[b,u,m,t]),I=Object(a.useCallback)((function(){var t=m.title,c=m.sub;t?c?T("insert"):e({type:"@config/toast",payload:{isactive:!0,msg:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}}):e({type:"@config/toast",payload:{isactive:!0,msg:"\ud504\ub85c\uc81d\ud2b8\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}})}),[T,e,m]);return Object(a.useEffect)((function(){return"new"===n?Oe.collection("editor").add({timestamp:i,category:s,isopen:!1,title:"\uc784\uc2dc\uc800\uc7a5",mainimg:{url:"",resize:""}}).then((function(t){f({type:"RESET"}),e({type:"@layouts/INIT_KEY",payload:t.id})})).catch((function(e){console.log(e)})):(Oe.collection("editor").doc(o).get().then((function(t){var c=t.data();f({type:"INIT",info:{title:c.title,sub:c.sub,category:c.category}}),e({type:"@layouts/CHANGE_EDITOR",payload:c.template})})),e({type:"@layouts/INIT_KEY",payload:o})),function(){}}),[e,s,o,n,i]),Object(a.useEffect)((function(){return function(){e({type:"@layouts/RESET"})}}),[e]),Object(j.jsxs)(J.a,{onBeforeunload:function(e){T(),e.preventDefault()},children:[Object(j.jsx)(y,{type:"editor",__insert:I,setIsLook:k}),Object(j.jsx)(se,{children:Object(j.jsxs)("div",{className:"editor",children:[Object(j.jsx)($,{category:m.category,dispatch:f,info:m}),Object(j.jsxs)("div",{className:"editor-wrapper",children:[Object(j.jsx)(_,{setIsUp:h,temKey:b,category:s}),Object(j.jsx)(K,{temKey:b,Fstore:Oe,Fstorage:me,__update:T})]}),Object(j.jsx)(V,{isUp:v,setIsUp:h,temKey:b})]})}),Object(j.jsx)(pe,{isLook:w,title:m.title,sub:m.sub,category:m.category,template:u}),Object(j.jsx)(ie,{})]})};c(103);var xe=function(){var e=Object(r.c)(),t=Object(r.d)((function(e){return e.config.toast})),c=t.isactive,n=t.msg,i=Object(a.useState)(!1),s=Object(l.a)(i,2),o=s[0],d=s[1];return Object(a.useEffect)((function(){return c&&(d(!0),setTimeout((function(){d(!1)}),2e3),setTimeout((function(){e({type:"@config/toast",payload:{isactive:!1,msg:""}})}),3e3)),function(){}}),[c,e]),Object(j.jsx)("div",{className:"toast ".concat(o?"toast-active":""),children:Object(j.jsx)("div",{className:"msg",children:n})})};var ge=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)(v.a,{children:[Object(j.jsx)(y,{isLogin:c,type:"all"}),Object(j.jsx)(d.c,{children:c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{path:"/*",exact:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(d.a,{path:"/editor/*",exact:!0,element:Object(j.jsx)(fe,{})})]}):Object(j.jsx)(d.a,{path:"/",exact:!0,element:Object(j.jsx)(h,{setIsLogin:n})})}),Object(j.jsx)(xe,{})]})},ve={identification:{version:"0.0.1",productionPath:"production",agent:"desktop"},isLoading:!1,toast:{isactive:!1,msg:""}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case"@config/SET_AGENT":return Object(N.a)(Object(N.a)({},e),{},{identification:Object(N.a)(Object(N.a)({},e.identification),{},{agent:a})});case"@config/isLoading":return Object(N.a)(Object(N.a)({},e),{},{isLoading:a});case"@config/toast":return Object(N.a)(Object(N.a)({},e),{},{toast:a});default:return e}},ye={key:void 0,editor:[{type:"TITLE",content:"",id:"title-".concat((new Date).getTime()-Math.floor(100*Math.random())+1)}],focusIdx:0,videolist:[],deletelist:[]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.idx,n=t.payload,i=t.index;switch(c){case"@layouts/INIT_KEY":return Object(N.a)(Object(N.a)({},e),{},{key:n});case"@layouts/INIT_DELETELIST":var s=e.deletelist;return s.push(n),Object(N.a)(Object(N.a)({},e),{},{deletelist:Object(A.a)(s)});case"@layouts/RESET":return e.videolist=[],Object(N.a)(Object(N.a)({},e),{},{editor:[{type:"TITLE",content:"",id:"title-".concat((new Date).getTime()-Math.floor(100*Math.random())+1)}]});case"@layouts/CHANGE_FOCUS":return Object(N.a)(Object(N.a)({},e),{},{focusIdx:n});case"@layouts/CHANGE_EDITOR":return Object(N.a)(Object(N.a)({},e),{},{editor:n});case"@layouts/CHANGE_TITLE":var r=e.editor;return r[a].content=n,Object(N.a)(Object(N.a)({},e),{},{editor:Object(A.a)(r)});case"@layouts/CHANGE_IMAGE":var o=e.editor;return o[a].content[i]=n,Object(N.a)(Object(N.a)({},e),{},{editor:Object(A.a)(o)});default:return e}},Ee={tempo:[{type:"CONTENT",content:""}],editor:{bold:!1,color:void 0,align:"left",underline:!1,size:15,drag:void 0},post:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload,n=t.index;switch(c){case"@test/DRAG_ELEMENT":return Object(N.a)(Object(N.a)({},e),{},{editor:Object(N.a)(Object(N.a)({},e.editor),{},{drag:a})});case"@test/CHANGE_SIZE":return Object(N.a)(Object(N.a)({},e),{},{editor:Object(N.a)(Object(N.a)({},e.editor),{},{size:a})});case"@test/CHANGE_UNDER":return Object(N.a)(Object(N.a)({},e),{},{editor:Object(N.a)(Object(N.a)({},e.editor),{},{underline:a})});case"@test/CHANGE_ALIGN":return Object(N.a)(Object(N.a)({},e),{},{editor:Object(N.a)(Object(N.a)({},e.editor),{},{align:a})});case"@test/CHANGE_COLOR":return Object(N.a)(Object(N.a)({},e),{},{editor:Object(N.a)(Object(N.a)({},e.editor),{},{color:a})});case"@test/CHANGE_BOLD":return Object(N.a)(Object(N.a)({},e),{},{editor:Object(N.a)(Object(N.a)({},e.editor),{},{bold:a})});case"@test/ADD_CONTENT":return Object(N.a)(Object(N.a)({},e),{},{tempo:a});case"@test/UPDATE_CONTENT":var i=Object(A.a)(e.tempo);return i[n].content=a,Object(N.a)(Object(N.a)({},e),{},{tempo:Object(A.a)(i)});case"@test/ADD_REF":var s=Object(A.a)(e.tempo);return s[n].ref=a,Object(N.a)(Object(N.a)({},e),{},{tempo:Object(A.a)(s)});case"@test/DELETE_CONTENT":var r=Object(A.a)(e.tempo);return r.splice(n,1),Object(N.a)(Object(N.a)({},e),{},{tempo:Object(A.a)(r)});case"@test/TESTING":return Object(N.a)(Object(N.a)({},e),{},{post:[].concat(Object(A.a)(e.post),[a])});default:return e}},we=Object(o.c)({config:he,database:Ne,test:Ce}),ke=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))},Te=Object(o.e)(we,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(r.a,{store:Te,children:Object(j.jsx)(ge,{})})}),document.getElementById("root")),ke()},53:function(e,t,c){},74:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.feda98c2.chunk.js.map