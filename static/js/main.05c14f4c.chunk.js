(this["webpackJsonpsocial-media-post-creator"]=this["webpackJsonpsocial-media-post-creator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(7),i=a.n(s),r=(a(14),a(15),a(1)),j=a(3),l=a(0),o=Object(n.createContext)(),u=function(e){var t=e.children,a=Object(n.useState)({imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2380&amp;q=80",name:"Adem",mention:"@ademalkan",isCertified:"yes",postText:"just setting up my twttr",time:"14:47 PM",date:"Nov 11, 2021",likeAmount:"145.1K",commentAmount:"124.4K"}),c=Object(j.a)(a,2),s=c[0],i=c[1];return Object(l.jsx)(o.Provider,{value:{data:s,setData:i},children:t})},d=function(){return Object(n.useContext)(o)};var b=function(){var e=d(),t=e.data,a=e.setData;return Object(l.jsxs)("div",{className:"fakeTweetGenerator",children:[Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"IMG URL"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{imgUrl:e.target.value}))},defaultValue:t.imgUrl})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Name"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{name:e.target.value}))},defaultValue:t.name})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Mention"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{mention:e.target.value}))},defaultValue:t.mention})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Is Certified"}),Object(l.jsx)("div",{children:"( yes or no )"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{isCertified:e.target.value}))},defaultValue:t.isCertified})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Post Text"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{postText:e.target.value}))},defaultValue:t.postText})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Time"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{time:e.target.value}))},defaultValue:t.time})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Date"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{date:e.target.value}))},defaultValue:t.date})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Like Amount"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{likeAmount:e.target.value}))},defaultValue:t.likeAmount})]}),Object(l.jsxs)("div",{className:"fakeTweetGeneratorOptions",children:[Object(l.jsx)("h4",{children:"Comment Amount"}),Object(l.jsx)("input",{onChange:function(e){return a(Object(r.a)(Object(r.a)({},t),{},{commentAmount:e.target.value}))},defaultValue:t.commentAmount})]})]})};var m=function(){var e=d().data;return Object(l.jsxs)("div",{className:"tweetBox",children:[Object(l.jsxs)("div",{className:"tweetHead",children:[Object(l.jsxs)("div",{className:"tweetUserProfile",children:[Object(l.jsx)("img",{src:e.imgUrl,alt:"User"}),Object(l.jsxs)("div",{className:"tweetUserNameBox",children:[Object(l.jsxs)("div",{className:"tweetUserName",children:[e.name," ","yes"===e.isCertified?Object(l.jsx)("i",{className:"fas fa-badge-check"}):null]}),Object(l.jsx)("div",{className:"tweetUserNickName",children:e.mention})]})]}),Object(l.jsx)("div",{className:"tweetLogo",children:Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/tr/f/f2/Twitter-bird-light-bgs.png",alt:"twitter"})})]}),Object(l.jsxs)("div",{className:"tweetBody",children:[Object(l.jsx)("div",{className:"tweetText",children:Object(l.jsx)("p",{children:e.postText})}),Object(l.jsxs)("div",{className:"tweetDateInformation",children:[Object(l.jsx)("div",{className:"tweetClock",children:e.time}),Object(l.jsx)("div",{className:"tweetDate",children:e.date})]})]}),Object(l.jsxs)("div",{className:"tweetFooter",children:[Object(l.jsxs)("div",{className:"tweetLike",children:[Object(l.jsx)("i",{className:"fal fa-heart"})," ",e.likeAmount]}),Object(l.jsxs)("div",{className:"tweetComment",children:[Object(l.jsx)("i",{className:"fal fa-comment"})," ",e.commentAmount]})]})]})},O=a(9);var f=function(e){var t=e.onclick,a=Object(n.useState)(),c=Object(j.a)(a,2),s=c[0],i=c[1];return Object(l.jsxs)("div",{className:"tweetBuyBox ",children:[Object(l.jsxs)("div",{className:"tweetBuyBoxHeader",children:[Object(l.jsx)("h2",{children:"Want to buy this tweet?"}),s>0?Object(l.jsxs)("p",{children:["Your offer is $",s]}):Object(l.jsx)("p",{children:"Please your offer"})]}),Object(l.jsxs)("div",{className:"tweetBuyBoxContent",children:[Object(l.jsx)("input",{name:"numberBox",type:"number",onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("input",{type:"button",value:"OFFER",onClick:t})]})]})},x=a(8);var h=function(){var e=d().data,t=Object(x.useState)([{user:"@john",offer:5e5},{user:"@cybill",offer:48e4},{user:"@kipling",offer:45e4},{user:"@evaline",offer:42e4},{user:"@kimmy",offer:4e5},{user:"@frankie",offer:39e4},{user:"@stacia",offer:36e4},{user:"@denise",offer:32e4},{user:"@mindy",offer:26e4}]),a=Object(j.a)(t,2),n=a[0],c=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{onclick:function(){var t=parseInt(document.querySelector('[name="numberBox"]').value);c((function(a){return[].concat(Object(O.a)(a),[{user:e.name,offer:t}]).sort((function(e,t){return t.offer-e.offer}))}))}}),Object(l.jsxs)("div",{className:"tweetBuyBoxHeader",children:[Object(l.jsx)("h2",{children:" All Offers "}),Object(l.jsx)("ul",{className:"offerList",children:n.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("span",{className:"mention",children:[" ",e.user," "]}),"$",e.offer]},t)}))})]})]})};var v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(u,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"fakeTweet",children:[Object(l.jsx)(m,{}),Object(l.jsx)(h,{})]})]})})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.05c14f4c.chunk.js.map