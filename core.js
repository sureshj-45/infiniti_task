
$(".panel-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".panel-heading").addClass("active");
});

$(".panel-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".panel-heading").removeClass("active");
});


function loadSecondpage() {
    $("#pageOnenav").hide()
    $("#pageTwonav").show()
    $("#firstPage").hide()
    $("#secondPage").show()
    $("#ThirdPage").hide()
    $("#FourthPage").hide()
    $("#pageThreenav").hide()
    $("#pageFourthnav").hide()
    $("#fourthPage").hide()
}

function backTopageOne() {
    $("#pageOnenav").show()
    $("#pageTwonav").hide()
    $("#firstPage").show()
    $("#secondPage").hide()
    $("#headerDiv").css("box-shadow", "0 3px 20px -3px #0000001c")
}

function shoeFilterPage() {
    $("#pageOnenav").hide()
    $("#pageTwonav").hide()
    $("#firstPage").hide()
    $("#secondPage").hide()
    $("#pageThreenav").show()
    $("#ThirdPage").show()
}

function gotoHomepage() {
    $("#pageOnenav").show()
    $("#pageTwonav").hide()
    $("#firstPage").show()
    $("#secondPage").hide()
    $("#pageThreenav").hide()
    $("#ThirdPage").hide()
}

function showfinalPage() {
    $("#pageOnenav").hide()
    $("#pageTwonav").hide()
    $("#firstPage").hide()
    $("#secondPage").hide()
    $("#ThirdPage").hide()
    $("#pageThreenav").hide()
    $("#pageFourthnav").show()
    $("#fourthPage").show()
    $("#headerDiv").css("box-shadow", "none")
}
