$(document).ready(function(){
    $(".menu").click(function(){
        $("#sidebar").show();
    })

    $("#sidebar").click(function(){
        $("#sidebar").css("display", "none");
    })

    $("#navbar").click(function(){
        $("#intro").slideUp("3000");
    });

    $("#btn").click(function(){
        $("#navbar").hide(2000);
    })

    $("input").change(function(){

        let type = $(this).val();

        $("h1").text(type);
    })


})