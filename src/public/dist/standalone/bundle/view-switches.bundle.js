(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[5],{1174:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(139),i=n(142),c=n(25),l=n(95),s=n.n(l),m=(n(468),n(510)),u=(n(450),n(467)),p=(n(469),n(509)),d=n(10),f=n(15),b=n(22),y=(n(592),{onCodeCrumbedFlowSelect:f.f}),w=Object(o.b)(function(e,t){var n=Object(c.a)(e),a=n.codeCrumbsDiagramOn,r=n.codeCrumbsMinimize,o=Object(b.a)(e,t);return{codeCrumbsDiagramOn:a,codeCrumbsMinimize:r,codeCrumbedFlowsMap:o.codeCrumbedFlowsMap,selectedCrumbedFlowKey:o.selectedCrumbedFlowKey}},y)(function(e){var t=e.codeCrumbsDiagramOn,n=e.codeCrumbsMinimize,a=e.codeCrumbedFlowsMap,o=e.onCodeCrumbedFlowSelect,i=e.selectedCrumbedFlowKey;if(!t||!Object.keys(a).length||n)return null;var c=r.a.createElement(p.a,null,Object.keys(a).filter(function(e){return e!==i}).map(function(e){return r.a.createElement(p.a.Item,{key:e},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",onClick:function(){return o(e)}},e===d.e?"- no trail -":"# ".concat(e)))}));return r.a.createElement("div",{className:"FlowSelect"},r.a.createElement(m.a,{overlay:c,placement:"bottomLeft"},r.a.createElement(u.a,{size:"small"},i===d.e?"- no trail -":r.a.createElement(r.a.Fragment,null,"trail",r.a.createElement("span",{className:"flow"}," #".concat(i))))))}),h=(n(620),u.a.Group,{setZoom:i.d}),g=Object(o.b)(function(e){return{zoom:Object(c.d)(e).diagramZoom}},h)(function(e){e.zoom,e.setZoom;return null}),v=(n(1169),n(1165)),E=(n(439),n(426)),k=(n(626),{onDownload:f.c,onUpload:f.o}),S=Object(o.b)(null,k)(function(e){var t=e.onDownload,n=e.onUpload,a={beforeUpload:function(e){return n(e),!1},fileList:[]},o=r.a.createElement(p.a,null,r.a.createElement(p.a.Item,{key:"download"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",onClick:t},r.a.createElement(E.a,{type:"download"})," Download store")),r.a.createElement(p.a.Item,{key:"upload",onClick:function(e){return!1}},r.a.createElement(v.a,a,r.a.createElement(E.a,{type:"upload"})," Upload store")));return r.a.createElement("div",{className:"SettingsControl"},r.a.createElement(m.a,{overlay:o,placement:"bottomLeft"},r.a.createElement(u.a,{size:"small"},"setup",r.a.createElement(E.a,{type:"setting"}))))}),x=(n(695),n(700)),C=n(3);n(698);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,I(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,r.a.Component),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"renderMenu",value:function(){var e=this.props,t=e.name,n=e.subMenuItems,a=e.checkedState,o=e.disabledState,i=e.toggleSwitch,c=e.fireButtonAction,l=r.a.createElement(p.a,null,n.map(function(e){var n=null;if(e.type===C.c.BUTTON){var l=r.a.createElement(r.a.Fragment,null,e.icon?r.a.createElement(E.a,{type:e.icon}):null,r.a.createElement("span",{title:e.title}," "+e.name));n=o[e.key]?l:r.a.createElement("a",{title:e.title,onClick:function(){return c(e.key)}},l)}else{var s=r.a.createElement(r.a.Fragment,null,a[e.key]?r.a.createElement(E.a,{type:"check"}):null,r.a.createElement("span",{title:e.title},e.name));n=o[e.key]?s:r.a.createElement("a",{title:e.title,onClick:function(){return i(e.key,!a[e.key])}},s)}return r.a.createElement(p.a.Item,{key:"".concat(t,"-").concat(e.key),disabled:o[e.key]},n)}));return r.a.createElement(m.a,{overlay:l,trigger:["click"]},r.a.createElement("a",{href:"#"},r.a.createElement("span",{className:"viewSwitchName"},t,r.a.createElement(E.a,{type:"down"}))))}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.itemKey,a=e.subMenuItems,o=e.checkedState,i=e.toggleSwitch;return r.a.createElement("div",{className:"ViewSwitchItem"},r.a.createElement("div",{className:"big-item"},o[n]&&a.length?this.renderMenu():r.a.createElement("span",{className:"viewSwitchName"},t),r.a.createElement(x.a,{size:"small",checked:o[n],onChange:function(e){return i(n,e)}})))}}]),t}(),V=(n(703),function(e){var t=e.switches,n=e.toggleSwitch,a=e.fireButtonAction,o=e.checkedState,i=e.disabledState,c=[],l=[];return t.forEach(function(e,m){var u=m===t.length-1;(u?l:c).push(r.a.createElement("div",{className:s()({itemSpacingWrapper:!u}),key:e.key},r.a.createElement(M,{itemKey:e.key,name:e.name,subMenuItems:e.children,checkedState:o,disabledState:i,toggleSwitch:n,fireButtonAction:a})))}),r.a.createElement("div",{className:"ViewSwitchList"},r.a.createElement("div",{className:"side"},c,r.a.createElement(w,null)),r.a.createElement("div",{className:"side"},r.a.createElement(g,null)),r.a.createElement("div",{className:"side"},l.concat(r.a.createElement("div",{className:"settingContainer",key:"setting"},r.a.createElement("div",{className:"spacer"}),r.a.createElement(S,null)))))}),_={toggleSwitch:i.e,fireButtonAction:i.a};t.default=Object(o.b)(function(e){return{switches:Object(c.c)(e),checkedState:Object(c.a)(e),disabledState:Object(c.b)(e)}},_)(V)},592:function(e,t,n){var a=n(593);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(97)(a,r);a.locals&&(e.exports=a.locals)},593:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".FlowSelect .flow {\n  color: #ff18a6; }\n",""])},620:function(e,t,n){var a=n(621);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(97)(a,r);a.locals&&(e.exports=a.locals)},621:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".ZoomControl {\n  margin-right: 100px; }\n",""])},626:function(e,t,n){var a=n(627);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(97)(a,r);a.locals&&(e.exports=a.locals)},627:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".ant-upload-select {\n  display: block;\n  margin: -5px -12px; }\n  .ant-upload-select .ant-upload {\n    display: block;\n    padding: 5px 24px 5px 12px; }\n",""])},698:function(e,t,n){var a=n(699);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(97)(a,r);a.locals&&(e.exports=a.locals)},699:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".ViewSwitchItem {\n  display: flex; }\n  .ViewSwitchItem .big-item {\n    padding-right: 8px;\n    display: flex;\n    align-items: center; }\n  .ViewSwitchItem .viewSwitchName {\n    padding-right: 4px; }\n",""])},703:function(e,t,n){var a=n(704);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(97)(a,r);a.locals&&(e.exports=a.locals)},704:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,".ViewSwitchList {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 8px;\n  justify-content: space-between; }\n  .ViewSwitchList .side {\n    display: flex;\n    flex-direction: row; }\n    .ViewSwitchList .side .itemSpacingWrapper {\n      margin-right: 16px; }\n  .ViewSwitchList .settingContainer {\n    display: flex;\n    flex-direction: row; }\n    .ViewSwitchList .settingContainer .spacer {\n      margin: 0 10px;\n      height: 100%;\n      border-left: 1px solid #d9d9d9; }\n",""])}}]);