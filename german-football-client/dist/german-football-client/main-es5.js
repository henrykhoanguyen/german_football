function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<main>\n  <app-dashboard></app-dashboard>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard\">\n  <mat-tab-group\n    mat-align-tabs=\"center\"\n    animationDuration=\"0ms\"\n    dynamicHeight\n    color=\"warn\"\n  >\n    <mat-tab label=\"STANDINGS\">\n      <app-standings-table></app-standings-table>\n    </mat-tab>\n    <mat-tab label=\"MATCHES\">\n      <app-matches-table></app-matches-table>\n    </mat-tab>\n    <!-- <mat-tab label=\"Third\"></mat-tab> -->\n  </mat-tab-group>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"warn\">\n  German Football - Bundesliga &nbsp;\n  <fa-icon [icon]=\"faFutbol\" id=\"futball\"> </fa-icon>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/match-details-dialog/match-details-dialog.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match-details-dialog/match-details-dialog.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMatchDetailsDialogMatchDetailsDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list class=\"mat-body-2\" cols=\"2\">\n  <h3 class=\"mat-title title-box\">\n    {{ match.HomeTeam }}\n    <div class=\"scores\">\n      {{ match.FullTimeHomeGoals }}\n    </div>\n    -\n    <div class=\"scores\">\n      {{ match.FullTimeAwayGoals }}\n    </div>\n    {{ match.AwayTeam }}\n  </h3>\n\n  <strong>Season:</strong> {{ match.Season }} <br />\n  <strong>Date:</strong> {{ match.Date }}\n</mat-grid-list>\n\n<mat-grid-list class=\"mat-body-2\" cols=\"2\" rowHeight=\"2:1\" gutterSize=\"2em\">\n  <mat-grid-tile rowspan=\"1\">\n    <div class=\"info-content\">\n      <h4 class=\"mat-subheading-1 title-content\">Match Result</h4>\n      <p>\n        <strong>Full Time Result: </strong> {{ match.FullTimeResult }}<br />\n\n        <strong>Haft Time Home Goals: </strong> {{ match.HaftTimeHomeGoals }}<br />\n        <strong>Haft Time Away Goals: </strong> {{ match.HaftTimeAwayGoals }}<br />\n\n        <strong>Full Time Home Goals: </strong> {{ match.FullTimeHomeGoals }}<br />\n        <strong>Full Time Away Goals: </strong> {{ match.FullTimeAwayGoals }}\n      </p>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"1\">\n    <div class=\"info-content\">\n      <h4 class=\"mat-subheading-1 title-content\">Shot Analysis</h4>\n      <p>\n        <strong>Home Shots: </strong> {{ match.HomeShots }}<br />\n        <strong>Home Shots on Target: </strong> {{ match.HomeShotsTarget }}<br /><br />\n        <strong>Away Shots: </strong> {{ match.AwayShots }}<br />\n        <strong>Away Shots on Target: </strong> {{ match.AwayShotsTarget }}\n      </p>\n    </div>\n  </mat-grid-tile>\n\n  <mat-grid-tile rowspan=\"1\" colspan=\"2\" class=\"last-tile\">\n    <div class=\"info-content\">\n      <h4 class=\"mat-subheading-1 title-content\">Technical</h4>\n      <p>\n        <strong>Home Team Number of Fouls: </strong> {{ match.HomeFouls }} <br/>\n        <strong>Home Corners Taken: </strong> {{ match.HomeCorners }}<br />\n        <strong>Home Team's Yellow Cards: </strong> {{ match.HomeYellow }} <br/>\n        <strong>Home Team's Red Cards: </strong> {{ match.HomeRed }}<br /> <br/>\n\n        <strong>Away Team Number of Fouls: </strong> {{ match.AwayFouls }} <br/>\n        <strong>Away Corners Taken: </strong> {{ match.AwayCorners }}<br />\n        <strong>Away Team's Yellow Cards: </strong> {{ match.AwayYellow }} <br/>\n        <strong>Away Team's Red Cards: </strong> {{ match.AwayRed }}\n      </p>\n    </div>\n  </mat-grid-tile>\n\n</mat-grid-list>\n<!-- <button mat-stroked-button color=\"warn\" class=\"close-button\" (click)=\"onClose()\">Close</button> -->\n<!-- TODO: add news or commentary section in 4th tile -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/matches-table/matches-table.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matches-table/matches-table.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMatchesTableMatchesTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Seasons button component -->\n<app-seasons-button (inputSeason)=\"getMatches($event)\" [seasons]=\"seasons\"></app-seasons-button>\n\n<div *ngIf=\"matches.length > 0\">\n  <mat-paginator\n    [length]=\"length\"\n    [pageSize]=\"9\"\n    showFirstLastButtons\n    (page)=\"OnPageChange($event)\"\n  >\n  </mat-paginator>\n\n  <mat-card\n    *ngFor=\"let match of pagedMatches\"\n    class=\"match-cards\"\n    (click)=\"openDialog(match)\"\n  >\n    <mat-card-header class=\"mat-title\" [ngSwitch]=\"match.FullTimeResult\">\n      <div *ngSwitchCase=\"'H'\">\n        <div class=\"winner\">{{ match.HomeTeam }}</div>\n        vs {{ match.AwayTeam }}\n      </div>\n      <div *ngSwitchCase=\"'A'\">\n        {{ match.HomeTeam }} vs\n        <div class=\"winner\">{{ match.AwayTeam }}</div>\n      </div>\n      <div *ngSwitchCase=\"'D'\">\n        {{ match.HomeTeam }} vs {{ match.AwayTeam }}\n      </div>\n      <p class=\"mat-body-1 date-detail\">\n        {{ match.Date }}\n      </p>\n    </mat-card-header>\n    <mat-card-content>\n      <p class=\"mat-title\">\n        {{ match.FullTimeHomeGoals }} - {{ match.FullTimeAwayGoals }}\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>\n<p *ngIf=\"matches.length == 0\" class=\"mat-subheading-2 align-text\">\n  Nothing to see here...\n</p>\n\n<!-- TODO3: add link to team page -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seasons-button/seasons-button.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seasons-button/seasons-button.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeasonsButtonSeasonsButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button\n  mat-raised-button\n  [matMenuTriggerFor]=\"menu\"\n  color=\"warn\"\n  [matMenuTriggerData]=\"seasons\"\n>\n  {{ displayingSeason || seasons[2] }} Season\n</button>\n<mat-menu #menu=\"matMenu\">\n  <ng-template matMenuContent>\n    <button mat-menu-item (click)=\"setSeason(seasons[2])\">\n      {{ seasons[2] }}\n    </button>\n    <button mat-menu-item (click)=\"setSeason(seasons[1])\">\n      {{ seasons[1] }}\n    </button>\n    <button mat-menu-item (click)=\"setSeason(seasons[0])\">\n      {{ seasons[0] }}\n    </button>\n  </ng-template>\n</mat-menu>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/standings-table/standings-table.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/standings-table/standings-table.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStandingsTableStandingsTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Seasons button component -->\n<app-seasons-button (inputSeason)=\"getStandings($event)\" [seasons]=\"seasons\"></app-seasons-button>\n<!-- <mat-divider></mat-divider> -->\n<div>\n  <p class=\"mat-caption glossary\">\n    <strong>W</strong> - Win |\n    <strong>L</strong> - Loss |\n    <strong>D</strong> - Draw |\n    <strong>GF</strong> - Goals For |\n    <strong>GA</strong> - Goals Against |\n    <strong>GD</strong> - Goal Difference |\n    <strong>Pts</strong> - Points\n  </p>\n</div>\n<mat-table\n  [dataSource]=\"standings\"\n  class=\"mat-elevation-z8\"\n  *ngIf=\"standings.length > 0\"\n>\n  <!-- Rank Column -->\n  <ng-container matColumnDef=\"Rank\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let i = index\" [ngSwitch]=\"i\">\n      <div *ngSwitchCase=\"0\" class=\"champion\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"1\" class=\"champion\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"2\" class=\"champion\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"3\" class=\"champion\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"4\" class=\"europa\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"5\" class=\"europa-qualifier\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"15\" class=\"relegation\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"16\" class=\"relegation\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchCase=\"17\" class=\"relegation\">\n        {{ i + 1 }}\n      </div>\n      <div *ngSwitchDefault>\n        {{ i + 1 }}\n      </div>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"Name\">\n    <mat-header-cell *matHeaderCellDef class=\"align-left\"\n      >Club\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-left\"\n      >{{ element.Name }}\n    </mat-cell>\n  </ng-container>\n  <!-- Wins Column -->\n  <ng-container matColumnDef=\"Wins\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\"> W </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.Win }}\n    </mat-cell>\n  </ng-container>\n\n  <!-- Losses Column -->\n  <ng-container matColumnDef=\"Losses\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\"> L </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.Lost }}\n    </mat-cell>\n  </ng-container>\n\n  <!-- Draws Column -->\n  <ng-container matColumnDef=\"Draws\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\"> D </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.Draw }}\n    </mat-cell>\n  </ng-container>\n\n  <!-- Goals For Column -->\n  <ng-container matColumnDef=\"GoalsFor\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\">\n      GF\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.GoalsFor }}\n    </mat-cell>\n  </ng-container>\n\n  <!-- Goals Against Column -->\n  <ng-container matColumnDef=\"GoalsAgainst\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\">\n      GA\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.GoalsAgainst }}\n    </mat-cell>\n  </ng-container>\n\n  <!-- Goals Difference Column -->\n  <ng-container matColumnDef=\"GoalsDifference\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\">\n      GD\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.GoalsDifference }}\n    </mat-cell>\n  </ng-container>\n\n  <!-- Points Column -->\n  <ng-container matColumnDef=\"Points\">\n    <mat-header-cell *matHeaderCellDef class=\"align-right\">\n      Pts\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\" class=\"align-right\">\n      {{ element.Points }}\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n</mat-table>\n\n<p *ngIf=\"standings.length == 0\" class=\"mat-subheading-2 align-text\">\n  Nothing to see here...\n</p>\n\n<div>\n  <h4 class=\"mat-subheading-2 glossary-title\">Team Standing Color Code</h4>\n  <p class=\"champion mat-body-2\">\n    UEFA Champion League group stage\n  </p>\n  <p class=\"europa mat-body-2\">\n    Europa League group stage\n  </p>\n  <p class=\"europa-qualifier mat-body-2\">\n    Europa League qualifier\n  </p>\n  <p class=\"relegation mat-body-2\">\n    Relegation\n  </p>\n</div>\n<!-- TODO4: might consider adding expand and collapsible to table element -->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\n  margin: 2rem auto;\n  width: 60%;\n}\n\n@media screen and (max-width: 920px){\n  main{\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 720px){\n  main{\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgd2lkdGg6IDYwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpe1xuICBtYWlue1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuICBtYWlue1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _standings_table_standings_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./standings-table/standings-table.component */
    "./src/app/standings-table/standings-table.component.ts");
    /* harmony import */


    var _matches_table_matches_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./matches-table/matches-table.component */
    "./src/app/matches-table/matches-table.component.ts");
    /* harmony import */


    var _seasons_button_seasons_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./seasons-button/seasons-button.component */
    "./src/app/seasons-button/seasons-button.component.ts");
    /* harmony import */


    var _match_details_dialog_match_details_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./match-details-dialog/match-details-dialog.component */
    "./src/app/match-details-dialog/match-details-dialog.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _standings_table_standings_table_component__WEBPACK_IMPORTED_MODULE_11__["StandingsTableComponent"], _matches_table_matches_table_component__WEBPACK_IMPORTED_MODULE_12__["MatchesTableComponent"], _seasons_button_seasons_button_component__WEBPACK_IMPORTED_MODULE_13__["SeasonsButtonComponent"], _match_details_dialog_match_details_dialog_component__WEBPACK_IMPORTED_MODULE_14__["MatchDetailsDialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]],
      entryComponents: [_match_details_dialog_match_details_dialog_component__WEBPACK_IMPORTED_MODULE_14__["MatchDetailsDialogComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dashboard {\n  margin-bottom: 3em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n  /* justify-content: center; */\n  padding-left: 20%;\n}\n\n#futball {\n  -webkit-animation: roll 2s ease-out forwards alternate;\n          animation: roll 2s ease-out forwards alternate;\n}\n\n@-webkit-keyframes roll {\n  from {\n    -webkit-transform: translateX(500%) rotateZ(0deg);\n            transform: translateX(500%) rotateZ(0deg);\n  }\n\n  to {\n    -webkit-transform: translateX(0%) rotateZ(-720deg);\n            transform: translateX(0%) rotateZ(-720deg);\n  }\n  /* 80% {\n    transform: translateY(0%) rotateZ(-720deg);\n  }\n  85% {\n    transform: translateY(-45%) rotateZ(-720deg);\n  }\n  90% {\n    transform: translateY(-0%) rotateZ(-720deg);\n  }\n  95% {\n    transform: translateY(-25%) rotateZ(-720deg);\n  }\n  100% {\n    transform: translateY(0%) rotateZ(-720deg);\n  } */\n}\n\n@keyframes roll {\n  from {\n    -webkit-transform: translateX(500%) rotateZ(0deg);\n            transform: translateX(500%) rotateZ(0deg);\n  }\n\n  to {\n    -webkit-transform: translateX(0%) rotateZ(-720deg);\n            transform: translateX(0%) rotateZ(-720deg);\n  }\n  /* 80% {\n    transform: translateY(0%) rotateZ(-720deg);\n  }\n  85% {\n    transform: translateY(-45%) rotateZ(-720deg);\n  }\n  90% {\n    transform: translateY(-0%) rotateZ(-720deg);\n  }\n  95% {\n    transform: translateY(-25%) rotateZ(-720deg);\n  }\n  100% {\n    transform: translateY(0%) rotateZ(-720deg);\n  } */\n}\n\n@media screen and (max-width: 920px){\n  mat-toolbar {\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding-left: 0;\n  }\n}\n\n@media screen and (max-width: 720px){\n  /* mat-toolbar {\n    justify-content: center;\n    padding: 0;\n  } */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNEQUE4QztVQUE5Qyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRTtJQUNFLGlEQUF5QztZQUF6Qyx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxrREFBMEM7WUFBMUMsMENBQTBDO0VBQzVDO0VBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBY0c7QUFDTDs7QUF2QkE7RUFDRTtJQUNFLGlEQUF5QztZQUF6Qyx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxrREFBMEM7WUFBMUMsMENBQTBDO0VBQzVDO0VBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBY0c7QUFDTDs7QUFFQTtFQUNFO0lBQ0Usd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTs7O0tBR0c7QUFDTCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuXG4jZnV0YmFsbCB7XG4gIGFuaW1hdGlvbjogcm9sbCAycyBlYXNlLW91dCBmb3J3YXJkcyBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgcm9sbCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDAlKSByb3RhdGVaKDBkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgcm90YXRlWigtNzIwZGVnKTtcbiAgfVxuICAvKiA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWigtNzIwZGVnKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDUlKSByb3RhdGVaKC03MjBkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wJSkgcm90YXRlWigtNzIwZGVnKTtcbiAgfVxuICA5NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKSByb3RhdGVaKC03MjBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWigtNzIwZGVnKTtcbiAgfSAqL1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG4gIG1hdC10b29sYmFyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuICAvKiBtYXQtdG9vbGJhciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfSAqL1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.faFutbol = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFutbol"];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/match-details-dialog/match-details-dialog.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/match-details-dialog/match-details-dialog.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMatchDetailsDialogMatchDetailsDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scores {\n  background-color: white;\n  display: initial;\n  padding-left: 5px;\n  margin-right: 5px;\n  color: #d85353;\n}\n\nmat-grid-tile {\n  overflow: visible;\n}\n\n.info-content {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.title-content {\n  font-size: large;\n  margin-bottom: 5px;\n  border-style: solid;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n}\n\np {\n  margin-top: 0px;\n}\n\n.title-box {\n  background-color:#d85353;\n  /* padding: 5px 8em 5px 8em; */\n  text-align: center;\n  padding: 5px;\n  color: white;\n}\n\n.close-button {\n  float: right;\n  margin-top: 5em;\n}\n\n.last-tile {\n  margin-top: 25% !important;\n}\n\n@media screen and (max-width: 920px){\n  /* .title-box {\n    background-color:#d85353;\n    color: white;\n    padding: 5px;\n    text-align: center;\n  } */\n\n  .last-tile {\n    margin-top: 30% !important;\n  }\n}\n\n@media screen and (max-width: 720px){\n  /* .title-box {\n    background-color:#d85353;\n    padding: 5px 0 5px 0;\n    color: white;\n  } */\n\n  .last-tile {\n    margin-top: 50% !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gtZGV0YWlscy1kaWFsb2cvbWF0Y2gtZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFOzs7OztLQUtHOztFQUVIO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTs7OztLQUlHOztFQUVIO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXRjaC1kZXRhaWxzLWRpYWxvZy9tYXRjaC1kZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZDg1MzUzO1xufVxuXG5tYXQtZ3JpZC10aWxlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5pbmZvLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpdGxlLWNvbnRlbnQge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50aXRsZS1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNkODUzNTM7XG4gIC8qIHBhZGRpbmc6IDVweCA4ZW0gNXB4IDhlbTsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG4ubGFzdC10aWxlIHtcbiAgbWFyZ2luLXRvcDogMjUlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KXtcbiAgLyogLnRpdGxlLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDg1MzUzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9ICovXG5cbiAgLmxhc3QtdGlsZSB7XG4gICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuICAvKiAudGl0bGUtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkODUzNTM7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9ICovXG5cbiAgLmxhc3QtdGlsZSB7XG4gICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/match-details-dialog/match-details-dialog.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/match-details-dialog/match-details-dialog.component.ts ***!
    \************************************************************************/

  /*! exports provided: MatchDetailsDialogComponent */

  /***/
  function srcAppMatchDetailsDialogMatchDetailsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchDetailsDialogComponent", function () {
      return MatchDetailsDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MatchDetailsDialogComponent =
    /*#__PURE__*/
    function () {
      function MatchDetailsDialogComponent(dialogRef, match) {
        _classCallCheck(this, MatchDetailsDialogComponent);

        this.dialogRef = dialogRef;
        this.match = match;
      }

      _createClass(MatchDetailsDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClose",
        value: function onClose() {
          this.dialogRef.close();
        }
      }]);

      return MatchDetailsDialogComponent;
    }();

    MatchDetailsDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MatchDetailsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-match-details-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./match-details-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/match-details-dialog/match-details-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./match-details-dialog.component.css */
      "./src/app/match-details-dialog/match-details-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MatchDetailsDialogComponent);
    /***/
  },

  /***/
  "./src/app/matches-table/matches-table.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/matches-table/matches-table.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMatchesTableMatchesTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  width: 20%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.align-text {\n  text-align: center;\n}\n\nmat-card-content {\n  height: 50px;\n  width: 100%;\n  border-style: dashed;\n  border-bottom: none;\n  border-left: none;\n  border-right: none;\n  border-width: 2px;\n  border-color: lightgray;\n  margin-top: 0.5em;\n  padding-top: 1.5em;\n  font-size: medium;\n  text-align: center;\n}\n\nmat-card-header{\n  display: table-row;\n  font-weight: bold;\n  text-align: center;\n}\n\nmat-card-title {\n  font-size: 14px;\n}\n\n.date-detail {\n  margin: 2px auto;\n}\n\n.winner {\n  display: initial;\n  color: #d85353;\n}\n\n.match-cards {\n  margin-top: 1em;\n  margin-left: 0.5em;\n  width: 45%;\n  display: inline-table;\n}\n\n@media screen and (max-width: 1330px){\n  .match-cards {\n    width: 42%;\n    margin-left: 0.75em;\n  }\n  mat-card-header {\n    font-size: large;\n  }\n}\n\n@media screen and (max-width: 920px){\n  button {\n    width: 25%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .match-cards {\n    width: 42%;\n    margin-left: 0.5em;\n  }\n  mat-card-header {\n    font-size: medium;\n  }\n}\n\n@media screen and (max-width: 720px){\n  .match-cards {\n    width: 35%;\n    margin-left: 1em;\n  }\n  mat-card-header {\n    font-size: medium;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy10YWJsZS9tYXRjaGVzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixvQkFBYTtJQUFiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21hdGNoZXMtdGFibGUvbWF0Y2hlcy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hbGlnbi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1hdC1jYXJkLWhlYWRlcntcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kYXRlLWRldGFpbCB7XG4gIG1hcmdpbjogMnB4IGF1dG87XG59XG5cbi53aW5uZXIge1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBjb2xvcjogI2Q4NTM1Mztcbn1cblxuLm1hdGNoLWNhcmRzIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIHdpZHRoOiA0NSU7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMzMHB4KXtcbiAgLm1hdGNoLWNhcmRzIHtcbiAgICB3aWR0aDogNDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gIH1cbiAgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KXtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubWF0Y2gtY2FyZHMge1xuICAgIHdpZHRoOiA0MiU7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICB9XG4gIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuICAubWF0Y2gtY2FyZHMge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgfVxuICBtYXQtY2FyZC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/matches-table/matches-table.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/matches-table/matches-table.component.ts ***!
    \**********************************************************/

  /*! exports provided: MatchesTableComponent */

  /***/
  function srcAppMatchesTableMatchesTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchesTableComponent", function () {
      return MatchesTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_football_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/football.service */
    "./src/app/services/football.service.ts");
    /* harmony import */


    var _match_details_dialog_match_details_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../match-details-dialog/match-details-dialog.component */
    "./src/app/match-details-dialog/match-details-dialog.component.ts"); // Services


    var MatchesTableComponent =
    /*#__PURE__*/
    function () {
      function MatchesTableComponent(footballService, dialog) {
        _classCallCheck(this, MatchesTableComponent);

        this.footballService = footballService;
        this.dialog = dialog; // private inputSeason: string;

        this.matches = [];
        this.pagedMatches = []; // only has 9 matches to be displayed on each page

        this.pageIndex = 0; // pageIndex by default is 0

        this.pageSize = 9;
        this.seasons = [];
      }

      _createClass(MatchesTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllSeasons();
        } // Get all matches in a given season

      }, {
        key: "getMatches",
        value: function getMatches(season) {
          var _this = this;

          this.footballService.getMatchesTable('?Season=' + String(season)).subscribe(function (res) {
            // console.log(res);
            _this.matches = Object(res).data; // get matches

            _this.length = Object(res).count; // get number of matches
            // set pageIndex to current pageIndex that user is on

            _this.OnPageChange({
              pageIndex: _this.pageIndex,
              pageSize: _this.pageSize,
              length: _this.length
            }); // console.log(this.pagedMatches);

          });
        } // Get all seasons

      }, {
        key: "getAllSeasons",
        value: function getAllSeasons() {
          var _this2 = this;

          this.footballService.getSeasons().subscribe(function (res) {
            _this2.seasons = _toConsumableArray(Object(res).data); // console.log(this.seasons);

            _this2.getMatches(_this2.seasons[2]);
          }); // console.log(this.seasons);
        } // Open a match dialog/modal
        // that has match's info in it.

      }, {
        key: "openDialog",
        value: function openDialog(match) {
          console.log(match);
          this.dialog.open(_match_details_dialog_match_details_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MatchDetailsDialogComponent"], {
            data: match
          });
        } // Pagination

      }, {
        key: "OnPageChange",
        value: function OnPageChange(event) {
          // console.log(event);
          // set pageIndex to current pageIndex that user is on
          this.pageIndex = event.pageIndex; // console.log(this.pageIndex);

          var startIndex = event.pageIndex * event.pageSize;
          var endIndex = startIndex + event.pageSize;

          if (endIndex > this.length) {
            endIndex = this.length;
          } // console.log(startIndex, endIndex);


          this.pagedMatches = this.matches.slice(startIndex, endIndex); // console.log(this.pagedMatches);
        }
      }]);

      return MatchesTableComponent;
    }();

    MatchesTableComponent.ctorParameters = function () {
      return [{
        type: _services_football_service__WEBPACK_IMPORTED_MODULE_3__["FootballService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    MatchesTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-matches-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matches-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/matches-table/matches-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./matches-table.component.css */
      "./src/app/matches-table/matches-table.component.css")).default]
    })], MatchesTableComponent);
    /***/
  },

  /***/
  "./src/app/seasons-button/seasons-button.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/seasons-button/seasons-button.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeasonsButtonSeasonsButtonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  width: 20%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n@media screen and (max-width: 920px){\n  button {\n    width: 25%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n@media screen and (max-width: 720px){\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vhc29ucy1idXR0b24vc2Vhc29ucy1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixvQkFBYTtJQUFiLGFBQWE7RUFDZjtBQUNGOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvc2Vhc29ucy1idXR0b24vc2Vhc29ucy1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHdpZHRoOiAyMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/seasons-button/seasons-button.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/seasons-button/seasons-button.component.ts ***!
    \************************************************************/

  /*! exports provided: SeasonsButtonComponent */

  /***/
  function srcAppSeasonsButtonSeasonsButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeasonsButtonComponent", function () {
      return SeasonsButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SeasonsButtonComponent =
    /*#__PURE__*/
    function () {
      function SeasonsButtonComponent() {
        _classCallCheck(this, SeasonsButtonComponent);

        this.inputSeason = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.seasons = [0, 0, 0];
      }

      _createClass(SeasonsButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // set season's team standings according to user input

      }, {
        key: "setSeason",
        value: function setSeason(season) {
          this.displayingSeason = season;
          this.inputSeason.emit(season);
        }
      }]);

      return SeasonsButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SeasonsButtonComponent.prototype, "inputSeason", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeasonsButtonComponent.prototype, "seasons", void 0);
    SeasonsButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seasons-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seasons-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seasons-button/seasons-button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seasons-button.component.css */
      "./src/app/seasons-button/seasons-button.component.css")).default]
    })], SeasonsButtonComponent);
    /***/
  },

  /***/
  "./src/app/services/football.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/football.service.ts ***!
    \**********************************************/

  /*! exports provided: FootballService */

  /***/
  function srcAppServicesFootballServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FootballService", function () {
      return FootballService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FootballService =
    /*#__PURE__*/
    function () {
      function FootballService(http) {
        _classCallCheck(this, FootballService);

        this.http = http; // private footballUrl = 'http://localhost:5000/api/v1/'; // to run server locally

        this.footballUrl = 'api/v1/'; // to run server on heroku

        console.log('Football service initialized...');
      }

      _createClass(FootballService, [{
        key: "getStandingsTable",
        value: function getStandingsTable(season) {
          // console.log(this.http.get(this.footballUrl + 'standings').pipe(tap(_ => console.log('standings table fetched...'))));
          return this.http.get(this.footballUrl + 'standings/' + season).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log('standings table fetched...');
          }));
        }
      }, {
        key: "getMatchesTable",
        value: function getMatchesTable(season) {
          return this.http.get(this.footballUrl + 'matches/' + season).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log('matches table fetched...');
          }));
        }
      }, {
        key: "getSeasons",
        value: function getSeasons() {
          return this.http.get(this.footballUrl + 'standings/seasons').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log('all seasons fetched...');
          }));
        }
      }]);

      return FootballService;
    }();

    FootballService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FootballService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FootballService);
    /***/
  },

  /***/
  "./src/app/standings-table/standings-table.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/standings-table/standings-table.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStandingsTableStandingsTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".align-right{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-left: -25%;\n}\n\n.align-left{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-left: -25%;\n}\n\n.align-text {\n  text-align: center;\n}\n\nmat-header-cell{\n  font-weight: 900;\n}\n\nmat-menu {\n  padding: 1rem auto;\n}\n\nmat-table{\n  box-shadow: none;\n}\n\n.champion{\n  background-color: cornflowerblue;\n  color: white;\n  padding: 0px 5px 0px 5px;\n  margin-left: -5px;\n}\n\n.europa{\n  background-color: lightsalmon;\n  color: white;\n  padding: 0px 5px 0px 5px;\n  margin-left: -5px;\n}\n\n.europa-qualifier {\n  background-color: rgb(125, 218, 125);\n  color: white;\n  padding: 0px 5px 0px 5px;\n  margin-left: -5px;\n}\n\n.relegation{\n  background-color: rgb(236, 72, 72);\n  color: white;\n  padding: 0px 5px 0px 5px;\n  margin-left: -5px;\n}\n\nbutton {\n  width: 20%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.glossary-title{\n  margin-top: 1em;\n  margin-bottom: -0.5em;\n}\n\n.glossary{\n  padding-left: 1em;\n  padding-right: 1em;\n  text-align: center;\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 920px){\n  button {\n    width: 25%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n@media screen and (max-width: 720px){\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhbmRpbmdzLXRhYmxlL3N0YW5kaW5ncy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsb0JBQWE7SUFBYixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3N0YW5kaW5ncy10YWJsZS9zdGFuZGluZ3MtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1yaWdodHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IC0yNSU7XG59XG5cbi5hbGlnbi1sZWZ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMjUlO1xufVxuXG4uYWxpZ24tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWhlYWRlci1jZWxse1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5tYXQtbWVudSB7XG4gIHBhZGRpbmc6IDFyZW0gYXV0bztcbn1cblxubWF0LXRhYmxle1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2hhbXBpb257XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi5ldXJvcGF7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi5ldXJvcGEtcXVhbGlmaWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMjE4LCAxMjUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG4ucmVsZWdhdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgNzIsIDcyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdsb3NzYXJ5LXRpdGxle1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcbn1cblxuLmdsb3NzYXJ5e1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KXtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuXG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/standings-table/standings-table.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/standings-table/standings-table.component.ts ***!
    \**************************************************************/

  /*! exports provided: StandingsTableComponent */

  /***/
  function srcAppStandingsTableStandingsTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandingsTableComponent", function () {
      return StandingsTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_football_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/football.service */
    "./src/app/services/football.service.ts");

    var StandingsTableComponent =
    /*#__PURE__*/
    function () {
      function StandingsTableComponent(footballService) {
        _classCallCheck(this, StandingsTableComponent);

        this.footballService = footballService;
        this.standings = [];
        this.seasons = [];
        this.displayedColumns = ['Rank', 'Name', 'Wins', 'Losses', 'Draws', 'GoalsFor', 'GoalsAgainst', 'GoalsDifference', 'Points'];
      }

      _createClass(StandingsTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllSeasons();
        } // Get team standings from user input season
        // or by default, the latest season.

      }, {
        key: "getStandings",
        value: function getStandings(season) {
          var _this3 = this;

          this.footballService.getStandingsTable('?Season=' + String(season)).subscribe(function (res) {
            // console.log(Object(res).data);
            _this3.standings = Object(res).data;
            _this3.length = Object(res).count; // this.standings = [];
          });
        } // Get all seasons available in database.

      }, {
        key: "getAllSeasons",
        value: function getAllSeasons() {
          var _this4 = this;

          this.footballService.getSeasons().subscribe(function (res) {
            _this4.seasons = _toConsumableArray(Object(res).data); // console.log(this.seasons);
            // By default, latest season is set to get team standings

            _this4.getStandings(_this4.seasons[2]);
          }); // console.log(this.seasons);
        }
      }]);

      return StandingsTableComponent;
    }();

    StandingsTableComponent.ctorParameters = function () {
      return [{
        type: _services_football_service__WEBPACK_IMPORTED_MODULE_2__["FootballService"]
      }];
    };

    StandingsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-standings-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./standings-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/standings-table/standings-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./standings-table.component.css */
      "./src/app/standings-table/standings-table.component.css")).default]
    })], StandingsTableComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/khoanguyen/Downloads/School/code/Projects/german_football/german-football-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map