const range = document.getElementById('comparison-range');
const after = document.getElementById('comparison-after');
const line = document.getElementById('comparison-line');
function updateComparison() {
  const value = Number(range.value);
  after.style.clipPath = `inset(${value}% 0 0 0)`;
  line.style.top = `${value}%`;
  range.setAttribute('aria-valuetext', `${value}% original above, ${100 - value}% custom below`);
}
range.addEventListener('input', updateComparison);
updateComparison();
