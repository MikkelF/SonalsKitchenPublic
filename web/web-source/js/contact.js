/* contact.js — form validation & submit */
const form       = document.getElementById('contactForm');
const nameEl     = document.getElementById('name');
const emailEl    = document.getElementById('email');
const messageEl  = document.getElementById('message');
const submitBtn  = document.getElementById('submitBtn');
const successBox = document.getElementById('formSuccess');

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function setError(input, errorId, show) {
  input.classList.toggle('error', show);
  document.getElementById(errorId).classList.toggle('show', show);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  if (!nameEl.value.trim())          { setError(nameEl,    'nameError',    true);  valid = false; }
  else                               { setError(nameEl,    'nameError',    false); }

  if (!validateEmail(emailEl.value)) { setError(emailEl,   'emailError',   true);  valid = false; }
  else                               { setError(emailEl,   'emailError',   false); }

  if (!messageEl.value.trim())       { setError(messageEl, 'messageError', true);  valid = false; }
  else                               { setError(messageEl, 'messageError', false); }

  if (!valid) return;

  submitBtn.textContent = 'Sending…';
  submitBtn.disabled    = true;

  /* Replace setTimeout with your real fetch/axios call */
  setTimeout(() => {
    form.reset();
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled    = false;
    successBox.classList.add('show');
    setTimeout(() => successBox.classList.remove('show'), 5000);
  }, 1200);
});
