var inputObjs=document.getElementsByTagName("input");
for(var i=0;i<inputObjs.length;i++){
    inputObjs[i].onfocus=function(){
        for(var j=0;j<inputObjs.length;j++){
        	inputObjs[j].style.border="1px solid #aaa";
        }
        this.style.border="1px solid #fc5e1d";
    };
}

// 验证手机号
function cLn(classname){
	return document.getElementsByClassName(classname);
}
var he=cLn("he");

//手机号验证
var mobileNum=cLn("mobile_num")[0];
function phoneNum(evt){
	var tip1=mobileNum.getElementsByClassName("tip");
	for(var i=0;i<tip1.length;i++){
		tip1[i].style.display="none";
	}
    if(evt.value.length==0){
    	evt.nextElementSibling.style.display="inline-block"; 
    }else if(/13[0-9][0-9]{8}/.test(evt.value)||/14[57][0-9]{8}/.test(evt.value)||/(15[0-3]|15[5-9])[0-9]{8}/.test(evt.value)||/17[01678][0-9]{8}/.test(evt.value)||/18[0-9][0-9]{8}/.test(evt.value)) {   	 
    	he[0].style.display="inline-block"; 
    }
    else {
        evt.nextElementSibling.nextElementSibling.style.display="inline-block";    
    }
}
myId("pn").onblur=function(){
    phoneNum(this);
};
myId("pn").onfocus=function(){
    phoneNum(this);
};
myId("pn").onkeyup=function(){
	phoneNum(this);
};
// 短信动态码验证
var mes=cLn("mes")[0];
var tip2=mes.getElementsByClassName("tip");
function yzm(evt){
	if(evt.value.length==0){
    	for(var i=0;i<tip2.length;i++){
		tip2[i].style.display="none";
	     }
    	evt.nextElementSibling.style.display="inline-block"; 
    }
    if(evt.value.length!=6&&evt.value.length!=0){
    	for(var i=0;i<tip2.length;i++){
		tip2[i].style.display="none";
	     }
    	evt.nextElementSibling.nextElementSibling.style.display="inline-block"; 
    }
    else if(evt.value.length==6){
    	for(var i=0;i<tip2.length;i++){
		tip2[i].style.display="none";
	    }
    	he[1].style.display="inline-block"; 
    }
}
myId("yzm").onfocus=function(){
	yzm(this);
};
myId("yzm").onblur=function(){
	yzm(this);
};
myId("yzm").onkeyup=function(){
    yzm(this);
};
//创建密码
var pwd = myId("pwd");
var setPwd=document.getElementsByClassName("pwd_set_ts")[0];
var spanObjs=setPwd.children;
var setD=cLn("pwd_set_con")[0];
var tip3=setD.getElementsByClassName("tip");
function fn1(evt){
	    if(evt.value.length<6) {
	    evt.nextElementSibling.nextElementSibling.style.display="inline-block" ;
	    for(var i=0;i<spanObjs.length;i++){
    		spanObjs[i].style.backgroundColor="#e3e3e3";
    	}
	    return;
	    }    
	    if( /[0-9]/.test( evt.value ) ) {
	      spanObjs[0].style.backgroundColor="#fc5e1d";
	    }
	    if( /[a-zA-Z]/.test(evt.value) ) {
	      spanObjs[1].style.backgroundColor="#ff8905";
	    }
	    if( /[^0-9a-zA-Z]/.test(evt.value) ) {
	       spanObjs[2].style.backgroundColor="green";
	    }
}
function fn2(evt){
    if(evt.value.length==0){
    	for(var i=0;i<tip3.length;i++){
		tip3[i].style.display="none";
	    }
	    evt.nextElementSibling.style.display="inline-block"; 
    }
    else if(evt.value.length<6){
    	for(var i=0;i<tip3.length;i++){
		tip3[i].style.display="none";
	     }
    	evt.nextElementSibling.nextElementSibling.style.display="inline-block"; 
    }
    else{
    	for(var i=0;i<tip3.length;i++){
		tip3[i].style.display="none";
	     }
    	for(var i=0;i<spanObjs.length;i++){
    		spanObjs[i].style.backgroundColor="#e3e3e3";
    	}
    	he[2].style.display="inline-block"; 
    }
}
pwd.addEventListener("keyup",function(){
	for(var i=0;i<tip3.length;i++){
		tip3[i].style.display="none";
	     }
    fn1(this); 
})
pwd.onblur=function(){
	for(var i=0;i<tip3.length;i++){
		tip3[i].style.display="none";
	     }
    fn2(this);
};
pwd.onfocus=function(){
	for(var i=0;i<tip3.length;i++){
		tip3[i].style.display="none";
	     }
    fn2(this);
};


// 确认密码
var rep=myId("rep");
function re(evt) {
    if(evt.value===pwd.value&&pwd.value.length!=0){
    	evt.nextElementSibling.style.display="none"; 
    	he[3].style.display="inline-block";
    }
    else{
    	he[3].style.display="none";
    	evt.nextElementSibling.style.display="inline-block"; 
    }
}
rep.addEventListener("keyup",function(){
	re(this);
} );
rep.addEventListener("focus",function(){
	re(this);
} );
rep.addEventListener("blur",function(){
	re(this);
} );
