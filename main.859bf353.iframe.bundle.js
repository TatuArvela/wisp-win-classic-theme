(globalThis.webpackChunk_tatuarvela_wisp_win_classic_theme=globalThis.webpackChunk_tatuarvela_wisp_win_classic_theme||[]).push([[179],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.tsx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var resizeBorder_namespaceObject={};__webpack_require__.r(resizeBorder_namespaceObject),__webpack_require__.d(resizeBorder_namespaceObject,{EResize:()=>EResize,NEResize:()=>NEResize,NResize:()=>NResize,NWResize:()=>NWResize,SEResize:()=>SEResize,SResize:()=>SResize,SWResize:()=>SWResize,WResize:()=>WResize});var index_esm=__webpack_require__("./node_modules/@tatuarvela/wisp/dist/index.esm.js");const src_icons={wisp:{48:__webpack_require__.p+"static/media/wisp-win.a7412271.png"}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const aesthetic_namespaceObject=__webpack_require__.p+"static/media/aesthetic.6a25f993.png",default_namespaceObject=__webpack_require__.p+"static/media/default.4249bf9a.png",e_resize_namespaceObject=__webpack_require__.p+"static/media/e-resize.f825c1bf.png",pointer_namespaceObject=__webpack_require__.p+"static/media/pointer.b57d2b91.png",progress_namespaceObject=__webpack_require__.p+"static/media/progress.cedda6e5.png",s_resize_namespaceObject=__webpack_require__.p+"static/media/s-resize.0c16b646.png",se_resize_namespaceObject=__webpack_require__.p+"static/media/se-resize.74ac5f36.png",sw_resize_namespaceObject=__webpack_require__.p+"static/media/sw-resize.c3cb4fc9.png",cursors={aesthetic:[aesthetic_namespaceObject,0,0],default:[default_namespaceObject,0,0],"e-resize":[e_resize_namespaceObject,10,4],"n-resize":[s_resize_namespaceObject,4,10],"ne-resize":[sw_resize_namespaceObject,8,8],"nw-resize":[se_resize_namespaceObject,8,8],pointer:[pointer_namespaceObject,0,0],progress:[progress_namespaceObject,0,0],"s-resize":[s_resize_namespaceObject,5,10],"se-resize":[se_resize_namespaceObject,8,8],"sw-resize":[sw_resize_namespaceObject,8,8],text:[__webpack_require__.p+"static/media/text.2f9a008a.png",4,0],"w-resize":[e_resize_namespaceObject,10,5]},cursors_cursor=option=>{const cursor=cursors[option];return styled_components_browser_esm.iv`
    cursor:
      url('${cursor[0]}') ${cursor[1]} ${cursor[2]},
      auto;
  `},common_generateBorders=(distance,topLeftColor,bottomRightColor)=>[[-distance,-distance,bottomRightColor],[distance,distance,topLeftColor]].map((([x,y,color])=>`inset ${x}px ${y}px 0 0 ${color}`)).join(",\n"),check_namespaceObject=__webpack_require__.p+"static/media/check.d1a47cd4.png",down_namespaceObject=__webpack_require__.p+"static/media/down.0438189f.png",throbber_active_namespaceObject=__webpack_require__.p+"static/media/throbber-active.d72bb12c.gif",throbber_passive_namespaceObject=__webpack_require__.p+"static/media/throbber-passive.dbc0e611.png",fontFamily="'Microsoft Sans Serif', sans-serif;",generateGroovedStyles=themeVariables=>styled_components_browser_esm.iv`
  border: 1px solid ${themeVariables.shade4};
  box-shadow:
    inset 1px 1px 0 0 ${themeVariables.shade1},
    0 1px 0 0 ${themeVariables.shade1},
    1px 0 0 0 ${themeVariables.shade1},
    1px 1px 0 0 ${themeVariables.shade1};
`,generateIndentedStyles=themeVariables=>styled_components_browser_esm.iv`
  box-shadow: ${common_generateBorders(1,themeVariables.shade4,themeVariables.shade1)},
    ${common_generateBorders(2,themeVariables.shade5,themeVariables.shade2)};
`,generateSmallButtonStyles=themeVariables=>{const activeStyles=styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade4,themeVariables.shade4)},
      ${common_generateBorders(2,themeVariables.shade3,themeVariables.shade2)};

    > * {
      position: relative;
      left: 1px;
      top: 1px;
    }
  `;return styled_components_browser_esm.iv`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${common_generateBorders(1,themeVariables.shade2,themeVariables.shade5)},
      ${common_generateBorders(2,themeVariables.shade1,themeVariables.shade4)};

    ${props=>props?.active&&activeStyles};
    &:active {
      ${activeStyles}
    }
  `},common_generateDitheredBackground=(color1,color2)=>{const image=((color1,color2)=>{const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");return canvas.width=2,canvas.height=2,ctx.fillStyle=color1,ctx.fillRect(0,0,1,1),ctx.fillRect(1,1,1,1),ctx.fillStyle=color2,ctx.fillRect(1,0,1,1),ctx.fillRect(0,1,1,1),canvas.toDataURL()})(color1,color2);return styled_components_browser_esm.iv`
    background-image: url('${image}');
    background-size: 2px 2px;
    image-rendering: pixelated;
  `},left_namespaceObject=__webpack_require__.p+"static/media/left.2b4fbd74.png",right_namespaceObject=__webpack_require__.p+"static/media/right.4bb7ff2a.png",up_namespaceObject=__webpack_require__.p+"static/media/up.93ab41bd.png",buildScrollableContentView=themeVariables=>styled_components_browser_esm.iv`
  box-sizing: border-box;
  background: ${themeVariables.shade1};
  height: calc(
    100% - ${({horizontal})=>horizontal?16:0}px
  );
  width: calc(100% - ${({vertical})=>vertical?16:0}px);
  overscroll-behavior: none;
  overflow-x: ${({horizontal})=>horizontal?"scroll":"clip"};
  overflow-y: ${({vertical})=>vertical?"scroll":"clip"};
  scrollbar-width: none;
`,buildScrollButton=(themeVariables,icon)=>styled_components_browser_esm.iv`
  ${generateSmallButtonStyles(themeVariables)}
  height: ${16}px;
  width: ${16}px;
  flex-shrink: 0;
  position: relative;

  &:before {
    background-image: url('${icon}');
    content: '';
    height: 8px;
    image-rendering: pixelated;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 8px;
  }

  &:active {
    &:before {
      top: 5px;
      left: 5px;
    }
  }
`,buildScrollbarVerticalTrack=themeVariables=>styled_components_browser_esm.iv`
  height: calc(100%);
  position: relative;
  ${common_generateDitheredBackground(themeVariables.shade3,themeVariables.shade1)};
`,buildScrollbarVerticalThumb=themeVariables=>styled_components_browser_esm.iv`
  ${generateSmallButtonStyles(themeVariables)}
  width: ${16}px;
  height: var(--height);
  top: var(--top);
  position: absolute;
  box-sizing: border-box;
`,buildScrollbarHorizontalTrack=themeVariables=>styled_components_browser_esm.iv`
  width: calc(100%);
  position: relative;
  ${common_generateDitheredBackground(themeVariables.shade3,themeVariables.shade1)};
`,buildScrollbarHorizontalThumb=themeVariables=>styled_components_browser_esm.iv`
  ${generateSmallButtonStyles(themeVariables)}
  height: ${16}px;
  width: var(--width);
  left: var(--left);
  position: absolute;
  box-sizing: border-box;
`,buildScrollbarVerticalWrapper=themeVariables=>styled_components_browser_esm.iv`
  background: ${themeVariables.shade3};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: var(--height);
  position: absolute;
  right: 0;
  top: 0;
  width: ${16}px;
`,buildScrollbarHorizontalWrapper=themeVariables=>styled_components_browser_esm.iv`
  background: ${themeVariables.shade3};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${16}px;
  left: 0;
  position: absolute;
  width: var(--width);
`,controls_buildScrollbars=themeVariables=>({ScrollableContentView:buildScrollableContentView(themeVariables),ScrollbarVerticalWrapper:buildScrollbarVerticalWrapper(themeVariables),ScrollbarHorizontalWrapper:buildScrollbarHorizontalWrapper(themeVariables),ScrollUpButton:buildScrollButton(themeVariables,up_namespaceObject),ScrollDownButton:buildScrollButton(themeVariables,down_namespaceObject),ScrollRightButton:buildScrollButton(themeVariables,right_namespaceObject),ScrollLeftButton:buildScrollButton(themeVariables,left_namespaceObject),ScrollbarVerticalTrack:buildScrollbarVerticalTrack(themeVariables),ScrollbarVerticalThumb:buildScrollbarVerticalThumb(themeVariables),ScrollbarHorizontalTrack:buildScrollbarHorizontalTrack(themeVariables),ScrollbarHorizontalThumb:buildScrollbarHorizontalThumb(themeVariables)}),tiny_down_namespaceObject=__webpack_require__.p+"static/media/tiny-down.3be0c7b3.png",tiny_up_namespaceObject=__webpack_require__.p+"static/media/tiny-up.4217c516.png",TimeInputControl=styled_components_browser_esm.iv`
  display: flex;
  height: 20px;
  gap: 2px;
  width: 100%;
`,buildTimeInputField=themeVariables=>styled_components_browser_esm.iv`
  ${generateIndentedStyles(themeVariables)}
  background: ${themeVariables.shade1};
  border: none;
  display: flex;
  width: 100%;
  padding: 2px;
`,buildTimeInputValue=themeVariables=>styled_components_browser_esm.iv`
  border: none;
  color: ${props=>props.disabled?themeVariables.textDisabled:themeVariables.text};
  font-size: 12px;
  font-family: ${fontFamily};
  outline: none;
  width: 14px;

  &::selection {
    color: white;
    background: ${props=>props.disabled?themeVariables.windowPassiveBackground:themeVariables.active};
  }
`,TimeInputSeparator=styled_components_browser_esm.iv`
  width: 4px;
  position: relative;
  display: flex;
  align-items: center;
  &:before {
    content: ':';
    position: absolute;
  }
`,buildTimeInput_generateButtonStyles=themeVariables=>{const activeStyles=styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade5,themeVariables.shade1)},
      ${common_generateBorders(2,themeVariables.shade4,themeVariables.shade2)};

    > * {
      display: inline-block;
      position: relative;
      left: 1px;
      top: 1px;
    }
  `;return styled_components_browser_esm.iv`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${common_generateBorders(1,themeVariables.shade2,themeVariables.shade5)},
      ${common_generateBorders(2,themeVariables.shade1,themeVariables.shade4)};

    ${props=>props?.active&&activeStyles};
    &:active {
      ${activeStyles}
    }
  `},buildTimeInputIncreaseButton=themeVariables=>styled_components_browser_esm.iv`
  ${buildTimeInput_generateButtonStyles(themeVariables)}
  background: ${themeVariables.shade3};
  border: none;
  padding: 2px;
  box-sizing: border-box;
  height: 9px;
  position: relative;
  width: 16px;

  &:before {
    background-image: url('${tiny_up_namespaceObject}');
    content: '';
    display: block;
    height: 3px;
    image-rendering: pixelated;
    left: 4px;
    position: relative;
    top: 0px;
    width: 3px;
  }
`,buildTimeInputDecreaseButton=themeVariables=>styled_components_browser_esm.iv`
  ${buildTimeInput_generateButtonStyles(themeVariables)}
  background: ${themeVariables.shade3};
  border: none;
  padding: 2px;
  box-sizing: border-box;
  height: 9px;
  position: relative;
  width: 16px;

  &:before {
    background-image: url('${tiny_down_namespaceObject}');
    content: '';
    display: block;
    height: 3px;
    image-rendering: pixelated;
    left: 4px;
    position: relative;
    top: -1px;
    width: 3px;
  }
`,controls_buildTimeInput=themeVariables=>({TimeInputControl,TimeInputField:buildTimeInputField(themeVariables),TimeInputValue:buildTimeInputValue(themeVariables),TimeInputSeparator,TimeInputButtons:styled_components_browser_esm.iv`
  display: flex;
  flex-direction: column;
  left: -1px;
  top: 0;
  position: relative;
`,TimeInputIncreaseButton:buildTimeInputIncreaseButton(themeVariables),TimeInputDecreaseButton:buildTimeInputDecreaseButton(themeVariables)}),controls_generateResizeHandle=themeVariables=>{const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=14,canvas.height=14,ctx.fillStyle=themeVariables.shade3,ctx.fillRect(0,0,14,14);const strokeMirroredLine=(a,b)=>{return x1=a,y1=b,x2=b,y2=a,ctx.beginPath(),ctx.moveTo(x1,y1),ctx.lineTo(x2,y2),void ctx.stroke();var x1,y1,x2,y2};return ctx.strokeStyle=themeVariables.shade1,strokeMirroredLine(0,13),ctx.strokeStyle=themeVariables.shade4,strokeMirroredLine(1,13),strokeMirroredLine(2,13),ctx.strokeStyle=themeVariables.shade1,strokeMirroredLine(4,13),ctx.strokeStyle=themeVariables.shade4,strokeMirroredLine(5,13),strokeMirroredLine(6,13),ctx.strokeStyle=themeVariables.shade1,strokeMirroredLine(8,13),ctx.strokeStyle=themeVariables.shade4,strokeMirroredLine(9,13),strokeMirroredLine(10,13),styled_components_browser_esm.iv`
    background-image: url('${canvas.toDataURL()}');
    background-size: 14px 14px;
    image-rendering: pixelated;
  `},buildAddressBarInput=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("text")};
  border: none;
  ${generateIndentedStyles(themeVariables)}

  outline: none;
  width: 100%;
  flex-grow: 1;
  font-size: 12px;
  height: 20px;
`,buildButton=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("default")};
  ${(themeVariables=>{const activeStyles=styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade5,themeVariables.shade5)},
      ${common_generateBorders(2,themeVariables.shade4,themeVariables.shade4)};

    > * {
      display: inline-block;
      position: relative;
      left: 1px;
      top: 1px;
    }
  `,focusStyles=styled_components_browser_esm.iv`
    box-shadow:
      ${common_generateBorders(1,themeVariables.shade5,themeVariables.shade5)},
      inset -2px -2px ${themeVariables.shade5},
      inset 2px 2px ${themeVariables.shade1},
      inset -3px -3px ${themeVariables.shade4};
  `;return styled_components_browser_esm.iv`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${common_generateBorders(1,themeVariables.shade1,themeVariables.shade5)},
      ${common_generateBorders(2,"transparent",themeVariables.shade4)};

    &:focus {
      ${focusStyles}
    }

    ${props=>props?.active&&activeStyles};
    &:active {
      ${activeStyles}
    }
  `})(themeVariables)}

  border-radius: 0;
  font-size: 11px;
  padding: 4px 10px 4px 10px;
  user-select: none;

  &:active {
    padding: 5px 9px 3px 11px;
  }
`,buildCheckboxWrapper=()=>{const inlineStyle=styled_components_browser_esm.iv`
    align-items: center;
  `;return styled_components_browser_esm.iv`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    padding: 2px;

    ${props=>props.inlineLabel&&inlineStyle}
  `},buildCheckbox=themeVariables=>{const checkedStyle=styled_components_browser_esm.iv`
    &:before {
      background-image: url('${check_namespaceObject}');
      content: '';
      height: 7px;
      image-rendering: pixelated;
      left: 3px;
      position: absolute;
      top: 3px;
      width: 7px;
    }
  `;return styled_components_browser_esm.iv`
    ${generateIndentedStyles(themeVariables)}
    background: ${themeVariables.shade1};
    box-sizing: border-box;
    height: 13px;
    width: 13px;
    position: relative;

    ${props=>props.checked&&checkedStyle}
  `},buildComboBoxControl=themeVariables=>styled_components_browser_esm.iv`
  ${generateIndentedStyles(themeVariables)}
  padding: 2px;
  display: flex;
  height: 18px;
`,buildComboBoxInput=themeVariables=>styled_components_browser_esm.iv`
  outline: none;
  font-size: 12px;
  border: none;
  flex-grow: 1;
  background: ${themeVariables.shade1};
  padding: 2px 4px;
`,buildComboBoxButton=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("default")};
  ${generateSmallButtonStyles(themeVariables)}

  width: 16px;
  position: relative;
  box-sizing: border-box;

  &:before {
    background-image: url('${down_namespaceObject}');
    content: '';
    height: 8px;
    image-rendering: pixelated;
    left: 4px;
    position: absolute;
    top: 5px;
    width: 8px;
  }

  &:active {
    &:before {
      top: 6px;
      left: 5px;
    }
  }
`,buildComboBoxOptions=()=>styled_components_browser_esm.iv`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${props=>""+(props.open?"block":"none")};
  margin: 0;
  padding: 0;
  position: relative;
`,buildComboBoxOption=themeVariables=>styled_components_browser_esm.iv`
  list-style: none;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px;
  ${cursors_cursor("pointer")};
  &:hover {
    background: ${themeVariables.active};
    color: white;
  }
`,buildDivider=themeVariables=>{const verticalStyle=styled_components_browser_esm.iv`
    height: 100%;
    width: 2px;
    margin: 0 4px;
  `,horizontalStyle=styled_components_browser_esm.iv`
    height: 2px;
    width: 100%;
    margin: 4px 0;
  `;return styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade4,themeVariables.shade1)};
    ${({vertical})=>vertical?verticalStyle:horizontalStyle}
  `},buildFieldset=themeVariables=>styled_components_browser_esm.iv`
  ${generateGroovedStyles(themeVariables)}
  font-family: sans-serif;
`,buildFieldsetLegend=themeVariables=>styled_components_browser_esm.iv`
  background: ${themeVariables.shade3};
  font-size: 12px;
`,buildLabel=themeVariables=>styled_components_browser_esm.iv`
  color: ${props=>props.disabled?themeVariables.textDisabled:themeVariables.text};
  font-size: 12px;
  font-family: sans-serif;
  margin: 0;
`,buildListBoxControl=themeVariables=>buildComboBoxControl(themeVariables),buildListBoxValue=themeVariables=>buildComboBoxInput(themeVariables),buildListBoxButton=themeVariables=>buildComboBoxButton(themeVariables),buildListBoxOption=themeVariables=>buildComboBoxOption(themeVariables),buildMenuBar=themeVariables=>styled_components_browser_esm.iv`
  ${generateGroovedStyles(themeVariables)}

  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  flex-shrink: 0;
  height: 25px;
  padding: 0;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  margin-bottom: -1px;
`,buildMenuBarThrobber=themeVariables=>styled_components_browser_esm.iv`
  align-self: end;
  background-color: black;
  background-image: ${({isAnimated})=>isAnimated?`url('${throbber_active_namespaceObject}')`:`url('${throbber_passive_namespaceObject}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22px 22px;
  box-shadow:
    0 1px 0 ${themeVariables.shade4},
    -1px 0 0 ${themeVariables.shade1},
    -1px 1px 0 ${themeVariables.shade1},
    -2px 0 0 ${themeVariables.shade4};
  height: calc(100% - 1px);
  image-rendering: pixelated;
  margin-left: auto;
  width: 38px;
  position: relative;
`,buildProgressBar=themeVariables=>styled_components_browser_esm.iv`
  --step-width: 8px;
  box-shadow: ${common_generateBorders(1,themeVariables.shade4,themeVariables.shade1)};
  padding: 2px;
  box-sizing: border-box;
  font-size: 12px;
  height: 16px;
  max-height: 100%;
  outline: none;
  overflow: hidden;
`,buildProgressBarFill=themeVariables=>{const indeterminateStyle=styled_components_browser_esm.iv`
    animation-duration: 1.5s;
    animation-name: indeterminate-progress-bar-fill-animation;
    animation-iteration-count: infinite;
    animation-timing-function: steps(30, end);

    @keyframes indeterminate-progress-bar-fill-animation {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(200%);
      }
    }
  `;return styled_components_browser_esm.iv`
    height: 100%;
    width: ${props=>props.disabled?"0%":"calc(var(--width))"};
    ${props=>{return"block"===props.variant?(color=themeVariables.shade5,styled_components_browser_esm.iv`
    background-color: ${color};
  `):(color=>styled_components_browser_esm.iv`
    background-image: repeating-linear-gradient(
      to right,
      ${color} 0px,
      ${color} calc(var(--step-width) - 1px),
      transparent calc(var(--step-width) - 1px),
      transparent var(--step-width)
    );
  `)(props.disabled?themeVariables.shade5:themeVariables.active);var color}}
    image-rendering: pixelated;

    ${props=>!props.disabled&&props.isIndeterminate&&indeterminateStyle});
  `},buildResizeHandle=themeVariables=>styled_components_browser_esm.iv`
  bottom: -4px;
  ${cursors_cursor("se-resize")}
  height: 18px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: -4px;
  width: 18px;
  overflow: clip;
  ${controls_generateResizeHandle(themeVariables)}
`,buildStatusBarSection=themeVariables=>styled_components_browser_esm.iv`
  border: none;
  box-shadow: ${common_generateBorders(1,themeVariables.shade4,themeVariables.shade1)};
  display: flex;
  align-items: center;
  flex-grow: ${({width})=>void 0!==width?"unset":1};
  font-family: sans-serif;
  font-size: 12px;
  padding: 2px 4px;
`,buildTextInputElement=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("text")};
  ${generateIndentedStyles(themeVariables)}
  border: none;
  box-sizing: border-box;
  color: ${props=>props.disabled?themeVariables.textDisabled:themeVariables.text};
  font-size: 12px;
  height: 20px;
  outline: none;
  padding: 4px 4px;
  width: 100%;

  &:disabled {
    background: ${themeVariables.shade3};
  }
`,buildTextareaElement=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("text")};
  ${generateIndentedStyles(themeVariables)}
  border: none;
  box-sizing: border-box;
  color: ${props=>props.disabled?themeVariables.textDisabled:themeVariables.text};
  font-size: 12px;
  height: 24px;
  outline: none;
  padding: 4px 4px;
  width: 100%;
  resize: none;
`,buildToolbar=themeVariables=>styled_components_browser_esm.iv`
  ${generateGroovedStyles(themeVariables)}
  background: ${themeVariables.shade3};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  padding: 2px;
  text-align: left;
  width: 100%;
`,buildToolbarButton=themeVariables=>styled_components_browser_esm.iv`
  ${(themeVariables=>{const activeStyles=styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade4,themeVariables.shade1)};

    > * {
      display: block;
      position: relative;
      left: 1px;
      top: 1px;
    }
  `,hoverStyles=styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade1,themeVariables.shade4)};
  `;return styled_components_browser_esm.iv`
    ${cursors_cursor("default")};
    background: ${themeVariables.shade3};
    border: none;

    &:hover {
      ${hoverStyles}
    }

    ${props=>props?.active&&activeStyles};
    &:active {
      ${activeStyles}
    }
  `})(themeVariables)}
  font-size: 12px;
  height: 100%;
  image-rendering: pixelated;
`,buildWell=themeVariables=>styled_components_browser_esm.iv`
  ${generateIndentedStyles(themeVariables)}
  background: ${themeVariables.shade1};
  padding: 2px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: ${fontFamily};
`,buildWindowContent=themeVariables=>styled_components_browser_esm.iv`
  ${generateIndentedStyles(themeVariables)};
  padding: 2px;
  font-family: sans-serif;
  flex-grow: 1;
  overflow: hidden;
`,controls_buildControls=themeVariables=>({AddressBar:styled_components_browser_esm.iv`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: sans-serif;
  font-size: 12px;
  gap: 4px;
  padding: 2px;
`,AddressBarInput:buildAddressBarInput(themeVariables),Button:buildButton(themeVariables),CheckboxWrapper:buildCheckboxWrapper(),Checkbox:buildCheckbox(themeVariables),ComboBoxControl:buildComboBoxControl(themeVariables),ComboBoxInput:buildComboBoxInput(themeVariables),ComboBoxButton:buildComboBoxButton(themeVariables),ComboBoxOptions:buildComboBoxOptions(),ComboBoxOption:buildComboBoxOption(themeVariables),Divider:buildDivider(themeVariables),Fieldset:buildFieldset(themeVariables),FieldsetLegend:buildFieldsetLegend(themeVariables),Label:buildLabel(themeVariables),ListBoxControl:buildListBoxControl(themeVariables),ListBoxValue:buildListBoxValue(themeVariables),ListBoxButton:buildListBoxButton(themeVariables),ListBoxOptions:styled_components_browser_esm.iv`
  ${buildComboBoxOptions()}
`,ListBoxOption:buildListBoxOption(themeVariables),MenuBar:buildMenuBar(themeVariables),MenuBarThrobber:buildMenuBarThrobber(themeVariables),ProgressBar:buildProgressBar(themeVariables),ProgressBarFill:buildProgressBarFill(themeVariables),...controls_buildScrollbars(themeVariables),StatusBar:styled_components_browser_esm.iv`
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
  font-size: 14px;
  flex-shrink: 0;
  gap: 2px;
  height: 22px;
  padding: 2px 0 0;
  width: 100%;
  position: relative;
`,ResizeHandle:buildResizeHandle(themeVariables),StatusBarSection:buildStatusBarSection(themeVariables),TextInputElement:buildTextInputElement(themeVariables),TextareaElement:buildTextareaElement(themeVariables),...controls_buildTimeInput(themeVariables),Toolbar:buildToolbar(themeVariables),ToolbarButton:buildToolbarButton(themeVariables),Well:buildWell(themeVariables),WindowContent:buildWindowContent(themeVariables)}),buildTaskbar=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("default")}
  background: ${themeVariables.shade3};
  border-top: 1px solid ${themeVariables.shade2};
  bottom: 0;
  box-shadow: inset 0 1px 0 0 ${themeVariables.shade1};
  box-sizing: border-box;
  display: flex;
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
    ${(themeVariables=>{const activeStyles=styled_components_browser_esm.iv`
    ${common_generateDitheredBackground(themeVariables.shade2,themeVariables.shade1)};
    box-shadow: ${common_generateBorders(1,themeVariables.shade5,themeVariables.shade1)},
      ${common_generateBorders(2,themeVariables.shade4,"transparent")};

    > * {
      display: inline-block;
      position: relative;
      left: 1px;
      top: 1px;
    }
  `;return styled_components_browser_esm.iv`
    ${cursors_cursor("default")}
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${common_generateBorders(1,themeVariables.shade1,themeVariables.shade5)},
      ${common_generateBorders(2,"transparent",themeVariables.shade4)};

    ${props=>props?.active&&activeStyles};
    &:active {
      ${activeStyles}
    }
  `})(themeVariables)}

    border-radius: 0;
    color: ${themeVariables.shade5};
    display: inline-flex;
    font-family: ${fontFamily};
    font-size: 12px;
    height: 22px;
    line-height: 18px;
    margin-left: 2px;
    margin-top: 1px;
    outline: none;
    text-align: left;
    user-select: none;
    width: 160px;

    ${props=>props.active&&activeStyle};
    &:active {
      ${activeStyle}
    }
  `},buildDesktop=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("default")};
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
`,elements_buildElements=themeVariables=>({Desktop:buildDesktop(themeVariables),Taskbar:buildTaskbar(themeVariables),TaskbarButton:buildTaskbarButton(themeVariables),TaskbarButtonIcon:styled_components_browser_esm.iv`
  display: block;
  height: 16px;
  image-rendering: pixelated;
  margin-right: 4px;
  position: relative;
  top: 2px;
  width: 16px;
`,VersionInfo:styled_components_browser_esm.iv`
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
`}),createColor=(r,g,b)=>({r:clamp(r),g:clamp(g),b:clamp(b)}),parseColor=color=>{const match=color.match(/rgb\((\d+),?\s*(\d+),?\s*(\d+)\)/);if(!match)throw new Error("Invalid color format. Use 'rgb(r, g, b)' or 'rgb(r g b)'");const r=parseInt(match[1]),g=parseInt(match[2]),b=parseInt(match[3]);return createColor(r,g,b)},clamp=value=>Math.max(0,Math.min(255,value)),multiply=(color,matrix)=>{const newR=clamp(color.r*matrix[0]+color.g*matrix[1]+color.b*matrix[2]),newG=clamp(color.r*matrix[3]+color.g*matrix[4]+color.b*matrix[5]),newB=clamp(color.r*matrix[6]+color.g*matrix[7]+color.b*matrix[8]);return createColor(newR,newG,newB)},linear=(color,slope=1,intercept=0)=>createColor(clamp(color.r*slope+255*intercept),clamp(color.g*slope+255*intercept),clamp(color.b*slope+255*intercept)),hsl=color=>{const r=color.r/255,g=color.g/255,b=color.b/255,max=Math.max(r,g,b),min=Math.min(r,g,b);let h,s,l=(max+min)/2;if(max===min)h=s=0;else{const d=max-min;switch(s=l>.5?d/(2-max-min):d/(max+min),max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4}h/=6}return{h:100*h,s:100*s,l:100*l}},fix=(value,idx)=>{let max=100;return 2===idx?max=7500:4!==idx&&5!==idx||(max=200),3===idx?value>max?value%=max:value<0&&(value=max+value%max):value<0?value=0:value>max&&(value=max),value},loss=(target,color,filters)=>{let tempColor=color;tempColor=((color,value=1)=>createColor(clamp(255*(value+color.r/255*(1-2*value))),clamp(255*(value+color.g/255*(1-2*value))),clamp(255*(value+color.b/255*(1-2*value)))))(tempColor,filters[0]/100),tempColor=((color,value=1)=>multiply(color,[.393+.607*(1-value),.769-.769*(1-value),.189-.189*(1-value),.349-.349*(1-value),.686+.314*(1-value),.168-.168*(1-value),.272-.272*(1-value),.534-.534*(1-value),.131+.869*(1-value)]))(tempColor,filters[1]/100),tempColor=((color,value=1)=>multiply(color,[.213+.787*value,.715-.715*value,.072-.072*value,.213-.213*value,.715+.285*value,.072-.072*value,.213-.213*value,.715-.715*value,.072+.928*value]))(tempColor,filters[2]/100),tempColor=((color,angle=0)=>{angle=angle/180*Math.PI;const sin=Math.sin(angle),cos=Math.cos(angle);return multiply(color,[.213+.787*cos-.213*sin,.715-.715*cos-.715*sin,.072-.072*cos+.928*sin,.213-.213*cos+.143*sin,.715+.285*cos+.14*sin,.072-.072*cos-.283*sin,.213-.213*cos-.787*sin,.715-.715*cos+.715*sin,.072+.928*cos+.072*sin])})(tempColor,3.6*filters[3]),tempColor=((color,value=1)=>linear(color,value))(tempColor,filters[4]/100),tempColor=((color,value=1)=>linear(color,value,-.5*value+.5))(tempColor,filters[5]/100);const colorHSL=hsl(tempColor),targetHSL=hsl(target);return Math.abs(tempColor.r-target.r)+Math.abs(tempColor.g-target.g)+Math.abs(tempColor.b-target.b)+Math.abs(colorHSL.h-targetHSL.h)+Math.abs(colorHSL.s-targetHSL.s)+Math.abs(colorHSL.l-targetHSL.l)},spsa=(target,color,A,a,c,values,iters)=>{let best=null,bestLoss=1/0;const deltas=new Array(6),highArgs=new Array(6),lowArgs=new Array(6);for(let k=0;k<iters;k++){const ck=c/Math.pow(k+1,.16666666666666666);for(let i=0;i<6;i++)deltas[i]=Math.random()>.5?1:-1,highArgs[i]=values[i]+ck*deltas[i],lowArgs[i]=values[i]-ck*deltas[i];const lossDiff=loss(target,color,highArgs)-loss(target,color,lowArgs);for(let i=0;i<6;i++){const g=lossDiff/(2*ck)*deltas[i],ak=a[i]/Math.pow(A+k+1,1);values[i]=fix(values[i]-ak*g,i)}const currentLoss=loss(target,color,values);currentLoss<bestLoss&&(best=values.slice(0),bestLoss=currentLoss)}return{values:best,loss:bestLoss}},common_generateColorFilter=targetColor=>{const target=parseColor(targetColor),color=parseColor("rgb(0 0 0)"),wide=((target,color)=>{const a=[60,180,18e3,600,1.2,1.2];let best={loss:1/0,values:[]};for(let i=0;best.loss>25&&i<3;i++){const result=spsa(target,color,5,a,15,[50,20,3750,50,100,100],1e3);result.loss<best.loss&&(best=result)}return best})(target,color),result=((target,color,wide)=>{const A=wide.loss,A1=A+1;return spsa(target,color,A,[.25*A1,.25*A1,A1,.25*A1,.2*A1,.2*A1],2,wide.values,500)})(target,color,wide);return(filters=>{const fmt=(idx,multiplier=1)=>Math.round(filters[idx]*multiplier);return`filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3,3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`})(result.values)},close_namespaceObject=__webpack_require__.p+"static/media/close.eb481f5e.png",maximize_namespaceObject=__webpack_require__.p+"static/media/maximize.15fe9091.png",minimize_namespaceObject=__webpack_require__.p+"static/media/minimize.58b293c2.png",restore_namespaceObject=__webpack_require__.p+"static/media/restore.1cb0d0ba.png",sharedStyle=styled_components_browser_esm.iv`
  box-sizing: border-box;
  position: absolute;
`,NResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-1}px;
  left: ${-1}px;
  right: ${-1}px;
  height: ${5}px;
  ${cursors_cursor("n-resize")};
`,NEResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-1}px;
  right: ${-1}px;
  height: ${10}px;
  width: ${10}px;
  ${cursors_cursor("ne-resize")};
`,EResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-1}px;
  bottom: ${-1}px;
  right: ${-1}px;
  width: ${5}px;
  ${cursors_cursor("e-resize")};
`,SEResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  bottom: ${-1}px;
  right: ${-1}px;
  height: ${10}px;
  width: ${10}px;
  ${cursors_cursor("se-resize")};
`,SResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  bottom: ${-1}px;
  left: ${-1}px;
  right: ${-1}px;
  height: ${5}px;
  ${cursors_cursor("s-resize")};
`,SWResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  bottom: ${-1}px;
  left: ${-1}px;
  height: ${10}px;
  width: ${10}px;
  ${cursors_cursor("sw-resize")};
`,WResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-1}px;
  bottom: ${-1}px;
  left: ${-1}px;
  width: ${5}px;
  ${cursors_cursor("w-resize")};
`,NWResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-1}px;
  left: ${-1}px;
  height: ${10}px;
  width: ${10}px;
  ${cursors_cursor("nw-resize")};
`,maximizedStyles=styled_components_browser_esm.iv`
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
  padding: 4px;
  position: absolute;
  ${cursors_cursor("default")};

  &:before {
    background: ${themeVariables.shade3};
    bottom: 0;
    box-shadow: ${common_generateBorders(1,themeVariables.shade2,themeVariables.shade5)},
      ${common_generateBorders(2,themeVariables.shade1,themeVariables.shade4)};
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  ${props=>props.isMaximized&&maximizedStyles}
  ${props=>props.isMinimized&&minimizedStyles}
`,buildTitleBar=themeVariables=>styled_components_browser_esm.iv`
  background: ${props=>props.isActive?themeVariables.windowActiveBackground:themeVariables.windowPassiveBackground};
  box-sizing: border-box;
  color: ${themeVariables.windowTitleText};
  display: flex;
  flex-shrink: 0;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  height: 18px;
  image-rendering: pixelated;
  line-height: 18px;
  margin-bottom: 1px;
  padding: 0 2px;
  user-select: none;
  width: 100%;
`,buildWindowButton=themeVariables=>styled_components_browser_esm.iv`
  ${cursors_cursor("default")};
  ${(themeVariables=>{const activeStyles=styled_components_browser_esm.iv`
    box-shadow: ${common_generateBorders(1,themeVariables.shade5,themeVariables.shade1)},
      ${common_generateBorders(2,themeVariables.shade4,"transparent")};
  `;return styled_components_browser_esm.iv`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${common_generateBorders(1,themeVariables.shade1,themeVariables.shade5)},
      ${common_generateBorders(2,"transparent",themeVariables.shade4)};

    ${props=>props?.active&&activeStyles};
    &:not(:disabled):active {
      ${activeStyles}
    }
  `})(themeVariables)};

  border-radius: 0;
  color: ${themeVariables.shade5};
  box-sizing: border-box;
  height: 14px;
  margin: 4px 0;
  padding: 0;
  position: relative;
  width: 16px;

  &:before,
  &:after {
    content: '';
    height: 9px;
    image-rendering: pixelated;
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 9px;
  }

  &:not(:disabled) {
    &:after {
      display: none;
    }
  }

  &:not(:disabled):active:before {
    left: 4px;
    top: 3px;
  }

  &:disabled {
    &:before {
      left: 4px;
      top: 3px;
      filter: invert(1);
    }
    &:after {
      display: block;
      content: '';
      ${common_generateColorFilter(themeVariables.shade4)};
    }
  }
`,window_buildWindow=themeVariables=>({TitleBarTitle:styled_components_browser_esm.iv`
  position: relative;
`,WindowElement:buildWindowElement(themeVariables),WindowElementContent:styled_components_browser_esm.iv`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: ${fontFamily};
  font-size: 12px;
  height: 100%;
  margin: 0;
  overflow: hidden;
  text-align: left;
  user-select: none;
  width: 100%;
`,TitleBar:buildTitleBar(themeVariables),TitleBarButtons:styled_components_browser_esm.iv`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 6px;
  top: 2px;
  margin: 0;
`,WindowButton:buildWindowButton(themeVariables),MinimizeButton:styled_components_browser_esm.iv`
  &:before,
  &:after {
    background-image: url('${minimize_namespaceObject}');
  }
`,MaximizeButton:styled_components_browser_esm.iv`
  &:before,
  &:after {
    background-image: url('${maximize_namespaceObject}');
  }
`,UnmaximizeButton:styled_components_browser_esm.iv`
  &:before,
  &:after {
    background-image: url('${restore_namespaceObject}');
  }
`,CloseButton:styled_components_browser_esm.iv`
  margin-left: 2px;

  &:before,
  &:after {
    background-image: url('${close_namespaceObject}');
  }
`,...resizeBorder_namespaceObject}),themeBuilder=({id,name,themeVariables,controls,elements,window})=>({id,name,controls:Object.assign({},controls_buildControls(themeVariables),controls),elements:Object.assign({},elements_buildElements(themeVariables),elements),window:Object.assign({},window_buildWindow(themeVariables),window),icons:src_icons}),win9x_16_colors=themeBuilder({id:"win9x-16-colors",name:"Windows 9x, 16 colors",themeVariables:{active:"rgb(0 0 168)",passive:"rgb(135 136 143)",background:"rgb(87 168 168)",shade1:"rgb(255 255 255)",shade2:"rgb(192 199 200)",shade3:"rgb(192 199 200)",shade4:"rgb(135 136 143)",shade5:"rgb(0 0 0)",text:"rgb(0 0 0)",textDisabled:"rgb(135 136 143)",windowActiveBackground:"rgb(0 0 168)",windowPassiveBackground:"rgb(135 136 143)",windowTitleText:"rgb(255 255 255)"}}),win9x_256_colors=themeBuilder({id:"win9x-256-colors",name:"Windows 9x, 256 colors",themeVariables:{active:"rgb(0 0 128)",passive:"rgb(128 128 128)",background:"rgb(0 128 128)",shade1:"rgb(255 255 255)",shade2:"rgb(192 192 192)",shade3:"rgb(192 192 192)",shade4:"rgb(128 128 128)",shade5:"rgb(0 0 0)",text:"rgb(0 0 0)",textDisabled:"rgb(128 128 128)",windowActiveBackground:"rgb(0 0 128)",windowPassiveBackground:"rgb(128 128 128)",windowTitleText:"rgb(255 255 255)"}}),common_generateTitleGradient=(color1,color2)=>`linear-gradient(90deg, ${color1}, ${color2})`,win9x_16_bit=themeBuilder({id:"win9x-16-bit",name:"Windows 9x, High Color 16-bit",themeVariables:{active:"rgb(0 0 120)",passive:"rgb(120 124 120)",background:"rgb(0 124 120)",shade1:"rgb(248 252 248)",shade2:"rgb(216  220  216)",shade3:"rgb(184 188 184)",shade4:"rgb(120 124 120)",shade5:"rgb(0 0 0)",text:"rgb(0 0 0)",textDisabled:"rgb(120 124 120)",windowActiveBackground:common_generateTitleGradient("rgb(0 0 120)","rgb(8 128 200)"),windowPassiveBackground:common_generateTitleGradient("rgb(120 124 120)","rgb(176 176 176)"),windowTitleText:"rgb(248 252 248)"}}),win9x_24_bit=themeBuilder({id:"win9x-24-bit",name:"Windows 9x, True Color 24-bit",themeVariables:{active:"rgb(0 0 128)",passive:"rgb(128 128 128)",background:"rgb(0 128 128)",shade1:"rgb(255 255 255)",shade2:"rgb(223 223 223)",shade3:"rgb(192 192 192)",shade4:"rgb(128 128 128)",shade5:"rgb(0 0 0)",text:"rgb(0 0 0)",textDisabled:"rgb(128 128 128)",windowActiveBackground:common_generateTitleGradient("rgb(0 0 128)","rgb(16 132 208)"),windowPassiveBackground:common_generateTitleGradient("rgb(128 128 128)","rgb(181 181 181)"),windowTitleText:"rgb(255 255 255)"}}),win9x_32_bit=themeBuilder({id:"win9x-32-bit",name:"Windows 9x, True Color 32-bit",themeVariables:{active:"rgb(0 0 128)",passive:"rgb(128 128 128)",background:"rgb(0 128 128)",shade1:"rgb(255 255 255)",shade2:"rgb(223 223 223)",shade3:"rgb(192 192 192)",shade4:"rgb(128 128 128)",shade5:"rgb(0 0 0)",text:"rgb(0 0 0)",textDisabled:"rgb(128 128 128)",windowActiveBackground:common_generateTitleGradient("rgb(0 0 128)","rgb(16 132 208)"),windowPassiveBackground:common_generateTitleGradient("rgb(128 128 128)","rgb(181 181 181)"),windowTitleText:"rgb(255 255 255)"}}),win2k=themeBuilder({id:"win2k",name:"Windows 2000",themeVariables:{active:"rgb(10 36 106)",passive:"rgb(128 128 128)",background:"rgb(58 110 165)",shade1:"rgb(255 255 255)",shade2:"rgb(212 208 200)",shade3:"rgb(212 208 200)",shade4:"rgb(128 128 128)",shade5:"rgb(0 0 0)",text:"rgb(0 0 0)",textDisabled:"rgb(128 128 128)",windowActiveBackground:common_generateTitleGradient("rgb(10 36 106)","rgb(166 202 240)"),windowPassiveBackground:common_generateTitleGradient("rgb(120 124 120)","rgb(176 176 176)"),windowTitleText:"rgb(255 255 255)"}}),vaporwin=themeBuilder({id:"vaporwin",name:"ウィンドウズ",themeVariables:{active:"rgb(10, 36, 106)",passive:"rgb(164, 81, 123)",background:'url("https://i.redd.it/k4o8nz5vfiyy.gif")',shade1:"rgb(255, 255, 255)",shade2:"rgb(253, 181, 218)",shade3:"rgb(253, 181, 218)",shade4:"rgb(164, 81, 123)",shade5:"rgb(164, 81, 123)",text:"rgb(164, 81, 123)",textDisabled:"rgb(164, 81, 123)",windowActiveBackground:"linear-gradient(90deg, #ff6ad5, #c774e8, #ad8cff, #8795e8, #94d0ff)",windowPassiveBackground:"gray",windowTitleText:"rgb(255, 255, 255)"}}),_storybook_preview={parameters:{options:{storySort:{order:["Wisp",["Basics","Advanced Usage","Theming"],"controls"]}}},decorators:[(0,index_esm.iP)({themes:[win9x_16_colors,win9x_256_colors,win9x_16_bit,win9x_24_bit,win9x_32_bit,win2k,vaporwin,index_esm.uH]}),index_esm._9]}},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./AdvancedUsage.stories":["./stories/AdvancedUsage.stories.tsx",49],"./AdvancedUsage.stories.tsx":["./stories/AdvancedUsage.stories.tsx",49],"./Basics.stories":["./stories/Basics.stories.tsx",342],"./Basics.stories.tsx":["./stories/Basics.stories.tsx",342],"./Theming.stories":["./stories/Theming.stories.tsx",774],"./Theming.stories.tsx":["./stories/Theming.stories.tsx",774],"./controls/AddressBar.stories":["./stories/controls/AddressBar.stories.tsx",706],"./controls/AddressBar.stories.tsx":["./stories/controls/AddressBar.stories.tsx",706],"./controls/AlertText.stories":["./stories/controls/AlertText.stories.tsx",897],"./controls/AlertText.stories.tsx":["./stories/controls/AlertText.stories.tsx",897],"./controls/Button.stories":["./stories/controls/Button.stories.tsx",717],"./controls/Button.stories.tsx":["./stories/controls/Button.stories.tsx",717],"./controls/Checkbox.stories":["./stories/controls/Checkbox.stories.tsx",314],"./controls/Checkbox.stories.tsx":["./stories/controls/Checkbox.stories.tsx",314],"./controls/ComboBox.stories":["./stories/controls/ComboBox.stories.tsx",161],"./controls/ComboBox.stories.tsx":["./stories/controls/ComboBox.stories.tsx",161],"./controls/Divider.stories":["./stories/controls/Divider.stories.tsx",958],"./controls/Divider.stories.tsx":["./stories/controls/Divider.stories.tsx",958],"./controls/Fieldset.stories":["./stories/controls/Fieldset.stories.tsx",443],"./controls/Fieldset.stories.tsx":["./stories/controls/Fieldset.stories.tsx",443],"./controls/Label.stories":["./stories/controls/Label.stories.tsx",514],"./controls/Label.stories.tsx":["./stories/controls/Label.stories.tsx",514],"./controls/ListBox.stories":["./stories/controls/ListBox.stories.tsx",923],"./controls/ListBox.stories.tsx":["./stories/controls/ListBox.stories.tsx",923],"./controls/MenuBar.stories":["./stories/controls/MenuBar.stories.tsx",357],"./controls/MenuBar.stories.tsx":["./stories/controls/MenuBar.stories.tsx",357],"./controls/ProgressBar.stories":["./stories/controls/ProgressBar.stories.tsx",913],"./controls/ProgressBar.stories.tsx":["./stories/controls/ProgressBar.stories.tsx",913],"./controls/ScrollableContent.stories":["./stories/controls/ScrollableContent.stories.tsx",218],"./controls/ScrollableContent.stories.tsx":["./stories/controls/ScrollableContent.stories.tsx",218],"./controls/StatusBar.stories":["./stories/controls/StatusBar.stories.tsx",221],"./controls/StatusBar.stories.tsx":["./stories/controls/StatusBar.stories.tsx",221],"./controls/StatusBarSection.stories":["./stories/controls/StatusBarSection.stories.tsx",328],"./controls/StatusBarSection.stories.tsx":["./stories/controls/StatusBarSection.stories.tsx",328],"./controls/TextInput.stories":["./stories/controls/TextInput.stories.tsx",718],"./controls/TextInput.stories.tsx":["./stories/controls/TextInput.stories.tsx",718],"./controls/Textarea.stories":["./stories/controls/Textarea.stories.tsx",336],"./controls/Textarea.stories.tsx":["./stories/controls/Textarea.stories.tsx",336],"./controls/TimeInput.stories":["./stories/controls/TimeInput.stories.tsx",576],"./controls/TimeInput.stories.tsx":["./stories/controls/TimeInput.stories.tsx",576],"./controls/Toolbar.stories":["./stories/controls/Toolbar.stories.tsx",53],"./controls/Toolbar.stories.tsx":["./stories/controls/Toolbar.stories.tsx",53],"./controls/ToolbarButton.stories":["./stories/controls/ToolbarButton.stories.tsx",961],"./controls/ToolbarButton.stories.tsx":["./stories/controls/ToolbarButton.stories.tsx",961],"./controls/Well.stories":["./stories/controls/Well.stories.tsx",552],"./controls/Well.stories.tsx":["./stories/controls/Well.stories.tsx",552],"./controls/WindowContent.stories":["./stories/controls/WindowContent.stories.tsx",771],"./controls/WindowContent.stories.tsx":["./stories/controls/WindowContent.stories.tsx",771]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[720],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.859bf353.iframe.bundle.js.map