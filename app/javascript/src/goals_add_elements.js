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
    treasureIcon.classList.add('fa-2x');

    //親子の結合と配置
    treasureDiv.appendChild(treasureIcon);
    game1[0].appendChild(treasureDiv);

    //位置をランダムに
    let randomX = Math.floor(Math.random() * 90);
    let randomY = Math.floor(Math.random() * 90);
    treasureDiv.style.top = `${randomX}%`;
    treasureDiv.style.left = `${randomY}%`;
  });

  [...Array(10)].forEach( function() { //うんこ
    let pooDiv = document.createElement('div');
    let pooIcon = document.createElement('i');

    //親要素
    pooDiv.classList.add('poo');
    
    //子要素
    pooIcon.classList.add('fa-solid');
    pooIcon.classList.add('fa-poo');
    pooIcon.classList.add('fa-2x');

    //親子の結合と配置
    pooDiv.appendChild(pooIcon);
    game1[0].appendChild(pooDiv);

    //位置をランダムに
    let randomX = Math.floor(Math.random() * 90);
    let randomY = Math.floor(Math.random() * 90);
    pooDiv.style.top = `${randomX}%`;
    pooDiv.style.left = `${randomY}%`;
  });
});