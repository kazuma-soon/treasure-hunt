//葉っぱのドラッグ機能

function draggable(target) {
  target.onmousedown = function() {
    document.onmousemove = mouseMove;
  };
  document.onmouseup = function() {
    document.onmousemove = null;
  };
  function mouseMove(e) {
    target.style.top = e.y + 'px';
    target.style.left = e.x + 'px';
  }
}

const leaves = document.getElementsByClassName('leaf');
console.log(leaves);

//ページ読み込み完了を待つ
window.addEventListener('load', function(){

  for(let i = 0; i < leaves.length; i++) {
    draggable(leaves[i]); 
  }

});

