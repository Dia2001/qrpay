/* === Lightbox === */
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');
const lightboxLabel = document.getElementById('lightbox-label');

function openLightbox(src, label) {
  lightboxImg.src      = src;
  lightboxLabel.textContent = label;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

/* attach click-to-zoom on every QR wrapper */
document.querySelectorAll('.qr-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const img   = wrapper.querySelector('.qr-img');
    const card  = wrapper.closest('.card');
    const label = card.querySelector('.card-owner')?.textContent || '';
    openLightbox(img.src, label);
  });
});

/* === Download QR === */
function downloadQR(src, filename) {
  const a = document.createElement('a');
  a.href     = src;
  a.download = filename + '.jpg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* === Copy label (tên chủ TK) === */
function copyText(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>✓</span> Đã copy';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    /* fallback for file:// protocol */
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    btn.classList.add('copied');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>✓</span> Đã copy';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('copied');
    }, 2000);
  });
}
