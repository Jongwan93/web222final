const clicks = document.querySelectorAll(".click");
const sections = document.querySelectorAll("section");
const firstTop = sections[0].offsetTop;
const secondTop = sections[1].offsetTop;
const thirdTop = sections[2].offsetTop;
const fourthTop = sections[3].offsetTop;
const fifthTop = sections[4].offsetTop;
const sixthTop = sections[5].offsetTop;

clicks[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};
clicks[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
clicks[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};
clicks[3].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};
clicks[4].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};
clicks[5].onclick = function () {
  window.scroll({ top: sixthTop, behavior: "smooth" });
};

const topicRadio = document.querySelectorAll('input[name="topic"]');
const hourlyRateContainer = document.getElementById("hourlyRateContainer");

topicRadio.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Hiring") {
      hourlyRateContainer.style.display = "block";
    } else {
      hourlyRateContainer.style.display = "none";
    }
  });
});