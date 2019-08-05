/**
 * code in inject.js
 * added "web_accessible_resources": ["injected.js"] to manifest.json
 */

setTimeout(function() {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('injected.js');
    s.onload = function() {
        this.remove();
        console.log('remove');
    };
    (document.head || document.documentElement).appendChild(s);
}, 10000);