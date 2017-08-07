/**
 * Created by Administrator on 2017-5-6.
 */
var enshrineMT = myId("enshrineMT");
enshrineMT.onmouseenter = function () {
    enshrineMT.children[0].innerHTML = "&#xe692;";
    enshrineMT.children[0].style.color = "#f76120";
};
enshrineMT.onmouseleave = function () {
    enshrineMT.children[0].innerHTML = "&#xe608;";
    enshrineMT.children[0].style.color = "#666666";
};
//获取右上角列表元素
var top_list = myId("top_list").children;
//注册右上角列表的鼠标进入和离开事件
for (var i = 1; i < top_list.length; i++) {
    top_list[i].onmouseover = top_listMouseover;
    top_list[i].onmouseout = top_listMouseout;
}
//右上角鼠标进入事件处理函数
function top_listMouseover() {
    this.children[0].className = "common mouseover";
    this.children[0].children[1].className = "triangle_blue";
    if (this.children[0].children[2]) {
        this.children[0].children[2].style.display = "none";
    }
    this.children[1].style.display = "block";
}
//右上角鼠标离开事件处理函数
function top_listMouseout() {
    this.children[0].className = "common";
    this.children[0].children[1].className = "triangle";
    if (this.children[0].children[2]) {
        this.children[0].children[2].style.display = "block";
    }
    this.children[1].style.display = "none";
}
//获取搜索条件相关元素
var choose = myId("choose");
var choose_ul = choose.children[0];
var choose_li = choose_ul.children;
var search_text = myId("search_text");
//注册搜索条件鼠标进入事件
choose_ul.onmouseover = function () {
    this.className = "mouseover";
    choose.children[1].className = "triangle_blue";
    for (var i = 0; i < choose_li.length; i++) {
        choose_li[i].style.paddingLeft = "13px";
    }
};
//注册搜索条件鼠标离开事件
choose_ul.onmouseout = function () {
    this.className = "";
    choose.children[1].className = "triangle";
    for (var i = 0; i < choose_li.length; i++) {
        choose_li[i].style.paddingLeft = "14px";
    }
};
//注册搜索条件鼠标点击事件
choose_li[1].onclick = function () {
    var temp = choose_li[0].innerHTML;
    choose_li[0].innerHTML = this.innerHTML;
    this.innerHTML = temp;
    this.parentElement.className = "";
    choose.children[1].className = "triangle";
    for (var i = 0; i < choose_li.length; i++) {
        choose_li[i].style.paddingLeft = "14px";
    }
    if (choose_li[0].innerHTML == "团购") {
        search_text.placeholder = "请输入商品名称、地址等";
    } else {
        search_text.placeholder = "请输入商家名称、地址等";
    }
};
//获取搜索框右侧的小图标元素
var commitment_a_span = myId("commitment_a").children;
//为每个小图标添加鼠标进入和离开时的动画效果
for (var i = 0; i < commitment_a_span.length; i++) {
    commitment_a_span[i].children[0].onmouseenter = function () {
        animate(this, {"transform": 360});
    };
    commitment_a_span[i].children[0].onmouseleave = function () {
        animate(this, {"transform": 0});
    };
}
//轮播图区域
var arr1 = ['images/ad02.jpg', 'images/ad03.jpg', 'images/ad04.jpg', 'images/ad05.jpg'];
var arr2 = ['images/ad06.jpg', 'images/ad07.jpg', 'images/ad08.jpg', 'images/ad09.jpg'];
var objArr1 = [
    {
        a: '香辣黄金蟹',
        p: '极品黄金蟹，好看更好吃',
        div: '￥66'
    },
    {
        a: '俏江南',
        p: '100元代金券1张，全场通用，可叠加使用',
        div: '￥75'
    },
    {
        a: '泰妹火锅',
        p: '50元代金券一张，建议单人使用，提...',
        div: '￥40'
    },
    {
        a: '小明度假村一日游',
        p: '只要9.9，限购100张',
        div: '￥9.9'
    }
];
var objArr2 = [
    {
        a: '味多美',
        p: '100元味多美提货卡1张，全场通用',
        div: '￥75'
    },
    {
        a: '水世界',
        p: '阳光海岸，水世界，年末大酬宾',
        div: '￥88'
    },
    {
        a: '夏威夷海鲜自助',
        p: '更多美味，更多选择，不要998，只要98',
        div: '￥98'
    },
    {
        a: '小贝壳海鲜自助火锅',
        p: '来自大自然，美味纯天然',
        div: '￥108'
    }
];
var box1 = $('#nav_lbt .lbt_l_box');
var box2 = $('#nav_lbt .lbt_r_box');
var divObjs1 = rubikCubeEvent(box1, 333, 288, 222, arr1, 12, 3000, 1, 0.1, 0, '魔方轮播.html');
var divObjs2 = rubikCubeEvent(box2, 333, 288, 222, arr2, 12, 3000, 1, 0.1, 1, '魔方轮播.html');
for (var i = 0; i < 4; i++) {
    //i==2,即为魔方初始的背面，需要特殊处理
    if (i == 2) {
        $('<div></div>').appendTo(divObjs1[i].children()).css({
            height: 55,
            paddingTop: 11
        }).html(
            '<div class="fl">' + '<h6><a href="javascript:;">' + objArr1[i].a + '</a></h6>' +
            '<p>' + objArr1[i].p + '</p>' + '</div>' +
            '<div class="fr">' + objArr1[i].div + '</div>'
        );
        $('<div></div>').appendTo(divObjs2[i].children()).css({
            height: 55,
            paddingTop: 11
        }).html(
            '<div class="fl">' + '<h6><a href="javascript:;">' + objArr2[i].a + '</a></h6>' +
            '<p>' + objArr2[i].p + '</p>' + '</div>' +
            '<div class="fr">' + objArr2[i].div + '</div>'
        );
        continue;
    }
    $('<div></div>').appendTo(divObjs1[i]).css({
        height: 55,
        paddingTop: 11
    }).html(
        '<div class="fl">' + '<h6><a href="javascript:;">' + objArr1[i].a + '</a></h6>' +
        '<p>' + objArr1[i].p + '</p>' + '</div>' +
        '<div class="fr">' + objArr1[i].div + '</div>'
    );
    $('<div></div>').appendTo(divObjs2[i]).css({
        height: 55,
        paddingTop: 11
    }).html(
        '<div class="fl">' + '<h6><a href="javascript:;">' + objArr2[i].a + '</a></h6>' +
        '<p>' + objArr2[i].p + '</p>' + '</div>' +
        '<div class="fr">' + objArr2[i].div + '</div>'
    );
}
//限时抢购
var count_down_time = myId("count_down_time");
var timeObjs = myId("count_down_time").getElementsByTagName("span");
var countdownTime = 60;
var flash_sale = myId("flash_sale");
function countDown() {
    timeObjs[0].innerHTML = Math.floor(countdownTime / 3600 / 10);
    timeObjs[1].innerHTML = Math.floor(countdownTime / 3600) % 10;
    timeObjs[2].innerHTML = Math.floor(countdownTime / 60 / 10);
    timeObjs[3].innerHTML = Math.floor(countdownTime / 60) % 10;
    timeObjs[4].innerHTML = Math.floor(countdownTime / 10);
    timeObjs[5].innerHTML = countdownTime % 10;
    if (countdownTime == 0) {
        flash_sale.style.overflow = "hidden";
        animate(flash_sale, {"height": 0, "marginTop": 0}, function () {
            pageScroll();
        });
        clearInterval(countDown_timeId);
        return;
    }
    countdownTime--;
}
countDown();
var countDown_timeId = setInterval(countDown, 1000);
//左侧定位条
var group_list = myId("group_list");
var elevator = myId("elevator");
var group_list_common_Objs = myClass("group-list_common");
var elevator_list_li_Objs = elevator.children[0].children;
elevator.style.top = group_list.offsetTop - document.body.scrollTop + 42 + "px";
function pageScroll() {
    var y = group_list.offsetTop - document.body.scrollTop + 42;
    if (y < 0) {
        y = 0;
    }
    animate(elevator, {"top": y});
    for (var i = 0; i < group_list_common_Objs.length; i++) {
        if (group_list_common_Objs[i].offsetTop + group_list_common_Objs[i].offsetHeight + group_list.offsetTop >= document.body.scrollTop) {
            break;
        }
    }

    for (var j = 0; j < elevator_list_li_Objs.length; j++) {
        elevator_list_li_Objs[j].children[0].className = "";
    }
    elevator_list_li_Objs[i].children[0].className = "choose";
};
window.onscroll = pageScroll;
for (var i = 0; i < elevator_list_li_Objs.length; i++) {
    elevator_list_li_Objs[i].children[0].index = i;
    elevator_list_li_Objs[i].children[0].onclick = function () {
        var y = group_list_common_Objs[this.index].offsetTop + group_list.offsetTop;
        scrollRun(y);
    };
}
//左侧导航展开
$('#kind_ul>li').mouseenter(function () {
    if ($(this).index() != 3 && $(this).index() != 8) {
        $(this).children('.youbian').css({
            visibility: 'visible',
            transform: 'rotateY(0deg)'
        });
    }
    $(this).css({'background-color': '#fff'});
    $('.nav .nav_down .kind').css({'border-left': '1px solid #bdbdc7', 'border-bottom': '1px solid #bdbdc7'});
});
$('#kind_ul>li').mouseleave(function () {
    $(this).css('background-color', 'transparent').children('.youbian').css({
        visibility: 'hidden',
        transform: 'rotateY(-90deg)'
    });
    $('.nav .nav_down .kind').css({'border-left': '1px solid #eee', 'border-bottom': '1px solid #eee'});
});