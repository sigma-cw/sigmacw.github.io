import{m,aL as f,ac as _,x as r,o as d,c as I,Y as x}from"./entry.2fc3bd05.js";import{r as v}from"./index.114af144.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({efdb04fa:p.value}));const t=_(),o=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=r(()=>v(l.value)),p=r(()=>{var s,a;const e=(a=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,s,a;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),I("span",{style:x({width:i.value,height:i.value})},null,4))}});const U=S(y,[["__scopeId","data-v-41e8d397"]]);export{U as default};