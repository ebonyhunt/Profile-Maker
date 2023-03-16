/*CHALLENGE ONE*/
$(".nameButton").click(function(){
    let name = $(".name").val();
    $(".myName").text(name);
});

/*CHALLENGE TWO*/
$(".ageButton").click(function(){
    let age = $(".age").val();
    $(".myAge").text(age);
});

/*CHALLENGE THREE*/

$(".colorButton").click(function(){
    let color = $(".color").val();
    $(".preview").css("background",color);
});

/*CHALLENGE FOUR*/

$(".giraffe").click(function(){
    $(".myAvatar").attr("src","https://megknoll.github.io/images/giraffe.png");
});

$(".lion").click(function(){
    $(".myAvatar").attr("src","https://megknoll.github.io/images/lion.png");
});

$(".rabbit").click(function(){
    $(".myAvatar").attr("src","https://megknoll.github.io/images/rabbit.png");
});