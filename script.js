// Demo loading progress for the standalone screen.
// In the real game, replace this timer with actual asset/world loading progress.
const fill = document.getElementById("progress-fill");
const percent = document.getElementById("percent");
const status = document.getElementById("status");
const substatus = document.getElementById("substatus");
const progressbar = document.getElementById("progressbar");
const tip = document.getElementById("tip");
const tipNumber = document.getElementById("tip-number");

const stages = [
  { at: 0, label: "Preparing expedition", sub: "Mapping the unknown" },
  { at: 22, label: "Charting the frontier", sub: "Tracing nearby regions" },
  { at: 48, label: "Waking the wilderness", sub: "Preparing terrain and foliage" },
  { at: 73, label: "Gathering world details", sub: "Placing landmarks and secrets" },
  { at: 92, label: "Almost ready", sub: "Final checks before arrival" }
];

const tips = [
  "Look for unusual landmarks. They often lead to places missing from every map.",
  "You do not need to explore everything at once. Mark interesting places and return later.",
  "Gather what you need, but leave room in your pack for unexpected discoveries.",
  "High ground can reveal paths, ruins, and routes hidden by the forest.",
  "The safest route is not always the most interesting one."
];

let progress = 0;
let stageIndex = 0;
let tipIndex = 0;

function renderProgress(value) {
  progress = Math.min(100, value);
  fill.style.width = `${progress}%`;
  percent.textContent = `${Math.floor(progress)}%`;
  progressbar.setAttribute("aria-valuenow", String(Math.floor(progress)));

  for (let i = stages.length - 1; i >= 0; i--) {
    if (progress >= stages[i].at) {
      if (stageIndex !== i) {
        stageIndex = i;
        status.textContent = stages[i].label;
        substatus.textContent = stages[i].sub;
      }
      break;
    }
  }

  if (progress >= 100) {
    status.textContent = "Expedition ready";
    substatus.textContent = "Welcome to the Drifting Land";
  }
}

// Smooth, simulated progress for previewing the design.
// It intentionally pauses near the end so the screen does not disappear immediately.
const timer = window.setInterval(() => {
  if (progress < 88) {
    renderProgress(progress + (Math.random() * 2.2 + 0.5));
  } else if (progress < 99) {
    renderProgress(progress + 0.15);
  } else {
    window.clearInterval(timer);
    renderProgress(100);
  }
}, 180);

function rotateTip() {
  tipIndex = (tipIndex + 1) % tips.length;
  tip.textContent = tips[tipIndex];
  tipNumber.textContent = String(tipIndex + 1).padStart(2, "0");
}
window.setInterval(rotateTip, 6500);

// For integration with your actual game loader, call this from your loading code:
// window.setLoadingProgress(0.6) // means 60%
window.setLoadingProgress = (value) => {
  const normalized = value <= 1 ? value * 100 : value;
  window.clearInterval(timer);
  renderProgress(normalized);
};
