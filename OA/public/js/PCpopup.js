// 人事合同中的js文件
$(this).ready(function () {
	// 点击选择人员跳出弹出层 
	$(".PC_span a").click(function(){
		var index = $(".PC_span a").index(this); //获取a标签所在的索引数
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
			$(".PC_span input[type='text']").eq(0).attr('id','applicat');
			$(".CA_span input[type='text']").attr('id','');
		}
	});

	// 详情 弹出层
	$(".table .btn-info").click(function () {
		var index = $(".btn-info").index(this);
		layer.open({
			type: 2,
			area: ['90%','80%'],
			title: "个人详情",
			fixed: false, //不固定
			maxmin: true,
			content: "Hpublic/Details.html",
			// btn: ['确定','关闭'],
		});
	});

	//显示与隐藏更多查询项
	$("#contract_more").click(function () {
		$(".contract_more").toggle("slow");
	});
	//全选与反选
	$("#all").click(function(){   
	    if(this.checked){   
	        $(".contract_list>.table>tbody>tr>th :checkbox").prop("checked", true);  
	    }else{
			$(".contract_list>.table>tbody>tr>th :checkbox").prop("checked", false);
	    }   
	});
	//获取选中选项的值
	$(".optionDel").click(function(){
		var i=0;
		$(".contract_list>.table>tbody>tr>th :checkbox").each(function(){
			if($(this).prop("checked")==true){
				i ++;
			}
		});
		// alert(i);
		if (i===1) {
			if (confirm("是否要删除此条数据，删除数据无法复原！！！")) {
				return true;//写删除路径
			} else {
				return false;
			}
		} else if(i>1){
			if (confirm("是否要删除选中的"+ i+"条数据，删除数据无法复原！！！")) {
				return true;//写删除路径
			} else {
				return false;
			}
		}else{
			alert("请选择要清除的数据！");
		}
	});
});