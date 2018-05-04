// 权限列表中的js文件
$(this).ready(function () {
	// 点击选择人员跳出弹出层 
	$(".PL a").click(function(){
		var index = $(".PL a").index(this); //获取a标签所在的索引数
		layer.open({
			type: 2,
			area: ['90%','80%'],
			title: "名单列表",
			fixed: false, //不固定
			maxmin: true,
			content: "Hpublic/NameList.html",
			// btn: ['确定','关闭'],
		});
		if (index===0) {
			$(".PL input[type='text']").eq(0).attr('id','applicat');
			$(".CA_span input[type='text']").attr('id','');
		}
	});
});