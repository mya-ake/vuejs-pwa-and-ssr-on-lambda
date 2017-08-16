<template>
  <section>
    <h2 class="screen-reader-text">メモのリスト</h2>

    <nav class="mdc-list">
      <router-link v-for="memo in memos" v-bind:to="'/memos/' + memo.id" v-bind:key="'memo-' + memo.id" class="mdc-list-item">
        <span v-text="memo.title"></span>
      </router-link>
    </nav>

    <div v-if="memos.length === 0" class="introduction">
      <span>まずは<router-link to="/memos/new">メモを作成</router-link>しよう！</span>
    </div>

  </section>
</template>

<script>
import Memo from '~/models/Memo';

export default {
  created() {
    this.$store.dispatch('memo/init');
  },
  computed: {
    memos () {
      const memos = this.$store.getters['memo/memos'];
      return 'length' in memos ? memos : [];
    },
  },
}
</script>

<style lang="scss" scoped>

.introduction {
  margin-top: 24px;
  text-align: center;
}

</style>
