
//レスポンスのhamburger
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  const target = document.getElementById("menu");
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});
//hamburgerここまで


//pcの上下スクロール
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');


//レスポンスのブログ横スクロール
function countScroll(){
  const target = document.getElementById('target');
  const x = target.scrollLeft;
  document.getElementById('output').innerHTML = x;
}