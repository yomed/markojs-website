$_mod.def("/marko$4.0.0-rc.5/widgets/index-browser", function(require, exports, module, __filename, __dirname) { var events = require('/marko$4.0.0-rc.5/runtime/events'/*'../runtime/events'*/);
var Widget = require('/marko$4.0.0-rc.5/widgets/Widget'/*'./Widget'*/);
var widgetsUtil = require('/marko$4.0.0-rc.5/widgets/util-browser'/*'./util'*/);

function onInitWidget(listener) {
    events.on('initWidget', listener);
}

exports.onInitWidget = onInitWidget;
exports.Widget = Widget;
exports.getWidgetForEl = widgetsUtil.$__getWidgetForEl;
exports.initWidgets = require('/marko$4.0.0-rc.5/widgets/init-widgets-browser'/*'./init-widgets'*/).$__initServerRendered;

exports.w = require('/marko$4.0.0-rc.5/widgets/defineWidget-browser'/*'./defineWidget'*/); // Referenced by compiled templates
exports.r = require('/marko$4.0.0-rc.5/widgets/renderer'/*'./renderer'*/); // Referenced by compiled templates
exports.rw = require('/marko$4.0.0-rc.5/widgets/registry'/*'./registry'*/).$__register;  // Referenced by compiled templates

window.$__MARKO_WIDGETS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!
});