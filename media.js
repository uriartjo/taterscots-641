/* ════════════════════════════════════════
   TaterScots — Media Config (single source of truth for imagery/video)

   Every hero/section image on the site reads from this file instead of
   a hardcoded URL in a component. To swap in a real photo: change `src`
   for that slot and it takes effect everywhere the slot is used — no
   component edits required.

   SOURCING NOTE: Pexels photos, each reviewed on a contact sheet before
   being wired in below — real, on-topic stand-ins for the mood/subject
   brief per slot. None depict TaterScots or FTC specifically (that
   imagery doesn't exist yet). Swap any of them for the real thing
   whenever the team has actual robot/competition photography — one
   line each, everywhere that slot is used updates automatically.

   Pexels License: free to use, no attribution required.
   ════════════════════════════════════════ */

function pexels(id, w) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

window.MEDIA = {
  HERO_HOME: {
    type: 'image', src: 'hero-home.webp',
    subject: 'Team 641 competing at a FIRST Tech Challenge tournament',
    mood: 'Authentic competition atmosphere, dramatic arena light',
    dims: '1920×1080 (16:9)',
  },
  HERO_ABOUT: {
    type: 'image', src: 'assets/randomPhotos/about-hero-workshop.webp',
    subject: 'TaterScots members building a robot mechanism together in the workshop',
    alt: 'Three TaterScots members collaborating on a robot mechanism at a workshop table',
    mood: 'Candid collaboration with warm workshop detail',
    dims: '2400×1350 (16:9)',
    position: 'center 52%',
    filter: 'saturate(.68) contrast(1.1) brightness(.7)',
  },
  HERO_TEAM: {
    type: 'image', src: 'assets/randomPhotos/team-hero-competition.webp',
    subject: 'TaterScots members together at a FIRST Tech Challenge competition',
    alt: 'Four TaterScots team members together inside a FIRST Tech Challenge competition venue',
    mood: 'Authentic team portrait with dramatic red and blue arena light',
    dims: '2400×1350 (16:9)',
    position: 'center 54%',
    filter: 'saturate(.76) contrast(1.08) brightness(.72)',
  },
  HERO_GUIDES: {
    type: 'image', src: 'assets/randomPhotos/guides-hero-technical.webp',
    subject: 'A TaterScots member working through a technical design on a tablet',
    alt: 'A TaterScots member using a stylus and tablet for technical design beside a laptop and servo',
    mood: 'Hands-on technical learning with warm workshop light',
    dims: '2400×1350 (16:9)',
    position: 'center 52%',
    filter: 'saturate(.62) contrast(1.1) brightness(.68)',
  },
  HERO_HANDBOOK: {
    type: 'image', src: 'assets/randomPhotos/handbook-hero-planning.webp',
    subject: 'TaterScots members reviewing plans together on a tablet',
    alt: 'Two TaterScots members reviewing team material together on a tablet beside a laptop',
    mood: 'Focused, collaborative, and procedural',
    dims: '2400×1350 (16:9)',
    position: 'center 54%',
    filter: 'saturate(.58) contrast(1.1) brightness(.68)',
  },
  SEASON_SPREAD: {
    type: 'image', src: 'season-states.webp',
    subject: 'TaterScots with their robot and medals at the Florida State Championship',
    mood: 'Celebratory, authentic competition moment',
    dims: '1200×900 (4:3)',
  },
  DISCIPLINE_ENGINEERING: {
    type: 'image', src: 'assets/randomPhotos/discipline-engineering.webp',
    subject: 'Team members collaborating around robot parts at the workbench',
    mood: 'Candid build-session energy', dims: '1000×750 (4:3)', position: '56% center',
  },
  DISCIPLINE_PROGRAMMING: {
    type: 'image', src: 'assets/randomPhotos/discipline-programming.webp',
    subject: 'Team members working together on laptops in the robotics lab',
    mood: 'Focused, collaborative programming session', dims: '1000×750 (4:3)', position: '54% center',
  },
  DISCIPLINE_STRATEGY: {
    type: 'image', src: 'assets/randomPhotos/discipline-strategy.webp',
    subject: 'Team members reviewing plans and competition materials',
    mood: 'Quiet planning and analysis', dims: '1000×750 (4:3)', position: 'center 42%',
  },
  DISCIPLINE_OUTREACH: {
    type: 'image', src: 'assets/randomPhotos/discipline-outreach.webp',
    subject: 'TaterScots members gathered beside a team-painted spirit rock',
    mood: 'Welcoming community moment', dims: '1000×750 (4:3)', position: 'center 46%',
  },
  GUIDE_CARD_PROGRAMMING: {
    type: 'image', src: pexels(546819, 800),
    subject: 'Code on screen or controller in hand',
    mood: 'Cool tones, focused', dims: '800×600 (4:3)',
  },
  GUIDE_CARD_ENGINEERING: {
    type: 'image', src: pexels(4508748, 800),
    subject: 'Machined part or drivetrain close-up',
    mood: 'Mechanical, textural', dims: '800×600 (4:3)',
  },
  GUIDE_CARD_TEAM_MANAGEMENT: {
    type: 'image', src: pexels(3184292, 800),
    subject: 'Whiteboard planning or team huddle',
    mood: 'Collaborative, candid', dims: '800×600 (4:3)',
  },
  GUIDE_CARD_SOCIAL_MEDIA: {
    type: 'image', src: pexels(3062541, 800),
    subject: 'Phone filming the robot / content creation',
    mood: 'Bright, energetic', dims: '800×600 (4:3)',
  },
  GUIDE_CARD_SPONSORSHIPS: {
    type: 'image', src: pexels(3182773, 800),
    subject: 'Handshake or pitch meeting, understated',
    mood: 'Professional, warm', dims: '800×600 (4:3)',
  },
};
