gsap.registerPlugin(ScrollTrigger, Draggable);

/* ─── DATA: OFFICERS ────────────────────────────────────
   Edit name, role, emoji per officer.
   To use photos: replace emoji with <img src="..."> markup.
*/
const OFFICERS = [
    { name: 'Alfino', role: 'Ketua Kelas', emoji: '<img src="asset/STRUKTUR/km.png" alt="Foto">' },
    { name: 'Bp Patah Yasin', role: 'Wali Kelas', emoji: '<img src="asset/STRUKTUR/wali_kelas.png" alt="Foto">' },
    { name: 'Fitria', role: 'Wakil KM', emoji: '<img src="asset/STRUKTUR/wakil_km.png" alt="Foto">' },
    { name: 'Regita', role: 'Sekretaris I', emoji: '<img src="asset/STRUKTUR/sek1.png" alt="Foto">' },
    { name: 'Kiran', role: 'Sekretaris II', emoji: '<img src="asset/STRUKTUR/sek2.png" alt="Foto">' },
    { name: 'Nabila', role: 'Bendahara I', emoji: '<img src="asset/STRUKTUR/ben1.png" alt="Foto">' },
    { name: 'Zaskya', role: 'Bendahara II', emoji: '<img src="asset/STRUKTUR/ben2.png" alt="Foto">' },
    { name: 'Windi', role: 'Seksi Olahraga I', emoji: '<img src="asset/STRUKTUR/olahraga1.png" alt="Foto">' },
    { name: 'Zein', role: 'Seksi Olahraga II', emoji: '<img src="asset/STRUKTUR/olahraga2.png" alt="Foto">' },
    { name: 'Wulan', role: 'Seksi Kebersihan I', emoji: '<img src="asset/STRUKTUR/kebersihan1.png" alt="Foto">' },
    { name: 'Sri', role: 'Seksi Kebersihan II', emoji: '<img src="asset/STRUKTUR/kebersihan2.png" alt="Foto">' },
    { name: 'Evita', role: 'Seksi Kemanan I', emoji: '<img src="asset/STRUKTUR/kemanan1.png" alt="Foto">' },
    { name: 'Renita', role: 'Seksi Kemanan II', emoji: '<img src="asset/STRUKTUR/kemanan2.png" alt="Foto">' },
    { name: 'Meli', role: 'Seksi Humas I', emoji: '<img src="asset/STRUKTUR/humas1.png" alt="Foto">' },
    { name: 'Amelia', role: 'Seksi Humas II', emoji: '<img src="asset/STRUKTUR/humas2.png" alt="Foto">' },
];

/* Desktop scatter positions [top%, left%, rotation°]
   Left column: left 1–14%   |   Right column: left 76–90%
   This keeps the center zone (roughly 20–75%) clear for the hero text.
*/
const SCATTER = [
    ['67%', '52%', 6],
    ['12%', '46.7%', 0],
    ['67%', '42%', -6],
    ['18%', '30%', 8],
    ['18%', '65%', -7],
    ['36%', '12%', -8],
    ['36%', '78%', 5],
    ['65%', '15%', -6],
    ['65%', '86%', 10],
    ['10%', '6%', 6],
    ['50%', '66%', 5],
    ['10%', '18%', -10],
    ['10%', '76%', 10],
    ['50%', '26%', -4],
    ['10%', '86%', -5],
];

/* ─── DATA: PIKET ──────────────────────────────────────
   key = getDay() value: 1=Mon … 5=Fri
*/
const PIKET = {
    1: ['Rido Ganteng', 'Evita', 'Asroh', 'Aisyah', 'Alfino', 'Risha', 'Yunisa', 'Nayla'],
    2: ['Arda', 'Amel', 'Rezza', 'Dea', 'Rafi', 'Cantika', 'Zaskya', 'Regita', 'Keyinaa Cantikk❤️'],
    3: ['Farhan', 'Kiran', 'Kustian', 'Nabila', 'Renita', 'Wulan', 'Windi', 'Meli'],
    4: ['EKOLOGI'],
    5: ['Ahyar', 'Zein', 'Faris', 'Early', 'Vina', 'Fitria', 'Mila', 'Livia', 'Fauzan'],
};

/* ─── DATA: LESSON SCHEDULE ────────────────────────────
   Adjust lesson names & times to match your school.
   isBreak:true = styled as break (no lesson content)
*/
const LESSONS = {
    /* SENIN */
    1: [
        { name: 'Upacara', start: '06:30', end: '07:15' },
        { name: 'PJOK', start: '07:15', end: '09:30' },
        { name: '☕ Istirahat I', start: '09:30', end: '09:45', isBreak: true },
        { name: 'Matematika', start: '09:45', end: '10:30' },
        { name: 'Mulok 1', start: '10:30', end: '12:00' },
        { name: '☕ Istirahat II', start: '12:00', end: '12:45', isBreak: true },
        { name: 'Mulok 1', start: '12:45', end: '13:30' },
        { name: 'DPK(Pa Iip)', start: '13:30', end: '15:00' },
    ],
    /* SELASA */
    2: [
        { name: 'WK/BK/PB', start: '06:30', end: '07:15' },
        { name: 'Bahasa Indonesia', start: '07:15', end: '08:45' },
        { name: 'PAIBP', start: '08:45', end: '09:00' },
        { name: '☕ Istirahat I', start: '09:30', end: '09:45', isBreak: true },
        { name: 'PAIBP', start: '09:45', end: '10:30' },
        { name: 'PIPAS', start: '10:30', end: '12:00' },
        { name: '☕ Istirahat II', start: '12:00', end: '12:45', isBreak: true },
        { name: 'PIPAS', start: '12:45', end: '13:30' },
        { name: 'Bahasa Inggris', start: '13:30', end: '15:00' },
    ],
    /* RABU */
    3: [
        { name: 'Matematika', start: '06:30', end: '08:00' },
        { name: 'DPK (Pa Iip)', start: '08:00', end: '09:30' },
        { name: '☕ Istirahat I', start: '09:30', end: '09:45', isBreak: true },
        { name: 'DPK (Bu Yeni)', start: '09:45', end: '12:00' },
        { name: '☕ Istirahat II', start: '12:00', end: '12:45', isBreak: true },
        { name: 'DPK (Bu Yeni)', start: '12:45', end: '13:30' },
        { name: 'Bahasa Inggris', start: '13:30', end: '15:00' },
    ],
    /* KAMIS */
    4: [
        { name: 'DPK (Pa Aldhi)', start: '06:30', end: '09:30' },
        { name: '☕ Istirahat I', start: '09:30', end: '09:45', isBreak: true },
        { name: 'Seni Budaya', start: '09:45', end: '11:15' },
        { name: 'Pendidikan Pancasila(PP)', start: '11:15', end: '12:00' },
        { name: '☕ Istirahat II', start: '12:00', end: '12:45', isBreak: true },
        { name: 'Pendidikan Pancasila(PP)', start: '12:45', end: '13:30' },
        { name: 'Informatika', start: '13:30', end: '15:00' },
    ],
    /* JUMAT */
    5: [
        { name: 'Duha', start: '06:30', end: '07:15' },
        { name: 'Sejarah', start: '07:15', end: '08:45' },
        { name: 'Informatika', start: '08:45', end: '09:00' },
        { name: '☕ Istirahat I', start: '09:30', end: '09:45', isBreak: true },
        { name: 'Informatika', start: '09:45', end: '10:30' },
        { name: 'PIPAS', start: '10:30', end: '12:00' },
        { name: '🕌 Jum\'atan / ☕ Istirahat II', start: '12:00', end: '12:45', isBreak: true },
        { name: 'PIPAS', start: '12:45', end: '13:30' },
        { name: 'Bahasa Indonesia', start: '13:30', end: '15:00' },
    ],
};

/* ─── DATA: GALLERY PHOTOS ─────────────────────────────
   Replace emoji with actual img URLs when ready.
   bg: [gradient start, gradient end]
*/
const GALLERY_DATA = {
    X: [
        { emoji: '<img src="asset/X/foto1.png" alt="Foto">', cap: 'Hari Pertama Sekolah', bg: ['#0077be', '#40E0D0'] },
        { emoji: '<img src="asset/X/foto2.png" alt="Foto">', cap: 'MPLS Seru', bg: ['#005a8e', '#2bb8a9'] },
        { emoji: '<img src="asset/X/foto3.png" alt="Foto">', cap: 'Momen Seru', bg: ['#40E0D0', '#93E9BE'] },
        { emoji: '<img src="asset/X/foto4.png" alt="Foto">', cap: 'Fotbar Sekelas', bg: ['#2bb8a9', '#0077be'] },
        { emoji: '<img src="asset/X/foto5.png" alt="Foto">', cap: 'Fotbar cewe', bg: ['#93E9BE', '#005a8e'] },
        { emoji: '<img src="asset/X/foto6.png" alt="Foto">', cap: 'yalil yalili', bg: ['#FF7B6B', '#FFB347'] },
        { emoji: '<img src="asset/X/foto7.png" alt="Foto">', cap: 'yalil yalili', bg: ['#FFB347', '#FF7B6B'] },
    ],
    XI: [
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'Praktik Industri', bg: ['#2bb8a9', '#005f54'] },
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'Game Dev Project', bg: ['#0077be', '#40E0D0'] },
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'Camping Pramuka', bg: ['#93E9BE', '#2bb8a9'] },
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'App Launch!', bg: ['#40E0D0', '#0077be'] },
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'Juara Hackathon', bg: ['#FF7B6B', '#FF4040'] },
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'Pentas Seni', bg: ['#005f54', '#2bb8a9'] },
        { emoji: '<img src="asset/XI/" alt="Foto">', cap: 'Library Day', bg: ['#005a8e', '#0077be'] },
    ],
    XII: [
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Proyek Akhir', bg: ['#0077be', '#004080'] },
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Persiapan Wisuda', bg: ['#FFB347', '#FF7B6B'] },
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Hari Terakhir Bareng', bg: ['#40E0D0', '#005a8e'] },
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Ujian Kompetensi', bg: ['#2bb8a9', '#40E0D0'] },
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Masa Depan Cerah', bg: ['#FFB347', '#FF8C00'] },
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Alumni Gathering', bg: ['#93E9BE', '#0077be'] },
        { emoji: '<img src="asset/XII/" alt="Foto">', cap: 'Kenangan Indah', bg: ['#FF7B6B', '#2bb8a9'] },
    ],
};

/* ─── HELPERS ────────────────────────────────────────── */
const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const pad = n => String(n).padStart(2, '0');
const t2m = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
function getWIB() {
    const now = new Date();
    return new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 7 * 3600000);
}
const isMob = () => window.innerWidth <= 768;

/* ─── BUBBLES FACTORY ────────────────────────────────── */
function makeBubbles(parent, count, cls = 'bubble') {
    for (let i = 0; i < count; i++) {
        const b = document.createElement('div');
        b.className = cls;
        const sz = Math.random() * 34 + 7;
        b.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random() * 100}%;
      bottom:${Math.random() * 25}%;
      animation-duration:${Math.random() * 9 + 5}s;
      animation-delay:${-Math.random() * 9}s;
      opacity:${Math.random() * 0.4 + 0.08};
    `;
        parent.appendChild(b);
    }
}

/* ─── HERO SETUP ─────────────────────────────────────── */
const heroBg = document.getElementById('heroBg');
makeBubbles(heroBg, 15);

// Seagulls
['☁️', '🐦', '🕊️', '☁️', '🐦', '☁️', '🕊️', '☁️', '☁️', '☁️'].forEach((g, i) => {
    const el = document.createElement('div');
    el.className = 'gull';
    el.textContent = g;
    el.style.cssText = `top:${14 + i * 11}%;animation-duration:${5 + i * 3}s;animation-delay:${-i * 6}s`;
    heroBg.appendChild(el);
});

/* ─── OFFICERS ───────────────────────────────────────── */
const owrap = document.getElementById('officersWrap');
const polaroids = [];
const onMobile = window.innerWidth <= 768;

OFFICERS.forEach((o, i) => {
    const p = SCATTER[i] ?? [`${10 + i * 9}%`, `${4 + i * 10}%`, i % 2 === 0 ? 6 : -6];
    const div = document.createElement('div');
    div.className = 'polaroid';
    div.innerHTML = `<div class="pol-img">${o.emoji}</div>
    <div class="pol-name">${o.name}<br><span class="pol-role">${o.role}</span></div>`;

    // always apply a base rotation so photos appear tilted on mobile too
    div.style.transform = `rotate(${p[2]}deg)`;
    
    div.addEventListener('mouseenter', () =>
        gsap.to(div, { rotation: 0, scale: 1.18, duration: 0.3, ease: 'power2.out', zIndex: 60 }));
    div.addEventListener('mouseleave', () =>
        gsap.to(div, { rotation: p[2], scale: 1, duration: 0.4, ease: 'power2.out', zIndex: i + 1 }));
    if (!onMobile) {
        // Desktop only: set absolute scatter positions as inline styles
        div.style.top = p[0];
        div.style.left = p[1];

    }
    // Mobile: NO inline styles — CSS grid handles layout entirely

    owrap.appendChild(div);
    polaroids.push({ el: div, baseRot: p[2] });
});

// Parallax on scroll (desktop only — never run on mobile)
 if (!onMobile) {
    polaroids.forEach(({ el }, i) => {
        const yV = [-70, -100, -50, -85, -65, -95, -45, -80, -60][i] ?? -70;
        const rV = i % 2 === 0 ? 8 : -8;
        gsap.to(el, {
            y: yV, rotation: `+=${rV}`, ease: 'none',
            scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 2 },
        });
    });
 }

/* ─── SMART SCHEDULE ─────────────────────────────────── */
function updateSchedule() {
    const wib = getWIB();
    const h = wib.getHours(), m = wib.getMinutes(), s = wib.getSeconds();
    const day = wib.getDay(), cur = h * 60 + m;

    document.getElementById('liveClock').textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    document.getElementById('liveDay').textContent = `${DAYS[day]} · WIB`;

    const sch = LESSONS[day];
    if (!sch) {
        document.getElementById('nowName').textContent = '🏖️ Libur ey';
        document.getElementById('nowTime').textContent = 'Full Molor~';
        document.getElementById('nextName').textContent = 'Jadwal Hari Senin';
        document.getElementById('nextTime').textContent = '';
    } else {
        let nowL = null, nxtL = null;
        for (let i = 0; i < sch.length; i++) {
            const s0 = t2m(sch[i].start), e0 = t2m(sch[i].end);
            if (cur >= s0 && cur < e0) { nowL = sch[i]; nxtL = sch[i + 1] || null; break; }
            if (cur < s0 && !nxtL) { nxtL = sch[i]; break; }
        }
        const last = sch[sch.length - 1];
        if (!nowL && cur >= t2m(last.end)) {
            document.getElementById('nowName').textContent = 'Jam selesai';
            document.getElementById('nowTime').textContent = 'Sampai jumpa besok~';
        } else if (!nowL) {
            document.getElementById('nowName').textContent = 'Belum mulai';
            document.getElementById('nowTime').textContent = `Mulai pukul ${sch[0].start} WIB`;
        } else {
            document.getElementById('nowName').textContent = nowL.name;
            document.getElementById('nowTime').textContent = `${nowL.start} – ${nowL.end} WIB`;
        }
        if (nxtL) {
            document.getElementById('nextName').textContent = nxtL.name;
            document.getElementById('nextTime').textContent = `${nxtL.start} – ${nxtL.end} WIB`;
        } else {
            document.getElementById('nextName').textContent = '—';
            document.getElementById('nextTime').textContent = 'Tidak ada lagi';
        }
        // Full schedule
        const fs = document.getElementById('fullSch'); fs.innerHTML = '';
        sch.forEach(L => {
            const active = cur >= t2m(L.start) && cur < t2m(L.end);
            const d = document.createElement('div');
            d.className = `si${L.isBreak ? ' brk' : ''}${active ? ' active' : ''}`;
            d.innerHTML = `<span>${L.name}</span><span class="si-t">${L.start}–${L.end}</span>`;
            fs.appendChild(d);
        });
    }
    // Piket
    document.getElementById('piketDay').textContent = DAYS[day];
    const pl = document.getElementById('piketList'); pl.innerHTML = '';
    (PIKET[day] || ['Libur — tidak ada piket']).forEach(n => {
        const li = document.createElement('li'); li.textContent = n; pl.appendChild(li);
    });
}
updateSchedule();
setInterval(updateSchedule, 1000);

/* ─── DEEP-DIVE SCROLL EFFECT ────────────────────────── */
// Create dive bubbles (hidden until depth > 0)
const diveBubCont = document.getElementById('diveBubbles');
for (let i = 0; i < 22; i++) {
    const b = document.createElement('div'); b.className = 'dbub';
    const sz = Math.random() * 22 + 5;
    b.style.cssText = `
    width:${sz}px;height:${sz}px;
    left:${Math.random() * 100}%;bottom:${Math.random() * 15}%;
    animation-duration:${Math.random() * 10 + 7}s;
    animation-delay:${-Math.random() * 10}s;
    opacity:0;
  `;
    diveBubCont.appendChild(b);
}
const diveBubs = diveBubCont.querySelectorAll('.dbub');

const diveVig = document.getElementById('diveVignette');
const diveBlue = document.getElementById('diveBlue');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

function onScroll() {
    ticking = false;
    const prog = Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);

    // Vignette: darkens edges as you "dive"
    diveVig.style.opacity = prog * 0.78;
    // Blue tint overlay
    diveBlue.style.opacity = prog * 0.55;

    // Body background darkens toward deep ocean
    const rC = Math.round(255 - prog * 240);
    const gC = Math.round(249 - prog * 205);
    const bC = Math.round(240 - prog * 160);
    document.body.style.backgroundColor = `rgb(${rC},${gC},${bC})`;

    // Dive bubbles: appear progressively
    diveBubs.forEach((b, i) => {
        const threshold = (i / diveBubs.length) * 0.25;
        const local = Math.max(0, Math.min(1, (prog - threshold) / 0.75));
        b.style.opacity = String(local * 0.5);
        b.style.animationPlayState = prog > 0.04 ? 'running' : 'paused';
    });

    // Navbar
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}

/* ─── GSAP HERO ENTRANCE ─────────────────────────────── */
gsap.from('#heroCenter', { y: 70, opacity: 0, duration: 1.1, ease: 'power2.out', delay: 0.2 });

/* ─── SCROLL REVEAL ──────────────────────────────────── */
const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        // Stagger siblings
        const siblings = [...(e.target.parentElement?.querySelectorAll('.rv') || [])];
        siblings.forEach((s, i) => setTimeout(() => s.classList.add('on'), i * 90));
        revObs.unobserve(e.target);
    });
}, { threshold: 0.15 });
document.querySelectorAll('.rv').forEach(el => revObs.observe(el));

/* ─── GALLERY OPEN/CLOSE ─────────────────────────────── */

/* Natural wave-drift scatter positions [left%, top%, rotation°]
   Arranged so photos look like they washed ashore — spread evenly
   but with organic offsets. Nothing overlaps on desktop. */
const PHOTO_POS = [
    [3, 4, -9],
    [23, 16, 6],
    [44, 3, -5],
    [63, 20, 9],
    [80, 5, -7],
    [10, 52, 7],
    [52, 48, -8],
];

function openGallery(phase) {
    const page = document.getElementById('galleryPage');
    const canvas = document.getElementById('gpCanvas');
    document.getElementById('gpPhase').textContent = phase;
    canvas.innerHTML = '';

    // Remove old transient elements
    page.querySelectorAll('.gbub,.caustic').forEach(x => x.remove());

    // Add underwater ambience
    makeBubbles(page, 18, 'gbub');
    for (let i = 0; i < 5; i++) {
        const c = document.createElement('div'); c.className = 'caustic';
        const sz = Math.random() * 300 + 160;
        c.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 90}%;top:${Math.random() * 90}%;animation-duration:${Math.random() * 5 + 4}s;animation-delay:${Math.random() * 3}s`;
        page.appendChild(c);
    }

    page.classList.add('open');
    document.body.style.overflow = 'hidden';

    const photos = GALLERY_DATA[phase] || [];
    const mobile = isMob();

    photos.forEach((photo, i) => {
        const div = document.createElement('div');
        div.className = 'gp-photo';

        const pos = PHOTO_POS[i] ?? [5 + i * 12, 5 + i * 9, i % 2 === 0 ? 8 : -8];

        // if (!mobile) {
        //     div.style.cssText = `left:${pos[0]}%;top:${pos[1]}%;transform:rotate(${pos[2]}deg);width:8px;z-index:${i + 2};`;
        // }
        const size = mobile ? '36vw' : '168px';
        div.style.cssText = `left:${pos[0]}%;top:${pos[1]}%;transform:rotate(${pos[2]}deg);width:${size};z-index:${i + 2};`;

        div.innerHTML = `
      <div class="gp-photo-img" style="background:linear-gradient(135deg,${photo.bg[0]},${photo.bg[1]})">${photo.emoji}</div>
      <div class="gp-photo-cap">${photo.cap}</div>
    `;
        canvas.appendChild(div);

        // Entrance: float in from below (wave-washed effect)
        gsap.from(div, {
            y: 90, opacity: 0, scale: 0.72,
            rotation: pos[2] + (Math.random() * 22 - 11),
            duration: 0.68, ease: 'power2.out', delay: i * 0.1,
        });

        // GSAP Draggable (desktop + mobile now)
        Draggable.create(div, {
            type: 'x,y', bounds: canvas, edgeResistance: 0.75,
            onDragStart() {
                // don't scale on mobile to keep size consistent
                if (!isMob()) {
                    gsap.to(this.target, { scale: 1.18, zIndex: 200, duration: 0.2, ease: 'power2.out' });
                }
            },
            onDragEnd() {
                if (!isMob()) {
                    gsap.to(this.target, { scale: 1, duration: 0.35, ease: 'power2.out' });
                }
            },
        });

        // Gentle float (mimics water drift) — runs continuously
        gsap.to(div, {
            y: `+=${Math.random() * 16 + 7}`,
            rotation: `+=${Math.random() * 4 - 2}`,
            duration: Math.random() * 3 + 2.5,
            ease: 'sine.inOut', yoyo: true, repeat: -1,
            delay: Math.random() * 2,
        });

    });

    // Page entrance
    gsap.from(page, { opacity: 0, duration: 0.45, ease: 'power2.out' });
}

function closeGallery() {
    const page = document.getElementById('galleryPage');
    gsap.to(page, {
        opacity: 0, duration: 0.38, ease: 'power2.in', onComplete: () => {
            page.classList.remove('open');
            page.style.opacity = '';
            document.body.style.overflow = '';
        }
    });
}

/* ─── CONTACT ──────────────🕊️──────────────────────────── */
function openContact() {
    document.getElementById('cmodal').classList.add('open');
    gsap.from('.cmbox', { y: 60, opacity: 0, scale: 0.92, duration: 0.48, ease: 'power2.out' });
}
function closeContact() {
    document.getElementById('cmodal').classList.remove('open');
}
function submitForm() {
    const btn = document.getElementById('sendBtn');
    btn.textContent = '🍾 Botol telah dilempar ke Laut. Terima kasih~';
    btn.style.background = 'linear-gradient(90deg,#27ae60,#2ecc71)';
    setTimeout(() => {
        closeContact();
        btn.textContent = 'Kirim ke Pantai!';
        btn.style.background = '';
    }, 2000);
}

/* ─── NAVBAR ─────────────────────────────────────────── */
const ham = document.getElementById('ham');
const navLinks = document.getElementById('navLinks');
ham.addEventListener('click', () => { ham.classList.toggle('open'); navLinks.classList.toggle('open'); });
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); navLinks.classList.remove('open');
}));

/* ─── ESC key closes overlays ────────────────────────── */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeGallery(); closeContact(); }
});