export default function smoothScroll() {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");

    const sections = document.querySelectorAll("section[id]");
    let currentIndex = 0;
    const totalSections = sections.length;

    function scrollToNextSection() {
      if (currentIndex < totalSections - 1) {
        currentIndex++;
        sections[currentIndex].scrollIntoView();
      }
    }

    window.addEventListener("mousewheel", function (event) {
      if (event.deltaY > 0) {
        scrollToNextSection();
      }
    });
  });
}