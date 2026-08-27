/* ════════════════════════════════════════
   TaterScots — Team Roster (single source of truth)

   Previously duplicated with four different shapes across Cards.jsx,
   Landing Page.html, Team.html, and embed-site/index.html — none of
   which agreed on membership. This is now the only place roster data
   lives; every page reads from window.ROSTER.

   Membership follows the first-name portrait files in assets/team/.
   Senior status is represented by `senior: true`; it is intentionally
   separate from team leadership or role information.
   ════════════════════════════════════════ */

window.ROSTER = [
  {
    id: 'shirley', name: 'Shirley', initials: 'S',
    role: 'Engineer, CAD, Outreach', dept: 'CAD & Build', year: 'Senior',
    senior: true, seasons: 3,
    bio: 'Shirley contributes across engineering, CAD, and outreach.',
    skills: ['CAD', 'Engineering', 'Outreach'],
    photo: 'assets/team/shirley.png',
  },
  {
    id: 'tim', name: 'Tim', initials: 'T',
    role: 'Head Engineer, Coding', dept: 'Programming', year: 'Senior',
    senior: true, seasons: 3,
    bio: 'Tim splits time between build and software, leading engineering and coding efforts.',
    skills: ['Engineering', 'Coding', 'Team Leadership'],
    photo: 'assets/team/tim.png',
  },
  {
    id: 'mia', name: 'Mia', initials: 'M',
    role: 'Coding, Outreach', dept: 'Programming', year: 'Senior',
    senior: true, seasons: 2,
    bio: 'Mia works on coding and outreach.',
    skills: ['Coding', 'Outreach'],
    photo: 'assets/team/mia.png',
  },
  {
    id: 'kiley', name: 'Kiley', initials: 'K',
    role: 'Engineer, CAD', dept: 'CAD & Build', year: 'Senior',
    senior: true, seasons: 2,
    bio: 'Kiley works on engineering and CAD design.',
    skills: ['CAD', 'Engineering'],
    photo: 'assets/team/kiley.png',
  },
  {
    id: 'lex', name: 'Lex', initials: 'L',
    role: 'Student Engineer', dept: 'Build', year: 'Team Member',
    senior: false, seasons: 1,
    bio: 'Lex is a student engineer on the build team.',
    skills: ['Engineering', 'Build'],
    photo: 'assets/team/lex.png',
  },
  {
    id: 'cindy', name: 'Cindy', initials: 'C',
    role: 'Student Engineer', dept: 'Build', year: 'Team Member',
    senior: false, seasons: 1,
    bio: 'Cindy is a student engineer on the build team.',
    skills: ['Engineering', 'Build'],
    photo: 'assets/team/cindy.png',
  },
  {
    id: 'emily', name: 'Emily', initials: 'E',
    role: 'Student Engineer and Coder', dept: 'Programming', year: 'Team Member',
    senior: false, seasons: 1,
    bio: 'Emily works on engineering and coding.',
    skills: ['Engineering', 'Coding'],
    photo: 'assets/team/emily.png',
  },
  {
    id: 'lily', name: 'Lily', initials: 'L',
    role: 'Student Engineer and Coder', dept: 'Programming', year: 'Team Member',
    senior: false, seasons: 1,
    bio: 'Lily works on engineering and coding.',
    skills: ['Engineering', 'Coding'],
    photo: 'assets/team/lily.png',
  },
  {
    id: 'cynthia', name: 'Cynthia', initials: 'C',
    role: 'Team Member', dept: 'Team', year: 'Team Member',
    senior: false, seasons: null,
    bio: 'Cynthia is a member of TaterScots 641.',
    skills: [],
    photo: 'assets/team/cynthia.webp',
  },
  {
    id: 'phoenix', name: 'Phoenix', initials: 'P',
    role: 'Team Member', dept: 'Team', year: 'Team Member',
    senior: false, seasons: null,
    bio: 'Phoenix is a member of TaterScots 641.',
    skills: [],
    photo: 'assets/team/phoenix.webp',
  },
  {
    id: 'mru', name: 'Mr. U', initials: 'U',
    role: 'Mentor', dept: 'Mentor', year: 'Mentor',
    senior: false, seasons: 4,
    bio: 'Mr. U mentors the team, guiding students through the season.',
    skills: ['Mentorship'],
    photo: 'assets/team/mru.png',
  },
];

window.DEPT_COLORS = {
  'Programming': { color: '#4d9fff', rgb: '77,159,255' },
  'CAD & Build': { color: '#ffc53d', rgb: '255,197,61' },
  'Build':       { color: '#ffc53d', rgb: '255,197,61' },
  'Team':        { color: '#9292a0', rgb: '146,146,160' },
  'Mentor':      { color: '#b392f0', rgb: '179,146,240' },
};

window.CONTACT_EMAIL = 'joey.uriarte@saintandrews.net';

/* Canonical site-wide stats — replaces the two disagreeing sets
   (Home's 4-stat bar vs. About's 5-stat banner). */
window.SITE_STATS = [
  { n: 11, s: '', l: 'Team Members', ic: 'users' },
  { n: 19, s: '', l: 'Seasons Played', ic: 'calendar' },
  { n: 34, s: '', l: 'Official Events', ic: 'flag' },
  { n: 8,  s: '', l: 'Awards', ic: 'trophy' },
  { n: 3,  s: '×', l: 'Florida Championships', ic: 'trophy' },
];
