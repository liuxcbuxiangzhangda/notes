##前端重点##
css和js基础

一、主要的布局：固定布局，弹性布局，流式布局，响应式布局（rem和em），自适应布局（rem和em）
> 弹性布局
> [http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
> [http://blog.csdn.net/NARUTO_LUOLUO/article/details/51281092](http://blog.csdn.net/NARUTO_LUOLUO/article/details/51281092)
> 
> 响应式布局[http://blog.csdn.net/gertyy/article/details/52764527](http://blog.csdn.net/gertyy/article/details/52764527)
> 
> 自适应布局[http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html](http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html)


二、闭包，递归
> 闭包
> > [http://mp.weixin.qq.com/s/lT8uOaCvkVqcPgYlfwQ7PQ](http://mp.weixin.qq.com/s/lT8uOaCvkVqcPgYlfwQ7PQ)
> [http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
> [http://www.cnblogs.com/qieguo/p/5457040.html](http://www.cnblogs.com/qieguo/p/5457040.html)

三、模块化开发

四、自动化构建工具

五、流行的框架

六、ajax数据请求，应用场景，异步和同步

七、less的便利用法
> [http://www.1024i.com/demo/less/](http://www.1024i.com/demo/less/)

> [http://lesscss.cn/](http://lesscss.cn/)

> [http://www.cnblogs.com/starof/p/5226739.html](http://www.cnblogs.com/starof/p/5226739.html)

> [http://www.cnblogs.com/grey-zhou/p/5796496.html](http://www.cnblogs.com/grey-zhou/p/5796496.html)


八、兼容性

九、跨域
> 只要网站的 协议名protocol、 主机host、 端口号port 这三个中的任意一个不同，网站间的数据请求与传输便构成了跨域调用

> 如果是协议和端口造成的跨域问题“前台”是无能为力的；
在跨域问题上，域仅仅是通过“URL的首部”来识别而不会去尝试判断相同的ip地址对应着两个域或两个域是否在同一个ip上。

十、动画效果（css3的过度，动画，2D3D转换）

十一、前端代码优化

十二、css命名规则
> js方面：
> >多封装函数，少循环，要循环的话选择循环次数少的，异步请求

> css方面：
> >多写共性类，该简写的简写

> html方面：
> >动态加载：当有很多图片等，而且不是一次性显示，可以动态请求加载

十二.前后端分离具体是什么

###2、匿名函数使用场景###
一个函数之所以要有名字，是为了可以在后续重复使用。但是，如果一个函数只用一次，那么就没有必要给它名字了。并且，多一个名字就会多声明一个无用的变量，对命名空间造成不必要的浪费。简洁，一向是编程的一个重要原则
如
`var location = getLocation(a, b);var x = location.getX();print(x);`

改为`print(location.getX());`

匿名函数使用最多的场景是回调函数

###gulp使用4个api和插件和能完成的任务###

> 4个API(gulp.task,gulp.src,gulp.dest,gulp.watch)

> 插件：gulp-load-plugins,gulp-rename,gulp-uglify,gulp-minify-css,gulp-minify-html,gulp-jshint,gulp-concat,gulp-less,gulp-sass,gulp-imagemin,gulp-livereload，先要用npm或者yarn安装在package.js

> gulp可以完成的任务：编译less和sass，压缩css，html,js，图片等，文件合并，js代码检查，自动刷新

> [http://www.cnblogs.com/2050/p/4198792.html](http://www.cnblogs.com/2050/p/4198792.html)
> [http://www.cnblogs.com/lovelyun/p/5372251.html](http://www.cnblogs.com/lovelyun/p/5372251.html)
###工厂模式和构造函数模式的诞生###
> 虽然object构造函数和字面量（var mm={}）可以创建单个对象，但是代码重复量很多

> [http://blog.csdn.net/flyingpig2016/article/details/52939679](http://blog.csdn.net/flyingpig2016/article/details/52939679)
###工厂模式的优缺点###
> 可以创建多个对象，但是不知道对象的类型（这是与构造函数模式最大的不同，构造函数模式创建的对象都有一个constructor属性，这个属性指向构造函数，所以创建的对象自己是谁产生的，而工厂模式创建的对象不知道）
> [http://www.cnblogs.com/lwl8/p/3614586.html](http://www.cnblogs.com/lwl8/p/3614586.html)
###构造函数的优缺点###
> 不能实现对象相同属性和方法的共享
> [http://blog.csdn.net/flyingpig2016/article/details/52939679](http://blog.csdn.net/flyingpig2016/article/details/52939679)
###通过构造函数，创建对象，new操作符要经历的过程（4个）###
> 1.创建一个空对象
> 2.将构造函数的作用域赋给新对象（因为this指向了这个新对象）
> 3.执行构造函数中的代码（为新对象添加属性）
> 4.返回新对象
###构造函数与普通函数的不同###
> 唯一的不同就是调用方式不同，凡是可以通过new创建对象的都是构造函数，不能的就是普通函数
###类，对象，实例的区别###
> 类是对象的细分，对象是类的具体实物（h2o是类，农夫山泉是对象）
> var d=new Date();date()是类，d是对象，这个过程是实例化
###使用require.js的好处###
> [http://www.ruanyifeng.com/blog/2012/11/require_js.html](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
###面向对象的特征和作用###
> 1.解决代码重用问题
> 2.特征：抽象，继承，封装，多态
> 3.有点：a.开发时间短，效率高，可靠性高，所开发的程序更强壮。由于面向对象编程的可重用性，可以在应用程序中大量采用成熟的类库，从而缩短了开发时间。
b。应用程序更易于维护、更新和升级。继承和封装使得应用程序的修改带来的影响更加局部化。
> [http://www.cnblogs.com/hnrainll/archive/2012/09/18/2690846.html](http://www.cnblogs.com/hnrainll/archive/2012/09/18/2690846.html)
> [https://zhidao.baidu.com/question/555833631.html](https://zhidao.baidu.com/question/555833631.html)
###函数作为参数传递###
> 回调函数是典型（用匿名的函数作为参数）
> [http://blog.csdn.net/kaituozhe345/article/details/7236454](http://blog.csdn.net/kaituozhe345/article/details/7236454)
###原生js去除前后的空格###
> charAt（）；
> [http://www.cnblogs.com/mingforyou/p/3930638.html](http://www.cnblogs.com/mingforyou/p/3930638.html)
###select与datalist的区别###
> datalist是html5中新增的表单标签
> datalist需要配合input使用，不仅可以选择还可以在本身输入
> datalist还可以模糊查询
###input的type值（表单类型）###
> 原本有text,redio,button,file
> html5增加了:设置限制的（number,range）,表单验证的（email,url,tel），时间相关的（date,month,week,time,datetime,datetime-local）,color，search

###表单的属性###
>form: [http://www.w3school.com.cn/tags/tag_form.asp](http://www.w3school.com.cn/tags/tag_form.asp)
> input:[http://www.w3school.com.cn/html5/html_5_form_attributes.asp](http://www.w3school.com.cn/html5/html_5_form_attributes.asp)
###html5表单新增的属性###
> form:autocomplete,novalidate
> input:autocomplete,autofocus,placeholder,required,multiple,list,formaction,formmethod,formenctype ,formnovalidate ,formtarget ,pattern,
> [http://www.w3school.com.cn/html5/html_5_form_attributes.asp](http://www.w3school.com.cn/html5/html_5_form_attributes.asp)
> [https://zhidao.baidu.com/question/1799245514282549947.html](https://zhidao.baidu.com/question/1799245514282549947.html)
> [http://www.cnblogs.com/best/p/6083701.html?from=timeline&isappinstalled=1](http://www.cnblogs.com/best/p/6083701.html?from=timeline&isappinstalled=1)
###canvas的使用###
###canvas和svg的区别###
###什么是盒子模型###
> 边界border,内边距padding，外面距margin
###css3的文本效果###
> text-shadow  word-wrap
###单位rem em px###
> [http://blog.csdn.net/u013418331/article/details/53148069](http://blog.csdn.net/u013418331/article/details/53148069)
###web储存###
> localstorage和sessionstorage

> cookie的作用是与服务器进行交互，作为HTTP规范的一部分存在，而web storage仅仅是为了在本地存储数据而生
> [http://www.cnblogs.com/lidongcn/p/4493496.html](http://www.cnblogs.com/lidongcn/p/4493496.html)

> "与Cookie相比，Web Storage存在不少的优势，概括为以下几点：
1. 存储空间更大：能提供5MB的存储空间（不同浏览器的提供的空间不同），Cookie仅4KB
2. 存储内容不会发送到服务器：当设置了Cookie后，Cookie的内容会随着请求一并发送的服务器，这对于本地存储的数据是一种带宽浪费。而Web Storage中的数据则仅仅是存在本地，不会与服务器发生任何交互。
3. 更多丰富易用的接口：Web Storage提供了一套更为丰富的接口，使得数据操作更为简便。
4. 独立的存储空间：每个域（包括子域）有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混乱
###http协议###
###响应式布局###
> css3的媒体查询：[http://blog.csdn.net/u013418331/article/details/53148069](http://blog.csdn.net/u013418331/article/details/53148069)
> [http://blog.csdn.net/yuzhongkai/article/details/51041937](http://blog.csdn.net/yuzhongkai/article/details/51041937)
> 媒体查询写在CSS样式代码的最后，CSS是层叠样式表，在同一特殊性下，靠后的的样式会重叠前面的样式

> bootstrap框架

###html5中嵌入视频###
    <video src=""  width="300" height="200" controls>  
      Your browser does not support the <video> element.      
    </video>
###link和@import的区别###
1. 老祖宗的差别。link属于XHTML标签，而@import完全是CSS提供的一种方式。 link标签除了可以加载CSS外，还可以做很多其它的事情，比如定义RSS，定义rel连接属性等，@import就只能加载CSS了。
2. 加载顺序的差别。当一个页面被加载的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS会等到页面全部被下载完再被加载。所以有时候浏览@import加载CSS的页面时开始会没有样式（就是闪烁），网速慢的时候还挺明显。
3. 兼容性的差别。由于@import是CSS2.1提出的所以老的浏览器不支持，@import只有在IE5以上的才能识别，而link标签无此问题。
4. 使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。
###IE6的双倍边距###
    <style type="text/css">
     body {margin:0}
     div { float:left; margin-left:10px; width:200px; height:200px; border:1px solid red }
    </style>

浮动后本来外边距10px,但IE6下解释为20px,解决办法是加上display:inline

有时IE6下单单使用 margin-left/right 也会出现双倍，加display:inline 是可以解决的。(当float和margin同时使用时)
###IE设置滚动条颜色###
    <style type="text/css">
     body { scrollbar-face-color:#f6f6f6; scrollbar-highlight-color:#fff; scrollbar-shadow-color:#eeeeee; scrollbar-3dlight-color:#eeeeee; scrollbar-arrow-color:#000; scrollbar-track-color:#fff; scrollbar-darkshadow-color:#fff; }
    </style>
解决办法是将body换成html
###ie6下无法设置1px左右的div###
> IE6下这个问题是因为默认的行高造成的，解决的方法也有很多，例如：overflow:hidden | zoom:0.08 | line-height:1px
###重设默认样式###
> 某些属性如margin、padding等，不同浏览器会有不同的解释。因此最好在开发前首先将全体的margin、padding设置为0、列表样式设置为none等
###float元素的父元素不能指定clear属性###
> MacIE下如果对float的元素的父元素使用clear属性，周围的float元素布局就会混乱。这是MacIE的著名的bug，倘若不知道就会走弯路
###大小写样式###
> css和html不区分大小写，js和xhtml区分大小写，而且xhtml只能小写
###行内元素###
> margin-top和margin-bottom不起作用，height不起作用（除了input和image）
> padding和margin-left和margin-right起作用
###伪类的：root都是指向根元素 html###
###选择器优先级###
> !important最高

> 遇到一个id就往特指度数值中加100，遇到一个class就往特指度数值中加10，遇到一个element就往特指度数值中加1。
> 
p   1

p.large  11

P#large   101

div p#large  102

div p#large ul.list   113

div p#large ul.list li  114
###媒体查询###
    @media only screen and (max-width: 1024px) {
    margin: 0;
    }
> only：停止旧版本浏览器解析选择器的其余部分。用来定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实only很多时候是用来对那些不支持Media Query 但却支持Media Type 的设备隐藏样式表的。其主要有：支持媒体特性（Media Queries）的设备，正常调用样式，此时就当only 不存在；对于不支持媒体特性(Media Queries)但又支持媒体类型(Media Type)的设备，这样就会不读了样式，因为其先读only 而不是screen；另外不支持Media Qqueries 的浏览器，不论是否支持only，样式都不会被采用。

> screen是浏览器视窗口不是物理屏幕大小

###display：none和visibility：hidden区别###
> 两者都是将某个元素隐藏起来，区别是：display:none会使对象彻底消失，不占据空间；但是visibility:hidden所占的空间还在，留了一块空白区域。
> 
> overfloa:hidden 会形成新的块级格式化上下文

###mypic.jpg会不会被加载###
    #test2 {
    background-image: url('mypic.jpg');
    display: none;
    }
    #i-am-useless {background-image: url('mypic.jpg');}  //图片不会被加载
    `#test2 {
    background-image: url('mypic.jpg');
    display: none;
    }`//图片会被加载
    #test2 {
    background-image: url('mypic.jpg');
    visibility: hidden;
    }//图片会被加载
    #test1 {
    display: none;
    }
    #test2 {
    background-image: url('mypic.jpg');
    visibility: hidden;
    }//图片不会被加载
    #test1 {
    visibility: hidden;
    }
    #test2 {
    background-image: url('mypic.jpg');
    display: none;
    }//图片会被加载
###css的匹配###
> 浏览器CSS匹配不是从左到右进行查找，而是从右到左进行查找。比如#divBox p span.red{color:red;}，浏览器的查找顺序如下：先查找html中所有class='red'的span元素，找到后，再查找其父辈元素中是否有p元素，再判断p的父元素中是否有id为divBox的div元素，如果都存在则匹配上。浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。

###overflow的属性###
###页面加载完成时就执行的js代码###
> [http://blog.csdn.net/zdnlp/article/details/14231067](http://blog.csdn.net/zdnlp/article/details/14231067)
###selectIdex和index###
###js设置的css样式比外部css权重高，所以js设置了样式，hover的样式可能不起作用###
> [http://blog.csdn.net/wxl1555/article/details/53037571](http://blog.csdn.net/wxl1555/article/details/53037571)
###原生js改变css样式###
> [http://www.jb51.net/article/108550.htm](http://www.jb51.net/article/108550.htm)
###form中的input可以设置为readonly和disable，请问2者有什么区别###
> readonly不可编辑，但可以选择和复制；值可以传递到后台
disabled不能编辑，不能复制，不能选择；值不可以传递到后台
###消息提示框###
> alert
confirm
prompt

###alt和title的区别###
###伪元素before和after###


###用rgba设置背景透明，避免文字透明###
###a标签的target属性###
###图片在固定大小的div里不失真，宽或者高固定，高或者宽自动###
###text-overflow与overflow，white-space要同时用，多余的字变为省略号###
###JavaScript的数据类型###
> number string booleans null undefined object(函数是属于object) array

> typeof的类型number string booleans undefined function object(typeof(null),数组，也返回object) 
###堆和栈###
> [https://baike.baidu.com/item/%E5%A0%86%E6%A0%88/1682032?fr=aladdin](https://baike.baidu.com/item/%E5%A0%86%E6%A0%88/1682032?fr=aladdin)
###基本类型和引用类型###
> 基本类型按值访问（string，number，booleans），引用类型的值按引用访问（object，array，function）；
###深拷贝和浅拷贝###
> 深拷贝：拷贝的值，会在堆内存中申请地址来存值，两个的值发生了改变不会相互影响，所有的基本类型赋值都是深拷贝
> 浅拷贝：拷贝地址，当一个值发生变化另一个值也会发生变华
> 引用类型赋值就会分深拷贝和浅拷贝
###申明全局变量的三种方式###
> 函数外申明，函数内但是不用var，Window.name=值
###变量名规则###
> 变量必须以字母开头
> 
> 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
> 
> 变量名称对大小写敏感（y 和 Y 是不同的变量）
###H5web储存###
> localStorage - 没有时间限制的数据存储
> 
> sessionStorage - 针对一个 session 的数据存储

###js类的继承###
> [https://zhidao.baidu.com/question/712318250451114165.html?fr=iks&word=js%C0%E0%B5%C4%BC%CC%B3%D0&ie=gbk](https://zhidao.baidu.com/question/712318250451114165.html?fr=iks&word=js%C0%E0%B5%C4%BC%CC%B3%D0&ie=gbk)



###js中eval###
    var globalEval = eval;     //定义全局eval函数别名
    var a ='global', b = 'global';    //全局变量
    function c()
    {
     var a = 'local';      //局部变量
     eval('a+="changed"');  //直接更改局部变量的值
     return a;      //返回更改后的局部变量
    }
    function d()
     {
      var b = 'local';
      globalEval("b+='changed'");
      return b;
    } 
    
    console.log(c(), a);   //localchanged global                  
    console.log(d() , b)   //local    globalchanged  

###作用域与执行上下文的区别###
> 执行上下文在运行时确定，随时可能改变；作用域在定义时确定，永远不会改变
> [http://blog.csdn.net/shengandshu/article/details/56279832](http://blog.csdn.net/shengandshu/article/details/56279832)


###call和apply区别###
> [https://zhidao.baidu.com/question/623761227407632684.html?loc_ans=1523839858](https://zhidao.baidu.com/question/623761227407632684.html?loc_ans=1523839858)  


###typeof和instanceof###   
 
    var oStringObject = new String("hello world"); 
    console.log(oStringObject instanceof String);   // 输出 "true"

> 无论引用的是什么类型的对象，typeof都返回 "object"。ECMAScript instanceof 运算符与 typeof 运算符相似，与 typeof 方法不同的是，instanceof 方法要求开发者明确地确认对象为某特定类型 

    / 判断 foo 是否是 Foo 类的实例 , 并且是否是其父类型的实例
	function Aoo(){} 
	function Foo(){} 
	Foo.prototype = new Aoo();//JavaScript 原型继承
	
	var foo = new Foo(); 
	console.log(foo instanceof Foo)//true 
	console.log(foo instanceof Aoo)//true


###event.target和event.currentTarget区别（因为事件有冒泡）###
点击body和input看看分别输出的区别

    <input type="button" value="按钮" id="btn">

    ` document.body.onclick=function (event) {
        console.log(event.currentTarget===document.body,this===document.body,event.target===document.getElementById("btn"))
    }`

###前端的三个层级###
结构层（html），表示层（css），行为层（js）
                           
跨域实现的几种方式，http的组成，HTTP协议，js创建对象的几种方式，http协议 4、html5的新特性，删除了哪些元素，新增的元素，html5的兼容性处理 5、js题，考全局变量和局部变量，基本类型和引用类型 6、css3的新特性和兼容性处理 7、冒泡和阻止冒泡 8、angularjs和jQuery不混用，angularjs里面建议了的 9、js事件监听，jQuery的普通绑定和on事件委托，10、jsonp 11，echart和highchart，d3，svg，less 12、ionic.js框架 13.js上传文件，最大传输量 14.ajax请求时间上限  15.通信协议  16.长握手

1、 JavaScript包括哪些数据类型？



3、border-color-left、marin-left、-moz-viewport改写成JavaScript格式


4、 编写一个JavaScript函数，实时显示当前时间，格式“年-月-日 时:分:秒”


5、
	E~E
	E E
	E>E
	E+E
	.className .className
	.className.className

6、
span{Ann}，加上padding 10px，background yellow，有什么效果，为什么
<span>Ann</span>



10、下面代码运行结果是什么？
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printing();

1，4, 3, 2




setTimeout

setInterval(, );


this
call , apply

this.show.call(this);



var Render ={
	show:function(){
		console.log(this);
	}
}

Render.show.call(this);


11、
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', (function(i) {
      return function() {
         console.log('You clicked element #' + i);
      }
   })(i));
}


4444

12、列举至少5种前端性能优化的具体方法，简要说明理由。(
1. jbox
2. 多列式布局 弹性盒子布局 、position float布局
3. 所有弹出框 jbox（jquery的插件） $.alert()等 待补充
4. 选择器：css选择器 jquery选择器
5. 
6. 编译完成 自动启动浏览器 project里面webpack.config配置文件
7. angularjs组件之间的通信
8. fileinput[http://plugins.krajee.com/](http://plugins.krajee.com/)
9. static/19361717320137163574744/)
11. underscore.js和handlebar.js 两个js库
12. $.each()和$(selector).each()[http://www.jb51.net/article/62154.htm](http://www.jb51.net/article/62154.htm)
13. 下载亚马逊的电子书阅读器 kindle
14. argument
15. call（） apply（）
16. js中new操作符
17. constructor prototype argument
18. angularjs清楚缓存
19.  $scope.removeLocalStorage=function(){
            window.localStorage.removeItem("sysResourceId");
            $state.go("index.content.sys/resource/sysResource");
        } 
1. queryselector（）queryselectorall（）
2. href“javascript：function（）”
3. jquery方法：end()
4. dataTable() ajax()
5. http跨域请求 
6. ajax中的跨域请求 异步请求
7. 前端调试
8. 构建工具
9. 模块化编程
10. js：堆和栈 string new string