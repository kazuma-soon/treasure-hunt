window.addEventListener('load', function(){

  const leaves = document.getElementsByClassName('drag');

  for(let i = 0; i < leaves.length; i++) {
    let leaf = leaves[i];
    let hammerLeaf = new Hammer(leaf);
    hammerLeaf.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    
    // 葉っぱの初期位置を取得（不変の値）
    const defaultX = window.innerWidth * parseInt(leaf.style.left) / 100;
    const defaultY = window.innerHeight* parseInt(leaf.style.top)  / 100;

    hammerLeaf.on('pan', function(e) {
      console.log(window.innerWidth * parseInt(leaf.style.top) / 100);
      leaf.style.left = defaultX + e.deltaX + 'px';
      leaf.style.top =  defaultY + e.deltaY + 'px';
    });
  } 
})

////葉っぱのドラッグ機能
//
//function draggable(target) {
//  target.ontouchstart = function() {
//    document.ontouchmove = fingerMove;
//  };
//  document.onmouseup = function() {
//    document.ontouchmove = null;
//  };
//  function fingerMove(e) {
//    target.style.top = e.y + 'px';
//    target.style.left = e.x + 'px';
//  }
//}
//
//const leaves = document.getElementsByClassName('drag');
//
////ページ読み込み完了を待つ
//window.addEventListener('load', function(){
//
//  for(let i = 0; i < leaves.length; i++) {
//    draggable(leaves[i]); 
//  }
//
//});