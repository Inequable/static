$(this).ready(function () {
	$(".CA_span a").click(function(){
		var index = $(".CA_span a").index(this); //获取a标签所在的索引数
		// alert(index);
		layer.open({
		  type: 2,
		  area: ['90%','80%'],
		  title: "名单列表",
		  fixed: false, //不固定
		  maxmin: true,
		  content: "Hpublic/NameList.html",
		  // btn: ['确定','关闭'],
		});
		//判断是在哪个a标签的索引，并添加上ID属性，其余的ID属性为空
		if (index===0) {
			$(".CA_span input[type='text']").eq(0).attr('id','applicat');
			$(".CA_span input[type='text']").eq(1).attr('id','');
			$(".CA_span textarea").attr('id','');
			$(".CA_span input[type='text']").eq(2).attr('id','');
		}else if (index===1) {
			$(".CA_span input[type='text']").eq(0).attr('id','');
			$(".CA_span input[type='text']").eq(1).attr('id','applicat');
			$(".CA_span textarea").attr('id','');
			$(".CA_span input[type='text']").eq(2).attr('id','');
		}else if (index===2) {
			$(".CA_span input[type='text']").eq(0).attr('id','');
			$(".CA_span input[type='text']").eq(1).attr('id','');
			$(".CA_span textarea").attr('id','applicat');
			$(".CA_span input[type='text']").eq(2).attr('id','');
		}else if (index===3) {
			$(".CA_span input[type='text']").eq(0).attr('id','');
			$(".CA_span input[type='text']").eq(1).attr('id','');
			$(".CA_span textarea").attr('id','');
			$(".CA_span input[type='text']").eq(2).attr('id','applicat');
		}
	});
});
