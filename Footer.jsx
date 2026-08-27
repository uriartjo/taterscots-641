// TaterScots Shared Footer — one implementation instead of 5 copy-pasted
// blocks with drifting link sets (some pointed "Contact Us" at a dead "#").

function Footer() {
  return (
    <footer style={{background:'var(--surface)',borderTop:'1px solid var(--border)',padding:'80px 0 40px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(217,43,43,0.5) 30%,rgba(255,197,61,0.3) 70%,transparent)'}}/>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:200,background:'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(217,43,43,0.04) 0%, transparent 70%)',pointerEvents:'none'}}/>

      <div style={{maxWidth:'var(--max-width)',margin:'0 auto',padding:'0 32px',position:'relative',zIndex:1}}>
        <div className="two-col" style={{gridTemplateColumns:'2fr 1fr 1fr',marginBottom:56,gap:56}}>
          <div>
            <img src="1776100755044_TaterScots_E.png" alt="TaterScots" style={{height:42,width:'auto',filter:'drop-shadow(0 0 10px rgba(217,43,43,0.22))',marginBottom:8,display:'block'}}/>
            <p style={{fontSize:'0.875rem',color:'var(--muted)',lineHeight:1.8,marginTop:14}}>
              Saint Andrew's School<br/>Boca Raton, Florida<br/>FIRST® Tech Challenge
            </p>
          </div>
          <div>
            <h4 style={{fontFamily:'Inter',fontSize:'0.72rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',color:'var(--muted)',marginBottom:20}}>Pages</h4>
            <ul style={{listStyle:'none'}}>
              {[['Home','Landing Page.html'],['Team','Team.html'],['About','About.html'],['Guides','Guides.html'],['Handbook','Handbook.html']].map(([p,h]) => (
                <li key={p} style={{marginBottom:12}}>
                  <a href={h} style={{color:'var(--muted)',textDecoration:'none',fontSize:'0.875rem',transition:'color 0.2s'}}
                    onMouseEnter={e=>e.target.style.color='var(--white)'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>{p}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{fontFamily:'Inter',fontSize:'0.72rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',color:'var(--muted)',marginBottom:20}}>Connect</h4>
            <ul style={{listStyle:'none'}}>
              {[
                ['Contact Us', `mailto:${window.CONTACT_EMAIL}`, false],
                ['Instagram', 'https://www.instagram.com/ftcsaintandrews/', true],
                ['FIRST® Website', 'https://www.firstinspires.org/', true],
              ].map(([label, href, external]) => (
                <li key={label} style={{marginBottom:12}}>
                  <a href={href} {...(external ? {target:'_blank', rel:'noopener noreferrer'} : {})} style={{color:'var(--muted)',textDecoration:'none',fontSize:'0.875rem',transition:'color 0.2s'}}
                    onMouseEnter={e=>e.target.style.color='var(--white)'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{paddingTop:28,borderTop:'1px solid var(--border)',fontSize:'0.76rem',color:'var(--muted)',textAlign:'center',letterSpacing:'0.03em'}}>
          © {new Date().getFullYear()} TaterScots Robotics · Team 641 · FIRST® Tech Challenge
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
