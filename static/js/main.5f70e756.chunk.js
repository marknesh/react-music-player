(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{58:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),r=c.n(n),s=c(26),i=c.n(s),o=c(10),l=(c(58),c(14)),u=c(44),j=c(21),d=c(18);var b=function(e){var t=e.currentSong,c=e.setIsPlaying,r=e.isPlaying,s=e.songs,i=e.setSongs,b=e.setCurrentSong,h=Object(n.useState)(60),p=Object(o.a)(h,2),O=p[0],m=p[1],f=Object(n.useState)(!1),x=Object(o.a)(f,2),v=x[0],g=x[1],y=Object(n.useState)(O),S=Object(o.a)(y,2),w=S[0],N=S[1],k=Object(n.useState)(!1),C=Object(o.a)(k,2),L=C[0],I=C[1],P=Object(n.useState)(!1),A=Object(o.a)(P,2),M=A[0],E=A[1],D=Object(n.useState)([]),T=Object(o.a)(D,2),G=T[0],W=T[1],z=Object(n.useRef)(null),R=function(e){i(s.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{active:t.id===e.id})})))},U=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},B=function(e){var c=s.findIndex((function(e){return e.id===t.id})),a=0;switch(e){case"skip-forward":a=(c+1)%s.length,R(s[(c+1)%s.length]);break;case"skip-back":a=(s.length-1+c)%s.length,R(s[(s.length-1+c)%s.length]);break;default:a+=1}b(s[a])},F=function(e){r&&z.current.play()},H=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),n=Math.round(c),r=Math.round(a/n*100);K(Object(l.a)(Object(l.a)({},X),{},{currentTime:t,duration:c,animationPercentage:r}))},q=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),J=Object(o.a)(q,2),X=J[0],K=J[1],V={transform:"translateX(".concat(X.animationPercentage,"%)")},Y={track:{transform:"translateX(".concat(X.animationPercentage,"%)")},volume:{transform:"translateX(".concat(O,"%)")}};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:U(X.currentTime)}),Object(a.jsxs)("div",{className:"track",style:{background:"linear-gradient(to right,".concat(t.color[0],",\n                    ").concat(t.color[1],")")},children:[Object(a.jsx)("input",{min:0,onChange:function(e){z.current.currentTime=e.target.value,K(Object(l.a)(Object(l.a)({},X),{},{currentTime:e.target.value}))},max:X.duration||0,value:X.currentTime,type:"range"}),Object(a.jsx)("div",{style:V,className:"animate-track"})]}),Object(a.jsx)("p",{children:X?U(X.duration||0):"0.00"})]}),Object(a.jsxs)("div",{className:"volume",children:[Object(a.jsx)("div",{className:"volume-control",children:Object(a.jsxs)("div",{className:"volume-track",children:[Object(a.jsx)("input",{type:"range",min:0,value:O,onChange:function(e){var t=e.target.value/100;z.current.volume=t,m(e.target.value)},max:100}),Object(a.jsx)("div",{className:"volume-animate",style:Y.volume})]})}),Object(a.jsx)("div",{className:"muteIcon",children:Object(a.jsx)(j.a,{size:"1x",onClick:function(e){if(v){var t=w/100;z.current.volume=t,m(w),g(!1)}else N(O),z.current.volume=0,g(!0),m(0)},icon:v?d.h:d.i})})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(j.a,{onClick:function(){return B("skip-back")},className:"skip-back",size:"2x",icon:d.a}),Object(a.jsx)(j.a,{onClick:function(){r?(c(!1),z.current.pause()):(z.current.play(),c(!0))},className:"play",size:"2x",icon:r?d.e:d.f}),Object(a.jsx)(j.a,{onClick:function(){return B("skip-forward")},className:"sjip-forward",size:"2x",icon:d.b})]}),Object(a.jsxs)("div",{className:"repeat-control",children:[Object(a.jsx)(j.a,{size:"2x",style:M?{color:"red"}:{color:""},className:"repeat",onClick:function(){W([].concat(Object(u.a)(G),[Math.floor(Math.random()*s.length)])),E(!M),I(!1),F()},icon:d.g}),Object(a.jsx)(j.a,{size:"2x",style:L?{color:"red"}:{color:""},className:"repeat",onClick:function(){I(!L),E(!1)},icon:d.c})]}),Object(a.jsx)("audio",{onLoadedMetadata:H,onLoadedData:F,onEnded:function(){if(L){z.current.currentTime=0;var e=s.findIndex((function(e){return e.id===t.id}))%s.length;b(s[e]),R(s[e]),r&&z.current.play()}else if(M)W([].concat(Object(u.a)(G),[Math.floor(Math.random()*s.length)])),G[G.length-1]===G[G.length-2]||G[G.length-1]===G[G.length-3]?(b(s[Math.floor(Math.random()*s.length)]),R(s[Math.floor(Math.random()*s.length)])):(b(s[G[G.length-1]]),R(s[G[G.length-1]])),F();else{var c=(s.findIndex((function(e){return e.id===t.id}))+1)%s.length;b(s[c]),R(s[c])}},onTimeUpdate:H,ref:z,src:t.audio})]})};var h=function(e){var t=e.currentSong,c=e.isPlaying;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{src:t.cover,className:"".concat(c?"song-playing":""),alt:t.name}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},p=c(78);var O=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(p.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(p.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(p.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(p.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(p.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(p.a)(),active:!1},{name:"Creswick",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10454",color:["#B66DB5","#E86F91"],id:Object(p.a)(),active:!1}]};var m=function(e){var t=e.song,c=e.setCurrentSong,n=(e.id,e.songs),r=e.setSongs;return Object(a.jsxs)("div",{className:"library-song ".concat(t.active?"selected":""),onClick:function(){c(t),r(n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{active:e.id===t.id})})))},children:[Object(a.jsx)("img",{src:t.cover,alt:t.name}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})};var f=function(e){var t=e.songs,c=e.setCurrentSong,n=(e.setIsPlaying,e.setSongs),r=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(r?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(m,{song:e,setSongs:n,id:e.id,songs:t,setCurrentSong:c},e.id)}))})]})},x=c(41),v=(c(63),c(65),x.a.initializeApp({apiKey:"AIzaSyAkhOJmLFfIzALRWH581SHHLLyHUn44MW8",authDomain:"music-player-e03cf.firebaseapp.com",databaseURL:"https://music-player-e03cf.firebaseio.com",projectId:"music-player-e03cf",storageBucket:"music-player-e03cf.appspot.com",messagingSenderId:"55089106664",appId:"1:55089106664:web:77d944ef6efec20b89435d",measurementId:"G-WZ5CL9EEYE"})),g=(v.firestore(),v.auth()),y=new x.a.auth.GoogleAuthProvider,S=Object(n.createContext)(),w=function(e){var t=e.children,c=Object(n.useState)(!0),r=Object(o.a)(c,2),s=r[0],i=r[1];Object(n.useEffect)((function(){return g.onAuthStateChanged((function(e){d(e),i(!1)}))}),[]);var l=Object(n.useState)(),u=Object(o.a)(l,2),j=u[0],d=u[1],b={signIn:function(){g.signInWithPopup(y).then((function(e){return d(e.user)}))},user:j,signUp:function(e,t){return g.createUserWithEmailAndPassword(e,t)},login:function(e,t){return g.signInWithEmailAndPassword(e,t)},setUser:d};return Object(a.jsx)(S.Provider,{value:b,children:!s&&t})},N=function(){return Object(n.useContext)(S)};var k=function(e){var t=e.setLibraryStatus,c=e.libraryStatus,n=N().user;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Waves"}),Object(a.jsxs)("button",{className:"but",onClick:function(){return t(!c)},children:[c?"Close ":"Library ",Object(a.jsx)(j.a,{icon:c?d.j:d.d})]}),n&&Object(a.jsx)("button",{className:"but",onClick:function(e){return function(e){e.preventDefault(),g.signOut()}(e)},children:"Logout"})]})},C=c(27),L=c.n(C),I=c(32),P=c(74),A=c(79),M=c(76),E=c(77),D=c(51),T=c(75),G=c(11),W=c(22);var z=function(){var e=N().signIn,t=Object(n.useState)(""),c=Object(o.a)(t,2),r=c[0],s=c[1],i=N().login,l=Object(n.useRef)(),u=Object(n.useRef)(),j=Object(G.f)(),d=Object(n.useState)(!1),b=Object(o.a)(d,2),h=b[0],p=b[1],O=function(){var e=Object(I.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),s(""),e.prev=3,e.next=6,i(l.current.value,u.current.value).then((function(){j.push("/")}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),p(!1),s("incorrect email or password");case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(P.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(a.jsx)("div",{style:{width:"100vw",maxWidth:"400px"},children:Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(A.a,{className:"card",children:Object(a.jsxs)(A.a.Body,{children:[Object(a.jsx)("h1",{className:"text-center mb-4",children:"Login"}),r&&Object(a.jsx)(M.a,{variant:"danger",children:r}),Object(a.jsxs)(E.a,{onSubmit:O,children:[Object(a.jsxs)(E.a.Group,{id:"email",children:[Object(a.jsx)(E.a.Label,{children:"Email"}),Object(a.jsx)(D.a,{ref:l,type:"input",required:!0})]}),Object(a.jsxs)(E.a.Group,{id:"password",children:[Object(a.jsx)(E.a.Label,{children:"Password"}),Object(a.jsx)(D.a,{ref:u,type:"password",required:!0})]}),Object(a.jsx)(T.a,{type:"submit",disabled:h,className:"w-100 mt-2",children:"Login"})]})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-3 ",children:[Object(a.jsxs)("div",{children:[" Need an account? ",Object(a.jsx)(W.b,{to:"/signup",children:"Signup"})]}),Object(a.jsx)(T.a,{className:"mt-4",onClick:e,children:"SIGN IN WITH GOOGLE"})]})]})})})};var R=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=N().signUp,i=Object(n.useRef)(),l=Object(n.useRef)(),u=Object(n.useRef)(),j=Object(n.useState)(!1),d=Object(o.a)(j,2),b=d[0],h=d[1],p=function(){var e=Object(I.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h(!0),r(""),l.current.value===u.current.value){e.next=5;break}return e.abrupt("return",(r("Password do not match"),h(!1)));case 5:return e.prev=5,e.next=8,s(i.current.value,l.current.value).then((function(){g.currentUser.sendEmailVerification()})).catch((function(e){r(e.message),h(!1)}));case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(5),h(!1),r("failed to sign up");case 14:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(P.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(a.jsx)("div",{style:{width:"100vw",maxWidth:"400px"},children:Object(a.jsxs)("div",{className:"signup",children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)(A.a.Body,{children:[Object(a.jsx)("h1",{className:"text-center mb-4",children:"Signup"}),c&&Object(a.jsx)(M.a,{variant:"danger",children:c}),Object(a.jsxs)(E.a,{onSubmit:p,children:[Object(a.jsxs)(E.a.Group,{id:"email",children:[Object(a.jsx)(E.a.Label,{children:"Email"}),Object(a.jsx)(D.a,{ref:i,type:"input",required:!0})]}),Object(a.jsxs)(E.a.Group,{id:"password",children:[Object(a.jsx)(E.a.Label,{children:"Password"}),Object(a.jsx)(D.a,{ref:l,type:"password",required:!0})]}),Object(a.jsxs)(E.a.Group,{id:"password-confirm",children:[Object(a.jsx)(E.a.Label,{children:"Confirm password"}),Object(a.jsx)(D.a,{ref:u,type:"password",required:!0})]}),Object(a.jsx)(T.a,{type:"submit",disabled:b,className:"w-100 mt-2",children:"Signup"})]})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-3",children:["Already have an account? ",Object(a.jsx)(W.c,{to:"/login",children:"Login"})]})]})})})},U=c(34);var B=function(e){var t=e.component,c=Object(U.a)(e,["component"]),n=N().user;return Object(a.jsx)(G.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return n?Object(a.jsx)(G.a,{to:"/"}):Object(a.jsx)(t,Object(l.a)({},e))}}))};var F=function(e){var t=e.children,c=Object(U.a)(e,["children"]),n=N().user;return Object(a.jsx)(G.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return n?[t]:Object(a.jsx)(G.a,{to:"/login"})}}))},H=c(33);var q=function(){var e=Object(n.useState)(O()),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(c[0]),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),p=d[0],m=d[1],x=Object(n.useState)(!1),v=Object(o.a)(x,2),g=v[0],y=v[1];return Object(a.jsx)("div",{className:"app ".concat(g?"library-active":""),children:Object(a.jsx)(W.a,{basename:"/react-music-player",children:Object(a.jsxs)(H.a,{children:[Object(a.jsxs)(F,{path:"/",exact:!0,children:[Object(a.jsx)(k,{libraryStatus:g,setLibraryStatus:y}),Object(a.jsx)(h,{currentSong:l,isPlaying:p}),Object(a.jsx)(b,{currentSong:l,songs:c,setCurrentSong:u,setIsPlaying:m,isPlaying:p,setSongs:r}),Object(a.jsx)(f,{songs:c,libraryStatus:g,setSongs:r,setCurrentSong:u})]}),Object(a.jsx)(B,{path:"/signup",exact:!0,component:R}),Object(a.jsx)(B,{path:"/login",exact:!0,component:z})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{children:Object(a.jsx)(q,{})})}),document.getElementById("root")),J()}},[[71,1,2]]]);
//# sourceMappingURL=main.5f70e756.chunk.js.map