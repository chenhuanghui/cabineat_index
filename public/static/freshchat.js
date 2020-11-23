
function initFreshChat() {
window.fcWidget.init({
    token: "440eb7e3-21c3-4c79-8107-6459efdb69e1",
    host: "https://wchat.freshchat.com",
    "config": {
        "cssNames": {
           "widget": "custom_fc_frame"
        }
    }
});
}
function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
