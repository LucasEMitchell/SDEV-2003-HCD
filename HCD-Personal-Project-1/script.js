var clicks = 0;
function increase() {
  clicks += 1;
  document.getElementById("counter").innerHTML = clicks;
}
function decrease() {
  if (clicks > 0) {
    clicks -= 1;
    document.getElementById("counter").innerHTML = clicks;
  }
}
