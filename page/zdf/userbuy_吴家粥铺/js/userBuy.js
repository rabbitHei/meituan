//全局函数
function noselect() {
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}//禁止选中
function getScoll() {
    return {
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0,
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0
    }
}//页面滚动兼容
//加减购物数量
add();
function add() {
    //获取所需对象
    var reduce = myId("b_reduce");
    var add = myId("b_add");
    var txt = myId("b_i_change");
    var s_display = myId("b_s_display");
    var pic = 1;
    //注册点击事件
    add.onclick = function () {
        noselect();
        pic++;
        txt.innerHTML = pic;
    };
    reduce.onclick = function () {
        var timer1 = null;
        var timer2 = null;
        noselect();
        pic--;
        if (pic <= 0) {
            pic = 1;
            timer1 = setTimeout(function () {
                s_display.style.display = "inline";
                timer2 = setTimeout(function () {
                    s_display.style.display = "none";
                }, 1500);
            }, 1);
        } else {
            txt.innerHTML = pic;
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
    };
}
//倒计时
time_back();
function time_back() {
    //获取所需对象
    var buyTime = myId("buyTime");
    var iObjs = buyTime.children;
    var total = 17 * 60 * 60 + 55 * 60 + 55;
    setInterval(function () {
        total--;
        var hours = Math.floor(total / 3600);
        var mintues = Math.floor(total / 60) % 60;
        var seconds = total % 60;
        hours = hours < 10 ? "0" + hours : hours;
        mintues = mintues < 10 ? "0" + mintues : mintues;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        iObjs[1].innerHTML = hours;
        iObjs[2].innerHTML = mintues;
        iObjs[3].innerHTML = seconds;
    }, 1000)
}
//顶部图片切换
topImg_change();
function topImg_change() {
    //获取所需元素
    var imgs = myId("top_img_change").children;
    var big_img = myId("topImg_change_current");
    //遍历小图注册点击事件
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = clickHandler;
    }
    function clickHandler() {
        big_img.src = this.src;
    }
}
//底部评价图片切换
btmImg_change();
function btmImg_change() {
    //获取所需元素
    var lis = myId("shaitu").children;
    var bigImg = myId("shaitu_big_img");
    var bigImgLeft = bigImg.children[0];
    var bigImgRight = bigImg.children[1];
    var arr = ["../images/1c4665a4141075b96373f47b002bc69540199.jpg", "../images/95a0c17f9f3dcdf250dce81f58e0855d33457.jpg", "../images/95db0ccc64e59e5f62d81afa1c81375448168.jpg", "../images/739d35f22489089d68b8556165efb741339141.jpg"];
    var pic;
    //遍历li中的a注册点击事件
    for (var i = 0; i < lis.length; i++) {
        //获取a
        var aObj = lis[i].children[0];
        aObj.setAttribute("index", i);
        aObj.onclick = clickHandler;
        aObj.onmouseout = mouseoutHandler;
    }
    function clickHandler() {
        //初始化
        for (var j = 0; j < lis.length; j++) {
            lis[j].children[0].children[0].className = "";
        }
        //特殊化
        this.children[0].className = "img_click";
        pic = this.getAttribute("index");
        if (bigImg.getAttribute("index") != pic) {
            bigImg.setAttribute("index", pic);
            bigImg.className = "current";
            bigImg.style.backgroundImage = "url(" + arr[pic] + ")";
        } else {
            bigImg.removeAttribute("index");
            bigImg.className = "";
        }
    }

    function mouseoutHandler() {
        //初始化
        for (var j = 0; j < lis.length; j++) {
            lis[j].children[0].children[0].className = "";
        }
    }

    //注册大图左右点击事件
    bigImgRight.onclick = function () {
        pic++;
        if (pic > 3) {
            pic = 0;
            bigImg.style.backgroundImage = "url(" + arr[pic] + ")";
        }
        bigImg.style.backgroundImage = "url(" + arr[pic] + ")";
        bigImg.setAttribute("index", pic);
        //初始化
        for (var j = 0; j < lis.length; j++) {
            lis[j].children[0].children[0].className = "";
        }
        //特殊化
        lis[pic].children[0].children[0].className = "img_click";
    };
    bigImgLeft.onclick = function () {
        pic--;
        if (pic < 0) {
            pic = 3;
            bigImg.style.backgroundImage = "url(" + arr[pic] + ")";
        }
        bigImg.style.backgroundImage = "url(" + arr[pic] + ")";
        bigImg.setAttribute("index", pic);
        //初始化
        for (var j = 0; j < lis.length; j++) {
            lis[j].children[0].children[0].className = "";
        }
        //特殊化
        lis[pic].children[0].children[0].className = "img_click";
    };

}
//设置页面上下滚动事件
scroll_page();
function scroll_page() {
    //获取元素
    var seller1 = myClass("seller")[0];
    var buyKnow2 = myClass("buyKnow")[0];
    var list3 = myClass("list")[0];
    var merchant4 = myClass("merchant")[0];
    var estimate5 = myClass("estimate")[0];
    var father = myId("jumpLink").parentNode;
    var lis = myId("jumpLink").children;

    //注册页面上下滚动事件
    var arr = [seller1, buyKnow2, list3, merchant4, estimate5];

    function fn(a) {
        father.id = "jumpLink_father";
        animate(father, {"width": 980});
        //初始化
        for (var i = 0; i < arr.length; i++) {
            var aObj = lis[i].children[0];
            aObj.className = "";
        }
        //特殊化
        lis[a].children[0].className = "current";
    }

    window.onscroll = function () {
        if (getScoll().top > arr[4].offsetTop - 150) {
            fn(4);
        } else if (getScoll().top > arr[3].offsetTop - 150) {
            fn(3);
        } else if (getScoll().top > arr[2].offsetTop - 150) {
            fn(2);
        } else if (getScoll().top > arr[1].offsetTop - 150) {
            fn(1);
        } else if (getScoll().top > arr[0].offsetTop - 100) {
            fn(0)
        } else {
            father.id = "";
            father.style.width = "704px";
        }
    };
}