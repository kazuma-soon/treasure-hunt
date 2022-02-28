let game1 = document.getElementsByClassName('game1');

window.addEventListener('load', function(){
  [...Array(350)].forEach( function() {
    let randomCondition = Math.floor(Math.random() * 100);
    let leafDiv = document.createElement('div');
    let leafIcon = document.createElement('i');

    if(randomCondition < 33) { //緑葉っぱ生成
      //親要素
      leafDiv.classList.add('green-leaf');
      
      //子要素
      leafIcon.classList.add('fa-brands');
      leafIcon.classList.add('fa-envira');
      leafIcon.classList.add('fa-5x');
    }
    else if(randomCondition < 66) {
      leafDiv.classList.add('yellow-leaf');

      leafIcon.classList.add('fa-solid');
      leafIcon.classList.add('fa-leaf');
      leafIcon.classList.add('fa-5x');
    }
    else { 
      leafDiv.classList.add('red-leaf');

      leafIcon.classList.add('fa-brands');
      leafIcon.classList.add('fa-canadian-maple-leaf');
      leafIcon.classList.add('fa-5x');
    }
    //dragのためのクラス追加
    leafDiv.classList.add('drag');

    //親子の結合と配置
    leafDiv.appendChild(leafIcon);
    game1[0].appendChild(leafDiv);

    //葉っぱの位置をランダムに
    let randomX = Math.floor(Math.random() * 90);
    let randomY = Math.floor(Math.random() * 90);
    leafDiv.style.top = `${randomX}%`;
    leafDiv.style.left = `${randomY}%`;
  });
});





