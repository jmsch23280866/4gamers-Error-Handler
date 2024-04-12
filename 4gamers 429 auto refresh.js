// ==UserScript==
// @name         當4gamers.com.tw顯示429 Too Many Requests時自動重新整理網頁
// @version      0.5
// @description  省得手動重新整理網頁(此腳本由ChatGPT協助撰寫)
// @author       特務E04
// @match        https://www.4gamers.com.tw/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// @license      MIT
// @namespace https://greasyfork.org/users/756522
// @downloadURL https://update.greasyfork.org/scripts/488305/%E7%95%B64gamerscomtw%E9%A1%AF%E7%A4%BA429%20Too%20Many%20Requests%E6%99%82%E8%87%AA%E5%8B%95%E9%87%8D%E6%96%B0%E6%95%B4%E7%90%86%E7%B6%B2%E9%A0%81.user.js
// @updateURL https://update.greasyfork.org/scripts/488305/%E7%95%B64gamerscomtw%E9%A1%AF%E7%A4%BA429%20Too%20Many%20Requests%E6%99%82%E8%87%AA%E5%8B%95%E9%87%8D%E6%96%B0%E6%95%B4%E7%90%86%E7%B6%B2%E9%A0%81.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // 檢查網頁是否顯示 "429 Too Many Requests"
    function checkFor429() {
        if ($('body:contains("429 Too Many Requests")').length > 0) {
            console.log("Detected 429 Too Many Requests, refreshing in 3 seconds...");
            setTimeout(function() {
                location.reload();
            }, 2000); // 2秒後重新整理
        }
    }

    // 定期檢查是否顯示 429 Too Many Requests
    setInterval(checkFor429, 3000); // 每3秒檢查一次
})();