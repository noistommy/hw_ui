(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df873"],{"89fb":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"SliderView"}},[i("div",{staticClass:"contents-detail-view"},[i("div",{staticClass:"contents-section"},[i("div",{staticClass:"section-title"},[t._v("Type")]),t._l(t.contentsList,(function(e){return i("div",{key:e.id,staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[t._v(" "+t._s(e.title))]),i("div",{staticClass:"type-desc"},[t._v(t._s(e.description))]),t._l(e.option,(function(s,o){return i("div",{key:"option-"+e.id+"-"+o,staticClass:"type-preview"},[i("hw-slider",t._b({on:{update:t.setResult},model:{value:s.modelValue,callback:function(e){t.$set(s,"modelValue",e)},expression:"el.modelValue"}},"hw-slider",s.props,!1))],1)}))],2)})),i("div",{staticClass:"type-wrapper"},[i("div",{staticClass:"type-title"},[t._v(" 입력값 적용 설정 ")]),i("div",{staticClass:"type-desc"},[i("div",{staticClass:"hw-input inline"},[i("input",{staticClass:"hw-input",attrs:{type:"number"},on:{input:t.setInputValue}})]),t.errorMsg?i("div",{staticClass:"type-error danger-color"},[t._v(" "+t._s(t.errorMsg)+" ")]):t._e()]),i("div",{staticClass:"type-preview"},[i("hw-slider",{on:{update:t.setInitInput,error:t.setError},model:{value:t.initInput,callback:function(e){t.initInput=e},expression:"initInput"}})],1)])],2)])])},o=[],l={name:"HwSliderView",data:function(){return{initInput:0,maxValue:100,errorMsg:null,contentsList:[{title:"Standard",description:"기본 옵션",option:[{modelValue:45,props:{}}]},{id:1,title:"초기값 설정",description:"",option:[{modelValue:35,props:{}}]},{id:2,title:"사용자 범위 설정",description:"",option:[{modelValue:30,props:{maxValue:60}}]},{id:3,title:"범위 표시 설정",description:"라벨만 표시 | 결과값만 표시 | 전부 표시",option:[{modelValue:35,props:{showLabel:!0}},{modelValue:45,props:{showValue:!0}},{modelValue:55,props:{showValue:!0,showLabel:!0}}]},{id:4,title:"툴팁 사용 설정",description:"",option:[{modelValue:0,props:{showTooltip:!0}}]},{id:5,title:"사용자 단위 설정",description:"",option:[{modelValue:0,props:{maxValue:12,unitText:"시",showValue:!0,showLabel:!0,showStep:!0,stepSize:1}},{modelValue:25,props:{maxValue:60,unitText:"분",showValue:!0,showLabel:!0}},{modelValue:30,props:{maxValue:60,unitText:"초",showValue:!0,showLabel:!0}}]},{id:6,title:"비활성 설정",description:"",option:[{modelValue:0,props:{disabled:!0}}]},{id:7,title:"스텝 설정",description:"",option:[{modelValue:10,props:{showStep:!0,stepSize:10}},{modelValue:10,props:{showStep:!0,stepSize:20}},{modelValue:10,props:{showStep:!0,stepSize:25}}]}]}},methods:{setValue:function(t){this.contentsList=t.value},setInitInput:function(t){this.initInput=t.value},setInputValue:function(t){this.errorMsg=null,this.initInput=parseInt(t.target.value)},setResult:function(t){console.log(t)},setError:function(t){this.errorMsg=t.message}}},n=l,a=i("2877"),p=Object(a["a"])(n,s,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0df873.2bf6d92b.js.map