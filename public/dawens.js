// dawens.js

// Bouton yo ak textarea yo deja nan index.html
// Sa a ajoute animasyon, feedback copy, ak shortcut klavye

document.addEventListener('DOMContentLoaded', () => {
  // Efè animasyon sou bouton lè hover ak click
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.transition = 'transform 0.2s ease';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'scale(1.05)';
    });
  });

  // Shortcut Ctrl+R pou obfuske kòd la otomatikman
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'r') {
      e.preventDefault();
      // Rele fonksyon obfuscateCode ki defini nan paj la
      if (typeof obfuscateCode === 'function') {
        obfuscateCode();
        alert('⚙️ Code obfuscated with Ctrl+R shortcut!');
      }
    }
  });

  // Ti mesaj "Copied!" lè kopye obfuscated code
  const copyBtn = document.querySelector('button[aria-label="Copy obfuscated code to clipboard"]');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyBtn.textContent = 'Copied! ✅';
      copyBtn.disabled = true;
      setTimeout(() => {
        copyBtn.textContent = '📋 Copy';
        copyBtn.disabled = false;
      }, 1500);
    });
  }

  // Animation ti wotasyon sou toggle dark mode button
  const toggleBtn = document.querySelector('.toggle-mode button');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.style.transition = 'transform 0.3s ease';
      toggleBtn.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        toggleBtn.style.transform = 'rotate(0deg)';
      }, 500);
    });
  }
});
