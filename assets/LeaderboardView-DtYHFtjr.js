import{b as u,c as f}from"./gameView-BBQiwUz6.js";import{_ as b,j as g,s as x,x as C,o as l,c as i,a as e,t as o,D as m,F as y,r as S,y as k,l as L}from"./index-Wt0TdR2C.js";const B={class:"leaderboard"},I={class:"leaderboard-container"},V={class:"overview-wrapper"},A={class:"overview-content-wrapper"},E={class:"data-wrapper"},T={class:"title-wrapper"},$={class:"content-text"},D={class:"title-wrapper"},F={class:"content-text"},N={class:"title-wrapper"},O={class:"content-text"},P={class:"title-wrapper"},U={class:"content-verified-text"},j={class:"leaderboard-wrapper"},M={class:"table"},R={class:"rank-content-text"},q={class:"challenger-content-text"},z={class:"award-content-text"},G={class:"solved-content-text"},H={__name:"LeaderboardPage",setup(p){const s=g({totalChallenges:0,ongoingChallenges:0,solvedChallenges:0,verifiedChallenges:0}),n=g([{address:"",solved:"",award:""}]),c=async()=>{try{const t=await u();s.value.totalChallenges=t[0],s.value.ongoingChallenges=t[1],s.value.solvedChallenges=t[2],s.value.verifiedChallenges=t[3]}catch(t){console.error("Error fetching overview data:",t)}},v=async()=>{try{const t=await f(10);t[0].length!=0&&(n.value=t[0].map((a,r)=>({address:a,solved:t[1][r],award:t[2][r].toString()})).sort((a,r)=>r.award-a.award))}catch(t){console.error("Error fetching leaderboard data:",t)}},h=t=>t==""?"":k(t.toString(),18),w=t=>t&&`${t.slice(0,6)}...${t.slice(-4)}`;let d=null;return x(async()=>{await c(),await v(),d=setInterval(async()=>{await c(),await v()},15e3)}),C(()=>{d&&clearInterval(d)}),(t,a)=>(l(),i("div",B,[e("div",I,[e("div",V,[a[4]||(a[4]=e("div",{class:"overview-text"},"Overview",-1)),e("div",A,[e("div",E,[e("div",T,[a[0]||(a[0]=e("div",{class:"title-text"},"Total Challenges",-1)),e("div",$,o(s.value.totalChallenges),1)]),e("div",D,[a[1]||(a[1]=e("div",{class:"title-text"},"Live Challenges",-1)),e("div",F,o(s.value.ongoingChallenges),1)]),e("div",N,[a[2]||(a[2]=e("div",{class:"title-text"},"Solved Challenges",-1)),e("div",O,o(s.value.solvedChallenges),1)]),e("div",P,[a[3]||(a[3]=e("div",{class:"title-verified-text"},"Verified Challenges",-1)),e("div",U,o(s.value.verifiedChallenges),1)])])])]),e("div",j,[a[6]||(a[6]=e("div",{class:"leaderboard-text"},"Leaderboard",-1)),e("div",M,[a[5]||(a[5]=m('<div class="table-title-wrapper" data-v-9031bc69><div class="rank-text" data-v-9031bc69>Rank</div><div class="challenger-text" data-v-9031bc69>Challenger</div><div class="award-text" data-v-9031bc69>Total Award</div><div class="solved-text" data-v-9031bc69>Solved</div></div>',1)),(l(!0),i(y,null,S(n.value,(r,_)=>(l(),i("div",{key:_,class:"table-content-wrapper"},[e("div",R,o(r.award==""?"":_+1),1),e("div",q,o(w(r.address)),1),e("div",z,o(h(r.award)),1),e("div",G,o(r.solved),1)]))),128))])])])]))}},J=b(H,[["__scopeId","data-v-9031bc69"]]),W={__name:"LeaderboardView",setup(p){return(s,n)=>(l(),L(J))}};export{W as default};
