var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import Component from 'vue-class-component';
let KeyInput = class KeyInput extends Vue {
    constructor() {
        super(...arguments);
        this.value = {
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
        this.listening = false;
        this.modified = false;
    }
    get computedString() {
        let computedString = "";
        for (const acceleratorName in this.value.accelerators) {
            if (this.value.accelerators.hasOwnProperty(acceleratorName)) {
                const accelerator = this.value.accelerators[acceleratorName];
                if (accelerator) {
                    computedString += acceleratorName[0].toUpperCase() + acceleratorName.substring(1);
                    computedString += "+";
                }
            }
        }
        for (let keyIndex = 0; keyIndex < this.value.keys.length; keyIndex++) {
            const key = this.value.keys[keyIndex];
            computedString += key.toUpperCase();
        }
        return computedString;
    }
};
KeyInput = __decorate([
    Component({
        template: '<div>LOADED</div>'
    })
], KeyInput);
export { KeyInput };
