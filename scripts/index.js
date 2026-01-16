const anim = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
});

anim.addEventListener('DOMLoaded', () => {
  document.getElementsByTagName('body')[0].classList.add('show');
});