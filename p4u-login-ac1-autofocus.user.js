// ==UserScript==
// @name         P4U login AC1 autofocus
// @namespace    https://github.com/uumnk/p4u-login-ac1-autofocus
// @version      1.0.0
// @description  Tampermonkey script for automatic selection of first (Access code 1) input in Plus4U login form.
// @author       uumnk
// @match        https://uuidentity.plus4u.net/uu-identitymanagement-maing01/*/login*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const AC1_INPUT_SELECTOR = "input[name='accessCode1']";

    const checkElement = async selector => {
        while (document.querySelector(selector) == null) {
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return document.querySelector(selector);
    };

    checkElement(AC1_INPUT_SELECTOR).then((selector) => {
        selector.focus();
    });
})();