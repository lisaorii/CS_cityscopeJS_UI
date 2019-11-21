(this.webpackJsonpcityscopejs_radar=this.webpackJsonpcityscopejs_radar||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},118:function(e,t){},120:function(e,t){},183:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(76),i=a.n(o),c=a(79),l=a(18),s=a(19),m=a(21),u=a(20),d=a(22),h=a(12),f=(a(106),a(107),[0,1]),p=[{name:"amazing city",domain:f},{name:"validated innovation",domain:f},{name:"predicted urban happiness",domain:f},{name:"mix-use in heaven",domain:f},{name:"cool buildings",domain:f},{name:"fun crime levels",domain:f},{name:"success to all",domain:f},{name:"happy agents",domain:f},{name:"parking bliss",domain:f},{name:"deep swarm chains",domain:f}],b={};for(var v in p)b[p[v].name]=Math.random()*p[v].domain[1];function g(){var e={};for(var t in p)e[p[t].name]=Math.random()*p[t].domain[1];return[e,b]}var y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:g(),colorRange:["#fc03ec","#79C7E3"]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.colorRange;return r.a.createElement("div",{className:"Radar"},r.a.createElement("div",{className:"rows"},r.a.createElement("h1",null,"Radar\u2122"),r.a.createElement("div",{className:"radarText"},"This is my radar. There are many like it, but this one is mine. It is my life. I must master it as I must master my life. Without me my radar is useless. Without my radar, I am useless. I must fire my radar true. I must radar better than the enemy who is trying to barchart me. I must radar him before he barchart me. I will. My radar and I know that what counts in science is not the indicators we measure, the noise of our burst, or the smoke we make. We know that it is the parameters that count. We will radar.")),r.a.createElement(h.c,{onValueMouseOver:function(){e.setState({data:g()})},animation:!0,data:a,domains:p,colorRange:n,style:{polygons:{fillOpacity:.2,strokeWidth:2},axes:{text:{opacity:0,fontWeight:500,fill:"white"},strokeWidth:.1},labels:{textAnchor:"middle",fontSize:10,fontWeight:"100",fill:"white"}},margin:{left:100,top:100,bottom:100,right:100},width:450,height:450},r.a.createElement(h.a,{style:{fill:"white",fillOpacity:.1,backgroundColor:"#fff",opacity:.5,stroke:"#333333"},tickValues:Object(c.a)(new Array(10)).map((function(e,t){return t/10-1}))})))}}]),t}(n.Component);a(108);function w(e){for(var t=[],a=0;a<20;a++)t.push({name:e||String(Math.random()).slice(0,3),size:1e3*Math.random(),color:Math.random(),style:{border:"thin solid white"}});return{color:0,children:t}}var O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hoveredNode:!1,treemapData:w(20),useCirclePacking:!1,mode:"circlePack"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t={animation:{damping:15,stiffness:600},data:this.state.treemapData,onLeafMouseOver:function(){e.setState({treemapData:w()})},height:300,width:300,mode:this.state.mode,getLabel:function(e){return e.name},colorRange:["#79C7E3","#fc03ec"],opacity:.9,hideRootNode:!0};return r.a.createElement("div",{className:"TreeMap"},r.a.createElement(h.e,t),r.a.createElement("h1",null,"Not Radar 1"))}}]),t}(r.a.Component),E=a(78);a(109);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=["#79C7E3","#79A7E3","#fc03ec","#7937E3","#a703ec"],C={children:[{children:[{bigness:1,children:[],clr:N[1],name:"energy to love ratio"},{bigness:1,clr:N[2],name:"chart"}],clr:N[3]},{bigness:1,children:[],clr:N[4],name:"cool"}],name:"wow"},M={display:"flex",color:"#fff",background:"#000",alignItems:"center",padding:"10px"},x={height:"5px",width:"5px"};function I(e){var t=e.radius,a=(e.angle+e.angle0)/2;return{x:t*Math.cos(a),y:t*Math.sin(a)}}var W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hoveredCell:!1,hoverdName:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.hoveredCell,n=t.hoverdName;return r.a.createElement("div",{className:"SunburstWithTooltips"},r.a.createElement(h.d,{data:C,style:{stroke:"#fff"},onValueMouseOver:function(t){e.setState({hoveredCell:!(!t.x||!t.y)&&t,hoverdName:t.name})},onValueMouseOut:function(t){return e.setState({hoveredCell:!1,hoverdName:null})},height:200,width:200,margin:{top:10,bottom:10,left:10,right:10},getLabel:function(e){return e.name},getSize:function(e){return e.bigness},getColor:function(e){return e.clr},padAngle:function(){return.01}},a?r.a.createElement(h.b,{value:I(a)},r.a.createElement("div",{style:M},r.a.createElement("div",{style:k({},x,{background:a.clr})}),n)):null),r.a.createElement("h1",null,"Not Radar 2"))}}]),t}(r.a.Component),P=(a(110),function(){return r.a.createElement("div",{className:"rows"},r.a.createElement(y,null),r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(W,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111).publish("build",(function(e){})),i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(183)}},[[82,1,2]]]);
//# sourceMappingURL=main.5358149c.chunk.js.map