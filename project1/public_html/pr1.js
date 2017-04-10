

       function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
    window.scrollBy(0,((top+100)/-10));
    t = setTimeout('up()',20);
   } else clearTimeout(t);
   return false;
   
  }
///header
var slide_main = 1;
var slide_main2 = 1;
 var timerId; var dots;
 $(document).ready(function(){
     
     ///круговые диаграммы
    var Circle = function(sel){ 
var circles = document.querySelectorAll(sel); 
[].forEach.call(circles,function(el){ 
var valEl_ = parseFloat(el.innerHTML); 
valEl = valEl_*408/100; 
el.innerHTML = '<span class="count_pr">'+valEl_+'</span><svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /></svg>'; 

}); 
}; 
Circle('.circle');
     
     
     
     
     
     $('.td5').click(function () { 
var id= $(this).data("block_5"); 
$('.block_5_hide').hide(); 
$('.block5'+id).show(); 
});
     ///block71 - перекл по круглым кнопкам
    dots = document.querySelectorAll(".dot");
var wrapper = document.querySelector("#wrapper");

var activeDot = 0;
for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.addEventListener('click', setClickedItem, false);
    dot.itemID = i;
}
if(dots[activeDot] !== undefined)
dots[activeDot].classList.add("active");
     
     
     ///block7 -slide_img
        timerId2 = setTimeout(showImg());
       
     
     
    
timerId = setTimeout(getSlide, 3000);
	$("#description li a").click(function(){
              
		var selected = $(this).attr('href');
                $('body').animate({scrollTop: $(selected).offset().top}, 500);
                console.log(selected);
				
		return false;
	});	

      $(".btn_contact").click(function(){
            $('body').animate({scrollTop: $('#contact').offset().top}, 500);
        });

      $(".btn_down").click(function(){
            $('body').animate({scrollTop: $('#contact').offset().top}, 500);
        });


     ///footer
    $(".btn_top").click(function(){
            $('body').animate({scrollTop: $('header').offset().top}, 500);
        });
//////block2 - slider
     $(".btn_right").click(function(){
   clearTimeout(timerId);
   getSlide(); 
   clearTimeout(timerId);
   timerId = setTimeout(getSlide, 5000);
   
     });
    ////
   
   
       
      ///block4

$(".web_design").click(function () {

	var clas_name = $(this).data('name_category');	
        $(".all").hide();

	$("."+ clas_name).show();
    });   
       




$(".btn_left").click(function (){
   console.log("#1");
   
   
   $("#slide" + slide_main).animate({
        left: "100%"
    }, 500);
    
   
    
    
    if(--slide_main < 1){
        slide_main = 3;
    }
    $("#slide" + slide_main).css("left", "-100%");  
    $("#slide" + slide_main ).animate({
        left: 0
    }, 500);
    
    clearTimeout(timerId);
   timerId = setTimeout(getSlide, 5000);
    

 });
  

  
  
  
});
  
  ///2-slider            
               
    function getSlide(){      
  
 timerId = setTimeout(getSlide, 3000);
  $("#slide"+ slide_main).animate({
        left: "-100%"
    }, 500);
    
    if(++slide_main > 3){
        slide_main = 1;
    }
    $("#slide" + slide_main).css("left","100%");
     $("#slide" + slide_main).animate({
        left: 0
    }, 500);
    
    
    
} 
    
 
 //block7 -slider img
     function showImg(){ 
timerId2 = setTimeout(showImg, 3000); 
var delay = 100/4;//різниця зміження для показу 4 блоків 
for(var i = 0; i<6;i++){//робимо цикл тому що нам потрібно двигати всі 6 блоків 
if(++slide_main2 > 6){ 
slide_main2 = 1; 
} 
$(".slider_show_img" + slide_main2).css("left",(i-1)*delay+"%");// дбаємо про те щоб блок був зліва від майбутньої позиції 
$(".slider_show_img" + slide_main2).animate({// зміщуємо блок на наступну позицію 
left: i*delay+"%" 
}, 500); 
} 
slide_main2++; 
}
 
  
  


//block71


function setClickedItem(e) {
    removeActiveDots();

    var clickedDot = e.target;
    
    activeDot = clickedDot.itemID;
     
    changePosition(clickedDot);
}

function removeActiveDots() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    }
function changePosition(dot) {
       
    dot.classList.add("active");

    var position = dot.getAttribute("data-pos");
    wrapper.style.left = position;
}

///3 ув картинки
/*var imgbase = "img/serv.png"; 
function cambiarla() { 
document.getElementById("miniatuyra1").src = "img/serv12";

var img2 = document.getElementById("miniatuyra2");
var style = img2.style;
style.marginLeft = "20px";
}
*/



///block6 timer до данного числа
var cikl = false; //функция выполняется один раз 

window.onscroll = function scroll() { 

var scrollHeight = Math.max( 

document.body.scrollHeight, document.documentElement.scrollHeight, 

document.body.offsetHeight, document.documentElement.offsetHeight, 

document.body.clientHeight, document.documentElement.clientHeight 

); //получаю высоту страницы 

var scrollTop = window.pageYOffset || document.documentElement.scrollTop; //получаю цифру, на сколько прокручин элемент 

var scrollTopElemParent = $('.category_header').height(); //высота header 

var scrollTopElem = $('.shad4').offset(); //высота от header до нужного мне блока $('#promos') 
var end=[1600,3200,4600,5600]; 
var start = 0;//[0,0,0,0]; 
var loc_val = [0,0,0,0]; 
// начало анимации конец анимации 
var deley=20; 

var elementArray = document.getElementsByClassName('number');
var element = []; 
for(var i =0; i< elementArray.length; i++) { 
element[i] = elementArray[i]; 
} 
//получаем наш селектор 

if (scrollTopElem.top < scrollTop + 400) { // после того как мы докрутили до эелмента начинаем выполнять 

if (!cikl) { 


if (start <= end[0]) { 

var intervlal = setInterval(function () { //увеличиваем значение на 1 каждый1 0,2 сек. 
for(var j = 0; j<4; j++) { 
element[j].innerHTML = loc_val[j]; // записываем число в наш селектор 
loc_val[j] +=parseInt(end[j]*deley/4/3000); 
if (loc_val[j] >= end[j]) 
for(var k = 0; k<4; k++) { 
element[k].innerHTML = end[k]; 
clearInterval(intervlal); 

} 
} 

}, 3000*deley/end); 

}; 

cikl = true; 
} 



}; 


};
    
////form

    

