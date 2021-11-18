(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={form_label:"Form_form_label__1L-Ai",form_input:"Form_form_input__25fST",form_button:"Form_form_button__XyAF-"}},,,function(e,t,n){e.exports={contacts_item:"Contacts_contacts_item__27PLT",contacts_text:"Contacts_contacts_text__mHZz4",contacts_button:"Contacts_contacts_button__W_GjM"}},,function(e,t,n){e.exports={section:"Section_section__2KrNP",title:"Section_title__23A4D"}},function(e,t,n){e.exports={filter_label:"Filter_filter_label__1SIv8",filter_input:"Filter_filter_input__9B5D-"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=(n(16),n(10)),s=n(2),l=n(20),u=n(8),b=n.n(u),m=n(0);var d=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{className:b.a.section,children:[Object(m.jsx)("h2",{className:b.a.title,children:t}),n]})},j=n(3),f=n.n(j);var _=function(e){var t=e.handleAddContact,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],d=function(e){switch(e.target.name){case"name":i(e.target.value);break;case"number":b(e.target.value)}};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),i(""),b("")},children:[Object(m.jsxs)("label",{className:f.a.form_label,children:["Name:",Object(m.jsx)("input",{className:f.a.form_input,type:"text",name:"name",value:r,onChange:d,placeholder:"Name Lastname",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:f.a.form_label,children:["Number",Object(m.jsx)("input",{className:f.a.form_input,type:"tel",name:"number",value:u,onChange:d,placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:f.a.form_button,type:"submit",children:"Add contact"})]})},h=n(6),O=n.n(h);var p=function(e){var t=e.filterContacts,n=e.handleDeleteContact;return Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsxs)("li",{className:O.a.contacts_item,children:[Object(m.jsxs)("p",{className:O.a.contacts_text,children:[e.name,": ",e.number]}),Object(m.jsx)("button",{className:O.a.contacts_button,id:e.id,type:"button",onClick:n,children:"Delete"})]},e.id)}))})},x=n(9),v=n.n(x);var C=function(e){var t=e.filter,n=e.handleChange;return Object(m.jsxs)("label",{className:v.a.filter_label,children:["Find contacts by name:",Object(m.jsx)("input",{className:v.a.filter_input,type:"text",name:"filter",value:t,onChange:n,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},N=["section"];var g=function(){var e=Object(a.useState)([{id:"id-1",name:"Alesia Zuk",number:"459-12-56"},{id:"id-2",name:"Ilona ",number:"443-89-12"},{id:"id-3",name:"Vladislav",number:"645-17-79"},{id:"id-4",name:"Artiom",number:"227-91-26"},{id:"id-5",name:"Aleksandr",number:"645-17-79"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],b=i[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(m.jsxs)("section",{className:N,children:[Object(m.jsx)(d,{title:"Phonebook",children:Object(m.jsx)(_,{handleAddContact:function(e){var t=e.name,a=e.number;if(n.find((function(e){return e.name===t})))alert("".concat(t," is already in contacts"));else{var r=n,i={id:Object(l.a)(),name:t,number:a};c([].concat(Object(o.a)(r),[i]))}}})}),Object(m.jsxs)(d,{title:"Contacts",children:[Object(m.jsx)(C,{filter:u,handleChange:function(e){b(e.target.value)}}),Object(m.jsx)(p,{filterContacts:n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})),handleDeleteContact:function(e){var t=n.find((function(t){return t.id===e.target.id})),a=n.indexOf(t);n.splice(a,1),c(Object(o.a)(n))}})]})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.35d30893.chunk.js.map