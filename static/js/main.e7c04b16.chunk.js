(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(22),i=c.n(a),j=(c(30),c(8)),o=c(5),d=c(7),l=c(3),r=(c(31),c(32),c(33),c(1)),b=function(){return Object(r.jsx)("div",{className:"header",children:"ToDo List"})},O=c(14),x=c.n(O),u=c(15),h=c.n(u),m=function(){return Object(r.jsxs)("div",{className:"Container",children:[Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"grpIcon",children:[Object(r.jsx)(d.b,{to:"/add",children:Object(r.jsxs)("div",{className:"icon_1 addtask",children:[Object(r.jsx)(x.a,{className:"icon"}),Object(r.jsx)("p",{children:"Add Task"})]})}),Object(r.jsx)(d.b,{to:"/view",children:Object(r.jsxs)("div",{className:"icon_2 alltasks",children:[Object(r.jsx)(h.a,{className:"icon"}),Object(r.jsx)("p",{children:"Tasks"})]})})]})]})},v=(c(40),c(16)),f=c.n(v),p=function(e){var t=e.addtask,c=Object(s.useState)(""),n=Object(o.a)(c,2),a=n[0],i=n[1],j=function(e){a?(t(a),i(""),alert("added"),window.location.href="/view"):alert("Empty task is not added")};return Object(r.jsxs)("div",{className:"Container",children:[Object(r.jsx)(b,{}),Object(r.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?j():null},value:a,id:"todoinput"}),Object(r.jsx)(d.b,{to:"/view",children:Object(r.jsx)("button",{onClick:j,className:"addbtn",children:"ADD"})}),Object(r.jsxs)("div",{className:"grpIcon",children:[Object(r.jsx)(d.b,{to:"/",children:Object(r.jsxs)("div",{className:"icon_1 addtask",children:[Object(r.jsx)(f.a,{className:"icon"}),Object(r.jsx)("p",{children:"Home"})]})}),Object(r.jsx)(d.b,{to:"/view",children:Object(r.jsxs)("div",{className:"icon_2 alltasks",children:[Object(r.jsx)(h.a,{className:"icon"}),Object(r.jsx)("p",{children:"Tasks"})]})})]})]})},N=c(24),k=c.n(N),w=(c(41),function(e){var t=e.todo,c=e.deletetask;return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsx)("p",{children:t.task}),Object(r.jsx)(k.a,{className:"icon",onClick:function(){window.confirm("wanna to delete?")&&c(t.id)}})]})}),g=(c(42),function(e){var t=e.todolists,c=e.removetask,s=function(e){c(e)};return Object(r.jsxs)("div",{className:"Container",children:[Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"grpIcon",children:[Object(r.jsx)(d.b,{to:"/",children:Object(r.jsxs)("div",{className:"icon_1 addtask",children:[Object(r.jsx)(f.a,{className:"icon"}),Object(r.jsx)("p",{children:"Home"})]})}),Object(r.jsx)(d.b,{to:"/add",children:Object(r.jsxs)("div",{className:"icon_2 alltasks",children:[Object(r.jsx)(x.a,{className:"icon"}),Object(r.jsx)("p",{children:"Add Task"})]})})]}),Object(r.jsx)("div",{className:"ToDoListBox",children:t.map((function(e){return Object(r.jsx)(w,{todo:e,deletetask:s})}))})]})}),S=c(52);var y=function(){var e=Object(s.useState)(function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]}()),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(d.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",element:Object(r.jsx)(m,{})}),Object(r.jsx)(l.a,{path:"/add",element:Object(r.jsx)(p,{addtask:function(e){n([].concat(Object(j.a)(c),[{id:Object(S.a)(),task:e,complete:!1}]))}})}),Object(r.jsx)(l.a,{path:"/view",element:Object(r.jsx)(g,{todolists:c,removetask:function(e){var t=c.filter((function(t){return t.id!==e}));n(t),console.log(t)}})})]})})})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e7c04b16.chunk.js.map