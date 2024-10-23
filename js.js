$(".upp").click(function (e) { 
    $(this).toggleClass("hidden");
    $(this).parent().find(".dow").toggleClass("hidden");
    $(this).parent().parent().find("p").toggleClass("hidden");
});
$(".dow").click(function (e) { 
    $(this).toggleClass("hidden");
    $(this).parent().find(".upp").toggleClass("hidden");   
    $(this).parent().parent().find("p").toggleClass("hidden");
 
});