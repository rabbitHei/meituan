/*
 * 根据id获取标签元素
 */
function myId(id) {
    return document.getElementById(id);
}
/*
 * 根据标签名获取标签元素
 */
function myTag(tagName) {
    return document.getElementsByTagName(tagName);
}
//根据name属性的值获取标签元素
function myName(myName) {
    return document.getElementsByName(myName);
}
//根据class属性的值获取标签元素
function myClass(myClass) {
    return document.getElementsByName(myClass);
}
/*
 * 该函数是返回的是指定格式的日期,是字符串类型
 * 参数:date ----日期
 * 返回值: 字符串类型的日期
 * */
function getDatetoString(date) {
    var strDate;//存储日期的字符串
    //获取年
    var year = date.getFullYear();
    //获取月
    var month = date.getMonth() + 1;
    //获取日
    var day = date.getDate();
    //获取小时
    var hour = date.getHours();
    //获取分钟
    var minute = date.getMinutes()
    //获取秒
    var second = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    //拼接
    strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;//隐藏问题,关于变量声明的位置
    return strDate;
}
/*
 *设置innerText属性的值
 * element-----为某个元素设置属性值
 * content-----设置的值
 * */
function setInnerText(element, content) {
    if (typeof element.textContent === "undefined") {
        //IE浏览器
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
/*
 * 获取innerText属性的值
 * element 要获取的元素
 * 返回的是该元素的innerText值
 * */
function getInnerText(element) {
    if (typeof element.textContent === "undefined") {
        //IE浏览器
        return element.innerText;
    } else {
        return element.textContent;
    }
}


//获取当前元素前一个元素
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var ele = element.previousSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的后一个元素
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var ele = element.nextSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}

//获取父元素中的第一个元素
function getFirstElementByParent(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    } else {
        var ele = parent.firstChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素中的最后一个元素
function getLastElementByParent(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    } else {
        var ele = parent.lastChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}

//获取兄弟元素
function getsiblings(ele) {
    if (!ele)return;//判断当前的ele这个元素是否存在
    var elements = [];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el = ele.previousSibling;//当前元素的前一个节点
    while (el) {
        if (el.nodeType === 1) {//元素
            elements.push(el);//加到数组中
        }
        el = el.previousSibling;
    }
    el = ele.nextSibling;
    while (el) {
        if (el.nodeType === 1) {
            elements.push(el);
        }
        el = el.nextSibling;
    }
    return elements;
}

//获取元素style中设置的属性的值
function getAttrValue(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

//完整版缓动动画函数
function animate(element, json, fn) {
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
        console.log("target:" + target + "current:" + current + "step:" + step);
    }, 10);
}