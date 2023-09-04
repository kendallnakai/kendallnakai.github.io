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

  function reveal2023() {
    let x = document.getElementById("show2023");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("reveal2023").value="2023 →";
    } else {
      x.style.display = "block";
      document.getElementById("reveal2023").value="2023 ↓";
    }
  }

  function reveal2022() {
    let x = document.getElementById("show2022");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("reveal2022").value="2022 →";
    } else {
      x.style.display = "block";
      document.getElementById("reveal2022").value="2022 ↓";
    }
  }