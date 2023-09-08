<!DOCTYPE HTML>>
<html>
 <head>
  <meta charset="utf-8">
  <title>Пратика</title>
 </head>
 <body>
     <style>

     </style>
<a href="#" id="left">←</a>
<a href="#" id="right">→</a>
<div id="slider"></div>
    <script>
 let text = ['text1','max','leka']; 
 let slider=document.querySelector('#slider');
 let i = 0; // внешняя переменная

 slider.innerHTML=text[0]

left.addEventListener('click', function(){ 
    i--;                             
    if(i == -1){
        i = text.length - 1;
    }
    slider.innerHTML=text[i]
 // уменьшаем i на 1
 // и выводим текст с номером i
 clearInterval(timerId); //остановка таймера
});

right.addEventListener('click', function() {
    i++;
    if(i == text.length){
        i = 0;
    }
    slider.innerHTML=text[i]
 // увеличиваем i на 1
 // и выводим текст с номером i
 clearInterval(timerId); //остановка таймера
});

//Таймер слайда
let timerId=setInterval(()=>{
    slider.innerHTML=text[i++];
    i=i%3;
},1000)

    </script>
 </body>
 </html>
