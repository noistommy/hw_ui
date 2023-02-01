(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c4d"],{"1f24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Tooltip-view"},[e("div",{staticClass:"contents-detail-view"},[e("div",{staticClass:"contents-section"},[e("div",{staticClass:"section-title"},[t._v("Information")]),e("div",{staticClass:"info-wrapper"},[e("div",{staticClass:"name-info"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Name")]),e("div",{staticClass:"panel-body"},[t._v(t._s("Hw-"+t.$route.name))])])]),e("div",{staticClass:"props-info"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Props")]),e("div",{staticClass:"panel-body table"},[e("div",{staticClass:"table"},[t._m(0),t._l(t.propsData,(function(s){return e("div",{key:s.name,staticClass:"tr"},[e("div",{staticClass:"td"},[t._v(t._s(s.name))]),e("div",{staticClass:"td"},[t._v(t._s(s.type))]),e("div",{staticClass:"td"},[t._v(t._s(s.default))]),e("div",{staticClass:"td"},[t._v(t._s(s.desc))])])}))],2)])])]),e("div",{staticClass:"usege-info"},[e("div",{staticClass:"props-info"}),e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Usage")]),e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"language-css"},[e("code",[t._v(t._s(t.usage))])])])])])])]),e("div",{staticClass:"contents-section"},[e("div",{staticClass:"section-title"},[t._v("Types")]),e("div",{staticClass:"type-wrapper"},[e("div",{staticClass:"type-title"},[t._v("Standard")]),e("div",{staticClass:"type-desc"},[t._v("A Standard Tooltip")]),e("div",{staticClass:"type-preview"},[e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip",value:"standard",expression:"'standard'"}],staticClass:"hw-button secondary"},[t._v("기본")])]),e("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[e("i",{staticClass:"fas fa-code"})]),e("div",{staticClass:"type-code panel"},[e("div",{staticClass:"panel-header"},[t._v("code")]),e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"language-css"},[e("code",{staticClass:"code",domProps:{textContent:t._s(t.codes["standard"])}})])])])]),e("div",{staticClass:"type-wrapper"},[e("div",{staticClass:"type-title"},[t._v("Placement(direction)")]),e("div",{staticClass:"type-desc"},[t._v("Set Tooltip position")]),e("div",{staticClass:"type-preview"},[e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.top",value:"top",expression:"'top'",modifiers:{top:!0}}],staticClass:"hw-button secondary"},[t._v("Top")]),e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.bottom",value:"bottom",expression:"'bottom'",modifiers:{bottom:!0}}],staticClass:"hw-button secondary"},[t._v("Bottom")]),e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.left",value:"left",expression:"'left'",modifiers:{left:!0}}],staticClass:"hw-button secondary"},[t._v("Left")]),e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.right",value:"right",expression:"'right'",modifiers:{right:!0}}],staticClass:"hw-button secondary"},[t._v("Right")])]),e("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[e("i",{staticClass:"fas fa-code"})]),e("div",{staticClass:"type-code panel"},[e("div",{staticClass:"panel-header"},[t._v("code")]),e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"language-css"},[e("code",{staticClass:"code",domProps:{textContent:t._s(t.codes["standard"])}})])])])]),e("div",{staticClass:"type-wrapper"},[e("div",{staticClass:"type-title"},[t._v("Placement(position)")]),e("div",{staticClass:"type-desc"},[t._v("Set Tooltip position")]),e("div",{staticClass:"type-preview"},[e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.bottom.start",value:"start",expression:"'start'",modifiers:{bottom:!0,start:!0}}],staticClass:"hw-button secondary"},[t._v("Start")]),e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.bottom.center",value:"center",expression:"'center'",modifiers:{bottom:!0,center:!0}}],staticClass:"hw-button secondary"},[t._v("Center")]),e("div",{directives:[{name:"hw-tooltip",rawName:"v-hw-tooltip.bottom.end",value:"end",expression:"'end'",modifiers:{bottom:!0,end:!0}}],staticClass:"hw-button secondary"},[t._v("End")])]),e("div",{staticClass:"type-btn",on:{click:t.toggleCode}},[e("i",{staticClass:"fas fa-code"})]),e("div",{staticClass:"type-code panel"},[e("div",{staticClass:"panel-header"},[t._v("code")]),e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"language-css"},[e("code",{staticClass:"code",domProps:{textContent:t._s(t.codes["standard"])}})])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tr"},[e("div",{staticClass:"th"},[t._v("Name")]),e("div",{staticClass:"th"},[t._v("Type")]),e("div",{staticClass:"th"},[t._v("Default")]),e("div",{staticClass:"th"},[t._v("Desc")])])}],o={name:"hw-tooltip-view",data(){return{usage:"<div v-hw-tooltip='text' ></div>",propsData:[{name:"brand",type:"String",default:"",desc:"[primary, secondary, info, danger]"},{name:"disabled",type:"Boolean",default:"false",desc:"버튼 비활성 유무 "},{name:"iconType",type:"String",default:"gi",desc:"GTRIS ICON 타입 [gi, gis]"},{name:"icon",type:"String",default:"",desc:" 아이콘 버튼 표출 유무 및 표출 아이콘. GTRIS ICON "},{name:"circle",type:"Boolean",default:"false",desc:"아이콘 버튼 원형 표출 유무"},{name:"selected",type:"Boolean",default:"false",desc:"선택된 버튼 표시 유무  "},{name:"withIcon",type:"String",default:"",desc:"아이콘 포함된 버튼 유무 및 표출 아이콘. GTRIS ICON"},{name:"iconPos",type:"String",default:"",desc:"아이콘 표출 위치 [left | right]"},{name:"size",type:"String",default:"",desc:"버튼 사이즈 [tiny, small, normal, large, huge]"},{name:"fluid",type:"Boolean",default:"false",desc:"꽉 찬 버튼 "},{name:"buttonText",type:"String",default:"",desc:"버튼 표출 텍스트"},{name:"hover",type:"Boolean",default:"false",desc:""},{name:"color",type:"String",default:"",desc:"버튼 색상 적용"}],codes:{standard:'<hw-button button-text="Button" />',brands:'<hw-button brand="{primary | secondary | info | danger}" button-text="Button" />',disabled:'<hw-button disabled button-text="Button" />',icon:'<hw-button icon="{icon-name}" icon-type="{gi | gis}" button-text="Button" />',circle:'<hw-button circle icon="{icon-name}" icon-type="{gi | gis}" button-text="Button" />',selected:'<hw-button selected button-text="Button" />',iconWith:'<hw-button with-icon="{icon-name}" icon-pos="{left | right}" button-text="Button" />',size:'<hw-button size="{tiny || small || normal || large || huge}" button-text="Button" />',fluid:'<hw-button fluid button-text="Button"/>',events:'<hw-button @onclick @onenter @onleave @onover button-text="Button" />',colors:'<hw-button color="{color-name}" button-text="Button" />'},colorPalette:["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown","gray"]}},methods:{toggleCode(t){let e=t.target.nextSibling.classList.value;e.indexOf("show")>-1?t.target.nextSibling.classList.remove("show"):t.target.nextSibling.classList.add("show")},buttonClick(t){alert(`${t.type} on ${t.target.textContent} button`)}}},n=o,l=s("2877"),d=Object(l["a"])(n,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b6c4d.2f113d86.js.map