document.querySelector('.textblock p').textContent = "This is new text!";
document.addEventListener('DOMContentLoaded', () => {
  const callLink = document.getElementById('call-link');

  callLink.addEventListener('click', function(e) {
    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault(); // Stop default tel: on desktop
      const phoneNumber = this.textContent.trim();

      // Copy phone number to clipboard
      navigator.clipboard.writeText(phoneNumber).then(() => {
        // Create floating notification
        const notification = document.createElement('div');
        notification.textContent = 'Phone number copied!';
        Object.assign(notification.style, {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 20px',
          backgroundColor: '#5b4bff',
          color: '#fff',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
          zIndex: 9999,
          fontFamily: 'sans-serif',
          fontSize: '14px',
        });
        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => notification.remove(), 3000);
      }).catch(err => {
        console.error('Failed to copy number:', err);
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (menuBtn && dropdownMenu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                dropdownMenu.classList.remove('active');
            });
        });
    }
});