<template>
  <default-layout></default-layout>
</template>
<script>
import defaultLayout from '~/layouts/default.vue';
import {MDCRipple} from '@material/ripple';

export default {
  created() {
    this.$store.dispatch('memo/init');
  },
  mounted () {
    MDCRipple.attachTo(document.querySelector('.mdc-fab'));
  },
  components: {
    defaultLayout,
  },
}
</script>

<style lang="scss">
@import './scss/_variables.scss';

body {
  backface-visibility: hidden;
  position: relative;
  font-feature-settings: "pkna" 1;
  letter-spacing: 0.04em;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: unset;
  @media screen and (max-width: $bp-sp) {
    pointer-events: none;
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

a {
  color: $c-vue;
  &:hover {
    color: $c-vue-dark;
  }
}

input,
textarea,
a,
button,
select
{
  pointer-events: auto;
}
button {
  cursor: pointer;
  user-select: none;
}

.screen-reader-text {
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
}

</style>
