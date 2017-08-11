<template>
  <default-layout></default-layout>
</template>
<script>
import defaultLayout from '~/layouts/default.vue';
import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple';

export default {
  mounted () {
    MDCRipple.attachTo(document.querySelector('.mdc-fab'));
  },
  components: {
    defaultLayout,
  },
}
</script>

<style lang="scss">

$c-vue: #42b983;

.data-text {
  color: $c-vue;
}

</style>
