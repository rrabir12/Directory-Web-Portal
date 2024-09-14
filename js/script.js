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


// for welcome button
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".welcome .button span");
    const section = document.querySelector(".welcome");

    // Intersection Observer callback function
    const startCounter = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            let target = +counter.innerText.replace(/[^\d]/g, '');  // Extract numbers only
            counter.innerText = '0';
            animateCounter(counter, target);
          });
          observer.disconnect(); // Stop observing after animation
        }
      });
    };

    // Function to animate counter
    const animateCounter = (counter, target) => {
      let current = 0;
      const increment = target / 100; // Adjust for smoother/faster counting

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target; // Set final value
        }
      };

      requestAnimationFrame(updateCounter);
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(startCounter, {
      root: null, // Use viewport
      threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Observe the section
    observer.observe(section);
  });



