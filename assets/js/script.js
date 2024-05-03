
// Nav Bar Fumctions
window.onload = () => {
  const menuButton = document.getElementById("menu-icon");
  const navbar = document.querySelector('.navbar');

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  document.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
};


// Project Scroll Fumctions

document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.querySelector(".project-container");
    const leftScrollButton = document.querySelector(".left-scroll-btn");
    const rightScrollButton = document.querySelector(".right-scroll-btn");

    let scrollAmount = 0;

    leftScrollButton.addEventListener("click", function() {
        scrollAmount += 300; // Adjust scrolling distance as needed
        projectContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });

    rightScrollButton.addEventListener("click", function() {
        scrollAmount -= 300; // Adjust scrolling distance as needed
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        projectContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });
});


// Dark Mode Functions

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', function() {
  if(this.checked) {
    // Apply dark mode styles
    document.documentElement.classList.add('dark');
    // Optionally, you can save the user preference in localStorage
    localStorage.setItem('darkModeEnabled', true);
  } else {
    // Remove dark mode styles
    document.documentElement.classList.remove('dark');
    // Remove the user preference from localStorage
    localStorage.removeItem('darkModeEnabled');
  }
});

// Check if the user previously enabled dark mode
const darkModeEnabled = localStorage.getItem('darkModeEnabled');
if(darkModeEnabled === 'true') {
  darkModeToggle.checked = true;
  document.documentElement.classList.add('dark');
}
