// alert("heya");
let cnt = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      cnt--;
    } else if (styles.contains("increase")) {
      cnt++;
    } else {
      cnt = 0;
    }

    if (cnt > 0) {
      value.style.color = "green";
    }
    if (cnt < 0) {
      value.style.color = "red";
    }
    if (cnt === 0) {
      value.style.color = "#222";
    }
    value.textContent = cnt;
  });
});
