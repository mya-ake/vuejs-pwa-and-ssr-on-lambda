<template>
  <default-layout></default-layout>
</template>
<script>
import defaultLayout from '~/layouts/default.vue';
import {MDCRipple} from '@material/ripple';

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

body {
  font-size: 1.6rem;
  line-height: 1.6;
  backface-visibility: hidden;
  position: relative;
  font-feature-settings: "pkna" 1;
  letter-spacing: 0.04em;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: unset;
  @media screen and (max-width: 480px) {
    pointer-events: none;
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
