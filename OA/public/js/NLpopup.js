// NLpopup.js是所有XXpopup.js的子窗口js文件
$(document).ready(function(){
	var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
	var ta = parent.$('#applicat')[0].tagName; //获取ID为Applicat的大写标签
	$('#transmit').on('click', function(){
		//判断获取的属性ID的标签，如果是TEXTAREA，就运行append方法，否则运行input的attr方法
		if (ta==='TEXTAREA') {
			parent.$('#applicat').append($("input[name='username2']").val());
			//判断并解决textare多行文本框重复性问题,父窗口的
			var str = parent.$(".CA_span textarea").val();//获取值
			var strArr = str.split(",");//把字符串分割成一个数组
			strArr.sort();//排序
			var res = new Array();//创建一个新的结果数组
			var tempStr = "";
			for (var i = i in strArr) {
				if (strArr[i] != tempStr) {
					res.push(strArr[i]);
					tempStr = strArr[i];
				}else{
					continue;
				}
			}
			parent.$(".CA_span textarea").text(res.join(",")+",");//把数组连成字符串并展示到页面
		}else{
			parent.$('#applicat').attr("value",$("input[name='username2']").val());
		}
		parent.layer.close(index);//关闭window
	});
	//判断当为textare多行文本框标签时，输入框name属性为username1的type类型改变为checkbox
	if (ta==='TEXTAREA') {
		$("input[name='username1']").attr('type','checkbox');
		//动态获取复选框的值
		$("input[name='username1']").change(function(){
	        var result="";
	        $("input[name='username1']:checked").each(function(){
	               result+=$(this).val()+',';
	        });
	        $("input[name='username2']").attr('value',$("input[name='username2']").val(result));

	        //判断并解决textare多行文本框重复性问题，子窗口的
			var str = $("input[name='username2']").val();//获取值
			var strArr = str.split(",");//把字符串分割成一个数组
			strArr.sort();//排序
			var res = new Array();//创建一个新的结果数组
			var tempStr = "";
			for (var i = i in strArr) {
				if (strArr[i] != tempStr) {
					res.push(strArr[i]);
					tempStr = strArr[i];
				}else{
					continue;
				}
			}
			$("input[name='username2']").val(res.join(",")+",");//把数组连成字符串并展示到页面
	    });
	}else{
		//获取radio的值并赋值到text文本框
		$("input[name='username1']").click(function(){  
            var a =$("input[name='username1']:checked").val(); 
            // alert(a);
            $("input[name='username2']").attr('value',a);
        }); 
	}
});