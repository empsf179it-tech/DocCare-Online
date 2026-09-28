const q=(s,p=document)=>p.querySelector(s),qa=(s,p=document)=>p.querySelectorAll(s)
q('.drop-toggle')?.addEventListener('click',e=>{e.stopPropagation();q('.dropdown').classList.toggle('open')})
document.addEventListener('click',e=>{if(!e.target.closest('.dropdown'))q('.dropdown')?.classList.remove('open')})
const toggleMenu=()=>{q('.nav-links').classList.toggle('open')}
const showAuth=()=>{window.location.href='auth.html'}
const closeAuth=()=>{window.location.href='index.html'}
const login=()=>{window.location.href='dashboard.html'}
const logout=()=>{window.location.href='index.html'}
const switchTab=t=>{const isLogin=t==='login';q('#tab-login').classList.toggle('active',isLogin);q('#tab-register').classList.toggle('active',!isLogin);q('#panel-login').style.display=isLogin?'block':'none';q('#panel-register').style.display=isLogin?'none':'block'}
const toggleDashMenu=()=>q('.sidebar').classList.toggle('open')
let tId;const toast=m=>{const t=q('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tId);tId=setTimeout(()=>t.classList.remove('show'),3000)}
window.addEventListener('scroll',()=>{const b=q('#back-top');if(b){if(window.scrollY>300)b.classList.add('show');else b.classList.remove('show')}})
const scrollToTop=()=>window.scrollTo({top:0,behavior:'smooth'})

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>qa('.reveal').forEach((el,i)=>{setTimeout(()=>el.classList.add('in'),i*60)}),50);
});
