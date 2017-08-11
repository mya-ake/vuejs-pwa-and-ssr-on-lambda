<template>
  <div>
    <div>
      <span>insert from Vue.js.</span>
    </div>
    <div>
      <span class="data-text">{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: 'insert from Vue.js data.',
    };
  },
}
</script>

<style lang="scss" scoped>

$c-vue: #42b983;

.data-text {
  color: $c-vue;
}

</style>
