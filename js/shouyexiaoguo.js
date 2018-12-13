
// 选项卡切换
$("#xianshi1").mouseover(function() {
    $(".xiala_1").show()
})

$("#xianshi1").mouseout(function() {
    $(".xiala_1").hide()
})



$("#xianshi2").mouseover(function() {
    $(".xiala_2").show()
})

$("#xianshi2").mouseout(function() {
    $(".xiala_2").hide()
})




$("#xianshi3").mouseover(function() {
    $(".xiala_3").show()
})
$("#xianshi3").mouseout(function() {
    $(".xiala_3").hide()
})

点击回到顶部
$(".lli1").mouseover(function() {
    $(".a1_1").show()
 $(".a1_2").hide()
})
$(".lli1").mouseout(function() {
    $(".a1_1").hide()
 $(".a1_2").show()
})

$(".lli2").mouseover(function() {
    $(".b2_1").show()
 $(".b2_2").hide()
 $(".saoma").show()
})
$(".lli2").mouseout(function() {
    $(".b2_1").hide()
 $(".b2_2").show()
 $(".saoma").hide()
})
$(".lli3").mouseover(function() {
    $(".c3_1").show()
 $(".c3_2").hide()
})
$(".lli3").mouseout(function() {
    $(".c3_1").hide()
 $(".c3_2").show()
})
$(".lli3").click(function(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
})

