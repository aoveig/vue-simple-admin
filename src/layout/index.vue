<template>
  <div class="app-layout flex">
    <div class="app-layout_aside"></div>
    <div class="app-layout_container flex-1">
      <div class="app-layout_header"></div>
      <div class="app-layout_main"></div>
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
    box-shadow: 1px 0px 1px #eee;
  }

  .app-layout_container {
    width: 0px;
    height: 100%;
    overflow: auto;

    .app-layout_header {
      width: 100%;
      height: 50px;
      box-shadow: 0px 1px 1px #eee;
      position: sticky;
      top: 0;
      background: rgba($color: #fff, $alpha: 0.6);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }

    .app-layout_main {
      width: 100%;
      min-height: calc(100% - 50px);
    }
  }
}
</style>
