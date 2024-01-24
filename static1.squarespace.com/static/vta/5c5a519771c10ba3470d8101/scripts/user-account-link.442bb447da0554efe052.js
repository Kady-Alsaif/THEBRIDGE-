"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9010], {
        18416: function(e, n) {
            n.v6 = "UserAccountApi", n.in = "isUserAuthenticated", n.tV = "openAccountScreen"
        },
        82533: function(e, n, t) {
            t.r(n);
            var o = t(18416);
            n.default = function(e) {
                var n = function(e) {
                        e.preventDefault();
                        var n = window[o.v6][o.tV];
                        "function" == typeof n ? n() : console.warn("UserAccounts API not available")
                    },
                    t = function() {
                        var t;
                        if (null !== document.querySelector(".sqs-edit-mode-active")) t = ".auth";
                        else {
                            if (!window[o.v6] || !window[o.v6][o.in]) return void console.warn("UserAccounts API not available");
                            t = (0, window[o.v6][o.in])() ? ".unauth" : ".auth", e.querySelector(".user-accounts-text-link").addEventListener("click", n)
                        }
                        var r = e.querySelector(".user-accounts-text-link"),
                            c = r.querySelector(t);
                        c && r.removeChild(c), e.classList.add("loaded")
                    };
                "complete" === document.readyState ? t() : window.addEventListener("load", t)
            }
        }
    }
]);