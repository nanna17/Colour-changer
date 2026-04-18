// Generate a random hex color code
function randomHex() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase();
}

// Change background color and display the color code
function changeColor() {
  const color = randomHex();

  // Apply background color to body
  document.body.style.backgroundColor = color;

  // Update color code text
  document.getElementById('colorCode').textContent = color;

  // Update swatch circle color
  document.getElementById('swatch').style.backgroundColor = color;

  // Make the color display visible
  document.getElementById('colorDisplay').classList.add('visible');
}
