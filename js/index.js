$(function(){
	// 第一个导航栏
// console.log($("header>.nav>.nav-top>li"))

$('header>.nav>.u1>.li1').mouseover(function(){
	now=$(this).index()
	$('header>.nav>.u1>.li1>#xans'+now+'').stop().slideDown();
});
$('header>.nav>.u1>.li1').mouseout(function(){
	$('header>.nav>.u1>.li1>.u2').stop().slideUp();
});


//第一张显示
 $(".pic li").eq(0).show();
 //鼠标滑过手动切换，淡入淡出
 $("#position li").mouseover(function() {
 $(this).addClass('cur').siblings().removeClass("cur");
 var index = $(this).index();
 i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
 // $(".pic li").eq(index).show().siblings().hide();
 $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
 });
 //自动轮播
 var i=0;
 var timer=setInterval(play,2000);
 //向右切换
 var play=function(){
 i++;
 i = i > 5 ? 0 : i ;
 console.log(i)
 $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
 $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
 }
 //向左切换
 var playLeft=function(){
 i--;
 i = i < 0 ? 5 : i ;
 $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
 $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
 }
 //鼠标移入移出效果
 $("#container").hover(function() {
 clearInterval(timer);
 }, function() {
 timer=setInterval(play,2000);
 });
 //左右点击切换
 $("#prev").click(function(){
 playLeft();
 })
 $("#next").click(function(){
 play();
 })



//第二个导航栏
$('#container>.dh_1>.li_1').mouseover(function(){
	now=$(this).index();
	$('#container>.dh_1>.li_1>#xs'+now+'').stop().fadeIn();

});
$('#container>.dh_1>.li_1').mouseout(function(){
	now=$(this).index()
	$("#container>.dh_1>.li_1>.dh_2").stop().fadeOut();
});
//设置右侧爬梯出现的时候 

$(document).scroll(function(){
      	if ($(document).scrollTop()>1000) {
      		$('#shang').slideDown()
      	}else{
      		$('#shang').slideUp()
      	}
    })
// 设置左侧爬梯出现的时候
$(document).scroll(function(){
      	if ($(document).scrollTop()>600) {
      		$('.elevator').show()
      	}else{
      		$('.elevator').hide()
      	}
    })


});

window.onload=function(){
	var url=document.getElementsByTagName("a");
	console.log(url);
	url.href="./pubilc/shop.html"
		// 滚动轮播
	var box=document.querySelector(".wrap");
	var ul=document.querySelector(".wrap>ul");
	var li=document.getElementsByTagName('.wrap>ul>li');
	console.log(li);
	var span1=document.getElementById('span-1');
	var span2=document.getElementById('span-2');
	var i=0;
	var timer=null;
	var speed=100;
	ul.innerHTML+=ul.innerHTML;
	span1.onclick=function(){
	clearInterval(timer);
		// console.log(ul)
		i++;
		if(i>3){
			i=0;
		};
		
		 bb=-(1255*i);
		
		timer=setInterval(function(){
	// clearInterval(timer);

			var disLeft=ul.offsetLeft-speed;
			if(disLeft<=bb){
				disLeft=bb;
			}else if(disLeft<=-(ul.offsetWidth/2)){
				
				disLeft=0;
			}
			console.log(disLeft)
			ul.style.left=disLeft+"px";

		},30)
	}

// 右侧爬梯
var chat=document.getElementById("chat");
var weichat=document.querySelector(".weichat");
var iphone=document.querySelector("#iphone");
var shouji=document.querySelector(".shouji");

var body=document.body;
console.log(body.scrollHeight);
chat.onmousemove=function(){
	weichat.style.display="block";
};
chat.onmouseout=function(){
	weichat.style.display="none";

}
iphone.onmousemove=function(){
	shouji.style.display="block";
};
iphone.onmouseout=function(){
	shouji.style.display="none";

}
//右侧 返回顶部
 var shang=document.getElementById('shang')
 var l=0;
 var t=0;
 var timer=null;
 console.log(document.body.scrollTop)
 // 返回顶部函数
 play=function(){
	clearInterval(timer);

		l=document.body.scrollTop;
		timer=setInterval(function(){
			l=l+(t-l)/10;
				if(l<=50)
			{
	 			clearInterval(timer);
	 			l=0;

		 	}
			window.scrollTo(0,l)
		},30)
}
	shang.onclick=function()
	{	
	 play()
	}

// 左侧返回顶部
var shangLeft=document.getElementById("shangLeft")
shangLeft.onclick=function(){
	play();
}
// 左侧爬梯

var oUl=document.querySelector(".elevator");
var oLi=oUl.getElementsByTagName("li");
var oneTimer=null;
console.log(oLi);


oLi[0].onclick=function(){
	clearInterval(oneTimer);
	l=document.body.scrollTop;
	oneTimer=setInterval(function(){
		l=l+(t-l)/10;
		if(l<=700){
			clearInterval(oneTimer);
			l=700;

		}
		window.scrollTo(0,l);

	},30)
}
// 左侧爬梯函数封装

toUp=function(s){
	clearInterval(oneTimer);
	l=document.body.scrollTop;
	oneTimer=setInterval(function(){
		if (l>s) {
			l=l+(t-l)/10;
			
			l=s;
			clearInterval(oneTimer);
		}
		if(l<s){
		   l=l+(t+l)/10;
		   
		   l=s;
		clearInterval(oneTimer);
		}
		
		window.scrollTo(0,l);

	},30)
}
oLi[1].onclick=function(){
	
	toUp(1100)
	
};

oLi[2].onclick=function(){
	toUp(1850)
};
oLi[3].onclick=function(){
	toUp(2580)
};
oLi[4].onclick=function(){
	toUp(3306)
};
oLi[5].onclick=function(){
	toUp(4045)
};
oLi[6].onclick=function(){
	toUp(4760)
};
oLi[7].onclick=function(){
	toUp(5508)
};
}
