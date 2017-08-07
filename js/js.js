/**
 * Created by liguihong on 2017/5/6.
 */
$(function(){
    $('#opt').mouseenter(function(){
        $('#slt_1').show();
        $(this).css('background','#2bb8aa');
    })
    $('#slt_1').mouseleave(function(){
        $(this).hide();
        $('#opt').css('background','#fff');
    })
    $('#close').click(function(){
        $('#slt').fadeOut(1000);
    })

    $('#nev_1>ul>li').mouseenter(function(){
        var index=$(this).index();
        $(this).css('backgroundColor','#eee').siblings().css('backgroundColor','#fff');
        //$('.nev_2').fadeIn(1000).css('backgroundColor','#2bb8aa');
        $('.nev_2').fadeIn(1000);
        $('.qt').attr('src','../images/lgh'+index+'.jpg');
        $('.rqt').attr('src','../images/lgh'+(index+5)+'.jpg');
    })
    $('#nev_1>ul>li').mouseleave(function(){
        $('#nev_1>ul>li').eq(0).css('backgroundColor','#eee').siblings().css('backgroundColor','#fff');

    })
    $('.nev_2').mouseleave(function(){
        $(this).fadeOut(1000);
    })
    $('#title').click(function(){
        $('#ad').fadeOut(1000);
    })
    var adH=$('#ad').offset().top;
    $(window).scroll(function(){


        //console.log(adH);
        var scrolltop=$(window).scrollTop();

        //console.log(scrolltop);
        if(scrolltop>=adH){
            $('#ad').css({
                position:'fixed',
                top:-15,

            })
        }else{
            $('#ad').css({
                position:'static',
            })
        }
    })
})

