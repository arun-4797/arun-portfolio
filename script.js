document.documentElement.classList.add('js-ready');
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const progress=document.querySelector('.scroll-progress span');
const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';};
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('.desktop-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const glow=document.querySelector('.cursor-glow');
if(matchMedia('(pointer:fine)').matches)addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='.65';},{passive:true});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&window.gsap&&window.ScrollTrigger){
 gsap.registerPlugin(ScrollTrigger);
 const curtain=document.querySelector('.transition-curtain');
 const intro=gsap.timeline({onComplete:()=>document.body.classList.add('immersive-ready')});
 intro.to(curtain,{clipPath:'inset(0 0 100% 0)',duration:1.15,ease:'power4.inOut',delay:.15});
 intro.fromTo('.hero-kicker',{y:18,autoAlpha:0},{y:0,autoAlpha:1,duration:.65},'-.55');
 intro.fromTo('.title-line',{yPercent:115,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:1.05,stagger:.14,ease:'power4.out'},'-.35');
 intro.fromTo('.hero-intro,.hero-credentials,.hero-actions,.hero-for-hr',{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.7,stagger:.12,ease:'power3.out'},'-.55');
 intro.fromTo('.profile-panel',{y:65,rotate:8,scale:.9,autoAlpha:0},{y:0,rotate:2,scale:1,autoAlpha:1,duration:1.1,ease:'power3.out'},'-=1');
 intro.fromTo('.card-reach',{x:35,y:-20,rotate:12,autoAlpha:0},{x:0,y:0,rotate:5,autoAlpha:1,duration:.8,ease:'back.out(1.4)'},'-.55');
 gsap.utils.toArray('.reveal').forEach(el=>{if(el.closest('.hero'))return;gsap.fromTo(el,{y:38,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});});
 // Extended full-screen story scenes with scroll-scrubbed scale, crop and depth transitions.
 gsap.utils.toArray('.story-stage').forEach((stage,index)=>{
  const visual=stage.querySelector('.story-visual'),left=stage.querySelector('.story-left'),bar=stage.querySelector('.story-progress span');
  if(innerWidth>=900){
   gsap.fromTo(visual,{scale:.78,y:110,rotate:index%2?3:-3,clipPath:'inset(8% 8% 8% 8% round 4px)'},{scale:1,y:0,rotate:0,clipPath:'inset(0% 0% 0% 0% round 0px)',ease:'none',scrollTrigger:{trigger:stage,start:'top top',end:'bottom bottom',scrub:1.15}});
   gsap.fromTo(left,{x:-65,autoAlpha:.35},{x:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:stage,start:'top top',end:'top+=65% top',scrub:1}});
  }else{
   gsap.fromTo(visual,{y:40,autoAlpha:.6},{y:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:visual,start:'top 90%',end:'top 35%',scrub:1}});
  }
  if(bar)gsap.to(bar,{width:'100%',ease:'none',scrollTrigger:{trigger:stage,start:'top top',end:'bottom bottom',scrub:1}});
  ScrollTrigger.create({trigger:stage,start:'top 55%',end:'bottom 45%',onEnter:()=>gsap.to(stage,{backgroundColor:index%2?'#0d0f13':'#08090b',duration:.35}),onEnterBack:()=>gsap.to(stage,{backgroundColor:index%2?'#0d0f13':'#08090b',duration:.35})});
 });
 gsap.to('.orbit-one',{rotation:330,scale:1.12,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:2}});
 gsap.to('.orbit-two',{rotation:420,scale:.92,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:2}});
 gsap.to('.marquee-track',{xPercent:-20,ease:'none',scrollTrigger:{trigger:'.marquee-band',start:'top bottom',end:'bottom top',scrub:1}});
 gsap.utils.toArray('.timeline-item').forEach((item,i)=>gsap.fromTo(item,{x:i%2?45:-45,autoAlpha:.3},{x:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:item,start:'top 88%',end:'top 45%',scrub:1}}));
 gsap.fromTo('.impact-inner strong',{scale:.7,autoAlpha:.35},{scale:1,autoAlpha:1,ease:'none',scrollTrigger:{trigger:'.impact-band',start:'top 90%',end:'center center',scrub:1}});
 ScrollTrigger.refresh();
}else{
 document.body.classList.add('immersive-ready');
 document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none';});
}
