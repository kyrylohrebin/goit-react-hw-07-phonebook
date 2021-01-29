(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__mJnbc",input:"ContactForm_input__Z8QBF",button:"ContactForm_button__29mZL"}},30:function(t,e,n){t.exports={container:"App_container__38i5T"}},37:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(11),u=n.n(o),s=(n(37),n(19)),i=n(63),b=n(6),j=function(t){return t.contacts.items},l=function(t){var e=j(t),n=function(t){return t.contacts.filter}(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},f=n(9),O=n.n(f),m=n(2),d=Object(m.b)("contacts/fetchContactsRequest"),h=Object(m.b)("contacts/fetchContactsSuccess"),p=Object(m.b)("contacts/fetchContactsError"),v=Object(m.b)("contacts/addContactRequest"),x=Object(m.b)("contacts/addContactSuccess"),C=Object(m.b)("contacts/addContactError"),_=Object(m.b)("contacts/deleteContactRequest"),g=Object(m.b)("contacts/deleteContactSuccess"),y=Object(m.b)("contacts/deleteContactError"),N=Object(m.b)("contacts/changeFilter");O.a.defaults.baseURL="http://localhost:3000";var L=n(10),E=n.n(L);function w(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],f=u[1],m=Object(b.c)(j),d=Object(b.b)(),h=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":f(c)}},p=function(){r(""),f("")};return Object(c.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var e=function(t){var e=t.toLowerCase();return m.find((function(t){return t.name.toLowerCase()===e}))}(n),c={id:Object(i.a)(),name:n,number:l};if(e?alert("".concat(n," is already exist")):d(function(t){return function(e){e(v()),O.a.post("/contacts",t).then((function(t){var n=t.data;return e(x(n))})).catch((function(t){return e(C(t))}))}}({name:n,number:l})),""===c)return alert("Enter values");p()},children:[Object(c.jsx)("input",{className:E.a.input,type:"text",name:"name",placeholder:"Enter name",value:n,onChange:h}),Object(c.jsx)("input",{className:E.a.input,type:"tel",name:"number",placeholder:"Enter phone number",value:l,onChange:h}),Object(c.jsx)("button",{className:E.a.button,type:"submit",children:"Add contact"})]})}var S=n(18),F=n(7),R=n.n(F),k=function(t){var e=t.id,n=t.name,a=t.number,r=t.onRemove;return Object(c.jsxs)("li",{className:R.a.item,children:[Object(c.jsxs)("span",{className:R.a.span,children:[n,":"]}),Object(c.jsx)("span",{className:R.a.span,children:a}),Object(c.jsx)("button",{className:R.a.button,onClick:function(){return r(e)},children:"X"})]})},T=function(){var t=Object(b.c)(l),e=Object(b.b)();Object(a.useEffect)((function(){e((function(t){t(d()),O.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))}))}),[e]);var n=function(t){return e(function(t){return function(e){e(_()),O.a.delete("/contacts/".concat(t)).then((function(){return e(g(t))})).catch((function(t){return e(y(t))}))}}(t))};return 0===t.length?null:Object(c.jsx)("ul",{className:R.a.list,children:t.map((function(t){return Object(c.jsx)(k,Object(S.a)(Object(S.a)({},t),{},{onRemove:n}),t.id)}))})},Z=function(t){var e=t.filter,n=t.onChange;return Object(c.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,placeholder:"Enter name to search"})},q=n(30),J=n.n(q);function A(){return Object(c.jsxs)("div",{className:J.a.container,children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(w,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)("h3",{children:"Find contacts by name"}),Object(c.jsx)(Z,{}),Object(c.jsx)(T,{})]})}var B,D,X=n(13),z=n(3),I=n(5),M=Object(m.c)([],(B={},Object(z.a)(B,h,(function(t,e){return e.payload})),Object(z.a)(B,x,(function(t,e){var n=e.payload;return[].concat(Object(X.a)(t),[n])})),Object(z.a)(B,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),B)),P=Object(m.c)("",Object(z.a)({},N,(function(t,e){return e.payload}))),Q=Object(m.c)(!1,(D={},Object(z.a)(D,v,(function(){return!0})),Object(z.a)(D,x,(function(){return!1})),Object(z.a)(D,C,(function(){return!1})),Object(z.a)(D,_,(function(){return!0})),Object(z.a)(D,g,(function(){return!1})),Object(z.a)(D,y,(function(){return!1})),Object(z.a)(D,d,(function(){return!0})),Object(z.a)(D,h,(function(){return!1})),Object(z.a)(D,p,(function(){return!1})),D)),U=Object(I.c)({items:M,filter:P,loading:Q}),Y=n(31),G=n.n(Y),H=[].concat(Object(X.a)(Object(m.d)()),[G.a]),K=Object(m.a)({reducer:{contacts:U},middleware:H,devTools:!1});u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{store:K,children:Object(c.jsx)(A,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__1zmjg",item:"ContactList_item__2NhYh",span:"ContactList_span__3TZTD",button:"ContactList_button__3svZX"}}},[[61,1,2]]]);
//# sourceMappingURL=main.2fcca111.chunk.js.map