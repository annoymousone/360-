// $(function(){
// 	$('.erweima>.tu').click(function(){
// 		setInterval(function(){
// 			$('.erweima>.tu').css("marginLeft",'')
// 		},2000)
// 		alert(2)
// 	})

// })
$(function(){
	$('#hua').mouseout(function(){
		$('#shouj').css("display","none")
	})
})
window.onload=function(){
	var target=0;
	var leader=40;
	var l=0;
	var t=60;
	var hua=document.getElementById('hua')
	var shouj=document.getElementById('shouj')
	console.log(hua)
	hua.onmouseover=function(){
		// alert(1)
		
		clearInterval(timer);
		var timer=setInterval(function(){
			leader=leader+(target-leader)/10;
			hua.style.marginLeft=leader+'px';
			shouj.style.display="block";
		},30)
	}
	hua.onmouseout=function(){
			hua.style.marginLeft=leader+'px';
		
		
			shouj.style.display="none";

		
	}
	// 设置点击的时候账号框出来
	qiehuan.onclick=function(){
		zh.style.display="block"
		qiehuan.style.display="none"
	}
	qiehuan1.onclick=function(){
		zh.style.display="none"
		qiehuan.style.display="block"

	}
	// 设置点击input的时候框变颜色
	zhang.onfocus=function(){
		aa.style.border="2px solid green";
		bb.style.border="2px solid #e6e6e6";
	}
	mi.onfocus=function(){
		aa.style.border="2px solid #e6e6e6";
		bb.style.border="2px solid green";

	}




}