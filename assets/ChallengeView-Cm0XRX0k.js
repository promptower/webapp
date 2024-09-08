import{_ as N,u as J,a as z,b as L,r as p,o as w,c as C,d as t,t as c,w as _,v as h,e as j,B as R,J as Z,C as U,Z as q,k as V,f as G,p as Q,g as H,h as K,n as v,F as P,i as X,j as T,l as I,m as Y}from"./index-ZXgCnnEa.js";import{c as M,G as tt,U as et,B as st,g as at}from"./gameView-BAOQfz90.js";BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");BigInt("1000000000000000000");const it=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");BigInt("0x8000000000000000000000000000000000000000000000000000000000000000")*BigInt(-1);BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");const nt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='18'%20viewBox='0%200%2011%2018'%20fill='none'%3e%3crect%20x='8.59265'%20y='0.928223'%20width='2.69743'%20height='11.4442'%20transform='rotate(45%208.59265%200.928223)'%20fill='black'/%3e%3crect%20width='2.69743'%20height='11.4447'%20transform='matrix(0.707107%20-0.707107%20-0.707107%20-0.707107%208.59265%2017.1123)'%20fill='black'/%3e%3c/svg%3e",lt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='18'%20viewBox='0%200%2011%2018'%20fill='none'%3e%3crect%20width='2.69743'%20height='11.4442'%20transform='matrix(-0.707107%200.707107%200.707107%200.707107%202.40735%200.928223)'%20fill='black'/%3e%3crect%20x='2.40735'%20y='17.1123'%20width='2.69743'%20height='11.4447'%20transform='rotate(-135%202.40735%2017.1123)'%20fill='black'/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%3e%3ccircle%20cx='10.5'%20cy='10.0203'%20r='9'%20fill='%234DC4CF'%20stroke='black'%20stroke-width='2'/%3e%3cline%20x1='6.44978'%20y1='5.07048'%20x2='15.6422'%20y2='14.2629'%20stroke='black'%20stroke-width='2'/%3e%3cline%20x1='5.7426'%20y1='14.2629'%20x2='14.935'%20y2='5.07048'%20stroke='black'%20stroke-width='2'/%3e%3c/svg%3e",ot={class:"modal"},dt={class:"modal-container"},rt={class:"modal-wrapper"},ct={class:"modal-info"},ft={class:"modal-info-top"},vt=["src"],pt={class:"modal-info-title-wrapper"},ut={class:"title-wrapper"},wt={class:"title-text"},mt={class:"type-wrapper"},gt={class:"type-text"},xt={class:"title-description"},_t={class:"modal-info-bottom"},ht={class:"details-title-wrapper"},yt={class:"details-content-text"},bt={class:"details-title-wrapper"},$t={class:"details-content-text"},Ct={class:"details-title-wrapper"},Dt={class:"details-content-text"},kt={class:"details-title-wrapper"},St={class:"details-award-text"},Mt={class:"bottom-wrapper"},At={class:"question-wrapper"},Bt={class:"question-content-wrapper"},Ut={class:"submit-btn"},Tt={class:"answer-wrapper"},It={class:"answer-content-wrapper"},Nt={class:"answer-content-input"},Vt={__name:"ChallengeModal",props:{nft:{type:Object,required:!0}},emits:["closeModal"],setup(l,{emit:o}){J(),z();const{address:d,chainId:r,isConnected:f}=L(),y=o,m=p(""),x=p(""),b=async()=>{const n="https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/gpt",e={user:d.value,nft:M.contracts.Badge,prompt:m.value};try{const i=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();console.log(i.message),x.value=i.message}catch(a){console.error("Error:",a)}},k=()=>{y("closeModal")},$=n=>new Date(n*1e3).toLocaleString("en-US",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),D=(n,e)=>{const i=(e-n)/(60*60*24);return Math.round(i)},s=n=>(n/1e18).toFixed(2);return(n,e)=>(w(),C("div",ot,[t("div",dt,[e[11]||(e[11]=t("div",{class:"modal-title-text"},"Challenge",-1)),t("div",rt,[t("div",{class:"close-wrapper"},[t("img",{src:E,alt:"close",onClick:k})]),t("div",ct,[t("div",ft,[t("img",{src:l.nft.imageUri||"@/assets/nft/0.png",alt:"nft"},null,8,vt),t("div",pt,[e[2]||(e[2]=t("div",{class:"live-wrapper"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},[t("circle",{cx:"6",cy:"6.02026",r:"5.5",fill:"#53926D"})]),t("div",{class:"live-text"},"Live")],-1)),t("div",ut,[t("div",wt,c(l.nft.name),1),t("div",mt,[t("div",gt,c(l.nft.gameType),1)]),t("div",xt,c(l.nft.description),1)])])]),t("div",_t,[t("div",ht,[e[3]||(e[3]=t("div",{class:"details-title-text"},"Start Date",-1)),t("div",yt,c($(l.nft.startDate)),1)]),t("div",bt,[e[4]||(e[4]=t("div",{class:"details-title-text"},"End Date",-1)),t("div",$t,c($(l.nft.endDate)),1)]),t("div",Ct,[e[5]||(e[5]=t("div",{class:"details-title-text"},"Duration",-1)),t("div",Dt,c(D(l.nft.startDate,l.nft.endDate))+" days ",1)]),t("div",kt,[e[6]||(e[6]=t("div",{class:"details-award-text"},"Awards",-1)),t("div",St,c(s(l.nft.awards))+" in USDC ",1)])])]),t("div",Mt,[t("div",At,[e[7]||(e[7]=t("div",{class:"question-title-text"},"Question",-1)),t("div",Bt,[_(t("input",{class:"question-content-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a)},null,512),[[h,m.value]]),t("div",Ut,[t("div",{class:"submit-text",onClick:e[1]||(e[1]=a=>b())},"Submit")])])]),t("div",Tt,[e[9]||(e[9]=t("div",{class:"answer-title-text"},"Answer",-1)),t("div",It,[t("div",Nt,c(x.value),1),e[8]||(e[8]=t("div",{class:"empty-box"},null,-1))])]),e[10]||(e[10]=j('<div class="pk-wrapper" data-v-e0f1d953><div class="pk-title-text" data-v-e0f1d953>Secret</div><div class="pk-content-wrapper" data-v-e0f1d953><input class="pk-content-input" data-v-e0f1d953><div class="submit-btn" data-v-e0f1d953><div class="submit-text" data-v-e0f1d953>Submit</div></div></div></div>',1))])])])]))}},Gt=N(Vt,[["__scopeId","data-v-e0f1d953"]]);let g,A,u={Game:void 0,Award:void 0,Badge:void 0};const F={gasPrice:"100000000001"};async function W(l){if(!g)try{g=new R(l)}catch(o){console.log(o),g=new Z(M.rpc)}console.log(g),A=await g.getSigner(),u.Game||(u.Game=new U(M.contracts.Game,tt.abi,g)),u.Award||(u.Award=new U(M.contracts.Award,et.abi,g)),u.Badge||(u.Badge=new U(M.contracts.Badge,st.abi,g))}function Pt(l){return new Promise(o=>setTimeout(o,l))}async function O(l){for(let d=0;d<10;d++){const r=await g.getTransactionReceipt(l);if(r)return r.status==1;await Pt(1e3)}return!1}async function Lt(l){await W(l);let o=await u.Award.connect(A).allowance(A.address,await u.Game.getAddress());if(console.log(o),o==0)try{let d=await u.Award.connect(A).approve(await u.Game.getAddress(),it,{...F});return await O(d.hash),d}catch(d){console.error(d);return}}async function jt(l,o,d,r){await W(l),console.log(o),console.log(d),console.log(r);try{let f=await u.Game.connect(A).mint(o,d,r,{...F});return await O(f.hash),f}catch(f){console.error(f);return}}const qt={class:"modal"},Et={class:"modal-container"},Ft={class:"modal-wrapper"},Wt={class:"content-wrapper"},Ot={class:"content-left-wrapper"},Jt={class:"name-wrapper"},zt={class:"description-wrapper"},Rt={class:"date-wrapper"},Zt={class:"date-input-wrapper"},Qt={class:"award-wrapper"},Ht={class:"award-input-wrapper"},Kt={class:"content-right-wrapper"},Xt={class:"description-wrapper"},Yt={class:"name-wrapper"},te={__name:"CreateModal",emits:["closeCreateModal"],setup(l,{emit:o}){const d=o,r=p({name:"",description:"",award:"",gameType:"secret",prompt:"",secret:"",start:0,end:0,winner:q}),f=p(""),y=p(""),m=p(""),x=p(""),b=p(""),k=()=>{d("closeCreateModal")},$=async()=>{r.value.start=new Date(x.value).getTime()/1e3,r.value.end=new Date(b.value).getTime()/1e3,r.value.prompt=V(G(y.value)),r.value.secret=V(G(m.value));const D=Q(f.value,18),{walletProvider:s}=H(),{address:n,chainId:e,isConnected:a}=L();await Lt(s.value),await jt(s.value,n.value,r.value,D)};return(D,s)=>(w(),C("div",qt,[t("div",Et,[s[18]||(s[18]=t("div",{class:"title-text"},"Get started with a CTP",-1)),t("div",Ft,[t("div",{class:"close-wrapper"},[t("img",{src:E,alt:"close",onClick:k})]),s[17]||(s[17]=t("div",{class:"about-wrapper"},[t("div",{class:"about-text"},"Create A New Challenge")],-1)),t("div",Wt,[t("div",Ot,[t("div",Jt,[s[7]||(s[7]=t("div",{class:"name-text"},"Name",-1)),_(t("input",{class:"name-input","onUpdate:modelValue":s[0]||(s[0]=n=>r.value.name=n),placeholder:"Name",type:"text"},null,512),[[h,r.value.name]])]),t("div",zt,[s[8]||(s[8]=t("div",{class:"description-text"},"Description",-1)),_(t("input",{class:"description-input","onUpdate:modelValue":s[1]||(s[1]=n=>r.value.description=n),placeholder:"Description",type:"text"},null,512),[[h,r.value.description]])]),t("div",Rt,[s[9]||(s[9]=t("div",{class:"date-text"},"Date",-1)),t("div",Zt,[_(t("input",{class:"date-input","onUpdate:modelValue":s[2]||(s[2]=n=>x.value=n),type:"date"},null,512),[[h,x.value]]),_(t("input",{class:"date-input","onUpdate:modelValue":s[3]||(s[3]=n=>b.value=n),type:"date"},null,512),[[h,b.value]])])]),t("div",Qt,[s[11]||(s[11]=t("div",{class:"award-text"},"Award",-1)),t("div",Ht,[_(t("input",{class:"award-input","onUpdate:modelValue":s[4]||(s[4]=n=>f.value=n),type:"text"},null,512),[[h,f.value]]),s[10]||(s[10]=t("div",{class:"usdc-wrapper"},[t("div",{class:"usdc-text"},"USDC")],-1))])])]),t("div",Kt,[s[16]||(s[16]=j('<div class="type-wrapper" data-v-e503df94><div class="type-text" data-v-e503df94>Type</div><div class="type-content-secret-wrapper" data-v-e503df94><div class="type-content-wrapper" data-v-e503df94><div class="type-content-text" data-v-e503df94>Secret</div></div></div></div>',1)),t("div",Xt,[s[12]||(s[12]=t("div",{class:"description-text"},"Prompt",-1)),_(t("input",{class:"description-input","onUpdate:modelValue":s[5]||(s[5]=n=>y.value=n),placeholder:"Prompt",type:"text"},null,512),[[h,y.value]])]),t("div",Yt,[s[13]||(s[13]=t("div",{class:"name-text"},"Secret",-1)),_(t("input",{class:"name-input","onUpdate:modelValue":s[6]||(s[6]=n=>m.value=n),placeholder:"Secret",type:"text"},null,512),[[h,m.value]])]),t("div",{class:"submit-wrapper"},[s[15]||(s[15]=t("div",{class:"empty-text"},null,-1)),t("div",{class:"submit-btn-wrapper",onClick:$},s[14]||(s[14]=[t("div",{class:"submit-btn-text"},"Submit",-1)]))])])])])])]))}},ee=N(te,[["__scopeId","data-v-e503df94"]]),se={key:0,class:"challenge"},ae={class:"challenge-wrapper"},ie={class:"challenge-live-filter"},ne={class:"challenge-type-filter-wrapper"},le={class:"challenge-type-filter"},oe={class:"nfts"},de={class:"nft-content-wrapper"},re={class:"nft-content-top-wrapper"},ce=["src"],fe={class:"nft-content-top-title-wrapper"},ve={class:"live-wrapper"},pe={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},ue=["fill"],we={class:"live-text"},me={class:"live-title-wrapper"},ge={class:"live-title-text"},xe={class:"type-wrapper"},_e={class:"type-text"},he={class:"nft-description"},ye={class:"nft-date-wrapper"},be={class:"nft-date-content-wrapper"},$e={class:"nft-date-content-text"},Ce={class:"nft-date-content-text"},De={class:"nft-duration-wrapper"},ke={class:"nft-duration-content-text"},Se={class:"nft-award-wrapper"},Me={class:"nft-award-content-text"},Ae=["onClick"],Be={class:"nft-btn-text"},Ue={class:"pagination"},Te={class:"pagination-wrapper"},Ie={class:"number-wrapper"},Ne={__name:"ChallengePage",setup(l){const o=p(!1),d=p(!1),r=p(null),f=p([]),y=e=>{r.value=e,o.value=!0},m=()=>{o.value=!1},x=()=>{d.value=!0},b=()=>{d.value=!1},k=async()=>{const e=await at(0,12);f.value=e.map(a=>{const i=a[8],B=Math.floor(Date.now()/1e3);console.log(i);let S="Live";return i.toLowerCase()==="0xffffffffffffffffffffffffffffffffffffffff"?S="Verified":i!==q?S="Solved":B>Number(a[6])&&(S="End"),{status:S,winnerAddress:i,id:a[0],name:a[1],description:a[2],gameType:a[3],imageUri:a[4],startDate:Number(a[5]),endDate:Number(a[6]),awards:Number(a[7])}}).reverse(),console.log(f.value)},$=e=>new Date(e*1e3).toLocaleString("en-US",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),D=(e,a)=>{const B=(a-e)/(60*60*24);return Math.round(B)},s=e=>Y(e.toString(),18),n=e=>e&&`Winner: ${e.slice(0,6)}...${e.slice(-4)}`;return K(()=>{k()}),(e,a)=>(w(),C(P,null,[!o.value&&!d.value?(w(),C("div",se,[t("div",ae,[a[9]||(a[9]=t("div",{class:"challenge-title-text"},"Challenges",-1)),t("div",ie,[t("div",{class:v(["challenge-live-filter-btn",{"is-live-active":!0}])}," All "),t("div",{class:v(["challenge-live-filter-btn",{"is-live-active":!1}])}," Live "),t("div",{class:v(["challenge-live-filter-btn",{"is-live-active":!1}])}," End ")]),t("div",ne,[t("div",le,[t("div",{class:v(["challenge-type-filter-btn",{"is-type-active":!0}])},[t("div",{class:v(["challenge-type-filter-btn-text",{"is-type-text-active":!0}])}," All Type ")]),t("div",{class:v(["challenge-type-filter-btn",{"is-type-active":!1}])},[t("div",{class:v(["challenge-type-filter-btn-text",{"is-type-text-active":!1}])}," Secret ")]),t("div",{class:v(["challenge-type-filter-btn",{"is-type-active":!1}])},[t("div",{class:v(["challenge-type-filter-btn-text",{"is-type-text-active":!1}])}," Slang ")]),t("div",{class:v(["challenge-type-filter-btn",{"is-type-active":!1}])},[t("div",{class:v(["challenge-type-filter-btn-text",{"is-type-text-active":!1}])}," Missmatch ")])]),t("div",{class:"challenge-create-new-btn",onClick:x}," + Create A New Challange ")]),t("div",oe,[(w(!0),C(P,null,X(f.value,(i,B)=>(w(),C("div",{key:i.id,class:"nft-wrapper"},[t("div",de,[t("div",re,[t("img",{src:i.imageUri?i.imageUri:"@/assets/nft/0.png",alt:"nft"},null,8,ce),t("div",fe,[t("div",ve,[(w(),C("svg",pe,[t("circle",{cx:"6",cy:"6.02026",r:"5.5",fill:i.status==="Live"?"#53926D":"#CC0000"},null,8,ue)])),t("div",we,c(i.status==="Live"?"Live":"End"),1)]),t("div",me,[t("div",ge,c(i.name),1),t("div",xe,[t("div",_e,c(i.gameType),1)])])])]),t("div",he,c(i.description),1),t("div",ye,[a[0]||(a[0]=t("div",{class:"nft-date-text"},"Date",-1)),t("div",be,[t("div",$e,c($(i.startDate)),1),t("div",Ce," ~ "+c($(i.endDate)),1)])]),t("div",De,[a[1]||(a[1]=t("div",{class:"nft-duration-text"},"Duration",-1)),t("div",ke,c(D(i.startDate,i.endDate))+" days ",1)]),t("div",Se,[a[2]||(a[2]=t("div",{class:"nft-award-text"},"Award",-1)),t("div",Me,c(s(i.awards))+" USDC ",1)])]),t("div",{class:v(["nft-btn",{disabled:i.status==="Solved"}]),onClick:S=>i.status!=="Solved"&&y(i)},[t("div",Be,c(i.status==="Solved"?n(i.winnerAddress):i.status==="Verified"?"Verified":"Challenge"),1)],10,Ae)]))),128))]),t("div",Ue,[t("div",Te,[a[7]||(a[7]=t("img",{src:nt,alt:"left"},null,-1)),t("div",Ie,[t("div",{class:v(["number-text",{"is-pagination-active":!0}])}," 1 "),a[3]||(a[3]=t("div",{class:"number-text"},"2",-1)),a[4]||(a[4]=t("div",{class:"number-text"},"3",-1)),a[5]||(a[5]=t("div",{class:"number-text"},"4",-1)),a[6]||(a[6]=t("div",{class:"number-text"},"5",-1))]),a[8]||(a[8]=t("img",{src:lt,alt:"right"},null,-1))])])])])):T("",!0),o.value?(w(),I(Gt,{key:1,nft:r.value,onCloseModal:m},null,8,["nft"])):T("",!0),d.value?(w(),I(ee,{key:2,onCloseCreateModal:b})):T("",!0)],64))}},Ve=N(Ne,[["__scopeId","data-v-cec673dd"]]),Le={__name:"ChallengeView",setup(l){return(o,d)=>(w(),I(Ve))}};export{Le as default};
