(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),c=a.n(o),i=(a(57),a(51)),l=(a(58),a(59),a(60),a(45)),s=a.n(l),m=function(){return r.a.createElement("div",{className:"GridContainer"},r.a.createElement("img",{className:"grid-image",src:s.a,alt:"profile pic"}),r.a.createElement("span",{className:"grid-item-1"},"M Manoj"),r.a.createElement("div",{className:"grid-item-2"},r.a.createElement("p",null,"Uid : 00012"),r.a.createElement("p",null,"Role: Developer")))},u=function(e){var t=["Overview","Profile","Calender","Attendance","Documents","Compensation","Support"].map(function(t,a){return r.a.createElement("li",{className:"NavButton",onClick:function(){return e.changeContent(a)}},t)});return r.a.createElement("div",{className:"NavBar"},r.a.createElement(m,null),r.a.createElement("ul",null,r.a.createElement("hr",{className:"gap"}),t))},d=a(4),h=a(5),g=a(7),v=a(6),p=a(8),f=(a(61),a(62),function(e){var t="";return t="1"===e.height?"ContentCardHalf":"ContentCardFull",r.a.createElement("div",{className:t},r.a.createElement("div",{className:"ContentTitle"},e.title),r.a.createElement("div",{className:"InnerContainer"},e.children))}),b=(a(63),a(46)),E=a.n(b),k=a(47),w=a.n(k),C=a(48),N=a.n(C),T=a(49),O=a.n(T),y=function(e){var t,a;switch(e.imagename){case"tickmark":t=E.a,a={color:"green"};break;case"clock":t=w.a,a={color:"rgb(235, 223, 61)"};break;case"Assigned":t=N.a,a={color:"rgb(34, 154, 214)"};break;case"Pending":t=O.a,a={color:"rgb(221, 67, 232)"};break;default:console.log("Image location not found")}return r.a.createElement("div",{className:"ProjectCard"},r.a.createElement("div",{className:"ProStatus"},r.a.createElement("div",{className:"ColoredNumber",style:a},e.value),r.a.createElement("div",{className:"Protitle"},"Number of Projects ",e.title)),r.a.createElement("div",{className:"StatusImage"},r.a.createElement("img",{src:t,alt:"icon"})))},j=(a(64),function(e){var t=[{name:"Assigned",image:"Assigned",value:"42"},{name:"Completed",image:"tickmark",value:"15"},{name:"in Process",image:"clock",value:"12"},{name:"Pending",image:"Pending",value:"15"}].map(function(e){return r.a.createElement(y,{title:e.name,imagename:e.image,value:e.value})});return r.a.createElement("div",{className:"ProjectDetails"},t)}),S=(a(65),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0,clockInTime:"00:00:00",clockOutTime:"00:00:00"},a.startTimer=function(){a.showClockin(),a.setState({timerOn:!0,timerTime:a.state.timerTime,timerStart:Date.now()-a.state.timerTime}),a.timer=setInterval(function(){a.setState({timerTime:Date.now()-a.state.timerStart})},10)},a.stopTimer=function(){a.showClockout(),a.setState({timerOn:!1}),clearInterval(a.timer)},a.resetTimer=function(){a.setState({timerStart:0,timerTime:0})},a.addZero=function(e){return e<10&&(e="0"+e),e},a.mytime=function(){var e=new Date;return a.addZero(e.getHours())+":"+a.addZero(e.getMinutes())+":"+a.addZero(e.getSeconds())},a.showClockin=function(){a.setState({clockInTime:a.mytime()})},a.showClockout=function(){a.setState({clockOutTime:a.mytime()})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.timerTime,t=("0"+Math.floor(e/1e3)%60).slice(-2),a=("0"+Math.floor(e/6e4)%60).slice(-2),n=("0"+Math.floor(e/36e5)).slice(-2);return r.a.createElement("div",{className:"StopwatchContainer"},r.a.createElement("div",{className:"Stopwatch"},r.a.createElement("div",{className:"Stopwatch-header"},r.a.createElement("p",null,(new Date).toLocaleDateString(void 0,{weekday:"long"}).toUpperCase()),r.a.createElement("p",null,(new Date).toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}))),r.a.createElement("div",{className:"Stopwatch-display"},n," : ",a," : ",t),r.a.createElement("p",null,"Total Work Time"),!1===this.state.timerOn&&0===this.state.timerTime&&r.a.createElement("button",{onClick:this.startTimer},"Clock in"),!0===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement("button",{onClick:this.stopTimer},"Clock out")),r.a.createElement("div",{className:"ClockTime"},r.a.createElement("p",null,"clockInTime : "),r.a.createElement("p",{className:"timeColoring"},this.state.clockInTime),r.a.createElement("p",null,"clockOutTime : "),r.a.createElement("p",{className:"timeColoring"},this.state.clockOutTime)))}}]),t}(n.Component)),A=a(27),D=a(50),M=(a(165),a(11)),Z=a.n(M),B={labels:["January","February","March","April","May","June","July","August"],datasets:[{label:"Work time in hours",backgroundColor:"rgba(25,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,80,50]}]},F=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState(B)}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){for(var t=e.state.datasets[0],a=[],n=0;n<e.state.labels.length;n++)a.push(Math.floor(51*Math.random())+50);var r=Object(A.a)({},t);r.data=a,r.backgroundColor=Z()(),r.borderColor=Z()(),r.hoverBackgroundColor=Z()(),r.hoverBorderColor=Z()();var o=Object(A.a)({},B,{datasets:[r]});e.setState(o)},5e3)}},{key:"render",value:function(){return r.a.createElement(D.Bar,{data:this.state,options:{objectFit:"contain",maintainAspectRatio:!1}})}}]),t}(n.Component),P=function(){return r.a.createElement("div",{className:"CContainer"},r.a.createElement(F,null))},x=function(){return r.a.createElement("div",{className:"OverviewContentBox"},r.a.createElement(f,{title:"Work Log",height:"1"},r.a.createElement(S,null)),r.a.createElement(f,{title:"Work Time Statistics",height:"1"},r.a.createElement(P,null)),r.a.createElement(j,null),r.a.createElement(f,{title:"Schedule",height:"0"},r.a.createElement("div",{style:{position:"absolute",top:"34px",width:"100%",height:"100%"}},r.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23d5d5d5&ctz=Asia%2FKolkata&showCalendars=1&showTabs=1&showPrint=0&showTitle=0&src=ZDZpcjA4Z3E3bTVobmtvMjEzNDB0ODFsMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&&mode=AGENDA",style:{border:0},width:"100%",height:"100%",overFlow:"scroll",frameborder:"0",scrolling:"yes"}))))},I=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e;switch(console.log("got index as "+this.props.NavValue),this.props.NavValue){case 0:e=r.a.createElement(x,null);break;case 2:e=r.a.createElement("div",{className:"Calender"},r.a.createElement("div",{class:"responsive-iframe-container big-container"},r.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23d5d5d5&ctz=Asia%2FKolkata&showCalendars=1&showTabs=1&showPrint=0&showTitle=1&src=ZDZpcjA4Z3E3bTVobmtvMjEzNDB0ODFsMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&title=Schedule%20Your%20Meetings%20Here",style:{border:"solid 1px #777"},width:"800",title:"Scheduler",height:"600",frameborder:"0",scrolling:"yes"})),r.a.createElement("div",{class:"responsive-iframe-container small-container"},r.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=800&wkst=1&bgcolor=%23db694f&src=8m2gergpnwapfiht0384htn554%40group.calendar.google.com&color=%23B1440E&ctz=America%2FLos_Angeles",style:{borderWidth:0},width:"100%",title:"Calender",height:"600",frameborder:"0",scrolling:"no"})));break;default:e=r.a.createElement("p",null,"Page under Construction")}return r.a.createElement("div",{className:"ContentBox"},e)}}]),t}(r.a.Component);var W=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u,{changeContent:function(e){console.log("Entered change content card"+e),o(e)}}),r.a.createElement(I,{NavValue:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},45:function(e,t,a){e.exports=a.p+"static/media/avatar.fc047347.png"},46:function(e,t,a){e.exports=a.p+"static/media/WCheckmark.2b8fd602.svg"},47:function(e,t,a){e.exports=a.p+"static/media/clock.28b7a594.svg"},48:function(e,t,a){e.exports=a.p+"static/media/Assigned.6aaf5764.svg"},49:function(e,t,a){e.exports=a.p+"static/media/Pending.da5e1feb.svg"},52:function(e,t,a){e.exports=a(166)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.a74cfa18.chunk.js.map