
  window.addEventListener("scroll", function () {
    var footer = document.querySelector(".footer");
    var socialLinks = document.querySelector(".social-links");

    var footerTop = footer.getBoundingClientRect().top;
    var windowBottom = window.innerHeight;

    if (footerTop < windowBottom) {
      socialLinks.classList.add("show");
    } else {
      socialLinks.classList.remove("show");
    }
  });

