/**
 * Nestor Plumbing Works - Main JavaScript
 * Handles interactions, animations, and dynamic behaviors
 */

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Smooth scroll to section
 */
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Intersection Observer for animations
 */
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("animate-slide-up");
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });
}

// ===========================
// DOM READY
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  setupIntersectionObserver();

  // Setup mobile menu
  setupMobileMenu();

  // Setup form validation
  setupFormValidation();

  // Setup active nav link
  updateActiveNavLink();
});

// ===========================
// MOBILE MENU (if needed)
// ===========================

function setupMobileMenu() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navMenu = document.querySelector(".navbar-nav");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close menu on link click
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }
}

// ===========================
// FORM VALIDATION
// ===========================

function setupFormValidation() {
  const forms = document.querySelectorAll("[data-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);

      // Validate required fields
      let isValid = true;
      form
        .querySelectorAll("input[required], textarea[required]")
        .forEach((field) => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add("error");
          } else {
            field.classList.remove("error");
          }
        });

      if (isValid) {
        // Simulate form submission
        showFormSuccess(form);
        form.reset();
      }
    });

    // Remove error class on input
    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        if (field.value.trim()) {
          field.classList.remove("error");
        }
      });
    });
  });
}

function showFormSuccess(form) {
  const successMessage = document.createElement("div");
  successMessage.className = "form-success-message";
  successMessage.textContent =
    "Thank you! Your message has been sent. We'll be in touch soon.";
  successMessage.style.cssText = `
    padding: 16px;
    margin-bottom: 16px;
    background-color: rgba(16, 185, 129, 0.1);
    border: 1px solid rgb(16, 185, 129);
    border-radius: 8px;
    color: rgb(16, 185, 129);
    animation: slide-up 400ms ease-out;
  `;

  form.insertBefore(successMessage, form.firstChild);

  setTimeout(() => {
    successMessage.style.animation = "fade-out 400ms ease-out forwards";
    setTimeout(() => successMessage.remove(), 400);
  }, 3000);
}

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

function updateActiveNavLink() {
  const currentLocation = location.pathname;
  const currentPage = currentLocation.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar-nav a").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ===========================
// CALL BUTTON HANDLER
// ===========================

function initiateCall(phone) {
  window.location.href = `tel:${phone}`;
}

function initiateWhatsApp(phone) {
  const message = "Hello! I'd like to inquire about your plumbing services.";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
}

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

window.addEventListener("scroll", () => {
  const scrollToTopBtn = document.querySelector("[data-scroll-to-top]");
  if (scrollToTopBtn) {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.pointerEvents = "auto";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.pointerEvents = "none";
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===========================
// HEADER SCROLL EFFECT
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.style.borderBottomColor = "rgba(51, 51, 51, 0.5)";
    } else {
      navbar.style.borderBottomColor = "rgb(51, 51, 51)";
    }

    lastScrollTop = scrollTop;
  }
});

// ===========================
// DYNAMIC YEAR IN FOOTER
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll("[data-year]");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
});

// Add fade-out animation
const style = document.createElement("style");
style.textContent = `
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .form-input.error,
  .form-textarea.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  .navbar-nav.active {
    display: flex;
  }
`;
document.head.appendChild(style);
