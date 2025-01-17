/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["wpsafelinkCount","0"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["waitTime","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["window_paused","false"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["gtag","undefined"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["plausible","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["isAdblockActive","false"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,312]],["gadgets.es",[11,312]],["amateurporn.co",[11,107]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["movingxh.world",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhtree.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,412]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,110]],["familyporn.tv",17],["cloudemb.com",[17,332]],["sbplay1.com",17],["id45.cyou",17],["85tube.com",[17,92]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["apinchcaseation.com",21],["bigclatterhomesguideservice.com",21],["denisegrowthwide.com",21],["edwardarriveoften.com",21],["housecardsummerbutton.com",21],["kennethofficialitem.com",21],["nectareousoverelate.com",21],["paulkitchendark.com",21],["stevenimaginelittle.com",21],["strawberriesporail.com",21],["timberwoodanotia.com",21],["tinycat-voe-fashion.com",21],["troyyourlead.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["voe.sx",21],["lukecomparetwo.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["player.tabooporns.com",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["netu.ac",26],["dirtyvideo.fun",27],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,130]],["stfly.me",28],["oncehelp.com",28],["bit-url.com",28],["rgl.vn",28],["reqlinks.net",28],["megaurl.in",28],["megafly.in",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["7r6.com",28],["oko.sh",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["skincarie.com",28],["exeo.app",28],["birdurls.com",28],["coinlyhub.com",[28,212]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,221]],["owllink.net",28],["cutdl.xyz",28],["iir.ai",28],["shorteet.com",[28,241]],["sekilastekno.com",28],["smoner.com",28],["gplinks.co",28],["xpshort.com",28],["upshrink.com",28],["enit.in",[28,237]],["ez4short.com",28],["easysky.in",28],["veganab.co",28],["adrinolinks.in",28],["go.gyanitheme.com",28],["go.theforyou.in",28],["go.hipsonyc.com",28],["try2link.com",28],["jameeltips.us",28],["gainl.ink",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["promo-visits.site",28],["satoshi-win.xyz",[28,257]],["shorterall.com",28],["encurtandourl.com",28],["forextrader.site",28],["postazap.com",[28,149]],["tinys.click",[28,221]],["cpm.icu",28],["easycut.io",28],["panyshort.link",28],["linkshrnk.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["cashurl.in",28],["4cash.me",28],["namaidani.com",28],["bitfly.io",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["fxlap.com",28],["earnfasts.com",28],["tawiia.com",28],["droplink.co",28],["recipestutorials.com",28],["apkshrt.com",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["clickscoin.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["shortlink.prz.pw",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["enagato.com",28],["automotur.club",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,150]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,221]],["snowurl.com",[28,221]],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["pandaznetwork.com",28],["atglinks.com",28],["du-link.in",28],["linksfy.co",28],["news.speedynews.xyz",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["oii.io",28],["novelssites.com",28],["links.medipost.org",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["link4rev.site",28],["bloginguru.xyz",28],["tii.la",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",28],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["windowslite.net",[28,221]],["coinsl.click",28],["exalink.fun",28],["exego.app",28],["viewfr.com",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["kiddyshort.com",28],["watchmygf.me",[29,54]],["camwhorez.tv",[29,40,91,92]],["fpo.xxx",[29,56]],["sexemix.com",29],["heavyfetish.com",[29,490]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,208]],["yourporngod.com",[40,41]],["javbangers.com",[40,301]],["camfox.com",40],["camthots.tv",[40,124]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,126]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,107,124,126]],["bravoerotica.net",[56,126]],["youx.xxx",56],["camclips.tv",[56,208]],["camflow.tv",[56,107,126,172,245]],["camhoes.tv",[56,107,124,126,172,245]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,126]],["analdin.com",[56,126]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,441]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,95]],["weatherx.co.in",[83,95]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,125]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,107]],["watchporn.to",[92,107]],["camwhorez.video",92],["footstockings.com",[93,107]],["sbs.com.au",96],["ojogos.com.br",98],["powforums.com",99],["supforums.com",99],["studybullet.com",99],["usgamer.net",100],["recordonline.com",100],["freebitcoin.win",102],["e-monsite.com",102],["coindice.win",102],["temp-mails.com",103],["freiepresse.de",104],["investing.com",105],["camhub.cc",107],["love4porn.com",107],["thotvids.com",107],["watchmdh.to",107],["celebwhore.com",107],["cluset.com",107],["4kporn.xxx",107],["xhomealone.com",107],["lusttaboo.com",[107,373]],["hentai-moon.com",107],["mp3fiber.com",108],["suedkurier.de",109],["anysex.com",111],["gomiblog.com",112],["iptvtools.net",112],["vlist.se",113],["pornve.com",114],["coolrom.com.au",115],["pornohirsch.net",116],["marie-claire.es",117],["gamezhero.com",117],["flashgirlgames.com",117],["onlinesudoku.games",117],["mpg.football",117],["sssam.com",117],["globalnews.ca",118],["drinksmixer.com",119],["leitesculinaria.com",119],["fupa.net",120],["browardpalmbeach.com",121],["dallasobserver.com",121],["houstonpress.com",121],["miaminewtimes.com",121],["phoenixnewtimes.com",121],["westword.com",121],["nhentai.net",122],["fox.com.tr",123],["caminspector.net",124],["camwhoreshd.com",124],["camgoddess.tv",124],["gay4porn.com",126],["mypornhere.com",126],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["videogreen.xyz",129],["playembed.xyz",129],["javhdporn.net",129],["redanimedatabase.cloud",129],["javstream.top",129],["flashplayer.fullstacks.net",131],["cloudapps.herokuapp.com",131],["youfiles.herokuapp.com",131],["temp-mail.org",132],["comnuan.com",133],["veedi.com",134],["battleboats.io",134],["fruitlab.com",135],["haddoz.net",135],["garoetpos.com",135],["stiletv.it",136],["hqtv.biz",138],["liveuamap.com",139],["muvibg.com",139],["linksht.com",[140,141]],["bitcotasks.com",[141,394]],["audycje.tokfm.pl",142],["hulu.com",[143,144,145]],["shush.se",146],["emurom.net",147],["allkpop.com",148],["azmath.info",149],["downfile.site",149],["downphanmem.com",149],["expertvn.com",149],["memangbau.com",149],["trangchu.news",149],["aztravels.net",149],["adfoc.us",149],["jobnewsj.com",149],["businessloan5.com",149],["serkarijobresult.com",149],["disking.in",149],["studygovtyojana.com",149],["sarkarijobsimp.com",149],["hitjankari.com",149],["iisfvirtual.in",149],["starxinvestor.com",149],["wikitraveltips.com",[149,253]],["amritadrino.com",[149,253]],["sahlmarketing.net",149],["filmypoints.in",149],["techacode.com",149],["sptfy.be",149],["streamcheck.link",149],["mcafee-com.com",[149,255]],["pickcrackpasswords.blogspot.com",151],["kfrfansub.com",152],["thuglink.com",152],["voipreview.org",152],["hanime.tv",153],["pogo.com",154],["cloudvideo.tv",155],["legionjuegos.org",156],["legionpeliculas.org",156],["legionprogramas.org",156],["16honeys.com",157],["elespanol.com",158],["remodelista.com",159],["coolmathgames.com",[160,161,162,508]],["audiofanzine.com",163],["noweconomy.live",165],["howifx.com",[165,237]],["vavada5com.com",165],["hitokin.net",166],["elil.cc",167],["developerinsider.co",168],["ilprimatonazionale.it",169],["hotabis.com",169],["root-nation.com",169],["italpress.com",169],["airsoftmilsimnews.com",169],["artribune.com",169],["thehindu.com",170],["cambro.tv",[171,172]],["nibelungen-kurier.de",173],["noz.de",174],["earthgarage.com",176],["pianetamountainbike.it",177],["barchart.com",178],["modelisme.com",179],["parasportontario.ca",179],["prescottenews.com",179],["nrj-play.fr",180],["oeffentlicher-dienst.info",181],["hackingwithreact.com",182],["gutekueche.at",183],["eplfootballmatch.com",184],["peekvids.com",185],["playvids.com",185],["pornflip.com",185],["redensarten-index.de",186],["vw-page.com",187],["viz.com",[188,189]],["queenfaucet.website",190],["0rechner.de",191],["configspc.com",192],["xopenload.me",192],["uptobox.com",192],["uptostream.com",192],["onepiece-tube.com",193],["japgay.com",194],["mega-debrid.eu",195],["dreamdth.com",196],["pijanitvor.com",196],["diaridegirona.cat",198],["diariodeibiza.es",198],["diariodemallorca.es",198],["diarioinformacion.com",198],["eldia.es",198],["emporda.info",198],["farodevigo.es",198],["laopinioncoruna.es",198],["laopiniondemalaga.es",198],["laopiniondemurcia.es",198],["laopiniondezamora.es",198],["laprovincia.es",198],["levante-emv.com",198],["mallorcazeitung.es",198],["regio7.cat",198],["superdeporte.es",198],["playpaste.com",199],["player.rtl2.de",200],["freetutorialsus.com",201],["vidlii.com",[201,217]],["iammagnus.com",201],["dailyvideoreports.net",201],["unityassets4free.com",201],["cnbc.com",202],["puzzles.msn.com",203],["metro.us",203],["newsobserver.com",203],["arkadiumhosted.com",203],["firefaucet.win",205],["55k.io",206],["filelions.online",206],["stmruby.com",206],["direct-link.net",207],["direkt-wissen.com",207],["link-to.net",207],["fullhdxxx.com",209],["pornclassic.tube",210],["tubepornclassic.com",210],["etonline.com",211],["creatur.io",211],["drphil.com",211],["urbanmilwaukee.com",211],["ontiva.com",211],["hideandseek.world",211],["myabandonware.com",211],["kendam.com",211],["wttw.com",211],["synonyms.com",211],["definitions.net",211],["hostmath.com",211],["camvideoshub.com",211],["minhaconexao.com.br",211],["home-made-videos.com",213],["pxrnxx.xyz",213],["amateur-couples.com",213],["slutdump.com",213],["produsat.com",215],["12thman.com",217],["acusports.com",217],["atlantic10.com",217],["auburntigers.com",217],["baylorbears.com",217],["bceagles.com",217],["bgsufalcons.com",217],["big12sports.com",217],["bigten.org",217],["bradleybraves.com",217],["butlersports.com",217],["cmumavericks.com",217],["conferenceusa.com",217],["cyclones.com",217],["dartmouthsports.com",217],["daytonflyers.com",217],["dbupatriots.com",217],["dbusports.com",217],["denverpioneers.com",217],["fduknights.com",217],["fgcuathletics.com",217],["fightinghawks.com",217],["fightingillini.com",217],["floridagators.com",217],["friars.com",217],["friscofighters.com",217],["gamecocksonline.com",217],["goarmywestpoint.com",217],["gobison.com",217],["goblueraiders.com",217],["gobobcats.com",217],["gocards.com",217],["gocreighton.com",217],["godeacs.com",217],["goexplorers.com",217],["goetbutigers.com",217],["gofrogs.com",217],["gogriffs.com",217],["gogriz.com",217],["golobos.com",217],["gomarquette.com",217],["gopack.com",217],["gophersports.com",217],["goprincetontigers.com",217],["gopsusports.com",217],["goracers.com",217],["goshockers.com",217],["goterriers.com",217],["gotigersgo.com",217],["gousfbulls.com",217],["govandals.com",217],["gowyo.com",217],["goxavier.com",217],["gozags.com",217],["gozips.com",217],["griffinathletics.com",217],["guhoyas.com",217],["gwusports.com",217],["hailstate.com",217],["hamptonpirates.com",217],["hawaiiathletics.com",217],["hokiesports.com",217],["huskers.com",217],["icgaels.com",217],["iuhoosiers.com",217],["jsugamecocksports.com",217],["longbeachstate.com",217],["loyolaramblers.com",217],["lrtrojans.com",217],["lsusports.net",217],["morrisvillemustangs.com",217],["msuspartans.com",217],["muleriderathletics.com",217],["mutigers.com",217],["navysports.com",217],["nevadawolfpack.com",217],["niuhuskies.com",217],["nkunorse.com",217],["nuhuskies.com",217],["nusports.com",217],["okstate.com",217],["olemisssports.com",217],["omavs.com",217],["ovcsports.com",217],["owlsports.com",217],["purduesports.com",217],["redstormsports.com",217],["richmondspiders.com",217],["sfajacks.com",217],["shupirates.com",217],["siusalukis.com",217],["smcgaels.com",217],["smumustangs.com",217],["soconsports.com",217],["soonersports.com",217],["themw.com",217],["tulsahurricane.com",217],["txst.com",217],["txstatebobcats.com",217],["ubbulls.com",217],["ucfknights.com",217],["ucirvinesports.com",217],["uconnhuskies.com",217],["uhcougars.com",217],["uicflames.com",217],["umterps.com",217],["uncwsports.com",217],["unipanthers.com",217],["unlvrebels.com",217],["uoflsports.com",217],["usdtoreros.com",217],["utahstateaggies.com",217],["utepathletics.com",217],["utrockets.com",217],["uvmathletics.com",217],["uwbadgers.com",217],["villanova.com",217],["wkusports.com",217],["wmubroncos.com",217],["woffordterriers.com",217],["1pack1goal.com",217],["bcuathletics.com",217],["bubraves.com",217],["goblackbears.com",217],["golightsgo.com",217],["gomcpanthers.com",217],["goutsa.com",217],["mercerbears.com",217],["pirateblue.com",217],["pirateblue.net",217],["pirateblue.org",217],["quinnipiacbobcats.com",217],["towsontigers.com",217],["tribeathletics.com",217],["tribeclub.com",217],["utepminermaniacs.com",217],["utepminers.com",217],["wkutickets.com",217],["aopathletics.org",217],["atlantichockeyonline.com",217],["bigsouthnetwork.com",217],["bigsouthsports.com",217],["chawomenshockey.com",217],["dbupatriots.org",217],["drakerelays.org",217],["ecac.org",217],["ecacsports.com",217],["emueagles.com",217],["emugameday.com",217],["gculopes.com",217],["godrakebulldog.com",217],["godrakebulldogs.com",217],["godrakebulldogs.net",217],["goeags.com",217],["goislander.com",217],["goislanders.com",217],["gojacks.com",217],["gomacsports.com",217],["gseagles.com",217],["hubison.com",217],["iowaconference.com",217],["ksuowls.com",217],["lonestarconference.org",217],["mascac.org",217],["midwestconference.org",217],["mountaineast.org",217],["niu-pack.com",217],["nulakers.ca",217],["oswegolakers.com",217],["ovcdigitalnetwork.com",217],["pacersports.com",217],["rmacsports.org",217],["rollrivers.com",217],["samfordsports.com",217],["uncpbraves.com",217],["usfdons.com",217],["wiacsports.com",217],["alaskananooks.com",217],["broncathleticfund.com",217],["cameronaggies.com",217],["columbiacougars.com",217],["etownbluejays.com",217],["gobadgers.ca",217],["golancers.ca",217],["gometrostate.com",217],["gothunderbirds.ca",217],["kentstatesports.com",217],["lehighsports.com",217],["lopers.com",217],["lycoathletics.com",217],["lycomingathletics.com",217],["maraudersports.com",217],["mauiinvitational.com",217],["msumavericks.com",217],["nauathletics.com",217],["nueagles.com",217],["nwusports.com",217],["oceanbreezenyc.org",217],["patriotathleticfund.com",217],["pittband.com",217],["principiaathletics.com",217],["roadrunnersathletics.com",217],["sidearmsocial.com",217],["snhupenmen.com",217],["stablerarena.com",217],["stoutbluedevils.com",217],["uwlathletics.com",217],["yumacs.com",217],["collegefootballplayoff.com",217],["csurams.com",217],["cubuffs.com",217],["gobearcats.com",217],["gohuskies.com",217],["mgoblue.com",217],["osubeavers.com",217],["pittsburghpanthers.com",217],["rolltide.com",217],["texassports.com",217],["thesundevils.com",217],["uclabruins.com",217],["wvuathletics.com",217],["wvusports.com",217],["arizonawildcats.com",217],["calbears.com",217],["cuse.com",217],["georgiadogs.com",217],["goducks.com",217],["goheels.com",217],["gostanford.com",217],["insidekstatesports.com",217],["insidekstatesports.info",217],["insidekstatesports.net",217],["insidekstatesports.org",217],["k-stateathletics.com",217],["k-statefootball.net",217],["k-statefootball.org",217],["k-statesports.com",217],["k-statesports.net",217],["k-statesports.org",217],["k-statewomenshoops.com",217],["k-statewomenshoops.net",217],["k-statewomenshoops.org",217],["kstateathletics.com",217],["kstatefootball.net",217],["kstatefootball.org",217],["kstatesports.com",217],["kstatewomenshoops.com",217],["kstatewomenshoops.net",217],["kstatewomenshoops.org",217],["ksuathletics.com",217],["ksusports.com",217],["scarletknights.com",217],["showdownforrelief.com",217],["syracusecrunch.com",217],["texastech.com",217],["theacc.com",217],["ukathletics.com",217],["usctrojans.com",217],["utahutes.com",217],["utsports.com",217],["wsucougars.com",217],["mangadods.com",217],["tricksplit.io",217],["fangraphs.com",218],["4players.de",[219,298]],["buffed.de",219],["gamesaktuell.de",219],["gamezone.de",219],["pcgames.de",219],["videogameszone.de",219],["planetaminecraft.com",220],["cravesandflames.com",221],["flyad.vip",221],["lapresse.ca",222],["kolyoom.com",223],["ilovephd.com",223],["upstream.to",224],["negumo.com",225],["games.wkb.jp",[226,227]],["channelmyanmar.org",[228,229]],["u-s-news.com",229],["fandom.com",[230,526,527]],["kenshi.fandom.com",231],["hausbau-forum.de",232],["fake-it.ws",233],["laksa19.github.io",234],["1shortlink.com",235],["nesia.my.id",236],["makemoneywithurl.com",237],["junkyponk.com",237],["healthfirstweb.com",237],["vocalley.com",237],["yogablogfit.com",237],["en.financerites.com",237],["resetoff.pl",238],["sexodi.com",238],["cdn77.org",239],["howtofixwindows.com",240],["3sexporn.com",241],["momxxxsex.com",241],["myfreevintageporn.com",241],["penisbuyutucum.net",241],["lightnovelworld.com",242],["ujszo.com",243],["newsmax.com",244],["bobs-tube.com",245],["nadidetarifler.com",246],["siz.tv",246],["suzylu.co.uk",[247,248]],["onworks.net",249],["yabiladi.com",249],["downloadsoft.net",250],["imgair.net",251],["imgblaze.net",251],["imgfrost.net",251],["pixsera.net",251],["vestimage.site",251],["imgwia.buzz",251],["testlanguages.com",252],["newsinlevels.com",252],["videosinlevels.com",252],["luckydice.net",253],["adarima.org",253],["tieutietkiem.com",253],["weatherwx.com",253],["sattaguess.com",253],["winshell.de",253],["rosasidan.ws",253],["modmakers.xyz",253],["gamepure.in",253],["warrenrahul.in",253],["austiblox.net",253],["upiapi.in",253],["myownguess.in",253],["watchhentai.net",253],["thichcode.net",253],["texturecan.com",253],["tikmate.app",[253,478]],["4funbox.com",254],["nephobox.com",254],["1024tera.com",254],["btcbitco.in",[255,256]],["btcsatoshi.net",255],["cempakajaya.com",255],["crypto4yu.com",255],["readbitcoin.org",255],["wiour.com",255],["aiimgvlog.fun",[255,261]],["exactpay.online",255],["kiddyearner.com",255],["rsadnetworkinfo.com",256],["rsinsuranceinfo.com",256],["rsfinanceinfo.com",256],["rsgamer.app",256],["rssoftwareinfo.com",256],["rshostinginfo.com",256],["rseducationinfo.com",256],["homeairquality.org",258],["faucettronn.click",258],["ticketmaster.sg",258],["aduzz.com",259],["bitcrypto.info",259],["bildirim.link",260],["appsbull.com",262],["diudemy.com",262],["maqal360.com",262],["antonimos.de",263],["quesignifi.ca",263],["arcai.com",264],["my-code4you.blogspot.com",265],["vlxxs.net",266],["rapelust.com",266],["vtube.to",266],["vtplay.net",266],["desitelugusex.com",266],["xvideos-downloader.net",266],["xxxvideotube.net",266],["sdefx.cloud",266],["nozomi.la",266],["moviesonlinefree.net",266],["flickr.com",267],["firefile.cc",268],["pestleanalysis.com",268],["kochamjp.pl",268],["tutorialforlinux.com",268],["whatsaero.com",268],["animeblkom.net",[268,284]],["blkom.com",268],["globes.co.il",[269,270]],["jardiner-malin.fr",271],["tw-calc.net",272],["ohmybrush.com",273],["talkceltic.net",274],["zdam.xyz",275],["mentalfloss.com",276],["uprafa.com",277],["cube365.net",278],["nightfallnews.com",[279,280]],["wwwfotografgotlin.blogspot.com",281],["freelistenonline.com",281],["badassdownloader.com",282],["quickporn.net",283],["aosmark.com",285],["atozmath.com",[287,288,289,290,291,292,293]],["newyorker.com",294],["brighteon.com",295],["more.tv",296],["video1tube.com",297],["alohatube.xyz",297],["link.cgtips.org",299],["hentaicloud.com",300],["netfapx.com",302],["paperzonevn.com",304],["hentaienglish.com",305],["hentaiporno.xxx",305],["venge.io",[306,307]],["btcbux.io",308],["its.porn",[309,310]],["atv.at",311],["2ndrun.tv",312],["rackusreads.com",312],["exerror.com",312],["temp-phone-number.com",313],["jetpunk.com",315],["imgur.com",316],["hentai-party.com",317],["hentaicomics.pro",317],["xxx-comics.pro",317],["genshinimpactcalculator.com",320],["mysexgames.com",321],["embed.indavideo.hu",324],["coinurl.net",[325,326]],["gdr-online.com",327],["mmm.dk",328],["iqiyi.com",[329,330,471]],["m.iqiyi.com",331],["japopav.tv",332],["lvturbo.com",332],["nbcolympics.com",333],["apkhex.com",334],["indiansexstories2.net",335],["issstories.xyz",335],["1340kbbr.com",336],["gorgeradio.com",336],["kduk.com",336],["kedoam.com",336],["kejoam.com",336],["kelaam.com",336],["khsn1230.com",336],["kjmx.rocks",336],["kloo.com",336],["klooam.com",336],["klykradio.com",336],["kmed.com",336],["kmnt.com",336],["kool991.com",336],["kpnw.com",336],["kppk983.com",336],["krktcountry.com",336],["ktee.com",336],["kwro.com",336],["kxbxfm.com",336],["thevalley.fm",336],["dsocker1234.blogspot.com",337],["surfline.com",[338,358]],["blick.ch",339],["mgnet.xyz",340],["designtagebuch.de",341],["pixroute.com",342],["uploady.io",343],["calculator-online.net",344],["porngames.club",345],["sexgames.xxx",345],["111.90.159.132",346],["battleplan.news",346],["mobile-tracker-free.com",347],["pfps.gg",348],["ac-illust.com",[349,350]],["photo-ac.com",[349,350]],["social-unlock.com",351],["ninja.io",352],["sourceforge.net",353],["samfirms.com",354],["banned.video",355],["conspiracyfact.info",355],["freeworldnews.tv",355],["madmaxworld.tv",355],["huffpost.com",356],["ingles.com",357],["spanishdict.com",357],["play.tv3.ee",359],["trendyoum.com",360],["bulbagarden.net",361],["doomovie-hd.live",362],["madoohd.com",362],["moviestars.to",363],["hollywoodlife.com",364],["searchresults.cc",365],["mat6tube.com",366],["textstudio.co",367],["newtumbl.com",368],["nevcoins.club",370],["mail.com",371],["erome.com",374],["oggi.it",[375,376]],["manoramamax.com",375],["video.gazzetta.it",[375,376]],["mangakita.net",377],["poscishd.online",378],["avpgalaxy.net",379],["mhma12.tech",380],["panda-novel.com",381],["zebranovel.com",381],["lightsnovel.com",381],["eaglesnovel.com",381],["pandasnovel.com",381],["zadfaucet.com",382],["ewrc-results.com",383],["kizi.com",384],["cyberscoop.com",385],["fedscoop.com",385],["canale.live",386],["mafiatown.pl",[387,388]],["jeep-cj.com",389],["sponsorhunter.com",390],["cloudcomputingtopics.net",391],["likecs.com",392],["tiscali.it",393],["linkspy.cc",395],["tutelehd3.xyz",396],["dirty.pink",[397,398,399]],["adshnk.com",400],["chattanoogan.com",401],["adsy.pw",402],["playstore.pw",402],["socialmediagirls.com",403],["windowspro.de",404],["snapinsta.app",405],["tvtv.ca",406],["tvtv.us",406],["mydaddy.cc",407],["roadtrippin.fr",408],["redketchup.io",[409,410,411]],["anyporn.com",[412,427]],["bravoporn.com",412],["bravoteens.com",412],["crocotube.com",412],["hellmoms.com",412],["hellporno.com",412],["sex3.com",412],["tubewolf.com",412],["xbabe.com",412],["xcum.com",412],["zedporn.com",412],["imagetotext.info",413],["infokik.com",414],["freepik.com",415],["ddwloclawek.pl",[416,417]],["deezer.com",418],["my-subs.co",419],["plaion.com",420],["rapid-cloud.co",421],["slideshare.net",[422,423]],["ustreasuryyieldcurve.com",424],["businesssoftwarehere.com",425],["goo.st",425],["freevpshere.com",425],["softwaresolutionshere.com",425],["easymc.io",428],["staige.tv",429],["androidadult.com",430],["streamvid.net",431],["watchtv24.com",432],["cellmapper.net",433],["medscape.com",434],["newscon.org",[435,436]],["arkadium.com",437],["app.blubank.com",438],["lifesurance.info",439],["sportdeutschland.tv",440],["kcra.com",440],["wcvb.com",440],["ccthesims.com",442],["chromeready.com",442],["coursedrive.org",442],["dtbps3games.com",442],["illustratemagazine.com",442],["uknip.co.uk",442],["vod.pl",443],["megadrive-emulator.com",444],["animesaga.in",447],["moviesapi.club",447],["bestx.stream",447],["watchx.top",447],["digimanie.cz",448],["svethardware.cz",448],["srvy.ninja",449],["drawer-opportunity-i-243.site",450],["tchatche.com",451],["ozulmanga.com",452],["edmdls.com",453],["freshremix.net",453],["scenedl.org",453],["trakt.tv",[454,455,456]],["shroomers.app",457],["di.fm",[458,459,460]],["pc-builds.com",461],["qtoptens.com",461],["reuters.com",461],["today.com",461],["videogamer.com",461],["wrestlinginc.com",461],["techedubyte.com",462],["movie-th.tv",463],["iwanttfc.com",464],["nutraingredients-asia.com",465],["nutraingredients-latam.com",465],["nutraingredients-usa.com",465],["nutraingredients.com",465],["livesportsclub.me",466],["rogstream.fun",466],["ozulscansen.com",467],["fitnessbr.click",468],["minhareceita.xyz",468],["doomied.monster",469],["lookmovie2.to",469],["royalroad.com",470],["biletomat.pl",472],["hextank.io",[474,475]],["gofilmizle.com",[476,477]],["sagewater.com",479],["redlion.net",479],["satdl.com",480],["vidstreaming.xyz",481],["myradioonline.pl",482],["isthischannelmonetized.com",483],["teamskeet.com",484],["tacobell.com",486],["webtoons.com",[487,488]],["zefoy.com",489],["natgeotv.com",491],["coomer.su",492],["kemono.su",492],["br.de",493],["pasteboard.co",494],["clickhole.com",495],["deadspin.com",495],["gizmodo.com",495],["jalopnik.com",495],["jezebel.com",495],["kotaku.com",495],["lifehacker.com",495],["splinternews.com",495],["theinventory.com",495],["theonion.com",495],["theroot.com",495],["thetakeout.com",495],["pewresearch.org",495],["los40.com",[496,497]],["as.com",497],["telegraph.co.uk",[498,499]],["poweredbycovermore.com",[498,545]],["lumens.com",[498,545]],["verizon.com",500],["humanbenchmark.com",501],["politico.com",502],["officedepot.co.cr",[503,504,505,506]],["usnews.com",507],["factable.com",509],["zee5.com",510],["gala.fr",511],["geo.fr",511],["voici.fr",511],["gloucestershirelive.co.uk",512],["arsiv.mackolik.com",513],["jacksonguitars.com",514],["scandichotels.com",515],["stylist.co.uk",516],["nettiauto.com",517],["thaiairways.com",[518,519]],["cerbahealthcare.it",[520,521]],["futura-sciences.com",[520,536]],["tiendaenlinea.claro.com.ni",[522,523]],["tieba.baidu.com",524],["linktr.ee",525],["grasshopper.com",[528,529]],["epson.com.cn",[530,531]],["oe24.at",[532,533]],["szbz.de",532],["platform.autods.com",[534,535]],["wikihow.com",537],["citibank.com.sg",538],["uol.com.br",[539,540,541]],["gazzetta.gr",542],["digicol.dpm.org.cn",[543,544]],["virginmediatelevision.ie",546],["larazon.es",[547,548]],["waitrosecellar.com",[549,550,551]],["kicker.de",552],["sharpen-free-design-generator.netlify.app",[553,554]],["help.cashctrl.com",[555,556]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",[26,27]],["younetu",26],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["urlty",28],["shrink",28],["clk",28],["tmearn",28],["megalink",28],["miniurl",28],["pcprogramasymas",28],["link1s",28],["shrinke",28],["shrinkme",28],["shortzzy",28],["shorttey",[28,211]],["lite-link",28],["pureshort",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,40,91,92,93]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,197]],["xtits",[56,126]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["linkberuang",89],["kickassanime",94],["subtorrents",97],["subtorrents1",97],["newpelis",97],["pelix",97],["allcalidad",97],["infomaniakos",97],["filecrypt",101],["tornadomovies",106],["sexwebvideo",107],["mangovideo",107],["icdrama",113],["mangasail",113],["file4go",115],["asianclub",129],["anitube",135],["mixdrop",137],["azsoft",149],["uploadev",164],["ver-pelis-online",175],["ancient-origins",184],["spankbang",204],["lookcam",211],["lootlinks",211],["dpstream",214],["bluemediafiles",216],["docer",238],["pixlev",251],["terabox",254],["skymovieshd",266],["dvdplay",266],["ctrlv",286],["crackstreams",303],["123movieshd",314],["uproxy",318],["animesa",319],["cinecalidad",[322,323]],["apkmaven",369],["gmx",372],["gamereactor",426],["tvhay",[445,446]],["lookmovie",469],["lk21official",473],["www.google",485],["dropgalaxy",557]]);

const exceptionsMap = new Map([["pingit.com",[28]],["pingit.me",[28]],["lookmovie.studio",[469]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
