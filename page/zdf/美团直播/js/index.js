//后台数据�ݿ�
var userName = ["张佳乐", "李贵宏", "曹操", "周瑜", "陶佩", "朱清", "张涛涛","包包老师","韩韩老师"];
var imgDanmu = ["ftq.png", "ky.png", "xlx.png", "xm.png", "ppx.png"];
var txtDanmu = ["666666","66666688888", "主播长的好漂亮", "主播哪里人啊", "主播我要跟你生孩子", "233333", "233", "1111", "23333333", "666", "这个大龙虾我吃过", "马丹半夜看这个心难受", "有没有杭州的啊", "这一桌子要多少钱", "2222", "有一句MMB不知当讲不", "88888", "11111111111", "不要讲了吃", "我也好想吃，可是没钱", "主播闪开我要看摄影师", "我要看服务员，滚粗丑女", "呵呵", "我不知道这有啥好吃的", "穷逼表示吃不起", "某主播直播吃虾年入百万", "传智播客传来恭贺", "黑马前端8期", "传智八期", "美团小组8期", "美团8期小组","也许毕业在即但是班级永不解体","1234567","9876541","杭州帅哥找美女","主播玩LOL吗？","6个屁"];
var danmuColor = ["white", "hotpink", "skyblue", "yellowgreen", "purple", "red", "blue", "green", "yellow"]
//随机数函数���
function random_number(a) {
    var num = Math.floor(Math.random() * a);
    return num;
}

//index  js内容
$(function () {
    //视频盒子
    var father = $("#video_box");

    //弹幕函数
    function danmu() {
        //������� �ٶ� ��ɫ
        var content = txtDanmu[random_number(txtDanmu.length)];
        var speed = random_number(5000) + 3000;
        var colors = danmuColor[random_number(danmuColor.length)];
        var height = random_number(460);
        var img = imgDanmu[random_number(imgDanmu.length)];
        var name = userName[random_number(userName.length)];
        var num = random_number(100);
        //��ʼ����
        var txtOrImg = random_number(2);
        if (txtOrImg == 0) {
            //0
            $("<span></span>").css({
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontSize: 20,
                position: "absolute",
                zIndex: 95,
                color: colors,
                height: 40,
                top: height,
                left: $(father).css("width")
            }).text(content)
                .appendTo(father)
                .animate({
                    left: "-200"
                }, speed, "linear", function () {
                    $(this).remove();
                })
        }
        else if (txtOrImg == 1) {
            $("<span></span>").css({
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontSize: 20,
                position: "absolute",
                zIndex: 95,
                color: colors,
                height: 40,
                top: height,
                left: $(father).css("width")
            }).html(name + "送出了x" + num + "个" + "<img src='images/" + img + "'alt=''/>")
                .appendTo(father)
                .animate({
                    left: "-200"
                }, speed, "linear", function () {
                    $(this).remove();
                })
        }

    }

    //定时出弹幕
    var time_danmu=setInterval(danmu,1500);

    //发射弹幕  获取需要元素
    var gift = $("#danmu_gift");
    var gift_b1 = $("#danmu_gift_b1");
    var color_9 = $("#color");
    var gift_b2 = $("#danmu_gift_b2");
    var tantan = $("#tanchuang");

    //显示隐藏9宫格  遍历九宫格 显示颜色
    gift_b1.on("mouseenter", function () {
        color_9.stop(true, false).show(500);
        setTimeout(function () {
            color_9.children().stop(true, false).show(500);
            for (var i = 0; i < danmuColor.length; i++) {
                $("#color>span").eq(i).css("backgroundColor", danmuColor[i]);
            }
        }, 500)
    })
    //离开隐藏9宫格
    color_9.on("mouseleave", function () {
        color_9.children().stop(true, false).hide(500);
        setTimeout(function () {
            color_9.stop(true, false).hide(500);

        }, 500)
    })
    //点击事件
    var color_pic=0;
    color_9.children().on("click", function () {
        var coco = $(this).css("backgroundColor");
        gift_b1.children("span").css("backgroundColor", coco);
        color_pic=$(this).index();
    })

    //显示礼物
    gift_b2.on("mouseenter", function () {
        $(this).children().stop(true, false).slideDown(500);
    })
    //隐藏礼物
    var index_gift;
    gift.on("mouseleave", function () {
        gift_b2.children().stop(true, false).slideUp(500);
    })
    //点击事件
    gift_b2.children().on("click", function () {
        tantan.stop(true, false).fadeIn(500);
        index_gift = $(this).index();
        $("#spanImg").css("backgroundImage","url(images/"+imgDanmu[index_gift]+")")
    })
    $("#close").on("click", function () {
        tantan.stop(true, false).fadeOut(500);
    })

    //我要送礼物
    $(".ss3").on("click", function () {
        var value = $("#gift_num").val();
        var img_song =imgDanmu[index_gift];
        var leng = parseInt(value);
        var height = random_number(460);
        var speed =  6000;
        if (leng > 0) {
            $("<span></span>").css({
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontSize: 20,
                position: "absolute",
                zIndex: 99,
                color: "yellow",
                border:"1px solid red",
                height: 40,
                top: height,
                left: $(father).css("width")
            }).html("本大爷孙权" + "送出了x" + leng + "个" + "<img src='images/" + img_song + "'alt=''/>")
                .appendTo(father)
                .animate({
                    left: "-150"
                }, speed, "linear", function () {
                    $(this).remove();
                })
            $("#gift_num").val("");
            tantan.stop(true, false).fadeOut(500);

        }

    })
    //我要吐槽
    $("#tuzao").on("click", function () {
        var length = $("#tuzaotxt").val().length;
        var iof = $("#tuzaotxt").val().indexOf(" ");
        if(length==0||iof==0){
            $("#tuzaotxt").val("");
            return
        }
        var value = $("#tuzaotxt").val();
        var height = random_number(460);
        var colors = danmuColor[color_pic];
        var speed =  6000;
        $("<span></span>").css({
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontSize: 20,
            position: "absolute",
            zIndex: 99,
            color: colors,
            height: 35,
            border:"1px solid red",
            paddingTop:5,
            top: height,
            left: $(father).css("width")
        }).text(value)
            .appendTo(father)
            .animate({
                left: "-150"
            }, speed, "linear", function () {
                $(this).remove();
            })
        $("#tuzaotxt").val("");
    })
    //回车
    $("#tuzaotxt").on("keyup", function (evt) {
        var length = $(this).val().length;
        var iof = $("#tuzaotxt").val().indexOf(" ");
        if(length==0||iof==0){
            $("#tuzaotxt").val("");
            return
        }
        if(evt.keyCode===13){
            var value = $("#tuzaotxt").val();
            var height = random_number(460);
            var colors = danmuColor[color_pic];
            var speed =  6000;
            $("<span></span>").css({
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontSize: 20,
                position: "absolute",
                zIndex: 99,
                color: colors,
                height: 35,
                border:"1px solid red",
                paddingTop:5,
                top: height,
                left: $(father).css("width")
            }).text(value)
                .appendTo(father)
                .animate({
                    left: "-150"
                }, speed, "linear", function () {
                    $(this).remove();
                })
            $("#tuzaotxt").val("");
        }
    })

    //全屏
    $("#danmu_set_b1").on("click", function () {
        $("#mask").addClass("mask");
        $("#video_box").addClass("mask_on");
        $("#tuichu").css("display","inline-block");
    })
    $("#tuichu").on("click", function () {
        $("#mask").removeClass("mask");
        $("#video_box").removeClass("mask_on");
        $(this).css("display","none");
    })

    //水军将至注意高能
    var lock= true;
    var gaoneng;
    $("#dajunyajing").on("click", function () {
        clearInterval(gaoneng);
        if(lock){
            $("#warn_bg").stop(true,false).fadeTo(500,0.9, function () {
                $("#warn_bg").stop(true,false).fadeTo(500,0.3,function(){
                    $("#warn_bg").stop(true,false).fadeTo(500,0.9, function () {
                        $("#warn_bg").stop(true,false).fadeTo(500,0.3, function () {
                            $("#warn_bg").stop(true,false).fadeTo(500, 0.9,function () {
                                $("#warn_bg").stop(true,false).fadeOut(500, function () {
                                    gaoneng  = setInterval(danmu,10);
                                })
                            })
                        })
                    })
                })
            });
        }
    })
    //关闭弹幕
    $("#qingdanmu").on("click", function () {
        //关闭弹幕
        if(lock){
            lock =false;
            clearInterval(time_danmu);
            clearInterval(gaoneng);
            $(this).html("&#xe8fa;");
        }
        //开启弹幕
        else {
            time_danmu=setInterval(danmu,1500);
            lock= true  ;
            $(this).html("&#xe8f9;");
        }
    })
    //var gaodu = $(document).height();
    //console.log(gaodu);1317

})
