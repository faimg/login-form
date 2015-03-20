/**
 *
 * Objeto Literal Cookie. Documentacao completa disponivel em: 
 * http://code.google.com/p/jscomponentes/wiki/Cookie
 *
 * Cookie.js
 * http://jscomponentes.googlecode.com/svn/trunk/Cookie/js/Cookie/Cookie.js
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Cookie = {

	set: function(nome, value, expireDays) {
		var expireDate = new Date();

		expireDate.setTime(expireDate.getTime() + (expireDays * 24 * 3600 * 1000));
		document.cookie = nome + "=" + escape(value) + 
		((expireDays == null) ? "" : "; expires=" + expireDate.toGMTString());
	},

	//deprecated
	createCookie: function(nome, value, expireDays) {
		Cookie.set(nome, value, expireDays);
	},
	

	unset: function(nome, path, domain) {
		if(Cookie.get(nome)) {
			document.cookie = nome + "=" + ((path) ? ";path=" + path : "") +
			((domain) ? ";domain=" + domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
		}
	},

	//deprecated
	deleteCookie: function(nome, path, domain) {
		Cookie.unset(nome, path, domain);
	},


	get: function(nome) {
		if(document.cookie.length > 0) {
			var begin = document.cookie.indexOf(nome +"=");

			if(begin != -1) {
				var end;

				begin += nome.length + 1;
				end = document.cookie.indexOf(";", begin);

				if(end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(begin, end));

			}
		}
		
		return null;
	},
	
	//deprecated
	getCookie: function(nome) {
		Cookie.get(nome);
	}
	
};
