import{_ as z,o as m,c as x,a as t,t as h,b as M,F as Z,r as Q,n as dt,z as ct,k as O,d as K,A as ft,g as ut,B as vt,J as pt,e as q,C as W,u as mt,f as wt,h as et,i as st,j as w,w as A,v as U,l as j,Z as X,m as g,p as gt,q as R,s as ht,x as kt,y as Ct}from"./index-Wt0TdR2C.js";import{G as yt,a as xt,U as bt,B as _t,g as $t}from"./gameView-BBQiwUz6.js";BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");BigInt("1000000000000000000");const Mt=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");BigInt("0x8000000000000000000000000000000000000000000000000000000000000000")*BigInt(-1);BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");async function Dt(n,f,r,i){const u="https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/ctp/create-prompt",d={prompt_hash:n,prompt:f,secret_hash:r,secret:i};try{const v=await(await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();console.log(v.message)}catch(o){console.error("Error:",o)}}const St="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='18'%20viewBox='0%200%2011%2018'%20fill='none'%3e%3crect%20x='8.59265'%20y='0.928223'%20width='2.69743'%20height='11.4442'%20transform='rotate(45%208.59265%200.928223)'%20fill='black'/%3e%3crect%20width='2.69743'%20height='11.4447'%20transform='matrix(0.707107%20-0.707107%20-0.707107%20-0.707107%208.59265%2017.1123)'%20fill='black'/%3e%3c/svg%3e",Tt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='18'%20viewBox='0%200%2011%2018'%20fill='none'%3e%3crect%20width='2.69743'%20height='11.4442'%20transform='matrix(-0.707107%200.707107%200.707107%200.707107%202.40735%200.928223)'%20fill='black'/%3e%3crect%20x='2.40735'%20y='17.1123'%20width='2.69743'%20height='11.4447'%20transform='rotate(-135%202.40735%2017.1123)'%20fill='black'/%3e%3c/svg%3e",J="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%3e%3ccircle%20cx='10.5'%20cy='10.0203'%20r='9'%20fill='%234DC4CF'%20stroke='black'%20stroke-width='2'/%3e%3cline%20x1='6.44978'%20y1='5.07048'%20x2='15.6422'%20y2='14.2629'%20stroke='black'%20stroke-width='2'/%3e%3cline%20x1='5.7426'%20y1='14.2629'%20x2='14.935'%20y2='5.07048'%20stroke='black'%20stroke-width='2'/%3e%3c/svg%3e",At="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='103'%20height='102'%20viewBox='0%200%20103%20102'%20fill='none'%3e%3cpath%20d='M51.5%20100.855C79.1144%20100.855%20101.5%2078.502%20101.5%2050.9277C101.5%2023.3534%2079.1144%201%2051.5%201C23.8856%201%201.49969%2023.3534%201.49969%2050.9277C1.49969%2078.502%2023.8856%20100.855%2051.5%20100.855Z'%20fill='%23FFCF36'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M31.692%2062.891C41.1321%2062.891%2048.7848%2055.2494%2048.7848%2045.8231C48.7848%2036.3967%2041.1321%2028.7551%2031.692%2028.7551C22.252%2028.7551%2014.5993%2036.3967%2014.5993%2045.8231C14.5993%2055.2494%2022.252%2062.891%2031.692%2062.891Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M31.6922%2038.0069C34.2507%2038.0069%2036.3248%2035.9358%2036.3248%2033.381C36.3248%2030.8262%2034.2507%2028.7551%2031.6922%2028.7551C29.1336%2028.7551%2027.0595%2030.8262%2027.0595%2033.381C27.0595%2035.9358%2029.1336%2038.0069%2031.6922%2038.0069Z'%20fill='black'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M72.5866%2062.891C82.0267%2062.891%2089.6794%2055.2494%2089.6794%2045.8231C89.6794%2036.3967%2082.0267%2028.7551%2072.5866%2028.7551C63.1466%2028.7551%2055.4939%2036.3967%2055.4939%2045.8231C55.4939%2055.2494%2063.1466%2062.891%2072.5866%2062.891Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M72.5867%2038.0069C75.1452%2038.0069%2077.2193%2035.9358%2077.2193%2033.381C77.2193%2030.8262%2075.1452%2028.7551%2072.5867%2028.7551C70.0282%2028.7551%2067.9541%2030.8262%2067.9541%2033.381C67.9541%2035.9358%2070.0282%2038.0069%2072.5867%2038.0069Z'%20fill='black'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M51.9997%2076H72.7666'%20stroke='black'%20stroke-width='1.79'%20stroke-miterlimit='10'/%3e%3c/svg%3e",Ut="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='145'%20height='127'%20viewBox='0%200%20145%20127'%20fill='none'%3e%3crect%20x='1.82382'%20y='47.3644'%20width='12.6842'%20height='15.621'%20transform='rotate(-24.4037%201.82382%2047.3644)'%20fill='%23D9D9D9'%20stroke='black'%20stroke-width='2'/%3e%3crect%20x='1.82382'%20y='104.633'%20width='12.6842'%20height='15.621'%20transform='rotate(-24.4037%201.82382%20104.633)'%20fill='%23FFCF36'%20stroke='black'%20stroke-width='2'/%3e%3crect%20x='125.171'%20y='79.6696'%20width='12.6842'%20height='15.621'%20transform='rotate(-24.4037%20125.171%2079.6696)'%20fill='%2353926D'%20stroke='black'%20stroke-width='2'/%3e%3crect%20x='111.286'%20y='43.5991'%20width='12.6842'%20height='15.621'%20transform='rotate(25.255%20111.286%2043.5991)'%20fill='%23FC4B3B'%20stroke='black'%20stroke-width='2'/%3e%3crect%20x='108.722'%20y='100.918'%20width='12.6842'%20height='15.621'%20transform='rotate(-1.59917%20108.722%20100.918)'%20fill='%23D9D9D9'%20stroke='black'%20stroke-width='2'/%3e%3crect%20x='72.2731'%20y='14.2661'%20width='12.6842'%20height='15.621'%20transform='rotate(-20.6967%2072.2731%2014.2661)'%20fill='%234DC4CF'%20stroke='black'%20stroke-width='2'/%3e%3cpath%20d='M69.5154%20125.998C94.656%20125.998%20115.036%20105.647%20115.036%2080.5433C115.036%2055.4392%2094.656%2035.0884%2069.5154%2035.0884C44.3748%2035.0884%2023.9944%2055.4392%2023.9944%2080.5433C23.9944%20105.647%2044.3748%20125.998%2069.5154%20125.998Z'%20fill='%23FFD653'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M98.4573%2093.0337C91.9477%20126.29%2049.8065%20127.452%2040.5743%2093.1789L98.4573%2093.0337Z'%20fill='%23FC4B3B'%20stroke='black'%20stroke-width='1.8'%20stroke-miterlimit='10'/%3e%3cpath%20d='M96.459%2099.8592C97.2996%2097.7564%2097.9774%2095.4851%2098.4573%2093.0337L40.5743%2093.1789C41.2229%2095.5809%2042.0345%2097.8028%2042.9827%2099.8592H96.459Z'%20fill='%23F5F3F3'%20stroke='black'%20stroke-width='1.8'%20stroke-miterlimit='10'/%3e%3cpath%20d='M92.2001%2082.0862C94.2565%2083.0215%2096.1239%2084.1136%2097.7499%2085.2899C100.976%2082.4435%20103.012%2078.2814%20103.012%2073.6458C103.012%2065.0631%2096.0454%2058.1069%2087.4502%2058.1069C78.855%2058.1069%2071.8887%2065.0631%2071.8887%2073.6458C71.8887%2076.5532%2072.5303%2077.3866%2073.9207%2079.7131C79.0601%2078.9789%2084.4891%2078.5776%2092.1972%2082.0862H92.2001Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M45.8091%2082.211C43.7526%2083.1462%2041.8853%2084.2383%2040.2593%2085.4146C37.0336%2082.5682%2034.9975%2078.4061%2034.9975%2073.7706C34.9975%2065.1879%2041.9638%2058.2317%2050.559%2058.2317C59.1542%2058.2317%2066.1205%2065.1879%2066.1205%2073.7706C66.1205%2076.678%2065.0321%2077.3866%2063.6417%2079.7131C57.768%2079.7131%2053.52%2078.7024%2045.812%2082.211H45.8091Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M53.2267%2078.9457C55.556%2078.9457%2057.4443%2077.0601%2057.4443%2074.7342C57.4443%2072.4082%2055.556%2070.5227%2053.2267%2070.5227C50.8974%2070.5227%2049.0091%2072.4082%2049.0091%2074.7342C49.0091%2077.0601%2050.8974%2078.9457%2053.2267%2078.9457Z'%20fill='black'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M84.6401%2078.9457C86.9694%2078.9457%2088.8577%2077.0601%2088.8577%2074.7342C88.8577%2072.4082%2086.9694%2070.5227%2084.6401%2070.5227C82.3107%2070.5227%2080.4225%2072.4082%2080.4225%2074.7342C80.4225%2077.0601%2082.3107%2078.9457%2084.6401%2078.9457Z'%20fill='black'%20stroke='black'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3crect%20x='-1.32382'%20y='0.497493'%20width='12.6842'%20height='15.621'%20transform='matrix(-0.910657%20-0.413164%20-0.413164%200.910657%2032.0445%2074.2646)'%20fill='%23542234'%20stroke='black'%20stroke-width='2'/%3e%3cpath%20d='M40.3776%2045.9933L46.0308%208.82446L72.6573%2035.3671L40.3776%2045.9933Z'%20fill='%2353926D'%20stroke='black'%20stroke-width='2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.4732%2025.5636L43.4846%2018.914L54.072%2015.4286L58.8357%2020.1772L42.4732%2025.5636Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.6192%2037.7546L41.6305%2031.1049L62.8055%2024.1342L67.5691%2028.8828L40.6192%2037.7546Z'%20fill='white'/%3e%3cpath%20d='M40.3776%2045.9933L46.0308%208.82446L72.6573%2035.3671L40.3776%2045.9933Z'%20stroke='black'%20stroke-width='2'/%3e%3c/svg%3e",Bt={key:0,class:"modal"},Lt={class:"img-wrapper"},It={class:"content-text"},Ft={class:"img-wrapper"},Nt={class:"content-text"},Pt={__name:"ConfirmModal",props:{confirmType:Number,message:String},emits:["closeConfirmModal"],setup(n,{emit:f}){const r=f,i=()=>{r("closeConfirmModal")};return(u,d)=>(m(),x("div",{class:"modal-background",onClick:i},[n.confirmType===0?(m(),x("div",Bt,[t("img",{src:J,alt:"close",onClick:i}),t("div",Lt,[d[0]||(d[0]=t("img",{src:At,alt:"imoji"},null,-1)),d[1]||(d[1]=t("div",{class:"title-text"},"Hmm!",-1)),t("div",It,h(n.message),1)])])):M("",!0),n.confirmType===1?(m(),x("div",{key:1,class:"modal",onClick:i},[t("img",{src:J,alt:"close",onClick:i}),t("div",Ft,[d[2]||(d[2]=t("img",{src:Ut,alt:"imoji"},null,-1)),d[3]||(d[3]=t("div",{class:"title-text"},"Yay!",-1)),t("div",Nt,h(n.message),1)])])):M("",!0)]))}},at=z(Pt,[["__scopeId","data-v-bb420b1f"]]),Vt={},Gt={class:"loading-container"};function Zt(n,f){return m(),x("div",Gt,[(m(),x(Z,null,Q(5,r=>t("div",{key:r,class:"dot",style:dt({"animation-delay":`${r*.2}s`})},null,4)),64))])}const jt=z(Vt,[["render",Zt],["__scopeId","data-v-2b22a387"]]);let S,V,b={Game:void 0,GameFrontend:void 0,Award:void 0,Badge:void 0};const lt={gasPrice:"100000000001"};async function tt(n){if(!S)try{S=new vt(n)}catch(f){console.log(f),S=new pt(q.rpcUrl)}console.log(S),V=await S.getSigner(),b.Game||(b.Game=new W(q.contracts.Game,yt.abi,S)),b.GameFrontend||(b.GameFrontend=new W(q.contracts.GameFrontend,xt.abi,S)),b.Award||(b.Award=new W(q.contracts.Award,bt.abi,S)),b.Badge||(b.Badge=new W(q.contracts.Badge,_t.abi,S))}function Ht(n){return new Promise(f=>setTimeout(f,n))}async function it(n){for(let r=0;r<10;r++){const i=await S.getTransactionReceipt(n);if(i)return i.status==1;await Ht(1e3)}return!1}async function qt(n,f){await tt(n);let r=await b.Award.connect(V).allowance(V.address,await b.Game.getAddress());if(console.log(r),r<f)try{let i=await b.Award.connect(V).approve(await b.Game.getAddress(),Mt,{...lt});return await it(i.hash),i}catch(i){console.error(i);return}}async function Ot(n,f,r,i){await tt(n),console.log(f),console.log(r),console.log(i);try{let u=await b.Game.connect(V).mint(f,r,i,{...lt});return await it(u.hash),u}catch(u){console.error(u);return}}async function zt(n,f,r){await tt(n);const i=ct("0x"+f.toString(16),32),u=O(K(`${r}`));let d;{const C=ft.defaultAbiCoder().encode(["bytes32","bytes32"],[i,u]);d=await V.signMessage(ut(O(C)))}const o={tokenId:f.toString(),secretHash:u,user:V.address,sig:d},v="https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/ctp/submit-secret";try{const C=await(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return console.log(C.status),console.log(C.hash),{status:C.status,hash:C.hash}}catch(k){return console.error("Error:",k),{status:!1,hash:""}}}const Et={class:"modal"},Wt={class:"modal-container"},Jt={class:"modal-wrapper"},Rt={class:"modal-info"},Yt={class:"modal-info-top"},Qt=["src"],Kt={class:"modal-info-title-wrapper"},Xt={class:"title-wrapper"},te={class:"title-text"},ee={class:"type-wrapper"},se={class:"type-text"},ae={class:"title-description"},le={class:"modal-info-bottom"},ie={class:"details-title-wrapper"},ne={class:"details-content-text"},oe={class:"details-title-wrapper"},re={class:"details-content-text"},de={class:"details-title-wrapper"},ce={class:"details-content-text"},fe={class:"details-title-wrapper"},ue={class:"details-award-text"},ve={class:"bottom-wrapper"},pe={class:"question-wrapper"},me={class:"question-content-wrapper"},we={class:"answer-wrapper"},ge={class:"answer-content-input"},he={key:1,class:"answer-content-input-text"},ke={class:"pk-wrapper"},Ce={class:"pk-content-wrapper"},ye={__name:"ChallengeModal",props:{nft:{type:Object,required:!0}},emits:["closeModal","updateNftsData"],setup(n,{emit:f}){mt(),wt();const{walletProvider:r}=et(),{address:i,chainId:u,isConnected:d}=st(),o=w(null),v=w(""),k=w(!1),C=n,y=f,_=w(""),F=w(""),N=w(""),E=async()=>{const p="https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/ctp/qa",e={token_id:C.nft.id.toString(),user:i.value,prompt_hash:C.nft.promptHash,question:_.value};try{k.value=!0;const D=await(await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();console.log(D.message),k.value=!1,F.value=D.message}catch(c){k.value=!1,console.error("Error:",c)}},B=async()=>{const{status:p,hash:e}=await zt(r.value,C.nft.tokenId,N.value);p?(v.value="You successfully solved the problem. ",o.value=1,y("updateNftsData")):(v.value="Wrong answer. Please try again.",o.value=0)},L=()=>{y("closeModal")},P=()=>{const p=o.value;o.value="",y("closeConfirmModal"),p===1&&y("closeModal")},T=p=>{const e=new Date(p*1e3),c=String(e.getUTCMonth()+1).padStart(2,"0"),D=String(e.getUTCDate()).padStart(2,"0"),l=e.getUTCHours(),s=String(e.getUTCMinutes()).padStart(2,"0"),a=l>=12?"PM":"AM",$=l%12||12;return`${c}.${D} ${$}:${s} ${a}`},G=(p,e)=>{const D=(e-p)/(60*60*24);return Math.round(D)},H=p=>(p/1e18).toFixed(2);return(p,e)=>(m(),x(Z,null,[t("div",Et,[t("div",Wt,[e[14]||(e[14]=t("div",{class:"modal-title-text"},"Challenge",-1)),t("div",Jt,[t("div",{class:"close-wrapper"},[t("img",{src:J,alt:"close",onClick:L})]),t("div",Rt,[t("div",Yt,[t("img",{src:n.nft.imageUri||"@/assets/nft/0.png",alt:"nft"},null,8,Qt),t("div",Kt,[e[4]||(e[4]=t("div",{class:"live-wrapper"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},[t("circle",{cx:"6",cy:"6.02026",r:"5.5",fill:"#53926D"})]),t("div",{class:"live-text"},"Live")],-1)),t("div",Xt,[t("div",te,h(n.nft.name),1),t("div",ee,[t("div",se,h(n.nft.gameType),1)]),t("div",ae,h(n.nft.description),1)])])]),t("div",le,[t("div",ie,[e[5]||(e[5]=t("div",{class:"details-title-text"},"Start Date",-1)),t("div",ne,h(T(n.nft.startDate)),1)]),t("div",oe,[e[6]||(e[6]=t("div",{class:"details-title-text"},"End Date",-1)),t("div",re,h(T(n.nft.endDate)),1)]),t("div",de,[e[7]||(e[7]=t("div",{class:"details-title-text"},"Remaining",-1)),t("div",ce,h(G(n.nft.startDate,n.nft.endDate))+" days ",1)]),t("div",fe,[e[8]||(e[8]=t("div",{class:"details-award-text"},"Awards",-1)),t("div",ue,h(H(n.nft.awards))+" USDC ",1)])])]),t("div",ve,[t("div",pe,[e[10]||(e[10]=t("div",{class:"question-title-text"},"Question",-1)),t("div",me,[A(t("textarea",{class:"question-content-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>_.value=c)},null,512),[[U,_.value]]),t("div",{class:"submit-btn",onClick:e[1]||(e[1]=c=>E())},e[9]||(e[9]=[t("div",{class:"submit-text"},"Submit",-1)]))])]),t("div",we,[e[11]||(e[11]=t("div",{class:"answer-title-text"},"Answer",-1)),t("div",ge,[k.value?(m(),j(jt,{key:0})):M("",!0),k.value?M("",!0):(m(),x("div",he,h(F.value),1))])]),t("div",ke,[e[13]||(e[13]=t("div",{class:"pk-title-text"},"Secret",-1)),t("div",Ce,[A(t("textarea",{class:"pk-content-input",type:"text","onUpdate:modelValue":e[2]||(e[2]=c=>N.value=c)},null,512),[[U,N.value]]),t("div",{class:"submit-btn",onClick:e[3]||(e[3]=c=>B())},e[12]||(e[12]=[t("div",{class:"submit-text"},"Submit",-1)]))])])])])])]),o.value===0||o.value===1?(m(),j(at,{key:0,confirmType:o.value,message:v.value,onCloseConfirmModal:P},null,8,["confirmType","message"])):M("",!0)],64))}},xe=z(ye,[["__scopeId","data-v-9f4bb03d"]]),be={class:"modal"},_e={class:"modal-container"},$e={class:"modal-wrapper"},Me={class:"content-wrapper"},De={class:"content-left-wrapper"},Se={class:"name-wrapper"},Te={class:"description-wrapper"},Ae={class:"date-wrapper"},Ue={class:"date-input-wrapper"},Be={class:"date-wrapper"},Le={class:"date-input-wrapper"},Ie={class:"award-wrapper"},Fe={class:"award-input-wrapper"},Ne={class:"content-right-wrapper"},Pe={class:"type-wrapper"},Ve={class:"type-content-secret-wrapper"},Ge={class:"description-wrapper"},Ze={class:"name-wrapper"},je={__name:"CreateModal",emits:["closeCreateModal","updateNftsData"],setup(n,{emit:f}){const r=f,i=w({name:"",description:"",award:"",gameType:"secret",prompt:"",secret:"",start:0,end:0,winner:X}),u=w(""),d=w(""),o=w(""),v=w(""),k=w(""),C=w(0),y=w(null),_=w(""),{walletProvider:F}=et(),{address:N,chainId:E,isConnected:B}=st(),L=()=>{r("closeCreateModal")},P=()=>{const p=y.value;y.value="",r("closeConfirmModal"),p===1&&r("closeCreateModal")},T=p=>{C.value=p},G=()=>{if(u.value===""||d.value==""||o.value==""||v.value==""||k.value=="")return y.value=0,_.value="Please enter all the data.",!1;if(!B.value)return y.value=0,_.value="Please connect your wallet.",!1;if(!d.value.includes(o.value))return y.value=0,_.value="The prompt does not contain a secret.",!1;const p=new Date(v.value).getTime()/1e3,e=new Date(k.value).getTime()/1e3;return p>=e?(y.value=0,_.value="The end time must be later than the start time.",!1):!0},H=async()=>{if(G()){i.value.start=new Date(v.value).getTime()/1e3,i.value.end=new Date(k.value).getTime()/1e3,i.value.prompt=O(K(d.value)),i.value.secret=O(O(K(o.value)));const p=gt(u.value.toString(),18);await Dt(i.value.prompt,d.value,i.value.secret,o.value),await qt(F.value,p),await Ot(F.value,N.value,i.value,p),_.value="You successfully registered the project.",y.value=1,r("updateNftsData")}};return(p,e)=>(m(),x(Z,null,[t("div",be,[t("div",_e,[e[23]||(e[23]=t("div",{class:"title-text"},"Get started with a CTP",-1)),t("div",$e,[t("div",{class:"close-wrapper"},[t("img",{src:J,alt:"close",onClick:L})]),e[22]||(e[22]=t("div",{class:"about-wrapper"},[t("div",{class:"about-text"},"Create A New Challenge")],-1)),t("div",Me,[t("div",De,[t("div",Se,[e[8]||(e[8]=t("div",{class:"name-text"},"Name",-1)),A(t("input",{class:"name-input","onUpdate:modelValue":e[0]||(e[0]=c=>i.value.name=c),placeholder:"Name",type:"text"},null,512),[[U,i.value.name]])]),t("div",Te,[e[9]||(e[9]=t("div",{class:"description-text"},"Description",-1)),A(t("textarea",{class:"description-input","onUpdate:modelValue":e[1]||(e[1]=c=>i.value.description=c),placeholder:"Description"},null,512),[[U,i.value.description]])]),t("div",Ae,[e[10]||(e[10]=t("div",{class:"date-text"},"Start Date",-1)),t("div",Ue,[A(t("input",{class:"date-input","onUpdate:modelValue":e[2]||(e[2]=c=>v.value=c),type:"datetime-local"},null,512),[[U,v.value]])])]),t("div",Be,[e[11]||(e[11]=t("div",{class:"date-text"},"End Date",-1)),t("div",Le,[A(t("input",{class:"date-input","onUpdate:modelValue":e[3]||(e[3]=c=>k.value=c),type:"datetime-local"},null,512),[[U,k.value]])])]),t("div",Ie,[e[13]||(e[13]=t("div",{class:"award-text"},"Award",-1)),t("div",Fe,[A(t("input",{class:"award-input","onUpdate:modelValue":e[4]||(e[4]=c=>u.value=c),type:"number"},null,512),[[U,u.value]]),e[12]||(e[12]=t("div",{class:"usdc-wrapper"},[t("div",{class:"usdc-text"},"USDC")],-1))])])]),t("div",Ne,[t("div",Pe,[e[17]||(e[17]=t("div",{class:"type-text"},"Type",-1)),t("div",Ve,[t("div",{class:g(["type-content-wrapper",{"is-type-active":C.value==0}]),onClick:e[5]||(e[5]=c=>T(0))},e[14]||(e[14]=[t("div",{class:"type-content-text"},"Secret",-1)]),2),t("div",{class:g(["type-content-wrapper",{"is-type-active":C.value==1}])},e[15]||(e[15]=[t("div",{class:"type-content-text"},"Slang",-1)]),2),t("div",{class:g(["type-content-wrapper",{"is-type-active":C.value==2}])},e[16]||(e[16]=[t("div",{class:"type-content-text"},"Mismatch",-1)]),2)])]),t("div",Ge,[e[18]||(e[18]=t("div",{class:"description-text"},"Prompt",-1)),A(t("textarea",{class:"prompt-input","onUpdate:modelValue":e[6]||(e[6]=c=>d.value=c),placeholder:"Prompt"},null,512),[[U,d.value]])]),t("div",Ze,[e[19]||(e[19]=t("div",{class:"name-text"},"Secret",-1)),A(t("input",{class:"name-input","onUpdate:modelValue":e[7]||(e[7]=c=>o.value=c),placeholder:"Secret",type:"text"},null,512),[[U,o.value]])]),t("div",{class:"submit-wrapper"},[e[21]||(e[21]=t("div",{class:"empty-text"},null,-1)),t("div",{class:"submit-btn-wrapper",onClick:H},e[20]||(e[20]=[t("div",{class:"submit-btn-text"},"Submit",-1)]))])])])])])]),y.value===0||y.value===1?(m(),j(at,{key:0,confirmType:y.value,message:_.value,onCloseConfirmModal:P},null,8,["confirmType","message"])):M("",!0)],64))}},He=z(je,[["__scopeId","data-v-1a2269e1"]]),qe={key:0,class:"challenge"},Oe={class:"challenge-wrapper"},ze={class:"challenge-live-filter"},Ee={class:"challenge-type-filter-wrapper"},We={class:"challenge-type-filter"},Je={class:"nfts"},Re={class:"nft-content-wrapper"},Ye={class:"nft-content-top-wrapper"},Qe=["src"],Ke={class:"nft-content-top-title-wrapper"},Xe={class:"live-wrapper"},ts={key:0,xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},es=["fill"],ss={key:1,xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 0 19 19",fill:"none"},as={class:"live-text"},ls={class:"live-title-wrapper"},is={class:"live-title-text"},ns={class:"type-wrapper"},os={class:"type-text"},rs={class:"nft-description"},ds={class:"nft-date-wrapper"},cs={class:"nft-date-content-wrapper"},fs={class:"nft-date-content-text"},us={class:"nft-date-content-text"},vs={class:"nft-duration-wrapper"},ps={class:"nft-duration-content-text"},ms={class:"nft-award-wrapper"},ws=["onClick"],gs={class:"nft-btn-text"},hs={class:"pagination"},ks={class:"pagination-wrapper"},Cs={class:"number-wrapper"},ys=["onClick"],Y=6,xs={__name:"ChallengePage",setup(n){const f=w(!1),r=w(!1),i=w(null),u=w([]),d=w(0),o=w(0),v=w(1),k=R(()=>C.value.length==0?1:Math.floor((C.value.length-1)/Y)+1),C=R(()=>{if(u.value.length==0)return[];let l=u.value;d.value===1?l=u.value.filter(a=>a.status==="Live"):d.value===2?l=u.value.filter(a=>a.status==="Solved"):d.value===3&&(l=u.value.filter(a=>a.status==="Verified"));let s=l;return o.value===1?s=l.filter(a=>a.gameType==="secret"):o.value===2?s=[]:o.value===3&&(s=[]),s}),y=R(()=>C.value.slice((v.value-1)*Y,v.value*Y)),_=l=>{l.status==="Live"&&(i.value=l,f.value=!0)},F=()=>{f.value=!1},N=()=>{r.value=!0},E=()=>{r.value=!1},B=l=>{d.value=l,v.value=1},L=l=>{o.value=l,v.value=1},P=l=>{l>k.value?v.value=k.value:l<1?v.value=1:v.value=l},T=async()=>{const l=await $t(0,1e3);u.value=l.map(s=>{const a=s[11],$=Math.floor(Date.now()/1e3);console.log(a);let I="Live";return a.toLowerCase()==="0xffffffffffffffffffffffffffffffffffffffff"||a===X&&$>Number(s[9])?I="Verified":a!==X&&(I="Solved"),{status:I,winnerAddress:a,id:s[0],tokenId:s[1],name:s[2],description:s[3],gameType:s[4],promptHash:s[5],secretHash:s[6],imageUri:s[7],startDate:Number(s[8]),endDate:Number(s[9]),awards:Number(s[10])}}).reverse(),console.log(u.value)},G=l=>{const s=new Date(l*1e3),a=String(s.getUTCMonth()+1).padStart(2,"0"),$=String(s.getUTCDate()).padStart(2,"0"),I=s.getUTCHours(),nt=String(s.getUTCMinutes()).padStart(2,"0"),ot=I>=12?"PM":"AM",rt=I%12||12;return`${a}.${$} ${rt}:${nt} ${ot}`},H=(l,s)=>{const $=(s-l)/(60*60*24);return Math.round($)},p=l=>Ct(l.toLocaleString("fullwide",{useGrouping:!1}),18),e=l=>l&&`Winner: ${l.slice(0,6)}...${l.slice(-4)}`,c=l=>l.length>96?`${l.slice(0,96)}...`:l;let D=null;return ht(async()=>{await T(),D=setInterval(async()=>{await T()},15e3)}),kt(()=>{D&&clearInterval(D)}),(l,s)=>(m(),x(Z,null,[!f.value&&!r.value?(m(),x("div",qe,[t("div",Oe,[s[13]||(s[13]=t("div",{class:"challenge-title-text"},"Challenges",-1)),t("div",ze,[t("div",{class:g(["challenge-live-filter-btn",{"is-live-active":d.value===0}]),onClick:s[0]||(s[0]=a=>B(0))}," All ",2),t("div",{class:g(["challenge-live-filter-btn",{"is-live-active":d.value===1}]),onClick:s[1]||(s[1]=a=>B(1))}," Live ",2),t("div",{class:g(["challenge-live-filter-btn",{"is-live-active":d.value===2}]),onClick:s[2]||(s[2]=a=>B(2))}," Solved ",2),t("div",{class:g(["challenge-live-filter-btn",{"is-live-active":d.value===3}]),onClick:s[3]||(s[3]=a=>B(3))}," Verified ",2)]),t("div",Ee,[t("div",We,[t("div",{class:g(["challenge-type-filter-btn",{"is-type-active":o.value===0}]),onClick:s[4]||(s[4]=a=>L(0))},[t("div",{class:g(["challenge-type-filter-btn-text",{"is-type-text-active":o.value===0}])}," All Type ",2)],2),t("div",{class:g(["challenge-type-filter-btn",{"is-type-active":o.value===1}]),onClick:s[5]||(s[5]=a=>L(1))},[t("div",{class:g(["challenge-type-filter-btn-text",{"is-type-text-active":o.value===1}])}," Secret ",2)],2),t("div",{class:g(["challenge-type-filter-btn",{"is-type-active":o.value===2}]),onClick:s[6]||(s[6]=a=>L(2))},[t("div",{class:g(["challenge-type-filter-btn-text",{"is-type-text-active":o.value===2}])}," Slang ",2)],2),t("div",{class:g(["challenge-type-filter-btn",{"is-type-active":o.value===3}]),onClick:s[7]||(s[7]=a=>L(3))},[t("div",{class:g(["challenge-type-filter-btn-text",{"is-type-text-active":o.value===3}])}," Mismatch ",2)],2)]),t("div",{class:"challenge-create-new-btn",onClick:N}," + Create A New Challange ")]),t("div",Je,[(m(!0),x(Z,null,Q(y.value,(a,$)=>(m(),x("div",{key:a.id,class:g(["nft-wrapper",{"is-verified-nft":a.status==="Verified"}])},[t("div",Re,[t("div",Ye,[t("img",{src:a.imageUri?a.imageUri:"@/assets/nft/0.png",alt:"nft"},null,8,Qe),t("div",Ke,[t("div",Xe,[a.status!=="Verified"?(m(),x("svg",ts,[t("circle",{cx:"6",cy:"6.02026",r:"5.5",fill:a.status==="Live"?"#53926D":"#CC0000"},null,8,es)])):M("",!0),a.status==="Verified"?(m(),x("svg",ss,s[10]||(s[10]=[t("circle",{cx:"9.5",cy:"9.5",r:"8",fill:"#4DC4CF",stroke:"black","stroke-width":"2"},null,-1),t("rect",{x:"3.5",y:"7.91431",width:"2",height:"8.48528",transform:"rotate(-45 3.5 7.91431)",fill:"black"},null,-1),t("rect",{width:"2",height:"8.48563",transform:"matrix(-0.707107 -0.707107 -0.707107 0.707107 15.5 7.91431)",fill:"black"},null,-1)]))):M("",!0),t("div",as,h(a.status),1)]),t("div",ls,[t("div",is,h(a.name),1),t("div",ns,[t("div",os,h(a.gameType),1)])])])]),t("div",rs,h(c(a.description)),1),t("div",ds,[s[11]||(s[11]=t("div",{class:"nft-date-text"},"Date",-1)),t("div",cs,[t("div",fs,h(G(a.startDate)),1),t("div",us," ~ "+h(G(a.endDate)),1)])]),t("div",vs,[s[12]||(s[12]=t("div",{class:"nft-duration-text"},"Remaining",-1)),t("div",ps,h(H(a.startDate,a.endDate))+" days ",1)]),t("div",ms,[t("div",{class:g(["nft-award-text",{"is-verified-nft-text":a.status==="Verified"}])}," Award ",2),t("div",{class:g(["nft-award-content-text",{"is-verified-nft-text":a.status==="Verified","is-solved-nft-text":a.status==="Solved"}])},h(p(a.awards))+" USDC ",3)])]),t("div",{class:g(["nft-btn",{"is-live":a.status==="Live","is-verified":a.status==="Verified"}]),onClick:I=>a.status!=="Solved"&&_(a)},[t("div",gs,h(a.status==="Solved"?e(a.winnerAddress):a.status==="Verified"?"Verified":"Challenge"),1)],10,ws)],2))),128))]),t("div",hs,[t("div",ks,[t("img",{src:St,alt:"left",onClick:s[8]||(s[8]=a=>P(v.value-1))}),(m(!0),x(Z,null,Q(k.value,(a,$)=>(m(),x("div",Cs,[t("div",{class:g(["number-text",{"is-pagination-active":$+1===v.value}]),onClick:I=>P($+1)},h($+1),11,ys)]))),256)),t("img",{src:Tt,alt:"right",onClick:s[9]||(s[9]=a=>P(v.value+1))})])])])])):M("",!0),f.value?(m(),j(xe,{key:1,nft:i.value,onCloseModal:F,onUpdateNftsData:T},null,8,["nft"])):M("",!0),r.value?(m(),j(He,{key:2,onCloseCreateModal:E,onUpdateNftsData:T})):M("",!0)],64))}},bs=z(xs,[["__scopeId","data-v-214b42b8"]]),Ms={__name:"ChallengeView",setup(n){return(f,r)=>(m(),j(bs))}};export{Ms as default};
