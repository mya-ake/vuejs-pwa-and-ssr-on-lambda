<template>
  <section>
    <h2 class="screen-reader-text">メモの編集画面</h2>
    <form class="form" v-on:submit.prevent="save">
      <div class="mdc-textfield  mdc-textfield--fullwidth">
        <input v-model="memo.title" class="mdc-textfield__input" placeholder="タイトル" type="text" aria-label="タイトル">
      </div>
      <div class="mdc-textfield mdc-textfield--multiline mdc-textfield--fullwidth">
        <textarea v-model="memo.body" class="mdc-textfield__input" placeholder="メモ" rows="10" cols="40" aria-label="メモ"></textarea>
      </div>
      <button type="submit" class="button-save mdc-button">保存</button>
    </form>
  </section>
</template>

<script>
import { MDCTextfield, MDCTextfieldFoundation } from '@material/textfield';
import Memo from '~/models/Memo';

export default {
  data() {
    const memo = new Memo({
      title: '',
      body: '',
    });

    return {
      memo,
    };
  },
  created() {
    this.$store.dispatch('control/setShowAddButton', false);
  },
  destroyed() {
    this.$store.dispatch('control/setShowAddButton', true);
  },
  methods: {
    save () {
      console.log(this.memo);
    }
  },
}
</script>

<style lang="scss" scoped>
@import './../scss/_variables.scss';

.form {
  margin-top: 12px;
  padding: 0 12px;
}

.button-save {
  position: fixed;
  top: 0.7rem;
  right: 0.4rem;
  z-index: 5;
  color: $c-toolbar-text;
  font-weight: bold;
  font-size: 1.15rem;
}

</style>
