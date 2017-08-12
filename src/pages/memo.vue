<template>
  <section>
    <h2 class="screen-reader-text">メモの編集画面</h2>

    <form class="form" v-on:submit.prevent="save">
      <div class="mdc-textfield  mdc-textfield--fullwidth">
        <input v-model="memo.title" class="mdc-textfield__input" placeholder="タイトル" type="text" aria-label="タイトル" required>
      </div>
      <div class="mdc-textfield mdc-textfield--multiline mdc-textfield--fullwidth">
        <textarea v-model="memo.body" class="mdc-textfield__input" placeholder="メモ" rows="10" cols="40" aria-label="メモ"></textarea>
      </div>
      <button type="submit" class="button-save mdc-button">保存</button>
    </form>

    <div class="mdc-snackbar mdc-snackbar--align-start" aria-live="assertive" aria-atomic="true" aria-hidden="true">
      <div class="mdc-snackbar__text"></div>
      <div class="mdc-snackbar__action-wrapper">
        <button type="button" class="mdc-button mdc-snackbar__action-button"></button>
      </div>
    </div>

  </section>
</template>

<script>
import { MDCSnackbar } from '@material/snackbar';
import { MDCRipple } from '@material/ripple';
import Memo from '~/models/Memo';

export default {
  data() {
    const id = this.$route.params.id;
    const memo = isNaN(id) === true ? Memo.createNew() : this.$store.getters['memo/get'](id);

    return {
      memo,
      message: '',
      snackbar: null,
    };
  },
  created() {
    this.$store.dispatch('control/setShowAddButton', false);
  },
  mounted() {
    this.snackbar = MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));
    MDCRipple.attachTo(document.querySelector('.mdc-button'));
  },
  destroyed() {
    this.$store.dispatch('control/setShowAddButton', true);
  },
  methods: {
    save() {
      this.$store.dispatch('memo/save', this.memo)
        .then((memo) => {
          this.memo = memo;
        })
        .then(() => {
          this.$store.dispatch('memo/saveLocal');
        })
        .then(() => {
          this.snackbar.show({
            message: '保存しました',
          });
        });
    }
  },
}
</script>

<style lang="scss" scoped>
.form {
  margin-top: 12px;
  padding: 0 12px;
}

.button-save {
  position: fixed;
  top: 0.7rem;
  right: 0.4rem;
  z-index: 5;
  color: #fff;
  font-weight: bold;
  font-size: 1.15rem;
}
</style>
