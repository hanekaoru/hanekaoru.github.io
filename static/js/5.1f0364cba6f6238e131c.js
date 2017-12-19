webpackJsonp([5],{"8NaV":function(n,t,e){"use strict";function o(n){e("rpKu")}Object.defineProperty(t,"__esModule",{value:!0});var i={methods:{notify01:function(){this.$notify({message:"这是一条默认消息通知",delay:2e3,type:"default"})},notify02:function(){this.$notify({message:"这是一条成功消息通知",delay:2e3,type:"success"})},notify03:function(){this.$notify({message:"这是一条警告消息通知",delay:2e3,type:"waring"})},notify04:function(){this.$notify({message:"这是一条危险消息通知",delay:2e3,type:"danger"})},notify05:function(){this.$notify({message:"这是一条默认消息通知",delay:2e3,type:"default",close:!0,onClick:function(){console.log("...")}})},notify06:function(){this.$notify({message:"这是一条成功消息通知",delay:2e3,type:"success",close:!0,onClick:function(){console.log("...")}})},notify07:function(){this.$notify({message:"这是一条默认消息通知",delay:2e3,type:"default",onClick:function(){console.log("...")},align:"center"})},notify08:function(){this.$notify({message:"这是一条成功消息通知",delay:2e3,type:"success",close:!0,onClick:function(){console.log("...")},align:"center"})}}},s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"components-box"},[e("div",{staticClass:"components-title"},[n._v("Notify - 顶部消息通知")]),n._v(" "),e("div",{staticClass:"components-wrapper"},[e("ul",[e("li",[e("div",{staticClass:"components-content"},[e("h2",{staticClass:"h2"},[n._v("Notify - 消息通知（默认）")]),n._v(" "),e("dy-button",{on:{click:n.notify01}},[n._v("默认通知")]),n._v(" "),e("dy-button",{on:{click:n.notify02}},[n._v("成功通知")]),n._v(" "),e("dy-button",{on:{click:n.notify03}},[n._v("警告通知")]),n._v(" "),e("dy-button",{on:{click:n.notify04}},[n._v("危险通知")])],1),n._v(" "),n._m(0),n._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n._v("\r\n    "),e("code",{staticClass:"html"},[n._v('\r\n    <template>\r\n\r\n        <dy-button @click="notify01">默认通知</dy-button>\r\n        <dy-button @click="notify02">成功通知</dy-button>\r\n        <dy-button @click="notify03">警告通知</dy-button>\r\n        <dy-button @click="notify04">危险通知</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                notify01() {\r\n                    this.$notify({\r\n                        message: "这是一条默认消息通知",\r\n                        delay: 2000,\r\n                        type: "default"\r\n                    });\r\n                },\r\n                notify02() {\r\n                    this.$notify({\r\n                        message: "这是一条成功消息通知",\r\n                        delay: 2000,\r\n                        type: "success"\r\n                    });\r\n                },\r\n                notify03() {\r\n                    this.$notify({\r\n                        message: "这是一条警告消息通知",\r\n                        delay: 2000,\r\n                        type: "waring"\r\n                    });\r\n                },\r\n                notify04() {\r\n                    this.$notify({\r\n                        message: "这是一条危险消息通知",\r\n                        delay: 2000,\r\n                        type: "danger"\r\n                    });\r\n                },\r\n            }\r\n        }\r\n    <\/script>\r\n    ')]),n._v("\r\n")])]),n._v(" "),e("li",[e("div",{staticClass:"components-content"},[e("h2",{staticClass:"h2"},[n._v("Notify - 消息通知（带关闭按钮）")]),n._v(" "),e("dy-button",{on:{click:n.notify05}},[n._v("默认通知")]),n._v(" "),e("dy-button",{on:{click:n.notify06}},[n._v("成功通知")])],1),n._v(" "),n._m(1),n._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n._v("\r\n    "),e("code",{staticClass:"html"},[n._v('\r\n    <template>\r\n\r\n        <dy-button @click="notify05">默认通知</dy-button>\r\n        <dy-button @click="notify06">成功通知</dy-button>\r\n        \r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                notify05() {\r\n                    this.$notify({\r\n                        message: "这是一条默认消息通知",\r\n                        delay: 2000,\r\n                        type: "default",\r\n                        close: true,\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        }\r\n                    });\r\n                },\r\n                notify06() {\r\n                    this.$notify({\r\n                        message: "这是一条成功消息通知",\r\n                        delay: 2000,\r\n                        type: "success",\r\n                        close: true,\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    <\/script>\r\n    ')]),n._v("\r\n")])]),n._v(" "),e("li",[e("div",{staticClass:"components-content"},[e("h2",{staticClass:"h2"},[n._v("Notify - 消息通知（文字居中显示）")]),n._v(" "),e("dy-button",{on:{click:n.notify07}},[n._v("默认通知")]),n._v(" "),e("dy-button",{on:{click:n.notify08}},[n._v("成功通知")])],1),n._v(" "),n._m(2),n._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n._v("\r\n    "),e("code",{staticClass:"html"},[n._v('\r\n    <template>\r\n\r\n        <dy-button @click="notify07">默认通知</dy-button>\r\n        <dy-button @click="notify08">成功通知</dy-button>\r\n        \r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                notify07() {\r\n                    this.$notify({\r\n                        message: "这是一条默认消息通知",\r\n                        delay: 2000,\r\n                        type: "default",\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        },\r\n                        align: "center"\r\n                    });\r\n                },\r\n                notify08() {\r\n                    this.$notify({\r\n                        message: "这是一条成功消息通知",\r\n                        delay: 2000,\r\n                        type: "success",\r\n                        close: true,\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        },\r\n                        align: "center"\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    <\/script>\r\n    ')]),n._v("\r\n")])])])])])},r=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"components-code"},[e("div",{staticClass:"code-title"},[n._v("示例代码")]),n._v(" "),e("div",{staticClass:"code-tip"},[e("p",[n._v("绑定 "),e("code",[n._v("click")]),n._v(" 方法后调用 "),e("code",[n._v("$notify({})")]),n._v(" 方法即可")]),n._v(" "),e("br"),n._v(" "),e("p",[e("code",[n._v("message")]),n._v(" -- 通知内容")]),n._v(" "),e("p",[e("code",[n._v("close")]),n._v(" -- 布尔值，是否出现关闭按钮，默认为 "),e("code",[n._v("false")])]),n._v(" "),e("p",[e("code",[n._v("onClose")]),n._v(" -- 消息通知关闭后的回调事件")]),n._v(" "),e("p",[e("code",[n._v("delay")]),n._v(" -- 自动关闭时间，默认为 "),e("code",[n._v("2000")]),n._v(" 毫秒")]),n._v(" "),e("p",[e("code",[n._v("type")]),n._v(" -- 通知框的主题，分为 "),e("code",[n._v("default")]),n._v("，"),e("code",[n._v("success")]),n._v("，"),e("code",[n._v("waring")]),n._v("，"),e("code",[n._v("danger")]),n._v("，默认为 "),e("code",[n._v("default")])]),n._v(" "),e("p",[e("code",[n._v("align")]),n._v(" -- 字体显示方向，默认为 "),e("code",[n._v("left")]),n._v("，可选值为 "),e("code",[n._v("center")])])])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"components-code"},[e("div",{staticClass:"code-title"},[n._v("示例代码")]),n._v(" "),e("div",{staticClass:"code-tip"},[e("p",[e("code",[n._v("$notify({})")]),n._v(" 指令中添加参数 "),e("code",[n._v("close: true")]),n._v(" 即可")])])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"components-code"},[e("div",{staticClass:"code-title"},[n._v("示例代码")]),n._v(" "),e("div",{staticClass:"code-tip"},[e("p",[e("code",[n._v("$notify({})")]),n._v(" 指令中添加参数 "),e("code",[n._v('align: "center"')]),n._v(" 即可")])])])}],c={render:s,staticRenderFns:r},l=c,a=e("OF7X"),v=o,y=a(i,l,!1,v,null,null);t.default=y.exports},rpKu:function(n,t,e){var o=e("tNth");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("8bSs")("3113b8b7",o,!0)},tNth:function(n,t,e){t=n.exports=e("BkJT")(!0),t.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Notify.vue",sourceRoot:""}])}});
//# sourceMappingURL=5.1f0364cba6f6238e131c.js.map