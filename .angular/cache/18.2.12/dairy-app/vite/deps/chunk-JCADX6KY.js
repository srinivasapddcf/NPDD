import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-A2ARRWUI.js";

// node_modules/angular-datatables/src/angular-datatables.directive.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var DataTableDirective = (
  /** @class */
  function() {
    function DataTableDirective2(el, vcr, renderer) {
      this.el = el;
      this.vcr = vcr;
      this.renderer = renderer;
      this.dtOptions = {};
    }
    DataTableDirective2.prototype.ngOnInit = function() {
      var _this = this;
      if (this.dtTrigger) {
        this.dtTrigger.subscribe(function(options) {
          _this.displayTable(options);
        });
      } else {
        this.displayTable(null);
      }
    };
    DataTableDirective2.prototype.ngOnDestroy = function() {
      if (this.dtTrigger) {
        this.dtTrigger.unsubscribe();
      }
      if (this.dt) {
        this.dt.destroy(true);
      }
    };
    DataTableDirective2.prototype.displayTable = function(dtOptions) {
      var _this = this;
      if (dtOptions) {
        this.dtOptions = dtOptions;
      }
      this.dtInstance = new Promise(function(resolve, reject) {
        Promise.resolve(_this.dtOptions).then(function(resolvedDTOptions) {
          var isTableEmpty = Object.keys(resolvedDTOptions).length === 0 && $("tbody tr", _this.el.nativeElement).length === 0;
          if (isTableEmpty) {
            reject("Both the table and dtOptions cannot be empty");
            return;
          }
          setTimeout(function() {
            var options = {
              rowCallback: function(row, data, index) {
                if (resolvedDTOptions.columns) {
                  var columns = resolvedDTOptions.columns;
                  _this.applyNgPipeTransform(row, columns);
                  _this.applyNgRefTemplate(row, columns, data);
                }
                if (resolvedDTOptions.rowCallback) {
                  resolvedDTOptions.rowCallback(row, data, index);
                }
              }
            };
            options = Object.assign({}, resolvedDTOptions, options);
            _this.dt = $(_this.el.nativeElement).DataTable(options);
            resolve(_this.dt);
          });
        });
      });
    };
    DataTableDirective2.prototype.applyNgPipeTransform = function(row, columns) {
      var colsWithPipe = columns.filter(function(x) {
        return x.ngPipeInstance && !x.ngTemplateRef;
      });
      colsWithPipe.forEach(function(el) {
        var pipe = el.ngPipeInstance;
        var pipeArgs = el.ngPipeArgs || [];
        var i = columns.findIndex(function(e) {
          return e.data === el.data;
        });
        var rowFromCol = row.childNodes.item(i);
        var rowVal = $(rowFromCol).text();
        var rowValAfter = pipe.transform.apply(pipe, __spreadArray([rowVal], pipeArgs, false));
        $(rowFromCol).text(rowValAfter);
      });
    };
    DataTableDirective2.prototype.applyNgRefTemplate = function(row, columns, data) {
      var _this = this;
      var colsWithTemplate = columns.filter(function(x) {
        return x.ngTemplateRef && !x.ngPipeInstance;
      });
      colsWithTemplate.forEach(function(el) {
        var _a = el.ngTemplateRef, ref = _a.ref, context = _a.context;
        var i = columns.findIndex(function(e) {
          return e.data === el.data;
        });
        var cellFromIndex = row.childNodes.item(i);
        $(cellFromIndex).html("");
        var _context = Object.assign({}, context, context === null || context === void 0 ? void 0 : context.userData, {
          adtData: data
        });
        var instance = _this.vcr.createEmbeddedView(ref, _context);
        _this.renderer.appendChild(cellFromIndex, instance.rootNodes[0]);
      });
    };
    DataTableDirective2.ɵfac = function DataTableDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataTableDirective2)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2));
    };
    DataTableDirective2.ɵdir = ɵɵdefineDirective({
      type: DataTableDirective2,
      selectors: [["", "datatable", ""]],
      inputs: {
        dtOptions: "dtOptions",
        dtTrigger: "dtTrigger"
      }
    });
    return DataTableDirective2;
  }()
);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableDirective, [{
    type: Directive,
    args: [{
      selector: "[datatable]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ViewContainerRef
    }, {
      type: Renderer2
    }];
  }, {
    dtOptions: [{
      type: Input
    }],
    dtTrigger: [{
      type: Input
    }]
  });
})();

export {
  DataTableDirective
};
/*! Bundled license information:

angular-datatables/src/angular-datatables.directive.js:
  (**
   * @license
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
   *)
*/
//# sourceMappingURL=chunk-JCADX6KY.js.map
