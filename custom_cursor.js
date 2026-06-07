const dot = document.getElementById("cursorDot");
const glow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  glow.style.left = (e.clientX - 18) + "px";
  glow.style.top = (e.clientY - 18) + "px";
});

// Click pe dot bada ho
window.addEventListener('mousedown', ()=>{
    dot.classList.add('clicked')
})

window.addEventListener('mouseup', ()=>{
    dot.classList.remove('clicked')
})
