
$(document).ready(function(){
    
   $(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $(".sunrize").each((i,el) => {
      
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i,el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");    
                }
            });
            
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
        
    });
    
});
});



$('a[href^="#"]').click(function(){
   let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop: $(valHref).offset().top - 0 + "px"});
});

    

    


function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 3000,
				});
			}
		})	
	}

	
        $(function() {
		countup("benefits__number", $(".benefits__number").text());
        });


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

/**
let yorVar1 = prompt ("Введите число соответствующее желаемому типу Сайта 1-Сайт визитка  2-Интернет Магазин");

if (yorVar1 == 1){
    yorVar1 = 0;
    yorVar1 = yorVar1 + 5000;
    
} 
else if (yorVar1 == 2){
    yorVar1 = 0;
    yorVar1 = yorVar1 + 10000;
    
}
else {
   yorVar1 = "Ввдено некоректное значение!";
    
}
    

let yorVar2 = prompt ("Введите число необходимого дизайна  1-простой    2-Динамичный");

if (yorVar2 == 1){
    yorVar1 = 0;
    yorVar1 = 3000;
} 
else if (yorVar2 = 2){
    yorVar2 = 0;
    yorVar2 = 7000;
}
else{
    yorVar2 = "Ввдено некоректное значение!";
    alert (yorVar2);
}

let yorVar3 = prompt ("Требуеться ли адаптивность?  1-Да    2-Нет");

if (yorVar3 == 1){
    yorVar3 = 0;
    yorVar3 = yorVar3 + 5000;
}
else if (yorVar3 == 2){
    yorVar3 = 0;
}
else {
    yorVar3 = "Ввдено некоректное значение!";
    alert (yorVar3);
}

let summ = yorVar1 + yorVar2 + yorVar3 + " Рублей";

alert (summ);**/