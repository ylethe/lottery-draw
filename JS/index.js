/**
 * Created by yjf on 16-12-12.
 */
$(document).ready(function(){

    //获奖名单的显示与隐藏
    $('#icon').click(function(){


        var left=$("#left");
        var right= $("#right");
        if(left.is(":hidden")){
            left.css("display", "block");
            left.animate({width:'15%'},"fast");
            right.css("width", "85%");
            left.animate({width:'20%'},"fast");
            right.css("width", "80%");
            left.animate({width:'25%'},"fast");
            right.css("width", "75%");
        }else{
            left.css("display","none");
            left.css("width","10%");
            right.css("width", "100%");
        }
    });

    //用户的删除
    $(".delete").click(function(){
        $(this).parents("li").remove();
        console.log($(this));
        console.log($(this).parents("li"))
    });

    //空格键触发抽奖事件
    $(document).keydown(function(e){
        if(!e)
            var e = window.event;
        if(e.keyCode==32){
           // $("#numberLeft").
           console.log($("#numberLeft").children());
        }
    });
});