document.addEventListener("DOMContentLoaded", () => {
  const planButtons = document.querySelectorAll(".select-button");
  const planCards = document.querySelectorAll(".container-cards .card");

  planButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      planButtons.forEach(b => b.classList.remove("active"));
      planCards.forEach(c => c.style.borderColor = "#DDDDDD");
      planCards.forEach(c => c.style.opacity = "1");
      btn.classList.add("active");
      btn.closest(".card").style.borderColor = "#F53838";
    });
  });

  const track = document.querySelector(".container-reviews");
  const slides = Array.from(track.querySelectorAll(".reviews"));
  const prevBtn = document.getElementById("arrow-left");
  const nextBtn = document.getElementById("arrow-right");
  const dots = Array.from(document.querySelectorAll("#points img"));
  let index = 0;
  const slideWidth = slides[0].offsetWidth + 60;

  function renderSlider() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    slides.forEach((s, i) => {
      s.style.borderColor = i === index ? "#F53838" : "#DDDDDD";
    });
    dots.forEach((d, i) => {
      d.src = i === index ? "./img/Union (1).svg" : "./img/Ellipse 172.svg";
    });
  }

  function go(delta) {
    index = (index + delta + slides.length) % slides.length;
    renderSlider();
  }

  prevBtn?.addEventListener("click", () => go(-1));
  nextBtn?.addEventListener("click", () => go(1));
  dots.forEach((d, i) => d.addEventListener("click", () => { index = i; renderSlider(); }));

  renderSlider();
});





