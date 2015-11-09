(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){

	try {
		var a = new ATInternet.Tracker.Tag();
		var m = 'SmartTag version <b>'+a.version+'</b><br />Plugins: <b>'+a.getConfig('plgs')+'</b><br />Site: <b>'+a.getConfig('site')+'</b><br />Log: <b>'+a.getConfig('log')+'</b>';
	} catch(e) {
		var m = (e.message.indexOf('ATInternet is not defined') > -1) ? 'SmartTag not included' : 'Unknown error';
	} finally {
		$('body').append('<div style="z-index:10000;position:fixed;background-color:red;right:10px;top:10px;padding:15px;color:white;"><span id="close" style="position:absolute;right:5px;top:2px;cursor:pointer;" onclick="this.parentNode.parentNode.removeChild(this.parentNode); return false;">x</span> '+m+'</div>');
	}

});
