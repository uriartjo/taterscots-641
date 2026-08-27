// TaterScots Cards & Roster UI — shared across Home (preview grid) and
// Team (full filterable grid + modal). Roster data comes from
// window.ROSTER / window.DEPT_COLORS (roster.js) — no page hardcodes
// member data anymore.

function deptMeta(dept) {
  return (window.DEPT_COLORS && window.DEPT_COLORS[dept]) || { color: '#9c9ca6', rgb: '146,146,160' };
}

function LabelTag({ children, red }) {
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:6,
      fontFamily:'Inter', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase',
      color: red ? '#ff7070' : 'var(--amber)',
      background: red ? 'var(--red-dim)' : 'var(--amber-dim)',
      padding:'5px 14px', borderRadius:100, marginBottom:20,
      border: `1px solid ${red ? 'rgba(217,43,43,0.18)' : 'rgba(255,197,61,0.18)'}`,
    }}>{children}</div>
  );
}

function StripeDiv() {
  return <div style={{height:1,background:'linear-gradient(90deg,transparent,rgba(217,43,43,0.6) 30%,rgba(255,197,61,0.35) 70%,transparent)',opacity:0.6}}/>;
}

const STAT_ICON_PATHS = {
  users: [{tag:'circle',cx:'9',cy:'8',r:'3.2'},{tag:'path',d:'M2.5 20a6.5 6.5 0 0113 0'},{tag:'path',d:'M15.5 5.2a3.2 3.2 0 010 6.1'},{tag:'path',d:'M17.5 14.3c2.2.5 3.9 2.4 4 5.7'}],
  trophy: [{tag:'path',d:'M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4zM7 4H4a1 1 0 00-1 1v1a4 4 0 004 4M17 4h3a1 1 0 011 1v1a4 4 0 01-4 4'}],
  heart: [{tag:'path',d:'M12 20.5s-7.5-4.7-10-9.3C.5 7.8 2.3 4.5 5.6 4a5 5 0 016.4 2 5 5 0 016.4-2c3.3.5 5.1 3.8 3.6 7.2-2.5 4.6-10 9.3-10 9.3z'}],
  calendar: [{tag:'rect',x:'3',y:'4',width:'18',height:'18',rx:'3'},{tag:'path',d:'M16 2v4M8 2v4M3 10h18'}],
  book: [{tag:'path',d:'M4 19.5A2.5 2.5 0 016.5 17H20'},{tag:'path',d:'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z'}],
};
function StatIcon({ type }) {
  const parts = STAT_ICON_PATHS[type] || STAT_ICON_PATHS.trophy;
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {parts.map((el,i) => { const {tag,...attrs} = el; return React.createElement(tag, {key:i, ...attrs}); })}
  </svg>;
}
function StatItem({ num, suffix='', label, icon }) {
  const [val, ref] = window.useCountUp(num);
  const [hov, setHov] = React.useState(false);
  return (
    <div ref={ref} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      padding:'26px 22px', borderRadius:18, background:'var(--surface)',
      border:`1px solid ${hov?'rgba(255,197,61,0.28)':'var(--border)'}`,
      transform: hov ? 'translateY(-4px)' : '', boxShadow: hov ? 'var(--shadow-md)' : '',
      transition:'all 0.28s cubic-bezier(0.16,1,0.3,1)', height:'100%',
    }}>
      {icon && (
        <div style={{width:34,height:34,borderRadius:9,background:'var(--amber-dim)',border:'1px solid rgba(255,197,61,0.18)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--amber)',marginBottom:18}}>
          <StatIcon type={icon}/>
        </div>
      )}
      <span style={{fontFamily:'Inter', fontSize:'2.3rem', fontWeight:800, color:'var(--white)', display:'block', lineHeight:1, marginBottom:8, letterSpacing:'-0.02em'}}>{val}<span style={{color:'var(--amber)'}}>{suffix}</span></span>
      <span style={{fontSize:'11px', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.1em', fontFamily:'Inter', fontWeight:600}}>{label}</span>
    </div>
  );
}

function Quicklink({ icon, title, desc, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background: hov ? 'var(--surface-hover)' : 'var(--surface)',
        border: `1px solid ${hov ? 'rgba(217,43,43,0.25)' : 'var(--border)'}`,
        borderRadius:16, padding:22, display:'flex', alignItems:'center', gap:14,
        cursor:'pointer', color:'var(--white)', position:'relative', overflow:'hidden',
        transform: hov ? 'translateY(-3px)' : '',
        boxShadow: hov ? '0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(217,43,43,0.07)' : '',
        transition:'all 0.25s',
      }}>
      <div style={{width:40,height:40,flexShrink:0,background: hov ? 'var(--red-dim)' : 'rgba(255,255,255,0.04)',border:`1px solid ${hov ? 'rgba(217,43,43,0.22)' : 'var(--border)'}`,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.25s'}}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={hov ? '#ff7070' : 'var(--muted-2)'} strokeWidth="2">{icon}</svg>
      </div>
      <div style={{flex:1}}>
        <strong style={{display:'block',fontFamily:'Inter',fontSize:'0.88rem',fontWeight:700,marginBottom:3}}>{title}</strong>
        <span style={{fontSize:'0.77rem',color:'var(--muted)'}}>{desc}</span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={hov ? '#ff7070' : 'var(--muted)'} strokeWidth="2" style={{transition:'transform 0.22s',transform:hov ? 'translateX(4px)' : ''}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </div>
  );
}

function SubFeature({ title, desc }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{display:'flex',alignItems:'flex-start',gap:12,padding:'12px 16px',background: hov ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.018)',border:`1px solid ${hov ? 'rgba(217,43,43,0.18)' : 'var(--border)'}`,borderRadius:10,transition:'all 0.2s'}}>
      <div style={{width:5,height:5,borderRadius:'50%',background:'var(--red)',flexShrink:0,marginTop:7,opacity:0.8}}/>
      <div>
        <strong style={{fontFamily:'Inter',fontSize:'0.84rem',fontWeight:700,color:'var(--white)',display:'block',marginBottom:2}}>{title}</strong>
        <span style={{fontSize:'0.79rem',color:'var(--muted)',lineHeight:1.55}}>{desc}</span>
      </div>
    </div>
  );
}

function DeptBadge({ dept }) {
  const m = deptMeta(dept);
  return (
    <span style={{display:'inline-flex',fontSize:'9px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.09em',padding:'2px 8px',borderRadius:100,background:`rgba(${m.rgb},0.1)`,color:m.color,border:`1px solid rgba(${m.rgb},0.2)`}}>{dept}</span>
  );
}

function SkillPill({ label }) {
  return <span style={{display:'inline-flex',fontSize:'0.75rem',fontWeight:500,padding:'4px 10px',borderRadius:100,background:'rgba(255,255,255,0.04)',border:'1px solid var(--border-mid)',color:'var(--muted-2)'}}>{label}</span>;
}

function SeniorBadge({ overlay=false }) {
  return (
    <span aria-label="Senior" style={{position:overlay?'absolute':'relative',top:overlay?10:'auto',right:overlay?10:'auto',zIndex:3,display:'inline-flex',alignItems:'center',gap:4,fontSize:'8px',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',padding:'3px 7px',borderRadius:6,background:'rgba(255,197,61,0.14)',color:'var(--amber)',border:'1px solid rgba(255,197,61,0.3)'}}>
      <svg aria-hidden="true" width="9" height="9" viewBox="0 0 24 24" fill="var(--amber)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Senior
    </span>
  );
}

// Compact thumb — used in preview grids (Home)
function MemberThumb({ member, large }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  return (
    <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, overflow:'hidden', transition:'all 0.25s', cursor:'pointer', position:'relative'}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--border-mid)';e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='var(--shadow-lg)'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
      <div style={{position:'relative', aspectRatio:'1', overflow:'hidden', background:'linear-gradient(135deg, rgba(217,43,43,0.07) 0%, rgba(255,197,61,0.03) 100%)'}}>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter',fontSize: large ? '2.5rem' : '1.5rem',fontWeight:800,letterSpacing:'-0.03em',color:'rgba(217,43,43,0.45)'}}>{member.initials}</div>
        {member.photo && !imgFailed && (
          <img src={member.photo} alt={member.name} onError={()=>setImgFailed(true)} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:'grayscale(8%)'}}/>
        )}
        {member.senior && <SeniorBadge overlay/>}
      </div>
      <div style={{padding: large ? '16px 18px' : '10px 12px'}}>
        <div style={{fontFamily:'Inter',fontSize: large ? '0.94rem' : '0.82rem',fontWeight:700,color:'var(--white)',marginBottom:3,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{member.name}</div>
        <div style={{fontSize: large ? '0.8rem' : '0.71rem',color:'var(--muted)'}}>{member.role}</div>
      </div>
    </div>
  );
}

// Full grid tile — used on Team.html
function MemberCard({ member, onClick, delay }) {
  const [hov, setHov] = React.useState(false);
  const m = deptMeta(member.dept);
  return (
    <div className="reveal" data-delay={delay} onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background:'var(--surface)', border:`1px solid ${hov?'var(--border-mid)':'var(--border)'}`,
        borderRadius:18, overflow:'hidden', cursor:'pointer',
        transform:hov?'translateY(-5px)':'',
        boxShadow:hov?'var(--shadow-lg)':'0 2px 8px rgba(0,0,0,0.2)',
        opacity:hov?1:0.8, filter:hov?'saturate(1) brightness(1)':'saturate(0.8) brightness(0.9)',
        transition:'all 0.28s cubic-bezier(0.16,1,0.3,1)', position:'relative',
      }}>
      <div style={{aspectRatio:'1', background:'linear-gradient(135deg,#0c0e16 0%,#12101c 100%)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse 80% 80% at 50% 120%, rgba(${m.rgb},${hov?0.1:0.04}) 0%, transparent 60%)`,transition:'all 0.4s'}}/>
        {member.photo ? (
          <img src={member.photo} alt={member.name} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:1,filter:'grayscale(6%)'}}/>
        ) : (
          <span style={{fontFamily:'Inter',fontSize:'2rem',fontWeight:800,color:`rgba(${m.rgb},${hov?0.55:0.3})`,letterSpacing:'-0.04em',position:'relative',zIndex:1}}>{member.initials}</span>
        )}
        {member.senior && <SeniorBadge overlay/>}
      </div>
      <div style={{padding:'20px 20px 22px'}}>
        <div style={{fontSize:'1.02rem',fontWeight:700,color:'var(--white)',marginBottom:3,letterSpacing:'-0.01em'}}>{member.name}</div>
        <div style={{fontSize:'0.8rem',color:'var(--muted)',marginBottom:14}}>{member.dept} · {member.role}</div>
        {member.seasons && <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:12,borderTop:'1px solid var(--border)'}}>
          <div style={{display:'flex',gap:4}}>
            {Array.from({length:Math.min(member.seasons,5)}).map((_,i)=>(<div key={i} style={{width:5,height:5,borderRadius:'50%',background:i<member.seasons?'var(--red)':'rgba(255,255,255,0.1)'}}/>))}
          </div>
          <span style={{fontSize:'0.72rem',color:'var(--muted)',fontWeight:500}}>{member.seasons} {member.seasons===1?'season':'seasons'}</span>
        </div>}
      </div>
    </div>
  );
}

function ProfileModal({ member, onClose }) {
  const [closing, setClosing] = React.useState(false);
  const m = deptMeta(member.dept);
  function close() { setClosing(true); setTimeout(onClose, 220); }
  React.useEffect(() => {
    const fn = e => { if (e.key==='Escape') close(); };
    window.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow=''; };
  }, []);
  return (
    <div onClick={e=>{ if(e.target===e.currentTarget) close(); }} style={{position:'fixed',inset:0,zIndex:500,background:'rgba(0,0,0,0.72)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,opacity:closing?0:1,transition:'opacity 0.2s'}}>
      <div style={{background:'var(--surface)',border:'1px solid var(--border-mid)',borderRadius:24,width:'100%',maxWidth:640,maxHeight:'90vh',overflow:'hidden',display:'flex',flexDirection:'column',boxShadow:'0 32px 96px rgba(0,0,0,0.75)',transform:closing?'translateY(16px)':'',transition:'transform 0.2s, opacity 0.2s',opacity:closing?0:1}}>
        <div style={{height:1,background:'linear-gradient(90deg,transparent,var(--red) 30%,var(--amber) 70%,transparent)',flexShrink:0,opacity:0.7}}/>
        <div style={{padding:'32px 36px 28px',position:'relative',flexShrink:0,background:`linear-gradient(to bottom, rgba(${m.rgb},0.04) 0%, transparent 100%)`}}>
          <button onClick={close} aria-label="Close" style={{position:'absolute',top:24,right:24,width:32,height:32,borderRadius:8,background:'rgba(255,255,255,0.05)',border:'1px solid var(--border-mid)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'var(--muted)'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div style={{display:'flex',alignItems:'flex-start',gap:24}}>
            <div style={{width:80,height:80,flexShrink:0,borderRadius:20,background:'linear-gradient(135deg,#0c0e16,#16141e)',border:`1px solid rgba(${m.rgb},0.25)`,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}}>
              {member.photo ? <img src={member.photo} alt={member.name} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/> : <span style={{fontFamily:'Inter',fontSize:'1.6rem',fontWeight:800,color:`rgba(${m.rgb},0.65)`}}>{member.initials}</span>}
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6,flexWrap:'wrap'}}>
                <DeptBadge dept={member.dept}/>
                {member.senior && <SeniorBadge/>}
              </div>
              <h2 style={{fontFamily:'Inter',fontSize:'1.5rem',fontWeight:800,color:'var(--white)',marginBottom:4}}>{member.name}</h2>
              <div style={{fontSize:'0.875rem',color:'var(--muted)',marginBottom:4}}>{member.role}</div>
              <div style={{fontSize:'0.78rem',color:'var(--muted)'}}>{member.year}{member.seasons ? ` · ${member.seasons} ${member.seasons===1?'season':'seasons'}` : ''}</div>
            </div>
          </div>
        </div>
        <div style={{height:1,background:'var(--border)',flexShrink:0}}/>
        <div style={{overflowY:'auto',padding:'28px 36px 36px',display:'flex',flexDirection:'column',gap:24}}>
          <div>
            <div style={{fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',color:'var(--muted)',marginBottom:10}}>About</div>
            <p style={{fontSize:'0.9rem',color:'var(--muted-2)',lineHeight:1.85}}>{member.bio}</p>
          </div>
          {member.quote && (
            <div style={{background:`rgba(${m.rgb},0.04)`,border:`1px solid rgba(${m.rgb},0.12)`,borderRadius:12,padding:'18px 20px',position:'relative'}}>
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:`linear-gradient(to bottom,${m.color},transparent)`,borderRadius:'12px 0 0 12px'}}/>
              <div style={{fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',color:m.color,marginBottom:8}}>In their words</div>
              <p style={{fontSize:'0.875rem',color:'var(--muted-2)',lineHeight:1.75,fontStyle:'italic'}}>"{member.quote}"</p>
            </div>
          )}
          {(member.skills||[]).length > 0 && <div>
            <div style={{fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',color:'var(--muted)',marginBottom:12}}>Skills</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>{(member.skills||[]).map((s,i)=><SkillPill key={i} label={s}/>)}</div>
          </div>}
        </div>
      </div>
    </div>
  );
}

function FilterBar({ active, setActive, roster }) {
  const available = ['All', ...new Set(roster.map(m=>m.dept))];
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:32}}>
      {available.map(d => {
        const isActive = active===d;
        const m = d==='All' ? null : deptMeta(d);
        return (
          <button key={d} onClick={()=>setActive(d)} style={{
            fontFamily:'Inter', fontSize:'0.8rem', fontWeight:600, letterSpacing:'0.03em',
            padding:'6px 14px', borderRadius:100, cursor:'pointer', transition:'all 0.2s',
            background: isActive ? (m ? m.color : 'var(--red)') : 'var(--surface)',
            border: `1px solid ${isActive ? (m ? m.color : 'var(--red)') : 'var(--border)'}`,
            color: isActive ? '#fff' : 'var(--muted)',
          }}>
            {d}
            <span style={{marginLeft:6,fontSize:'0.7rem',opacity:0.65}}>{d==='All' ? roster.length : roster.filter(m=>m.dept===d).length}</span>
          </button>
        );
      })}
    </div>
  );
}

// Full filterable roster grid — drop this into Team.html
function RosterGrid() {
  const roster = window.ROSTER || [];
  const [selected, setSelected] = React.useState(null);
  const [filter, setFilter] = React.useState('All');
  const filtered = filter==='All' ? roster : roster.filter(m=>m.dept===filter);
  const sorted = [...filtered].sort((a,b) => Number(b.senior)-Number(a.senior));
  return (
    <>
      <FilterBar active={filter} setActive={setFilter} roster={roster}/>
      {filtered.length === 0
        ? <div style={{textAlign:'center',padding:'80px 0',color:'var(--muted)',fontSize:'0.9rem'}}>No members match this filter.</div>
        : <>
            <div className="auto-grid cards-lg">
              {sorted.map((m,i)=><MemberCard key={m.id} member={m} onClick={()=>setSelected(m)} delay={i*55}/>)}
            </div>
          </>
      }
      {selected && <ProfileModal member={selected} onClose={()=>setSelected(null)}/>}
    </>
  );
}

Object.assign(window, { LabelTag, StripeDiv, StatItem, Quicklink, SubFeature, DeptBadge, SkillPill, SeniorBadge, MemberThumb, MemberCard, ProfileModal, FilterBar, RosterGrid });
