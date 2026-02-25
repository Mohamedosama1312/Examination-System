
// ======================== NAV ACTIVE LINK (SCROLL SPY) ========================

/**
 * Mark the given hash (e.g. "#contact") as active on all navbar links.
 * @param {string} hash
 */
function setActiveNav(hash) {
    const normalized = hash && hash.startsWith("#") ? hash : "#about";
    document.querySelectorAll('a.nav-link[href^="#"]').forEach((a) => {
        const isActive = a.getAttribute("href") === normalized;
        a.classList.toggle("is-active", isActive);
        a.classList.toggle("active", isActive);
    });
}

const sections = Array.from(document.querySelectorAll("section[id]"));

// Activate based on current hash on load
setActiveNav(window.location.hash || "#about");

// Update active when user clicks a nav anchor
document.querySelectorAll('a.nav-link[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
        setActiveNav(a.getAttribute("href"));
    });
});

// Scroll-spy via IntersectionObserver
if (sections.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

            if (!visible.length) return;
            const id = visible[0].target.getAttribute("id");
            if (id) setActiveNav(`#${id}`);
        },
        {
            root: null,
            // account for sticky navbar height
            rootMargin: "-40% 0px -55% 0px",
            threshold: [0.1, 0.2, 0.35],
        }
    );

    sections.forEach((section) => observer.observe(section));
}

// Keep active state in sync when hash changes (e.g. back/forward)
window.addEventListener("hashchange", () => {
    setActiveNav(window.location.hash || "#about");
});
