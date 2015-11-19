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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.demo = mod.exports;
	    }
	})(this, function (exports) {
	    // Copyright (c) 2015 Datifex, inc. All rights reserved.
	    //
	    // demo:    Sample JavaScript application to demonstrate
	    //          npm build process with webpack code bundling.
	    //
	    "use strict";
	
	    var m = __webpack_require__(2);
	
	    ;(function demo() {
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
	            init: function init() {
	                model.getData(); // get application data
	            }
	        };
	
	        // Mithril presentation component
	        component = {
	            // controller
	            controller: function controller() {
	                vm.init(); // initialize view model
	            },
	
	            // view
	            view: function view(ctrl) {
	                return m("div", [m("h2", "Demo"), m("pre", model.data())]);
	            }
	        };
	
	        // mount Mithril component
	        // m.mount( document.getElementById('vixDemoContainer'), component );
	        m.mount(document, component);
	    })();
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL2FwcC9kZW1vLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1pdGhyaWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCO0FBQzFCLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQyxFOzs7Ozs7QUM3REQsZ0QiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pdGhyaWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWl0aHJpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWl0aHJpbFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJtaXRocmlsXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShleHBvcnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QuZXhwb3J0cyk7XG4gICAgICAgIGdsb2JhbC5kZW1vID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMTUgRGF0aWZleCwgaW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIC8vXG4gICAgLy8gZGVtbzogICAgU2FtcGxlIEphdmFTY3JpcHQgYXBwbGljYXRpb24gdG8gZGVtb25zdHJhdGVcbiAgICAvLyAgICAgICAgICBucG0gYnVpbGQgcHJvY2VzcyB3aXRoIHdlYnBhY2sgY29kZSBidW5kbGluZy5cbiAgICAvL1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG5cbiAgICA7KGZ1bmN0aW9uIGRlbW8oKSB7XG4gICAgICAgIHZhciBtb2RlbCwgdm0sIGNvbXBvbmVudDtcblxuICAgICAgICAvLyBBcHBsaWNhdGlvbiBkYXRhIG1vZGVsXG4gICAgICAgIG1vZGVsID0ge1xuICAgICAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICAgICAgZGF0YTogbS5wcm9wKFwiU2FtcGxlIGRhdGEuXCIpLFxuXG4gICAgICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgICAgICBnZXREYXRhOiBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICAgICAgICAgIC8vIGZldGNoIGRhdGEgdmlhIHNlcnZlcj9cbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1pdGhyaWwgdmlldyBtb2RlbFxuICAgICAgICB2bSA9IHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuZ2V0RGF0YSgpOyAvLyBnZXQgYXBwbGljYXRpb24gZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1pdGhyaWwgcHJlc2VudGF0aW9uIGNvbXBvbmVudFxuICAgICAgICBjb21wb25lbnQgPSB7XG4gICAgICAgICAgICAvLyBjb250cm9sbGVyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICAgICAgICAgICAgICAgIHZtLmluaXQoKTsgLy8gaW5pdGlhbGl6ZSB2aWV3IG1vZGVsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyB2aWV3XG4gICAgICAgICAgICB2aWV3OiBmdW5jdGlvbiB2aWV3KGN0cmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbShcImRpdlwiLCBbbShcImgyXCIsIFwiRGVtb1wiKSwgbShcInByZVwiLCBtb2RlbC5kYXRhKCkpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbW91bnQgTWl0aHJpbCBjb21wb25lbnRcbiAgICAgICAgLy8gbS5tb3VudCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpeERlbW9Db250YWluZXInKSwgY29tcG9uZW50ICk7XG4gICAgICAgIG0ubW91bnQoZG9jdW1lbnQsIGNvbXBvbmVudCk7XG4gICAgfSkoKTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvZGVtby5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1pdGhyaWxcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=