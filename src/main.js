import './style.css'

// Email signup form handling with Buttondown
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const emailInput = document.getElementById('emailInput');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = form?.querySelector('button[type="submit"]');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      if (!email) return;

      // Add loading state
      submitBtn.classList.add('loading');

      try {
        // Submit to Buttondown
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email }),
        });

        // Buttondown returns 200 on success
        if (response.ok || response.status === 200) {
          // Show success
          form.style.display = 'none';
          successMessage.classList.add('show');
        } else {
          // If something went wrong, fall back to direct submit
          form.submit();
        }
      } catch (error) {
        // On network error, fall back to direct form submit
        console.error('Signup error:', error);
        form.submit();
      } finally {
        submitBtn.classList.remove('loading');
      }
    });
  }
});
