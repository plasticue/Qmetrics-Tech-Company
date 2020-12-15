// Boxes
const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");
const thirdBox = document.getElementById("third-box");

// Navigation 
const firstBtn = document.getElementById("first-btn");
const secondBtn = document.getElementById("second-btn");
const thirdBtn = document.getElementById("third-btn");

// First Button
firstBtn.addEventListener("click", function() {
  if(!firstBox.classList.contains("active")) {
     firstBox.classList.add("active");
     firstBtn.classList.add("active-btn");

     secondBox.classList.remove("active");
     secondBtn.classList.remove("active-btn");

     thirdBox.classList.remove("active");
     thirdBtn.classList.remove("active-btn")
  } 
});

// Second Button
secondBtn.addEventListener("click", function() {
  if(!secondBox.classList.contains("active")) {
     secondBox.classList.add("active");
     secondBtn.classList.add("active-btn");

     firstBox.classList.remove("active");
     firstBtn.classList.remove("active-btn");

     thirdBox.classList.remove("active");
     thirdBtn.classList.remove("active-btn");
  } 
});

// Third Button
thirdBtn.addEventListener("click", function() {
  if(!thirdBox.classList.contains("active")) {
     thirdBox.classList.add("active");
     thirdBtn.classList.add("active-btn");

     secondBox.classList.remove("active");
     secondBtn.classList.remove("active-btn");

     firstBox.classList.remove("active");
     firstBtn.classList.remove("active-btn");
  } 
});












