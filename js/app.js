
document.addEventListener('DOMContentLoaded', () => {

  
  const yearContainer = document.getElementById('runtime-year');
  if (yearContainer) {
    yearContainer.textContent = new Date().getFullYear();
  }

  
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDropdown = document.getElementById('mobile-dropdown');

  if (menuToggle && mobileDropdown) {

    
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      mobileDropdown.classList.toggle('hidden');

      
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    
    const internalLinks = mobileDropdown.querySelectorAll('a');
    internalLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.add('hidden');

        
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = mobileDropdown.contains(event.target);
      const isClickOnToggleBtn = menuToggle.contains(event.target);

      if (!mobileDropdown.classList.contains('hidden') && !isClickInsideMenu && !isClickOnToggleBtn) {
        mobileDropdown.classList.add('hidden');

        
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }
});