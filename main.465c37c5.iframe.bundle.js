(globalThis.webpackChunkwisp_win_classic_theme=globalThis.webpackChunkwisp_win_classic_theme||[]).push([[179],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.tsx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var index_esm=__webpack_require__("./node_modules/@tatuarvela/wisp/dist/index.esm.js");const src_icons={wisp:{48:__webpack_require__.p+"static/media/wisp-win.a7412271.png"}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fontFamily="'Microsoft Sans Serif', sans-serif;",generateBoxShadows=(thickness,topLeftColor,bottomRightColor)=>[[thickness,-thickness,topLeftColor],[-thickness,thickness,bottomRightColor],[-thickness,thickness-1,topLeftColor],[thickness,1-thickness,bottomRightColor],[-thickness,-thickness,topLeftColor],[thickness,thickness,bottomRightColor]].reverse().map((([x,y,color])=>`${x}px ${y}px 0 0 ${color}`)).join(",\n"),generateActiveLoweredStyles=themeVariables=>styled_components_browser_esm.iv`
    background: ${themeVariables.shade1};
    border-bottom: 1px solid ${themeVariables.shade3};
    border-left: 1px solid ${themeVariables.shade5};
    border-right: 1px solid ${themeVariables.shade3};
    border-top: 1px solid ${themeVariables.shade5};
    box-shadow:
      0.5px 0.5px 0 0.5px ${themeVariables.shade1},
      0 0 0 1px ${themeVariables.shade4};
  `,generateSharedButtonStyles=themeVariables=>{const activeStyles=generateActiveLoweredStyles(themeVariables);return styled_components_browser_esm.iv`
    ${(themeVariables=>styled_components_browser_esm.iv`
    background: ${themeVariables.shade2};
    border-bottom: 1px solid ${themeVariables.shade5};
    border-left: 1px solid ${themeVariables.shade3};
    border-right: 1px solid ${themeVariables.shade5};
    border-top: 1px solid ${themeVariables.shade3};
    box-shadow:
      0.5px 0.5px 0 0.5px ${themeVariables.shade4},
      0 0 0 1px ${themeVariables.shade1};
  `)(themeVariables)}
    ${props=>props?.active&&activeStyles};
    &:active {
      ${activeStyles}
    }
  `},buildAddressBarInput=themeVariables=>styled_components_browser_esm.iv`
  ${generateActiveLoweredStyles(themeVariables)}

  outline: none;
  width: 100%;
  flex-grow: 1;
  font-size: 12px;
`,buildButton=themeVariables=>styled_components_browser_esm.iv`
  ${generateSharedButtonStyles(themeVariables)}

  border-radius: 0;
  font-size: 11px;
  padding: 2px;
  user-select: none;
`,common_buildControls=themeVariables=>({AddressBar:styled_components_browser_esm.iv`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: sans-serif;
  font-size: 12px;
  gap: 4px;
  padding: 2px;
`,AddressBarInput:buildAddressBarInput(themeVariables),Button:buildButton(themeVariables)}),buildTaskbar=themeVariables=>styled_components_browser_esm.iv`
  background: ${themeVariables.shade2};
  border-top: 1px solid ${themeVariables.shade2};
  bottom: 0;
  box-shadow: inset 0 1px 0 0 ${themeVariables.shade1};
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  height: 28px;
  left: 0;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  text-align: left;
  white-space: nowrap;
  width: 100%;
`,buildTaskbarButton=themeVariables=>{const activeStyle=styled_components_browser_esm.iv`
    color: ${themeVariables.shade5};
    font-weight: bold;
  `;return styled_components_browser_esm.iv`
    ${generateSharedButtonStyles(themeVariables)}

    border-radius: 0;
    color: ${themeVariables.shade5};
    display: inline-flex;
    font-family: ${fontFamily};
    margin-top: 1px;
    height: 22px;
    margin-left: 2px;
    outline: none;
    text-align: left;
    user-select: none;
    width: 160px;

    ${props=>props.active&&activeStyle};
    &:active {
      ${activeStyle}
    }
  `},buildDesktop=themeVariables=>styled_components_browser_esm.iv`
  background: ${themeVariables.background};
  background-size: 100% 100%;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  object-fit: cover;
`,common_buildElements=themeVariables=>({Desktop:buildDesktop(themeVariables),Taskbar:buildTaskbar(themeVariables),TaskbarButton:buildTaskbarButton(themeVariables),VersionInfo:styled_components_browser_esm.iv`
  bottom: 30px;
  color: white;
  font-family: ${fontFamily};
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
`}),maximizedStyles=styled_components_browser_esm.iv`
  height: ${props=>{return`calc(100% - ${(viewportWindowMargins=props.viewportWindowMargins).top+viewportWindowMargins.bottom}px)`;var viewportWindowMargins}} !important;
  left: ${props=>props.viewportWindowMargins.left} !important;
  top: ${props=>props.viewportWindowMargins.top} !important;
  width: ${props=>{return`calc(100% - ${(viewportWindowMargins=props.viewportWindowMargins).left+viewportWindowMargins.right}px)`;var viewportWindowMargins}} !important;
  z-index: ${props=>props.orderNumber} !important;
  border-radius: 0;
`,minimizedStyles=styled_components_browser_esm.iv`
  display: none;
`,buildWindowElement=themeVariables=>styled_components_browser_esm.iv`
  background: transparent;
  box-sizing: border-box;
  color: ${themeVariables.text};
  display: flex;
  flex-direction: column;
  padding: 2px;
  position: absolute;

  &:before {
    background: ${themeVariables.shade3};
    bottom: 2px;
    box-shadow: ${generateBoxShadows(1,themeVariables.shade1,themeVariables.shade3)},
      ${generateBoxShadows(2,themeVariables.shade3,themeVariables.shade5)};
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: -1;
  }

  ${props=>props.isMaximized&&maximizedStyles}
  ${props=>props.isMinimized&&minimizedStyles}
`,buildTitleBar=themeVariables=>styled_components_browser_esm.iv`
  background: ${props=>props.isActive?themeVariables.windowActiveBackground:themeVariables.windowPassiveBackground};
  box-sizing: border-box;
  color: ${themeVariables.windowTitleText};
  flex-shrink: 0;
  display: flex;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  height: 18px;
  padding: 0 4px; // TODO: Icons
  user-select: none;
  width: 100%;
`,sharedWindowButtonStyle=themeVariables=>styled_components_browser_esm.iv`
  ${generateSharedButtonStyles(themeVariables)}

  border-radius: 0;
  color: ${themeVariables.shade5};
  box-sizing: border-box;
  height: 14px;
  margin: 4px 1px;
  padding: 0;
  position: relative;
  width: 16px;
`,buildMinimizeButton=themeVariables=>styled_components_browser_esm.iv`
  ${sharedWindowButtonStyle(themeVariables)};

  &:before {
    border-bottom: 2px solid ${themeVariables.text};
    content: '';
    height: 9px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 8px;
  }
`,buildMaximizeButton=themeVariables=>styled_components_browser_esm.iv`
  ${sharedWindowButtonStyle(themeVariables)};

  &:before {
    border: 1px solid ${themeVariables.text};
    border-top: 2px solid ${themeVariables.text};
    content: '';
    height: 7px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 1px;
    width: 8px;
  }
`,buildUnmaximizeButton=themeVariables=>styled_components_browser_esm.iv`
  ${sharedWindowButtonStyle(themeVariables)};

  &:before {
    border: 1px solid ${themeVariables.text};
    border-top: 2px solid ${themeVariables.text};
    content: '';
    height: 4px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 1px;
    width: 5px;
  }

  &:after {
    border: 1px solid ${themeVariables.text};
    border-top: 2px solid ${themeVariables.text};
    bottom: 2px;
    background: ${themeVariables.shade2};
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    height: 4px;
    top: 4px;
    width: 5px;
  }
`,buildCloseButton=themeVariables=>styled_components_browser_esm.iv`
  ${sharedWindowButtonStyle(themeVariables)};

  margin: 4px 4px;

  &:before {
    border-bottom: 2px solid ${themeVariables.text};
    content: '';
    left: 1px;
    pointer-events: none;
    position: absolute;
    top: 5px;
    transform: rotate(45deg);
    width: 12px;
  }

  &:after {
    border-bottom: 2px solid ${themeVariables.text};
    content: '';
    left: 1px;
    pointer-events: none;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 12px;
  }
`,common_buildWindow=themeVariables=>({WindowElement:buildWindowElement(themeVariables),WindowElementContent:styled_components_browser_esm.iv`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: ${fontFamily};
  font-size: 14px;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 4px;
  text-align: left;
  user-select: none;
  width: 100%;
`,TitleBar:buildTitleBar(themeVariables),MinimizeButton:buildMinimizeButton(themeVariables),MaximizeButton:buildMaximizeButton(themeVariables),UnmaximizeButton:buildUnmaximizeButton(themeVariables),CloseButton:buildCloseButton(themeVariables)}),themeBuilder=({id,name,themeVariables,controls,elements,window})=>({id,name,controls:Object.assign({},common_buildControls(themeVariables),controls),elements:Object.assign({},common_buildElements(themeVariables),elements),window:Object.assign({},common_buildWindow(themeVariables),window),icons:src_icons}),vaporwin=themeBuilder({id:"vaporwin",name:"ウィンドウズ",themeVariables:{active:"rgb(10, 36, 106)",background:'url("https://i.redd.it/k4o8nz5vfiyy.gif")',shade1:"rgb(255, 255, 255)",shade2:"rgb(253, 181, 218)",shade3:"rgb(253, 181, 218)",shade4:"rgb(164, 81, 123)",shade5:"rgb(164, 81, 123)",text:"rgb(0, 0, 0)",windowActiveBackground:"linear-gradient(90deg, #ff6ad5, #c774e8, #ad8cff, #8795e8, #94d0ff)",windowPassiveBackground:"gray",windowTitleText:"rgb(255, 255, 255)"}}),win2k=themeBuilder({id:"win2k",name:"Windows 2000",themeVariables:{active:"rgb(10,36,106)",background:"rgb(58,110,165)",shade1:"rgb(255,255,255)",shade2:"rgb(212,208,200)",shade3:"rgb(212,208,200)",shade4:"rgb(128,128,128)",shade5:"rgb(0,0,0)",text:"rgb(0,0,0)",windowActiveBackground:"linear-gradient(90deg, rgb(10,36,106), rgb(166,202,240))",windowPassiveBackground:"linear-gradient(90deg, rgb(120,124,120), rgb(176,176,176))",windowTitleText:"rgb(255,255,255)"}}),win9x_16bit=themeBuilder({id:"win9x-16bit",name:"Windows 9x, High Color 16-bit",themeVariables:{active:"rgb(0,0,120)",background:"rgb(0,124,120)",shade1:"rgb(247, 251, 247)",shade2:"rgb(216, 220, 216)",shade3:"rgb(184,188,184)",shade4:"rgb(120,124,120)",shade5:"rgb(0,0,0)",text:"rgb(0,0,0)",windowActiveBackground:"linear-gradient(90deg, rgb(0,0,120), rgb(8,128,200))",windowPassiveBackground:"linear-gradient(90deg, rgb(120,124,120), rgb(176,176,176))",windowTitleText:"rgb(247, 251, 247)"}}),win9x_16clr=themeBuilder({id:"win9x-16clr",name:"Windows 9x, 16 colors",themeVariables:{active:"rgb(0,0,120)",background:"rgb(0,124,120)",shade1:"rgb(247, 251, 247)",shade2:"rgb(216, 220, 216)",shade3:"rgb(184,188,184)",shade4:"rgb(120,124,120)",shade5:"rgb(0,0,0)",text:"rgb(0,0,0)",windowActiveBackground:"linear-gradient(90deg, rgb(0,0,120), rgb(8,128,200))",windowPassiveBackground:"linear-gradient(90deg, rgb(120,124,120), rgb(176,176,176))",windowTitleText:"rgb(247, 251, 247)"}}),win9x_32bit=themeBuilder({id:"win9x-32bit",name:"Windows 9x, True Color 32-bit",themeVariables:{active:"rgb(0,0,120)",background:"rgb(0,128,128)",shade1:"rgb(255,255,255)",shade2:"rgb(223,223,223)",shade3:"rgb(192,192,192)",shade4:"rgb(128,128,128)",shade5:"rgb(0,0,0)",text:"rgb(0,0,0)",windowActiveBackground:"linear-gradient(90deg, rgb(0,0,128), rgb(16,132,208))",windowPassiveBackground:"linear-gradient(90deg, rgb(120,124,120), rgb(176,176,176))",windowTitleText:"rgb(247, 251, 247)"}}),win9x_256clr=themeBuilder({id:"win9x-256clr",name:"Windows 9x, 256 colors",themeVariables:{active:"rgb(0,0,128)",background:"rgb(0,128,128)",shade1:"rgb(255,255,255)",shade2:"rgb(192,192,192)",shade3:"rgb(192,192,192)",shade4:"rgb(128,128,128)",shade5:"rgb(0,0,0)",text:"rgb(0,0,0)",windowActiveBackground:"rgb(0,0,128)",windowPassiveBackground:"rgb(128,128,128)",windowTitleText:"rgb(247, 251, 247)"}}),_storybook_preview={parameters:{options:{storySort:{order:["Wisp",["Basics","Advanced Usage","Theming"],"controls"]}}},decorators:[(0,index_esm.iP)({themes:[win2k,win9x_16bit,win9x_16clr,win9x_32bit,win9x_256clr,vaporwin,index_esm.uH]}),index_esm._9]}},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./AdvancedUsage.stories":["./stories/AdvancedUsage.stories.tsx",49],"./AdvancedUsage.stories.tsx":["./stories/AdvancedUsage.stories.tsx",49],"./Basics.stories":["./stories/Basics.stories.tsx",342],"./Basics.stories.tsx":["./stories/Basics.stories.tsx",342],"./Theming.stories":["./stories/Theming.stories.tsx",774],"./Theming.stories.tsx":["./stories/Theming.stories.tsx",774],"./controls/AddressBar.stories":["./stories/controls/AddressBar.stories.tsx",706],"./controls/AddressBar.stories.tsx":["./stories/controls/AddressBar.stories.tsx",706],"./controls/AlertText.stories":["./stories/controls/AlertText.stories.tsx",897],"./controls/AlertText.stories.tsx":["./stories/controls/AlertText.stories.tsx",897],"./controls/Button.stories":["./stories/controls/Button.stories.tsx",717],"./controls/Button.stories.tsx":["./stories/controls/Button.stories.tsx",717],"./controls/Checkbox.stories":["./stories/controls/Checkbox.stories.tsx",314],"./controls/Checkbox.stories.tsx":["./stories/controls/Checkbox.stories.tsx",314],"./controls/ComboBox.stories":["./stories/controls/ComboBox.stories.tsx",161],"./controls/ComboBox.stories.tsx":["./stories/controls/ComboBox.stories.tsx",161],"./controls/Divider.stories":["./stories/controls/Divider.stories.tsx",958],"./controls/Divider.stories.tsx":["./stories/controls/Divider.stories.tsx",958],"./controls/Fieldset.stories":["./stories/controls/Fieldset.stories.tsx",443],"./controls/Fieldset.stories.tsx":["./stories/controls/Fieldset.stories.tsx",443],"./controls/Label.stories":["./stories/controls/Label.stories.tsx",514],"./controls/Label.stories.tsx":["./stories/controls/Label.stories.tsx",514],"./controls/ListBox.stories":["./stories/controls/ListBox.stories.tsx",923],"./controls/ListBox.stories.tsx":["./stories/controls/ListBox.stories.tsx",923],"./controls/MenuBar.stories":["./stories/controls/MenuBar.stories.tsx",357],"./controls/MenuBar.stories.tsx":["./stories/controls/MenuBar.stories.tsx",357],"./controls/ProgressBar.stories":["./stories/controls/ProgressBar.stories.tsx",913],"./controls/ProgressBar.stories.tsx":["./stories/controls/ProgressBar.stories.tsx",913],"./controls/ScrollableContent.stories":["./stories/controls/ScrollableContent.stories.tsx",218],"./controls/ScrollableContent.stories.tsx":["./stories/controls/ScrollableContent.stories.tsx",218],"./controls/StatusBar.stories":["./stories/controls/StatusBar.stories.tsx",221],"./controls/StatusBar.stories.tsx":["./stories/controls/StatusBar.stories.tsx",221],"./controls/StatusBarSection.stories":["./stories/controls/StatusBarSection.stories.tsx",328],"./controls/StatusBarSection.stories.tsx":["./stories/controls/StatusBarSection.stories.tsx",328],"./controls/TextInput.stories":["./stories/controls/TextInput.stories.tsx",718],"./controls/TextInput.stories.tsx":["./stories/controls/TextInput.stories.tsx",718],"./controls/Textarea.stories":["./stories/controls/Textarea.stories.tsx",336],"./controls/Textarea.stories.tsx":["./stories/controls/Textarea.stories.tsx",336],"./controls/TimeInput.stories":["./stories/controls/TimeInput.stories.tsx",576],"./controls/TimeInput.stories.tsx":["./stories/controls/TimeInput.stories.tsx",576],"./controls/Toolbar.stories":["./stories/controls/Toolbar.stories.tsx",53],"./controls/Toolbar.stories.tsx":["./stories/controls/Toolbar.stories.tsx",53],"./controls/ToolbarButton.stories":["./stories/controls/ToolbarButton.stories.tsx",961],"./controls/ToolbarButton.stories.tsx":["./stories/controls/ToolbarButton.stories.tsx",961],"./controls/Well.stories":["./stories/controls/Well.stories.tsx",552],"./controls/Well.stories.tsx":["./stories/controls/Well.stories.tsx",552],"./controls/WindowContent.stories":["./stories/controls/WindowContent.stories.tsx",771],"./controls/WindowContent.stories.tsx":["./stories/controls/WindowContent.stories.tsx",771]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[776],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.465c37c5.iframe.bundle.js.map