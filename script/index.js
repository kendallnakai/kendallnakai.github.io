function revealCare() {
  var el = document.getElementById("showCare");
  var btn = document.getElementById("revealCare");
  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
    btn.value = "things i care about ↓";
  } else {
    el.style.display = "none";
    btn.value = "things i care about →";
  }
}

function revealJobs() {
  var el = document.getElementById("showJobs");
  var btn = document.getElementById("revealJobs");
  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
    btn.value = "other experiences i've had ↓";
  } else {
    el.style.display = "none";
    btn.value = "other experiences i've had →";
  }
}
