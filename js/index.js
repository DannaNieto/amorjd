const title = document.querySelector('.title')
const text = 'Mira amor <3 para ti'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; 
  element.style.animationDelay = `${randomDelay}s`;
});