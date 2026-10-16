/* =========================================================
   PROJECT DATA — edit here to add / change projects
   category: fintech | realtime | business | consumer | backend
   ========================================================= */
const projects = [
  {
    name: 'Sconto', subtitle: 'Student Identity & Discount Platform', icon: '🎓',
    category: ['fintech', 'backend'], featured: true,
    tech: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'M2P', 'Pinelabs', 'Kibana'],
    points: [
      'Developed Sconto Card, Discovery, Categories, KYC and vKYC modules.',
      'Integrated M2P and Pinelabs APIs for card, payment, and validation workflows.',
      'Implemented SSL pinning and root/jailbreak detection.',
      'Managed development, staging, and production API integrations.',
      'Used Kibana and Postman for monitoring and API debugging.',
      'Managed TestFlight/App Store releases and client communication.',
      'Mentored junior developers.'
    ],
    play: 'https://play.google.com/store/apps/details?id=com.sconto&hl=en_IN',
    ios: 'https://apps.apple.com/in/app/sconto-student-lifestyle/id6443493987',
    videoNote: 'The live video-KYC call is left out to protect identity documents.',
    videos: [
      {
        src: 'videos/sconto/card-mpin.mp4', poster: 'videos/sconto/card-mpin.jpg', shape: 'portrait',
        title: 'MPIN login, reset & OTP',
        caption: 'Login with a 4-digit MPIN, MPIN reset with mismatch validation and OTP verification, then the Sconto card dashboard, card settings and support.'
      },
      {
        src: 'videos/sconto/vkyc-process.mp4', poster: 'videos/sconto/vkyc-process.jpg', shape: 'portrait',
        title: 'Video KYC (vKYC) journey',
        caption: 'Starting vKYC from the Sconto card: consent, language and device checks, then the "KYC under review" status and the in-progress screen back in the app.'
      }
    ]
  },
  {
    name: 'Share2Care', subtitle: 'Real-time Caregiver Platform', icon: '💬',
    category: ['realtime'], featured: true,
    tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'Pusher', 'Firebase', 'Sentry'],
    points: [
      'Owned the real-time communication layer using Pusher/WebSockets.',
      'Built reusable Pusher connection management and resolved reconnect, logout/login, profile-switching, and channel lifecycle issues.',
      'Improved Activity Feed performance by reducing unnecessary re-renders and redundant API calls.',
      'Built reusable cross-brand UI components and design tokens.',
      'Added connectivity status UI and Sentry monitoring for real-time errors.',
      'Supported multi-brand Android/iOS builds and client releases.'
    ],
    play: 'https://play.google.com/store/apps/details?id=com.westyorkshire&pli=1',
    ios: 'https://apps.apple.com/in/app/share2care-wyicb/id6743836723',
    videoNote: 'Recorded with test accounts and test data.',
    videos: [
      {
        src: 'videos/share2care/activity-chat.mp4', poster: 'videos/share2care/activity-chat.jpg', shape: 'square',
        title: 'Real-time activity chat & pagination',
        caption: 'Android and iOS side by side: care-circle updates and replies appear instantly on both devices over Pusher/WebSockets, with older messages loaded page by page.'
      },
      {
        src: 'videos/share2care/notification-profile-switch.mp4', poster: 'videos/share2care/notification-profile-switch.jpg', shape: 'portrait',
        title: 'Notification tap → profile switch',
        caption: 'Tapping a notification for another person in the care circle asks to switch profile, then opens the right thread.'
      },
      {
        src: 'videos/share2care/walkthrough-video.mp4', poster: 'videos/share2care/walkthrough-video.jpg', shape: 'portrait',
        title: 'Intro walkthrough video',
        caption: 'The welcome card and walkthrough page playing the intro video, including after signing out and back in with NHS Login.'
      }
    ]
  },
  {
    name: 'Pool Liner Pro', subtitle: 'Pool Warehouse — Quotation App', icon: '🏊',
    category: ['business', 'backend'], featured: true,
    tech: ['React Native', 'Node.js', 'Expo', 'TypeScript', 'Redux Toolkit', 'WordPress API'],
    points: [
      'Built the Pool Liner quotation flow end-to-end, including measurements, patterns, media, signatures, review, and submission.',
      'Extended the app with a Pool Cover workflow using reusable components.',
      'Integrated Node.js and WordPress REST APIs using RTK Query.',
      'Implemented OTP authentication, refresh tokens, secure storage, and device-aware sessions.',
      'Added offline drafts, queued submissions, caching, retry handling, and media compression.',
      'Improved performance using FlashList, lazy loading, and optimized API caching.',
      'Managed Expo upgrades and Android/iOS release workflows.'
    ],
    videoNote: 'Email, phone number and password entry are blurred.',
    videos: [
      {
        src: 'videos/pool-liner-pro/poolcover-quotation.mp4', poster: 'videos/pool-liner-pro/poolcover-quotation.jpg', shape: 'portrait',
        title: 'Switch between Pool Cover & Quotation',
        caption: 'Sign in, then move between the Quotation and Pool Cover services from one home screen: cover list and filters, the step-by-step cover builder with validation, light/dark theme and quotation history.'
      },
      {
        src: 'videos/pool-liner-pro/session-management.mp4', poster: 'videos/pool-liner-pro/session-management.jpg', shape: 'square',
        title: 'Device-aware session management',
        caption: 'Signed in on two devices at once: Manage Sessions lists every active device, signs out one session or all devices, and the other device gets a "Session expired" prompt.'
      }
    ]
  },
  {
    name: 'Cambeo', subtitle: 'Offers & Business Management Platform', icon: '🏷️',
    category: ['business', 'consumer', 'backend'], featured: true,
    tech: ['React Native', 'React.js', 'Node.js', 'MongoDB', 'Firebase', 'Redux'],
    points: [
      'Developed mobile experiences for end users and business users.',
      'Implemented venue maps using MapView, push notifications, and multi-image uploads.',
      'Integrated Firebase Authentication and FCM.',
      'Fixed QR scanner functionality and improved application workflows.',
      'Managed Android/iOS testing, TestFlight, and App Store releases.'
    ],
    play: 'https://play.google.com/store/apps/details?id=com.cambeo&hl=en_IN',
    ios: 'https://apps.apple.com/gb/app/cambeo/id6743071005',
    videoNote: 'Personal details and internal URLs are blurred.',
    videos: [
      {
        src: 'videos/cambeo/google-signin.mp4', poster: 'videos/cambeo/google-signin.jpg', shape: 'portrait',
        title: 'Google Sign-In & onboarding',
        caption: 'Onboarding, location permission, Google Sign-In, notification & food/drink preferences, and profile editing on Android.'
      },
      {
        src: 'videos/cambeo/notification-tap.mp4', poster: 'videos/cambeo/notification-tap.jpg', shape: 'landscape',
        title: 'Push notification → offer',
        caption: 'A business launches an offer from the admin panel, the user receives a push notification, and tapping it opens the offer detail in the app.'
      }
    ]
  },
  {
    name: 'Tempi', subtitle: 'Collaboration & Task Management', icon: '✅',
    category: ['business', 'realtime'], featured: true,
    tech: ['React Native', 'Expo', 'Firebase', 'REST', 'GraphQL', 'Azure DevOps'],
    points: [
      'Led UI modernization across iOS, Android, and Web.',
      'Developed modules including Groups, Tasks, and Folders.',
      'Integrated REST and GraphQL APIs.',
      'Supported Firebase functionality and real-time updates.',
      'Managed alpha/beta builds and participated in debugging and performance optimization.'
    ],
    play: 'https://play.google.com/store/apps/details?id=com.tempi&hl=en_IN&gl=US'
  },
  {
    name: 'Belk', subtitle: 'E-commerce', icon: '🛍️',
    category: ['consumer'], featured: true,
    tech: ['React Native', 'Firebase', 'Dynatrace', 'Firebase Test Lab'],
    points: [
      'Integrated Dynatrace analytics and resolved application bugs.',
      'Used Firebase Test Lab for device/OS compatibility testing.',
      'Supported QA and release-quality improvements.'
    ],
    play: 'https://play.google.com/store/apps/details?id=com.belk.android.belk&hl=en',
    ios: 'https://apps.apple.com/in/app/belk/id673347869'
  },
  {
    name: 'CareSource', subtitle: 'Healthcare Application', icon: '🏥',
    category: ['fintech', 'consumer'],
    tech: ['React Native', 'TypeScript', 'OKTA', 'Firebase Crashlytics', 'CodePush'],
    points: [
      'Integrated OKTA authentication for secure login.',
      'Redesigned member selection, navigation, member details, and settings.',
      'Implemented dynamic role-based navigation and EULA handling.',
      'Integrated Firebase Crashlytics.',
      'Researched and supported CodePush/App Center OTA update workflows.',
      'Created alpha/beta builds and tested APIs across environments.'
    ]
  },
  {
    name: 'StoneX', subtitle: 'Market Intelligence & Trading', icon: '📈',
    category: ['fintech', 'business'],
    tech: ['React Native', 'TypeScript', 'REST APIs', 'Azure DevOps', 'CI/CD'],
    points: [
      'Developed UI improvements across web and mobile applications.',
      'Worked on Offers, Contracts, and Locations modules.',
      'Integrated APIs with front-end functionality.',
      'Maintained CI/CD pipelines using Azure DevOps.',
      'Communicated directly with clients and participated in Agile delivery.'
    ]
  },
  {
    name: 'RCV Pay', subtitle: 'Hospitality Scheduling', icon: '📅',
    category: ['fintech', 'business'],
    tech: ['React Native', 'Laravel', 'MySQL', 'Stripe'],
    points: [
      'Developed authentication, booking, profile, and scheduling workflows.',
      'Integrated REST APIs and Stripe payments.',
      'Supported Android/iOS release workflows and client communication.'
    ]
  },
  {
    name: 'Travel Hotline MVP', subtitle: 'Travel Platform MVP', icon: '✈️',
    category: ['consumer'],
    tech: ['React Native', 'Expo', 'Firebase', 'GitHub Actions', 'Jest'],
    points: [
      'Led initial MVP development and Expo project setup.',
      'Configured Android, iOS, and Web environments.',
      'Integrated Firebase and Jest.',
      'Implemented GitHub Actions CI/CD pipelines.'
    ]
  },
  {
    name: 'Revolt Summit 2022', subtitle: 'Event App', icon: '🎤',
    category: ['consumer'],
    tech: ['React Native', 'Firebase FCM', 'Jest'],
    points: [
      'Developed React Native flows and reusable components.',
      'Integrated push notifications and unit/snapshot testing.',
      'Collaborated directly with U.S.-based clients.'
    ]
  },
  {
    name: 'WaveBites', subtitle: 'Food Delivery', icon: '🍔',
    category: ['consumer'],
    tech: ['React Native', 'GraphQL', 'REST APIs'],
    points: [
      'Developed cart, order, payment, location, restaurant listing, and search functionality.',
      'Integrated GraphQL APIs and collaborated with backend/design teams.'
    ]
  }
];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const storeLinks = p =>
  (p.play ? `<a href="${p.play}" target="_blank" rel="noopener" class="store">▶ Google Play</a>` : '') +
  (p.ios ? `<a href="${p.ios}" target="_blank" rel="noopener" class="store">⌘ App Store</a>` : '');

/* ---------- Render projects ---------- */
const grid = $('#project-grid');
grid.innerHTML = projects.map((p, i) => `
  <article class="card" data-index="${i}" data-category="${p.category.join(' ')}" tabindex="0">
    <div class="card-top">
      <span class="card-icon">${p.icon}</span>
      <h3>${p.name}</h3>
      ${p.play || p.ios ? '<span class="live">● Live</span>' : ''}
    </div>
    <p class="kicker">${p.subtitle}</p>
    <p class="card-desc">${p.points[0]}</p>
    <div class="tags small">${p.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}</div>
    <span class="more">${p.videos ? `<span class="has-video">▶ ${p.videos.length} demo videos</span>` : ''}View details →</span>
  </article>`).join('');

/* ---------- Project filter ---------- */
$('#filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  $$('.filter').forEach(b => b.classList.toggle('active', b === btn));
  const f = btn.dataset.filter;
  $$('.card', grid).forEach(card => {
    const show = f === 'all' || card.dataset.category.split(' ').includes(f);
    card.classList.toggle('hidden', !show);
  });
});

/* ---------- Project modal ---------- */
const modal = $('#modal');
function openModal(i) {
  const p = projects[i];
  $('.modal-box').classList.toggle('wide', !!p.videos);
  $('#modal-content').innerHTML = `
    <span class="card-icon big">${p.icon}</span>
    <h3 id="modal-title">${p.name}</h3>
    <p class="kicker">${p.subtitle}</p>
    <div class="tags small">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    ${p.videos ? `
    <h4>Demo videos</h4>
    <div class="demo-videos${p.videos.every(v => v.shape === 'portrait') ? ' all-portrait' : ''}">${p.videos.map(v => `
      <figure class="demo ${v.shape}">
        <video src="${v.src}" poster="${v.poster}" controls playsinline muted preload="none"></video>
        <figcaption><strong>${v.title}</strong><span>${v.caption}</span></figcaption>
      </figure>`).join('')}
    </div>
    ${p.videoNote ? `<p class="demo-note">${p.videoNote}</p>` : ''}` : ''}
    <h4>What I did</h4>
    <ul>${p.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
    ${p.play || p.ios ? `<div class="links">${storeLinks(p)}</div>` : ''}`;
  // only one demo plays at a time
  $$('#modal-content video').forEach(v => v.addEventListener('play', () =>
    $$('#modal-content video').forEach(o => { if (o !== v) o.pause(); })));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#modal-close').focus();
}
function closeModal() {
  $$('#modal-content video').forEach(v => v.pause());
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
grid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (card) openModal(card.dataset.index);
});
grid.addEventListener('keydown', e => {
  const card = e.target.closest('.card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(card.dataset.index); }
});
$('#modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- Experience tabs ---------- */
$$('.tab').forEach(tab => tab.addEventListener('click', () => {
  $$('.tab').forEach(t => t.classList.toggle('active', t === tab));
  $$('.tab-panel').forEach(p => p.classList.toggle('active', p.id === tab.dataset.tab));
}));

/* ---------- Typing effect ---------- */
const roles = [
  'Senior React Native Developer.',
  'Node.js & MongoDB Developer.',
  'Full-Stack Mobile Engineer.',
  'Mobile Engineer (iOS & Android).',
  'Fintech & Security Specialist.'
];
const typed = $('#typed');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
  typed.textContent = roles[0];
} else {
  let r = 0, c = 0, deleting = false;
  (function type() {
    const word = roles[r];
    typed.textContent = word.slice(0, c);
    if (!deleting && c < word.length) { c++; setTimeout(type, 70); }
    else if (!deleting) { deleting = true; setTimeout(type, 1800); }
    else if (c > 0) { c--; setTimeout(type, 35); }
    else { deleting = false; r = (r + 1) % roles.length; setTimeout(type, 300); }
  })();
}

/* ---------- Animated counters ---------- */
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = (el.dataset.count.split('.')[1] || '').length;
  const suffix = el.dataset.suffix || '';
  const start = performance.now(), dur = 1400;
  (function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    $$('[data-count]', entry.target).forEach(countUp);
    io.unobserve(entry.target);
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => io.observe(el));

/* ---------- Active nav link + progress bar + back-to-top ---------- */
const sections = $$('main section');
const navLinks = $$('#menu a:not(.nav-cv)');
const toTop = $('#to-top');
function onScroll() {
  const y = scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  $('#nav').classList.toggle('scrolled', y > 10);
  toTop.classList.toggle('show', y > 600);
  let current = '';
  sections.forEach(s => { if (y >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => jumpTo(0));

/* ---------- Mobile menu ---------- */
const menuBtn = $('#menu-toggle');
menuBtn.addEventListener('click', () => {
  const open = $('#nav').classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', open);
});
$$('#menu a').forEach(a => a.addEventListener('click', () => {
  $('#nav').classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded', false);
}));

/* ---------- Theme toggle ---------- */
$('#theme-toggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* ---------- Toast message ---------- */
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

$('#year').textContent = new Date().getFullYear();

/* ---------- CV download name: Nidhi_Bhansali_CV_DD-MM-YYYY.pdf ---------- */
$$('.cv-download, #cv-download').forEach(link => link.addEventListener('click', e => {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  e.currentTarget.download = `Nidhi_Bhansali_CV_${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}.pdf`;
}));

/* ---------- Smart in-page navigation ----------
   All in-page links do a quick fade and land directly on the section,
   instead of scrolling past everything in between. */
const NAV_OFFSET = 80;
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  const target = id === '#top' || id === '#' ? document.body : document.querySelector(id);
  if (!target) return;
  e.preventDefault();

  // offsetTop ignores the reveal slide-in transform, so we land in the right place even mid-animation
  const y = id === '#top' || id === '#' ? 0 : target.offsetTop - NAV_OFFSET;

  if (target.classList.contains('reveal')) target.classList.add('visible');
  history.replaceState(null, '', id === '#' ? location.pathname : id);

  jumpTo(y);
});

function jumpTo(y) {
  const root = document.documentElement;
  // Every section link opens the same way: quick fade → land directly on the section
  if (reduceMotion || Math.abs(y - scrollY) < 4) {
    scrollTo({ top: y, behavior: 'instant' });
    return;
  }
  // Long jump: fade out → jump instantly → fade in
  document.body.classList.add('jumping');
  setTimeout(() => {
    root.style.scrollBehavior = 'auto';
    scrollTo({ top: y, behavior: 'instant' });
    requestAnimationFrame(() => { root.style.scrollBehavior = ''; });
    requestAnimationFrame(() => document.body.classList.remove('jumping'));
  }, 160);
}

/* ---------- Cursor spotlight on What I Build + What's Next cards ---------- */
$$('.path-card, .service').forEach(card => card.addEventListener('pointermove', e => {
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
}));


/* ---------- Email chooser ----------
   mailto: links do nothing on computers without a desktop mail app,
   so every email button opens a small "Send email via" chooser instead. */
const mailModal = document.createElement('div');
mailModal.className = 'mail-modal';
mailModal.setAttribute('aria-hidden', 'true');
mailModal.innerHTML = `
  <div class="mail-box" role="dialog" aria-modal="true" aria-labelledby="mail-title">
    <button class="mail-close" aria-label="Close">&times;</button>
    <h3 id="mail-title">Send an email</h3>
    <p class="mail-sub">Choose how you'd like to write to <strong>bhansali.nidhi1997@gmail.com</strong></p>
    <div class="mail-options">
      <a class="mail-opt" data-via="gmail" target="_blank" rel="noopener">
        <span class="mo-icon" style="--c:#ea4335">G</span><span><strong>Gmail</strong><small>Opens in a new tab</small></span>
      </a>
      <a class="mail-opt" data-via="outlook" target="_blank" rel="noopener">
        <span class="mo-icon" style="--c:#0a64d6">O</span><span><strong>Outlook</strong><small>Outlook.com in a new tab</small></span>
      </a>
      <a class="mail-opt" data-via="app">
        <span class="mo-icon" style="--c:#64748b">✉</span><span><strong>Default email app</strong><small>Apple Mail, Outlook desktop, phone mail…</small></span>
      </a>
      <button class="mail-opt" data-via="copy" type="button">
        <span class="mo-icon" style="--c:#16a34a">⧉</span><span><strong>Copy email address</strong><small>Paste it into any email service</small></span>
      </button>
    </div>
  </div>`;
document.body.appendChild(mailModal);

function openMailChooser(href) {
  const url = new URL(href);
  const to = decodeURIComponent(url.pathname);
  const subject = url.searchParams.get('subject') || '';
  const body = url.searchParams.get('body') || '';
  const q = encodeURIComponent;
  $('[data-via="gmail"]', mailModal).href =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${q(to)}&su=${q(subject)}&body=${q(body)}`;
  $('[data-via="outlook"]', mailModal).href =
    `https://outlook.live.com/mail/0/deeplink/compose?to=${q(to)}&subject=${q(subject)}&body=${q(body)}`;
  $('[data-via="app"]', mailModal).href = href;
  $('[data-via="copy"]', mailModal).dataset.email = to;
  mailModal.classList.add('open');
  mailModal.setAttribute('aria-hidden', 'false');
  $('.mail-opt', mailModal).focus();
}
function closeMailChooser() {
  mailModal.classList.remove('open');
  mailModal.setAttribute('aria-hidden', 'true');
}
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="mailto:"]');
  if (!link || link.closest('.mail-modal')) return;
  e.preventDefault();
  openMailChooser(link.href);
});
mailModal.addEventListener('click', async e => {
  if (e.target === mailModal || e.target.closest('.mail-close')) return closeMailChooser();
  const opt = e.target.closest('.mail-opt');
  if (!opt) return;
  if (opt.dataset.via === 'copy') {
    try { await navigator.clipboard.writeText(opt.dataset.email); toast('Email copied to clipboard ✓'); }
    catch { toast(opt.dataset.email); }
  }
  setTimeout(closeMailChooser, 150);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMailChooser(); });
