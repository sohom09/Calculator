const display = document.getElementById('display');
const clickSound = document.getElementById('clickSound');

// Handle button press
function press(value) {
  playClick();

  if (value === 'AC' || value === '×') {
    display.value = '';
  } else if (value === '=') {
    try {
      let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
      expression = expression.replace(/%/g, '/100');
      display.value = eval(expression);
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += value;
  }
}

// Sound effect
function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    press(key);
  } else if (key === 'Enter') {
    press('=');
  } else if (key === 'Escape') {
    press('AC');
  } else if (key === 'x' || key === 'X') {
    press('×');
  }
});

// Theme toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
