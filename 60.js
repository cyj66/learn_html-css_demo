function people(name){this.name=name;}     //创建一个类people
people.prototype.say=function(){alert("peo-hello"+this.name);}    //prototype使对象能添加属性和方法

function student(name){this.name=name;}
student.prototype=new people();    //student为people类的继承
student.prototype.say=function(){alert("stu-hello"+this.name);}           //复写父类的方法

var s=new student("666");          //s为student的对象，注意与上面继承的区别
s.say();

(function()                //闭包
{
	var n="fengzhuang";
	function people2(name){this.name=name;}     //创建一个类people
	people2.prototype.say=function(){alert("peo-hello");}    //prototype使对象能添加属性和方法
	alert("我在内部"+n);      //内部可以调用
	window.people2=people2;  //给外部一个接口
}());
alert("我在外部"+n);          //内部封装，外部无法调用
