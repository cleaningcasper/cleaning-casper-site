document.documentElement.classList.add('js');
const t=document.querySelector('.nav-toggle'),n=document.getElementById('site-nav');
if(t&&n){t.addEventListener('click',()=>{const o=t.getAttribute('aria-expanded')==='true';
  t.setAttribute('aria-expanded',String(!o));document.body.classList.toggle('nav-open',!o);});}
const h=document.querySelector('.site-header--overlay');
if(h){const f=()=>h.classList.toggle('is-scrolled',scrollY>40);f();addEventListener('scroll',f,{passive:true});}
