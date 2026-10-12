# The Drifting Land loading screen

A standalone, responsive loading screen made with plain HTML, CSS, and JavaScript. It does not use external images, libraries, or network requests. Its visual direction is a dark expedition interface with a compass emblem, subtle map-grid details, animated progress, and rotating gameplay tips. It is intentionally not a landscape illustration.

## Preview locally

1. Download and extract `the-drifting-land-loading-screen.zip`.
2. Open `index.html` in a browser.

## Files

- `index.html`: screen structure and text
- `style.css`: colors, layout, responsive styling, and animation
- `script.js`: demo progress, status labels, and rotating tips

## Connect it to the real game's loading system

The included progress is simulated so the screen can be previewed by itself. In your game's loading code, call:

```js
window.setLoadingProgress(0.35); // 35%
window.setLoadingProgress(0.8);  // 80%
window.setLoadingProgress(1);    // 100%
```

The function accepts either a fraction from `0` to `1` or a percentage from `0` to `100`. When integrating it, remove or bypass the demo timer in `script.js` so simulated progress does not compete with actual asset-loading progress.

## Customize

Edit the title and text in `index.html`. Adjust the colors near the top of `style.css` in the `:root` section. Update the gameplay hints in the `tips` array in `script.js`.
