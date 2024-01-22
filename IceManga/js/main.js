
'use strict';


$(document).ready(function(){     
    $("#screen-mode").click(function(){
        $("body").toggleClass("bg-dark");   
    });

    $(window).scroll(function(){//scroll edildiğinde çalışır
       if($(window).scrollTop()>200){//scrollTop ile scroll değerini alabiliyorduk.
           $(".go-to-top").fadeIn();//gösterdik
       }
       else{
           $(".go-to-top").fadeOut();//sakladık
       }  
    });
    $(".go-to-top").click(function(){//tıklandığında        
      $("html").animate({scrollTop:0},200);//scrollu 0.7 sn de o yaptık
      return false;
    });
}); 
