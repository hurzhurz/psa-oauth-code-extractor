# PSA/Stellantis OAuth Code Extractor Browser Extension

This is a helper for the token generation process of e.g. **[EVCC](https://evcc.io)**.

It is a browser extension for Chrome and Firefox that intercepts OAuth redirects (HTTP 302) in the background and extracts the `code` parameter from custom URL schemes.  
It automatically copies the code to the clipboard, and additionally provides it in a pop-up prompt for manual copying.

An alternative solution would be **[psa-token-helper](https://github.com/hurzhurz/psa-token-helper)**.


**Supported URL Schemes:**
* `mymacsdk://`
* `mymdssdk://`
* `mymopsdk://`
* `mymap://`

**Supported Networks:**
The extension exclusively monitors traffic on the following authorization domains:
* **Citroën** (`idpcvs.citroen.com`, `id-dcr.citroen.com`)
* **Opel** (`idpcvs.opel.com`, `id-dcr.opel.com`)
* **DS Automobiles** (`idpcvs.driveds.com`, `id-dcr.driveds.com`)
* **Peugeot** (`idpcvs.peugeot.com`, `id-dcr.peugeot.com`)

---

## Installation

Since this extension is not published in the official browser stores, it must be loaded manually via Developer Mode. 

Download the latest release for your browser from the [**Releases**](https://github.com/hurzhurz/psa-oauth-code-extractor/releases). page and extract the ZIP file on your computer.

### Google Chrome & Microsoft Edge (Permanent)
*For a visual step-by-step guide, see the [official Chrome developer guide with screenshots](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).*

1. Open the extension management page in your browser by navigating to `chrome://extensions/` (or `edge://extensions/`).
2. Enable the **Developer mode** toggle in the top right corner.
3. Click the **Load unpacked** button in the top left.
4. Select the previously extracted folder (`chrome`).

*The extension is now installed and will remain active even after restarting the browser.*

### Mozilla Firefox (Temporary)
*For a visual step-by-step guide, see the [official Mozilla guide with screenshots](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).*

1. Open the URL `about:debugging` in your browser.
2. Click on **This Firefox** in the left sidebar.
3. Click the **Load Temporary Add-on...** button.
4. Navigate to the extracted folder (`firefox`) and select the `manifest.json` file.

*Important Note: For security reasons, Firefox removes unsigned (local) extensions every time the browser is closed. You will need to repeat this step after restarting Firefox unless the add-on is officially signed via the Mozilla Developer Hub.*

---

## Usage

The extension runs completely invisibly in the background. 
1. Perform your regular login or authorization process on one of the supported brand websites.
2. As soon as the server executes the final redirect to your custom scheme, the extension intervenes instantly.
3. A pop-up prompt will appear on your screen: The code has been successfully added to your clipboard. You can also manually copy it directly from the prompt using `Ctrl+C` (or `Cmd+C`) as a fallback.
