(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ccf766"],{"0542":function(e,t,i){},"28e0":function(e,t,i){"use strict";i("0542")},"2fbc":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"context-menu-view"},[i("div",{staticClass:"contents-detail-view"},[i("hw-tab",{attrs:{"tab-list":e.tabList,"tab-class":"tab-item"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.tab;return[i("span",{on:{click:function(t){return e.setContents(l.key)}}},[e._v(e._s(l.name))])]}}])}),i("div",{staticClass:"contents-section",attrs:{id:"HwBreadcrumb"}},[e.showInfo?[i(e.infoComp,{tag:"components",attrs:{usage:e.usage,"props-data":e.propsData,"event-data":e.eventData}})]:[i("div",{staticClass:"section-title"},[e._v("Types")]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{type:e.type,"parents-list":e.parentsLevel,"id-key":"level"},on:{move:e.getLink}})],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본 (현재 경로 SLOT)")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{type:e.type,"parents-list":e.parentsLevel,"active-level":e.activeLevel,"id-key":"level"}},[i("div",{staticClass:"slot-title"},[e._v("현재 페이지")])])],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본 (step mode) :: 추후 따로 모듈로 제작 예정")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{type:"stepper","parents-list":e.parentsLevel,"active-level":e.activeLevel,"id-key":"level"}})],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본 (아이콘)")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{"parents-list":e.parentsLevel,"active-level":e.activeLevel,"is-icon":!0,"id-key":"level"},on:{move:e.getLink}})],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{"parents-list":e.parentsLevel,"active-level":e.activeLevel,divider:e.divider,"id-key":"level"}})],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본 (타이틀 표기 축약)")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{"parents-list":e.parentsLevel_long,"active-level":e.activeLevel,divider:e.divider,"id-key":"level"}})],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본 (사용자 구분선 사용)")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{"parents-list":e.parentsLevel,"active-level":e.activeLevel,divider:"|","id-key":"level"}})],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본 (SLOT 구분선 사용)")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{"parents-list":e.parentsLevel,"active-level":e.activeLevel,divider:"|","id-key":"level"}},[i("i",{staticClass:"gi gi-short-arrow-right-alt",attrs:{slot:"divider"},slot:"divider"})])],1)]),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[e._v("기본")]),i("div",{staticClass:"type-desc"}),i("div",{staticClass:"type-preview",style:e.previewSize},[i("hw-breadcrumb",{attrs:{"parents-list":e.convertedPath,"display-path":5,"id-key":"level"}})],1)])]],2)],1)])},s=[],a={name:"breadcrumb-view",data:function(){return{showInfo:!1,infoComp:"",tabList:[{name:"Types",key:"type"},{name:"Information",key:"info"}],previewSize:{width:"770px"},type:"divider",parentsLevel:[{level:0,title:"Home",link:"/",icon:"user"},{level:1,title:"Level1",link:"/level_1",icon:"pencil"},{level:2,title:"Level2",link:"/level_1/level_2",icon:"browser"}],parentsLevel_long:[{level:0,title:"개인드라이브",link:"",icon:"user"},{level:1,title:"김 수한무 거북이와 두루미의 폴더",link:"",icon:"pencil"},{level:2,title:"아리스토멜레스가 존경하는 소크라테스의 외처조카의 폴더",link:"",icon:"browser"},{level:3,title:"널 믿었던만큼 난 널 내 친구에게 소개시켜준 사람의 폴더",link:"",icon:"browser"}],parentsLevel_many:[{level:0,title:"개인드라이브",link:"/",icon:"user"},{level:1,title:"개인 폴더 1",link:"/level_1",icon:"pencil"},{level:2,title:"개인 폴더 2",link:"/level_1/level_2",icon:"browser"},{level:3,title:"개인 폴더 3",link:"/level_1/level_2/level_2_1",icon:"browser"},{level:4,title:"개인 폴더 4",link:"/level_1",icon:"pencil"},{level:5,title:"개인 폴더 5",link:"/level_1/level_2",icon:"browser"},{level:6,title:"개인 폴더 6",link:"/level_1/level_2/level_2_1",icon:"browser"},{level:7,title:"개인 폴더 7",link:"/level_1",icon:"pencil"},{level:8,title:"개인 폴더 8",link:"/level_1/level_2",icon:"browser"},{level:9,title:"개인 폴더 9",link:"/level_1/level_2/level_2_1",icon:"browser"}],stringPath:"개인 드라이브/개인폴더1/개인폴더2/개인폴더3/개인폴더4/현재폴더",convertedPath:[],activeLevel:"Selected Item",divider:"/",isIcon:!0,iconName:"folder",toggle:!1}},created:function(){this.setPathArray()},methods:{switchBtn:function(){this.toggle=!this.toggle},setPathArray:function(){var e=this,t=this.stringPath.split("/");console.log(t),t.forEach((function(t,i){var l={level:0,title:"",link:"",icon:""};l.title=t,l.level=i,e.convertedPath.push(l)}))},getLink:function(e){console.log(e)}}},v=a,r=(i("28e0"),i("2877")),c=Object(r["a"])(v,l,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-60ccf766.b4a8d2ea.js.map