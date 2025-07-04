
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
  ctx.moveTo(200, 50); // Center of the circle
  ctx.arc(200, 50, 50, 0, Math.PI );
  ctx.moveTo(100, 100); // Top left collar
  ctx.lineTo(150, 50);  // Left sleeve
  ctx.lineTo(250, 50);  // Right sleeve
  ctx.lineTo(300, 100); // Top right collar
  ctx.lineTo(300, 400); // Right side
  ctx.lineTo(100, 400); // Left side
  ctx.lineTo(100, 100);
  ctx.moveTo(250, 50);
  ctx.lineTo(350, 50); 
  ctx.lineTo(350, 100);
  ctx.lineTo(300, 100);
  ctx.moveTo(150, 50);
  ctx.lineTo(50, 50); 
  ctx.lineTo(50, 100);
  ctx.lineTo(100, 100);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// Call this when page loads
drawTshirtOutline();
