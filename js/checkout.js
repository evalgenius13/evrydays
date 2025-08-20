(function simulateCheckout() {
  const data = JSON.parse(localStorage.getItem('celebrationData') || '{}');
  const pkg = localStorage.getItem('selectedPackage');

  // If user jumps here without data, bounce them back
  if (!data.days || !data.partyDate || !data.birthDate || !pkg) {
    window.location.href = 'products.html';
    return;
  }

  // Simulate processing then redirect
  setTimeout(() => {
    window.location.href = 'confirmation.html';
  }, 1600);
})();
