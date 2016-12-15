/**
 * Created by yjf on 16-12-12.
 */
$(document).ready(function(){

    var usePeople=[
        {tel:"187***1005",name:"忘川",img:"images/data-pic1.jpg/"},
        {tel:"183***1005",name:"聆空",img:"images/data-pic2.jpg/"},
        {tel:"187***8113",name:"初夏薄荷",img:"images/data-pic3.jpg"},
        {tel:"187***4792",name:"风过无痕",img:"images/data-pic4.jpg"},
        {tel:"135***7674",name:"后会无期",img:"images/data-pic5.jpg"},
        {tel:"159***2235",name:"梨花落",img:"images/data-pic6.jpg"},
        {tel:"156***3650",name:"如果巴黎不快乐",img:"images/data-pic7.jpg"},
        {tel:"131***9126",name:"someone",img:"images/data-pic8.jpg"},
        {tel:"187***5338",name:"小清新",img:"images/data-pic9.jpg"}
    ];

    //初始化
    (function () {
        var ul=$('#users');
        var li =$ ('.user');
        console.log(usePeople.length);
        for(var a=0;a < usePeople.length; a++){
            li.find('#img').attr("src",usePeople[a].img);
            li.find('.data-num').text(usePeople[a].tel);
            li.find('.date-name').text(usePeople[a].name);
            ul.append(li.clone(true));
            $(".counter").text(usePeople.length);
        }
    })();


    //获奖名单的显示与隐藏
    $('#icon').click(function(){
        $("#first").parents("li").remove();
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
        console.log($(this).prev($('.data-name')).text());
        for(i in usePeople){
            if($(this).prev($('.data-name')).text()===usePeople[i].name){
                console.log('called')
                // usePeople[i]=usePeople[parseInt(i)+1];
                // usePeople.length--;
                usePeople.splice(i,1)
            }
        }
        $(this).parents("li").remove();
        var counter=$('.counter').text()-1;
        $(".counter").text(counter);
    });

    //自定义随机数
    function randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum);
                break;
            default:
                return 0;
                break;
        }
    }

    var draw = 0;
    var count=0;
    var index=0;

    //空格键触发抽奖事件
    $(document).keydown(function(e){
        if(!e)
            var e = window.event;
        if(e.keyCode==32){
            if(count%2==0){
                var numbers1=$("#numberLeft li");
                var numbers2=$("#numberRight li");
                var b=usePeople.length-1;
                draw= setInterval(function () {
                    var num=randomNum(0,b);
                    $('.head-pic').children('img').attr("src",usePeople[num].img);
                    var string = usePeople[num].tel.split("");
                    console.log(string);
                    for(i in numbers1){
                        numbers1[i].innerHTML=string[i];
                    }
                    for(j in numbers2){
                        numbers2[j].innerHTML=string[parseInt(j)+6];
                    }
                    index=num;
                },50);
                count++;
            }
            else if(count%2==1){
                clearInterval(draw);
                var lucker=$("#luckUser");
                lucker.css("visibility"," visible");
                lucker.find('#pic').attr("src",usePeople[index].img);
                lucker.find('.data-num').text(usePeople[index].tel);
                lucker.find('.date-name').text(usePeople[index].name);
                count++;
            }


        }
    });
});
