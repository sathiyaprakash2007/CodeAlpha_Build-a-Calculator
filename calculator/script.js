let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* Theme Switch */
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
