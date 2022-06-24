(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{454:function(e,t,a){e.exports=a.p+"static/media/NAT_counties.c46752c1.csv"},455:function(e,t,a){e.exports=a.p+"static/media/NAT_states.e22e9ae7.csv"},462:function(e,t,a){e.exports=a.p+"static/media/NAT.6db895be.geojson"},463:function(e,t,a){e.exports=a.p+"static/media/US_states.2aa3311d.geojson"},465:function(e,t,a){e.exports=a(807)},472:function(e,t,a){},474:function(e,t,a){},477:function(e,t,a){},727:function(e,t,a){},807:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(453),o=a.n(s),i=(a(472),a(26)),c=a(27),l=a(32),u=a(17),p=a(30),h=a(35),d=(a(474),a(815)),f=a(407),m=a(408),y=a(812),v=a(12),g=a(454),b=a.n(g),E=a(455),S=a.n(E),O=a(811),k=a(456),T=(a(477),a(479),function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.featureList;return r.a.createElement("div",null,r.a.createElement("h3",null,"Features"),r.a.createElement("div",{id:"scrollableDiv",style:{height:400,overflow:"auto",padding:"0 16px",border:"1px solid rgba(140, 140, 140, 0.35)"}},r.a.createElement(k.a,{dataLength:t.length,scrollableTarget:"scrollableDiv"},r.a.createElement(O.b,{dataSource:t,renderItem:function(t){return r.a.createElement(O.b.Item,{key:t.key,accessKey:t.key,onClick:e.props.onSelectFeature,style:{background:e.props.currentFeature===t.key?"#7b88b8":"white"}},r.a.createElement(O.b.Item.Meta,{title:t.feature}),r.a.createElement("div",null,"[Statistical Measures]"))}}))))}}]),t}(r.a.Component)),j=a(813),A=(a(727),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).marks=a.props.timeline.reduce(function(e,t){return e[t]="19"+t,e},{}),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"timeline"},r.a.createElement(j.a,{marks:this.marks,step:null,defaultValue:60,min:60,max:90,onChange:this.props.onSelectTime,trackStyle:{backgroundColor:"#f5f5f5"}}))}}]),t}(r.a.Component));function C(e,t){return v.j().domain(v.c(e)).range(v.k[t])}function _(e){v.m(e).style("visibility","hidden")}function D(e,t,a,n){return"<div>\n    <p>".concat(e,"</p>\n    <p><b>").concat(t,": </b>").concat(a,"<p>\n    <p><b>Year: </b>").concat(n,"</p>\n  </div>")}var w=a(817),M=a(814),R=a(425),P=(a(729),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleMapType=function(e){a.setState({map:e})},a.increaseZoomScale=function(){a.zoomTransition(v.l("#map"),1.2)},a.decreaseZoomScale=function(){a.zoomTransition(v.l("#map"),.8)},a.state={property:a.props.currentFeature+a.props.currentYear,showState:!0,x:0,y:0,zoomScale:1,map:"CHOROPLETH"},a.stateGeojson=[],a.countyGeojson=[],a.canvasRef=r.a.createRef(),a.ZOOM_SCALE_THRESHOLD=2,a.STATE_MAP_ID="g-state",a.COUNTY_MAP_ID="g-county",a.STATE_COLORS=7,a.COUNTY_COLORS=3,a.zoom=Object,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"zoomTransition",value:function(e,t){e.transition().delay(100).duration(700).call(this.zoom.scaleBy,t)}},{key:"drawMap",value:function(){var e=this,t=this.canvasRef.current,a=t.scrollWidth,n=t.scrollHeight,r=v.d().scale(a/1.2).translate([a/2,n/2]),s=v.e().projection(r),o=function(e,t,a){var n=t.map(function(t){return e+t}),r=[];return n.forEach(function(e){var t=a.map(function(t){return t.properties[e]});r=v.c(r.concat(t))}),r}(this.props.currentFeature,this.props.years,this.countyGeojson),i=C(o,this.STATE_COLORS),c=C(o,this.COUNTY_COLORS);v.m("#"+this.STATE_MAP_ID).remove(),v.m("#"+this.COUNTY_MAP_ID).remove();var l=v.l(this.canvasRef.current).select("#map");this.drawStates(l,i,s),this.drawCounties(l,c,s),this.drawStateLegend(i),this.drawCountyLegend(c),console.log("show states",this.state.showState),this.state.showState&&_("#"+this.COUNTY_MAP_ID);this.zoom=v.n().scaleExtent([1,4]).on("zoom",function(t){var a=t.transform;v.l("#map").selectAll("g").attr("transform",a),v.l("#map").selectAll("g").attr("stroke-width",1/a.k),e.setState({x:a.x,y:a.y,zoomScale:a.k},e.updateZoomedView(e.state.zoomScale))}),l.call(this.zoom).transition().call(this.zoom.transform,v.o.translate(this.state.x,this.state.y).scale(this.state.zoomScale))}},{key:"drawStateLegend",value:function(e){var t=R.a.legendColor().shapeWidth(30).orient("vertical").scale(e);v.l("#legend").append("g").attr("id",this.STATE_MAP_ID).call(t)}},{key:"drawCountyLegend",value:function(e){var t=R.a.legendColor().shapeWidth(30).orient("vertical").scale(e);v.l("#legend").append("g").attr("id",this.COUNTY_MAP_ID).call(t)}},{key:"drawStates",value:function(e,t,a){var n=this;e.append("g").attr("id",this.STATE_MAP_ID).selectAll("path").data(this.stateGeojson).enter().append("path").attr("d",a).attr("fill",function(e){return t(e.properties[n.state.property])}).style("stroke","#000").on("click",function(e,t){return n.props.onSelectRegion(t.properties.STATE_NAME,"")}).on("mouseover",function(e,t){n.props.tooltip.style("visibility","visible"),n.props.tooltip.html(D(t.properties.STATE_NAME,n.props.currentFeature,t.properties[n.state.property],n.props.currentYear)).style("left",e.pageX+10+"px").style("top",e.pageY+10+"px")}).on("mouseout",function(e,t){n.props.tooltip.style("visibility","hidden")})}},{key:"drawCounties",value:function(e,t,a){var n=this;e.append("g").attr("id",this.COUNTY_MAP_ID).selectAll("path").data(this.countyGeojson).enter().append("path").attr("d",a).attr("fill",function(e){return t(e.properties[n.state.property])}).style("stroke","#000").on("click",function(e,t){return n.props.onSelectRegion(t.properties.STATE_NAME,t.properties.NAME)}).on("mouseover",function(e,t){n.props.tooltip.style("visibility","visible"),n.props.tooltip.html(D(t.properties.NAME+" "+t.properties.STATE_NAME,n.props.currentFeature,t.properties[n.state.property],n.props.currentYear)).style("left",e.pageX+10+"px").style("top",e.pageY+10+"px")}).on("mouseout",function(e,t){n.props.tooltip.style("visibility","hidden")})}},{key:"updateZoomedView",value:function(e){var t=this;e>this.ZOOM_SCALE_THRESHOLD&&!0===this.state.showState?this.setState({showState:!1},function(){var e;e="#"+t.COUNTY_MAP_ID,v.m(e).style("visibility","visible"),v.l("#legend").select("#"+t.STATE_MAP_ID).style("visibility","hidden")}):e<=this.ZOOM_SCALE_THRESHOLD&&!1===this.state.showState&&this.setState({showState:!0},function(){_("#"+t.COUNTY_MAP_ID),v.l("#legend").select("#"+t.STATE_MAP_ID).style("visibility","visible")})}},{key:"componentDidMount",value:function(){var e=this;Promise.all([v.f(this.props.stateGeojson),v.f(this.props.countyGeojson)]).then(function(t){e.stateGeojson=t[0].features,e.countyGeojson=t[1].features,e.drawMap()}).catch(function(e){return console.log("error",e)})}},{key:"componentDidUpdate",value:function(e,t){console.log(this.state.map);var a=this.props.currentFeature+this.props.currentYear;t.property!==a&&(this.setState({property:a}),this.drawMap())}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(f.a,{gutter:[16,16],style:{height:"100%"}},r.a.createElement(m.a,{span:4},r.a.createElement(w.a,{options:["CHOROPLETH","HEXBIN"],value:this.state.map,onChange:this.toggleMapType}),r.a.createElement("div",null,r.a.createElement("svg",{id:"legend"},r.a.createElement("g",null))),r.a.createElement("div",null,r.a.createElement(M.a,{onClick:this.increaseZoomScale},"+"),r.a.createElement(M.a,{onClick:this.decreaseZoomScale},"-"))),r.a.createElement(m.a,{span:20},r.a.createElement("div",{style:{height:"100%",width:"100%"},ref:this.canvasRef},r.a.createElement("svg",{id:"map",style:{width:"100%",height:"100%"}},r.a.createElement("g",{id:"root"}))))))}}]),t}(r.a.Component)),L=a(462),x=a.n(L),N=a(463),F=a.n(N);var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).canvasRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"drawParallelCoordinates",value:function(e){var t=this,a=this.canvasRef.current,n=50,r=50,s=a.scrollWidth-r-50,o=a.scrollHeight-n-50,i=v.l(this.canvasRef.current).select("svg").attr("width",s).attr("height",o).select("g#root");i.append("g").attr("transform","translate(".concat(r,", ").concat(n,")"));var c=Object.keys(e[0]).filter(function(e){return e.slice(-2)==t.props.currentYear}),l=function(e,t,a,n){var r={};return t.forEach(function(t){r[t]=v.h().domain(v.c(e,function(e){return Number(e[t])})).range([a,n])}),r}(e,c,n+o,n),u=v.i().range([r,s]).domain(c);i.selectAll("path").data(e).join("path").attr("d",function(e){return v.g()(c.map(function(t){var a=l[t];return[u(t),a(e[t])]}))}).style("fill","none").style("stroke","#69b3a2"),i.selectAll("myAxis").data(c).enter().append("g").attr("id","axis-test").attr("transform",function(e){return"translate(".concat(u(e),")")}).each(function(e){v.l(this).call(v.a().ticks(5).scale(l[e]))}).append("text").style("text-anchor","middle").attr("y",10).text(function(e){return e}).style("fill","black").attr("id","label-test")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return this.props.stateCSV.length>0&&this.drawParallelCoordinates(this.props.stateCSV),r.a.createElement("div",{style:{height:"100%"},ref:this.canvasRef},r.a.createElement("svg",{style:{width:"100%",height:"100%"}},r.a.createElement("g",{id:"root"})))}}]),t}(r.a.Component);var Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).selectTime=function(e){a.setState({year:e})},a.state={countyDataset:[],stateDataset:[],feature:"HR",year:60,state:"",county:""},a.features=[{key:"HR",feature:"Homicide rate"},{key:"UE",feature:"Unemployment rate"},{key:"DV",feature:"Divorce rate"},{key:"MA",feature:"Median age"},{key:"DNL",feature:"Population density"},{key:"MFIL",feature:"Median family income"},{key:"FP",feature:"Percentage of families below poverty"},{key:"BLK",feature:"Percentage of black population"},{key:"GI",feature:"Gini index"},{key:"FH",feature:"Percentage of female headed households"}],a.years=[60,70,80,90],a.selectFeature=a.selectFeature.bind(Object(h.a)(Object(h.a)(a))),a.selectRegion=a.selectRegion.bind(Object(h.a)(Object(h.a)(a))),a.tooltip=v.l("body").append("div").style("position","absolute").style("visibility",0),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"selectFeature",value:function(e){e.preventDefault(),this.setState({feature:e.currentTarget.accessKey})}},{key:"selectRegion",value:function(e,t){this.setState({state:e,county:t})}},{key:"componentDidMount",value:function(){}},{key:"fetchData",value:function(){var e=this;Promise.all([v.b(b.a),v.b(S.a)]).then(function(t){e.setState({countyDataset:t[0],stateDataset:t[1]})})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){0!==this.state.countyDataset.length&&0!==this.state.stateDataset.length||this.fetchData();return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{className:"layout"},r.a.createElement(f.a,{gutter:[16,16]},r.a.createElement(m.a,{span:4},r.a.createElement(y.a,{style:{height:700}},r.a.createElement(T,{featureList:this.features,currentFeature:this.state.feature,onSelectFeature:this.selectFeature}))),r.a.createElement(m.a,{span:14},r.a.createElement(y.a,{style:{height:700}},r.a.createElement(A,{timeline:this.years,onSelectTime:this.selectTime}),r.a.createElement(P,{stateGeojson:F.a,stateDataset:this.state.stateDataset,countyGeojson:x.a,currentFeature:this.state.feature,currentYear:this.state.year,years:this.years,onSelectRegion:this.selectRegion,tooltip:this.tooltip}))),r.a.createElement(m.a,{span:6},r.a.createElement(y.a,{style:{height:700}})),r.a.createElement(m.a,{span:16},r.a.createElement(y.a,{style:{height:500}},r.a.createElement(I,{featureList:this.features,stateCSV:this.state.stateDataset,currentYear:this.state.year}))),r.a.createElement(m.a,{span:8},r.a.createElement(y.a,{style:{height:500}},"adfdf")))))}}]),t}(r.a.Component),H=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,810)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(Y,null)),H()}},[[465,3,2]]]);
//# sourceMappingURL=main.a9fabfd8.chunk.js.map