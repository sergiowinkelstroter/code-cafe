window.addEventListener("scroll", onScroll);
const bntScrollToTop = document.querySelector("#bntScrollToTop");

onScroll();
function onScroll() {
  showBackToTopButtonOnScroll();
}

bntScrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function showBackToTopButtonOnScroll() {
  if (scrollY > 450) {
    bntScrollToTop.classList.add("show");
  } else {
    bntScrollToTop.classList.remove("show");
  }
}
