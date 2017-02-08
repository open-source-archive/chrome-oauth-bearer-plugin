var urlPatterns;
var authUrl;
var username;
var password;
var token;

function fetchToken() {
    var xhr = new XMLHttpRequest();
    var authHeader = "Basic " + btoa(username + ":" + password);

    xhr.open('GET', authUrl, true);
    xhr.setRequestHeader("Authorization", authHeader);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
            token = xhr.responseText.replace("\n", "");
        }
    };
    xhr.send(null);
}

function updateSetting(url_pattern, user, auth_url, pass) {
    urlPatterns = url_pattern;
    authUrl = auth_url;
    username = user;
    password = pass;
    fetchToken();
    updateAuthListener();
}

function updateAuthListener() {
    chrome.webRequest.onBeforeSendHeaders.removeListener(authListener);
    var patterns = urlPatterns.split("\n");
    if (patterns) {
        chrome.webRequest.onBeforeSendHeaders.addListener(authListener,
            {"urls": patterns},
            ["requestHeaders", "blocking"]);
    }
}

function authListener(details) {
    if (token) {
        console.log("Setting Authorization Header.");
        details.requestHeaders.push({name:"Authorization", value:"Bearer " + token});
    }
    return {requestHeaders: details.requestHeaders};
}

chrome.alarms.onAlarm.addListener(function(alarm){
    fetchToken();
});
chrome.alarms.create("refresh_token", {periodInMinutes:40});

chrome.storage.sync.get({
    url: '<unknown>',
    username: '<unknown>',
    password: '<unknown>',
    authURL: '<unknown>'

}, function(items) {
	updateSetting(items.url, items.username, items.authURL, items.password);
});
