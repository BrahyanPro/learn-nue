import{onclick as J,loadPage as K,setActive as M} from"./page-router.js";async function G(L){for(let{pattern:c,fn:q}of B){const x=H(c,L);if(x)await q(x)}M(L)}function H(L,c,q){const x=L.split("/").slice(1),D=c.split("/").slice(1);if(!q&&x.length!=D.length)return null;let E=!0;const F={};return x.forEach((C,I)=>{const z=D[I];if(C[0]==":"){if(z)F[C.slice(1)]=1*z||z}else if(!q&&C!=z)E=!1}),E?F:null}var N=typeof window=="object",B=[];N&&addEventListener("before:route",()=>{B.splice(0,B.length)});var O={on(L,c){B.push({pattern:L,fn:c})},start({path:L,root:c}){if(c)J(c,this.route);this.pattern=L,G(location.pathname)},route(L){scrollTo(0,0);const c=L.endsWith(".html");history.pushState({path:L,is_spa:!c},0,L),c?K(L):G(L)},set(L,c){const q=new URLSearchParams(location.search);q.set(L,c),history.replaceState(O.data,0,`?${q}`)},get data(){const{pattern:L}=this,c=L?H(L,location.pathname,!0):{},q=Object.fromEntries(new URLSearchParams(location.search));return{...c,...q}}};export{O as router,H as match};
