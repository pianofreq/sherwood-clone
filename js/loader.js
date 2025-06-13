
/*jslint browser: true, multivar: true */

if (window.__AudioEyePerformance) {
    window.__AudioEyePerformance.loaderJsStartTime = performance.now();
}

if (!window.__AudioEyeSiteHash) {
    window.__AudioEyeSiteHash = 'be10d17c01bd4f512b1ff37430722d12';
}

var aecb = "8e49f9e4e";
var pscb = '';

function loadStaticScript(path) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://wsv3cdn.audioeye.com/static-scripts/v2/__BROWSER_JS_VERSION__/".replace("__BROWSER_JS_VERSION__", window.__audioEyeContext.browserJsVersion) + path;
    document.body.appendChild(script);
}

var loaderFunction = function (tries) {
    window.__AudioEyeLoaderStartTime = new Date().getTime();
    // Singleton pattern: if the loader has already run, do not overwrite.
    if (window.AudioEye && window.AudioEye.version !== undefined) {
        return;
    }

    // declare define here so that when jquery is imported in startupRoutine.js it will
    // find this define instead of any global define that a customer might use
    var define = function(){};

    window.AudioEye = Object.assign({}, window.AudioEye || {});

    var options = {};
    var protocol = "https:";
    var device = "desktop";
    var site_id = null;


    
    var options = {"live-monitoring":{"limit":1,"service":true,"includeHashFragment":false,"allowedQueryKeys":[]},"help":{"service":true,"aria-label":{"en":"Help Menu. Press enter or use question mark key to turn on or off."},"tooltip-title":{"en":"Help"},"tooltip-keycommand":{"en":"(press ?)"}},"admin":{"service":false,"aria-label":{"en":"AudioEye portal"},"at-message":{"en":"AudioEye portal login"},"cancel":{"en":"Cancel"},"popup_content_opening":{"en":"Opening the Admin Panel requires the page to reload"},"popup_content_closing":{"en":"Closing the Admin Panel requires the page to reload"},"popup_title":{"en":"Confirm reload"},"reload":{"en":"Reload"},"tooltip-title":{"en":"Admin Panel"}},"rotor":{"service":true,"aria-label":{"en":"Page Elements Menu. Press enter or use d key to turn on or off."},"tooltip-title":{"en":"Page Elements Menu"},"tooltip-keycommand":{"en":"(press D)"},"skipto_rotor-link":false},"helpers":{"service":true},"toolbar":{"service":true,"color":{"background":"#252930","foreground":"#96a0ab"},"theme":"light","defaultVTKTab":"tools","at-message":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."},"aria-label":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."}},"helpdesk":{"service":true,"at-message":{"en":"The AudioEye Help Desk to report accessibility and usability related issues."},"aria-label":{"en":"AudioEye Help Desk. To report accessibility and usability related issues, press enter or use h key to turn on or off."},"tooltip-title":{"en":"Help Desk"},"tooltip-keycommand":{"en":"(press H)"}},"launcher":{"service":true,"position":"left-lower","cta-color":"#1275B3","pre-opt-in-messaging":{"at-message":{"en":"This website is AudioEye enabled and is being optimized for accessibility. Additionally, free web personalization tools have been provided via the AudioEye Toolbar, which may be enabled from the Accessibility Statement link found on this page."}},"opt-in":false,"at-message":{"en":"This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"},"aria-label":{"en":"Accessibility options"},"tooltip-title":{"en":"Explore your accessibility options."},"preview-mode-message":{"en":"AudioEye is in preview mode. Some functionality will be limited."},"preview-mode-modal-close":{"en":"Close"},"preview-mode-modal-title":{"en":"Preview Mode"},"at-messages":{"admin":{"en":"AudioEye portal login"},"voice":{"en":"The Voice (beta) tool to control and interact with this site using your voice."},"player":{"en":"The Player tool to listen to this site read aloud. The Player is not intended as a substitute for your screen reader."},"reader":{"en":"The Reader tool to customize the visual display of this site."},"toolbar":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."},"helpdesk":{"en":"The AudioEye Help Desk to report accessibility and usability related issues."},"launcher":{"en":"This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"},"lite-reader":{"en":"AudioEye Visual Toolkit"}}},"pc_preset":"custom-mode","site-menu":{"service":false,"selectors":{"main-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"aside-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"other-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"footer-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"utility-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"additional-menus":[{"label":{"en":""},"selector":"","link":false,"search-algorithm":"default"}]},"aria-label":{"en":"Site Menu. Press enter or use n key to turn on or off."},"tooltip-title":{"en":"Site Menu"},"tooltip-keycommand":{"en":"(press N)"},"search-algorithms":{"default":"Default"}},"compliance":{"service":true,"auto-remediations":true,"smart-remediations":true,"manual-remediations":true,"live-monitoring-limit":"1","spaOptIn":false,"edge-remediations":false,"skip-remediations":"","skipto_main-content-link":false,"tab-triggers-outline":false,"skipto_main-link-text":{"en":"Skip to Main Content"},"aria-landmarks":{"banner":"","search":"","content":"","complementary":"","contentinfo":""},"aria-live":{"polite":"","assertive":"","live":"","alert":""},"new_window_text":{"en":"Opens a New Window."},"accessible-carousel-link-text":{"en":"Accessible Carousel"},"accessible-carousel-link-label":{"en":"Accessible Carousel"},"disabled-carousel-message":{"en":"Original carousel disabled. Use accessible carousel or refresh page to access."}},"lite-reader":{"service":true,"aria-label":{"en":"AudioEye Visual Toolkit"},"at-message":{"en":"AudioEye Visual Toolkit"},"tooltip-title":{"en":"Visual Toolkit"},"tooltip-keycommand":{"en":"(Press T)"}},"certification":{"service":true,"version":"5","versionlist":{"3":"Partner Pro","4":"Pro Commitment Statement","5":"Managed"},"tooltip-title":{"en":"Certification"},"tooltip-keycommand":{"en":"(press B)"},"trusted_title":"","aria-label":{"en":"AudioEye Certification Statement. Press enter or use b key to turn on or off."},"at-message":{"en":"The AudioEye Certification Statement to explain the ongoing web accessibility and usability enhancements for this website."}},"user-settings":{"service":true,"aria-label":{"en":"Settings Menu. Press enter or use s key to turn on or off."},"tooltip-title":{"en":"Settings"},"tooltip-keycommand":{"en":"(press S)"}},"carousels":[{"carousel":"","slides":"","link":false,"click-proxy":false,"next_slide":{"en":"Next Slide"},"prev_slide":{"en":"Previous Slide"},"slide_count":{"en":"Slide {{num}} of {{total}}"}}],"external-links":{"service":true,"interface":{"popup_title":{"en":"Confirm Navigation"},"popup_content2":{"en":"You are navigating away from the <span class=\"notranslate\">[[site-name]]<\/span> website. <span class=\"notranslate\">[[site-name]]<\/span> does not own, operate, or control the link or its content. <span class=\"notranslate\">[[site-name]]<\/span> is not responsible for the content of the external website. Privacy and security policies of the external website may differ from those practiced by <span class=\"notranslate\">[[site-name]]<\/span>."},"popup_content":{"en":"By activating 'Continue' below, you acknowledge the previous statement and will be taken to the external website. If you want to remain on this website, activate 'Cancel'."},"popup_content3":{"en":"By activating 'Continue' below, you will open a new window of AudioEye. If you want to remain on the same page, activate 'Cancel'."},"cancel":{"en":"Cancel"},"continue":{"en":"Continue"}}},"persist-settings":{"service":false,"persist":false},"excludes":"","timers":"","tabsets":{"tabset":"","tabs":"","active-tab":"","content":""},"iframes":{"allowed-origins":[],"searchAndInject":false,"unsafe-sources":["gateway.answerscloud.com","cc.hostedpci.com"],"unsafeIframeSelectors":["#ace-bot-iframe"]},"live-monitoring-limit":"1","content-modifiers-version":"1","ga-account":"","startup_modules":["launcher","compliance"],"languages":{"aliases":{"en":["en"],"zh-cn":["zh"],"sv-se":["sv"],"ru-ru":["ru"],"pt-pt":["pt"],"pl-pl":["pl"],"no-no":["no"],"nl-nl":["nl"],"ko-kr":["ko"],"ja-jp":["jp","ja"],"it-it":["it"],"hu-hu":["hu"],"fr-fr":["fr"],"es":["es"],"el-gr":["el"],"de-de":["de"],"da-dk":["da"],"cs-cz":["cs"],"ca":["ca"],"ar-sa":["ar"]},"supported":{"auto":"Automatic","en":"English","en-gb":"English (UK)","zh-tw":"Chinese (Taiwan)","zh-hk":"Chinese (Hong Kong)","zh-cn":"Chinese (China)","sv-se":"Swedish","ru-ru":"Russian","pt-pt":"Portuguese (Portugal)","pt-br":"Portuguese (Brazil)","pl-pl":"Polish","no-no":"Norwegian","nl-nl":"Dutch","ko-kr":"Korean","ja-jp":"Japanese","it-it":"Italian","hu-hu":"Hungarian","fr-fr":"French (France)","fr-ca":"French (Canada)","fi-fi":"Finnish","es":"Spanish","es-mx":"Spanish (Mexico)","el-gr":"Greek","de-de":"German","da-dk":"Danish","cs-cz":"Czech","ca":"Catalan","ar-sa":"Arabic"},"supported-translated":{"auto":"Automatic","en":"English","zh-tw":"\u7e41\u9ad4\u4e2d\u6587","zh-hk":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09","zh-cn":"\u7b80\u4f53\u4e2d\u6587","sv-se":"Svenska","ru-ru":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","pt-pt":"Portugu\u00eas","pt-br":"Portugu\u00eas","pl-pl":"Polski","no-no":"Norsk","nl-nl":"Nederlands","ko-kr":"\ud55c\uad6d\uc5b4","ja-jp":"\u65e5\u672c\u8a9e","it-it":"Italiano","hu-hu":"Hungarian","fr-fr":"Fran\u00e7ais","fr-ca":"Fran\u00e7ais","fi-fi":"suomi","es-mx":"Espa\u00f1ol","en-gb":"English","el-gr":"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac","de-de":"Deutsch","da-dk":"Dansk","cs-cz":"\u010cesky","ca":"Catal\u00e0","ar-sa":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","es":"Spanish"},"primary":"auto","detected":"en"},"off-limits":null,"toolbar-promo":false,"consentManagementConfig":{"service":true,"cookieConsentConfig":{"cookies":[{"id":"a77e7e8e-6bdb-4260-944c-dc150c4e1d6d","name":"__ZEHIC","namePattern":"^__ZEHIC[0-9]*$","category":"necessary","description":"This cookie is used to ensure the functionality and usability of the page and is also used to track errors.","provider":""},{"id":"7c5702d3-8271-416b-917f-8637abc5490f","name":"aeproductlaunched","category":"functional","description":"This secure cookie stores the state of the AudioEye Toolbar. If the Toolbar is active (open), the value is set to true. If the Toolbar is inactive (closed), the value is set to false. This cookie also helps define whether Toolbar modules need to be reloaded. It expires in 10 days.","provider":"AudioEye"},{"id":"8b99be67-8f70-4c97-bd61-9b0693afd7e7","name":"s_cc","category":"analytics","description":"Used to determine if browser of user accepts cookies or not","provider":"Adobe Analytics"},{"id":"97bee2bc-ad25-48b2-b74f-c08af3398235","name":"receive-cookie-deprecation","category":"analytics","description":"","provider":""},{"id":"e34ea375-3126-496b-adba-7777660bb820","name":"_gid","category":"analytics","description":"ID used to identify users for 24 hours after last activity","provider":"Google Analytics"},{"id":"021b550a-8369-4bf2-84bd-ca7062e8f4c8","name":"NID","category":"marketing","description":"This cookies is used to collect website statistics and track conversion rates and Google ad personalisation","provider":"Google"},{"id":"f09ced1f-14f2-4f41-8365-606394837596","name":"_ga_","namePattern":"^_ga_(.){10}$","category":"analytics","description":"A cookie used by Google Analytics, enables a service to distinguish one visitor from another.","provider":""},{"id":"31f63a80-9941-4d4e-a855-00fbdd858aaa","name":"_hjIncludedInSessionSample","namePattern":"^_hjIncludedInSessionSample_[0-9]*$","category":"functional","description":"","provider":""},{"id":"bda4931e-cf53-45f8-815f-8e4fff9503cb","name":"__hstc","category":"marketing","description":"The main cookie for tracking visitors.","provider":"Hubspot.com"},{"id":"b3f0c69f-8086-417e-919f-1dfbfe7863fa","name":"_ga","category":"analytics","description":"A cookie used by Google Analytics, enables a service to distinguish one visitor from another.","provider":"Google Analytics"},{"id":"884e39d9-24d7-47ba-a0cd-435017dff008","name":"uuid2","category":"marketing","description":"This cookie contains a unique randomly-generated value that enables the Platform to distinguish browsers and devices.","provider":"Xandr"},{"id":"43f92174-51fe-4fce-8633-0acf2d07734b","name":"isNewUser","category":"analytics","description":"","provider":""},{"id":"5332978e-d690-4e8f-8974-133c7b0d8cde","name":"aelastsite","category":"functional","description":"This secure cookie helps determine if the user has visited another AudioEye enabled website already. It expires in 1000 days.","provider":"AudioEye"},{"id":"14b6bec4-8870-4be2-a17e-29edb61ac37f","name":"_sp_ses.","namePattern":"^_sp_ses.*$","category":"analytics","description":"","provider":""},{"id":"aed97ac6-40d7-4aee-94da-dc446b45d214","name":"AWSALB","category":"functional","description":"These cookies enable us to allocate server traffic to make the user experience as smooth as possible. A so-called load balancer is used to determine which server currently has the best availability. The information generated cannot identify you as an individual.","provider":"Amazon Web Services"},{"id":"b00d2963-fd1b-4225-acde-17acf31a0751","name":"_gcl_au","category":"marketing","description":"Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.","provider":"Google"},{"id":"90198d7c-2de6-49e1-bff2-c5045755d852","name":"_sp_id.","namePattern":"^_sp_id.*$","category":"analytics","description":"","provider":""},{"id":"52f43097-ac7f-4b1e-9362-5ce3e3b434eb","name":"s_vi","category":"analytics","description":"Contains a unique ID to identify a user","provider":"Adobe Analytics"},{"id":"8c763cad-dd3a-4ba3-8545-44bdd9b933ad","name":"fr","category":"marketing","description":"Contains a unique browser and user ID, used for targeted advertising.","provider":"Facebook"},{"id":"d1bde388-dc99-40a4-96c4-bde4c174ef75","name":"_aeaid","category":"functional","description":"This generic cookie sets a unique ID in the browser for error logging purposes. It is used to understand the chain of logs leading to a particular error. The information set by this cookie is not used to identify particular users. It expires in one year.","provider":"AudioEye"},{"id":"f6d147f2-7808-49f6-8d88-1a1eba976c5b","name":"dm_total_visits","category":"functional","description":"","provider":""},{"id":"1bbb1f91-feb2-4879-a196-68a9e18aed20","name":"VISITOR_INFO1_LIVE","category":"marketing","description":"Tries to estimate the users' bandwidth on pages with integrated YouTube videos. Also used for marketing","provider":"Youtube"},{"id":"de5723de-f866-487e-baaf-7e05f49351c2","name":"_hp2_","namePattern":"^_hp2_.*$","category":"analytics","description":"","provider":""},{"id":"d9a7f913-177c-4349-adfe-a19eeaefc4d5","name":"aemoduleactivation","category":"functional","description":"This secure cookie stores the state of currently active modules so they can be reset on repeat visits. It expires in 10 days.","provider":"AudioEye"},{"id":"2134e9c3-51eb-4d08-ad7f-299738ef6f99","name":"dm_this_page_view","category":"functional","description":"","provider":""},{"id":"f6f58b2e-451d-4cae-b039-6dcf7ab2a5af","name":"cat2","category":"analytics","description":"","provider":""},{"id":"5782030a-cdb4-42b8-9f53-b173551c3bc4","name":"JSESSIONID","category":"functional","description":"","provider":"ftm.fluencyinc.co"},{"id":"0ef99d60-7365-4567-98f9-8473ca166f5a","name":"dm_timezone_offset","category":"functional","description":"","provider":""},{"id":"5512c9e3-92a1-4bfe-9590-909065e01552","name":"VISITOR_PRIVACY_METADATA","category":"marketing","description":"","provider":""},{"id":"78f772b5-83de-436c-a0df-4f0bc295c967","name":"dm_last_visit","category":"functional","description":"","provider":""},{"id":"26291e50-220d-45dc-8cef-e85ce60ff374","name":"aelreadersettings","category":"functional","description":"This secure cookie stores the state of each Visual Toolkit setting in order to persist these settings as the user navigates through the website. It expires at the end of the session.","provider":"AudioEye"},{"id":"b63a13bf-71bf-4e60-99be-2b27b66cddbe","name":"ajs_user_id","category":"analytics","description":" This cookie helps track visitor usage, events, target marketing, and can also measure application performance and stability.","provider":"Trustpilot"},{"id":"58bac7df-2793-4b64-a27b-c7d81a6a1f94","name":"ajs_anonymous_id","category":"analytics","description":"Used for Analytics and help count how many people visit a certain site by tracking if you have visited before","provider":"Trustpilot"},{"id":"c36bb8e2-6f23-4649-b442-26edae5bac92","name":"_fbp","category":"marketing","description":"Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers","provider":"Facebook"},{"id":"95a1b803-ced0-48ae-a1a6-da86882000d1","name":"IDE","category":"marketing","description":"This cookie is used for targeting, analyzing and optimisation of ad campaigns in DoubleClick\/Google Marketing Suite ","provider":"DoubleClick\/Google Marketing"},{"id":"42b40741-588f-4524-87d1-8c50aac0c361","name":"AWSALBCORS","category":"functional","description":"For continued stickiness support with CORS use cases after the Chromium update, we are creating additional stickiness cookies for each of these duration-based stickiness features named AWSALBCORS (ALB).","provider":"Amazon Web Services"},{"id":"8853878f-c4c0-406e-8736-f4c3e72d7f0c","name":"__cf_bm","category":"functional","description":"Cloudflare's bot products identify and mitigate automated traffic to protect your site from bad bots. Cloudflare places the __cf_bm cookie on End User devices that access Customer sites that are protected by Bot Management or Bot Fight Mode. The __cf_bm cookie is necessary for the proper functioning of these bot solutions.","provider":"Cloudflare"},{"id":"6cb3d49e-74eb-45b6-b145-c622711537c1","name":"dm_last_page_view","category":"functional","description":"","provider":""},{"id":"78cc7921-4087-4c82-8308-93c0a35305ea","name":"test_cookie","category":"functional","description":"This cookie is set by DoubleClick (which is owned by Google) to determine if the website visitor's browser supports cookies.","provider":"DoubleClick\/Google Marketing"},{"id":"a2a00841-6a66-47c3-8cc7-a5af80e3ec37","name":"_hjAbsoluteSessionInProgress","category":"functional","description":"The cookie is set so Hotjar can track the beginning of the user's journey for a total session count. It does not contain any identifiable information.","provider":"Hotjar"},{"id":"6c30dae8-7be6-4976-84f6-c133f61ef601","name":"crt","category":"functional","description":"","provider":""},{"id":"59fb50a8-9cb0-4f7f-9eaa-9ad071a44901","name":"aeatstartmessage","category":"functional","description":"This secure cookie tells the AudioEye service if it needs to build out text in the Toolbar based on the user's selected language. It expires in 1000 days.","provider":"AudioEye"},{"id":"82f786e7-7c70-40f5-b425-76791ab5e739","name":"XANDR_PANID","category":"marketing","description":"","provider":""},{"id":"01e6e26d-3506-476e-be73-7502c07d6875","name":"_hjFirstSeen","category":"functional","description":"The cookie is set so Hotjar can track the beginning of the user's journey for a total session count. It does not contain any identifiable information.","provider":"Hotjar"},{"id":"21ee7e36-3555-446e-8815-f13da92b855e","name":"_gat_gtag_","namePattern":"^_gat_gtag_UA_[0-9]*_[0-9]*$","category":"analytics","description":"A cookie used by Google Analytics and Google Tag Manager","provider":""},{"id":"e580bd70-6ccf-41da-8c9f-2ffab5fb8489","name":"s_fid","category":"analytics","description":"Alternative cookie with unique user ID \/ timestamp when the s_vi cookie can not be set for technical reasons","provider":"Adobe Analytics"},{"id":"c12e7e25-91fa-404c-b412-ccb8acf9ccd1","name":"hubspotuk","category":"analytics","description":"","provider":""},{"id":"b8b94e83-377d-4d0a-a1ac-76348ce2b259","name":"YSC","category":"functional","description":"Registers a unique ID to keep statistics of what videos from YouTube the user has seen.","provider":"Youtube"}],"cookieSettingElements":[{"id":"6c149181-a49a-4ef9-8018-2d73692406eb","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA"],"src":"https:\/\/www.youtube.com\/embed\/JBAQcVOyTME"},{"id":"e10de3d3-ae22-4f4e-9e7f-ad7345860614","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA"],"src":"https:\/\/www.youtube.com\/embed\/l03VJtI2oSI"},{"id":"1572fa34-764f-4b6b-a57a-4a10a6a846de","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","_hp2_","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=5703ab1"},{"id":"4a4d5ce3-812d-4192-ba5c-54319f4aa052","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","_hp2_","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=226ebee"},{"id":"744f645d-750c-49fc-b074-fcdb96cdb7cf","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","_hp2_","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=7fd6359"},{"id":"9a12670e-cae3-42a1-9739-2b6f1de15301","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","_hp2_","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=5aa131a"},{"id":"6301c058-1e85-4ee6-b112-de9709236b7f","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","_hp2_","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=1842ba6"},{"id":"abdf999e-127f-4c13-b180-5a14e64ad08c","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=e0d1cd4"},{"id":"301e673f-4f82-497a-976c-cc3a36c93089","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=2dc5431"},{"id":"9c7d069b-2c4e-46f9-83c7-606abf0aa7c4","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=5777757"},{"id":"856e36a2-4913-4078-8f63-27bb3992e950","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=226608b"},{"id":"d40b4384-cbd0-4f81-a8cf-4420738b9e73","cookieNames":["ps_n"],"src":"https:\/\/www.facebook.com\/v2.8\/plugins\/page.php?adapt_container_width=true&app_id=1822295708016537&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df70bd903a0eb4f9b7%26domain%3Dwww.sherwoodforestfaire.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.sherwoodforestfaire.com%252Ffa0e6baa2940f558b%26relation%3Dparent.parent&container_width=306&height=350&hide_cover=false&hide_cta=true&href=https%3A%2F%2Fwww.facebook.com%2Fsherwoodforestfaire%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline%2Cevents%2Cmessages&width=500"},{"id":"a0c6f187-569e-4c0b-a1e4-8b3c9f1e995d","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=aaf7f27"},{"id":"a0809a35-8fd4-48a6-a649-e145021397fe","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=4d87458"},{"id":"e502aa72-b877-4d0d-b582-44c75a570a31","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=c7075bc"},{"id":"42f14ebc-0f31-4731-b554-8b8ec8256250","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/v2\/frame\/cookieStorage.html?build=prod\/m&pscb=&cb=bf8f99d"},{"id":"2831f0c3-5dd6-4f15-a25b-8b87caed4583","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/0d80106d3\/cookieStorage.html"},{"id":"2e313170-f517-4710-81a4-20bcaf2cb4fb","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/9c41975ff\/cookieStorage.html"},{"id":"129cd594-c6fe-492f-b0c4-defbea6fbcaf","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/d42db729a\/cookieStorage.html"},{"id":"c6655530-320c-47a8-8853-5173b0711a74","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/6986df481\/cookieStorage.html"},{"id":"fd50747b-314c-44e1-9bba-2f26e1c89770","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/9b77eca3c\/cookieStorage.html"},{"id":"425d9ba8-c7f3-438b-bb08-256e3b46b386","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID","__Secure-ROLLOUT_TOKEN"],"src":"https:\/\/www.youtube.com\/embed\/JBAQcVOyTME"},{"id":"c79f394e-9809-4442-9ef6-d706bf72d745","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID","__Secure-ROLLOUT_TOKEN"],"src":"https:\/\/www.youtube.com\/embed\/l03VJtI2oSI"},{"id":"e4136625-cb53-4297-bd29-efb44c654b24","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID","__Secure-ROLLOUT_TOKEN"],"src":"https:\/\/www.youtube.com\/embed\/JBAQcVOyTME"},{"id":"9f4f9e43-47b3-4d9f-9b2a-24fc8910b7e8","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID","__Secure-ROLLOUT_TOKEN"],"src":"https:\/\/www.youtube.com\/embed\/JBAQcVOyTME"},{"id":"70a6ff91-6563-4403-b378-b61cfdab1bbe","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID","__Secure-ROLLOUT_TOKEN"],"src":"https:\/\/www.youtube.com\/embed\/l03VJtI2oSI"},{"id":"95d0527d-95e6-44aa-85be-0f5163a0721d","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID"],"src":"https:\/\/www.youtube.com\/embed\/JBAQcVOyTME"},{"id":"f95b3692-f91f-41e8-91f2-d6af8bcc83ba","cookieNames":["IDE","YSC","VISITOR_INFO1_LIVE","VISITOR_PRIVACY_METADATA","NID"],"src":"https:\/\/www.youtube.com\/embed\/l03VJtI2oSI"},{"id":"35edde7f-11aa-4d05-b7d2-625eb77cd64c","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/8a92d55bd\/cookieStorage.html"},{"id":"0b2c6366-dbd6-4af9-8de5-6f8ef1027e3d","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/c86474f97\/cookieStorage.html"},{"id":"27dc651e-5442-403d-9eea-ff2a6a0a8eca","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/c746c6179\/cookieStorage.html"},{"id":"bd7b7237-384f-4f6d-95ed-c5b67f09fdc7","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/7532432b1\/cookieStorage.html"},{"id":"405b906f-01f9-4aba-88d0-a055338c9b54","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/1504ac296\/cookieStorage.html"},{"id":"c2ec3aaa-4b58-4e49-8e38-a9c653818dc6","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/4a4ff0c9b\/cookieStorage.html"},{"id":"e6a4f41b-8fe8-4643-9881-19e14f646ab2","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/0e3caff25\/cookieStorage.html"},{"id":"e76b988b-e7c8-4263-a9ba-ecef74faf4d5","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/c4fffef6c\/cookieStorage.html"},{"id":"cac3f703-1198-46f8-b47f-0eebb4c2140c","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/665aeb60b\/cookieStorage.html"},{"id":"a2ff353e-11e5-4f6b-8eda-ec1434377d4c","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/201a79534\/cookieStorage.html"},{"id":"60463929-c364-43e0-bf69-37514066044b","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/77be26f28\/cookieStorage.html"},{"id":"0afd42b0-ce7d-4c78-99f8-d30e8889f875","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/829e7937f\/cookieStorage.html"},{"id":"0c117f8f-7b87-4918-8753-fac499bf0624","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/aeec9dff2\/cookieStorage.html"},{"id":"0e59127b-d0d4-4186-a714-e749656b366e","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/958386339\/cookieStorage.html"},{"id":"a4a62bc7-f38f-4c80-bdb6-3d2c7e241458","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/a748e4a48\/cookieStorage.html"},{"id":"3b0be72a-955e-4681-ad55-5f0f7233a677","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/4d1fbd7ed\/cookieStorage.html"},{"id":"943de13d-9a65-4919-abae-89e6a98a928d","cookieNames":["aeproductlaunched","__hstc","aelastsite","_gcl_au","aemoduleactivation","aelreadersettings","ajs_user_id","ajs_anonymous_id","aeatstartmessage","hubspotuk"],"src":"https:\/\/wsv3cdn.audioeye.com\/static-scripts\/v2\/fa5d8c9f6\/cookieStorage.html"}],"bannerSet":{"isEnabled":true,"consentEnforcementCriteria":{"criteria":{"bannerInfo":["EQUAL_WEIGHT",true]}},"banners":[{"description":"We use cookies to enhance site navigation, analyze site usage and assist in our marketing efforts. You can accept these cookies, or you can modify your choices.","buttonConfig":"ThreeButton","mainColor":"#666","name":"EQUAL_WEIGHT","position":"right-lower","useAutomaticColors":false,"userAccessPlacement":"footer","userAccessPlacementSelector":"#spConsentWrapper"}]}}}},
        site_id = "8708efd9-c7ec-4b48-97be-8ec1965861e4",
        encrypted_site_id = "XLOOKv2v2KRndXU7wtCX8qz2KMh12m27\/1M\/GRfdRojGzTxAg39H8cix6bjYd9wl";
        
    AudioEye.site_id = site_id;
    AudioEye.encrypted_site_id = encrypted_site_id;
    AudioEye.site_name = "sherwoodforestfaire.com";
    AudioEye.base_url = "sherwoodforestfaire.com\/m";
    AudioEye.analytics_url =  "https://report-prod.audioeye.com/v1/send";
    AudioEye.last_publish = "2025-06-09T08:18:48.253Z";

    // Unit Test Mode
    options.testmode = (window.audioeye_test_mode) ? window.audioeye_test_mode : false;

    // Make options accessible by other modules
    AudioEye.productConfig = options;

    AudioEye.cb = aecb;
    AudioEye.pscb = pscb;
    AudioEye.device = device;
    AudioEye.version = "3.0" + (aecb ? "-" + aecb : "");
    AudioEye.protocol = protocol;
    AudioEye.client_url = "https:\/\/wsv3cdn.audioeye.com\/v2";
    AudioEye.static_scripts_base_url = "https://wsv3cdn.audioeye.com/static-scripts/v2/__BROWSER_JS_VERSION__".replace("__BROWSER_JS_VERSION__", window.__audioEyeContext.browserJsVersion);
    AudioEye.cdn_bypass_url = "https:\/\/wsv3cdn.audioeye.com\/v2";

    AudioEye.assets_url = "https:\/\/assets.audioeye.com\/m";

        AudioEye.gtm_url = "https:\/\/wsv3cdn.audioeye.com\/bootstrap.js?h=be10d17c01bd4f512b1ff37430722d12";
    AudioEye.voice_url = "https:\/\/vs.audioeye.com\/m";
    AudioEye.voice_client_entry = "\/scripts\/build\/voice.js\/m";
    AudioEye.build = "prod\/m";
    AudioEye.portal_url = "portal.audioeye.com";
    AudioEye.portal_preview = false;
    AudioEye.site_version = "";
    AudioEye.toolbar_version = "2";
    AudioEye.toolbar_version_provider = "sd";
    AudioEye.loaderVersion = 2;
    AudioEye.a11yTestingReportTo = 'https://analytics.audioeye.com/v2/report';
    AudioEye.excludedFixes = [];
    AudioEye.smartRemediations = [];
AudioEye.autoSmartRemediations = [{"id":"f3e3a9e8-c794-4a52-8eeb-7f1b6a7a3dce","type":"addDownloadableDocumentWarnings","params":[],"smart_remediation_number":"f3e3a9e8-c794-4a52-8eeb-7f1b6a7a3dce","parent_id":""},{"id":"4b5c921c-1ab6-4049-965a-d9d1938ec9d3","type":"addFormLabels","params":[],"smart_remediation_number":"4b5c921c-1ab6-4049-965a-d9d1938ec9d3","parent_id":""},{"id":"5eaa86be-2c34-4348-8935-14e3ba7f2f6d","type":"addFormRequiredAriaLabel","params":[],"smart_remediation_number":"5eaa86be-2c34-4348-8935-14e3ba7f2f6d","parent_id":""},{"id":"d93c3829-bd72-470d-b131-e7b0d435488f","type":"addFrameTitles","params":[],"smart_remediation_number":"d93c3829-bd72-470d-b131-e7b0d435488f","parent_id":""},{"id":"9a12ea0f-1b9b-4026-ab3e-e4b150003a04","type":"addLinkText","params":[],"smart_remediation_number":"9a12ea0f-1b9b-4026-ab3e-e4b150003a04","parent_id":""},{"id":"5a7772c8-e0b6-491c-95c2-c2fe4c43efc0","type":"addNewWindowWarnings","params":[],"smart_remediation_number":"5a7772c8-e0b6-491c-95c2-c2fe4c43efc0","parent_id":""},{"id":"a0fc01c2-3d29-4f1b-85bb-f1f1143b3af6","type":"addSmartAltText","params":[],"smart_remediation_number":"a0fc01c2-3d29-4f1b-85bb-f1f1143b3af6","parent_id":""},{"id":"c1c8ae87-b541-40e8-b847-3c36a35e7428","type":"altDuplicateOptIn","params":[],"smart_remediation_number":"c1c8ae87-b541-40e8-b847-3c36a35e7428","parent_id":""},{"id":"09faba12-0883-4dba-909a-e88b2ca6e7ae","type":"altLong","params":[],"smart_remediation_number":"09faba12-0883-4dba-909a-e88b2ca6e7ae","parent_id":""},{"id":"715ac55c-4836-41dd-8174-b80d571d73fc","type":"altRedundant","params":[],"smart_remediation_number":"715ac55c-4836-41dd-8174-b80d571d73fc","parent_id":""},{"id":"a56710c2-69f1-479f-a497-ff8676e2a990","type":"blinkOptIn","params":[],"smart_remediation_number":"a56710c2-69f1-479f-a497-ff8676e2a990","parent_id":""},{"id":"5b52e98f-2ed9-4092-a565-c493057d75c9","type":"ariaChildlessMenu","params":[],"smart_remediation_number":"5b52e98f-2ed9-4092-a565-c493057d75c9","parent_id":""},{"id":"80f06437-ac74-47f7-b901-b828cfac989d","type":"automaticNestedLayoutTable","params":[],"smart_remediation_number":"80f06437-ac74-47f7-b901-b828cfac989d","parent_id":""},{"id":"e2c93ec3-c862-495c-9e6f-4771edb3b4f9","type":"automaticSingleListItem","params":[],"smart_remediation_number":"e2c93ec3-c862-495c-9e6f-4771edb3b4f9","parent_id":""},{"id":"ae7e1f3b-d0ba-4b32-b185-950b22f3c493","type":"buttonTextContentNotFoundOptIn","params":[],"smart_remediation_number":"ae7e1f3b-d0ba-4b32-b185-950b22f3c493","parent_id":""},{"id":"6c18040b-b889-497a-b0fa-82550d53b57b","type":"deviceIndependentEvent","params":[],"smart_remediation_number":"6c18040b-b889-497a-b0fa-82550d53b57b","parent_id":""},{"id":"02d077c4-e4d8-4c4c-83c2-db19d71759cb","type":"fieldsetLegendEmpty","params":[],"smart_remediation_number":"02d077c4-e4d8-4c4c-83c2-db19d71759cb","parent_id":""},{"id":"8cc57942-8dac-4125-bdd8-e3a6a1b81355","type":"firstHeaderLevelNot1or2","params":[],"smart_remediation_number":"8cc57942-8dac-4125-bdd8-e3a6a1b81355","parent_id":""},{"id":"6cdfca7d-172d-4e0c-84ba-8844ce27709a","type":"formFieldGroupCheckboxGroupNotFoundOptIn","params":[],"smart_remediation_number":"6cdfca7d-172d-4e0c-84ba-8844ce27709a","parent_id":""},{"id":"4164f8ce-bc0f-4f24-a68e-da988946047e","type":"formFieldLabelNotFoundOptIn","params":[],"smart_remediation_number":"4164f8ce-bc0f-4f24-a68e-da988946047e","parent_id":""},{"id":"26d52685-d99a-4f16-ae40-f49980eb7b2c","type":"formFieldLabelOptIn","params":[],"smart_remediation_number":"26d52685-d99a-4f16-ae40-f49980eb7b2c","parent_id":""},{"id":"3c8db406-fb2f-48b5-a281-f629341b4da4","type":"formFieldMetadataBadAnchor","params":[],"smart_remediation_number":"3c8db406-fb2f-48b5-a281-f629341b4da4","parent_id":""},{"id":"7e1aef8f-7522-4079-b85c-ff15af4e6832","type":"formFieldMetadataNotFoundOptIn","params":[],"smart_remediation_number":"7e1aef8f-7522-4079-b85c-ff15af4e6832","parent_id":""},{"id":"7a6399fe-6b12-4f75-8229-0dd08691d7c0","type":"frameTitleDuplicate","params":[],"smart_remediation_number":"7a6399fe-6b12-4f75-8229-0dd08691d7c0","parent_id":""},{"id":"1439c03b-611e-4512-bedc-131e8415633a","type":"headingEmpty","params":[],"smart_remediation_number":"1439c03b-611e-4512-bedc-131e8415633a","parent_id":""},{"id":"da37602d-393e-426d-9c65-a05244312975","type":"headingLevelOneCountMultiple","params":[],"smart_remediation_number":"da37602d-393e-426d-9c65-a05244312975","parent_id":""},{"id":"de1497c0-a4a6-4a0d-8272-69a1ae18874f","type":"headingLevelOneCountZero","params":[],"smart_remediation_number":"de1497c0-a4a6-4a0d-8272-69a1ae18874f","parent_id":""},{"id":"2fef6d46-15a0-43ee-9df0-b995a9500195","type":"headingSequenceOutOfOrder","params":[],"smart_remediation_number":"2fef6d46-15a0-43ee-9df0-b995a9500195","parent_id":""},{"id":"1c6a6f5e-2043-4523-960a-fb9666dda2f6","type":"hideEmptyHeaders","params":[],"smart_remediation_number":"1c6a6f5e-2043-4523-960a-fb9666dda2f6","parent_id":""},{"id":"6572da6e-2478-4d13-b538-62d0f77a5d19","type":"htmlAccessibleNameMismatchOptIn","params":[],"smart_remediation_number":"6572da6e-2478-4d13-b538-62d0f77a5d19","parent_id":""},{"id":"ea142916-0154-4a8f-a8ab-13eb0b913a57","type":"htmlAriaRolesAttributeNotAppropriate","params":[],"smart_remediation_number":"ea142916-0154-4a8f-a8ab-13eb0b913a57","parent_id":""},{"id":"831d31b2-20fa-4e3b-8cd4-0df0cabd4cbe","type":"htmlAriaRolesInvalidRole","params":[],"smart_remediation_number":"831d31b2-20fa-4e3b-8cd4-0df0cabd4cbe","parent_id":""},{"id":"35d1ac7b-eacd-4c55-9aeb-7a9070d7aa68","type":"htmlAriaRolesRoleMissingParent","params":[],"smart_remediation_number":"35d1ac7b-eacd-4c55-9aeb-7a9070d7aa68","parent_id":""},{"id":"9562a349-926d-4cd4-ae53-0f1e1fbd36e8","type":"htmlFocusSequenceAriaHiddenTabbableOptIn","params":[],"smart_remediation_number":"9562a349-926d-4cd4-ae53-0f1e1fbd36e8","parent_id":""},{"id":"3c81faf7-c91e-478a-91f9-c258869d7cad","type":"htmlLandmarksMultipleComplementary","params":[],"smart_remediation_number":"3c81faf7-c91e-478a-91f9-c258869d7cad","parent_id":""},{"id":"53a65df8-f132-4d95-86b0-32bab9b1af32","type":"htmlLandmarksMultipleMains","params":[],"smart_remediation_number":"53a65df8-f132-4d95-86b0-32bab9b1af32","parent_id":""},{"id":"436a1694-a8dd-4f9a-a37c-4fc8216d1ab4","type":"htmlLandmarksMultipleNavsOptIn","params":[],"smart_remediation_number":"436a1694-a8dd-4f9a-a37c-4fc8216d1ab4","parent_id":""},{"id":"b631c34a-49e2-40c4-8cb3-c2560823bbb6","type":"htmlSkipToMainOptIn","params":[],"smart_remediation_number":"b631c34a-49e2-40c4-8cb3-c2560823bbb6","parent_id":""},{"id":"5e4c8418-7030-45ee-96c3-7b37b5e0fceb","type":"interactiveElementKeyboardActivation","params":[],"smart_remediation_number":"5e4c8418-7030-45ee-96c3-7b37b5e0fceb","parent_id":""},{"id":"3e68a57c-3363-4c2f-87fc-4b8ba05f3f56","type":"labelEmpty","params":[],"smart_remediation_number":"3e68a57c-3363-4c2f-87fc-4b8ba05f3f56","parent_id":""},{"id":"3ac5c4b4-8034-4ccc-924d-d059116eb01d","type":"linkAdjacentSameHREFOptIn","params":[],"smart_remediation_number":"3ac5c4b4-8034-4ccc-924d-d059116eb01d","parent_id":""},{"id":"dec9482e-409f-42a8-9476-b97ef985b6d6","type":"linkEmptyOptIn","params":[],"smart_remediation_number":"dec9482e-409f-42a8-9476-b97ef985b6d6","parent_id":""},{"id":"37973787-fd4f-478d-addf-ffee7191a880","type":"linkHrefNoneOptIn","params":[],"smart_remediation_number":"37973787-fd4f-478d-addf-ffee7191a880","parent_id":""},{"id":"3728a789-3786-4d56-befb-44d9da225738","type":"linkImgTextAltBlankOptIn","params":[],"smart_remediation_number":"3728a789-3786-4d56-befb-44d9da225738","parent_id":""},{"id":"35a1ce19-7923-446e-b33e-0a1427b33419","type":"linkImgTextAltNotFoundOptIn","params":[],"smart_remediation_number":"35a1ce19-7923-446e-b33e-0a1427b33419","parent_id":""},{"id":"426233dc-de0a-44bf-b59a-cfecb1a9dd6a","type":"linkSamePageAddButtonRoleAndKeydown","params":[],"smart_remediation_number":"426233dc-de0a-44bf-b59a-cfecb1a9dd6a","parent_id":""},{"id":"aed758f3-ef70-4878-93c9-299515725546","type":"linkSamePageAnchorInvalidOptIn","params":[],"smart_remediation_number":"aed758f3-ef70-4878-93c9-299515725546","parent_id":""},{"id":"1ccaa9fe-7c10-4b5b-a46b-3488ab33d96b","type":"linkTextContentNotDescriptiveOptIn","params":[],"smart_remediation_number":"1ccaa9fe-7c10-4b5b-a46b-3488ab33d96b","parent_id":""},{"id":"17cafec1-6f1a-49f8-bc54-f642c6d95ed1","type":"linkTextContentNotFoundOptIn","params":[],"smart_remediation_number":"17cafec1-6f1a-49f8-bc54-f642c6d95ed1","parent_id":""},{"id":"fb5e49f1-fd4e-46e8-90e5-215569718df5","type":"linkTextContentRedundantOptIn","params":[],"smart_remediation_number":"fb5e49f1-fd4e-46e8-90e5-215569718df5","parent_id":""},{"id":"a10d6d0c-f411-4adb-990f-d2873dff817f","type":"makeLinkImgAltDecorative","params":[],"smart_remediation_number":"a10d6d0c-f411-4adb-990f-d2873dff817f","parent_id":""},{"id":"b199d7a5-e07b-4813-a444-673bc65692ab","type":"oneItemList","params":[],"smart_remediation_number":"b199d7a5-e07b-4813-a444-673bc65692ab","parent_id":""},{"id":"82dfb339-3fd1-4d48-86bf-b42123bec2ed","type":"removeInvalidLabelReferences","params":[],"smart_remediation_number":"82dfb339-3fd1-4d48-86bf-b42123bec2ed","parent_id":""},{"id":"14d41e24-5a97-4762-a115-f03095777daf","type":"removeLinkRedundancies","params":[],"smart_remediation_number":"14d41e24-5a97-4762-a115-f03095777daf","parent_id":""},{"id":"675976ca-f435-4bd1-8146-d7ba2ae70c32","type":"setDocLang","params":[],"smart_remediation_number":"675976ca-f435-4bd1-8146-d7ba2ae70c32","parent_id":""},{"id":"d140a193-7562-4758-b9e1-12a4b8980064","type":"spacerAlt","params":[],"smart_remediation_number":"d140a193-7562-4758-b9e1-12a4b8980064","parent_id":""},{"id":"d3119037-c6c5-4206-a1aa-0d566d0df207","type":"tabindexGreater","params":[],"smart_remediation_number":"d3119037-c6c5-4206-a1aa-0d566d0df207","parent_id":""},{"id":"c89306df-0712-4f6d-af99-7eef8733c7f2","type":"tableLayout","params":[],"smart_remediation_number":"c89306df-0712-4f6d-af99-7eef8733c7f2","parent_id":""},{"id":"87254492-1714-49f4-81ac-7488398c98ff","type":"thEmpty","params":[],"smart_remediation_number":"87254492-1714-49f4-81ac-7488398c98ff","parent_id":""},{"id":"7fe66893-110a-40a4-8cf1-c2c625da67ef","type":"titleRedundantOptIn","params":[],"smart_remediation_number":"7fe66893-110a-40a4-8cf1-c2c625da67ef","parent_id":""}];

    var a11yRulesFactories = Array.isArray(window.a11yRulesFactories) ? window.a11yRulesFactories : [];

    a11yRulesFactories.push((()=>{function e(e,r){}return e.version="rems",e})());    
    AudioEye.a11yRulesFactories = a11yRulesFactories;




    // many of our modules make use of JSON encoding/decoding. We have detected that Prototype.js mangles certain varType to JSON conversions. Let's get rid of those
    if(window.Prototype) {
        delete Object.prototype.toJSON;
        delete Array.prototype.toJSON;
        delete String.prototype.toJSON;
    }

    // create Array.reduce alternative for environments that have overridden the native reduce

if (Array.prototype.reduce.toString().indexOf('[native code]') > -1) {
  Array.prototype.ae_reduce = Array.prototype.reduce;
} else {
  Array.prototype.ae_reduce = function (callback) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = 0,
      value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
Object.defineProperty(Array.prototype, 'ae_reduce', { enumerable: false });

    /* Built Files */
    /* Serving build => prod */

    /**
 * This is necessary as legacy support for some helpers and remediations that
 * depend on 'AudioEye.require()' calls to function.
 * That the time of writing, this library only needs to support the following
 * types of calls:
 *  AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require(["utilities"], function(util)...
    AudioEye.require(['utilities'], function(u) {
 */
(function () {
  if (!window.AudioEye) {
    return;
  }

  var log = function (str) {
    if (!window.console || !window.console.log) {
      return;
    }

    console.log(str);
  };

  // Stub the AudioEye.require function for old helpers and remediations
  // @param dependency {array|string}
  // @param callback {fn} - called if it is passed in
  // @returns {object} - returns dependency always
  window.AudioEye.require = function (dependency, callback) {
    try {
      // stub with empty function if no callback passed
      if (typeof callback !== 'function') {
        callback = function () {};
      }

      // Create an object to store depdencies in
      // These will be referenced later when a call to define defines them
      if (!AudioEye.require._definedDeps) {
        AudioEye.require._definedDeps = {};
      }

      // Create an object to store callback functions in
      // The callbacks will be called when define defines their requested
      // dependency.
      if (!AudioEye.require._definedDeps) {
        AudioEye.require._callbacks = {};
      }

      // ensure dep is the string name of the dependency
      var dep = Array.isArray(dependency) ? dependency[0] : dependency;

      // The only known calls to this function look for the following
      // dependencies: 'ae_options', 'lib/mutations', and 'utilities'. All
      // other params will be rejected
      var possible_deps = ['ae_options', 'lib/mutations', 'utilities'];
      if (possible_deps.indexOf(dep) === -1) {
        throw new Error('AudioEye.require was called with "' + dep + '", which is not supported.');
      }

      switch (dep) {
        case 'ae_options':
          callback(AudioEye.productConfig);
          return AudioEye.productConfig;

        case 'lib/mutations':
        case 'utilities':
          // the requested library is already defined, pass it to the callback
          // and return it as well.
          if (AudioEye.require._definedDeps[dep]) {
            callback(AudioEye.require._definedDeps[dep]);
            return AudioEye.require._definedDeps[dep];
          }

          // Set the callback for this dependency. The callback will be
          // called when the platform defines the requested library.
          if (!AudioEye.require._callbacks[dep]) {
            AudioEye.require._callbacks[dep] = [];
          }
          AudioEye.require._callbacks.push(callback);
          return;
      }
    } catch (e) {
      log('Unable to satisfy call to AudioEye.require(). See next error for more info.');
      throw e;
    }
  };

  // Either set the factory to an object to be used later, or immediately pass
  // it to any awaiting callbacks.
  window.AudioEye.define = function (dep, factory) {
    if (!AudioEye.require._definedDeps) {
      AudioEye.require._definedDeps = {};
    }

    AudioEye.require._definedDeps[dep] = factory;

    // nothing has required anything yet
    if (!AudioEye.require._callbacks) return;

    // nothing has required this lib yet
    if (Array.isArray(AudioEye.require._callbacks[dep])) {
      // pass the factory to each callback
      AudioEye.require._callbacks[dep].forEach(function (cb) {
        cb(factory);
      });

      // remove the callbacks to prevent duplicate calls
      AudioEye.require._callbacks[dep] = [];
    }
  };
})();

    loadStaticScript("startup.bundle.js");


    // Determine startup routine
    AudioEye.mode = (function () {

        var extension = false;
        if(!site_id && extension){
            return 'anonymous'
        }

        return 'standard';
    })();

    var loaderRunStartup = function(tries) {
        if (!AudioEye.runStartup) {
            var wait = 100;
            if (tries > 50) {
                wait = wait * tries;
            }
            setTimeout(function() {
                loaderRunStartup(++tries)
            }, wait);
            return;
        }

        AudioEye.runStartup(AudioEye.mode, {
            'portal_url': 'portal.audioeye.com',
            'interface': "<div id=\"ae_app\" data-nosnippet>\n        \n        <!--\n        Layout, Style or Voice Helpers\n    -->\n    <div id=\"ae_helpers\" class=\"ae-module\" style=\"display: none;\">\n\n    \n    <\/div>\n    \n\n        <!--\n        Compliance\n    -->\n    <div id=\"ae_compliance\" class=\"ae-module\" style=\"display: none;\">\n\n        <!-- For autoSmartRem addNewWindowWarnings div is referenced in an aria-describedby -->\n        <div id=\"audioeye_new_window_message\" style=\"display:none\">Opens in new window<\/div>\n        <div id=\"audioeye_pdf_message\" style=\"display:none\">PDF Download<\/div>\n        <div id=\"audioeye_word_message\" style=\"display:none\">Word Download<\/div>\n        <div id=\"audioeye_excel_message\" style=\"display:none\">Excel Download<\/div>\n        <div id=\"audioeye_powerpoint_message\" style=\"display:none\">PowerPoint Download<\/div>\n        <div id=\"audioeye_document_message\" style=\"display:none\">Document Download<\/div>\n\n            <\/div>\n    \n    <!--\n        Versioning Control Panel if versioning = true !\n    -->\n        \n    <!--\n        Launcher\n    -->\n    <span id=\"ae_placeholder_launcher\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!-- Toolbar -->\n\n    <span id=\"ae_placeholder_toolbar\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!--\n        Site Menu\n    -->\n    <span id=\"ae_placeholder_site-menu\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    \n    <!--\n        Generic Aria Live message container\n    -->\n    <div class=\"ae-blurb-noaudio\" id=\"ae_enabled_messages\" aria-relevant=\"additions\" aria-live=\"assertive\"><\/div>\n\n    \n    <!-- Symbol definitions -->\n    <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">\n        <defs>\n            <symbol id=\"icon-close-carousel\" viewBox=\"0 0 32 32\">\n                <title>close carousel<\/title>\n                <path fill=\"#ffffff\" style=\"fill: var(--color1, #ffffff)\" d=\"M28.992 0l-12.992 12.992-12.992-12.992-3.008 3.008 12.992 12.992-12.992 12.992 3.008 3.008 12.992-12.992 12.992 12.992 3.008-3.008-12.992-12.992 12.992-12.992-3.008-3.008z\"><\/path>\n            <\/symbol>\n        <\/defs>\n    <\/svg>\n\n<\/div><!-- end #ae_app -->".replace(/__BROWSER_JS_VERSION__/g, window.__audioEyeContext.browserJsVersion),
            'container_id': "5719",
            'site_id': site_id,
            'version_id': "",
            'is_working_version_request': false,
            'monitor': false,
            'live_monitor_endpoint_url': "https://report-prod.audioeye.com/v1/report",

                        'perf_endpoint_url': '',
            'loader_timing_endpoint_url': "https:\/\/zalywzdew6.execute-api.us-west-2.amazonaws.com\/prod\/v0\/timing",
            'product_config': options,
            'device': device,
            'testmode': window.AEUnitTests,
            'site_hash': "be10d17c01bd4f512b1ff37430722d12",
            'toolbar_version': 2        });
    };

    // Execute startup routine
    loaderRunStartup(1);
    
    window.AudioEye = Object.assign(window.AudioEye || {}, AudioEye);
};

loaderFunction(1);