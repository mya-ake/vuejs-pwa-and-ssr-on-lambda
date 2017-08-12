<template>
  <section class="container">

    <global-header></global-header>

    <main class="contents">
      <section>
        <h2 class="screen-reader-text">メモのリスト</h2>

        <ul class="mdc-list">
          <li v-for="(memo, index) in memos" v-bind:key="'memo-' + index" class="mdc-list-item" data-mdc-auto-init="MDCRipple">
            <span v-text="memo.title"></span>
          </li>
        </ul>
      </section>

      <aside>
        <button class="mdc-fab material-icons app-fab--absolute" aria-label="Add" data-mdc-auto-init="MDCRipple">
          <span class="mdc-fab__icon">
            add
          </span>
        </button>
      </aside>

    </main>

    <global-footer class="footer"></global-footer>

  </section>
</template>

<script>
import globalHeader from '~/parts/global-header.vue';
import globalFooter from '~/parts/global-footer.vue';

import Memo from '~/models/Memo';

export default {
  data () {
    return {
      memos: [],
    };
  },
  components: {
    globalHeader,
    globalFooter,
  },
  created () {
    this.memos.push(new Memo({
      title: 'test memo 1',
      body: 'ここにテキスト。',
    }));
    this.memos.push(new Memo({
      title: 'test memo 2',
      body: 'ここにテキスト。',
    }));
    this.memos.push(new Memo({
      title: 'test memo 3',
      body: 'ここにテキスト。',
    }));
  },
}
</script>

<style lang="scss" scoped>
$c-vue: #42b983;

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contents {
  margin-top: 56px;
}

.footer {
  margin-top: auto;
}

.app-fab--absolute {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
}

.data-text {
  color: $c-vue;
}
</style>
