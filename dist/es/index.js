import Mermaid from'mermaid';function g(a,d){a=(new TextEncoder).encode(a);var e=a.length&3;var f=a.length-e;var b=d;for(d=0;d<f;){var c=a[d]&255|(a[++d]&255)<<8|(a[++d]&255)<<16|(a[++d]&255)<<24;++d;c=3432918353*(c&65535)+((3432918353*(c>>>16)&65535)<<16)&4294967295;c=c<<15|c>>>17;c=461845907*(c&65535)+((461845907*(c>>>16)&65535)<<16)&4294967295;b^=c;b=b<<13|b>>>19;b=5*(b&65535)+((5*(b>>>16)&65535)<<16)&4294967295;b=(b&65535)+27492+(((b>>>16)+58964&65535)<<16)}c=0;switch(e){case 3:c^=(a[d+2]&255)<<16;case 2:c^=
(a[d+1]&255)<<8;case 1:c^=a[d]&255,c=3432918353*(c&65535)+((3432918353*(c>>>16)&65535)<<16)&4294967295,c=c<<15|c>>>17,b^=461845907*(c&65535)+((461845907*(c>>>16)&65535)<<16)&4294967295}b^=a.length;b^=b>>>16;b=2246822507*(b&65535)+((2246822507*(b>>>16)&65535)<<16)&4294967295;b^=b>>>13;b=3266489909*(b&65535)+((3266489909*(b>>>16)&65535)<<16)&4294967295;return(b^b>>>16)>>>0}
let h=a=>String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),l=a=>{try{var d="render"+g(a,42).toString();Mermaid.mermaidAPI.render(d,a,d=>{a=d});return`<div class="mermaid">${a}</div>`}catch(e){return`<pre>${h(e.name)}: ${h(e.message)}</pre>`}},m=(a,d)=>{Mermaid.initialize(Object.assign(m,d));if(!a.renderer.rules.fence)throw Error("Default markdown renderer was not found while trying to use mermaid-it!");const e=a.renderer.rules.fence.bind(a.renderer.rules);a.renderer.rules.fence=
(a,b,c,d,n)=>{const k=a[b],f=k.content.trim();return k.info.startsWith("mermaid")?l(f):e(a,b,c,d,n)}};export default m