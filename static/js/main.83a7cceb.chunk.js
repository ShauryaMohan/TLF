(this.webpackJsonpfirstproject=this.webpackJsonpfirstproject||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Covid.75eae2f5.jpg"},function(e,a,t){e.exports=t.p+"static/media/Racism.60cc2394.jpg"},function(e,a,t){e.exports=t.p+"static/media/logo.c5e184ec.png"},,,function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),i=t.n(c),o=(t(22),t(2)),l=t(3),s=t(5),m=t(4);t(23),t(24),t(25);var d=function(e){var a=e.article,t={height:"100%",width:"100%",position:"absolute",backgroundImage:"url(".concat(a.image,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",transition:"0.5s"};return r.a.createElement("div",{className:"Card-Wrapper"},r.a.createElement("div",{className:"Card-image",style:t},r.a.createElement("div",{className:"Card-text"},r.a.createElement("p",{className:"Card-text-topic"},a.topic))))},u=[{id:1,topic:"Shaurya Mohan starts to teach web development",content:"",author:"Shaurya Mohan",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:2,topic:"Reimagining the world Post Covid-19",content:"",author:"Rakesh Mohan",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:3,topic:"The war with China and it's impact on your business",content:"",author:"Neeraj Prasad",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:4,topic:"Goldbach Conjecture: Why is it still not proven",content:"",author:"Shaurya Mohan",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1594145235947-de84b8ec131b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:5,topic:"Does Godel's incompleteness theorem make mathematics imperfect?",content:"",author:"Shaurya Mohan",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1594051922548-d03ee1ee39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:6,topic:"How real is the story behind Vikas Dubey's encounter?",content:"",author:"Neeraj Prasad",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1594148704701-38035c4a2fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:7,topic:"Is Covid-19 a consequence of mistakes that humanity made?",content:"",author:"Neeraj Prasad",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1594057045119-75a282c808cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:8,topic:"Why the power sector in India is in peril",content:"",author:"Rakesh Mohan",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},{id:9,topic:"How much longer will it take to make India a hub of renewable energy?",content:"",author:"Rakesh Mohan",created:"3rd July 2020",image:"https://images.unsplash.com/photo-1593378026483-2a1fd46a35bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"}];var h=function(){return r.a.createElement("div",{className:"middle-background"},r.a.createElement("div",{className:"middle-heading"},r.a.createElement("p",null,"Popular Articles")),r.a.createElement("div",{className:"Cardcontainer"},r.a.createElement(d,{article:u[0]}),r.a.createElement(d,{article:u[1]}),r.a.createElement(d,{article:u[2]})))},p=(t(26),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).changebackground=function(){var e=n.state.active,a=0,t=document.getElementsByClassName("slide"),r=document.getElementsByClassName("panel");for(a=0;a<t.length;a++)t[a].className=t[a].className.replace(" active","");for(a=0;a<t.length;a++)r[a].className=r[a].className.replace(" activePanel","");++e>t.length&&(e=1),n.setState({active:e}),t[e-1].classList.add("active"),r[e-1].classList.add("activePanel")},n.state={active:1},n.carousel=0,n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.carousel=setInterval(this.changebackground,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.carousel)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Carousel-container"},r.a.createElement("div",{className:"panel-container"},r.a.createElement("div",{className:"panel one activePanel"},r.a.createElement("p",{className:"panel-text"},"Satisfaction")),r.a.createElement("div",{className:"panel two"},r.a.createElement("p",{className:"panel-text"},"Planning")),r.a.createElement("div",{className:"panel three"},r.a.createElement("p",{className:"panel-text"},"Trust")),r.a.createElement("div",{className:"panel four"},r.a.createElement("p",{className:"panel-text"},"Profesional"))),r.a.createElement("div",{className:"slide I active"}),r.a.createElement("div",{className:"slide II"}),r.a.createElement("div",{className:"slide III"}),r.a.createElement("div",{className:"slide IV"}))}}]),t}(r.a.Component));t(27);var v=function(){return r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"top-margin"}),r.a.createElement("div",{className:"image"},r.a.createElement("div",{className:"topbackground-text"},r.a.createElement("p",{className:"big"},"Reopening and Transforming your Company post Covid-19"),r.a.createElement("p",{className:"learnmore"},"Learn More")),r.a.createElement("div",{className:"background-merge"})))},f=(t(28),t(12)),E=t.n(f),g=t(13),b=t.n(g);var N=function(){return r.a.createElement("div",{className:"HomepageText-container"},r.a.createElement("div",{className:"text-top-margin"}),r.a.createElement("div",{className:"upper-left"},r.a.createElement("div",{className:"covid img"},r.a.createElement("img",{src:E.a,alt:"covid"}))),r.a.createElement("div",{className:"upper-right"},r.a.createElement("div",{className:"heading-text"},r.a.createElement("p",{className:"heading"},"In challenging times, we\u2019re #BetterTogether to build a better working world."),r.a.createElement("p",{className:"text"},"Through actions both big and small, our people are helping each other, clients and society tackle COVID-19 challenges and build an even better working world."))),r.a.createElement("div",{className:"lower-left"},r.a.createElement("div",{className:"heading-text"},r.a.createElement("p",{className:"heading"},"We in TLF stand against racism, believe in equality. \xa0 \xa0 #BlackLivesMatter"),r.a.createElement("p",{className:"text"},"A healthy work environment always leads to efficient management and increased productivity. We at TLF do not tolerate racism, sexism or discrimination of any form and work towads better future together."))),r.a.createElement("div",{className:"lower-right"},r.a.createElement("div",{className:"racism img"},r.a.createElement("img",{src:b.a,alt:"racism"}))),r.a.createElement("div",{className:"second-heading"},r.a.createElement("div",null,r.a.createElement("p",null,"Our Principles"))))},y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(p,{route:this.props.route}))}}]),t}(r.a.Component);t(29);var w=function(e){var a=e.onInputChange;return r.a.createElement("div",{className:"SearchBarContainer"},r.a.createElement("div",{className:"SearchBarMargin"}),r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{type:"text",name:"serach",className:"SearchBox",placeholder:"Search articles...",onChange:a})))};t(30),t(31);var k=function(e){var a=e.article;return r.a.createElement("div",{className:"ArticleCard-container"},r.a.createElement("div",{className:"ArticleCard-image"},r.a.createElement("img",{height:"100%",width:"100%",src:a.image,alt:a.id.toString()})),r.a.createElement("div",{className:"ArticleCard-text"},r.a.createElement("p",{className:"Topic"},a.topic),r.a.createElement("p",{className:"Author"},a.author)))};var C=function(e){var a=e.Article.map((function(e){return r.a.createElement(k,{key:e.id,article:e})}));return r.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",flexWrap:"wrap"}},a)};var x=function(e){var a=e.Article;return r.a.createElement("div",{className:"ArticleContainer"},r.a.createElement(C,{Article:a}))},j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onInputChange=function(e){n.setState({searchInput:e.target.value})},n.state={searchInput:""},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=u.filter((function(a){return a.topic.toLowerCase().includes(e.state.searchInput.toLowerCase())||a.author.toLowerCase().includes(e.state.searchInput.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement(w,{onInputChange:this.onInputChange}),r.a.createElement(x,{Article:a}))}}]),t}(r.a.Component),O=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("homePageTop",null),r.a.createElement(d,null),r.a.createElement("homePageText",null))}}]),t}(r.a.Component),I=(t(32),t(14)),M=t.n(I),S=t(16),W=t(15),J=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).openNav=function(){n.reference.current.classList.toggle("responsive")},n.reference=r.a.createRef(),n}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Navigation"},r.a.createElement("div",{className:"nav-logo"},r.a.createElement("img",{className:"logo",alt:"logo",src:M.a})),r.a.createElement("div",{className:"nav-link-container",ref:this.reference},r.a.createElement("p",{className:"nav-links",onClick:function(){e.props.changeRoute("home"),e.openNav()}},"Home"),r.a.createElement("p",{className:"nav-links",onClick:function(){e.props.changeRoute("articles"),e.openNav()}},"Articles"),r.a.createElement("p",{className:"nav-links"},"About Us")),r.a.createElement("div",{className:"nav-icon"},r.a.createElement(W.a,{icon:S.a,size:"2x",className:"FontAwesomeIcon",onClick:this.openNav})))}}]),t}(r.a.Component),B=(t(37),t(6));var R=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-margin"}),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-upper"},r.a.createElement("p",null,"Follow us "),r.a.createElement("div",{className:"icons"},r.a.createElement(B.SocialMediaIconsReact,{icon:"twitter",backgroundColor:"white",iconColor:"black",roundness:50,borderColor:"black",borderStyle:"solid",borderWidth:1,size:45})),r.a.createElement("div",{className:"icons"},r.a.createElement(B.SocialMediaIconsReact,{icon:"facebook",backgroundColor:"white",iconColor:"black",roundness:50,borderColor:"black",borderStyle:"solid",borderWidth:1,size:45,className:"icons"})),r.a.createElement("div",{className:"icons"},r.a.createElement(B.SocialMediaIconsReact,{icon:"linkedin",backgroundColor:"white",iconColor:"black",roundness:50,borderColor:"black",borderStyle:"solid",borderWidth:1,size:45})),r.a.createElement("div",{className:"icons"},r.a.createElement(B.SocialMediaIconsReact,{icon:"instagram",backgroundColor:"white",iconColor:"black",roundness:50,borderColor:"black",borderStyle:"solid",borderWidth:1,size:45}))),r.a.createElement("div",{className:"footer-lower"},r.a.createElement("p",{className:"copyright"},"\xa9 2020 Shaurya Mohan"," ",r.a.createElement("span",{style:{fontSize:16}},"\xa0 \xa0| \xa0 Contact \xa0 \xa0 Follow \xa0 \xa0About")),r.a.createElement("p",{className:"lastText"},"TLF is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable, and those with criminal histories will be considered in a manner consistent with applicable state and local laws."))))},A=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).changeRoute=function(e){n.setState({route:e})},n.state={route:"home"},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{changeRoute:this.changeRoute}),"home"===this.state.route?r.a.createElement(y,{route:this.state.route}):"articles"===this.state.route?r.a.createElement(j,null):r.a.createElement(O,null),r.a.createElement(R,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.83a7cceb.chunk.js.map