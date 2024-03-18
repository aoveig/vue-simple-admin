<script setup lang="ts">
import appContent from "./components/appContent.vue";
import vertical from "./components/sidebar/vertical.vue";
</script>

<template>
  <div class="app-layout flex">
    <div class="app-layout_aside">
      <vertical />
    </div>
    <div class="app-layout_container bg-[#f3f4f5] flex-1">
      <div class="app-layout_header frosted-glass"></div>
      <div class="app-layout_main">
        <appContent />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  width: 100%;
  height: 100%;

  .app-layout_aside {
    width: 210px;
    height: 100%;
    border-right: 1px solid #eee;
  }

  .app-layout_container {
    width: 0px;
    height: 100%;
    overflow: auto;

    .app-layout_header {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #eee;
      position: sticky;
      top: 0;
    }

    .app-layout_main {
      width: 100%;
      min-height: calc(100% - 50px);
    }
  }
}
</style>
