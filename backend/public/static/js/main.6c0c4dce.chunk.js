(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){},141:function(e,a,t){e.exports=t(280)},146:function(e,a,t){},147:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},148:function(e,a,t){},280:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),l=t.n(o),s=(t(146),t(147),t(148),t(29)),c=t(40),i=t(41),m=t(45),u=t(42),p=t(46),d=(t(103),t(281)),g=t(283),h=t(11),f=t(73),E=t(28),y=t(71),b=t.n(y);b.a.defaults.headers={"Content-Type":"application/json"};var v="https://erphack.herokuapp.com/api",w=function(e){return b.a.post("".concat(v,"/auth/login"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},C=d.a.Item,x=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){console.log(t.props.data),e.preventDefault(),t.props.form.validateFields(function(e,a){e||t.props.onLogin()})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.props,t=a.handleText;a.data;return r.a.createElement(d.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(C,null,e("email",{rules:[{required:!0,message:"Ingresa t\xfa email!"}]})(r.a.createElement(g.a,{name:"email",onChange:t,prefix:r.a.createElement(h.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email",size:"large"}))),r.a.createElement(C,null,e("password",{rules:[{required:!0,message:"Ingresa t\xfa contrase\xf1a!"}]})(r.a.createElement(g.a,{name:"password",onChange:t,prefix:r.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",size:"large"}))),r.a.createElement(C,null,r.a.createElement(f.a,{type:"primary",htmlType:"submit",className:"login-form-button ant-btn-primary",size:"large",style:{borderColor:"#72c6cd",backgroundColor:"#72c6cd"}},"Log in")),r.a.createElement("span",null,"\xbfNo tienes cuenta? Registrate ",r.a.createElement(E.b,{to:"/signup"},"aqui")," "))}}]),a}(n.Component),j=d.a.create()(x),O=d.a.Item,k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),console.log("data:",t.props.data),t.props.form.validateFields(function(e,a){e||t.props.onRegister()})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.props,t=a.handleText;a.data,a.onRegister;return r.a.createElement(d.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(O,null,e("Nombre",{rules:[{required:!0,message:"Ingresa t\xfa email!"}]})(r.a.createElement(g.a,{name:"firstName",onChange:t,prefix:r.a.createElement(h.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Nombre",size:"large"}))),r.a.createElement(O,null,e("Apellido Paterno",{rules:[{required:!0,message:"Enter your email!"}]})(r.a.createElement(g.a,{name:"firstLastName",onChange:t,prefix:r.a.createElement(h.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Apellido Paterno",size:"large"}))),r.a.createElement(O,null,e("RFC",{rules:[{required:!0,message:"Enter your email!"}]})(r.a.createElement(g.a,{name:"rfc",onChange:t,prefix:r.a.createElement(h.a,{type:"key",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"RFC",size:"large"}))),r.a.createElement(O,null,e("email",{rules:[{required:!0,message:"Enter your email!"}]})(r.a.createElement(g.a,{name:"email",onChange:t,prefix:r.a.createElement(h.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email",size:"large"}))),r.a.createElement(O,null,e("password",{rules:[{required:!0,message:"Ingresa t\xfa contrase\xf1a!"}]})(r.a.createElement(g.a,{name:"password",onChange:t,prefix:r.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",size:"large"}))),r.a.createElement(O,null,e("confirmPassword",{rules:[{required:!0,message:"Ingresa t\xfa contrase\xf1a!"}]})(r.a.createElement(g.a,{name:"confirmPassword",onChange:t,prefix:r.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm Password",size:"large"}))),r.a.createElement(O,null,r.a.createElement(f.a,{type:"primary",htmlType:"submit",className:"login-form-button ant-btn-primary",size:"large",style:{borderColor:"#72c6cd",backgroundColor:"#72c6cd"}},"Registrate")),r.a.createElement("span",null,"\xbfYa tienes cuenta? ",r.a.createElement(E.b,{to:"/login"},"Inicia sesi\xf3n")," "))}}]),a}(n.Component),N=d.a.create()(k),z=t(282),R=t(284),T=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={data:{}},t.handleText=function(e){var a=t.state.data;a[e.target.name]=e.target.value,t.setState({data:a})},t.onRegister=function(){t.state.data;R.a.info("Registro Exitoso"),t.setState({data:{}})},t.onLogin=function(){var e=t.state.data;w(e).then(function(e){console.log("Que es esto",e),R.a.info("Welcome"),t.props.history.push("/home")}).catch(function(e){console.log("error",e),R.a.info("OH")}),t.setState({data:{}}),console.log("Here",e)},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.location.pathname,a=this.state.data;return r.a.createElement("div",{className:"login"},r.a.createElement(z.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"title"},"My Numbers")),r.a.createElement("div",null,"/login"===e?r.a.createElement(j,{data:a,onLogin:this.onLogin,handleText:this.handleText}):r.a.createElement(N,{handleText:this.handleText,data:a,onRegister:this.onRegister}))))}}]),a}(n.Component),q=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/login",component:T}),r.a.createElement(s.a,{path:"/register",component:T}),r.a.createElement(s.a,{path:"/home",component:T}))};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(279);l.a.render(r.a.createElement(function(){return r.a.createElement(E.a,null,r.a.createElement(I,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,1,2]]]);
//# sourceMappingURL=main.6c0c4dce.chunk.js.map