// ==UserScript==
// @name         4gamers error 429 auto refresh
// @version      0.9
// @description  當4gamers.com.tw顯示error 429時自動重新整理網頁(此腳本由ChatGPT協助撰寫)
// @author       特務E04
// @match        https://www.4gamers.com.tw/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @license      MIT
// @namespace    https://github.com/jmsch23280866
// ==/UserScript==

(function() {
    'use strict';

    // 檢查網頁是否顯示 "429 Too Many Requests"
    function checkFor429() {
        if ($('body:contains("429 Too Many Requests")').length > 0) {
            console.log("Detected 429 Too Many Requests, refreshing in 2 seconds...");
            setTimeout(function() {
                location.reload();
            }, 2000); // 2秒後重新整理
        }
    }

    // 當頁面加載完成後檢查一次
    document.addEventListener('DOMContentLoaded', checkFor429);
})();
