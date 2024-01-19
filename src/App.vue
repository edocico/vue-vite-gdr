<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  }
}
</script>

<template>

<RouterView>  </RouterView>
<AppHeader> </AppHeader>

</template>

<style lang="scss">
@use "./style/general.scss";
</style>
