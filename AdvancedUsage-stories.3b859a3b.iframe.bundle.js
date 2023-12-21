/*! For license information please see AdvancedUsage-stories.3b859a3b.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkwisp_win_classic_theme=globalThis.webpackChunkwisp_win_classic_theme||[]).push([[49],{"./stories/AdvancedUsage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexWindow:()=>ComplexWindow,ExternalWindowToggling:()=>ExternalWindowToggling,StickyNotes:()=>StickyNotes,WindowContext:()=>WindowContext,WispInWisp:()=>WispInWisp,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tatuarvela/wisp/dist/index.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Wisp/Advanced Usage",component:_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.AE},WispInWisp={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"1",title:"Parent window",width:600,height:480,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{border:"1px solid black",boxSizing:"border-box",height:"100%",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.AE,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"2",title:"Child window",children:"Test"})})})})}},commonState={height:200,isClosable:!1,isMaximizable:!1,isMinimizable:!1,positionX:100,positionY:100,width:200},StickyNotes={args:{enableDefaultElements:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"1",...commonState,isDraggable:!1,isResizable:!1,title:"Static note",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Immovable object"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"2",...commonState,title:"Resizable sticky note",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Make me big!"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"3",...commonState,isResizable:!1,title:"Sticky note",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Can't close me!"})})]})}},ExternalWindowToggling=()=>{const[showWindow,setShowWindow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",onClick:()=>setShowWindow(!showWindow),children:"Toggle window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"800px",height:"600px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.AE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"1",title:"Initially shown",children:"This window is initially shown"}),showWindow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"2",title:"Toggled window",children:"This window is toggled by the button above"})]})})]})};ExternalWindowToggling.displayName="ExternalWindowToggling";const ContextExampleComponent=()=>{const window=(0,_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.zY)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("table",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"width"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.width})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"height"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.height})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"x position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.positionX})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"y position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.positionY})]})]})})};ContextExampleComponent.displayName="ContextExampleComponent";const WindowContext=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.AE,{enableDefaultElements:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"1",width:230,height:115,title:"Window Context Example",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ContextExampleComponent,{})})});WindowContext.displayName="WindowContext";const ComplexWindow=()=>{const[address,setAddress]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.AE,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.Rz,{id:"1",width:400,height:300,minHeight:200,minWidth:200,title:"Complex Window",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.j_,{isThrobberAnimated:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.o8,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.hA,{label:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.hA,{icon:"wisp"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.$d,{value:address,onChange:setAddress,children:"Address:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.GH,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.tn,{horizontal:!0,vertical:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"400px",padding:"5px"},children:"Test"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.A_,{showResizeHandle:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.V4,{children:"Status bar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.V4,{width:"80px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.ko,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tatuarvela_wisp__WEBPACK_IMPORTED_MODULE_2__.V4,{})]})]})})};ComplexWindow.displayName="ComplexWindow",WispInWisp.parameters={...WispInWisp.parameters,docs:{...WispInWisp.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Window id=\"1\" title=\"Parent window\" width={600} height={480}>\n        <div style={{\n        border: '1px solid black',\n        boxSizing: 'border-box',\n        height: '100%',\n        width: '100%'\n      }}>\n          <Wisp>\n            <Window id=\"2\" title=\"Child window\">\n              Test\n            </Window>\n          </Wisp>\n        </div>\n      </Window>\n  }\n}",...WispInWisp.parameters?.docs?.source}}},StickyNotes.parameters={...StickyNotes.parameters,docs:{...StickyNotes.parameters?.docs,source:{originalSource:'{\n  args: {\n    enableDefaultElements: false,\n    children: <>\n        <Window id="1" {...commonState} isDraggable={false} isResizable={false} title="Static note">\n          <p>Immovable object</p>\n        </Window>\n        <Window id="2" {...commonState} title="Resizable sticky note">\n          <p>Make me big!</p>\n        </Window>\n        <Window id="3" {...commonState} isResizable={false} title="Sticky note">\n          <p>Can\'t close me!</p>\n        </Window>\n      </>\n  }\n}',...StickyNotes.parameters?.docs?.source}}},ExternalWindowToggling.parameters={...ExternalWindowToggling.parameters,docs:{...ExternalWindowToggling.parameters?.docs,source:{originalSource:'() => {\n  const [showWindow, setShowWindow] = useState<boolean>(false);\n  return <div>\n      <div style={{\n      padding: \'10px\'\n    }}>\n        <button type="button" onClick={() => setShowWindow(!showWindow)}>\n          Toggle window\n        </button>\n      </div>\n      <div style={{\n      width: \'800px\',\n      height: \'600px\'\n    }}>\n        <Wisp>\n          <Window id="1" title="Initially shown">\n            This window is initially shown\n          </Window>\n          {showWindow && <Window id="2" title="Toggled window">\n              This window is toggled by the button above\n            </Window>}\n        </Wisp>\n      </div>\n    </div>;\n}',...ExternalWindowToggling.parameters?.docs?.source}}},WindowContext.parameters={...WindowContext.parameters,docs:{...WindowContext.parameters?.docs,source:{originalSource:'() => <Wisp enableDefaultElements={false}>\n    <Window id="1" width={230} height={115} title="Window Context Example">\n      <ContextExampleComponent />\n    </Window>\n  </Wisp>',...WindowContext.parameters?.docs?.source}}},ComplexWindow.parameters={...ComplexWindow.parameters,docs:{...ComplexWindow.parameters?.docs,source:{originalSource:'() => {\n  const [address, setAddress] = useState<string>();\n  return <Wisp>\n      <Window id="1" width={400} height={300} minHeight={200} minWidth={200} title="Complex Window">\n        <MenuBar isThrobberAnimated></MenuBar>\n        <Toolbar>\n          <ToolbarButton label="Action" />\n          <ToolbarButton icon="wisp" />\n        </Toolbar>\n        <AddressBar value={address} onChange={setAddress}>\n          Address:\n        </AddressBar>\n\n        <WindowContent>\n          <ScrollableContent horizontal vertical>\n            <div style={{\n            height: \'400px\',\n            padding: \'5px\'\n          }}>\n              Test\n            </div>\n          </ScrollableContent>\n        </WindowContent>\n\n        <StatusBar showResizeHandle>\n          <StatusBarSection>Status bar</StatusBarSection>\n          <StatusBarSection width="80px">\n            <ProgressBar />\n          </StatusBarSection>\n          <StatusBarSection></StatusBarSection>\n        </StatusBar>\n      </Window>\n    </Wisp>;\n}',...ComplexWindow.parameters?.docs?.source}}};const __namedExportsOrder=["WispInWisp","StickyNotes","ExternalWindowToggling","WindowContext","ComplexWindow"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);