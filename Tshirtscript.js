
const canvas = document.getElementById('tshirt-canvas');
const ctx = canvas.getContext('2d');

function addText() {
  const text = document.getElementById('textInput').value;
  const color = document.getElementById('colorPicker').value;
  ctx.fillStyle = color;
  ctx.font = '30px Arial';
  ctx.fillText(text, 100, 250);
}

function download() {
  const link = document.createElement('a');
  link.download = 'tshirt-design.png';
  link.href = canvas.toDataURL();
  link.click();
}
function drawTshirtOutline() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff"; // Shirt color
  ctx.strokeStyle = "#000000"; // Outline color
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.moveTo(100, 100); // Top left collar
  ctx.lineTo(150, 50);  // Left sleeve
  ctx.lineTo(250, 50);  // Right sleeve
  ctx.lineTo(300, 100); // Top right collar
  ctx.lineTo(300, 400); // Right side
  ctx.lineTo(100, 400); // Left side
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// Call this when page loads
drawTshirtOutline();
