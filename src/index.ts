import Vue from 'vue'

const Component = Vue.extend({
    // déduction de type activée
    name: "keyInput",
    data() {
        return {
            value: {
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
            },
            listening: false,
            modified: false,
            history: []
        }
    },
    computed: {
        inputString: () => {
            let computedString = "";
            // Loop through each accelerator
            for (const acceleratorName of this.accelerators) {
                // if the accelerator is enabled
                if (this.accelerators[acceleratorName]) {
                    // Convert accelerator
                    computedString += acceleratorName[0].toUpperCase() + acceleratorName.substring(1);
                    // add a separator
                    computedString += "+";
                }
            }

            // loop through each non-accelerator key
            for (let keyIndex = 0; keyIndex < this.keys.length; keyIndex++) {
                const key = this.keys[keyIndex];
                computedString += key.toUpperCase();
            }
            return computedString;
        }
    },
});

export default Component;