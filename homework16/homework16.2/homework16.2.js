$("#btn1").on('click', function () {
    $(".box")
        .removeClass("triangle")
        .removeAttr("style") 
        .addClass("rectangle")
        .text("");
});

$("#btn2").on('click', function(){
    $(".box")
        .addClass("triangle")
        .css({
            width: "0",
            height: "0",
            backgroundColor: "transparent"
        })
        .text("");
});

let isExpanded = false;

$("#btn3").on('click', function () {
    
    $(".box")
        .removeClass("triangle rectangle")
        .removeAttr("style")
        .css({
            width: isExpanded ? "300px" : "400px",
            height: isExpanded ? "100px" : "400px",
            backgroundColor: "aqua",
            opacity: isExpanded ? "1" : "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.5s ease"
        })
        .text("")
        .animate({ opacity: 1 }, 500);

    isExpanded = !isExpanded;
});

