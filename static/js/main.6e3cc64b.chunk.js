(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{232:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(26),r=a.n(o),s=(a(98),a(12)),c=a(13),l=a(15),d=a(14),u=a(16),m=a(233),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,"Merci d'avoir donn\xe9")}}]),t}(n.Component),h=Object(m.withStyles)(function(){return{}})(p),g=a(235),f=a(236),v=a(25),b=a.n(v),y=a(27),E=a.n(y),j=a(234),O=a(31),w=a.n(O),k=a(42),I=a.n(k),x=a(43),S=a.n(x),A=a(88),C=a.n(A),D=a(44),N=a.n(D),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={associations:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(I.a,{className:e.card},i.a.createElement(w.a,{className:e.cardImage,image:this.props.image,title:this.props.nom}),i.a.createElement(S.a,{className:e.cardContent},i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.nom),i.a.createElement(b.a,{component:"p",dangerouslySetInnerHTML:{__html:this.props.description.replace(/\n/g,"<br />")}})),i.a.createElement(C.a,null,i.a.createElement(E.a,{size:"large",color:"primary",component:j.a,to:"/scanner/"+this.props.id},"Soutenir",i.a.createElement(N.a,{className:e.rightIcon,color:"primary"},"card_giftcard"))))}}]),t}(n.Component),B=Object(m.withStyles)(function(){return{card:{display:"flex",marginBottom:15,minHeight:200},cardImage:{height:180,width:450,backgroundSize:"contain",alignSelf:"center"},cardContent:{flexGrow:1},rightIcon:{marginLeft:8}}})(F),R=(a(33),{getAssociations:function(){return Promise.resolve([{id:1,nom:"Bretagne Vivante",image:"logo_bretagnevivante.png",description:"Consciente de ne pouvoir agir seule, Bretagne Vivante initie et contribue \xe0 de nombreux projets et d\xe9marches interassociatives, pour peser ensemble dans le d\xe9bat public.\nPour faire avancer la prise en compte de la nature, nous d\xe9veloppons aussi de nombreux partenariats avec l\u2019Etat, les collectivit\xe9s, les entreprises, les \xe9coles, les agriculteurs, etc."},{id:2,nom:"APF France Handicap",image:"apf.png",description:"APF France handicap propose, sur l\u2019ensemble du territoire national, tous les types d\u2019\xe9tablissements et services pour accompagner l\u2019inclusion de la personne en situation de handicap.\nNous avons \xe0 c\u0153ur d\u2019offrir aux personnes des r\xe9ponses diversifi\xe9es, au plus pr\xe8s de leurs attentes.\nNous privil\xe9gions un parcours inclusif pour tous, dans le respect des choix de vie de chacun."},{id:3,nom:"Action contre la Faim",image:"action_contre_faim.png",description:"Action contre la Faim lutte contre la faim dans le monde. Sa mission est de sauver des vies en \xe9liminant la faim par la pr\xe9vention,\nla d\xe9tection et le traitement de la sous-nutrition, en particulier pendant et apr\xe8s les situations d\u2019urgence li\xe9es aux conflits et aux catastrophes naturelles."}])},getDons:function(){return Promise.resolve([{associationId:"1",association:"Bretagne Vivante",image:"logo_bretagnevivante.png",dons:1},{associationId:"2",association:"APF France Handicap",image:"apf.png",dons:2},{associationId:"3",association:"Action contre la Faim",image:"action_contre_faim.png",dons:1}])}}),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={associations:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.getAssociations().then(function(t){e.setState({associations:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.associations},i.a.createElement(b.a,{gutterBottom:!0,variant:"h2",component:"h1"},"Associations"),this.state.associations.map(function(e){return i.a.createElement(B,{key:e.id,id:e.id,nom:e.nom,image:e.image,description:e.description})}),i.a.createElement(E.a,{variant:"contained",color:"primary",component:j.a,to:"/dons"},"R\xe9sultats"))}}]),t}(n.Component),H=Object(m.withStyles)(function(){return{associations:{padding:15,backgroundColor:"#eeeeee"},card:{display:"flex",marginBottom:15,minHeight:200},cardImage:{height:180,width:450,backgroundSize:"contain",alignSelf:"center"},cardContent:{flexGrow:1}}})(_),z=a(89),M=a.n(z),V=a(90),P=a.n(V),G=a(91),L=a.n(G),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).videoRef=i.a.createRef(),a.canvasRef=i.a.createRef(),a.state={loading:!0,videoDevices:[],association:null,donExist:!1,sending:!1},a.tick=function(){a.analyzeVideoFrame(),requestAnimationFrame(a.tick)},a.analyzeVideoFrame=function(){var e=a.videoRef.current;if(a.state.loading&&e.readyState===e.HAVE_ENOUGH_DATA)a.setState({loading:!1});else if(!a.state.loading){var t=a.videoRef.current,n=a.canvasRef.current;if(null!==n){var i=n.getContext("2d");n.height=t.videoHeight,n.width=t.videoWidth,i.drawImage(t,0,0,n.width,n.height);var o=i.getImageData(0,0,n.width,n.height),r=M()(o.data,o.width,o.height,{inversionAttempts:"dontInvert"});r&&r.data&&!a.state.donExist&&!a.state.sending&&(a.setState({sending:!0}),R.addDon(P()(r.data),new Date,parseInt(a.props.match.params.associationId)).then(function(){a.props.history.push({pathname:"/done"})}).catch(function(e){400===e.response.status&&a.setState({donExist:!0})}))}}},a.onEnumerateDevices=function(e){var t=e.filter(function(e){return"videoinput"===e.kind});a.setState({videoDevices:t})},a.getAssociation=function(){if(a.state.association){var e=a.props.classes;return i.a.createElement("div",{className:e.resume},i.a.createElement(w.a,{className:e.cardImage,image:"/"+a.state.association.image,title:a.state.association.nom}),i.a.createElement("h1",null,a.state.association.nom))}return i.a.createElement("div",null)},a.handleClose=function(){a.setState({donExist:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.getAssociation(this.props.match.params.associationId).then(function(t){return e.setState({association:t})}),navigator.mediaDevices.enumerateDevices().then(this.onEnumerateDevices),navigator.mediaDevices.getUserMedia({video:{deviceId:"23ccb9f41f9998e0fa16662561502eecfd3a8f0b50c3d5385ac2b66489f76d72"}}).then(function(t){var a=e.videoRef.current;a.srcObject=t,a.setAttribute("playsinline",!0),a.play(),requestAnimationFrame(e.tick)})}},{key:"getModalStyle",value:function(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",null,i.a.createElement(L.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.donExist,onClose:this.handleClose},i.a.createElement("div",{className:e.modal},i.a.createElement(N.a,{color:"error"},"warning"),"Vous avez d\xe9j\xe0 donn\xe9")),i.a.createElement("div",{className:e.layout},this.getAssociation(),i.a.createElement("div",null,i.a.createElement("video",{ref:this.videoRef,hidden:!0}),i.a.createElement("canvas",{ref:this.canvasRef,hidden:this.state.loading}))))}}]),t}(n.Component),q=Object(m.withStyles)(function(e){return{cardImage:{height:180,width:450,backgroundSize:"contain",alignSelf:"center"},resume:{display:"flex",alignItems:"center",padding:"10px"},layout:{display:"flex",flexDirection:"column",alignItems:"center"},modal:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})(W),J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(I.a,{className:e.card},i.a.createElement(w.a,{className:e.cardImage,image:this.props.image,title:this.props.association}),i.a.createElement(S.a,{className:e.cardContent},i.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.association),i.a.createElement(b.a,{variant:"h2",component:"h1"},this.props.nombre,"\u20ac gr\xe2ce \xe0 vous !")))}}]),t}(n.Component),T=Object(m.withStyles)(function(){return{card:{display:"flex",marginBottom:15,minHeight:200},cardImage:{height:180,width:450,backgroundSize:"contain",alignSelf:"center"},cardContent:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center"},rightIcon:{marginLeft:8}}})(J),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={dons:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.getDons().then(function(t){e.setState({dons:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h2",component:"h1"},"Dons"),this.state.dons.map(function(e){return i.a.createElement(T,{key:e.associationId,associationId:e.associationId,association:e.association,image:e.image,nombre:e.dons})}),i.a.createElement(E.a,{variant:"contained",color:"primary",component:j.a,to:"/"},"Associations"))}}]),t}(n.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(g.a,{basename:"/scan-and-give"},i.a.createElement("div",null,i.a.createElement(f.a,{exact:!0,path:"/",component:H}),i.a.createElement(f.a,{path:"/scanner/:associationId",component:q}),i.a.createElement(f.a,{path:"/done",component:h}),i.a.createElement(f.a,{path:"/dons",component:U})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(232)},98:function(e,t,a){}},[[93,2,1]]]);
//# sourceMappingURL=main.6e3cc64b.chunk.js.map