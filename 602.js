function person()
{
	var _this={};
	_this.say=function(){alert("phello");}
	return _this;
}
function teacher()
{
	var _this=person();      //子类
	var supersay=_this.say;
	_this.say=function(){supersay.call(_this);alert("thello");}   //复写say，且仍要显示父类
	return _this;
}
var t=teacher();
t.say();