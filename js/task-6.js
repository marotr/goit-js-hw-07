function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener("click", () => {
  const inputValue = parseInt(input.value);
  if (inputValue >= 1 && inputValue <= 100) {
    boxesDiv.innerHTML = "";
    let size = 30; 
    for (let i = 0; i < inputValue; i++) {
      const box = document.createElement("div");
      box.style.height = size + 'px';
      box.style.width = size + 'px';
      box.style.backgroundColor = getRandomHexColor(); 
      boxesDiv.appendChild(box);
      size += 10; 
    }    
  }
  input.value = ''; 
  
});

destroyButton.addEventListener("click", () => {
  boxesDiv.innerHTML = ""; 
});

