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

<style scoped>
  .data-text {
    color: #42b983;
  }
</style>
