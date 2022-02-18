$(function(){
    $(".burgar_btn").on("click",function(){
        $(this).next(".rwd_menu").toggleClass("-open");
   });
});