<template>
  <section class="container">

    <global-header></global-header>

    <main class="contents">

      <router-view></router-view>

      <aside v-show="isShowAddButton">
        <router-link to="/memos/new" class="mdc-fab material-icons app-fab--absolute" aria-label="Add" data-mdc-auto-init="MDCRipple">
          <span class="mdc-fab__icon">
            add
          </span>
        </router-link>
      </aside>

    </main>

    <global-footer class="footer"></global-footer>

  </section>
</template>

<script>
import globalHeader from '~/parts/global-header.vue';
import globalFooter from '~/parts/global-footer.vue';

export default {
  components: {
    globalHeader,
    globalFooter,
  },
  computed: {
    isShowAddButton () {
      return this.$store.state.control.isShowAddButton;
    },
  },
}
</script>

<style lang="scss" scoped>
@import './../scss/_variables.scss';

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
  @media screen and (max-width: $bp-sp) {
    right: 1.4rem;
    bottom: 1.6rem;
  }
}

.mdc-fab {
  text-decoration: none;
}

</style>
