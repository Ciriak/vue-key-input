import Vue from 'vue'
import Component from 'vue-class-component'
import IKeyInputValue from './Interfaces/KeyInputValue';

@Component({
    // Toutes les options de composant sont autorisées ici.
    template: '<button @click="onClick">Click!</button>'
})
export default class KeyInput extends Vue {
    value: IKeyInputValue = {
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
    }
    get computedString(): string {
        let computedString = "";
        // Loop through each accelerator
        for (const acceleratorName in this.value.accelerators) {
            if (this.value.accelerators.hasOwnProperty(acceleratorName)) {
                const accelerator = this.value.accelerators[acceleratorName];
                // if the accelerator is enabled
                if (accelerator) {
                    // Convert accelerator
                    computedString += acceleratorName[0].toUpperCase() + acceleratorName.substring(1);
                    // add a separator
                    computedString += "+";
                }
            }
        }

        // loop through each non-accelerator key
        for (let keyIndex = 0; keyIndex < this.value.keys.length; keyIndex++) {
            const key = this.value.keys[keyIndex];
            computedString += key.toUpperCase();
        }
        return computedString;
    }
}