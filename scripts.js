/**
 * Main script for portfolio website functionality.
 * Handles:
 * 1. Mobile navigation menu toggle.
 * 2. Theme (dark/light mode) switching with localStorage persistence.
 * 3. Dynamically updating the current year in the footer.
 * 4. Scroll-triggered fade-in animations for content sections.
 */
(function() {
    "use strict";

    /**
     * Mobile Navigation Toggle
     */
    const menuToggle = document.querySelector(".navbar__toggle");
    const navLinks = document.querySelector(".navbar__links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
            document.body.classList.toggle("nav-open");

            // Update ARIA expanded attribute for accessibility
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
        });
    }

    /**
     * Theme Toggler
     */
    const themeToggleBtn = document.getElementById("themeToggle");
    const moonIcon = "<i class='bx bx-moon'></i>";
    const sunIcon = "<i class='bx bx-sun'></i>";

    // Function to set the theme
    const applyTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            if (themeToggleBtn) themeToggleBtn.innerHTML = sunIcon;
        } else {
            document.documentElement.removeAttribute("data-theme");
            if (themeToggleBtn) themeToggleBtn.innerHTML = moonIcon;
        }
    };

    // Check for saved theme in localStorage
    try {
        const storedTheme = localStorage.getItem("theme");
        // Check for user's system preference if no theme is stored
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (storedTheme) {
            applyTheme(storedTheme);
        } else if (prefersDark) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    } catch (err) {
        console.error("Could not access localStorage:", err);
        applyTheme("light"); // Default to light theme
    }

    // Event listener for the theme toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = document.documentElement.hasAttribute("data-theme");
            const newTheme = isDark ? "light" : "dark";
            applyTheme(newTheme);
            try {
                localStorage.setItem("theme", newTheme);
            } catch (err) {
                console.error("Could not save theme to localStorage:", err);
            }
        });
    }

    /**
     * Update Footer Year
     */
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /**
     * Scroll-triggered Fade-in Animations
     */
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.1, // Element is 10% in view
        rootMargin: "0px 0px -50px 0px" // Start animation slightly before it reaches the bottom of the viewport
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                appearOnScroll.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

})();