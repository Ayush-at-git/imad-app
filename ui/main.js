console.log('Loaded!');
var element=document.getElementById('main-text');
 element.innerHTML='Hello, Tanmai Sir!';

var img= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
 marginLeft=marginLeft+1;
 img.style.marginLeft=marginLeft+'px';
}
 img.onclick = function () {
    img.style.marginLeft='100px';
var interval=setInterval(moveRight,50);
     
 };