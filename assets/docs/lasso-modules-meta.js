$_mod.remap("/marko$4.0.0-rc.8/widgets/index", "/marko$4.0.0-rc.8/widgets/index-browser");
$_mod.installed("marko$4.0.0-rc.8", "warp10", "1.3.3");
$_mod.remap("/marko$4.0.0-rc.8/widgets/util", "/marko$4.0.0-rc.8/widgets/util-browser");
$_mod.installed("marko$4.0.0-rc.8", "events-light", "1.0.5");
$_mod.main("/events-light$1.0.5", "src/index");
$_mod.installed("marko$4.0.0-rc.8", "raptor-util", "3.1.0");
$_mod.remap("/marko$4.0.0-rc.8/widgets/loadWidget", "/marko$4.0.0-rc.8/widgets/loadWidget-dynamic");
$_mod.remap("/marko$4.0.0-rc.8/widgets/defineWidget", "/marko$4.0.0-rc.8/widgets/defineWidget-browser");
$_mod.main("/marko$4.0.0-rc.8", "runtime/index");
$_mod.remap("/marko$4.0.0-rc.8/runtime/env-init", false);
$_mod.main("/marko$4.0.0-rc.8/runtime/loader", "");
$_mod.remap("/marko$4.0.0-rc.8/runtime/loader/index", "/marko$4.0.0-rc.8/runtime/loader/index-browser");
$_mod.remap("/marko$4.0.0-rc.8/runtime/loader/index-browser", "/marko$4.0.0-rc.8/runtime/loader/index-browser-dynamic");
$_mod.installed("marko$4.0.0-rc.8", "listener-tracker", "2.0.0");
$_mod.main("/listener-tracker$2.0.0", "lib/listener-tracker");
$_mod.installed("marko$4.0.0-rc.8", "morphdom", "2.3.1");
$_mod.remap("/marko$4.0.0-rc.8/widgets/init-widgets", "/marko$4.0.0-rc.8/widgets/init-widgets-browser");
$_mod.installed("markojs-website$1.0.0", "headspace", "0.1.1");
$_mod.main("/headspace$0.1.1", "dist/headspace");
$_mod.installed("markojs-website$1.0.0", "marko", "4.0.0-rc.8");
$_mod.main("/marko$4.0.0-rc.8/widgets", "");