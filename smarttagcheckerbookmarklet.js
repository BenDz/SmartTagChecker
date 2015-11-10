if (document.getElementById('ATDebugPopin') === null) {
	document.body.innerHTML += '<div onclick="this.parentNode.removeChild(this); return false;" style="cursor:pointer;z-index:10000;position:fixed;background-color: #045e89;right:10px;top:10px;padding:15px;color:white;font-size:12px;text-align:left;font-family:Arial;font-weight:normal;box-shadow:0px 0px 5px #0cacf8;border:1px solid #6fcefb;border-radius:3px;"><p id="ATDebugPopin"></p><span style="font-size:10px;position:absolute;bottom:5px;right:5px">v0.2</span></div>';
}
document.getElementById('ATDebugPopin').innerHTML = '<img src="data:image/gif;base64,R0lGODlhEAALAPQAAAReif///yd0mTF6nhdqkvj6+////9Dh6H6swp/B0UaIqNzo7rXP23anvpu/z0KGptjm7Pr7/LHM2httlCl1mg1kjcba5CVzmA9ljkqLqmCZtDd+oBNokAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"/>';

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
		$('#ATDebugPopin').html(m);
	}

});
