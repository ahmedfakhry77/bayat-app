<template>
  <div>
    <navbar />

    <router-view />

    <app-footer />
  </div>
</template>


<script>
import Navbar from './views/partials/Navbar';
import AppFooter from './views/partials/Footer';

export default {
  name: 'app',
  components: { Navbar, AppFooter }
}
</script>

<style lang="scss">
@import './assets/style/style.scss';
</style>