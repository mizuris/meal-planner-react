(this["webpackJsonpcookbook-app"]=this["webpackJsonpcookbook-app"]||[]).push([[0],{114:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=(n(114),n(17)),o=n(165),s=n.p+"static/media/cookbook_icon_white.5e314e67.png",l=n(201),j=n(3),u=Object(o.a)((function(){return{appLoader:{width:"100%",minHeight:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgb(0, 175, 170)"},logo:{maxWidth:200}}}));var b=function(){var e=u();return Object(j.jsx)(l.a.div,{transition:{delay:3,duration:.5},initial:{y:0},animate:{y:"-100%"},className:e.appLoader,children:Object(j.jsx)(l.a.img,{animate:{scale:[1,1.5,1.5,1,1],rotate:[0,0,360,360,0]},transition:{duration:2,repeat:1/0,repeatDelay:1},className:e.logo,src:s,alt:"app logo"})})},d=n(178),O=n(179),p=n(172),x=n(96),m=n.n(x),f=n(104),h=n(171),g=n(173),v=n(174),y=n(175),k=n(176);var E=function(e){var t=e.anchorEl,n=e.handleCloseMenu;return Object(j.jsxs)(f.a,{id:"menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:n,children:[Object(j.jsx)(h.a,{onClick:n,children:Object(j.jsx)(p.a,{color:"inherit",rel:"noopener",target:"_blank",children:Object(j.jsx)(g.a,{})})}),Object(j.jsx)(h.a,{onClick:n,children:Object(j.jsx)(p.a,{href:"https://www.facebook.com/piotr.bator.33/",color:"inherit",rel:"noopener",target:"_blank",children:Object(j.jsx)(v.a,{})})}),Object(j.jsx)(h.a,{onClick:n,children:Object(j.jsx)(p.a,{href:"https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/",color:"inherit",rel:"noopener",target:"_blank",children:Object(j.jsx)(y.a,{})})}),Object(j.jsx)(h.a,{onClick:n,children:Object(j.jsx)(p.a,{href:"https://github.com/mizuris/meal-planner-react",color:"inherit",rel:"noopener",target:"_blank",children:Object(j.jsx)(k.a,{})})})]})},C=n(53);var S=function(){return Object(j.jsx)(l.a.div,{initial:{scale:0},animate:{scale:1},transition:{duration:1},children:Object(j.jsx)(p.a,{onClick:function(){return C.animateScroll.scrollToTop()},children:Object(j.jsx)("img",{style:{maxHeight:40},src:s,alt:"cookbook logo"})})})},N=n(177),w=n(68),R=n.n(w),_=Object(o.a)((function(){return{fabButton:{position:"absolute",zIndex:1,bottom:-15,left:0,right:0,margin:"0 auto"}}}));var T=function(){var e=_();return Object(j.jsx)(C.Link,{to:"favorites-list",smooth:!0,children:Object(j.jsx)(N.a,{component:l.a.button,initial:{scale:0},animate:{scale:1,rotate:720},transition:{duration:1},size:"medium",color:"secondary","aria-label":"add",className:e.fabButton,children:Object(j.jsx)(R.a,{})})})},F=Object(o.a)((function(){return{appBar:{bottom:"auto",top:0,background:"linear-gradient(90deg, rgb(0,175,170) 0%, rgb(0,130,160) 100%)"},toolbar:{width:"90%",margin:"0 auto"},grow:{flexGrow:1}}}));var I=function(){var e=F(),t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(j.jsx)(d.a,{position:"fixed",className:e.appBar,children:Object(j.jsxs)(O.a,{className:e.toolbar,children:[Object(j.jsx)(S,{}),Object(j.jsx)(T,{}),Object(j.jsx)("div",{className:e.grow}),Object(j.jsx)(p.a,{edge:"end",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(e){return c(e.target)},children:Object(j.jsx)(m.a,{})}),Object(j.jsx)(E,{anchorEl:r,handleCloseMenu:function(){return c(null)}})]})})},B=n(14),z=n(20),L=n(60),D=n.n(L),M=n(82),A=n(19),V=n(180),P=n(202),W=n(181);var H=function(e){var t=e.changeLoadingState,n=Object(A.b)(),r=Object(a.useState)(!0),c=Object(i.a)(r,2),o=c[0],s=c[1],u=Object(a.useState)({text:"",number:""}),b=Object(i.a)(u,2),d=b[0],O=b[1],p=function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x();case 3:O({text:"",number:""});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(M.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=".concat("03cd92c0fdba48e6a820e4ac39586c95","&query=").concat(d.text,"&number=").concat(d.number,"&addRecipeInformation=true")).then((function(e){if(!e.ok)throw t(!1),Error("Something went wrong");return e.json()})).then((function(e){return n({type:"GET_RECIPES",payload:e.results})})).catch((function(e){return n({type:"CREATE_ERROR",payload:e})}));case 3:t(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d.text&&d.number?s(!1):s(!0)}),[o,d]),Object(j.jsx)(l.a.div,{initial:{y:"-100%"},animate:{y:0},transition:{duration:1},children:Object(j.jsx)("form",{style:{marginBottom:"5%"},onSubmit:p,children:Object(j.jsxs)(V.a,{container:!0,spacing:4,alignItems:"flex-end",children:[Object(j.jsx)(V.a,{item:!0,xs:12,sm:9,children:Object(j.jsx)(P.a,{fullWidth:!0,label:"Search recipes",type:"text",name:"text",value:d.text,onChange:function(e){return O(Object(z.a)(Object(z.a)({},d),{},Object(B.a)({},e.target.name,e.target.value)))}})}),Object(j.jsx)(V.a,{item:!0,xs:12,sm:2,children:Object(j.jsx)(P.a,{fullWidth:!0,label:"Quantity",type:"number",name:"number",pattern:"[0-9]*",inputProps:{min:1,max:20},value:d.number,onChange:function(e){return O(Object(z.a)(Object(z.a)({},d),{},Object(B.a)({},e.target.name,e.target.value)))}})}),Object(j.jsx)(V.a,{item:!0,xs:12,sm:1,children:Object(j.jsx)(W.a,{fullWidth:!0,disabled:o,variant:"contained",color:"secondary",type:"submit",children:"Find"})})]})})})},G=Object(o.a)((function(){return{sectionHeader:{margin:"3rem auto 2rem"}}}));var J=function(e){var t=e.text,n=e.control,a=G(),r=Object(A.c)((function(e){return e.recipes})),c=Object(A.c)((function(e){return e.favorites}));return(n="recipes"===n?r:c)&&n.length?Object(j.jsx)(l.a.h1,{className:a.sectionHeader,initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:t}):null},U=n(182),Y=Object(o.a)((function(){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},spinner:{color:"rgb(0, 175, 170)"}}}));var q=function(){var e=Y();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(U.a,{className:e.spinner})})},K=n(192),Q=n(188),X=n(193),Z=n(183),$=Object(o.a)((function(e){return{header:{marginTop:e.spacing(3),marginBottom:e.spacing(1),fontFamily:"Montserrat"}}}));var ee=function(e){var t=e.title,n=$();return Object(j.jsx)(Z.a,{title:Object(j.jsx)("h6",{className:n.header,children:t})})},te=n(184),ne=Object(o.a)((function(){return{media:{height:0,paddingTop:"56.25%"}}}));var ae=function(e){var t=e.image,n=ne();return Object(j.jsx)(te.a,{className:n.media,image:t})};var re=function(e){var t=e.recipe,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(A.c)((function(e){return e.favorites})),l=Object(A.b)(),u=s.some((function(e){return e.id===t.id}));return Object(a.useEffect)((function(){return o(u)}),[u]),Object(j.jsx)(p.a,{onClick:function(){l(u?{type:"REMOVE_FROM_FAVORITES",payload:t.id}:{type:"ADD_TO_FAVORITES",payload:t})},"aria-label":"add to favorites",children:Object(j.jsx)(R.a,{fontSize:"small",color:c?"secondary":"inherit"})})},ce=n(185),ie=n(98),oe=n.n(ie);var se=function(e){var t=e.sourceUrl;return Object(j.jsx)(p.a,{"aria-label":"share",children:Object(j.jsx)(ce.a,{href:t,target:"_blank",rel:"noopener",color:"inherit",children:Object(j.jsx)(oe.a,{fontSize:"small"})})})},le=n(5),je=n(99),ue=n.n(je),be=Object(o.a)((function(e){return{expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));var de=function(e){var t=e.expanded,n=e.handleExpand,a=be();return Object(j.jsx)(p.a,{className:Object(le.a)(a.expand,Object(B.a)({},a.expandOpen,t)),onClick:n,"aria-expanded":t,"aria-label":"show more",children:Object(j.jsx)(ue.a,{})})},Oe=n(187),pe=n(191),xe=n(37),me=n(189),fe=n(190),he=Object(o.a)((function(e){return{list:{padding:e.spacing(1)},listBlock:{marginBottom:e.spacing(1),fontSize:"0.8rem"}}}));var ge=function(e){var t=e.instructions,n=he();return Object(j.jsx)("ol",{className:n.list,children:t.length?t[0].steps.map((function(e){return Object(j.jsx)("li",{className:n.listBlock,children:e.step},e.number)})):""})},ve=Object(o.a)((function(e){return{sectionDivider:{fontWeight:"bold",marginTop:e.spacing(2),marginBottom:e.spacing(2)},description:{fontFamily:"Montserrat, sans-serif",fontSize:"0.8rem"}}}));var ye=function(e){var t=e.summary,n=ve();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(xe.a,{className:n.sectionDivider,children:"Description:"}),Object(j.jsx)(xe.a,{className:n.description,paragraph:!0,variant:"body1",dangerouslySetInnerHTML:{__html:t}})]})},ke=n(186),Ee=Object(o.a)((function(){return{container:{width:"100%",textAlign:"center"}}}));var Ce=function(e){var t=e.closeCollapse,n=e.id,a=Ee();return Object(j.jsx)(C.Link,{to:n,smooth:!0,children:Object(j.jsx)("div",{className:a.container,children:Object(j.jsxs)(p.a,{size:"medium",onClick:t,children:[Object(j.jsx)(xe.a,{variant:"button",children:"Back to top"}),Object(j.jsx)(ke.a,{})]})})})},Se=n(204),Ne=n(100),we=n.n(Ne),Re=n(101),_e=n.n(Re),Te=Object(o.a)((function(){return{root:{width:"100%",background:"linear-gradient(90deg, rgb(0,175,170) 0%, rgb(0,130,160) 100%)"}}}));var Fe=function(e){var t=Te();return Object(j.jsx)(Se.a,{className:t.root,label:e.label,size:"small",icon:e.type?Object(j.jsx)(we.a,{}):Object(j.jsx)(_e.a,{}),color:"primary",clickable:e.type,disabled:!e.type})},Ie=Object(o.a)((function(){return{root:{margin:"1.5rem 0"}}}));var Be=function(e){var t=e.recipe,n=Ie(),a=t.vegetarian,r=t.vegan,c=t.dairyFree,i=t.glutenFree;return Object(j.jsxs)(V.a,{className:n.root,container:!0,spacing:1,children:[Object(j.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(Fe,{label:"Vegetarian",type:a})}),Object(j.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(Fe,{label:"Dairy free",type:c})}),Object(j.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(Fe,{label:"Gluten free",type:i})}),Object(j.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(Fe,{label:"Vegan",type:r})})]})},ze=Object(o.a)((function(e){return{icon:{marginRight:e.spacing(1),maxWidth:16},actionField:{justifyContent:"flex-end"},sectionDivider:{fontWeight:"bold",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}));var Le=function(e){var t=e.recipe,n=e.closeCollapse,a=ze(),r=t.readyInMinutes,c=t.aggregateLikes,i=t.summary,o=t.analyzedInstructions;return Object(j.jsxs)(Oe.a,{children:[Object(j.jsxs)(Q.a,{className:a.actionField,children:[Object(j.jsxs)(p.a,{size:"small","aria-label":"time to preapre deal",children:[Object(j.jsx)(me.a,{className:a.icon,fontSize:"small"})," ",r]}),Object(j.jsxs)(p.a,{size:"small","aria-label":"share",children:[Object(j.jsx)(fe.a,{className:a.icon,fontSize:"small"})," ",c]})]}),Object(j.jsx)(Be,{recipe:t}),Object(j.jsx)(ye,{summary:i}),Object(j.jsx)(pe.a,{}),Object(j.jsx)(xe.a,{className:a.sectionDivider,children:"Preparation:"}),Object(j.jsx)(ge,{instructions:o}),Object(j.jsx)(Ce,{id:t.id,closeCollapse:n})]})},De=n(69),Me=n.n(De),Ae=Object(o.a)((function(){return{closeButton:{position:"absolute",top:0,right:0}}}));var Ve=function(e){var t=e.id,n=Object(A.b)(),a=Ae();return Object(j.jsx)(p.a,{className:a.closeButton,onClick:function(){return n({type:"REJECT_RECIPE",payload:t})},children:Object(j.jsx)(Me.a,{})})},Pe=Object(o.a)((function(){return{root:{position:"relative"}}}));var We=function(e){var t=e.recipe,n=Pe(),r=Object(a.useState)(!1),c=Object(i.a)(r,2),o=c[0],s=c[1],l=function(){s(!o)};return Object(j.jsxs)(K.a,{className:n.root,raised:o,id:t.id,children:[Object(j.jsx)(ee,{title:t.title}),Object(j.jsx)(Ve,{id:t.id}),Object(j.jsx)(ae,{image:t.image}),Object(j.jsxs)(Q.a,{disableSpacing:!0,children:[Object(j.jsx)(re,{recipe:t}),Object(j.jsx)(se,{sourceUrl:t.sourceUrl}),Object(j.jsx)(de,{expanded:o,handleExpand:l})]}),Object(j.jsx)(X.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(j.jsx)(Le,{recipe:t,closeCollapse:l})})]})};var He=function(){var e=Object(A.c)((function(e){return e.recipes})),t={show:function(e){return{scale:1,transition:{delay:.1*e,duration:.5}}}};return Object(j.jsx)(V.a,{container:!0,spacing:4,justify:e.length<3?"center":"space-evenly",children:e.map((function(e,n){return Object(j.jsx)(V.a,{component:l.a.div,layout:!0,custom:n,variants:t,animate:"show",initial:{scale:0},item:!0,xs:12,sm:6,lg:3,children:Object(j.jsx)(We,{recipe:e})},e.id)}))})};var Ge=function(e){var t=e.recipesLoading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(J,{control:"recipes",text:"Your recipes"}),t?Object(j.jsx)(q,{}):Object(j.jsx)(He,{})]})},Je=n(170),Ue=n(134),Ye=n(194),qe=n(205),Ke=n(195),Qe=n(196),Xe=n(197),Ze=n(198),$e=Object(o.a)((function(){return{text:{maxWidth:"40%"},icon:{color:"inherit"}}}));var et=function(e){var t=e.recipe,n=$e(),a=Object(A.b)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Ye.a,{children:Object(j.jsx)(qe.a,{src:t.image,alt:t.title})}),Object(j.jsx)(Ke.a,{className:n.text,primary:t.title,secondary:t.sourceName}),Object(j.jsxs)(Qe.a,{children:[Object(j.jsx)(p.a,{href:t.sourceUrl,rel:"noopener",target:"_blank",children:Object(j.jsx)(Xe.a,{className:n.icon})}),Object(j.jsx)(p.a,{edge:"end","aria-label":"delete",onClick:function(){a({type:"REMOVE_FROM_FAVORITES",payload:t.id})},children:Object(j.jsx)(Ze.a,{className:n.icon})})]})]})},tt=n(203);var nt=function(){var e=Object(A.c)((function(e){return e.favorites}));return Object(j.jsx)(Je.a,{id:"favorites-list",children:Object(j.jsx)(tt.a,{children:e.length&&e.map((function(e){return Object(j.jsx)(Ue.a,{alignItems:"flex-start",divider:!0,component:l.a.div,initial:{x:"-100%"},animate:{x:0},transition:{duration:.3},exit:{opacity:0},children:Object(j.jsx)(et,{recipe:e})},e.id)}))})})};var at=function(e){var t=e.favListRef;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(J,{control:"favorites",text:"Your favorite recipes"}),Object(j.jsx)(nt,{favListRef:t})]})},rt=n(206),ct=n(200),it=n(199),ot=n(102),st=n.n(ot);var lt=function(e){var t=e.message;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{color:"inherit",children:Object(j.jsx)(st.a,{})}),Object(j.jsx)(xe.a,{variant:"button",children:t})]})};var jt=function(e){var t=e.handleClose;return Object(j.jsx)(p.a,{onClick:t,color:"secondary",children:Object(j.jsx)(Me.a,{})})};var ut=function(){var e=Object(A.c)((function(e){return e.error})),t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],o=function(){return c(!1)};return Object(a.useEffect)((function(){return e&&c(!0),function(){return c(!1)}}),[e]),e?Object(j.jsx)(rt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:r,onClose:o,autoHideDuration:4e3,TransitionComponent:ct.a,children:Object(j.jsx)(it.a,{message:Object(j.jsx)(lt,{message:e.message}),action:Object(j.jsx)(jt,{handleClose:o})})}):null},bt=Object(o.a)((function(){return{app:{width:"100%",minHeight:"100%",position:"relative"},appContainer:{width:"80%",paddingTop:80,margin:"0 auto"}}}));var dt=function(){var e=bt(),t=Object(a.useState)(!0),n=Object(i.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){setTimeout((function(){c(!1)}),3500)}),[r]);var o=Object(a.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1];return r?Object(j.jsx)(b,{loadingScreen:r}):Object(j.jsxs)("div",{className:e.app,children:[Object(j.jsx)(I,{}),Object(j.jsxs)("main",{className:e.appContainer,children:[Object(j.jsx)(H,{changeLoadingState:function(e){return u(e)}}),Object(j.jsx)(Ge,{recipesLoading:l}),Object(j.jsx)(at,{})]}),Object(j.jsx)(ut,{})]})},Ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},pt=n(103),xt=n(33),mt={favorites:[],recipes:[],error:null},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITES":var n=e.favorites.some((function(e){return e.id===t.payload.id}));if(n)return;return Object(z.a)(Object(z.a)({},e),{},{favorites:[].concat(Object(xt.a)(e.favorites),[t.payload])});case"REMOVE_FROM_FAVORITES":return Object(z.a)(Object(z.a)({},e),{},{favorites:e.favorites.filter((function(e){return e.id!==t.payload}))});case"GET_RECIPES":return Object(z.a)(Object(z.a)({},e),{},{recipes:t.payload,error:null});case"REJECT_RECIPE":return Object(z.a)(Object(z.a)({},e),{},{recipes:e.recipes.filter((function(e){return e.id!==t.payload}))});case"CREATE_ERROR":return Object(z.a)(Object(z.a)({},e),{},{error:t.payload});default:return e}},ht=Object(pt.a)(ft);c.a.render(Object(j.jsx)(A.a,{store:ht,children:Object(j.jsx)(dt,{})}),document.getElementById("root")),Ot()}},[[132,1,2]]]);
//# sourceMappingURL=main.2063a9c5.chunk.js.map