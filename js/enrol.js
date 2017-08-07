/**
 * Created by qing on 2017/5/6.
 */
function rubikCubeEvent(element, eleWidth, eleHeight, picHeight, picArr, num, time, direction) {
    var newArr = [];
    var nowdeg = 0;
    var divArr = [];
    //创建轮播图大盒子，放入外部容器中
    var ele = $('<div></div>');
    element.append(ele);
    ele.css({
        width: eleWidth,
        height: eleHeight,
        position: 'absolute',
        left: 0,
        right: 0,
        margin: '0 0',
        perspective: eleWidth,
        perspectiveOrigin: 'bottom'
    });
    //将盒子分为num个场景
    for (var i = 0; i < num; i++) {
        var a = $('<div></div>');
        ele.append(a);
        a.css({
            width: eleWidth,
            height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
            position: 'absolute',
            left: '0',
            top: picHeight / (num - 1) * i
        });
        //为每个场景创建一个盒子
        var b = $('<div></div>');
        a.append(b);
        b.css({
            width: eleWidth,
            height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
            position: 'absolute',
            left: 0,
            top: 0,
            transformStyle: 'preserve-3d',
            transition: 'transform 2s ease ' + i * 0.3 + 's',
            transformOrigin: 'center center ' + (-eleWidth / 2) + 'px'
        });
        newArr.push(b);
        //为每一行的小盒子创建前后左右4个面
        for (var j = 1; j <= 4; j++) {
            var c = $('<div></div>');
            b.append(c);
            switch (j) {
                case 1://前
                    c.css({
                        width: eleWidth,
                        height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        background: i < num - 1 ? 'url(' + picArr[0] + ') no-repeat 0 ' + (-picHeight / (num - 1) * i) + 'px' : '#fff'
                    });
                    break;
                case 2://左
                    c.css({
                        width: eleWidth,
                        height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
                        position: 'absolute',
                        left: -eleWidth,
                        top: 0,
                        transformOrigin: 'right',
                        transform: 'rotateY(-90deg)',
                        background: i < num - 1 ? 'url(' + picArr[1] + ') no-repeat 0 ' + (-picHeight / (num - 1) * i) + 'px' : '#fff'
                    });
                    break;
                case 3://后
                    c.css({
                        width: eleWidth,
                        height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transform: 'translateZ(-' + eleWidth + 'px)'
                    });
                    var d = $('<div></div>');
                    c.append(d);
                    d.css({
                        width: eleWidth,
                        height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transformOrigin: 'center center',
                        transform: 'rotateY(180deg)',
                        background: i < num - 1 ? 'url(' + picArr[2] + ') no-repeat 0 ' + (-picHeight / (num - 1) * i) + 'px' : '#fff'
                    });
                    break;
                case 4://右
                    c.css({
                        width: eleWidth,
                        height: i < num - 1 ? picHeight / (num - 1) : (eleHeight - picHeight),
                        position: 'absolute',
                        right: -eleWidth,
                        top: 0,
                        transformOrigin: 'left',
                        transform: 'rotateY(90deg)',
                        background: i < num - 1 ? 'url(' + picArr[3] + ') no-repeat 0 ' + (-picHeight / (num - 1) * i) + 'px' : '#fff'
                    });
                    break;
                default :
                    break;
            }
            if (i == num - 1) {
                divArr.push(c);
            }
        }
    }
    function run() {
        if (direction > 0) {
            nowdeg += 90;
        } else {
            nowdeg -= 90;
        }
        for (var i = 0; i < newArr.length; i++) {
            newArr[i][0].style.transform = 'rotateY(' + nowdeg + 'deg)';
        }
    }

    //设置定时器
    ele.timeId = setInterval(run, time);
    ele.mouseenter(function () {
        clearInterval(ele.timeId);
    });
    ele.mouseleave(function () {
        ele.timeId = setInterval(run, time);
    });
    //返回预留的div
    return divArr;
}
var arr=["../images/saved.jpg","../images/saved.jpg","../images/saved.jpg","../images/saved.jpg"]
rubikCubeEvent($(".top_l"),460,370,370,arr,10,5000,1);
var aObj = myId("enrol").getElementsByTagName("a")[0];
var txt = myId("ainput").getElementsByTagName("input")[0];
var pwd = myId("ainput").getElementsByTagName("input")[1];
var pObj = myId("login").getElementsByTagName("p")[0];
var apObj = pObj.getElementsByTagName("a")[0];
var shoujidongtaima = myId("ainput").children[2];
var ou = myId("use").children[0];
var ospan = myId("use").children[1];
var promptBox = myId("promptBox");
var pbSpan = promptBox.getElementsByTagName("span")[0];
var btn = myId("btn");
var ainputSpan = myId("ainput").getElementsByTagName("span")[0];
var off = true;
var off2 = true;
// var currentValue=txt.value;
ou.onmouseover = msr;
ou.onmouseout = mst;
ospan.onmouseover = msr;
var num1 = 0;
var num2 = 0;
function msr() {
    ou.style.borderColor = "#2ebcae";
}
ospan.onmouseout = mst;
function mst() {
    if (ou.innerText == "✔") {
        ou.style.borderColor = "#2ebcae";
    } else {
        ou.style.borderColor = "#d0d0d0";
    }

}
ou.onclick = fn;
ospan.onclick = fn;
function fn() {
    if (ou.innerText == "✔") {
        ou.innerText = ""
        ou.style.backgroundColor = "";
    } else {
        ou.innerText = "✔"
        ou.style.backgroundColor = "#2ebcae";
    }
}
txt.onfocus = function () {
    txt.style.borderColor = "#52bcaf"

}
txt.onblur = function () {
    if (off) {
        txt.style.borderColor = "#aaaaaa"
    } else {
        txt.style.borderColor = "#f76120"
    }
}
pwd.onfocus = function () {
    pwd.style.borderColor = "#52bcaf"
}
pwd.onblur = function () {
    pwd.style.borderColor = "#aaaaaa"
}
var txt1Value = "";//记录点击 按钮前的值
var txt2Value = "";
var pwd1Value = "";
var pwd2Value = "";
var txt1Style = "";
var txt2Style = "";
var pwd1Style = "";
var pwd2Style = "";
aObj.onclick = function () {
    btn.style.backgroundColor="#2ebcae";
    btn.value="登录";
    if (aObj.innerText == "手机动态码登录") {
        txt1Value = txt.value;
        pwd1Value = pwd.value;
        txt1Style = txt.style.borderColor;
        pwd1Style = pwd.style.borderColor;
        txt.value = txt2Value;
        pwd.value = pwd2Value;
        txt.style.borderColor = txt2Style;
        pwd.style.borderColor = pwd2Style;
        promptBox.style.opacity = "0";
        pbSpan.innerText = "错误提示";
        pwd.type = "text";
        txt.className = "txt2";
        aObj.innerText = "普通方式登录";
        txt.placeholder = "手机号";
        pwd.placeholder = "动态码";
        pObj.innerHTML = "提示： 未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意" + "<a href='javascript:void(0)'>《美团网用户协议》</a>";
        pObj.className = "sy";
        aObj.style.backgroundImage = 'url("../images/enrol2.png")';
        myId("ainput").children[2].style.opacity = "1";
    } else {
        pwd2Style = pwd.style.borderColor;
        pwd.style.borderColor = pwd1Style;
        txt2Style = txt.style.borderColor;
        txt2Value = txt.value;
        pwd2Value = pwd.value;
        txt.value = txt1Value;
        pwd.value = pwd1Value;
        txt.style.borderColor = txt1Style;
        promptBox.style.opacity = "0";
        pbSpan.innerText = "错误提示";
        off = true;
        pwd.type = "password";
        // txt.style.borderColor="#aaaaaa";
        txt.className = "txt";
        aObj.innerText = "手机动态码登录";
        txt.placeholder = "手机号/用户名/邮箱";
        pwd.placeholder = "密码";
        pObj.innerHTML = "还没有账号?" + "<a href='javascript:void(0)'>免费注册</a>";
        pObj.className = "";
        aObj.style.backgroundImage = 'url("../images/enrol1.png")';
        myId("ainput").children[2].style.opacity = "0";

        //错误提示

    }
};
myId("ainput").children[2].onclick = function () {
    off2=false;
    off = false;
    txt.style.borderColor = "#f76120";
};
btn.onclick = function () {
    if (aObj.innerText == "手机动态码登录") {
        txt.style.borderColor = "#aaaaaa";
        pwd.style.borderColor = "#aaaaaa";
        if (txt.value.length == 0 && pwd.value.length == 0) {
            txt.style.borderColor = "#f76120";
            pwd.style.borderColor = "#f76120";
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入账号和密码";
        } else if (txt.value.length == 0) {
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入账号";
            txt.style.borderColor = "#f76120";
            pwd.style.borderColor = "#aaaaaa";
        } else if (pwd.value.length == 0) {
            pwd.style.borderColor = "#f76120";
            txt.style.borderColor = "#aaaaaa";
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入密码";
        } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(txt.value) || !/^[\$a-zA-Z0-9_-]{6,18}$/.test(pwd.value)) {
            txt.style.borderColor = "#f76120";
            pwd.style.borderColor = "#f76120";
            promptBox.style.opacity = "1";
            pbSpan.innerText = "账号或密码错误，请重新输入，建议使用手机号短信验证码登录";
        } else {
            //此处可加判断跳转
            currentValue = txt.value;
            txt.style.borderColor = "#aaaaaa";
            pwd.style.borderColor = "#aaaaaa";
            promptBox.style.opacity = "0";
            btn.style.backgroundColor="#eeeeee";
            btn.value="登录中";
        }
    } else {
       /* txt.style.borderColor = "#aaaaaa";
         pwd.style.borderColor = "#aaaaaa";*/
        if (txt.value.length == 0 && pwd.value.length == 0) {
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入手机号和动态码";
            txt.style.borderColor = "#f76120";
            pwd.style.borderColor = "#f76120";
        } else if (txt.value.length == 0) {
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入手机号";
            txt.style.borderColor = "#f76120";
            pwd.style.borderColor = "#aaaaaa";
        } else if (pwd.value.length == 0) {
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入动态码";
            txt.style.borderColor = "#aaaaaa";
            pwd.style.borderColor = "#f76120";
        } else if (!/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test(txt.value)) {
            promptBox.style.opacity = "1";
            pbSpan.innerText = "请输入正确的手机号";
            txt.style.borderColor = "#f76120";
            pwd.style.borderColor = "#aaaaaa";
        } else if (pwd.value.length != 6||off2) {
            ainputSpan.innerText = "请获取动态码";
            pwd.style.borderColor = "#f76120";
            txt.style.borderColor = "#aaaaaa";
        } else {
            promptBox.style.opacity = "0";
            ainputSpan.innerText = "";
            txt.style.borderColor = "#aaaaaa";
            pwd.style.borderColor = "#aaaaaa";
            btn.style.backgroundColor="#eeeeee";
            btn.value="登录中";
        }
    }


};
