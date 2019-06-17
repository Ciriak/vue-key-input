import Vue from 'vue'

export default Vue.component('vue-key-input', {

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
            /**
             * True if we are listening for use input
             */
            listening: false,
            /**
             * True if the entry has been modified during the listening
             */
            modified: false
        }
    },
    computed: {

        /**
         * Generate the computed string for the key input
         */
        keysString() {
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
    },
    template: function (createElement) {
        return createElement(
            'h' + this.level, // nom de balise
            this.$slots.default // tableau des enfants
        )
    }
});