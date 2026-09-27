const inputs = ['business', 'email', 'tax'].map(id => document.getElementById(id));
const manualButton = document.getElementById('manual-btn');
const reuseButton = document.getElementById('reuse-btn');
const form = document.getElementById('application');
const complete = document.getElementById('complete');
let mode = 'manual';

function updateProgress() {
  const count = mode === 'reuse' ? 3 : inputs.filter(input => input.value.trim()).length;
  document.getElementById('progress-number').textContent = mode === 'reuse' ? '3 saved details' : `${count} / 3 required`;
  document.getElementById('progress-fill').style.width = `${count / 3 * 100}%`;
}

function chooseMode(nextMode) {
  mode = nextMode;
  const reuse = mode === 'reuse';
  manualButton.classList.toggle('active', !reuse);
  reuseButton.classList.toggle('active', reuse);
  manualButton.setAttribute('aria-pressed', String(!reuse));
  reuseButton.setAttribute('aria-pressed', String(reuse));
  document.getElementById('fields').hidden = reuse;
  document.getElementById('saved-preview').hidden = !reuse;
  document.getElementById('saved-badge').hidden = !reuse;
  document.getElementById('form-title').textContent = reuse ? 'Review your saved details' : 'Tell us about your business';
  document.getElementById('form-help').textContent = reuse ? 'We found your existing seller profile. Check the information below and continue.' : 'These details are already in your seller profile, but this flow asks you to enter them again.';
  document.getElementById('reflection-copy').textContent = 'The original flow functions: a seller can finish it. But repeating information that the system already knows takes time and makes the next step feel less clear. Try both flows to see the difference.';
  document.getElementById('error').textContent = '';
  document.getElementById('step-label').textContent = 'BUSINESS DETAILS · PROTOTYPE STEP';
  inputs.forEach(input => input.classList.remove('invalid'));
  form.hidden = false;
  complete.hidden = true;
  updateProgress();
}

manualButton.addEventListener('click', () => chooseMode('manual'));
reuseButton.addEventListener('click', () => chooseMode('reuse'));
inputs.forEach(input => input.addEventListener('input', () => { input.classList.remove('invalid'); document.getElementById('error').textContent = ''; updateProgress(); }));

form.addEventListener('submit', event => {
  event.preventDefault();
  if (mode === 'manual') {
    const missing = inputs.find(input => !input.value.trim());
    const email = document.getElementById('email');
    const invalidEmail = !missing && !email.checkValidity();
    if (missing || invalidEmail) {
      const target = missing || email;
      target.classList.add('invalid');
      document.getElementById('error').textContent = missing ? 'Please complete all three fields.' : 'Please enter a valid email address.';
      target.focus();
      return;
    }
  }
  form.hidden = true;
  complete.hidden = false;
  document.getElementById('step-label').textContent = 'BUSINESS DETAILS COMPLETE';
  document.getElementById('result-copy').textContent = mode === 'reuse'
    ? 'You checked three existing details and continued without retyping them. The system still lets you verify the information.'
    : 'You entered three details that were already in the system. The application works, but the repeated effort belongs to the seller.';
  document.getElementById('reflection-copy').textContent = mode === 'reuse'
    ? 'Reusing data removes repeated typing, but showing the saved details keeps the seller in control. A real system would also need an edit path for outdated information.'
    : 'This version reaches the same result, but asks the seller to repeat information already available. The extra step may be easy for a system to implement and still costly for the person using it.';
});

document.getElementById('reset-btn').addEventListener('click', () => {
  chooseMode(mode === 'manual' ? 'reuse' : 'manual');
});
updateProgress();
