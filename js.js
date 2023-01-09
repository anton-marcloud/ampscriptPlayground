
let myIframe = document.querySelector('iframe');
let dataDrop = {
    pathName: document.location.pathname,
    pageName: document.title,
}

window.onload = function() {
    myIframe.contentWindow.postMessage(dataDrop, "https://go.www.snailtrail.uk");
}

window.addEventListener('message', function (e) {
    myIframe.height = e.data;
});

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