<template>
  <header class="header mdc-toolbar mdc-toolbar--fixed">
    <div class="mdc-toolbar__row">
      <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <router-link to="/">
          <h1 class="mdc-toolbar__title">Vue.js Memos</h1>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
}
</style>

