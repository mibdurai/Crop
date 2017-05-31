angular.module("of-client.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/BarcodeScan.html","\n<!--<script src=\"script/jquery-1.9.0.min.js\" type=\"text/javascript\"></script>\n<script src=\"script/quagga.js\" type=\"text/javascript\"></script>\n<script src=\"script/file_input.js\" type=\"text/javascript\"></script> -->\n<style>\n  .scroll\n  {\n    height: 100%;\n  }\n  .icon\n  {\n    font-size:40px;\n    color: white;\n    cursor: pointer;\n  }\n  .icon:hover\n  {\n    color: #4285f4;\n    cursor: pointer;\n  }\n\n  .ion-ios-checkmark {\n    font-size:35px;\n  }\n  .col {\n    padding: 0;\n    padding-top:4px;\n    padding-left: 2px;\n  }\n  .row {\n    padding: 0;\n    padding-top:4px;\n  }\n\n\n</style>\n\n\n<ion-view>\n  <ion-nav-title style=\"left: 0px\"><div class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Walmart Scan and Send</h1>\n  </div>\n  </ion-nav-title>\n\n  <ion-content overflow-scroll=\"false\" style=\"margin-top: -1px;margin-bottom:60px\">\n\n\n    <fieldset class=\"reader-config-group\">\n      <label>\n        <span>Barcode-Type</span>\n        <select name=\"decoder_readers\">\n          <option value=\"code_128\" selected=\"selected\">Code 128</option>\n          <option value=\"code_39\">Code 39</option>\n          <option value=\"code_39_vin\">Code 39 VIN</option>\n          <option value=\"ean\">EAN</option>\n          <option value=\"ean_extended\">EAN-extended</option>\n          <option value=\"ean_8\">EAN-8</option>\n          <option value=\"upc\">UPC</option>\n          <option value=\"upc_e\">UPC-E</option>\n          <option value=\"codabar\">Codabar</option>\n          <option value=\"i2of5\">ITF</option>\n        </select>\n      </label>\n      <label>\n        <span>Resolution (long side)</span>\n        <select name=\"input-stream_size\">\n          <option value=\"320\">320px</option>\n          <option value=\"640\">640px</option>\n          <option selected=\"selected\" value=\"800\">800px</option>\n          <option value=\"1280\">1280px</option>\n          <option value=\"1600\">1600px</option>\n          <option value=\"1920\">1920px</option>\n        </select>\n      </label>\n      <label>\n        <span>Patch-Size</span>\n        <select name=\"locator_patch-size\">\n          <option value=\"x-small\">x-small</option>\n          <option value=\"small\">small</option>\n          <option value=\"medium\">medium</option>\n          <option selected=\"selected\" value=\"large\">large</option>\n          <option value=\"x-large\">x-large</option>\n        </select>\n      </label>\n      <label>\n        <span>Half-Sample</span>\n        <input type=\"checkbox\" name=\"locator_half-sample\" />\n      </label>\n      <label>\n        <span>Single Channel</span>\n        <input type=\"checkbox\" name=\"input-stream_single-channel\" />\n      </label>\n      <label>\n        <span>Workers</span>\n        <select name=\"numOfWorkers\">\n          <option value=\"0\">0</option>\n          <option selected=\"selected\" value=\"1\">1</option>\n        </select>\n      </label>\n    </fieldset>\n\n    <div id=\"result_strip\">\n      <ul class=\"thumbnails\"></ul>\n    </div>\n    <div id=\"interactive\" class=\"viewport\"></div>\n    <div id=\"debug\" class=\"detection\"></div>\n\n\n  </ion-content>\n  <div class=\"bar bar-footer\" style=\"background-color: #165EAE\">\n    <div class=\"row\">\n      <div class=\"col\"  style=\"overflow: scroll\">\n\n      </div>\n      <div class=\"col text-center\"  id=\"camera\">\n        <div style=\"height:0px;overflow:hidden\">\n          <input type=\"file\" accept=\"image/*\" id=\"cameracapture\" capture=\"camera\"/>\n        </div>\n        <i class=\"icon ion-ios-camera\" ng-click=\"captureBarCodeImage()\"></i>\n      </div>\n      <div class=\"col \">\n        <i class=\"icon ion-ios-checkmark pull-right\" id=\"btnContinue\" ng-click=\"redirectToFormDetails()\"></i>\n      </div>\n    </div>\n  </div>\n</ion-view>\n");
$templateCache.put("app/about.html","<ion-view>\n  <ion-nav-title>About</ion-nav-title>\n  <ion-content>\n    <p>This is a sample IONIC application</p>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/captureImage.html","<script src=\"script/sotos.crop-image.js\" type=\"text/javascript\"></script>\n<style>\n  .scroll\n  {\n    height: 100%;\n  }\n.icon\n{\n  font-size:40px;\n  color: white;\n  cursor: pointer;\n}\n  .icon:hover\n  {\n    color: #4285f4;\n    cursor: pointer;\n  }\n\n.ion-ios-checkmark {\n  font-size:35px;\n}\n.col {\n  padding: 0;\n  padding-top:4px;\n  padding-left: 2px;\n}\n  .row {\n    padding: 0;\n    padding-top:4px;\n  }\n  .cropPreview\n  {\n    margin-left: 0%;\n  }\n.cropOk {\ncolor:#6caa43;\n  font-size: 15px;\n  margin-left: 1%;\n  cursor: pointer;\n}\n  .cropCancel {\n  color:#cd2823;\n    font-size: 15px;\n    margin-left: 1%;\n    cursor: pointer;\n  }\n.actionicon {\npadding-top: 6px;\n}\n  .actionicon > i{\n    font-size: 30px !important;\n  }\n</style>\n\n\n<ion-view  xmlns=\"http://www.w3.org/1999/html\">\n  <ion-nav-title style=\"left: 0px\"><div class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Walmart Scan and Send</h1>\n  </div>\n  </ion-nav-title>\n\n  <ion-content overflow-scroll=\"false\" style=\"margin-top: -1px;margin-bottom:60px\">\n    <div ng-if=\"!enableCrop\" style=\"width:100%;height:100%\">\n    <img id=\"capturedPhoto\" ng-src=\"{{imageOut}}\" style=\"width:100%;height:100%\"/>\n    </div>\n    <div ng-if=\"enableCrop\"  style=\"width:100%;height:100%;text-align: center\">\n\n      <image-crop image-out=\"imageOut\" crop-options=\"options\" ng-transclude  >\n        <edit-crop ></edit-crop>\n         <br> <p class=\"cropPreview\"> <i class=\"ion-ios-checkmark cropOk\" ng-click=\"cropImage()\" id=\"btncrop\"> Done </i>\n        <i class=\"ion-close-circled cropCancel\" ng-click=\"hideCrop()\"> Cancel </i> </p>\n        <view-crop  style=\"display: none\"></view-crop>\n      </image-crop>\n    </div>\n  </ion-content>\n  <div class=\"bar bar-footer\" style=\"background-color: #165EAE\">\n    <div class=\"row\">\n    <div class=\"col-30\"  style=\"overflow: scroll\">\n\n        <img id=\"preview\" ng-if=\"showCropIcon\" height=\"50\" width=\"50\" ng-src=\"{{imageOut}}\">\n\n          </div>\n            <div class=\"col-35 \" style=\"text-align: center;\"  id=\"camera\">\n              <div style=\"height:0px;overflow:hidden\">\n                <input type=\"file\" accept=\"image/*\" id=\"cameracapture\" file-drop  file=\"options.image\" ng-model=\"inputFile\" onchange=\"picChange(event)\"/>\n              </div>\n              <i class=\"icon ion-ios-camera\" ng-click=\"captureImage()\"></i>\n      </div>\n      <div class=\"col-20 actionicon\" >\n        <i class=\"icon ion-crop\"  ng-if=\"showCropIcon\" ng-click=\"enableCropEdit()\"></i>\n        </div>\n      <div class=\"col-15 actionicon\" >\n        <i class=\"icon ion-ios-checkmark pull-right\" id=\"btnContinue\" ng-click=\"redirectToImageList()\"></i>\n      </div>\n    </div>\n  </div>\n</ion-view>\n");
$templateCache.put("app/help.html","<ion-view>\n  <ion-nav-title>Help</ion-nav-title>\n  <ion-content>\n  <p>This application is used to approve the request.</p>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/homeMenu.html","");
$templateCache.put("app/imageList.html","<script src=\"script/jquery-2.1.3.min.js\"></script>\n<ion-view xmlns=\"http://www.w3.org/1999/html\">\n  <ion-nav-title style=\"left: 0px\"><div class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Walmart Scan and Send</h1>\n  </div>\n </ion-nav-title>\n\n  <ion-content scrollbar-y=\"true\" style=\"margin-top: -6px;margin-bottom:0px;margin-right:3px;margin-left:2px\">\n\n    <div  ng-repeat=\"img in ImageList\"   class=\"row \">\n      <div class=\"col\"><img ng-src=\"data:image/png;base64,{{img.image1}}\" style=\"width:100%\"></div>\n      <div class=\"col\"><img ng-src=\"data:image/png;base64,{{img.imgae2}}\" style=\"width:100%\"></div>\n    </div>\n\n\n  </ion-content>\n\n  <ion-footer-bar style=\"background-color: #165EAE\">\n    <button class=\"button button-large button-positive\" ng-click=\"sendImage()\"\n            style=\"margin-left:20%;margin-right: 15%;margin-top:2%;font-size:larger;font-weight: bold;height:60%;width:100%;border-radius: 5px;border-color: white;\">\n      SEND\n    </button>\n\n  </ion-footer-bar>\n</ion-view>\n");
$templateCache.put("app/menu.html","<ion-side-menus  enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-positive\">\n      <ion-nav-back-button class=\"button-clear\">\n        <i class=\"button button-icon ion-ios-arrow-thin-left\"></i>\n      </ion-nav-back-button>\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n        </button>\n      </ion-nav-buttons>\n       <ion-nav-buttons side=\"right\">\n\n        </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\" cache-view=\"false\">\n    </ion-nav-view>\n  </ion-side-menu-content>\n\n\n  <ion-side-menu width=\"270\" side=\"left\" ng-cloak>\n    <header class=\"bar bar-header bar-stable\">\n      <h1 class=\"title\">Navigation</h1>\n    </header>\n    <ion-content class=\"has-header\">\n       <ion-list>\n         <ion-item menu-close href=\"#/app/requestList\">\n           <i class=\"icon ion-ios-home side-menu-adjust\"></i>\n           <span class=\"menu-item-size\">Home</span>\n         </ion-item>\n        <ion-item menu-close href=\"#/app/help\">\n          <i class=\"icon ion-help-circled side-menu-adjust\"></i>\n          <span class=\"menu-item-size\">Help</span>\n        </ion-item>\n        <ion-item menu-close href=\"#/app/about\">\n          <i class=\"icon ion-information-circled side-menu-adjust\"></i>\n          <span class=\"menu-item-size\">About</span>\n        </ion-item>\n\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n\n\n\n\n</ion-side-menus>\n");
$templateCache.put("app/requestDetails.html","<style>\n  .ion-paperclip{\n    font-size:22px;\n  }\n  .item {\n    border-color: #fff !important;\n  }\n  .item-input\n  {\n    border-bottom-color: #ddd !important;;\n  }\n  .item-stable {\n  background-color:#d9d9d9 !important;\n  }\n  .listHeader {\n  padding-bottom:3px;\n  }\nbutton {\nheight: 36px;\n}\n  .mandatory {\n    color: red;\n    font-weight: bolder;\n  }\n  .bar-footer-white {\n    background-color: #fff !important;\n  }\n</style>\n<ion-view>\n  <ion-nav-title style=\"left: 0px\"><div class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Walmart Scan and Send</h1>\n  </div>\n  </ion-nav-title>\n  <ion-content style=\"font-size: 20px;margin-top: 0px;margin-bottom:60px\">\n    <div class=\"listHeader\" ng-repeat=\"list in lists\">\n      <ion-item class=\"item-stable accordiontitle\"\n                ng-click=\"toggleGroup(list)\"\n                ng-class=\"{active: isGroupShown(list)}\">\n        <i class=\"icon\" ng-class=\"isGroupShown(list) ? \'ion-ios-arrow-down\' : \'ion-ios-arrow-right\'\" style=\"font-size: 20px\"></i>\n        &nbsp;\n        {{list.name}}\n      </ion-item>\n      <ion-item class=\"item-accordion\"\n                ng-repeat=\"item in list.itemList\"\n                ng-show=\"isGroupShown(list)\">\n        <label class=\"item item-input item-stacked-label\">\n          <span class=\"input-label\">{{item.Name}} <span class=\"mandatory\" ng-show=\"item.IsMandatory\" >* </span> </span>\n          <input type=\"text\" placeholder={{item.Value}}>\n        </label>\n      </ion-item>\n    </div>\n  </ion-content>\n\n  <div class=\"bar bar-footer bar-footer-white\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <button style=\"float:right;width:120px\" class=\"button button-medium button-assertive\">\n          CANCEL\n        </button>\n      </div>\n      <div class=\"col\">\n        <button style=\"width:120px\" class=\"button button-medium button-balanced attach\"  ng-click=\"redirectTocaptureImage()\">\n         <span class=\"ion-paperclip \" ></span> ATTACH FILE\n        </button>\n      </div>\n    </div>\n  </div>\n  </ion-view>\n");
$templateCache.put("app/requestStatus.html","<style>\n\n  .bar-footer-white {\n  text-align: center;\n    background-color: #fff !important;\n  }\n</style>\n<ion-view>\n  <ion-nav-title style=\"left: 0px\"><div class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Walmart Scan and Send</h1>\n  </div>\n  </ion-nav-title>\n  <ion-content style=\"font-size: 20px;margin-top: 0px;margin-bottom:60px\">\n    <div class=\"row item\" ng-repeat=\"item in lists\">\n      <div class=\"col\">\n          {{item.Name}}\n      </div>\n         <div class=\"col\">\n           {{item.Value}}\n        </div>\n    </div>\n  </ion-content>\n\n  <div class=\"bar bar-footer bar-footer-white\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <button  class=\"button button-medium button-balanced attach\"  ng-click=\"redirectTorequestDetails()\">\n          CREATE ANOTHER REQUEST\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-view>\n");
$templateCache.put("app/utils/contextMenu.html","<ion-popover-view\n  style=\"top:39px; right:0px; opacity:1; height:auto;margin:0px;box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.35);width:150px;\">\n    <div class=\"list\" style=\"margin-bottom:0px;\">\n      <a class=\"item\" ng-repeat=\"item in $root.menuItems\" ng-click=\"item.action($event);closePopover();\">\n        <i class=\"icon {{ item.icon }} contextMenuText\"></i> <span class=\"contextMenuText\">{{item.name}}</span>\n      </a>\n    </div>\n</ion-popover-view>\n");
$templateCache.put("app/utils/loading-screen.html","<div class=\"row\">\n  <div class=\"col\" ng-hide=\"errorText\">\n    <h4>{{loadingText}}</h4>\n    <ion-spinner icon=\"android\" class=\"spinner-positive\"></ion-spinner>\n  </div>\n  <div class=\"row\" ng-show=\"errorText\">\n    <div class=\"col\">\n      <i class=\"icon ion-alert-circled giant-icon assertive\"></i>\n      <h4>{{errorText}}</h4>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("app/core/debug/debug.html","<ion-view view-title=\"Scan\">\n  <ion-content>\n      <h1 class=\"title padding\">Scan Anything!</h1>\n    <ul class=\"list\">\n      <li class=\"item\" ng-repeat=\"scan in ctrl.scans\">\n        <span class=\"col-20\">Your Scan:</span>\n        <span class=\"col-10\">id: {{scan.id}}</span>:\n        <span>value: {{scan.value}}</span>\n      </li>\n    </ul>\n    <button ng-click=\"ctrl.clearList()\" class=\"button button-assertive button-full\">Clear List</button>\n    <div class=\"row\">\n      <span class=\"col-20\">Heartbeat URL: </span>\n      <span>{{ ctrl.heartBeatURL }}</span>\n    </div>\n    <div class=\"row\">\n      <span class=\"col-20\">Heartbeat: </span>\n      <span>{{ ctrl.pulseResults }} <br> <button class=\"button button-royal\" ng-click=\"ctrl.checkPulse()\">Check pulse</button></span>\n    </div>\n    <div class=\"row\">\n      <span class=\"col-20\">Override Site/CC: </span>\n      <input type=\"text\" ng-model=\"ctrl.user.site\" ng-change=\"ctrl.refreshURL()\">\n      <input type=\"text\" ng-model=\"ctrl.user.country\" ng-change=\"ctrl.refreshURL()\">\n    </div>\n    <div class=\"row\">\n      <span class=\"col-20\">\n        User Info:\n      </span>\n      <pre>\n        {{ ctrl.user | json }}\n      </pre>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/core/authentication/authenticating.html","<ion-modal-view>\n  <ion-header-bar class=\"bar-positive\">\n    <h1 class=\"title\">Logging you in</h1>\n  </ion-header-bar>\n  <ion-content class=\"text-center\">\n    <div class=\"row\" ng-hide=\"errorAuthenticating\">\n      <div class=\"col\">\n        <ion-spinner id=\"exit\" icon=\"lines\" class=\"spinner-positive giant-icon\"></ion-spinner>\n      </div>\n    </div>\n    <div class=\"row\" ng-show=\"errorAuthenticating\">\n      <div class=\"col\">\n        <i class=\"icon ion-alert-circled giant-icon assertive\"></i><br>Failed to authenticate<br>Try again later\n      </div>\n    </div>\n  </ion-content>\n</ion-modal-view>\n");
$templateCache.put("app/core/authentication/login.html","<ion-modal-view id=\"login-pop-up\">\n  <ion-header-bar class=\"bar-positive\">\n    <h1 class=\"title\">Please enter your credentials</h1>\n  </ion-header-bar>\n  <ion-content>\n    <div class=\"list\">\n      <label class=\"item item-input item-floating-label\">\n        <span class=\"input-label\">User ID</span>\n        <input type=\"text\" placeholder=\"User ID\" ng-model=\"user.userId\">\n      </label>\n      <label class=\"item item-input item-floating-label\">\n        <span class=\"input-label\">Password</span>\n        <input type=\"password\" placeholder=\"Password\" ng-model=\"user.password\">\n      </label>\n      <label class=\"item item-input item-select\">\n        <div class=\"input-label\">\n          Domain\n        </div>\n        <select ng-model=\"user.domainName\">\n          <option ng-repeat=\"domain in domains\" value=\"{{domain.domain}}\">{{domain.name}}</option>\n        </select>\n      </label>\n      <label class=\"item item-input item-floating-label\">\n        <span class=\"input-label\">Site Number</span>\n        <input type=\"text\" placeholder=\"Site Number\" ng-model=\"user.businessUnitId\">\n      </label>\n      <label class=\"item item-input item-floating-label\">\n        <span class=\"input-label\">Country</span>\n        <input type=\"text\" placeholder=\"Country\" ng-model=\"user.country\">\n      </label>\n      <div class=\"padding\">\n        <button class=\"button button-block button-positive\" ng-click=\"login()\">Login</button>\n      </div>\n    </div>\n  </ion-content>\n</ion-modal-view>\n");}]);