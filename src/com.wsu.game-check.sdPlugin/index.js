/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.wsu.game-check.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Your key code goes here!');
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});
//위에가 기본

// 플러그인 등록
function connectElgatoStreamDeckSocket(inPort, inPluginUUID, inRegisterEvent, inInfo) {
    websocket = new WebSocket("ws://localhost:" + inPort);
    websocket.onopen = function() {
    // WebSocket is connected, register the plugin
       var json = {
         "event": inRegisterEvent,
         "uuid": inPluginUUID
       };
     websocket.send(JSON.stringify(json));
     websocket.onmessage = function (evt) {
            console.log("connected onmessage for plugin")
     };
    };

};
// Propery Inspector 등록
function connectElgatoStreamDeckSocket(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo) {
        websocket = new WebSocket("ws://localhost:" + inPort);
        websocket.onopen = function() {
        // WebSocket is connected, register the Property Inspector
           var json = {
           "event": inRegisterEvent,
           "uuid": inPropertyInspectorUUID
           };
             websocket.send(JSON.stringify(json));
        };

        websocket.onmessage = function (evt) {
            console.log("connected onmessage for PI")

        };
};