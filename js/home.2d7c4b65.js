(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"21bb":function(t,e,o){"use strict";var n=o("2dad"),r=o.n(n);r.a},"2dad":function(t,e,o){},4017:function(t,e,o){},9070:function(t,e,o){"use strict";var n=o("4017"),r=o.n(n);r.a},bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page home"},[o("div",{staticClass:"container"},[o("div",{staticClass:"notes-wrap"},[o("div",{staticClass:"actions-bar"},[o("button",{staticClass:"btn btn--circle btn--icon",on:{click:function(e){return t.addNoteModal()}}},[o("div",{staticClass:"btn__icon fa-solid"},[t._v("")])])]),t._l(t.notes,(function(e){return o("note",{attrs:{note:e},on:{remove:t.confirmRemove}})}))],2)]),o("confirm-modal",{attrs:{text:"Вы действительно хотите удалить заметку?"},on:{confirm:t.removeNote}}),o("add-note-modal",{attrs:{onSave:t.closeAddModal()}})],1)},r=[];o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var c=o("2f62"),d=o("61ea"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("base-modal",{attrs:{title:"Добавить новую заметку",name:"add-note-modal",height:"auto"},on:{"before-close":t.beforeClose}},[o("note",{attrs:{note:t.note,state:t.NoteStates.EDIT}}),o("div",{staticClass:"btn-wrap"},[o("button",{staticClass:"btn",on:{click:function(e){return t.save()}}},[t._v("Сохранить")])])],1)},f=[],u=o("406d"),b=o("f325"),m=o("ca5d"),p={id:"",name:"Title",items:[{checked:!1,text:"Text"}]},v={data:function(){return{NoteStates:m["a"],note:JSON.parse(JSON.stringify(p))}},components:{BaseModal:u["a"],Note:b["a"]},methods:{save:function(){this.$store.dispatch("Notes/saveNote",this.note),this.$emit("onSave")},beforeClose:function(){this.note=JSON.parse(JSON.stringify(p))}},props:{text:{type:String}}},h=v,O=(o("9070"),o("2877")),w=Object(O["a"])(h,l,f,!1,null,null,null),g=w.exports,y={name:"Home",data:function(){return{removeId:0}},components:{ConfirmModal:d["a"],AddNoteModal:g,Note:b["a"]},computed:i({},Object(c["b"])("Notes",{notes:"notes"})),methods:{removeNote:function(t){t&&this.$store.dispatch("Notes/removeById",this.removeId),this.$modal.hide("confirm-modal")},confirmRemove:function(t){this.$modal.show("confirm-modal"),this.removeId=t},addNoteModal:function(){this.$modal.show("add-note-modal")},closeAddModal:function(){this.$modal.hide("add-note-modal")}}},j=y,N=(o("21bb"),Object(O["a"])(j,n,r,!1,null,null,null));e["default"]=N.exports},dbb4:function(t,e,o){var n=o("23e7"),r=o("83ab"),a=o("56ef"),s=o("fc6a"),i=o("06cf"),c=o("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,o,n=s(t),r=i.f,d=a(n),l={},f=0;while(d.length>f)o=r(n,e=d[f++]),void 0!==o&&c(l,e,o);return l}})},e439:function(t,e,o){var n=o("23e7"),r=o("d039"),a=o("fc6a"),s=o("06cf").f,i=o("83ab"),c=r((function(){s(1)})),d=!i||c;n({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(t,e){return s(a(t),e)}})}}]);
//# sourceMappingURL=home.2d7c4b65.js.map