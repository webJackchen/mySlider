# mySlider
#####[描    述] 调用简单，配置简单，样式更灵活，更轻量级，整体原生开发，速度更快，优点：更小更快。支持多种动画形式，宽度可配置，完美适应屏幕大小
#####[作者网名] webkackchen（阿飞）
#####[github地址] https://github.com/webJackchen/mySlider
#####[邮    箱] webjackchen@163.com
#####[QQ交流] 602071930
#####[版 本 号] ver0.0.1
#####未经本人允许，不得擅自用于商业用途
#####具体效果，请看demo
#<br/>
####使用方法

##html

&lt;div&nbsp;id="div1"&nbsp;class="slider"&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&nbsp;class="picList"&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&gt;&lt;img&nbsp;src="img/a1.jpg"&gt;&lt;/a&gt;&lt;/li&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&gt;&lt;img&nbsp;src="img/a2.jpg"&gt;&lt;/a&gt;&lt;/li&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&gt;&lt;img&nbsp;src="img/a3.jpg"&gt;&lt;/a&gt;&lt;/li&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&gt;&lt;img&nbsp;src="img/a4.jpg"&gt;&lt;/a&gt;&lt;/li&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&gt;&lt;img&nbsp;src="img/a5.jpg"&gt;&lt;/a&gt;&lt;/li&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&gt;&lt;img&nbsp;src="img/a6.jpg"&gt;&lt;/a&gt;&lt;/li&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class="pointBox"&gt;</br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</br>
&lt;/div&gt;</br>

####js部分
首先引入mySlider.js文件</br>
&lt;script type="text/javascript" src="mySlider.js"&gt;&lt;/script&gt;</br>
然后实例化slider对象</br>

var&nbsp;d2&nbsp;=&nbsp;new&nbsp;window.Slider();</br>
&nbsp;&nbsp;&nbsp;&nbsp;d2.init(oDiv2,{</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:"600px",</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;animId:0,</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;event:"mouseover"</br>
&nbsp;&nbsp;&nbsp;&nbsp;});</br>

