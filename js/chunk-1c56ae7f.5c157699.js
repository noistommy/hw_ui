(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c56ae7f"],{1999:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info-view"},[a("div",{staticClass:"section-title"},[t._v("Information")]),a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"info-title"},[t._v("Name")]),a("div",{staticClass:"name-info"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[t._v(t._s("Hw-"+t.$route.name))])])])]),a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"info-title"},[t._v("Usage")]),a("div",{staticClass:"usege-info"},[a("div",{staticClass:"props-info"}),a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[a("pre",{staticClass:"language-css"},[a("code",[t._v(t._s(t.usage))])])])])])]),a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"info-title"},[t._v("Props")]),a("div",{staticClass:"props-info"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body table"},[a("div",{staticClass:"table"},[t._m(0),t._l(t.propsData,(function(s){return a("div",{key:s.name,staticClass:"tr"},[a("div",{staticClass:"td"},[t._v(t._s(s.name))]),a("div",{staticClass:"td"},[t._v(t._s(s.type))]),a("div",{staticClass:"td"},[t._v(t._s(s.default))]),a("div",{staticClass:"td"},[t._v(t._s(s.desc))])])}))],2)])])])]),a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"info-title"},[t._v("Event")]),a("div",{staticClass:"event-info"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body table"},[a("div",{staticClass:"table"},[t._m(1),t._l(t.eventData,(function(s){return a("div",{key:s.name,staticClass:"tr"},[a("div",{staticClass:"td"},[t._v(t._s(s.name))]),a("div",{staticClass:"td"},[t._v(t._s(s.type))]),a("div",{staticClass:"td"},[t._v(t._s(s.desc))])])}))],2)])])])])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tr"},[a("div",{staticClass:"th"},[t._v("Name")]),a("div",{staticClass:"th"},[t._v("Type")]),a("div",{staticClass:"th"},[t._v("Default")]),a("div",{staticClass:"th"},[t._v("Desc")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tr"},[a("div",{staticClass:"th"},[t._v("Name")]),a("div",{staticClass:"th"},[t._v("Param Type")]),a("div",{staticClass:"th"},[t._v("Desc")])])}],i={name:"information-view",props:{usage:String,propsData:Array,eventData:Array}},o=i,l=(a("2189"),a("2877")),p=Object(l["a"])(o,e,r,!1,null,"b111494a",null);s["a"]=p.exports},2189:function(t,s,a){"use strict";a("29c8")},"29c8":function(t,s,a){},"6ca4":function(t,s,a){},b6b4:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"date-picker-view"},[a("div",{staticClass:"contents-detail-view"},[a("hw-tab",{attrs:{"tab-list":t.tabList,"tab-class":"tab-item"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.tab;return[a("span",{on:{click:function(s){return t.setContents(e.key)}}},[t._v(t._s(e.name))])]}}])}),a("div",{staticClass:"contents-section"},[t.showInfo?[a(t.infoComp,{tag:"components",attrs:{usage:t.usage,"props-data":t.propsData,"event-data":t.eventData}})]:[a("div",{staticClass:"section-title"},[t._v("Types")]),a("div",{staticClass:"content-wrap type-wrapper"},[a("div",{staticClass:"type-title"},[t._v("기본 게이지 바")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"기본",data:t.progressData}})],1)]),a("div",{staticClass:"type-title"},[t._v("둥근 게이지 바")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"Round Type: List",data:t.progressData,round:!0}}),a("hw-progress-bar",{attrs:{title:"Round Type: Item",data:t.progressData,round:!0,"round-type":"item"}})],1)]),a("div",{staticClass:"type-title"},[t._v("테두리 사용")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"기본 게이지 테두리 ",data:t.progressData,"is-border":!0}}),a("hw-progress-bar",{attrs:{title:"둥근 게이지 테두리 ",data:t.progressData,round:!0,"is-border":!0}}),a("hw-progress-bar",{attrs:{title:"둥근 게이지 테두리 ",data:t.progressData,round:!0,"round-type":"item","is-border":!0}})],1)]),a("div",{staticClass:"type-title"},[t._v("게이지 두께 사용자화")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"두께 10px ",data:t.progressData,"thick-size":t.thick}}),a("hw-progress-bar",{attrs:{title:"두께 20px",data:t.progressData,"thick-size":20}}),a("hw-progress-bar",{attrs:{title:"두께 30px ",data:t.progressData,"thick-size":30}}),a("hw-progress-bar",{attrs:{title:"두께 40px ",data:t.progressData,"thick-size":40}})],1)]),a("div",{staticClass:"type-title"},[t._v("범주 데이터 표시 타입")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"기본 범주 표시",data:t.progressData,"use-scale":!0}}),a("hw-progress-bar",{attrs:{title:"원 범주 표시",data:t.progressData,"use-scale":!0,"scale-type":"circle"}}),a("hw-progress-bar",{attrs:{title:"둥근 범주 표시",data:t.progressData,"use-scale":!0,"scale-type":"round"}}),a("hw-progress-bar",{attrs:{title:"선 범주 표시",data:t.progressData,"use-scale":!0,"scale-type":"line"}})],1)]),a("div",{staticClass:"type-title"},[t._v("범주 데이터 표시 간격")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"범주 표시 간격 조절. 20px",data:t.progressData,"use-scale":!0}}),a("hw-progress-bar",{attrs:{title:"범주 표시 간격 조절. 40px",data:t.progressData,"use-scale":!0,"scale-gap":40}}),a("hw-progress-bar",{attrs:{title:"범주 표시 간격 조절. 60px",data:t.progressData,"use-scale":!0,"scale-gap":60}})],1)]),a("div",{staticClass:"type-title"},[t._v("범주 표시 위치")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"왼쪽 범주 표시",data:t.progressData,"use-scale":!0,"scale-direction":"start"}}),a("hw-progress-bar",{attrs:{title:"오른쪽 범주 표시",data:t.progressData,"use-scale":!0,"scale-direction":"end"}}),a("hw-progress-bar",{attrs:{title:"중앙 범주 표시",data:t.progressData,"use-scale":!0,"scale-direction":"center"}})],1)]),a("div",{staticClass:"type-title"},[t._v("게이지 텍스트 표시")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"아이템 이름",data:t.progressData,"show-title":!0}}),a("hw-progress-bar",{attrs:{title:"아이템 값",data:t.progressData,"show-value":!0}}),a("hw-progress-bar",{attrs:{title:"이름 우선 표시 ",data:t.progressData,"show-value":!0,"show-title":!0}})],1)]),a("div",{staticClass:"type-title"},[t._v("게이지 텍스트 스타일")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"색상",data:t.progressData,"show-title":!0,"value-style":{color:"#fff"}}}),a("hw-progress-bar",{attrs:{title:"색상2",data:t.progressData,"show-title":!0,"value-style":{color:"#2985db"}}}),a("hw-progress-bar",{attrs:{title:"색상+두께",data:t.progressData,"show-title":!0,"value-style":{color:"#fff",fontWeight:600}}})],1)]),a("div",{staticClass:"type-title"},[t._v("기본 게이지 텍스트 위치")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"Center",data:t.progressData,"show-title":!0}}),a("hw-progress-bar",{attrs:{title:"left",data:t.progressData,"show-value":!0,"value-pos":"left"}}),a("hw-progress-bar",{attrs:{title:"Right",data:t.progressData,"show-value":!0,"show-title":!0,"value-pos":"right"}}),a("hw-progress-bar",{attrs:{title:"Top-Center",data:t.progressData,"show-title":!0,"value-pos":"top-center"}}),a("hw-progress-bar",{attrs:{title:"Top-left",data:t.progressData,"show-value":!0,"value-pos":"top-left"}}),a("hw-progress-bar",{attrs:{title:"Top-Right",data:t.progressData,"show-value":!0,"show-title":!0,"value-pos":"top-right"}}),a("hw-progress-bar",{attrs:{title:"Bottom-Center",data:t.progressData,"show-title":!0,"value-pos":"bottom-center"}}),a("hw-progress-bar",{attrs:{title:"Bottom-left",data:t.progressData,"show-value":!0,"value-pos":"bottom-left"}}),a("hw-progress-bar",{attrs:{title:"Bottom-Right",data:t.progressData,"show-value":!0,"show-title":!0,"value-pos":"bottom-right"}})],1)]),a("div",{staticClass:"type-title"},[t._v("게이지 컬러 사용자화")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"사용자 컬러셋",data:t.progressData,"color-set":t.colorSetClasses}})],1)]),a("div",{staticClass:"type-title"},[t._v("제목 사용 안함")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{data:t.progressData}})],1)]),a("div",{staticClass:"type-title"},[t._v("제목 슬롯")]),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:"none",data:t.progressData}},[a("div",{staticClass:"h1 slotTitle",attrs:{slot:"title"},slot:"title"},[t._v("사용자 지정 제목 사용")])])],1)]),a("div",{staticClass:"type-title"},[t._v("게이지 데이터 사용")]),a("div",{staticClass:"type-desc"}),a("div",{staticClass:"type-preview"},[a("div",{staticClass:"insert-value"},[a("span",[t._v("게이지 벨류 :")]),a("div",{staticClass:"hw-input inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gauge.ratio,expression:"gauge.ratio"}],staticClass:"hw-input",class:"standard",style:{width:"80px",textAlign:"center",fontWeight:600},attrs:{placeholder:"0"},domProps:{value:t.gauge.ratio},on:{input:function(s){s.target.composing||t.$set(t.gauge,"ratio",s.target.value)}}})])]),a("div",{staticClass:"progress-box"},[a("hw-progress-bar",{attrs:{title:t.exTitle,data:t.exDataList,"gauge-data":t.gauge,"show-title":!0,"is-border":!0,round:!0,"value-pos":"bottom-right","value-style":{color:"#999",fontSize:"1.2em"}}}),a("hw-progress-bar",{attrs:{title:t.exTitle,"gauge-data":t.gauge,"show-title":!0,"is-border":!0,round:!0,"value-pos":"bottom-right","value-style":{color:"#999",fontSize:"1.2em"}}})],1)])])]],2)],1)])},r=[],i=a("1999"),o={name:"hw-progress-bar-view",components:{InformationView:i["a"]},data:function(){return{tabList:[{name:"Types",key:"type"},{name:"Information",key:"info"}],showInfo:!1,usage:'<hw-progress-bar :title="title" :data="data" :colorSet="colorSetClasses" ></hw-progress-bar>',propsData:[{name:"title",type:"String",default:"Hw-Progress",desc:"프로그레스바 타이틀"},{name:"titleAlign",type:"String",default:"top-left",desc:"프로그레스바 타이틀 표시 위치. [top-left, top-center, top-right]"},{name:"data",type:"Array",default:"[{text: defaultText, ratio: 100, progress: 100, backgroundClass: blue}]",desc:"프로그레스바 렌더링을 위한 데이터 인스턴스"},{name:"data.text",type:"String",default:"",desc:"프로그레스 아이템 각각의 제목"},{name:"data.ratio",type:"Number",default:"",desc:"프로그레스 아이템 각각의 구성비"},{name:"data.progress",type:"Number",default:"",desc:"프로그레스 아이템 각각의 내부 비율"},{name:"data.backgroundClass",type:"String",default:"",desc:"프로그레스 아이템 색상 적용을 위한 클래스"},{name:"colorSet",type:"Array",default:"[        'red', 'orange', 'yellow', 'lightgreen'        'green', 'lightblue', 'blue', 'deepblue'        'purple', 'deeppurple', 'brown', 'gray'      ]",desc:"프로그레스 아이템 컬러셋 클래스 리스트"}],eventData:[],title:"Title",progressData:[{text:"자는중",textAlign:"center",ratio:20,progress:100},{text:"일어나는중",textAlign:"center",ratio:20,progress:100},{text:"씻는중",textAlign:"center",ratio:50,progress:100},{text:"가는중",ratio:10,progress:100}],colorSetClasses:["green","orange","gray","blue","deepblue","purple"],thick:10,exTitle:"주간 근무 현황 20시간 17분",exDataList:[{text:"40h",textAlign:"bottom-right",ratio:4e3/52,progress:100,backgroundClass:"secondary"},{text:"52h",textAlign:"bottom-right",ratio:100-4e3/52,progress:100,backgroundClass:"secondary"}],gauge:{ratio:50,background:"primary-bg"}}},methods:{setContents:function(t){"info"===t?(this.showInfo=!0,this.infoComp=i["a"]):(this.showInfo=!1,this.infoComp=null)}}},l=o,p=(a("dee8"),a("2877")),d=Object(p["a"])(l,e,r,!1,null,null,null);s["default"]=d.exports},dee8:function(t,s,a){"use strict";a("6ca4")}}]);
//# sourceMappingURL=chunk-1c56ae7f.5c157699.js.map