//葉っぱのドラッグ機能

function draggable(target) {
  target.ontouchstart = function() {
    document.ontouchmove = fingerMove;
  };
  document.onmouseup = function() {
    document.ontouchmove = null;
  };
  function fingerMove(e) {
    target.style.top = e.y + 'px';
    target.style.left = e.x + 'px';
  }
}

const leaves = document.getElementsByClassName('drag');

//ページ読み込み完了を待つ
window.addEventListener('load', function(){

  for(let i = 0; i < leaves.length; i++) {
    draggable(leaves[i]); 
  }

});