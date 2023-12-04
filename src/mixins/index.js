import Vue from "vue";

Vue.mixin({
    computed:{
        isMobile(){
            return this.$vuetify.breakpoint.mdAndDown && (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.smAndDown)
        },
    }
})