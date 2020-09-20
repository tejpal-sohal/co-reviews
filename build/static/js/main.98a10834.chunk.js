(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],{157:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(47),o=a.n(l),i=(a(30),a(2)),c=a(4);var m={responsive:!0,maintainAspectRatio:!1,legend:{display:!0,position:"bottom"},title:{display:!0,text:"Product Ratings"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Number of people"},ticks:{beginAtZero:!0,stepSize:1}}]}},s=[{name:"Katherine Foreman ",email:"Katherine.Foreman@gmail.com",rating:"5",date:"Mon Sep 11 2020",comment:"Good tour around this and good shows like antony and Cleopatra and a midsummer nights dream which had David Tennant in"},{name:"Dawn",email:"Dawn@gmail.com",rating:"5",date:"Tues Sep 12 2020",comment:'Last time we were in London we visited the Globe for a walk round tour, which was absolutely fascinating. Our last trip we ensured our seats at a play to experience the true Shakespeare feel. It was an "audience choice " performance, so until the clapping finished we didnt know what we were going to see. As it turned out, a Comedy of Errors was delightful, albeit a little confusing, our next door neighbours were fabulous and we could not have had a better night. This has to be a MUST especially for overseas visitors.'},{name:"Amy C",email:"Amy@gmail.com",rating:"4",date:"Mon Sep 14 2020",comment:"Great"},{name:"Nicky Young",email:"Nicky.Young@gmail.com",rating:"3",date:"Wed Sep 16 2020",comment:"I love them and the southern style coating is amazing"},{name:"Glenys Stafford",email:"Glenys.Stafford@gmail.com",rating:"4",date:"Thu Sep 17 2020",comment:"After initially finding out they were going to be a day late, they arrived on time."},{name:"Helen Stafford",email:"Helen.Stafford@gmail.com",rating:"4",date:"Thu Sep 17 2020",comment:"Its great they arrived on time."}],u=Object(r.createContext)(),d=function(e){var t=Object(r.useRef)(null),a=t,l=Object(r.useState)(s),o=Object(c.a)(l,2),d=o[0],g=o[1],h=Object(r.useState)(200),b=Object(c.a)(h,2),f=b[0],p=b[1],v=d.filter((function(e){return"1"===e.rating})),E=d.filter((function(e){return"2"===e.rating})),w=d.filter((function(e){return"3"===e.rating})),N=d.filter((function(e){return"4"===e.rating})),y=d.filter((function(e){return"5"===e.rating})),S=["".concat(y.length),"".concat(N.length),"".concat(w.length),"".concat(E.length),"".concat(v.length)],x={charData:{labels:["5\u2605","4\u2605","3\u2605","2\u2605","1\u2605"],datasets:[{label:"People",data:S,backgroundColor:["rgba(12, 17, 66, 0.7)"],borderColor:["rgba(68, 255, 0, 1)"],pointBorderWidth:2.5,pointBackgroundColor:"rgba(68, 255, 0, 1)",pointHoverBorderColor:"rgba(68, 255, 0, 1)",pointHoverBackgroundColor:"rgba(68, 255, 0, 1)",borderWidth:1}]}};return n.a.createElement(u.Provider,{value:{feedback:d,onSubmit:function(e){var t=Object.assign(e,{date:(new Date).toDateString()});g((function(e){return[].concat(Object(i.a)(e),[t])})),a.current.name.value="",a.current.email.value="",a.current.comment.value="",a.current.rating.value="",p(200)},feedbackForm:t,graphSettings:x,graphOptions:m,wordCount:f,SetwordCount:p}},e.children)},g=a(48),h=a.n(g),b=function(){return n.a.createElement("nav",{className:"navbar navbar-light bg-custom"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"https://www.checkout.com/","aria-label":"checkout.com"},n.a.createElement("img",{src:h.a,alt:"logo"}))))},f=a(52),p=function(e){var t=e.title,a=e.wordCount,r=e.SetwordCount,l=e.register,o=e.errors;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"text-area"},t),n.a.createElement("textarea",{onChange:function(e){r(e.target.maxLength-e.target.value.length)},id:"text-area",maxLength:"200",className:"form-control",name:"comment","aria-describedby":"text-area",rows:"3",ref:l({required:"Please enter review"})}),o.comment&&n.a.createElement("small",{className:"text-danger"},o.comment.message),n.a.createElement("small",{className:".text-muted text-right font-italic"}," ",a," ",0!==a?"character max":"characters remaining "," "))},v=function(e){var t=e.title,a=e.register,r=e.errors;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"rating"},t),n.a.createElement("select",{id:"rating",defaultValue:"",className:"form-control",name:"rating","aria-describedby":"rating",ref:a({required:"Please select rating"})},n.a.createElement("option",{disabled:!0,value:""},"select"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5")),r.rating&&n.a.createElement("small",{className:"text-danger"},r.rating.message))},E=function(e){var t=e.title,a=e.type,r=e.htmlFor,l=e.id,o=e.name,i=e.register,c=e.errors,m=e.errorMessage;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:r},t),n.a.createElement("input",{type:a,id:l,className:"form-control",name:o,"aria-describedby":l,ref:i({required:m})}),c[o]&&n.a.createElement("small",{className:"text-danger"},c[o].message))},w=function(e){var t=e.name,a=e.type,r=e.label;return n.a.createElement("button",{"aria-label":r,type:a,className:"btn btn-dark mb-3"},t)};var N=function(){var e=Object(r.useContext)(u),t=e.feedbackForm,a=e.onSubmit,l=e.wordCount,o=e.SetwordCount,i=Object(f.a)(),c=i.register,m=i.handleSubmit,s=i.errors;return n.a.createElement("div",{className:"col-md-6 col-lg-5 bg-light p-4 rounded"},n.a.createElement("form",{ref:t,onSubmit:m(a)},n.a.createElement("h1",{className:"mb-3"},"Product Reviews"),n.a.createElement(E,{title:"Name",register:c,errors:s,htmlFor:"InputName",type:"text",id:"InputName",name:"name",errorMessage:"Please enter name"}),n.a.createElement(E,{title:"Email address",register:c,errors:s,htmlFor:"InputEmail",type:"email",id:"InputEmail",name:"email",errorMessage:"Please enter email address"}),n.a.createElement(v,{title:"Rating",register:c,errors:s}),n.a.createElement(p,{title:"Comment",wordCount:l,SetwordCount:o,register:c,errors:s}),n.a.createElement(w,{name:"Submit",label:"Submit",type:"submit"})))},y=a(49);var S=function(){var e=Object(r.useContext)(u),t=e.graphSettings,a=e.graphOptions;return n.a.createElement("div",{className:"col-md-6 col-lg-7 mb-4 mh-300"},n.a.createElement(y.Line,{data:t.charData,options:a}))},x=a(50),k=a(51);var C=function(e){for(var t=e.stars,a=Object.values(t),r=[],l=0;l<a;l++)r.push(n.a.createElement("i",{key:l}," ",n.a.createElement(x.a,{icon:k.a,size:"xs"})," "));return n.a.createElement("span",null,r)};var O=function(){var e=Object(r.useContext)(u).feedback;return n.a.createElement("div",{className:"col-md-12 mt-4 mb-4"},n.a.createElement("div",{className:"list-group"},n.a.createElement("h2",{className:"mb-5"},"Reviews"),0===e.length?n.a.createElement("small",null,"No reviews "):e.map((function(e,t){return n.a.createElement("div",{key:t,href:"#",className:"list-group-item list-group-item-action"},n.a.createElement("div",{className:"d-flex w-100 justify-content-between"},n.a.createElement("p",{className:"mb-1 lead font-weight-bold"},e.name,n.a.createElement(C,{stars:e.rating})),n.a.createElement("small",{className:"font-italic"},e.date)),n.a.createElement("p",{className:"mb-1"},e.comment),n.a.createElement("small",{className:"font-italic"},e.email))})).reverse()))},j=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"text-light"},"Product Reviews")))};var F=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement(d,null,n.a.createElement(N,null),n.a.createElement(S,null),n.a.createElement(O,null)))),n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/logo.791288ec.svg"},53:function(e,t,a){e.exports=a(157)}},[[53,1,2]]]);
//# sourceMappingURL=main.98a10834.chunk.js.map