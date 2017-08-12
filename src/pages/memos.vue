<<template>
  <section>
    <h2 class="screen-reader-text">メモのリスト</h2>

    <nav class="mdc-list">
      <router-link v-for="(memo, index) in memos" v-bind:to="'/memos/' + index" v-bind:key="'memo-' + index" class="mdc-list-item">
        <span v-text="memo.title"></span>
      </router-link>
    </nav>
  </section>
</template>

<script>
import Memo from '~/models/Memo';

export default {
  data() {
    return {
      memos: [],
    };
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

</style>
