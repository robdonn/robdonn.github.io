(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(55),c=n.n(i),s=(n(71),n(65)),o=n(6),u=n(56),l=n(63),m=n(57),d=n(64),h=n(62),f=r.a.createContext(),w=f.Provider,S=f.Consumer,v=(n(163),function(){return r.a.createElement(S,null,function(e){var t=e.sections,n=e.currentSection,a=e.setCurrentSection,i=e.resetCurrentSection;return r.a.createElement("header",{className:"Header ".concat(n?"selected":"")},r.a.createElement("ul",{className:"Header-list"},Object.values(t).map(function(e){var t=e.name,i=e.svg.markup;return r.a.createElement("li",{key:t,"data-section":t,onClick:function(){return a(t)},className:"Header-list-item ".concat(t," ").concat(t===n?"selected":""),dangerouslySetInnerHTML:{__html:i}})})),r.a.createElement("button",{onClick:i,className:"Header-close-button"},"Close"))})}),p=function e(t){Object(o.a)(this,e),this.raw=t,this.markup=this.raw.fields.markup,this.name=this.raw.fields.name,this.description=this.raw.fields.description},b=function e(t){Object(o.a)(this,e),this.raw=t,this.name=this.raw.fields.name,this.nameFormatted=this.raw.fields.nameFormatted,this.svg=new p(this.raw.fields.svg)},g=(n(165),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={sections:{},currentSection:null},e.client=h.a({space:"8vsztmigmvan",accessToken:"6014203a46017d0481693d5f887db7f6eb745923732fbeddce1e6a6d12baaaa0"}),e.getSections=function(){return e.client.getEntries({content_type:"section",order:"fields.order"}).then(function(t){var n=t.items.map(function(e){return new b(e)});e.setState({sections:n})})},e.setCurrentSection=function(t){e.setState({currentSection:t})},e.resetCurrentSection=function(){e.setState({currentSection:null})},e.getSections(),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,{value:Object(s.a)({},this.state,{client:this.client,getSections:this.getSections,setCurrentSection:this.setCurrentSection,resetCurrentSection:this.resetCurrentSection})},r.a.createElement(v,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t){},66:function(e,t,n){e.exports=n(167)},71:function(e,t,n){}},[[66,2,1]]]);
//# sourceMappingURL=main.759d664e.chunk.js.map