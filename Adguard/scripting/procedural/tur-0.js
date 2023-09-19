/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

'use strict';

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".rek-0\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".poster > .bx-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> .bx-sidebar-header > span\",\"tasks\":[[\"has-text\",\"Sponsorlar\"]]}]]}"],["{\"selector\":\".video-content > div[id^=\\\"welcomeDiv\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#sol > #embed:has(iframe) ~ #video-onu2\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"|/video/\"],[\"spath\",\"body > .play-button-outer ~ .pppx\"]]}"],["{\"selector\":\"#oframeplayerjs > pjsdiv\",\"tasks\":[[\"has\",{\"selector\":\"> pjsdiv[style] > pjsdiv\",\"tasks\":[[\"has-text\",\"FREESPİN\"]]}]]}"],["{\"selector\":\".theiaStickySidebar span.stream-title\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}"],["{\"selector\":\".sidebar aside.widget a[rel^=\\\"sponsored\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#sidebar > .yanmenu\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"Sponsorl\"]]}]]}","{\"selector\":\".content > article > center\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}","{\"selector\":\".wrapper > .anasayfa > .homewidget\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"Sponsorl\"]]}]]}"],["{\"selector\":\".container .none-margin-tablet > .margin-top--30 > .center__row > div[id^=\\\"category-\\\"] > script\",\"tasks\":[[\"has-text\",\"defineSlot\"],[\"upward\",3]]}"],["{\"selector\":\".sidebar > .mom_custom_text > .custom_textwidget > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"body > .container > .row + .shadow1 > .header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#js-hook-for-observer-tabs-wrapper > .detail-head-wrapper:not([id]) > h4.detail-head-separator\",\"tasks\":[[\"has-text\",\"/^SPONSORLU BAĞLANTILAR$/\"]]}"],["{\"selector\":\"#sidebar-primary-sidebar > .sidebar-widget > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > .shadow1 > .header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".bilesen > .w_baslik\",\"tasks\":[[\"has\",{\"selector\":\"> .yazi_golge\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".owl-dots > div.owl-dot\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}"],["{\"selector\":\".sidebar > .ai_widget\",\"tasks\":[[\"has\",{\"selector\":\"> .modul-title > h3.m-title\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".manset-list > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}]]}"],["{\"selector\":\"div[name=\\\"teklifler\\\"] > div > div > a[href^=\\\"https://www.cimri.com/offer/\\\"]\",\"tasks\":[[\"has-text\",\"Reklam\"],[\"upward\",1]]}","{\"selector\":\"section > div[class]:has(> div[id*=\\\"_728X90_\\\"][style^=\\\"background-color:\\\"]:only-child)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"section > div[id*=\\\"_300X250_\\\"][style^=\\\"background-color:\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".columns.is-multiline > .column > center > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#details > center\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"nav[id^=\\\"NavMenu\\\"] > ul.oge\",\"tasks\":[[\"has\",{\"selector\":\"> li > a[href] > span.hot-topic-word > span.miktar\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#PopularSicakFirsatTopicsContent > div[class=\\\"populersatir\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > .populerbaslik > span\",\"tasks\":[[\"has-text\",\"/^\\\\(ilandır\\\\)$/\"]]}]]}","{\"selector\":\"td[bgcolor=\\\"d0d0d0\\\"] > table[width=\\\"100%\\\"] > tbody > tr[bgcolor=\\\"#FFFFFF\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td[class]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#sidebar > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div > h3\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#interstitial-close-link-source\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-banner\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-doubleclickwebinterstital\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ui-autocomplete > li:has(> div[style=\\\"color:rgb(0, 0, 0)\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ui-autocomplete > li[style^=\\\"position: absolute;\\\"][style*=\\\"z-index:\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> .ui-menu-item-wrapper\",\"tasks\":[[\"has-text\",\"/^sponsorlu$/\"]]}]]}"],["{\"selector\":\".sidebar > .widget > .block-title > span\",\"tasks\":[[\"has-text\",\"Reklamlar\"],[\"upward\",2]]}"],["{\"selector\":\".swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href]\",\"tasks\":[[\"has-text\",\"ilandır\"]]}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[data-url^=\\\"https://ensonhaber.me/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-md-sidebar > .widget > .pm-section-head\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Advertisment$/\"]]}]]}"],["{\"selector\":\".slick-dots > li:has(> a[href^=\\\"https://www.haber7.com/advertorial/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"a[href^=\\\"https://www.haber7.com/advertorial/\\\"].headline-slider-item\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"aside.yanalan--right > .bilesen > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".owl-stage > div.owl-item:has(> article > a[href^=\\\"/guncel/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body > div.container > div.header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mansetSlider li:has(img[src*=\\\"//haberkibris.com/banner2/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".widget-subjects > .wrapper > .box-row > .box > .ad-ver-ti-se-ment\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".swiper > div.swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"/reklam/ads/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[id^=\\\"reki\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#sag > .bilesen\",\"tasks\":[[\"has\",{\"selector\":\"> .bilesen-baslik\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".col-xs-4 > div[align=\\\"center\\\"]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}"],["{\"selector\":\".haberDetayIcerik p > img[loading=\\\"lazy\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".theiaStickySidebar > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget table[style] > tbody > tr > td\",\"tasks\":[[\"has-text\",\"Mezunum\"]]}]]}"],["{\"selector\":\".native-kutu\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".td-ss-main-sidebar > aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> h4.block-title > span\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".sidebar-content-fixed-scroll > aside.widget > div.widget_text > div.textwidget > ins[class] ~ script\",\"tasks\":[[\"upward\",\"aside.widget\"]]}"],["{\"selector\":\".swiper-wrapper > .swiper-slide:has(*:is(img[src^=\\\"/sahifeler/rkl/\\\"], .adsbygoogle))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".better-ads-listitemad\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-lg-8 > .panel-info > .panel-body > .panel > .panel-body > a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[class^=\\\"Container\\\"] > div[class^=\\\"Spacer\\\"] div[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/^\\\\/$/\"],[\"spath\",\".container > div.row:has(> div[class^=\\\"col-\\\"] > div.banner)\"]]}"],["{\"selector\":\".side2 > .box1 > .title-red\",\"tasks\":[[\"has\",{\"selector\":\"> .red-inside > .red-title\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\".page > div [id^=\\\"edit\\\"] > div[align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .page > div[style] > div[style] > .tborder > tbody > tr > td.thead\",\"tasks\":[[\"has-text\",\"Sponsored Links\"]]}]]}"],["{\"selector\":\".col-sm-4 > .well3\",\"tasks\":[[\"has\",{\"selector\":\"> .panel > .panel-heading2 > center\",\"tasks\":[[\"has-text\",\"Reklam Alanı\"]]}]]}"],["{\"selector\":\"div.slick-track > a[href^=\\\"/service/advertclick\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"li[id^=\\\"slick-slide\\\"] > a[href^=\\\"/service/advertclick\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#s-spotmanset-dots > .row > li:has(> a[href=\\\"https://www.dermansut.com.tr/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#s-spotmanset-dots > .row > li:has(> a[href=\\\"https://www.letstr.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".recipe-cards-area > div > div#arsiv-native\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > .widget > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.bg-white\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\"#main > aside > section.sidebarWidget\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantı\"]]}"],["{\"selector\":\".begenilen_anasayfa > ul > li.kitem > div[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"tbody > tr > td[height=\\\"90\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> script\",\"tasks\":[[\"has-text\",\"google_ad_client\"]]}]]}"],["{\"selector\":\".sidebar-narrow > .widget > .widget-top\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".splide__list > li.splide__slide:has(> div.s-gcm-br)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",2]]}"],["{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"] > iframe[aria-label=\\\"Google AdSense\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"] > wix-iframe > div > iframe[src^=\\\"https://www-popkedi-com.filesusr.com/html/\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".classifiedOtherDetails > div.uiBox\",\"tasks\":[[\"has\",{\"selector\":\"> div > h3\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://dimpa.renault.com.tr/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> img[src*=\\\"banner\\\"] + a[href])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[title=\\\"advert\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".well > div.panel-heading\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"REKLAM\"]]}]]}"],["{\"selector\":\".once-reklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".content-container > #aside > div[style=\\\"height:600px;\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > span\",\"tasks\":[[\"has-text\",\"SPONSOR\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > .bilesen\",\"tasks\":[[\"has\",{\"selector\":\"> .w_baslik > div[style=\\\"color:#FFF; text-decoration:none;\\\"]\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".pull-left > .box\",\"tasks\":[[\"has\",{\"selector\":\"> script\",\"tasks\":[[\"has-text\",\"sas.render\"]]}]]}"],["{\"selector\":\".sidebar-content > .sidebar-top > p\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",1]]}"],["{\"selector\":\".columns.is-multiline > .column > .card-sl > .sponsorlu\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".columns.is-multiline > .column > center > amp-ad\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".CloudWrapper > div[align=\\\"center\\\"] > span.previous_results_class > center > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#sidebar > div.section\",\"tasks\":[[\"has\",{\"selector\":\"> div.releases > h3\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".swiper-wrapper > div:has(> a > figure.manset-reklam)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".right-wrapper > div.grid-margin\",\"tasks\":[[\"has\",{\"selector\":\"> div.card > div.card-header\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".samOverlay_30\",\"tasks\":[[\"has\",{\"selector\":\"> div.overlay > div.overlay-title\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[class]\",\"tasks\":[[\"has-text\",\"/^Widget Didn’t Load$/\"]]}]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-header > h3.widget-title\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".entry-content > div.film-content > div.film-share\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#content-left > .medium_title\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantılar\"]]}","{\"selector\":\"#content-right .flickr > center > h3\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantılar\"]]}"],["{\"selector\":\".box-news > .row > .col-md-4 > .banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > div.widget-container\",\"tasks\":[[\"has-text\",\"Reklam\"]]}"],["{\"selector\":\"div[id^=\\\"edit\\\"] > div[style*=\\\"stylevar\\\"] > table > tbody > tr > .thead\",\"tasks\":[[\"has-text\",\"/^Reklamlar$/\"],[\"upward\",3]]}"],["{\"selector\":\"body > #cboxOverlay\",\"tasks\":[[\"has\",{\"selector\":\"+ #colorbox:has(#popup-reklam)\"}]]}"],["{\"selector\":\"#leftC > .filmborder\",\"tasks\":[[\"has\",{\"selector\":\"> .filmcontent > .tam > a\",\"tasks\":[[\"has-text\",\"Sponsor Reklam\"]]}]]}"],["{\"selector\":\"#usttekiReklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".container > section#content > p[style]\",\"tasks\":[[\"has-text\",\"SEX YAPABİLECEĞİM\"]]}"],["{\"selector\":\"video#SlotBar > source[src^=\\\"/reklams/\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".thead\",\"tasks\":[[\"has-text\",\"Reklam\"],[\"upward\",2]]}","{\"selector\":\"div[style=\\\"padding:0px 10px 0px 10px\\\"] > div[id=\\\"posts\\\"] > table[class=\\\"tborder\\\"][width=\\\"100%\\\"][align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td.thead\",\"tasks\":[[\"has-text\",\"Sponsorlu Baglantilar\"]]}]]}"],["{\"selector\":\"span.stream-title\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}"],["{\"selector\":\".home-swiper > div.swiper-wrapper > div.swiper-slide:has(a[href*=\\\"&utm_\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"[class$=\\\"menu\\\"] > [class^=\\\"sidebars\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .sidebarHeading > h4\",\"tasks\":[[\"has-text\",\"/-|Reklam/\"]]}]]}"],["{\"selector\":\".banner300Soru\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\"td[width=\\\"130\\\"] > table[align=\\\"center\\\"][width=\\\"150\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"font > b\",\"tasks\":[[\"has-text\",\"Reklamlar\"]]}]]}"],["{\"selector\":\"main > fieldset > b\",\"tasks\":[[\"has-text\",\"Adrese Teslim Kredi\"]]}","{\"selector\":\"main > fieldset > b\",\"tasks\":[[\"has-text\",\"Bu İndirim Kaçmaz!\"]]}"],["{\"selector\":\".col-12 > .content-items.grid > .col-12 > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".col-12 > .content-items.grid > .col-6 > .widget-336x280\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".grid > .col-12 > .swiper-container ~ div[class=\\\"txt:center panel\\\"] > a[href][onclick^=\\\"gtag('event', 'Click'\\\"] > img\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".nav > div[align=\\\"center\\\"] > div[style] > table.tborder\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td.tcat\",\"tasks\":[[\"has-text\",\"Sponsorlar\"]]}]]}","{\"selector\":\".nav div[id=\\\"pagenav_menu\\\"] + div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> table.tborder > tbody > tr > td.thead > b\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"body > main > div[class] > .rPanel\",\"tasks\":[[\"has\",{\"selector\":\"> .head\",\"tasks\":[[\"has-text\",\"/^Reklam $/\"]]}]]}"],["{\"selector\":\".td-ss-main-sidebar > .td_block_template_1.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > span\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".sidebar > div[id^=\\\"custom_html-\\\"] > .textwidget > .thb-ad\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sFlexCont > .sFlexElement[style] > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#sidebar-right > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidebarnav > h3 > div[style]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".module > div.module-inner div.bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\"#sidebar > li\",\"tasks\":[[\"has\",{\"selector\":\"> .block.smaller span.blocktitle\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\"#content-area ins.adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#feed-contents > div.cbox > div.infotop span.left\",\"tasks\":[[\"has-text\",\"Reklam\"],[\"upward\",\"div.cbox\"]]}"],["{\"selector\":\"#text > div[style^=\\\"height:\\\"] > div[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".col-4 > div[style^=\\\"height\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".s-pagination li:has(> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"div[style^=\\\"height:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"width:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".card.bg-body > h4.text-warning\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\".page-wrapper > .container > .row > div[class=\\\"col-12 col-md-6 col-lg-4 view-20\\\"] > .advers-box\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".swiper-reklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> figure.news-box > figcaption > a[href] > span.txt\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".solbar > .sol-kutu\",\"tasks\":[[\"has\",{\"selector\":\"> .m-baslik > p > b\",\"tasks\":[[\"has-text\",\"/^SPONSOR REKLAMLAR$/\"]]}]]}"],["{\"selector\":\".p-body-sidebar > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-container > h3.block-minorHeader\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".flex-row > section.flex-col-left > div.infinitegallery-picture-container\",\"tasks\":[[\"has-text\",\"Bahis\"]]}","{\"selector\":\".rhd-all-article-detail > p\",\"tasks\":[[\"has\",{\"selector\":\"> strong\",\"tasks\":[[\"has-text\",\"Misli.com\"]]}]]}"],["{\"selector\":\"#sidebar > .sidebar-box > h4 > span\",\"tasks\":[[\"has-text\",\"/^REKLAM$/\"],[\"upward\",2]]}"],["{\"selector\":\".grid-stack-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.Reklam_001:not(:has(iframe[src^=\\\"http://mardinhaber.tv/\\\"])):not(:has(a[href^=\\\"http://www.mardinhaber.tv\\\"]))\"}]]}"],["{\"selector\":\"#orta > .karisikOyunlarr > div > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".main-headline div.headline-new > .swiper-slide:has(> a[href^=\\\"https\\\"][target=\\\"_blank\\\"] > picture > img)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#s-manset-dots > ul > li:has(> a[href^=\\\"/service/advertclick?\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#s-manset-list div.slick-track > a.item-rkm\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://www.sozcu.com.tr/reklam/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(a[href^=\\\"https://tinyurl.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > .owl-item:has(> .item > a[target=\\\"_blank\\\"]:not([href^=\\\"https://www.yeniakit.com.tr/\\\"]))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"td[valign=\\\"top\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"table[cellspacing=\\\"1\\\"] b\",\"tasks\":[[\"has-text\",\"Reklamlar\"]]}]]}"],["{\"selector\":\".full-news-content > center\",\"tasks\":[[\"has-text\",\"Sponsoru Ngsbahis\"]]}"]];

const hostnamesMap = new Map([["buzz",4],["jsh2m5z.cloud",5],["l.ue2nx.xyz",5],["sorumatik.co",6],["320volt.com",7],["ademocut.com",8],["ajansspor.com",9],["alomaliye.com",10],["anamurekspres.com",11],["arabam.com",12],["artigercek.com",13],["avrupabulten.com",14],["sonses.tv",14],["bakirkoydenhaber.com",15],["basarisiralamalari.com",16],["bilgenc.com",17],["bomba32.com",18],["cimri.com",19],["discordsunucu.com",20],["doeda.com",21],["donanimhaber.com",22],["forum.donanimhaber.com",23],["donghuatr.com",24],["eksisozluk1923.com",25],["emlakkulisi.com",26],["ensonhaber.com",27],["fullhdfilmdeposu.com",28],["haber7.com",29],["haberbucuk.com",30],["haberdairesi.com",31],["haberetanik.com",32],["haberkibris.com",33],["hthayat.haberturk.com",34],["hakimiyet.com",35],["imdbfilmizle.com",36],["incesoz.com",37],["istikbalgazetesi.com",38],["kibrisgercek.com",39],["kibriswebhaber.com",40],["kimkazandi.com",41],["koinfinans.com",42],["koinmedya.com",43],["konhaber.com",44],["kriptoarena.com",45],["kriptoparapiyasasi.com",46],["letgo.com",47],["lifebursa.com",48],["lordiz.com",49],["mach1digital.com",50],["manga-tr.com",51],["mansetaydin.com",52],["medyabar.com",53],["nefisyemektarifleri.com",54],["ogznet.com",55],["onedio.com",56],["otokokpit.com",57],["oyunkolu.com",58],["oyunkuzusu.com",59],["ozengen.com",60],["paratic.com",61],["poki.com",62],["popkedi.com",63],["sahibinden.com",64],["sehrivangazetesi.com",[65,66]],["wanhaber.com",66],["siberdeyiz.com",67],["sinemavitrini.com",68],["sondakika.com",69],["sonperiyot.com",70],["sozsepeti.com",71],["tamindir.com",72],["technoprogram.com",73],["telegramgruplari.com",74],["telesikayet.com",75],["manga.tempestfansub.com",76],["timeturk.com",77],["trwebtoon.com",78],["forum.turkmmo.com",79],["tvdizix.com",80],["upslut.com",81],["vitoporno.com",82],["whatsappdurumlari.com",83],["yeniduzen.com",84],["yeniwindows.com",85],["ytpara.com",86],["yesilcamtv.eu",87],["hentaizm.fun",88],["altin.in",89],["gerzek.info",90],["hdfilmcehennem.live",91],["agaclar.net",92],["aktuelsanat.net",93],["birgun.net",94],["buguzelsozler.net",95],["fenokulu.net",96],["gulum.net",97],["vucut-kitle-endeksi.hesaplama.net",98],["memurlar.net",99],["opelim.net",100],["r10.net",101],["saglikbilgisi.net",102],["shiftdelete.net",103],["turkegitim.net",104],["unyetv.net",105],["21yyte.org",106],["akademikpersonel.org",107],["aydinlatma.org",108],["evrimagaci.org",109],["aksam.com.tr",110],["aksiyon.com.tr",111],["aspor.com.tr",112],["cumhuriyet.com.tr",113],["fotomac.com.tr",114],["freemagazine.com.tr",115],["forum.gamer.com.tr",116],["hurriyet.com.tr",117],["maisonfrancaise.com.tr",118],["mardinhaber.com.tr",119],["oyunu.com.tr",120],["sabah.com.tr",121],["sesgazetesi.com.tr",122],["sozcu.com.tr",123],["takvim.com.tr",124],["yeniakit.com.tr",125],["gazeteoku.tv",126],["stadyum.tv",127]]);

const entitiesMap = new Map([["dafflix",0],["dizilla",1],["vipfilmlerizle",2],["webteizle",3]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
