const category = document.querySelectorAll(".click");
const sections = document.querySelectorAll("section");
const section1 = sections[0].offsetTop;
const section2 = sections[1].offsetTop;
const section3 = sections[2].offsetTop;
const section4 = sections[3].offsetTop;
const section5 = sections[4].offsetTop;
const section6 = sections[5].offsetTop;
//works well for 90% viewpoint in Chrome
category[0].onclick = function () {
  window.scroll({ top: section1, behavior: "smooth" });
};
category[1].onclick = function () {
  window.scroll({ top: section2, behavior: "smooth" });
};
category[2].onclick = function () {
  window.scroll({ top: section3, behavior: "smooth" });
};
category[3].onclick = function () {
  window.scroll({ top: section4, behavior: "smooth" });
};
category[4].onclick = function () {
  window.scroll({ top: section5, behavior: "smooth" });
};
category[5].onclick = function () {
  window.scroll({ top: section6, behavior: "smooth" });
};

const radioQ = document.querySelectorAll('input[name="topic"]');
const hourlyRateContainer = document.getElementById("hourlyRateContainer");

radioQ.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Hiring") {
      hourlyRateContainer.style.display = "block";
    } else {
      hourlyRateContainer.style.display = "none";
    }
  });
});