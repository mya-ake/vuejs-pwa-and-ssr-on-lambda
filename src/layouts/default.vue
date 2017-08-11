<template>
  <div class="container">

    <global-header></global-header>

    <main class="contents">
      <div>
        <span>insert from Vue.js.</span>
      </div>
      <div>
        <span class="data-text">{{text}}</span>
      </div>

      <aside>
        <button class="mdc-fab material-icons app-fab--absolute" aria-label="Add" data-mdc-auto-init="MDCRipple">
          <span class="mdc-fab__icon">
            add
          </span>
        </button>
      </aside>

    </main>

    <global-footer class="footer"></global-footer>

  </div>
</template>

<script>
import globalHeader from '~/parts/global-header.vue';
import globalFooter from '~/parts/global-footer.vue';

export default {
  data() {
    return {
      text: 'insert from Vue.js data.',
    };
  },
  components: {
    globalHeader,
    globalFooter,
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
