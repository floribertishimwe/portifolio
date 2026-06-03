/**
 * Floribert Portfolio Engine Script Controller
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Synchronize Copyright Layout Calendar Variable
  const yearContainer = document.getElementById('runtime-year');
  if (yearContainer) {
    yearContainer.textContent = new Date().getFullYear();
  }

  // 2. Mobile Nav Dropdown Interactivity Engine Controls
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDropdown = document.getElementById('mobile-dropdown');

  if (menuToggle && mobileDropdown) {

    // Intercept menu press toggles
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      mobileDropdown.classList.toggle('hidden');

      // Swap icon between bars and X
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Auto dismiss menu view once selection takes place
    const internalLinks = mobileDropdown.querySelectorAll('a');
    internalLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.add('hidden');

        // Reset icon back to bars
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    // Auto close window if clicking outside active boundary lines
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = mobileDropdown.contains(event.target);
      const isClickOnToggleBtn = menuToggle.contains(event.target);

      if (!mobileDropdown.classList.contains('hidden') && !isClickInsideMenu && !isClickOnToggleBtn) {
        mobileDropdown.classList.add('hidden');

        // Reset icon back to bars
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }
});