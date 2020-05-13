(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1),o=(n(0),n(164));const c={},a={id:"api-reference/core/useRecoilState",title:"useRecoilState",description:"### Example",source:"@site/docs/api-reference/core/useRecoilState.md",permalink:"/Recoil/docs/api-reference/core/useRecoilState",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api-reference/core/useRecoilState.md"},i=[{value:"Example",id:"example",children:[]}],p={rightToc:i};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {atom, selector, useRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelcius = selector({\n  key: 'tempCelcius',\n  get: ({get}) => ((get(temptempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),\n});\n\nfunction TempCelcius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelcius);\n\n  const addTenCelcius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n\n  return (\n    <div>\n      Temp (Celcius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelcius}>Add 10 Celcius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||c;return n?o.a.createElement(d,i({ref:t},u,{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);