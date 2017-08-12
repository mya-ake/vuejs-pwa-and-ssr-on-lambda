<template>
  <section>
    <h2>メモの編集画面</h2>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('control/setShowAddButton', false);
  },
  destroyed() {
    this.$store.dispatch('control/setShowAddButton', true);
  },
}
</script>
