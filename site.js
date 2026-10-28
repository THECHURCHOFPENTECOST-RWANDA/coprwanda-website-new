document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close menu" : "Menu";
    });
  }

  const banner = document.querySelector(".cookie-banner");
  const accept = document.querySelector("[data-cookie-accept]");
  try {
    if (banner && !localStorage.getItem("copirwa-cookie-notice-dismissed")) {
      banner.style.display = "flex";
    }
    if (accept && banner) {
      accept.addEventListener("click", () => {
        banner.style.display = "none";
        localStorage.setItem("copirwa-cookie-notice-dismissed", "yes");
      });
    }
  } catch (e) {
    if (banner) banner.style.display = "none";
  }

  const searchForm = document.querySelector("[data-site-search]");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const field = searchForm.querySelector("input");
      const term = (field?.value || "").trim().toLowerCase();
      const pages = [
        ["Home","index.html"],["About Us","about.html"],["Our History","history.html"], 
        ["Vision and Mission","vision-mission.html"],["Our Beliefs","beliefs.html"],
        ["Our Leadership","leadership.html"],["Plan a Visit","plan-a-visit.html"],
        ["Church Services","services.html"],["Ministries","ministries.html"],["Events","events.html"],
        ["Sermons","sermons.html"],["Livestream","livestream.html"],["Media Gallery","media-gallery.html"],
        ["News and Announcements","news.html"],["Online Giving","giving.html"],["Contact Us","contact.html"],
        ["Locations and Directions","locations.html"],["Privacy Policy","privacy-policy.html"],
        ["Prayer Requests","prayer-requests.html"],["Testimonies","testimonies.html"],
        ["Membership","membership.html"],["Volunteer and Serve","volunteer.html"],
        ["Small Groups","small-groups.html"],["Our Assemblies","assemblies.html"],
        ["Resources","resources.html"],["FAQ","faq.html"],["Terms of Use","terms.html"]
      ];
      const match = pages.find(([label, href]) => label.toLowerCase().includes(term) || href.toLowerCase().includes(term));
      if (match && term) window.location.href = match[1];
      else window.location.href = "sitemap.html";
    });
  }
});
