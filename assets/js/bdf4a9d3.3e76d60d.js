"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5992],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63857:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:3,sidebar_label:"Sync, Async and Qt"},c="Sync and Async Api",l={unversionedId:"sync_async",id:"sync_async",title:"Sync and Async Api",description:"Rath tries to faciliate the usage of async and sync consumers alike and hide implementation details under a coverning api that",source:"@site/docs/sync_async.md",sourceDirName:".",slug:"/sync_async",permalink:"/rath/docs/sync_async",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sync_async.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sync, Async and Qt"},sidebar:"tutorialSidebar",previous:{title:"Split",permalink:"/rath/docs/links/split"},next:{title:"Rath \u2764\ufe0f Turms",permalink:"/rath/docs/turms"}},p=[{value:"How this is done...",id:"how-this-is-done",children:[],level:3},{value:"However",id:"however",children:[],level:3}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync-and-async-api"},"Sync and Async Api"),(0,o.kt)("p",null,"Rath tries to faciliate the usage of async and sync consumers alike and hide implementation details under a coverning api that\nshould feel natural for both type of scenarios. No matter which Terminating Link ",(0,o.kt)("strong",{parentName:"p"},"async")," or ",(0,o.kt)("strong",{parentName:"p"},"sync")," you are choosing. The Api i\nalways the following depending on the context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="async.api"',title:'"async.api"'},"\nasync with Rath(...) as rath:\n\n    result = await rath.aexecute(...)\n\n    async for reslt in rath.asubscribe(...):\n        print(result)\n\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="sync.api"',title:'"sync.api"'},"\nwith Rath(...) as rath:\n\n    result = rath.execute(...)\n\n    for result in rath.subscribe(...):\n        print(result)\n\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'You can call the execute api also from an asynchronous context and await the result in async world "execute" and "aexecute" are both\ncoroutines (execute just checks additionally if we are in the loop)'))),(0,o.kt)("p",null,'If you really don\'t want to use context managers and handle the connection logic and killing of threads or tasks yourself you\ncan always just call "connect" and "disconnect"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"rath = Rath(...)\nrath.connect()\n\nfor e in rath.subscribe(...)\n    print(e)\n\n#rath disconnect\nrath.disconnect()\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you choose this approach and forget to disconnect, you will have a deamon thread running in the background that is still being\nconnected. Choose this wisely!"))),(0,o.kt)("h3",{id:"how-this-is-done"},"How this is done..."),(0,o.kt)("p",null,"Rath uses the ",(0,o.kt)("strong",{parentName:"p"},"koil library"),' to facilitate this "context switch". In short when using koil ',(0,o.kt)("strong",{parentName:"p"},"and")," running under a sync context, rath\nwill either spin up a new event loop in another thread on connect (or entering the context manager). You now interact threadsafe with\nthat event loop through a synchronous api. This means you can even create asyncio.like Tasks in the other event loop (using as_task),\nor iterate over results in the other loop. On closing the context manager or disconnect, that event loop gets closed and all tasks cancelled."),(0,o.kt)("h1",{id:"qt"},"QT"),(0,o.kt)("p",null,"Koil can be also run globally (for example in a pyqt app) and can overwrite the task classes that are being returned, so that you can easily integrate\nrath in a qt app and use signals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from koil.qt import QtKoil\n\n\nclass QWidget(qtpy.QtWidget):\n\n    def __init__(*args, **kwargs):\n        super().__init__(*args, **kwargs)\n        self.koil = QtKoil(auto_connect=True) # WIll automaticalll create a threaded eventloop and destroy it on application close\n        self.rath = Rath(...)\n        self.text = QLineEdit()\n\n        self.rath.connect() # disconnecting will automatically happen on application close or on call to disconnect\n        self.subscribe_to_events()\n\n    def subscribe_to_events(self):\n\n        self.beastSubscription = self.rath.subscribe("""subscribtion {\n            watchBeasts {\n                name\n                legs\n            }\n        }""", as_task=True)\n\n        self.beastSubscription.yielded.connect(self.new_beast) #pyqt signal for yield on task\n\n\n    def new_beast(res: GraphQLResult):\n        self.text.setText(res.data["watchBeasts"]["name"])\n\n\n    def close():\n        self.beastSubscription.cancel()\n\n')),(0,o.kt)("h3",{id:"however"},"However"),(0,o.kt)("p",null,"Using async libraries in a sync environment is not an easy undertaking and comes with a lot of pitfalls, and performance penalties.\nSo when you start out your project make sure you understand what you are dealing with."))}d.isMDXComponent=!0}}]);