(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-727eccaa"],{5347:function(e,l,t){"use strict";t.r(l);var i=function(){var e=this,l=e._self._c;return l("div",{staticClass:"game-board-body"},[l("div",{ref:"gBoard",style:e.cellStyle,attrs:{id:"game-board",tabindex:"1"},on:{click:e.addTile,keydown:function(l){return l.preventDefault(),e.controller.apply(null,arguments)}}},[e._l(e.cells,(function(e){return l("div",{key:"cell_"+e.id,staticClass:"cell",attrs:{id:["cell_"+e.id]}})})),e._l(e.tiles,(function(t){return l("div",{key:"tile_"+t.id,staticClass:"tile",style:{"--x":t.x,"--y":t.y,"--bg-lightness":100-20*Math.log2(t.tile.value)+"%"},attrs:{id:["tile_"+t.id]}},[e._v(" "+e._s(t.tile.value)+" ")])}))],2)])},s=[],r={name:"G2048",data(){return{start:!1,cells:[],tiles:[],gridSize:4,cellSize:10}},computed:{cellGap(){return this.cellSize/10},cellStyle(){return{"--grid-size":this.gridSize,"--cell-size":this.cellSize+"vmin","--cell-gap":this.cellGap+"vmin"}},emptyCells(){return this.cells.filter(e=>null==e.tile)}},created(){this.cells=this.createCell()},mounted(){this.$refs.gBoard.focus()},methods:{setTileValue(){return Math.random()>.2?2:4},createCell(){let e=new Array(this.gridSize*this.gridSize).fill();return e.forEach((l,t)=>{const i={x:t%this.gridSize,y:Math.floor(t/this.gridSize),id:t,tile:null};e[t]=i}),e},selectCell(e){console.log(e)},getRandomCell(){const e=Math.floor(Math.random()*this.emptyCells.length);return this.emptyCells[e]},addTile(){const e=this.getRandomCell();e.tile={value:this.setTileValue()},this.tiles.push(e),this.cells[e.id]=e},changeTile(){},controller(e){const l=e.key;let t=[];switch(l){case" ":if(this.start)return;this.start=!0,this.addTile(),this.addTile();break;case"Escape":this.cells=this.createCell(),this.tiles=[],this.start=!1;break;case"ArrowUp":t=this.cellByColumn(),this.slideTile(t);break;case"ArrowLeft":t=this.cellByRow(),this.slideTile(t);break;case"ArrowRight":t=this.cellByRow().map(e=>[...e].reverse()),this.slideTile(t);break;case"ArrowDown":t=this.cellByColumn().map(e=>[...e].reverse()),this.slideTile(t);break}},cellByColumn(){return this.cells.reduce((e,l)=>(e[l.x]=e[l.x]||[],e[l.x][l.y]=l,e),[])},cellByRow(){return this.cells.reduce((e,l)=>(e[l.y]=e[l.y]||[],e[l.y][l.x]=l,e),[])},slideTile(e){e.forEach(e=>{for(let l=1;l<e.length;l++){if(null===e[l].tile)continue;let t=null;for(let i=l-1;i>=0;i--){if(null!=e[i].tile&&e[i].tile.value!==e[l].tile.value)break;t=i,console.log("laseCell",i)}if(null!==t){const i=this.findTileIndex(e[l].id),s=this.findTileIndex(e[t].id);null==e[t].tile?(e[t].tile=e[l].tile,this.tiles[i]=e[t]):(e[t].tile.value+=e[l].tile.value,this.tiles[i]=e[t],this.tiles.splice(s,1)),e[l].tile=null}}}),this.addTile()},findTileIndex(e){return this.tiles.findIndex(l=>l.id===e)}}},a=r,n=(t("fa5d"),t("2877")),c=Object(n["a"])(a,i,s,!1,null,"28c7dded",null);l["default"]=c.exports},ab9d:function(e,l,t){},fa5d:function(e,l,t){"use strict";t("ab9d")}}]);
//# sourceMappingURL=chunk-727eccaa.dd60452e.js.map