const texts = ["Frontend Developer", "Web Designer", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = texts[textIndex];
  const typingEl = document.querySelector(".typing-text");

  if (!isDeleting) {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  setTimeout(type, isDeleting ? 80 : 120);
}
type();
