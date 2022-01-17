function revealInfo() {
    let x = document.getElementById("showInfo");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealInfo").value="fun facts →";
    } else {
      x.style.display = "block";
      document.getElementById("revealInfo").value="fun facts ↓";
    }
  }

  function revealCare() {
    let x = document.getElementById("showCare");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealCare").value="things i care about →";
    } else {
      x.style.display = "block";
      document.getElementById("revealCare").value="things i care about ↓";
    }
  }

function revealContact() {
    let x = document.getElementById("showContact");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealContact").value="social links →";
    } else {
      x.style.display = "block";
      document.getElementById("revealContact").value="social links ↓";
    }
  }

  function revealJobs() {
    let x = document.getElementById("showJobs");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealJobs").value="other experience →";
    } else {
      x.style.display = "block";
      document.getElementById("revealJobs").value="other experience ↓";
    }
  }

  function revealNews() {
    let x = document.getElementById("showNews");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealNews").value="what's popping →";
    } else {
      x.style.display = "block";
      document.getElementById("revealNews").value="what's popping ↓";
    }
  }