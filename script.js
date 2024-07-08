// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Get all the panel elements
  const panels = document.querySelectorAll('.panel');

  // Add click event listeners to each panel
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      // Remove the 'active' class from all panels
      panels.forEach(p => p.classList.remove('active'));

      // Add the 'active' class to the clicked panel
      panel.classList.add('active');
    });
  });
});
