(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ddb6a13"],{"2cb8":function(t,e,s){},"3d00":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"color-generator-container",class:{dark:t.isDark}},[s("div",{staticClass:"color-generator",class:["gradient"],style:t.setBackground},[s("div",{staticClass:"cg-title bold"},[t._v(" Color Generator ")]),s("div",{staticClass:"insert-color-wrapper hw-input underline massive fluid"},[s("input",{attrs:{type:"text",placeholder:"색상을 입력하세요.(Hex, rgb, ..)"},on:{input:t.setColor}})]),t._v(" "+t._s(t.color)+" / "+t._s(t.toHEX)+" / "+t._s(t.toRGB)+" / "+t._s(t.toHSL)+" ")]),s("div",{staticClass:"result-colors"},[s("div",{staticClass:"selected-color",style:{background:t.setLightness}},[t._v(t._s(t.setLightness))]),s("div",{staticClass:"selected-color",style:{backgroundColor:t.setBrightness}},[t._v(t._s(t.setBrightness))]),s("div",{staticClass:"selected-color",style:t.setBackground},[t._v(t._s(t.color))]),s("div",{staticClass:"selected-color",style:{backgroundColor:t.setDarkness}},[t._v(t._s(t.setDarkness))]),s("div",{staticClass:"selected-color",style:{backgroundColor:t.setSaturate}},[t._v(t._s(t.setSaturate))]),s("h1",{style:{color:t.toLightness,fontSize:"30px",fontWeight:"900"}},[t._v(t._s(t._f("uppercase")(t.toLightness)))]),s("div",{staticClass:"select-color-controller"},[s("div",{staticClass:"hue-list"},t._l(t.setHuePalette,(function(e,o){return s("div",{key:"hue-"+o,staticClass:"color-bar",style:{width:"3.6%",height:"10px",backgroundColor:e},on:{click:function(s){return t.selectHue(e,o)}}})})),0),s("hw-slider",{attrs:{"max-value":360,"show-label":!0},on:{update:t.setSlide},model:{value:t.saturateValue,callback:function(e){t.saturateValue=e},expression:"saturateValue"}})],1),s("div",{staticClass:"reference-color"},[s("div",{staticClass:"title"},[t._v("3색 조화")]),s("div",{staticClass:"reference-color-list"},t._l(t.setTripleColor,(function(t,e){return s("div",{key:"hue-"+e,staticClass:"selected-color",style:{backgroundColor:t}})})),0),s("div",{staticClass:"title"},[t._v("유사색 조화")]),s("div",{staticClass:"reference-color-list"},t._l(t.setKindlyColor,(function(t,e){return s("div",{key:"hue-"+e,staticClass:"selected-color",style:{backgroundColor:t}})})),0),s("div",{staticClass:"title"},[t._v("보색 조화")]),s("div",{staticClass:"reference-color-list"},[s("div",{staticClass:"selected-color",style:{backgroundColor:t.color}}),s("div",{staticClass:"selected-color",style:{backgroundColor:t.setComplimentColor}})])])]),s("div",{staticClass:"cg-close",on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-remove"})])])},r=[],i=s("66cb"),l=s.n(i),n={name:"ColorGenerator",data:function(){return{color:"#957FB4",tColor:"#957FB4",tinyColor:{},resultColor:[],saturateValue:0,brightness:"",lightness:"",darkness:"",tint:"",saturate:10}},computed:{setBackground:function(){return{backgroundColor:this.color}},isDark:function(){return l()(this.color).isDark()},toRGB:function(){return l()(this.color).toRgbString()},toHEX:function(){return l()(this.color).toHexString()},toHSL:function(){return l()(this.color).toHslString()},toLightness:function(){return l()(this.color).spin(this.saturateValue).toHexString()},setLightness:function(){return l()(this.color).lighten(10).toHexString()},setDarkness:function(){return l()(this.color).darken(10).toHexString()},setBrightness:function(){return l()(this.color).brighten(10).toHexString()},setHuePalette:function(){var t=[];while(t.length<36)t.push(this.setSpin(10*t.length));return t},setTripleColor:function(){var t=this,e=[];return[0,120,240].forEach((function(s){e.push(l()(t.color).spin(s).toHexString())})),e},setKindlyColor:function(){var t=this,e=[];return[-30,0,30].forEach((function(s){e.push(l()(t.color).spin(s).toHexString())})),e},setComplimentColor:function(){return l()(this.color).complement().toHexString()},setSaturate:function(){return l()(this.color).saturate(this.saturate).toHexString()}},created:function(){},methods:{setColor:function(t){var e=l()(t.target.value);e.isValid()&&(this.color=l()(e).toHexString(),this.tColor=l()(e).clone().toHexString())},setSlide:function(t){this.saturateValue=t.value,this.color=this.toLightness},setSpin:function(t){return l()(this.tColor).spin(t).toHexString()},selectHue:function(t,e){this.color=t,this.saturateValue=10*(e+1)-5}}},c=n,a=(s("4d95"),s("2877")),u=Object(a["a"])(c,o,r,!1,null,null,null);e["default"]=u.exports},"4d95":function(t,e,s){"use strict";s("2cb8")}}]);
//# sourceMappingURL=chunk-4ddb6a13.e4990996.js.map