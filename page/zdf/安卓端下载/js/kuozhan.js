//全局变量
var pic = 0;
var bool = true;
var bool1 = true;
var page1 = myClass("page1")[0];
var page2 = myClass("page2")[0];
var page3 = myClass("page3")[0];
var page4 = myClass("page4")[0];
var qr_code_txt = myClass("onload_top")[0];
var arr = [page1, page2, page3, page4];
var arr_qr_code_txt = ['0px 0px', ' 0px -63px', '0px -129px', '0px -193px'];


//屏幕大小改变事件
resize();
function resize() {
    //获取所需元素
    var qr_code = myClass("onload")[0];
    var bd = document.body;
    //注册事件
    window.onresize = function () {
        if (bd.clientWidth < 1100) {
            animate(qr_code, {"right": -500})
        } else {
            animate(qr_code, {"right": 195})
        }
    };
}

//轮播
var timer = setInterval(function () {
    pic++;
    if (pic > 3) {
        gif_before();
        pic = 0;
        setTimeout(function () {
            for (var i = 0; i < arr.length; i++) {
                animate(arr[i], {"opacity": 0}, function () {
                    for (var j = 0; j < arr.length; j++) {
                        arr[j].style.marginTop = "0px";
                        arr[j].style.opacity = 0;
                    }
                    animate(arr[pic], {"opacity": 1}, function () {
                        for (var j = 0; j < arr.length; j++) {
                            animate(arr[j], {"opacity": 1})
                        }
                    })
                })
            }
            setTimeout(function () {
                pic_0_now();
            }, 900)
        }, 1000)
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.opacity = 1;
        }
        animate(arr[pic], {"marginTop": -arr[pic].offsetHeight})
        pics();
    }
    setTimeout(function () {
        qr_code_txt.style.backgroundPosition = arr_qr_code_txt[pic];
    }, 700);
}, 4000);

//先执行一次pic=0
pic_0_now();
//屏幕滚动事件
scroll();
function scroll() {
    //page1.style.marginTop = "-100%";
    document.onmousewheel = function (evt) {
        evt = evt || window.event;
        var type = evt.deltaY;
        clearInterval(timer);
        if (bool) {
            //上锁
            bool = false;
            //向下
            if (type > 0) {
                pic++;
                if (pic > 3) {
                    gif_before();
                    pic = 0;
                    setTimeout(function () {
                        for (var i = 0; i < arr.length; i++) {
                            animate(arr[i], {"opacity": 0}, function () {
                                for (var j = 0; j < arr.length; j++) {
                                    arr[j].style.marginTop = "0px";
                                    arr[j].style.opacity = "0";
                                }
                                animate(arr[pic], {"opacity": 1}, function () {
                                    for (var j = 0; j < arr.length; j++) {
                                        animate(arr[j], {"opacity": 1})
                                    }
                                    bool = true;
                                })
                            })
                        }
                        setTimeout(function () {
                            pic_0_now();
                        }, 900)
                    }, 1000)
                } else {

                    for (var i = 0; i < arr.length; i++) {
                        arr[i].style.opacity = 1;
                    }
                    animate(arr[pic], {"marginTop": -arr[pic].offsetHeight}, function () {
                        bool = true;
                    })
                    pics();
                }
            }
            //向上
            else if (type < 0) {
                pic--;
                if (pic < 0) {
                    //pic = 0;
                    pic_0_before();
                    pic = 3;
                    setTimeout(function () {
                        for (var i = 0; i < arr.length; i++) {
                            animate(arr[i], {"opacity": 1}, function () {
                                for (var j = 1; j < arr.length; j++) {
                                    arr[j].style.marginTop = -arr[j].offsetHeight + "px";
                                    arr[j].style.opacity = 1;
                                }
                                animate(arr[pic], {"opacity": 1}, function () {
                                    bool = true;
                                })
                            })
                        }
                        setTimeout(function () {
                            gif_now();
                        }, 900)
                    }, 1000)
                } else {
                    for (var i = 0; i < arr.length; i++) {
                        arr[i].style.opacity = 1;
                    }
                    setTimeout(function () {
                        animate_time_add_max(arr[pic + 1], {"marginTop": 0}, function () {
                            bool = true;
                        })
                    }, 1000)
                    pics();
                }
            }
            //二维码文本内容
            setTimeout(function () {
                qr_code_txt.style.backgroundPosition = arr_qr_code_txt[pic];
            }, 700);

            timer = setInterval(function () {
                pic++;
                if (pic > 3) {
                    gif_before();
                    pic = 0;
                    setTimeout(function () {
                        for (var i = 0; i < arr.length; i++) {
                            animate(arr[i], {"opacity": 0}, function () {
                                for (var j = 0; j < arr.length; j++) {
                                    arr[j].style.marginTop = "0px";
                                    arr[j].style.opacity = 0;
                                }
                                animate(arr[pic], {"opacity": 1}, function () {
                                    for (var j = 0; j < arr.length; j++) {
                                        animate(arr[j], {"opacity": 1})
                                    }
                                })
                            })
                        }
                        setTimeout(function () {
                            pic_0_now();
                        }, 800)
                    }, 900)
                } else {
                    for (var i = 0; i < arr.length; i++) {
                        arr[i].style.opacity = "1";
                    }
                    animate(arr[pic], {"marginTop": -arr[pic].offsetHeight})
                    pics();
                }
                setTimeout(function () {
                    qr_code_txt.style.backgroundPosition = arr_qr_code_txt[pic];
                }, 700);
            }, 4000);
        }

    };
}
//添加鼠标移动时停止轮播
move_mouse();
function move_mouse() {
    window.onmousemove = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            pic++;
            if (pic > 3) {
                gif_before();
                pic = 0;
                setTimeout(function () {
                    for (var i = 0; i < arr.length; i++) {
                        animate(arr[i], {"opacity": 0}, function () {
                            for (var j = 0; j < arr.length; j++) {
                                arr[j].style.marginTop = "0px";
                                arr[j].style.opacity = 1;
                            }
                            animate(arr[pic], {"opacity": 1}, function () {
                                for (var j = 0; j < arr.length; j++) {
                                    animate(arr[j], {"opacity": 1})
                                }
                            })
                        })
                    }
                    setTimeout(function () {
                        pic_0_now();
                    }, 900)
                }, 1000)
            } else {
                for (var i = 0; i < arr.length; i++) {
                    arr[i].style.opacity = "1";
                }
                animate(arr[pic], {"marginTop": -arr[pic].offsetHeight})
                pics();
            }
            setTimeout(function () {
                qr_code_txt.style.backgroundPosition = arr_qr_code_txt[pic];
            }, 700);
        }, 5000);
    }
}

//屏幕切换动画函数封装
function pics() {
    if (pic == 0) {
        map_before();
        sell_before();
        gif_before();
        setTimeout(pic_0_now, 1000);
    } else if (pic == 1) {
        pic_0_before();
        sell_before();
        gif_before();
        setTimeout(map_now, 1000);
    } else if (pic == 2) {
        pic_0_before();
        map_before();
        gif_before();
        setTimeout(sell_now, 1000);
    } else if (pic == 3) {
        pic_0_before();
        map_before();
        sell_before();
        setTimeout(gif_now, 1000);
    }
}

//齿轮
function wheel() {
    //获取元素
    var wheel1 = myId("wheel-1");
    var wheel2 = myId("wheel-2");
    var wheel3 = myId("wheel-3");
    var wheel4 = myId("wheel-4");
    var wheel3_div = myId("wheel-3_div");
    var wheel4_div = myId("wheel-4_div");
    var wheel_arr = [wheel1, wheel2, wheel3, wheel4, wheel3_div, wheel4_div,];
    //遍历注册事件
    for (var i = 0; i < wheel_arr.length; i++) {
        animate_yun(wheel_arr[i], "transform");
    }
}
//手机now before pic=0
function pic_0_now() {
    var ph1 = myId("ph1");
    ph1.style.top = "-300px";
    animate(ph1, {"top": 66}, wheel)
}
function pic_0_before() {
    var ph1 = myId("ph1");
    ph1.style.top = "66px";
    animate(ph1, {"top": -300}, function () {

    })
}

//map pic=1
function map_now() {
    var nail = myId("nail");
    nail.style.top = "-121px";
    animate(nail, {"top": 208})
    var cloud = myId("cloud");
    cloud.style.left = "420px";
    animate(cloud, {"left": -100})
}
function map_before() {
    var nail = myId("nail");
    nail.style.top = "208px";
    animate(nail, {"top": -121})
    var cloud = myId("cloud");
    cloud.style.left = "-100px";
    animate(cloud, {"left": 420})
}

//商铺 pic =2
function sell_now() {
    var fun = myId("fun");
    fun.style.top = "-300px";
    animate_time_add(fun, {"top": 48})
    var shop = myId("shop");
    shop.style.top = "-15px";
    animate(shop, {"top": 183})
}
function sell_before() {
    var fun = myId("fun");
    fun.style.top = "48px";
    animate_time_add(fun, {"top": -300})
    var shop = myId("shop");
    shop.style.top = "183px";
    animate(shop, {"top": -15})
}

//礼品优惠 pic =3
function gif_now() {
    var gif1 = myId("gift_1");
    var gif2 = myId("gift_2");
    var ballon3 = myId("ballon");
    var phone4 = myId("phone_1");
    gif1.style.left = "150px";
    gif2.style.left = "205px";
    ballon3.style.top = "120px";
    phone4.style.transform = "rotate(0deg)";
    animate(gif1, {"left": -4})
    animate(gif2, {"left": 333})
    animate(phone4, {"transform": 45}, function () {
        animate(ballon3, {"top": 0, "opacity": 1})
    })
}
function gif_before() {
    var gif1 = myId("gift_1");
    var gif2 = myId("gift_2");
    var ballon3 = myId("ballon");
    var phone4 = myId("phone_1");
    gif1.style.left = "-4px";
    gif2.style.left = "333px";
    ballon3.style.top = "0px";
    phone4.style.transform = "rotate(45deg)";
    animate(gif1, {"left": 150})
    animate(gif2, {"left": 205})
    animate(ballon3, {"top": 120, "opacity": 0}, function () {
        animate(phone4, {"transform": 0})
    })
}


//匀速动画函数
function animate_yun(element, attr, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = parseInt(element.style[attr].slice(7)) || 0;
        //每次移动多少步
        var step = 1;//
        current = current + step;
        if (current == 3600) {
            current = 0;
        }
        element.style[attr] = "rotate(" + current + "deg)";

        if (fn) {//如果用户传入了回调的函数
            fn(); //就直接的调用,
        }
    }, 7);
}
//时长增加缓动动画函数
function animate_time_add(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//假设都达到了目标
        for (var attr in json) {
            if (attr == "opacity") {//判断属性是不是opacity
                var current = getAttrValue(element, attr) * 100;
                //每次移动多少步
                var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//判断属性是不是zIndex
                element.style[attr] = json[attr];
            } else if (attr == "transform") {
                var current = parseInt(element.style[attr].slice(7)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = "rotate(" + current + "deg)";
            } else {//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//如果没到目标结果就为false
            }
        }
        if (flag) {//结果为true
            clearInterval(element.timeId);
            if (fn) {//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
    }, 35);
}
//超长时间动画函数
function animate_time_add_max(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//假设都达到了目标
        for (var attr in json) {
            if (attr == "opacity") {//判断属性是不是opacity
                var current = getAttrValue(element, attr) * 100;
                //每次移动多少步
                var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//判断属性是不是zIndex
                element.style[attr] = json[attr];
            } else if (attr == "transform") {
                var current = parseInt(element.style[attr].slice(7)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = "rotate(" + current + "deg)";
            } else {//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//如果没到目标结果就为false
            }
        }
        if (flag) {//结果为true
            clearInterval(element.timeId);
            if (fn) {//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
    }, 30);
}

//画布
huabu();
function huabu() {
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    var arr = [];
    var winw = canvas.width;
    var winh = canvas.height;
    var time = false
    var px;
    var py;

    function ain() {
        c.clearRect(0, 0, winw, winh)
        requestAnimationFrame(ain);
        try {
            for (var i = 0; i < arr.length; i++) {
                arr[i].r;
                arr[i].y += arr[i].speedY;
                arr[i].x += arr[i].speedX;
                arr[i].r += 0.2;
                arr[i].alpha -= 0.005
                if (arr[i].alpha <= 0) {
                    arr.splice(i, 1)
                }
                c.save()
                c.beginPath();
                c.translate(-0.5 * arr[i].r, -0.5 * arr[i].r)
                c.fillStyle = "rgba(" + arr[i].red + "," + arr[i].green + "," + arr[i].blue + "," + arr[i].alpha + ")"
                c.arc(arr[i].x, arr[i].y, arr[i].r, 0, 2 * Math.PI);
                c.fill()
                c.restore()
            }
        } catch (e) {
        }
    }

    ain()
    canvas.addEventListener("mousemove", function (e) {

        var e = e || event;
        px = e.offsetX;
        py = e.offsetY;

        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        var r = 1;
        var speedX = Math.ceil(Math.random() * 10) - 5;
        var speedY = Math.ceil(Math.random() * 10) - 5;
        var alpha = 0.5;

        arr.push({
            red: red,
            green: green,
            blue: blue,
            speedX: speedX,
            speedY: speedY,
            x: px,
            y: py,
            r: r,
            alpha: alpha
        })
    })
}