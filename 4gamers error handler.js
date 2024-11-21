// ==UserScript==
// @name         4gamers error 429 & 404 handler / 4gamers 錯誤 429 & 404 處理器
// @name:zh-TW   4gamers 錯誤 429 & 404 處理器
// @version      1.2
// @description  Automatically refresh the page when 4gamers.com.tw shows error 429, and redirect to Google webcache if it shows 404 (Powered by ChatGPT)
// @description:zh-TW 當4gamers.com.tw顯示錯誤 429 時自動重新整理網頁，若顯示 404 則跳轉至 Google 網頁快取版。(此腳本由ChatGPT協助撰寫)
// @author       特務E04
// @match        https://www.4gamers.com.tw/*
// @license      MIT
// @noframes
// @supportURL   https://github.com/jmsch23280866/4gamers-error-handler/issues
// @namespace    https://github.com/jmsch23280866
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 設定背景分頁重試延遲時間（毫秒）
    const BACKGROUND_DELAY = {
        MIN: 500,    // 背景分頁最小延遲 0.5 秒
        MAX: 5000    // 背景分頁最大延遲 5 秒
    };
    
    // 取得背景分頁的隨機延遲時間
    function getBackgroundDelay() {
        return Math.floor(Math.random() * (BACKGROUND_DELAY.MAX - BACKGROUND_DELAY.MIN + 1)) + BACKGROUND_DELAY.MIN;
    }

    // 檢查分頁是否可見
    function isPageVisible() {
        return document.visibilityState === 'visible';
    }

    // 建立一個觀察者來監視<title>的變化
    const observer = new MutationObserver(function() {
        checkTitle();
    });

    // 檢查<title>標籤中的文字內容
    function checkTitle() {
        const titleText = document.title;

        if (titleText === "429 Too Many Requests") {
            const visible = isPageVisible();
            console.log(`偵測到 429 Too Many Requests... (${visible ? '前景' : '背景'}分頁)`);
            document.documentElement.innerHTML = '';
            window.stop();
            
            if (visible) {
                // 前景分頁立即重新整理
                console.log('前景分頁立即重新整理');
                location.reload();
            } else {
                // 背景分頁使用延遲
                const delay = getBackgroundDelay();
                console.log(`背景分頁將在 ${delay/1000} 秒後重新整理...`);
                setTimeout(() => location.reload(), delay);
            }
            
        } else if (titleText === "404 Not Found") {
            console.log("偵測到 404 Not Found，重新導向至 Google 網頁快取...");
            document.documentElement.innerHTML = '';
            window.stop();
            const currentUrl = window.location.href;
            const googleCacheUrl = "https://webcache.googleusercontent.com/search?q=cache:" + currentUrl + "&strip=1";
            window.location.replace(googleCacheUrl);
        }
    }

    // 在文檔開始載入時就開始監視<title>的變化
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // 立即檢查<title>
    checkTitle();
})();
