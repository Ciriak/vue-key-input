var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("Interfaces/Accelerators", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Interfaces/KeyInputValue", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("index", ["vue", "vue-class-component"], function (exports_3, context_3) {
    "use strict";
    var vue_1, vue_class_component_1, KeyInput;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            }
        ],
        execute: function () {
            KeyInput = (function (_super) {
                __extends(KeyInput, _super);
                function KeyInput() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.value = {
                        accelerators: {
                            command: false,
                            control: false,
                            alt: false,
                            option: false,
                            altGr: false,
                            shift: false,
                            super: false
                        },
                        keys: []
                    };
                    _this.listening = false;
                    _this.modified = false;
                    return _this;
                }
                Object.defineProperty(KeyInput.prototype, "computedString", {
                    get: function () {
                        var computedString = "";
                        for (var acceleratorName in this.value.accelerators) {
                            if (this.value.accelerators.hasOwnProperty(acceleratorName)) {
                                var accelerator = this.value.accelerators[acceleratorName];
                                if (accelerator) {
                                    computedString += acceleratorName[0].toUpperCase() + acceleratorName.substring(1);
                                    computedString += "+";
                                }
                            }
                        }
                        for (var keyIndex = 0; keyIndex < this.value.keys.length; keyIndex++) {
                            var key = this.value.keys[keyIndex];
                            computedString += key.toUpperCase();
                        }
                        return computedString;
                    },
                    enumerable: true,
                    configurable: true
                });
                KeyInput = __decorate([
                    vue_class_component_1.default({
                        template: '<div>LOADED</div>'
                    })
                ], KeyInput);
                return KeyInput;
            }(vue_1.default));
            exports_3("KeyInput", KeyInput);
        }
    };
});
