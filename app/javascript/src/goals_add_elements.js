let game1 = document.getElementsByClassName('game1');

window.addEventListener('load', function(){
  [...Array(2)].forEach( function() { //宝箱
    let treasureDiv = document.createElement('div');
    let treasureIcon = document.createElement('i');

    //親要素
    treasureDiv.classList.add('treasure');
    
    //子要素
    treasureIcon.classList.add('fa-solid');
    treasureIcon.classList.add('fa-gem');
    treasureIcon.classList.add('fa-5x');

    //親子の結合と配置
    treasureDiv.appendChild(treasureIcon);
    game1[0].appendChild(treasureDiv);

    //位置をランダムに
    let randomX = Math.floor(Math.random() * 90);
    let randomY = Math.floor(Math.random() * 90);
    treasureDiv.style.top = `${randomX}%`;
    treasureDiv.style.left = `${randomY}%`;
  });
});