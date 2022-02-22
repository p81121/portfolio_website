$(function(){
    $(".burgar_btn").on("click",function(){
        $(this).next(".rwd_menu").toggleClass("-open");
   });

   $(".rwd_menu li a").click(function(){
       $(".rwd_menu").removeClass("-open")
   })
});

