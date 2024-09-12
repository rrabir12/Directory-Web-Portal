document.addEventListener('DOMContentLoaded', function() {
  // Function to handle adding the 'visible' class
  function handleScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer
  let observer = new IntersectionObserver(handleScroll, {
    threshold: 0.1
  });

  // Select all cards and observe them
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
});

