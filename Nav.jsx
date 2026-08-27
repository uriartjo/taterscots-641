// TaterScots Shared Nav — one implementation instead of 5 copy-pasted blocks.
// Includes the mobile hamburger menu that only Home used to have; About,
// Team, Guides, and Handbook previously had no small-screen nav at all,
// so Contact (and often Handbook) fell off the right edge of a phone.

function Nav({ active, progress }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Home', 'Landing Page.html'],
    ['Team', 'Team.html'],
    ['About', 'About.html'],
    ['Guides', 'Guides.html'],
    ['Handbook', 'Handbook.html'],
  ];

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      {scrolled && <div style={{position:'absolute',bottom:-1,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(217,43,43,0.4) 30%,rgba(255,197,61,0.25) 70%,transparent)'}}/>}
      <div className="site-nav-inner">
        <a href="Landing Page.html" style={{fontFamily:'Inter',fontWeight:800,fontSize:'1.05rem',color:'var(--white)',textDecoration:'none',display:'flex',alignItems:'center',gap:10,flexShrink:0}}>
          <img src="1776100755044_TaterScots_E.png" alt="TaterScots" style={{height:30,width:'auto',filter:'drop-shadow(0 0 8px rgba(217,43,43,0.35))'}}/>
          <span>TaterScots <span style={{color:'var(--red)',fontSize:'0.82em',fontWeight:700}}>641</span></span>
        </a>

        <ul className={`site-nav-links${menuOpen ? ' open' : ''}`} style={{listStyle:'none'}}>
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} style={{
                color: active === label ? 'var(--white)' : 'var(--muted)',
                textDecoration:'none', fontSize:'0.86rem', fontWeight: active === label ? 600 : 500,
                padding:'6px 12px', borderRadius:6,
                background: active === label ? 'rgba(255,255,255,0.04)' : 'transparent',
                display:'block', transition:'color 0.2s',
              }}>{label}</a>
            </li>
          ))}
          <li>
            <a href={`mailto:${window.CONTACT_EMAIL}`} style={{
              background:'rgba(217,43,43,0.12)', border:'1px solid rgba(217,43,43,0.22)',
              color:'#ff7070', fontWeight:600, marginLeft:10, borderRadius:10,
              padding:'6px 14px', fontSize:'0.86rem', textDecoration:'none', display:'block',
            }}>Contact</a>
          </li>
        </ul>

        <button className="site-nav-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
          </svg>
        </button>
      </div>
      {typeof progress === 'number' && (
        <div style={{position:'absolute',bottom:-1,left:0,height:2,width:`${progress*100}%`,background:'linear-gradient(90deg,var(--red),var(--amber))',transition:'width 0.1s linear'}}/>
      )}
    </nav>
  );
}

Object.assign(window, { Nav });
