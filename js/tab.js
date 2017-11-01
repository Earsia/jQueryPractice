$(".prod-area1 li").width($(".prod-area1 li .msg").width());
//tab切换效果
$(".option li").on("click",function(){
    var $cur = $(this);
    $cur.addClass("click").siblings().removeClass("click");
    var inx = $(this).index();
	console.log($(this).parents().find(".prod-area1 .wrap").eq(inx));
	$(this).parents().find(".prod-area1 .wrap").siblings().removeClass("active");
	$(this).parents().find(".prod-area1 .wrap").eq(inx).addClass("active");
//种类商品切换

});
//悬停效果
$(".prod-area1 .cover").hover(function(){
	$(this).toggleClass("hover");
});