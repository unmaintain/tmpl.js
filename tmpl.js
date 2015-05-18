/*! Tmpl.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/tmpl.js */
(function () {
	String.prototype.tmpl = function (data) {
		return this.replace(/{{\s*?(\w*)\s*?}}/g, function(match, key, position) {
			return data[key];
		});
	};
})();
