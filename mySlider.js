//====================================================================================================
// [插件名称] 幻灯片组件mySlider
//----------------------------------------------------------------------------------------------------
// [描    述] 调用简单，配置简单，样式更灵活，更轻量级，整体原生开发，速度更快，优点：更小更快。
//            支持多种动画形式，宽度可配置，完美适应屏幕大小,不依赖任何库，手机端也支持。。。。
//----------------------------------------------------------------------------------------------------
// [作者网名] webkackchen（阿飞）
// [邮    箱] webkackchen@163.com
// [QQ交流] 602071930
// [版 本 号] ver0.0.1
//====================================================================================================
(function(ppt){
    ppt.Slider = function(){
        this.oParent = null;
        this.picList = null;
        this.pointList = null;
        this.settings = {//默认配置项
            width:"500px",      //容器宽度
            timeInterval:5000,  //幻灯片播放速度
            autoPlay:true,      //是否自动播放
            animId:0,            //动画id 0-表示滑动效果     1-表示淡入淡出     2-表示上下滚动
            event:"click"       //加在原点上的事件类型
        }
    }
    ppt.Slider.prototype.init = function(obj,opt){
        opt = opt || {};
        this.extend(this.settings,opt);
        this.oParent = obj;
        this.oParent.style.width = this.settings.width;
        this.picList = this.oParent.getElementsByClassName("picList")[0];
        this.imgList = this.picList.getElementsByTagName("li");
        this.pointList = this.oParent.getElementsByClassName("pointBox")[0];
        if(this.settings.animId == 2){
            var imgRectHeight = this.imgList[0].offsetHeight;
            this.setAttr(this.picList,'width:'+this.settings.width+';height:'+imgRectHeight*(this.imgList.length)+ 'px;');
        }else{
            this.picList.style.width = 100*(this.imgList.length) + "%";
        }
        this.timeCount = 0;
        this.index = 0;
        this.index1 = 0;
        var points = "";
        var This = this;
        this.Timer = null;
        for(var i=0;i<this.imgList.length;i++){
            this.imgList[i].style.width = this.picList.offsetWidth / this.imgList.length + "px";
            this.imgList[i].style.height = "auto";
            switch (this.settings.animId){
                case 0:break;
                case 1:this.setAttr(this.imgList[i],'width:'+this.picList.offsetWidth / this.imgList.length + 'px;position:relative;top:0;left:0');break;
                case 2:this.setAttr(this.imgList[i],'width:'+this.picList.offsetWidth +'px;float:none');break;
                default :;
            }
            points += "<span></span>";
        }
        this.pointsArr = this.pointList.getElementsByTagName("span");

        if(this.settings.animId == 2){
            this.oParent.style.height = this.picList.offsetHeight/this.imgList.length + "px";
            this.setAttr(this.oParent,'height:'+this.picList.offsetHeight/this.imgList.length+'px;width:'+ this.imgList[0].offsetWidth + 'px');
            this.setAttr(this.pointList,'display:block;bottom:10px;right:30px');
        }else{
            this.setAttr(this.pointList,'display:block;bottom:10px;right:30px');
            this.oParent.style.height = this.picList.offsetHeight + "px";
        }
        this.pointList.innerHTML = points;
        this.pointsArr[0].style.backgroundColor = "red";
        if(this.settings.autoPlay){
            this.Timer = setInterval(function(){
                This.autoplay(This);
            },This.settings.timeInterval);
        }
        this.eventHandle();
    }
    ppt.Slider.prototype.autoplay = function(obj){
        var This = obj;
        if(This.index == 0){
            This.imgList[0].style.position = "static";
            if(This.settings.animId == 0){
                This.picList.style.left = 0;
            }else if(This.settings.animId == 2){
                This.picList.style.top = 0;
            }
            This.index1 = 0;
        }
        if(This.index == This.pointsArr.length - 1){
            This.index = 0;
            This.imgList[0].style.position = "relative";
            if(This.settings.animId == 0){
                This.imgList[0].style.left = This.pointsArr.length*This.imgList[0].offsetWidth + "px";
            }else if(This.settings.animId == 2){
                This.imgList[0].style.top = This.pointsArr.length*This.imgList[0].offsetHeight + "px";
            }

        }else{
            This.index++;
        }

        This.index1++;
        for(var j=0;j<This.pointsArr.length;j++){
            This.pointsArr[j].style.backgroundColor = "rgba(0,0,0,0.8)";
        }

        This.pointsArr[This.index].style.backgroundColor = "red";
        if(This.settings.animId == 0){
            This.startMove(This.picList,{left:- This.index1*This.imgList[0].offsetWidth});
        }else if(This.settings.animId == 1){
            for(var m=0;m<This.pointsArr.length;m++){
                This.imgList[m].style.display = "none";
                This.imgList[m].style.opacity = 0;
            }
            This.imgList[This.index].style.display = "block";
            This.startMove(This.imgList[This.index],{opacity:100})
        }else{
            This.startMove(This.picList,{top:- This.index1*This.imgList[0].offsetHeight});
        }

    }
    ppt.Slider.prototype.eventHandle = function(){
        var This = this;
        for(var i=0;i<This.pointsArr.length;i++){
            (function(k){
                This.pointsArr[k].addEventListener(This.settings.event,function(){
                    This.index = k;
                    This.index1 = k;
                    for(var j=0;j<This.pointsArr.length;j++){
                        This.pointsArr[j].style.backgroundColor = "rgba(0,0,0,0.8)";
                    }
                    This.pointsArr[This.index].style.backgroundColor = "red";
                    if(This.settings.animId == 0){
                        This.startMove(This.picList,{left:- This.index*This.imgList[0].offsetWidth})
                    }else if(This.settings.animId == 1){
                        for(var m=0;m<This.pointsArr.length;m++){
                            This.imgList[m].style.display = "none";
                            This.imgList[m].style.opacity = 0;
                        }
                        This.imgList[This.index].style.display = "block";
                        This.startMove(This.imgList[This.index],{opacity:100})
                    }else{
                        This.startMove(This.picList,{top:- This.index*This.imgList[0].offsetHeight})
                    }
                },false);
            })(i)
        }
        This.oParent.addEventListener("mouseover",function(){
            clearInterval(This.Timer);
        },false);
        This.oParent.addEventListener("mouseout",function(){
            clearInterval(This.Timer);
            This.Timer = setInterval(function(){
                This.autoplay(This);
            },This.settings.timeInterval);
        },false);
    }
    ppt.Slider.prototype.extend = function extend(obj1,obj2){
        for(var attr in obj2){
            obj1[attr] = obj2[attr];
        }
    }
    ppt.Slider.prototype.setAttr = function setAttr(obj,json){
        if( obj.style.cssText ){
            obj.style.cssText = json;
        }else{
            obj.setAttribute("style",json);
        }
    }
    ppt.Slider.prototype.startMove = function startMove(obj,json,endFn){
        var This = this;
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var bBtn = true;
            for(var attr in json){
                var iCur = 0;
                if(attr == 'opacity'){
                    if(Math.round(parseFloat(This.getStyle(obj,attr))*100)==0){
                        iCur = Math.round(parseFloat(This.getStyle(obj,attr))*100);
                    }
                    else{
                        iCur = Math.round(parseFloat(This.getStyle(obj,attr))*100) || 100;
                    }
                }
                else{
                    iCur = parseInt(This.getStyle(obj,attr)) || 0;
                }
                var iSpeed = (json[attr] - iCur)/8;
                iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if(iCur!=json[attr]){
                    bBtn = false;
                }
                if(attr == 'opacity'){
                    obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                    obj.style.opacity = (iCur + iSpeed)/100;
                }
                else{
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
            }
            if(bBtn){
                clearInterval(obj.timer);
                if(endFn){
                    endFn.call(obj);
                }
            }
        },30);
    }
    ppt.Slider.prototype.getStyle = function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return getComputedStyle(obj,false)[attr];
        }
    }
})(window);
