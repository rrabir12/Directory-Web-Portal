document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 90) {
      navbar.style.backgroundColor = '#151c26'; // Change to desired color
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
});

      document.addEventListener("DOMContentLoaded", () => {
        const options = {
          threshold: 0.2
        };
  
        const cards = [
          document.getElementById('card1'),
          document.getElementById('card2'),
          document.getElementById('card3'),
          document.getElementById('card4'),
          document.getElementById('card5'),
          document.getElementById('card6'),
          document.getElementById('card7'),
          document.getElementById('card8'),
          document.getElementById('card9'),
          document.getElementById('card10')
        ];
  
        let delay = 0;
  
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
              delay += 200;
              observer.unobserve(entry.target);
            }
          });
        }, options);
  
        cards.forEach(card => {
          observer.observe(card);
        });
      });

      document.addEventListener("DOMContentLoaded", () => {
        const options = {
          threshold: 0.2
        };
  
        const cardps = [
          document.getElementById('cardp1'),
          document.getElementById('cardp2'),
          document.getElementById('cardp3'),
          document.getElementById('cardp4'),
          document.getElementById('cardp5'),
          document.getElementById('cardp6'),
          document.getElementById('cardp7'),
          document.getElementById('cardp8'),
          document.getElementById('cardp9'),
          document.getElementById('cardp10'),
          document.getElementById('cardp11'),
          document.getElementById('cardp12')
        ];
  
        let delay = 0;
  
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
              delay += 200;
              observer.unobserve(entry.target);
            }
          });
        }, options);
  
        cardps.forEach(card => {
          observer.observe(card);
        });
      });

      document.addEventListener("DOMContentLoaded", () => {
        const options = {
          threshold: 0.2
        };
  
        const cardts = [
          document.getElementById('cardt1'),
          document.getElementById('cardt2'),
          document.getElementById('cardt3'),
        ];
  
        let delay = 0;
  
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
              delay += 200;
              observer.unobserve(entry.target);
            }
          });
        }, options);
  
        cardts.forEach(card => {
          observer.observe(card);
        });
      });

      document.addEventListener("DOMContentLoaded", () => {
        const options = {
          threshold: 0.2
        };
  
        const cardbs = [
          document.getElementById('cardb1'),
          document.getElementById('cardb2'),
          document.getElementById('cardb3'),
          document.getElementById('cardb4')
        ];
  
        let delay = 0;
  
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
              delay += 200;
              observer.unobserve(entry.target);
            }
          });
        }, options);
  
        cardbs.forEach(card => {
          observer.observe(card);
        });
      });
   