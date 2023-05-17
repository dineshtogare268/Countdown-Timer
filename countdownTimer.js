const endDate = "25 May 2023 07:59:59 PM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) {
    return;
  }

  // convert into Days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  // convert into Minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  // convert into Seconds
  inputs[3].value = Math.floor(diff % 60);
}

// initial call
clock();

setInterval(() => {
  clock(), 1000;
});
