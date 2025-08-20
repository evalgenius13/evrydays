(function initProducts() {
  const summary = document.getElementById('summaryLine');
  const data = JSON.parse(localStorage.getItem('celebrationData') || '{}');

  if (!data.days || !data.partyDate || !data.birthDate) {
    summary.textContent = 'No celebration data found. Start over to calculate your day.';
    return;
  }

  const nm = nextMilestone(Number(data.days));
  const delta = nm.value - Number(data.days);

  summary.innerHTML = `You’re on day <strong>${Number(data.days).toLocaleString()}</strong> since <strong>${data.birthDate}</strong>. 
  Celebration date: <strong>${data.partyDate}</strong>. 
  Next up: <em>${nm.name}</em> in <strong>${delta.toLocaleString()}</strong> days.`;

  // Wire buttons
  document.querySelectorAll('button[data-package]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkg = btn.getAttribute('data-package');
      localStorage.setItem('selectedPackage', pkg);
      window.location.href = 'checkout.html';
    });
  });
})();
