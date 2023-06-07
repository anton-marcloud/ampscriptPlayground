

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let regexS = "[\\?&]" + name + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + '; path=/' + '; domain=.' + location.hostname + '; secure; SameSite=None';
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*
(function () {
    let iframe = document.querySelectorAll('iframe');
    let pSource = getParameterByName('utm_source').toLowerCase();
    let pMedium = getParameterByName('utm_medium').toLowerCase();
    let pCampaign = getParameterByName('utm_campaign').toLowerCase();
    let pContent = getParameterByName('utm_content').toLowerCase();
    let pTerm = getParameterByName('utm_term').toLowerCase();
    let pGclid = getParameterByName('gclid');
    let pagePath = window.location.pathname.split('/').filter(e => e).slice(-1);

    setCookie('pageUrl', window.location.pathname.split('/').filter(e => e).slice(-1), 3650);

    if (getParameterByName('utm_source') || getParameterByName('gclid')) {
        setCookie('utmTracking', '?utm_source=' + pSource + '&utm_medium=' + pMedium + '&utm_campaign=' + pCampaign + '&utm_content=' + pContent + '&utm_term=' + pTerm + '&gclid=' + pGclid + '&last_utm_source=' + pSource + '&last_utm_medium=' + pMedium + '&last_utm_campaign=' + pCampaign + '&last_utm_content=' + pContent + '&last_utm_term=' + pTerm + '&last_gclid=' + pGclid, 3650);
    } else { }
    if (getCookie('utmTracking')) {
        for (ind = 0; ind < iframe.length; ind++) {
            iframe[ind].src = iframe[ind].src + getCookie('utmTracking') + '&FSU=' + getCookie('pageUrl') + '&LSU=' + getCookie('pageUrl');
        }
    } else {
        for (ind = 0; ind < iframe.length; ind++) {
            iframe[ind].src = iframe[ind].src + '?FSU=' + getCookie('pageUrl') + '&LSU=' + getCookie('pageUrl');
        }
    }
})();

function getCookie(name) { const value = `; ${document.cookie}`; const parts = value.split(`; ${name}=`); if (parts.length === 2) return parts.pop().split(';').shift(); }

var cookieVal = decodeURIComponent(getCookie('cookie_consent_level'));

if (cookieVal.includes('"tracking":true')) {
    (function () {
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//' + 'go.www.snailtrail.uk' + '/pdt.js'; var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
        window['pdt'] = window['pdt'] || function () { (window['pdt'].cq = window['pdt'].cq || []).push(arguments); };
    })();

    pdt('create', 347332, 9605, 'go.www.snailtrail.uk');
    pdt('setOptIn', true);
    pdt('sendPageView');
} else {
    (function () {
        var s = document.createElement('script');
        s.type = 'text/javascript'; s.async = true; s.src = '//' + 'go.www.snailtrail.uk' + '/pdt.js';
        var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
        window['pdt'] = window['pdt'] || function () { (window['pdt'].cq = window['pdt'].cq || []).push(arguments); };
    })();

    pdt('create', 347332, 9605, 'go.www.snailtrail.uk');
    pdt('revokeConsent');
}

*/

/* Start script for Expleo */

/* Website code

let pardotIframes = document.querySelectorAll('iframe[src*="snail"]');
setInterval(function() {
    pardotIframes.forEach(i => {
        i.contentWindow.postMessage(location.href, "*");
    })
}, 300) 
*/

/* Form code 
window.addEventListener('message',  function(e) {
    setCookie('formSubmissionUrl', e.data, 1);
}) 
*/

/* start script for Moving Vnues 

let iframeElements = document.querySelectorAll('iframe');

let messageToIframe = {
    pathName: window.location.pathname.split('/').filter(e => e).slice(-1)[0].replace(/-/g, ' ')
}

window.addEventListener('message', function (e) {
    iframeElements.forEach(i => {
        i.contentWindow.postMessage(messageToIframe, "*");
    })
});

End script for moving venues */

/*
let iframeElements = document.querySelectorAll('iframe');

let messageToIframe = {
    pathName: location.pathname.split('/').filter(e => e).slice(-1),
    pageName: document.title,
}

let messageFromIframe = [];
window.addEventListener('message', function (e) {
    messageFromIframe.push(e.data);
    console.log(messageFromIframe);
    document.querySelector('iframe').contentWindow.postMessage(messageToIframe, "*");
    for (i = 0; i < iframeElements.length; i++) {
        let iframeSrc = iframeElements[i].src;
        let formUrls = messageFromIframe.map(a => a.formUrl);
        let formHeights = messageFromIframe.map(a => a.formHeight);
        for (c = 0; c < formUrls.length; c++) {
            if (iframeSrc.includes(formUrls[c])) {
                iframeElements[i].height = (formHeights[c] * 1.05);
            } else { }
        }
    }
}); */

/* Code for McCain GB Form handler solution */

window.addEventListener('message', function (e) {
    if ((e.data.messenger === "Pardot iframe") && !getCookie('email')) {
        setCookie('email', encodeURI(e.data.email), 365);
    } else if ((e.data.name === "Pardot") && getCookie('email')){
        let selectedProduct = encodeURI(e.data.product.name);
        let selectedRetailer = encodeURI(e.data.product.retailerImageUrl);
        let formHandler = document.createElement('iframe');
        formHandler.setAttribute('height', '1px');
        formHandler.setAttribute('width', '1px');
        formHandler.src = 'https://go.www.snailtrail.uk/l/346332/2023-06-07/x7nkt?email=' + encodeURI(getCookie('email')) + '&product=' + selectedProduct + '&retailer=' + selectedRetailer; 
        document.body.append(formHandler);  
    } else {}
})

let buttons = document.querySelectorAll('button');
let selectedProduct = encodeURI("Fries");
let selectedRetailer = encodeURI("Test retailer");
let formHandler = document.createElement('iframe');
formHandler.setAttribute('height', '1px');
formHandler.setAttribute('width', '1px');
formHandler.src = 'https://go.www.snailtrail.uk/l/346332/2023-06-07/x7nkt?email=' + getCookie('email') + '&product=' + selectedProduct + '&retailer=' + selectedRetailer; 
buttons.forEach(b=>{
    b.onclick = function(){
        document.body.append(formHandler);
    }
})