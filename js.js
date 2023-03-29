

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
    document.cookie = cName + "=" + cValue + "; " + expires + '; path=/' + '; domain=' + location.hostname + '; secure';
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

/* start script for Moving Vnues */

let iframeElements = document.querySelectorAll('iframe');

let messageToIframe = {
    pathName: location.pathname.split('/').filter(e => e).slice(-1)
}

window.addEventListener('message', function (e) {
    iframeElements.forEach(i => {
        i.contentWindow.postMessage(messageToIframe, "*");
    })
});

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