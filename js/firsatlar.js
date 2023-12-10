var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: false,
  },
});
function imageClickHandler1() {
  // Sayfa yönlendirmesi
  window.location.href = "urun-saatler.html";
}

function imageClickHandler2() {
  // Sayfa yönlendirmesi
  window.location.href = "urun-bileklikler.html";
}
function imageClickHandler3() {
  // Sayfa yönlendirmesi
  window.location.href = "urun-yuzukler.html";
}
function imageClickHandler4() {
  // Sayfa yönlendirmesi
  window.location.href = "urun-kolyeler.html";
}
