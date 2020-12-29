function revealInfo() {
    let x = document.getElementById("showInfo");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealInfo").value="facts you won't find on my linkedin →";
    } else {
      x.style.display = "block";
      document.getElementById("revealInfo").value="facts you won't find on my linkedin ↓";
    }
  }

  function revealCare() {
    let x = document.getElementById("showCare");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealCare").value="what i care about →";
    } else {
      x.style.display = "block";
      document.getElementById("revealCare").value="what i care about↓";
    }
  }

function revealContact() {
    let x = document.getElementById("showContact");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("revealContact").value="more links →";
    } else {
      x.style.display = "block";
      document.getElementById("revealContact").value="more links ↓";
    }
  }