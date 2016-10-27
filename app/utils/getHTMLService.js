var callback;

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        callback(request.source);
    }
});

export default { 
    fetch: (cb) => {
        callback = cb;
        chrome.tabs.executeScript(null, {
            file: "./static/getPageSourceInjected.js"
        }, function() {
            // If you try and inject into an extensions page or the webstore/NTP you'll get an error
            if (chrome.runtime.lastError) {
                console.log('There was an error injecting script : \n' + chrome.runtime.lastError.message);
            }
        });
    }
} 