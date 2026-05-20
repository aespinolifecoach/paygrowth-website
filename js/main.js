/* ==========================================
   PayGrowth - ISO Payments Processor
   Main JavaScript
   ========================================== */

(function() {
  'use strict';

  // --- Mobile Navigation ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.header');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks.classList.contains('open')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Header scroll effect ---
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Scroll-triggered animations ---
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  function checkScroll() {
    animateElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  // Initial check
  checkScroll();

  // Throttled scroll listener for animations
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // --- Counter Animation ---
  function animateCounter(element, target, suffix) {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        element.textContent = target + (suffix || '');
        clearInterval(timer);
        return;
      }
      current = Math.round(increment * step);
      element.textContent = current + (suffix || '');
    }, stepDuration);
  }

  // Start counter animation when stats section becomes visible
  const statNumbers = document.querySelectorAll('.hero-stat-number');
  let countersStarted = false;

  function checkCounters() {
    if (countersStarted) return;
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight - 100) {
      countersStarted = true;
      statNumbers.forEach(stat => {
        const text = stat.textContent.trim();
        const match = text.match(/^(\d+[KMB]?)(.*)/);
        if (match) {
          let num = match[1];
          let suffix = '';
          if (num.endsWith('K')) {
            num = parseInt(num) * 1000;
            suffix = 'K+';
          } else if (num.endsWith('M')) {
            num = parseInt(num) * 1000000;
            suffix = 'M+';
          } else if (num.endsWith('B')) {
            num = parseInt(num) * 1000000000;
            suffix = 'B+';
          } else {
            num = parseInt(num);
            suffix = '+';
          }

          const span = stat.querySelector('span') || stat;
          const suffixEl = stat.querySelector('.counter-suffix');
          animateCounter(span, num / 1000, suffix);
        }
      });
    }
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters();

  // --- Contact Form Validation ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'contactName', name: 'Full Name' },
        { id: 'contactEmail', name: 'Email Address' },
        { id: 'contactCompany', name: 'Company Name' },
        { id: 'contactMessage', name: 'Message' }
      ];

      // Reset errors
      document.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
      document.querySelectorAll('.form-input.error, .form-textarea.error').forEach(el => el.classList.remove('error'));

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = input ? input.parentElement.querySelector('.form-error') : null;

        if (!input || !input.value.trim()) {
          valid = false;
          if (input) input.classList.add('error');
          if (error) error.classList.add('visible');
        }

        // Email validation
        if (field.id === 'contactEmail' && input && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            valid = false;
            input.classList.add('error');
            if (error) {
              error.textContent = 'Please enter a valid email address';
              error.classList.add('visible');
            }
          }
        }
      });

      if (valid) {
        const formContent = contactForm.querySelector('.apply-form-card, .contact-form > div:not(.form-success)');
        const successMsg = contactForm.querySelector('.form-success');

        if (formContent) formContent.style.display = 'none';
        if (successMsg) {
          successMsg.classList.add('visible');
          successMsg.style.display = 'block';
        }
      }
    });
  }

  // --- Merchant Application Form (Multi-Step) ---
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    const sections = applyForm.querySelectorAll('.form-section');
    const steps = document.querySelectorAll('.apply-step');
    let currentStep = 0;

    function showStep(index) {
      sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
      });

      steps.forEach((step, i) => {
        step.classList.remove('active', 'completed');
        if (i < index) step.classList.add('completed');
        if (i === index) step.classList.add('active');
      });

      currentStep = index;
    }

    // Next buttons
    applyForm.querySelectorAll('.btn-next').forEach(btn => {
      btn.addEventListener('click', function() {
        const nextStep = parseInt(this.dataset.next);
        if (!isNaN(nextStep) && nextStep < sections.length) {
          // Validate current section fields
          const currentSection = sections[currentStep];
          let valid = true;
          const requiredFields = currentSection.querySelectorAll('[required]');

          requiredFields.forEach(field => {
            const error = field.closest('.form-group').querySelector('.form-error');
            field.classList.remove('error');
            if (error) error.classList.remove('visible');

            if (!field.value.trim()) {
              valid = false;
              field.classList.add('error');
              if (error) error.classList.add('visible');
            }

            if (field.type === 'email' && field.value.trim()) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(field.value.trim())) {
                valid = false;
                field.classList.add('error');
                if (error) {
                  error.textContent = 'Please enter a valid email address';
                  error.classList.add('visible');
                }
              }
            }
          });

          if (valid) {
            showStep(nextStep);
          }
        }
      });
    });

    // Previous buttons
    applyForm.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', function() {
        const prevStep = parseInt(this.dataset.prev);
        if (!isNaN(prevStep) && prevStep >= 0) {
          showStep(prevStep);
        }
      });
    });

    // Final submit
    applyForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate all required fields
      let valid = true;
      document.querySelectorAll('#applyForm [required]').forEach(field => {
        const error = field.closest('.form-group').querySelector('.form-error');
        field.classList.remove('error');
        if (error) error.classList.remove('visible');

        if (!field.value.trim()) {
          valid = false;
          field.classList.add('error');
          if (error) error.classList.add('visible');
        }
      });

      if (valid) {
        const formContent = applyForm.querySelector('.apply-form-card > div:not(.form-success)');
        const successMsg = applyForm.querySelector('.form-success');

        if (formContent) formContent.style.display = 'none';
        if (successMsg) {
          successMsg.classList.add('visible');
          successMsg.style.display = 'block';
        }
      }
    });
  }

  // --- Active nav link based on scroll ---
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // --- Pricing toggle animation ---
  document.querySelectorAll('.pricing-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // If it's a link, let it navigate naturally
      if (this.tagName === 'A') return;

      e.preventDefault();
      const plan = this.closest('.pricing-card').querySelector('.pricing-name').textContent;
      // Scroll to contact section or redirect to apply page
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        // Pre-fill subject
        setTimeout(() => {
          const messageField = document.getElementById('contactMessage');
          if (messageField) {
            messageField.value = `I'm interested in the ${plan} plan. Please contact me with more details.`;
          }
        }, 800);
      }
    });
  });

})();