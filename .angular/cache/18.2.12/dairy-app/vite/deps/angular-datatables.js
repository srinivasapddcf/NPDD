import {
  DataTableDirective
} from "./chunk-JCADX6KY.js";
import {
  CommonModule
} from "./chunk-EDG5TXTR.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-A2ARRWUI.js";
import "./chunk-JVMRPRMK.js";
import "./chunk-2RSK2634.js";
import "./chunk-UZ7B7W5V.js";
import "./chunk-S35DAJRX.js";

// node_modules/angular-datatables/src/angular-datatables.module.js
var DataTablesModule = (
  /** @class */
  function() {
    function DataTablesModule2() {
    }
    DataTablesModule2.forRoot = function() {
      return {
        ngModule: DataTablesModule2
      };
    };
    DataTablesModule2.ɵfac = function DataTablesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataTablesModule2)();
    };
    DataTablesModule2.ɵmod = ɵɵdefineNgModule({
      type: DataTablesModule2,
      declarations: [DataTableDirective],
      imports: [CommonModule],
      exports: [DataTableDirective]
    });
    DataTablesModule2.ɵinj = ɵɵdefineInjector({
      imports: [[CommonModule]]
    });
    return DataTablesModule2;
  }()
);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTablesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [DataTableDirective],
      exports: [DataTableDirective]
    }]
  }], null, null);
})();
export {
  DataTableDirective,
  DataTablesModule
};
/*! Bundled license information:

angular-datatables/src/angular-datatables.module.js:
  (**
   * @license
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
   *)

angular-datatables/index.js:
  (**
   * @license
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
   *)
*/
//# sourceMappingURL=angular-datatables.js.map
