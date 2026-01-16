const anim = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
});

anim.addEventListener('DOMLoaded', () => {
  console.log('动画播放结束！');
  // 在此处执行后续逻辑，如跳转页面或隐藏容器
  document.getElementsByTagName('body')[0].classList.add('show');
});