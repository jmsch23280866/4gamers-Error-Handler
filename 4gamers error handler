// ==UserScript==
// @name         4gamers error 429 & 404 handler
// @name:zh-TW   4gamers 錯誤 429 & 404 處理器
// @version      1.0
// @description  Automatically refresh the page when 4gamers.com.tw shows error 429, and redirect to Google webcache if it shows 404 (Powered by ChatGPT)
// @description:zh-TW 當4gamers.com.tw顯示錯誤 429 時自動重新整理網頁，若顯示 404 則跳轉至 Google 網頁快取版。(此腳本由ChatGPT協助撰寫)
// @author       特務E04
// @match        https://www.4gamers.com.tw/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @license      MIT
// @namespace    https://github.com/jmsch23280866
// ==/UserScript==

(function() {
    'use strict';

    // 檢查<title>標籤中的文字內容
    function checkTitle() {
        const titleText = document.title;

        if (titleText === "429 Too Many Requests") {
            console.log("Detected 429 Too Many Requests, refreshing immediately...");
            location.reload(); // 立即重新整理
        } else if (titleText === "404 Not Found") {
            console.log("Detected 404 Not Found, redirecting to Google webcache...");
            const currentUrl = window.location.href;
            const googleCacheUrl = "https://webcache.googleusercontent.com/search?q=cache:" + currentUrl + "&strip=1";
            window.location.href = googleCacheUrl; // 跳轉到Google快取頁面
        }
    }

    // 立即檢查<title>
    checkTitle();
})();
