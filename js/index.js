$(function(){
	
	//轮播图的轮播
	
	
	//所有图片hover效果
	$("img,.plate_box_content a").hover(function(){
		$(this).stop().animate({opacity: 0.5}, 300, function() {
			$(this).stop().animate({opacity: 0.8}, 300);
		});
	},function(){
		$(this).stop().animate({opacity:1},300);
	})
	
})
