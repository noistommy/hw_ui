(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f6df9d"],{1999:function(t,s,a){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"info-view"},[s("div",{staticClass:"section-title"},[t._v("Information")]),s("div",{staticClass:"info-wrapper"},[s("div",{staticClass:"info-title"},[t._v("Name")]),s("div",{staticClass:"name-info"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body"},[t._v(t._s("Hw-"+t.$route.name))])])])]),s("div",{staticClass:"info-wrapper"},[s("div",{staticClass:"info-title"},[t._v("Usage")]),s("div",{staticClass:"usege-info"},[s("div",{staticClass:"props-info"}),s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body"},[s("pre",{staticClass:"language-css"},[s("code",[t._v(t._s(t.usage))])])])])])]),s("div",{staticClass:"info-wrapper"},[s("div",{staticClass:"info-title"},[t._v("Props")]),s("div",{staticClass:"props-info"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body table"},[s("div",{staticClass:"table"},[t._m(0),t._l(t.propsData,(function(a){return s("div",{key:a.name,staticClass:"tr"},[s("div",{staticClass:"td"},[t._v(t._s(a.name))]),s("div",{staticClass:"td"},[t._v(t._s(a.type))]),s("div",{staticClass:"td"},[t._v(t._s(a.default))]),s("div",{staticClass:"td"},[t._v(t._s(a.desc))])])}))],2)])])])]),s("div",{staticClass:"info-wrapper"},[s("div",{staticClass:"info-title"},[t._v("Event")]),s("div",{staticClass:"event-info"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body table"},[s("div",{staticClass:"table"},[t._m(1),t._l(t.eventData,(function(a){return s("div",{key:a.name,staticClass:"tr"},[s("div",{staticClass:"td"},[t._v(t._s(a.name))]),s("div",{staticClass:"td"},[t._v(t._s(a.type))]),s("div",{staticClass:"td"},[t._v(t._s(a.desc))])])}))],2)])])])])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"tr"},[s("div",{staticClass:"th"},[t._v("Name")]),s("div",{staticClass:"th"},[t._v("Type")]),s("div",{staticClass:"th"},[t._v("Default")]),s("div",{staticClass:"th"},[t._v("Desc")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tr"},[s("div",{staticClass:"th"},[t._v("Name")]),s("div",{staticClass:"th"},[t._v("Param Type")]),s("div",{staticClass:"th"},[t._v("Desc")])])}],l={name:"information-view",props:{usage:String,propsData:Array,eventData:Array}},c=l,n=(a("d16e"),a("2877")),d=Object(n["a"])(c,e,i,!1,null,"b111494a",null);s["a"]=d.exports},3855:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"context-menu-view"},[s("div",{staticClass:"contents-detail-view"},[s("hw-tab",{attrs:{"tab-list":t.tabList,"tab-class":"tab-item"},scopedSlots:t._u([{key:"default",fn:function({tab:a}){return[s("span",{on:{click:function(s){return t.setContents(a.key)}}},[t._v(t._s(a.name))])]}}])}),s("div",{staticClass:"contents-section"},[t.showInfo?[s(t.infoComp,{tag:"components",attrs:{usage:t.usage,"props-data":t.propsData,"event-data":t.eventData}})]:[s("div",{staticClass:"section-title"},[t._v("Types")]),s("div",{staticClass:"add-test"},t._l(t.colorPalette,(function(a){return s("div",{key:a,staticClass:"hw-button icon",class:""+a,on:{click:function(s){return t.addTags(a)}}},[s("i",{staticClass:"fa fa-plus"})])})),0),s("div",{staticClass:"type-wrapper"},[s("div",{staticClass:"type-title"},[t._v("Line Tags")]),s("div",{staticClass:"type-desc"}),s("div",{staticClass:"type-preview",style:t.previewSize},[s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tags",{attrs:{tags:t.tagList}})],1)]),s("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[s("i",{staticClass:"fas fa-code"})])]),s("div",{staticClass:"type-wrapper"},[s("div",{staticClass:"type-title"},[t._v("Dot Tags")]),s("div",{staticClass:"type-desc"}),s("div",{staticClass:"type-preview",style:t.previewSize},[s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tags",{attrs:{tags:t.tagList,type:"dot"}})],1)]),s("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[s("i",{staticClass:"fas fa-code"})])]),s("div",{staticClass:"type-wrapper"},[s("div",{staticClass:"type-title"},[t._v("Static Label Tags")]),s("div",{staticClass:"type-desc"}),s("div",{staticClass:"type-preview",style:t.previewSize},[s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tag",{attrs:{"tag-text":"성공",color:"green",type:"label"}})],1),s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tags",{attrs:{type:"label"}})],1)]),s("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[s("i",{staticClass:"fas fa-code"})])]),s("div",{staticClass:"type-wrapper"},[s("div",{staticClass:"type-title"},[t._v(" Label Tags")]),s("div",{staticClass:"type-desc"}),s("div",{staticClass:"type-preview",style:t.previewSize},[s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tags",{attrs:{tags:t.tagList,type:"label"}})],1)]),s("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[s("i",{staticClass:"fas fa-code"})])]),s("div",{staticClass:"type-wrapper"},[s("div",{staticClass:"type-title"},[t._v(" Event")]),s("div",{staticClass:"type-desc"}),s("div",{staticClass:"type-preview",style:t.previewSize},[s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tags",{attrs:{tags:t.tagList,type:"label"},on:{select:t.selectTag}})],1)]),s("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[s("i",{staticClass:"fas fa-code"})])]),s("div",{staticClass:"type-wrapper"},[s("div",{staticClass:"type-title"},[t._v(" Hover Effect - [One of A Kind]")]),s("div",{staticClass:"type-desc"}),s("div",{staticClass:"type-preview",style:t.previewSize},[s("div",{staticClass:"hw-tags-wrapper"},[s("hw-tags",{attrs:{tags:t.tagList,type:"label","hover-effect":"one-of-a-kind"}})],1)]),s("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[s("i",{staticClass:"fas fa-code"})])])]],2)],1)])},i=[],l=a("1999"),c=a("af14"),n={name:"hw-tags-view",components:{HwTag:c["a"],InformationView:l["a"]},data(){return{colorPalette:["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown","gray"],tagList:[{id:0,color:"green",tagText:"Green"},{id:1,color:"red",tagText:"Red"},{id:2,color:"blue",tagText:"Blue"},{id:3,color:"orange",tagText:"Orange"}],usage:"// tagList: {id: 0, color: '', tagText: ''}<hw-tags :tags='tagList' type='{line|dot|text}'></hw-tags>",eventData:[],contentsList:[{title:"Standard",description:"A Standard Tags Menu. 기본 태그 ",option:{type:"line"},source:"<hw-tags :tags='tagList'></hw-tags>"},{title:"Dot Tags",description:"",option:{type:"dot"},source:"<hw-tags :tags='tagList' type='dot'></hw-tags>"},{title:"Static Label Tags",description:"Standard Status Label",option:{type:"selection"},source:"<hw-tags type='label'></hw-tags>"},{title:"Label Tags",description:"Standard Status Label",option:{type:"selection"},source:"<hw-tags :tags='tagList' type='label'></hw-tags>"}],propsData:[{name:"type",type:"String",default:"line",desc:"[line, dot, label]"},{name:"tags",type:"Array",default:"",desc:"사용자 지정 추가  태그 리스트"}],previewSize:{width:"100%"},showInfo:!1,infoComp:"",tabList:[{name:"Types",key:"type"},{name:"Information",key:"info"}]}},created(){},methods:{toggleCode(t){let s=t.target.nextSibling.classList.value;s.indexOf("show")>-1?t.target.nextSibling.classList.remove("show"):t.target.nextSibling.classList.add("show")},addTags(t){let s=this.tagList.length+1;this.tagList.push({id:s,color:t,tagText:t})},setContents(t){"info"===t?(this.showInfo=!0,this.infoComp=l["a"]):(this.showInfo=!1,this.infoComp=null)},selectTag(t){alert(t.tagText)}}},d=n,o=(a("9136"),a("2877")),r=Object(o["a"])(d,e,i,!1,null,null,null);s["default"]=r.exports},8042:function(t,s,a){},9136:function(t,s,a){"use strict";a("8042")},d16e:function(t,s,a){"use strict";a("d1b3")},d1b3:function(t,s,a){}}]);
//# sourceMappingURL=chunk-25f6df9d.a9997747.js.map