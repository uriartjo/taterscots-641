// TaterScots shared footer — an editorial closing signature for every page.

function Footer({ compact=false }) {
  const pages = [
    ['01', 'Home', 'Landing Page.html'],
    ['02', 'Team', 'Team.html'],
    ['03', 'About', 'About.html'],
    ['04', 'Guides', 'Guides.html'],
    ['05', 'Handbook', 'Handbook.html'],
  ];
  const externalLinks = [
    ['Instagram', 'https://www.instagram.com/ftcsaintandrews/'],
    ['FIRST®', 'https://www.firstinspires.org/'],
  ];

  return (
    <footer className={`site-footer${compact ? ' compact' : ''}`}>
      <div className="site-footer-etch" aria-hidden="true">641</div>

      <div className="site-footer-shell">
        <div className="site-footer-kicker">
          <span className="site-footer-section"><b>05</b> Stay connected</span>
          <span className="site-footer-location">FTC Team 641 · Boca Raton, Florida</span>
        </div>

        {!compact && (
          <div className="site-footer-lead">
            <h2>Student-built.<br/><span>Competition-tested.</span></h2>
            <a className="site-footer-contact" href={`mailto:${window.CONTACT_EMAIL}`} aria-label="Email TaterScots Robotics">
              <span>
                <small>Start a conversation</small>
                Talk to the team
              </span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        )}

        <div className="site-footer-directory">
          <div className="site-footer-identity">
            <img src="1776100755044_TaterScots_E.png" alt="TaterScots Robotics"/>
            <p>Saint Andrew's School<br/>FIRST® Tech Challenge</p>
          </div>

          <nav className="site-footer-links" aria-label="Footer navigation">
            <p className="site-footer-label">Explore</p>
            <ul>
              {pages.map(([index, label, href]) => (
                <li key={label}>
                  <a href={href}><span>{index}</span>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-links">
            <p className="site-footer-label">Elsewhere</p>
            <ul>
              {externalLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}<span className="site-footer-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer-legal">
          <span>© {new Date().getFullYear()} TaterScots Robotics</span>
          <span>Team 641 · Student-built in Boca Raton</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
