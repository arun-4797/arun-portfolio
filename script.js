document.documentElement.classList.add('js-ready');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const progress = document.querySelector('.scroll-progress span');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
};
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const glow = document.querySelector('.cursor-glow');
if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.opacity = '.8';
  }, {passive:true});
  document.addEventListener('pointerleave', () => glow.style.opacity = '0');
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el, {y:28, autoAlpha:0}, {
      y:0, autoAlpha:1, duration:0.85, ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 88%',once:true}
    });
  });

  // Scroll-linked, pinned campaign story: each account/project gets its own stage.
  gsap.utils.toArray('.story-stage').forEach((stage, index) => {
    const visual = stage.querySelector('.story-visual');
    const left = stage.querySelector('.story-left');
    const bar = stage.querySelector('.story-progress span');
    if (!visual || window.innerWidth < 651) return;
    gsap.fromTo(visual, {y:55, scale:.94, rotate: index % 2 ? 2 : -2}, {
      y:0, scale:1, rotate:0, ease:'none',
      scrollTrigger:{trigger:stage,start:'top 70%',end:'bottom 65%',scrub:1}
    });
    if (bar) gsap.to(bar,{width:'100%',ease:'none',scrollTrigger:{trigger:stage,start:'top 70%',end:'bottom 65%',scrub:1}});
    gsap.fromTo(left,{x:-22,autoAlpha:.55},{x:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:stage,start:'top 72%',end:'top 25%',scrub:1}});
  });

  const heroTitle = document.querySelectorAll('.title-line');
  gsap.fromTo(heroTitle,{yPercent:110,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:1.05,stagger:.13,ease:'power4.out',delay:.15});
  gsap.fromTo('.hero-art',{y:35,autoAlpha:0,scale:.94},{y:0,autoAlpha:1,scale:1,duration:1.2,ease:'power3.out',delay:.45});
  gsap.to('.orbit-one',{rotation:335,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:2}});
  gsap.to('.orbit-two',{rotation:415,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:2}});
  gsap.to('.marquee-track',{xPercent:-15,ease:'none',scrollTrigger:{trigger:'.marquee-band',start:'top bottom',end:'bottom top',scrub:1}});
  ScrollTrigger.refresh();
} else {
  document.querySelectorAll('.reveal').forEach(el => {el.style.opacity=1;el.style.transform='none';});
}
