/* NAV MOBILE */
const ham = document.getElementById('hamBtn');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => mob.classList.toggle('open'));
function closeMobile() { mob.classList.remove('open'); }

/* NAV SCROLL BG */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 40 ? 'rgba(10,10,15,0.98)' : 'rgba(10,10,15,0.85)';
});

/* FADE-UP ON SCROLL */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* SKILL BARS */
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-group').forEach(el => {
  el.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = '0');
  barObs.observe(el);
});

/* CONTACT FORM */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
  btn.style.background = '#4ade80';
  btn.style.color = '#0a0a0f';
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send message';
    btn.style.background = ''; btn.style.color = '';
    e.target.reset();
  }, 3000);
}