let game1 = document.getElementsByClassName('game1')

window.addEventListener('load', function(){
  [...Array(50)].forEach( function() {

    //緑色の葉っぱ parent div
    let leafDiv = document.createElement('div');
    leafDiv.classList.add('leaf');
    leafDiv.setAttribute('id', 'l-1');
    
    
    //緑色の葉っぱ child icon
    let leafIcon = document.createElement('i');
    leafIcon.classList.add('fa-brands');
    leafIcon.classList.add('fa-envira');
    leafIcon.classList.add('fa-5x');

    //緑色の葉っぱ 配置
    leafDiv.appendChild(leafIcon);
    game1[0].appendChild(leafDiv);
    
    let randomX = Math.floor(Math.random() * 90);
    let randomY = Math.floor(Math.random() * 90);
    leafDiv.style.top = `${randomX}%`;
    leafDiv.style.left = `${randomY}%`;
  });
});




