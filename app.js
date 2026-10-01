'use strict';
const sheets = [...document.querySelectorAll('.sheet')];
const navLinks = [...document.querySelectorAll('.topbar nav a')];
const counter = document.querySelector('#page-count');
const previous = document.querySelector('#prev-page');
const next = document.querySelector('#next-page');
let current = 0;
function updateNavigation() {
  const target = Math.min(window.innerHeight * 0.3, 230);
  let best = Infinity;
  sheets.forEach((sheet, index) => {
    const box = sheet.getBoundingClientRect();
    const distance = box.top <= target && box.bottom > target ? 0 : Math.abs(box.top - target);
    if (distance < best) { best = distance; current = index; }
  });
  counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(sheets.length).padStart(2, '0')}`;
  previous.disabled = current === 0;
  next.disabled = current === sheets.length - 1;
  navLinks.forEach(link => {
    if (link.hash === `#${sheets[current].dataset.project}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
}, { passive: true });
window.addEventListener('resize', updateNavigation);
function navigate(delta) {
  const section = sheets[Math.max(0, Math.min(sheets.length - 1, current + delta))];
  window.location.hash = section.id;
}
previous.addEventListener('click', () => navigate(-1));
next.addEventListener('click', () => navigate(1));
document.querySelector('#print').addEventListener('click', () => window.print());
updateNavigation();

const videoConfig = window.PORTFOLIO?.plcVideo;
if (videoConfig?.src?.trim()) {
  const area = document.querySelector('#plc-media');
  try {
    const url = new URL(videoConfig.src, window.location.href);
    if (!['http:', 'https:', 'file:'].includes(url.protocol)) throw new Error('Unsupported video URL');
    const youtubeHosts = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'];
    let player;
    if (youtubeHosts.includes(url.hostname)) {
      const id = url.hostname === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v') || url.pathname.split('/').pop();
      if (!/^[a-zA-Z0-9_-]{11}$/.test(id || '')) throw new Error('Invalid YouTube video ID');
      player = document.createElement('iframe');
      player.src = `https://www.youtube-nocookie.com/embed/${id}`;
      player.title = videoConfig.title || 'PLC 시연 영상';
      player.allow = 'fullscreen; picture-in-picture; encrypted-media';
      player.allowFullscreen = true;
      player.loading = 'lazy';
      player.referrerPolicy = 'strict-origin-when-cross-origin';
    } else {
      player = document.createElement('video');
      player.src = url.href;
      player.controls = true;
      player.preload = 'metadata';
      player.playsInline = true;
      player.setAttribute('aria-label', videoConfig.title || 'PLC 시연 영상');
      player.addEventListener('error', () => {
        const message = document.createElement('p');
        message.textContent = '영상을 불러올 수 없습니다. 잠시 후 다시 확인해 주세요.';
        message.setAttribute('role', 'status');
        area.replaceChildren(message);
      });
    }
    area.replaceChildren(player);
    if (videoConfig.caption) {
      const caption = document.querySelector('#plc-caption');
      caption.textContent = videoConfig.caption;
      caption.hidden = false;
    }
  } catch {
    document.querySelector('#video-placeholder h3').textContent = '시연 영상 준비 중';
  }
}
