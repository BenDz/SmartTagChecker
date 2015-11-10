(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){

	try {
		var a = new ATInternet.Tracker.Tag();
		var m = 'SmartTag version <b>'+a.version+'</b>';
			m += '<br />Plugins:';
			a.getConfig('plgs').forEach(function(entry) {
				m += '<br />- <b>'+entry+'</b>';
			});
			m += '<br />Site: <b>'+a.getConfig('site')+'</b>';
			m += '<br />Log: <b>'+a.getConfig('log')+'</b>';
	} catch(e) {
		var m = (e.message.indexOf('ATInternet is not defined') > -1) ? 'SmartTag not included' : 'Unknown error';
	} finally {
		$('body').append('<div onclick="this.parentNode.removeChild(this); return false;" style="cursor:pointer;z-index:10000;position:fixed;background-color: #045e89;right:10px;top:10px;padding:15px;color:white;font-size:12px;text-align:left;font-family:Arial;font-weight:normal;box-shadow:0px 0px 5px #0cacf8;border:1px solid #6fcefb;border-radius:3px;">'+m+'<span style="font-size:10px;position:absolute;bottom:5px;right:5px">v0.1</span></div>');
	}

});
