// 文字轮播部分 jQuery代码 start
function ScrollImgLeft(){
    var speed=25;//值越小滚动越快 
    var scroll_begin = document.getElementById("scroll_begin"); 
    var scroll_end = document.getElementById("scroll_end"); 
    var scroll_div = document.getElementById("scroll_div"); 
    scroll_end.innerHTML=scroll_begin.innerHTML; 
function Marquee(){ 
    if(scroll_begin.offsetWidth-scroll_div.offsetWidth<=0){
        //当开始滚动栏的div宽度-整个滚动栏div的宽度小于或等于0时，则结束滚动栏的div将不再有开始滚动的初始值
        scroll_end.innerHTML=""; 
    }else if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0) {
        scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
    }else {
        scroll_div.scrollLeft++; 
    }
}
    var MyMar=setInterval(Marquee,speed); 
    scroll_div.onmouseover=function() {clearInterval(MyMar);} 
    scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed);} 
} 
// 文字轮播部分 jQuery代码 end
