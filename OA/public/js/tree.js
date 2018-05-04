// 目录树部分 jQuery代码 start
$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', '关闭');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', '展开').find(' > i').addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', '关闭').find(' > i').addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
        }
        e.stopPropagation();//阻止冒泡事件
    });
});
// 目录树部分 jQuery代码 end
