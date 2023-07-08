import{j as o,t as u,u as i,c as g,p as x,P as m,i as b}from"./vendor-97efe107.js";import"./index-32411ff9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ae5c499a-d13b-4c5c-88d7-eb4c8801ee5b",t._sentryDebugIdIdentifier="sentry-dbid-ae5c499a-d13b-4c5c-88d7-eb4c8801ee5b")}catch{}})();const f={danger:"text-red-800 bg-red-50 dark:bg-red-900 dark:text-red-400",info:"text-blue-800 bg-blue-50 dark:bg-blue-900 dark:text-blue-400",success:"text-green-800 bg-green-50 dark:bg-green-900 dark:text-green-400",warning:"text-yellow-800 bg-yellow-50 dark:bg-yellow-900 dark:text-yellow-400"},p=t=>{const{children:e,className:r,severity:n="info"}=t;return o.jsx("div",{className:u("p-4 mb-4 text-sm rounded-lg",f[n],r),role:"alert",children:e})},N=t=>{const{children:e,className:r,...n}=t;return o.jsx("div",{className:u("bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden",r),...n,children:e})},w={"2xl":"max-w-screen-2xl",full:"max-w-none",lg:"max-w-screen-lg",md:"max-w-screen-md",sm:"max-w-screen-sm",xl:"max-w-screen-xl"},j=t=>{const{children:e,maxWidth:r="full"}=t;return o.jsx("div",{className:"flex justify-center w-full",children:o.jsx("div",{className:u("w-full",w[r]),children:e})})},A=t=>{const{className:e}=t;return o.jsx("hr",{className:u("h-px my-2 bg-gray-200 border-0 dark:bg-gray-700",e)})},h=()=>({drivers:{}}),D=t=>{const{children:e,term:r,className:n}=t;return o.jsxs("dl",{className:u("flex flex-col",n),children:[o.jsx("div",{className:"flex flex-col justify-center h-full",children:o.jsx("dt",{className:"text-sm font-normal text-gray-600 dark:text-gray-400",children:r})}),o.jsx("dd",{className:"text-base font-bold text-gray-900 dark:text-white",children:e})]})},k=()=>({brakes:{0:{cards:0,level:1}},engines:{0:{cards:0,level:1}},frontWings:{0:{cards:0,level:1}},gearboxes:{0:{cards:0,level:1}},rearWings:{0:{cards:0,level:1}},suspensions:{0:{cards:0,level:1}}}),y={common:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",epic:"bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300",rare:"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",stock:"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"},I=t=>{const{rarity:e}=t,{t:r}=i();return o.jsx("span",{className:u("text-xs font-medium mr-2 px-2.5 py-0.5 rounded",y[e]),children:r(e)})},L=(t,e,r)=>{const n=t.filter(d=>d.level>e).map(d=>d.upgrade);let a=r,s=e,l=0,c=0;return n.some(d=>e===0&&r===0||d.cards>a?!0:(a-=d.cards,s++,l+=d.coins,c+=d.cards,!1)),{cardsNeeded:c,coinsNeeded:l,maxLevelAvailable:s,remainingCards:a}},R=g()(x(m((...t)=>({...k(...t),...h(...t),decreaseCollectedAssetCards:(e,r)=>{const[n]=t;return n(a=>{var l;const s=((l=a[e][r])==null?void 0:l.cards)??0;return s>0&&(a[e][r].cards=s-1),a})},increaseCollectedAssetCards:(e,r)=>{const[n]=t;return n(a=>{var c,d;const s=((c=a[e][r])==null?void 0:c.cards)??0,l=((d=a[e][r])==null?void 0:d.level)??0;return a[e][r]={...a[e][r],cards:s+1,level:l===0?1:l},a})},updateCollectedAssetCards:(e,r,n)=>{const[a]=t;return a(s=>{var c;const l=((c=s[e][r])==null?void 0:c.level)??0;return s[e][r]={...s[e][r],cards:n,level:l===0&&n>0?1:l},s})},updateCollectedAssetLevel:(e,r,n)=>{const[a]=t;return a(s=>{var c;const l=((c=s[e][r])==null?void 0:c.cards)??0;return n===0?delete s[e][r]:s[e][r]={...s[e][r],cards:l,level:n},s})}})),{name:"fxcs-assets-collected-store-storage"})),S=t=>{if(t==null)return"";const e=b.language;return new Intl.NumberFormat(e).format(t)};export{p as A,N as C,D,A as H,I as R,j as a,L as b,S as f,R as u};
//# sourceMappingURL=formatting-c8504815.js.map