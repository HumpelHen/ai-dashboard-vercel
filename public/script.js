async function load() {
  const b = await fetch("/api/bubble").then(r => r.json());
  const c = await fetch("/api/crash").then(r => r.json());
  const s = await fetch("/api/stocks").then(r => r.json());

  document.getElementById("bubble").innerHTML =
    "<div class='card'>Bubble Index: " + b.bubbleIndex + "</div>";

  document.getElementById("crash").innerHTML =
    "<div class='card'>Crash Risk: " + c.crashProbability + "%</div>";

  document.getElementById("stocks").innerHTML =
    s.map(e => "<div class='card'>" + e.symbol + ": $" + e.price + "</div>").join("");
}
load();
