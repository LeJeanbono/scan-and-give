(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),c=(n(14),n(3)),d=n(4),s=n(7),l=n(5),v=n(8),h=n(6),u=n.n(h),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).videoRef=o.a.createRef(),n.canvasRef=o.a.createRef(),n.state={loading:!0,code:null,videoDevices:[]},n.tick=function(){n.analyzeVideoFrame(),requestAnimationFrame(n.tick)},n.analyzeVideoFrame=function(){var e=n.videoRef.current;if(n.state.loading&&e.readyState===e.HAVE_ENOUGH_DATA)n.setState({loading:!1,canvasWidth:e.videoWidth,canvasHeight:e.videoHeight});else if(!n.state.loading){var t=n.videoRef.current,a=n.canvasRef.current,o=a.getContext("2d");a.height=t.videoHeight,a.width=t.videoWidth,o.drawImage(t,0,0,a.width,a.height);var i=o.getImageData(0,0,a.width,a.height),r=u()(i.data,i.width,i.height,{inversionAttempts:"dontInvert"});n.setState({code:r})}},n.drawLineAroundQRCode=function(e){var t="#FF3B58",a=e.location.topLeftCorner.x<n.state.canvasWidth/2&&e.location.topRightCorner.x<n.state.canvasWidth/2,o=e.location.topLeftCorner.x>n.state.canvasWidth/2&&e.location.topRightCorner.x>n.state.canvasWidth/2,i=e.location.topLeftCorner.y<n.state.canvasHeight/2&&e.location.bottomLeftCorner.y<n.state.canvasHeight/2,r=e.location.topLeftCorner.y>n.state.canvasHeight/2&&e.location.bottomLeftCorner.y>n.state.canvasHeight/2;i&&a?t="#00FF00":i&&o?t="#0000FF":r&&a?t="#00FFFF":r&&o&&(t="#FFFF00"),n.drawLineOnCanvas(e.location.topLeftCorner,e.location.topRightCorner,t),n.drawLineOnCanvas(e.location.topRightCorner,e.location.bottomRightCorner,t),n.drawLineOnCanvas(e.location.bottomRightCorner,e.location.bottomLeftCorner,t),n.drawLineOnCanvas(e.location.bottomLeftCorner,e.location.topLeftCorner,t)},n.drawLineOnCanvas=function(e,t,a){var o=n.canvasRef.current.getContext("2d");o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(t.x,t.y),o.lineWidth=4,o.strokeStyle=a,o.stroke()},n.onEnumerateDevices=function(e){var t=e.filter(function(e){return"videoinput"===e.kind});n.setState({videoDevices:t})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.enumerateDevices().then(this.onEnumerateDevices),navigator.mediaDevices.getUserMedia({video:{deviceId:"23ccb9f41f9998e0fa16662561502eecfd3a8f0b50c3d5385ac2b66489f76d72"}}).then(function(t){var n=e.videoRef.current;n.srcObject=t,n.setAttribute("playsinline",!0),n.play(),requestAnimationFrame(e.tick)})}},{key:"componentDidUpdate",value:function(){this.state.loading||this.state.code&&this.drawLineAroundQRCode(this.state.code)}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.loading&&o.a.createElement("p",null,"Loading..."),o.a.createElement("p",null,this.state.code?this.state.code.data:"Scan to give 1\u20ac"),o.a.createElement("video",{ref:this.videoRef,hidden:!0}),o.a.createElement("canvas",{ref:this.canvasRef,hidden:this.state.loading}),o.a.createElement("ul",null,this.state.videoDevices.map(function(e){return o.a.createElement("li",null,e.deviceId,"-",e.label)})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.89f6d85b.chunk.js.map