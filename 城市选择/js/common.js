/*
 * ����id��ȡ��ǩԪ��
 */
function myId(id) {
    return document.getElementById(id);
}
/*
 * ���ݱ�ǩ����ȡ��ǩԪ��
 */
function myTag(tagName) {
    return document.getElementsByTagName(tagName);
}
//����name���Ե�ֵ��ȡ��ǩԪ��
function myName(myName) {
    return document.getElementsByName(myName);
}
//����class���Ե�ֵ��ȡ��ǩԪ��
function myClass(myClass) {
    return document.getElementsByName(myClass);
}
/*
 * �ú����Ƿ��ص���ָ����ʽ������,���ַ�������
 * ����:date ----����
 * ����ֵ: �ַ������͵�����
 * */
function getDatetoString(date) {
    var strDate;//�洢���ڵ��ַ���
    //��ȡ��
    var year = date.getFullYear();
    //��ȡ��
    var month = date.getMonth() + 1;
    //��ȡ��
    var day = date.getDate();
    //��ȡСʱ
    var hour = date.getHours();
    //��ȡ����
    var minute = date.getMinutes()
    //��ȡ��
    var second = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    //ƴ��
    strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;//��������,���ڱ���������λ��
    return strDate;
}
/*
 *����innerText���Ե�ֵ
 * element-----Ϊĳ��Ԫ����������ֵ
 * content-----���õ�ֵ
 * */
function setInnerText(element, content) {
    if (typeof element.textContent === "undefined") {
        //IE�����
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
/*
 * ��ȡinnerText���Ե�ֵ
 * element Ҫ��ȡ��Ԫ��
 * ���ص��Ǹ�Ԫ�ص�innerTextֵ
 * */
function getInnerText(element) {
    if (typeof element.textContent === "undefined") {
        //IE�����
        return element.innerText;
    } else {
        return element.textContent;
    }
}


//��ȡ��ǰԪ��ǰһ��Ԫ��
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
//��ȡ��ǰԪ�صĺ�һ��Ԫ��
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

//��ȡ��Ԫ���еĵ�һ��Ԫ��
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
//��ȡ��Ԫ���е����һ��Ԫ��
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

//��ȡ�ֵ�Ԫ��
function getsiblings(ele) {
    if (!ele)return;//�жϵ�ǰ��ele���Ԫ���Ƿ����
    var elements = [];//���������Ŀ�ľ��Ǵ洢��ǰ���Ԫ�ص����е��ֵ�Ԫ��
    var el = ele.previousSibling;//��ǰԪ�ص�ǰһ���ڵ�
    while (el) {
        if (el.nodeType === 1) {//Ԫ��
            elements.push(el);//�ӵ�������
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

//��ȡԪ��style�����õ����Ե�ֵ
function getAttrValue(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

//�����滺����������
function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//���趼�ﵽ��Ŀ��
        for (var attr in json) {
            if (attr == "opacity") {//�ж������ǲ���opacity
                var current = getAttrValue(element, attr) * 100;
                //ÿ���ƶ����ٲ�
                var target = json[attr] * 100;//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step = (target - current) / 10;//(Ŀ��-��ǰ)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//�ж������ǲ���zIndex
                element.style[attr] = json[attr];
            } else if (attr == "transform") {
                var current = parseInt(element.style[attr].slice(7)) || 0;
                //ÿ���ƶ����ٲ�
                var target = json[attr];//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step = (target - current) / 10;//(Ŀ��-��ǰ)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = "rotate(" + current + "deg)";
            } else {//��ͨ������

                //��ȡ��ǰ��λ��----getAttrValue(element,attr)��ȡ�����ַ�������
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //ÿ���ƶ����ٲ�
                var target = json[attr];//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step = (target - current) / 10;//(Ŀ��-��ǰ)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//���û��Ŀ������Ϊfalse
            }
        }
        if (flag) {//���Ϊtrue
            clearInterval(element.timeId);
            if (fn) {//����û������˻ص��ĺ���
                fn(); //��ֱ�ӵĵ���,
            }
        }
        console.log("target:" + target + "current:" + current + "step:" + step);
    }, 10);
}