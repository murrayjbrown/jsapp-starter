(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mithril"));
	else if(typeof define === 'function' && define.amd)
		define(["mithril"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mithril")) : factory(root["mithril"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) 2015 Datifex, inc. All rights reserved.
	//
	// demo:    Sample JavaScript application to demonstrate
	//          npm build process with webpack code bundling.
	//
	var m = __webpack_require__(2);
	
	;(function demo() {
	    'use strict';
	
	    var model, vm, component;
	
	    // Application data model
	    model = {
	        // properties
	        data: m.prop("Sample data."),
	
	        // methods
	        getData: function getData() {
	            // fetch data via server?
	            return model.data();
	        }
	    };
	
	    // Mithril view model
	    vm = {
	        init: function () {
	            model.getData(); // get application data
	        }
	    };
	
	    // Mithril presentation component
	    component = {
	        // controller
	        controller: function () {
	            vm.init(); // initialize view model
	        },
	
	        // view
	        view: function (ctrl) {
	            return m("div", [m("h2", "Demo"), m("pre", model.data())]);
	        }
	    };
	
	    // mount Mithril component
	    // m.mount( document.getElementById('vixDemoContainer'), component );
	    m.mount(document, component);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC9kZW1vLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1pdGhyaWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUMvQ0QsZ0QiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pdGhyaWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWl0aHJpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWl0aHJpbFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJtaXRocmlsXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE1IERhdGlmZXgsIGluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBkZW1vOiAgICBTYW1wbGUgSmF2YVNjcmlwdCBhcHBsaWNhdGlvbiB0byBkZW1vbnN0cmF0ZVxuLy8gICAgICAgICAgbnBtIGJ1aWxkIHByb2Nlc3Mgd2l0aCB3ZWJwYWNrIGNvZGUgYnVuZGxpbmcuXG4vL1xudmFyIG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG5cbjsoZnVuY3Rpb24gZGVtbygpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbW9kZWwsIHZtLCBjb21wb25lbnQ7XG5cbiAgICAvLyBBcHBsaWNhdGlvbiBkYXRhIG1vZGVsXG4gICAgbW9kZWwgPSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgZGF0YTogbS5wcm9wKFwiU2FtcGxlIGRhdGEuXCIpLFxuXG4gICAgICAgIC8vIG1ldGhvZHNcbiAgICAgICAgZ2V0RGF0YTogZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgICAgIC8vIGZldGNoIGRhdGEgdmlhIHNlcnZlcj9cbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5kYXRhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTWl0aHJpbCB2aWV3IG1vZGVsXG4gICAgdm0gPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1vZGVsLmdldERhdGEoKTsgLy8gZ2V0IGFwcGxpY2F0aW9uIGRhdGFcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBNaXRocmlsIHByZXNlbnRhdGlvbiBjb21wb25lbnRcbiAgICBjb21wb25lbnQgPSB7XG4gICAgICAgIC8vIGNvbnRyb2xsZXJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdm0uaW5pdCgpOyAvLyBpbml0aWFsaXplIHZpZXcgbW9kZWxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyB2aWV3XG4gICAgICAgIHZpZXc6IGZ1bmN0aW9uIChjdHJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbShcImRpdlwiLCBbbShcImgyXCIsIFwiRGVtb1wiKSwgbShcInByZVwiLCBtb2RlbC5kYXRhKCkpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gbW91bnQgTWl0aHJpbCBjb21wb25lbnRcbiAgICAvLyBtLm1vdW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml4RGVtb0NvbnRhaW5lcicpLCBjb21wb25lbnQgKTtcbiAgICBtLm1vdW50KGRvY3VtZW50LCBjb21wb25lbnQpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1aWxkL2FwcC9kZW1vLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibWl0aHJpbFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==