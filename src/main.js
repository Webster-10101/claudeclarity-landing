import './style.css'

// Email signup form handling
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

      // Simulate API call (replace with actual email service integration)
      // Options: ConvertKit, Buttondown, Mailchimp, or a simple Google Form
      try {
        // For now, just show success after a brief delay
        // TODO: Connect to actual email service
        await new Promise(resolve => setTimeout(resolve, 800));

        // Store locally as backup (for demo purposes)
        const signups = JSON.parse(localStorage.getItem('claudeclarity_signups') || '[]');
        signups.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('claudeclarity_signups', JSON.stringify(signups));

        // Show success
        form.style.display = 'none';
        successMessage.classList.add('show');

      } catch (error) {
        console.error('Signup error:', error);
        // Could add error handling UI here
      } finally {
        submitBtn.classList.remove('loading');
      }
    });
  }
});
