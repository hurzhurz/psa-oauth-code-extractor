const targetUrls = [
  "https://idpcvs.citroen.com/am/oauth2/authorize*",
  "https://idpcvs.opel.com/am/oauth2/authorize*",
  "https://idpcvs.driveds.com/am/oauth2/authorize*",
  "https://idpcvs.peugeot.com/am/oauth2/authorize*"
];

// 1. Intercept server redirects (HTTP 302)
chrome.webRequest.onBeforeRedirect.addListener(
  (details) => {
    const allowedSchemes = ['mymacsdk://', 'mymdssdk://', 'mymopsdk://', 'mymap://'];
    const matchesScheme = allowedSchemes.some(scheme => details.redirectUrl.startsWith(scheme));

    if (matchesScheme) {
      let codeValue = null;
      
      try {
        let tempUrlStr = details.redirectUrl.replace(/^[a-zA-Z]+:\/\//, 'http://');
        let urlObj = new URL(tempUrlStr);
        codeValue = urlObj.searchParams.get('code');
      } catch (e) {
        console.error("Could not parse redirect URL:", e);
      }

      if (codeValue && details.tabId >= 0) {
        chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          func: (extractedCode) => {
            navigator.clipboard.writeText(extractedCode)
              .then(() => prompt("Code found (added to clipboard):", extractedCode))
              .catch(() => prompt("Code found (please copy manually):", extractedCode));
          },
          args: [codeValue]
        }).catch(err => console.error("Could not execute script:", err));
      }
    }
  },
  { urls: targetUrls }
);