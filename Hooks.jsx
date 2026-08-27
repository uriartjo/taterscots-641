// TaterScots Shared Hooks & Ambient Effects
// Consolidates HeroMotion / useCursorGlow / useReveal / useCountUp, which
// were previously copy-pasted near-verbatim into 6 separate files. All
// ambient motion here checks prefers-reduced-motion and no-ops when set.

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function HeroMotion() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    let raf, W, H, parts = [], streaks = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize(){ W = c.clientWidth; H = c.clientHeight; c.width = W*dpr; c.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function init(){
      parts = []; for (let i=0;i<54;i++) parts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+0.3,vx:(Math.random()-0.5)*0.18,vy:(Math.random()-0.5)*0.18,o:Math.random()*0.3+0.06,p:Math.random()*6.28,ps:0.006+Math.random()*0.01});
      streaks = []; for (let i=0;i<7;i++) streaks.push({x:Math.random()*W,y:Math.random()*H,len:40+Math.random()*130,sp:0.15+Math.random()*0.25,o:0.05+Math.random()*0.07,col:Math.random()>0.6?'255,197,61':'217,43,43'});
    }
    resize(); init();
    const onR = () => { resize(); init(); }; window.addEventListener('resize', onR);
    function draw(){
      ctx.clearRect(0,0,W,H);
      streaks.forEach(s=>{ const g=ctx.createLinearGradient(s.x,s.y,s.x+s.len,s.y); g.addColorStop(0,'transparent'); g.addColorStop(0.5,`rgba(${s.col},${s.o})`); g.addColorStop(1,'transparent'); ctx.strokeStyle=g; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(s.x+s.len,s.y); ctx.stroke(); s.x+=s.sp; if(s.x>W+s.len) s.x=-s.len; });
      parts.forEach(pt=>{ pt.p+=pt.ps; const o=pt.o*(0.6+0.4*Math.sin(pt.p)); ctx.beginPath(); ctx.arc(pt.x,pt.y,pt.r,0,6.2832); ctx.fillStyle=`rgba(240,238,234,${o})`; ctx.fill(); pt.x+=pt.vx; pt.y+=pt.vy; if(pt.x<-4)pt.x=W+4; if(pt.x>W+4)pt.x=-4; if(pt.y<-4)pt.y=H+4; if(pt.y>H+4)pt.y=-4; });
      raf=requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onR); };
  }, []);
  return <canvas ref={ref} className="hero-canvas" style={{position:'absolute',inset:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'}}/>;
}

function useReveal(dep) {
  React.useEffect(()=>{
    if (prefersReducedMotion()) {
      document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
      return;
    }
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const d=e.target.dataset.delay||0;
          setTimeout(()=>e.target.classList.add('visible'),+d);
          io.unobserve(e.target);
        }
      });
    },{threshold:0.1});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    const fb = setTimeout(() => document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible')), 2500);
    return ()=>{ io.disconnect(); clearTimeout(fb); };
  },[dep]);
}

function useCountUp(target) {
  const [val,setVal]=React.useState(prefersReducedMotion() ? target : 0);
  const ref=React.useRef(null);
  React.useEffect(()=>{
    if (prefersReducedMotion()) return;
    let started = false;
    const run = () => {
      if (started) return; started = true;
      const s=performance.now();const dur=1400;
      const t=n=>{const p=Math.min((n-s)/dur,1);setVal(Math.round((1-Math.pow(1-p,3))*target));if(p<1)requestAnimationFrame(t);};
      requestAnimationFrame(t);
    };
    const io=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ run(); io.disconnect(); } },{threshold:0.5});
    if(ref.current)io.observe(ref.current);
    // Safety net: some environments never fire IntersectionObserver callbacks
    // (also protects against a slow/late scroll never crossing the threshold).
    const fb = setTimeout(run, 2500);
    return()=>{ io.disconnect(); clearTimeout(fb); };
  },[target]);
  return [val,ref];
}

Object.assign(window, { HeroMotion, useReveal, useCountUp, prefersReducedMotion });
