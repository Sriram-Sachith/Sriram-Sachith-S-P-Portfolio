/* ===== EDIT THESE ===== */
const CFG={email:"your@email.com",github:"https://github.com/username",linkedin:"https://linkedin.com/in/username",resume:"#",AVATAR_URL:""};
/* ====================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$("#gh").href=CFG.github;$("#li").href=CFG.linkedin;$("#em").href="mailto:"+CFG.email;$("#resume").href=CFG.resume;
if(CFG.AVATAR_URL)$("#avatar").innerHTML='<img src="'+CFG.AVATAR_URL+'" alt="Arjun K.">';

$("#th").onclick=()=>{const r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#05080f";r.dataset.theme=d?"light":"dark"};
/* typing roles */
const R=["Engineering the bridge between AI and people","C++ & Python Developer","AI-Driven Software Developer","AI Builder. API Crafter. Problem Solver","AI & ML Builder","Aspiring Software & AI Engineer"];let ri=0,ci=0,del=false;
(function ty(){const w=R[ri];$("#role").textContent=w.slice(0,ci);if(!del&&ci++===w.length){del=true;return setTimeout(ty,1400)}if(del&&--ci<0){del=false;ci=0;ri=(ri+1)%R.length}setTimeout(ty,del?40:85)})();
/* reveal, counters, bars, nav highlight */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");$$(".f").forEach(f=>f.style.width=f.dataset.w+"%")}}),{threshold:.15});$$(".rv").forEach(x=>io.observe(x));
$$("[data-n]").forEach(el=>{const t=+el.dataset.n,s=performance.now();(function f(n){const p=Math.min((n-s)/1400,1);el.textContent=Math.round(t*p);if(p<1)requestAnimationFrame(f)})(s)});
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$("nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{threshold:.4});$$("section").forEach(x=>so.observe(x));
/* 3D tilt */
$$(".tilt").forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`};c.onmouseleave=()=>c.style.transform=""});
/* neural network background */
const cv=$("#net"),cx=cv.getContext("2d");let W,H,P=[],M={x:-999,y:-999};
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(90,W/14|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:Math.random()-.5,vy:Math.random()-.5}))}
rs();addEventListener("resize",rs);addEventListener("mousemove",e=>{M.x=e.clientX;M.y=e.clientY});
(function dr(){cx.clearRect(0,0,W,H);const c=getComputedStyle(document.documentElement).getPropertyValue("--ac").trim()||"#2de2c4";cx.fillStyle=c;cx.strokeStyle=c;
P.forEach((p,i)=>{p.x+=p.vx*.5;p.y+=p.vy*.5;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;cx.globalAlpha=.6;cx.beginPath();cx.arc(p.x,p.y,1.6,0,7);cx.fill();
for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){cx.globalAlpha=(1-d/120)*.22;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
const dm=Math.hypot(p.x-M.x,p.y-M.y);if(dm<160){cx.globalAlpha=(1-dm/160)*.5;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(M.x,M.y);cx.stroke()}});requestAnimationFrame(dr)})();
