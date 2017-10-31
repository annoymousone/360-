window.onload=function(){
	// 放大镜
	var small=document.getElementById('small');
	var move=document.getElementById("move");
	var nav=document.querySelector("nav");
	var li=document.getElementById("ul").getElementsByTagName('li')
	// console.log(nav)

	var small_pic=document.getElementById("small_pic");
	// 鼠标移入的时候显示move
	small.onmousemove=function(evt){
		// alert(888)
		move.style.display="block";
		// 兼容处理
		var e=evt||event;
		// 获取鼠标在视窗的位置pageX pageY;
		var x=e.pageX;
		var y=e.pageY;
		// 在small中移动的位置
		var sl=nav.offsetLeft;
		var st=nav.offsetTop;
		// console.log(x+"+"+y);
		//给鼠标位置重新赋值
		var x=x-sl;
		var y=y-st;
		//是鼠标居中
		move.style.left=x-move.offsetWidth/2+'px';
		move.style.top=y-move.offsetHeight/2+'px';
		//给鼠标坐标重新赋值
		var w=move.offsetWidth/2;
		var h=move.offsetHeight/2;
		var x=x-w;
		var y=y-h;
		//判断左边界
		if(x<=0){
			x=0;
		}
	    //判断右边界
	    if(x>=small.offsetWidth-move.offsetWidth){
	    	x=small.offsetWidth-move.offsetWidth;
	    }
	    //判断上边界
	    if(y<=0){
	    	y=0;

	    }
	    //判断上边界
	    if(y>=small.offsetHeight-move.offsetHeight){
	    	y=small.offsetHeight-move.offsetHeight;
	    }

		move.style.left=x+'px';
		move.style.top=y+'px';
		big.style.display="block";
		// console.log(x+'----'+y);

		//让大盒子里面的图片移动起来
		//移动比例(x/small.offsetwidth)
		//移动比例(y/small.offsetHeight)
		var bLeft=big_pic.offsetWidth*(x/small.offsetWidth)
		var bTop=big_pic.offsetHeight*(y/small.offsetHeight)
		big_pic.style.left=-bLeft+'px';
		big_pic.style.top=-bTop+'PX';
		


		//li点击时small的图片和Big中的图片相等
	for(var i=0;i<li.length;i++){
		li[i].onclick=function(){

		for(var i=0;i<li.length;i++){
			small_pic.src=li[i].firstElementChild.src;
		}
		small_pic.src=this.firstElementChild.src;
		big_pic.src=small_pic.src;
	}
	}
	//鼠标移除的时候影藏move
	small.onmouseout=function(){
		move.style.display="none";
		big.style.display="none"
	}
	
	}

	// 选项卡部分
	var tanchu=document.getElementById('tanchu');
	var mahd=tanchu.querySelector(".ma-hd");
	var tt=mahd.getElementsByTagName("div")
	var oUl=tanchu.getElementsByTagName("ul");
	var c1=tanchu.querySelector(".c1");
	var c2=document.getElementById("c2");
	var c3=document.getElementById("c3");
	var one=c1.getElementsByTagName("li");
	var two=c2.getElementsByTagName("li");
	var tree=c3.getElementsByTagName("li");
	var summaryTory=document.querySelector(".summary-tory")
    

	console.log(summaryTory);
	// console.log(oul);
	// console.log(tanchu);


	/*选项卡*/ 
	for(var i=0;i<tt.length;i++){
		console.log(tt[i]);
		tt[i].index=i;
		tt[i].onclick=function(){
			for(var i=0;i<tt.length;i++){
				tt[i].style.background="#fff";
				tt[i].style.border="1px solid #82c92f";

				oUl[i].style.display="none";
			}
			// tt[this.index].style.background="red";
			tt[this.index].style.border="2px solid #82c92f";

			tt[this.index].style.borderBottom="none";
			
			// tt[this.index].style.top="3px";


			oUl[this.index].style.display="block";

		}
	}
	// 循环省点击的时候
	for(var i=0;i<one.length;i++){
		one[i].index=i;
		one[i].onclick=function(){
			tt[0].innerText=this.innerText;
			console.log(this.innerText)
		}
	}
	// 循环区点击的时候
	for(var i=0;i<two.length;i++){
		two[i].index=i;
		two[i].onclick=function(){
			tt[1].innerText=this.innerText;
			console.log(this.innerText)
		}
	}
	// 循环区点击的时候
	for(var i=0;i<tree.length;i++){
		tree[i].index=i;
		tree[i].onclick=function(){
			tt[2].innerText=this.innerText;
			console.log(this.innerText)
		}
	}
var sj=document.getElementById("sj");
var xk=document.getElementById("xk");
/*点击的时候显示选项卡*/
	xk.onclick=function(e){
		// 阻止时间冒泡
		var evt = e||window.event;
	   evt.stopPropagation?evt.stopPropagation():(evt.cancelBubble=true);//阻止冒泡 
	   evt.preventDefault();//阻止浏览器默认行为，这样链接就不会跳转 
		// tanchu.style.display="block";
		// summaryTory.innerText=""+tt[0].innerText+tt[1].innerText+tt[2].innerText+""
		if(tanchu.style.display==="block"){
		tanchu.style.display="none";
		sj.innerText="▼"


		}else{
		tanchu.style.display="block";
		sj.innerText="▲"

		}
		// summaryTory.innerText=""+tt[0].innerText+tt[1].innerText+tt[2].innerText+""


	}
	// 选样式使边框变色
	var borderOne=document.querySelector("#border-1");
	var oLione=borderOne.getElementsByTagName("li");
	for(var i=0;i<oLione.length;i++){
		oLione[i].index=i;
		oLione[i].onclick=function(){
			for(var i=0;i<oLione.length;i++){
				oLione[i].style.border="1px solid #cdcdcd"
			}
			oLione[this.index].style.border="1px solid red"
		}
		
	}



	var borderTwo=document.querySelector("#border-2");
	var oLitwo=borderTwo.getElementsByTagName("li");
	for(var i=0;i<oLitwo.length;i++){
		oLitwo[i].index=i;
		oLitwo[i].onclick=function(){
			for(var i=0;i<oLitwo.length;i++){
				oLitwo[i].style.border="1px solid #cdcdcd"
			}
			oLitwo[this.index].style.border="1px solid red"
		}
		
	}
// 购物数量
	var jia=document.getElementById("jia");
	var jian=document.getElementById("jian");
	var sum=document.getElementById("sum");
	var num=1;
	sum.innerText=num;
	jia.onclick=function(){
		num++;
		sum.innerText=num;
	};
	jian.onclick=function(){
		num--;
		if(num<=1){
			num=1;
		}
		sum.innerText=num;
	}
// 返回顶部
var shang=document.getElementById('shang')
 var l=0;
 var t=0;
 var timer=null;
	shang.onclick=function()
	{	
		clearInterval(timer)
		
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
	// 
	

}




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

 // 返回顶部显示对应的块
      $('.fanhui>li:eq(0)').mouseover(function(){
      	$('.fanhui>.xh').stop().slideDown();
      	$('.fanhui>.shaomiao').stop().show();
      }).mouseout(function(){
      	$('.fanhui>.xh').stop().slideUp();
      	$('.fanhui>.shaomiao').css("display","none")
      });


      $('.fanhui>li:eq(1)').mouseover(function(){
      	$('.fanhui>.sj').stop().slideDown();
      	$('.fanhui>.shaoma').stop().show();
   
      }).mouseout(function(){
      	$('.fanhui>.sj').stop().slideUp();
      	$('.fanhui>.shaoma').css("display","none")
      
      });

   //滚动监听
      $(document).scroll(function(){
      	console.log($(document).scrollTop())
      	if($(document).scrollTop()>1208){
      		$('#gund').slideDown()
      		$('#gund').css("boxShadow","0px 5px 2px 1px #cdcdcd")
      	}else{
      		$('#gund').slideUp()

      	}
      	// console.log( $(document).scrollTop())
      })




})