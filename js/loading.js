$(".prod-area1 li").width($(".prod-area1 li .msg").width());
// 加载数据
var products = [
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}
];
// 添加标签方法
function addLabel(products) {
	var html ='';
	html += '<li>';
	html +=     '<div class="cover"><a>立即抢购</a></div>';
	html +=     '<div class="msg">';
	html +=         '<img src='+products.img+'>';
	html +=         '<p class="name">'+products.name+'</p>';
    html +=         '<p class="price">'+products.price+'</p>';
    html +=     '</div>';
    html += '</li>';
    return html;
} 

// 绑定点击事件
$(".button").on("click",function(e){
	e.preventDefault();
	$.each(products,function(index,prod){
    	var html =addLabel(prod);
    	console.log(html)
    	$(".prod-area1 ul").append(html);
	});
});

// 悬停效果
$(".prod-area1").on("mouseenter",".cover",function(e){
	console.log(1);
	$(this).addClass("hover");
});
$(".prod-area1").on("mouseleave",".cover",function(e){
	$(this).removeClass("hover");
});