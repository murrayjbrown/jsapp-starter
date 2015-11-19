// Copyright (c) 2015 Datifex, inc. All rights reserved.
//
// demo:    Sample JavaScript application to demonstrate
//          npm build process with webpack code bundling.
//
var m = require('mithril');

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
        init: function() {
            model.getData(); // get application data
        }
    };

    // Mithril presentation component
    component = {
        // controller
        controller: function() {
            vm.init(); // initialize view model
        },

        // view
        view: function(ctrl) {
            return m("div", [
                m("h2", "Demo"),
                m("pre", model.data())
            ]);
        }
    };

    // mount Mithril component
    // m.mount( document.getElementById('vixDemoContainer'), component );
    m.mount(document, component);
})();
