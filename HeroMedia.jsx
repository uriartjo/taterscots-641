// TaterScots HeroMedia — one deliberate hero visual per page.
//
// Replaces the previous pattern (autoplay video + canvas particles + three
// stacked gradients + dot-grid, repeated with a different unrelated stock
// video on every page). Reads its slot from window.MEDIA:
//   - if a real photo/video URL is set, that image carries the hero alone
//     (one legibility scrim, nothing competing with it — an editorial choice).
//   - until then, a labeled on-brand placeholder panel shows exactly what
//     to shoot/source, with the ambient particle field as the only motion.

function HeroMedia({ slot, accent = 'red' }) {
  const media = (window.MEDIA && window.MEDIA[slot]) || null;
  const hasSrc = media && media.src;
  const glow = accent === 'amber' ? '255,197,61' : '217,43,43';

  return (
    <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
      {!hasSrc && <HeroMotion/>}

      {hasSrc && media.type === 'video' && (
        <div className="hero-media-frame">
          <video autoPlay muted loop playsInline style={{filter:'brightness(0.5) saturate(1.05)'}}>
            <source src={media.src} type="video/mp4"/>
          </video>
        </div>
      )}
      {hasSrc && media.type === 'image' && (
        <div className="hero-media-frame">
          <img src={media.src} alt={media.alt || ''} style={{objectPosition:media.position || 'center',filter:media.filter || 'none'}}/>
        </div>
      )}
      {!hasSrc && media && (
        <div className="hero-placeholder-tag">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>
          <span><b>Image needed:</b> {media.subject} · {media.dims} · set MEDIA.{slot}.src</span>
        </div>
      )}

      {/* Single legibility scrim — replaces the old 2-3 stacked gradients */}
      <div style={{position:'absolute',inset:0,background: hasSrc
        ? `linear-gradient(to bottom, rgba(9,9,11,0.26) 0%, rgba(9,9,11,0.38) 58%, var(--bg) 100%)`
        : `linear-gradient(to bottom, rgba(9,9,11,0.55) 0%, rgba(9,9,11,0.5) 50%, var(--bg) 100%)`,pointerEvents:'none'}}/>
      {hasSrc && <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(9,9,11,0.18) 0%, transparent 70%)',pointerEvents:'none'}}/>}
      <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse 80% 60% at 50% 110%, rgba(${glow},0.16) 0%, transparent 55%)`,pointerEvents:'none'}}/>
    </div>
  );
}

Object.assign(window, { HeroMedia });
