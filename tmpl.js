/*! Tmpl.js v0.1.4 | unmaintain | MIT | https://github.com/unmaintain/tmpl.js */
(function () {
	String.prototype.tmpl = function (data) {
		return this.replace(/{{\s*?(\w*)\s*?}}/g, function(match, key, position) {
			return data[key];
		});
	};
})();
