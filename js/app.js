function menu1() {
  let ele2 = document.querySelector(`.menu-opcoes`);
  let ele1 = document.getElementById('icon');
  ele1.classList.toggle('noClick');
  ele2.classList.toggle('animacao-exibir');
  if(!ele2.classList.contains('animacao-exibir')){
    ele2.setAttribute('style','animation: esconderMenu 500ms;');
  }else{
    ele2.removeAttribute('style');
  }
}
