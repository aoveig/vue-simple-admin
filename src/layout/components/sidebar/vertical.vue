<script setup lang="ts"></script>

<template>
  <div class="sidebar-vertical wh-full">
    <p class="sidebar-vertical_logo flex-c h-[50px]">
      vue-simple-admin
    </p>
    <div class="sidebar-vertical_menu p-[5px]">
      <div class="sidebar-vertical_collapsed flex-c">
        <SimpleIcon icon="ep:arrow-left" />
      </div>
      <el-scrollbar>
        <el-menu default-active="2">
          <el-menu-item v-for="item in 20" index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-vertical {
  background-color: #fff;

  .sidebar-vertical_logo {
    color: rgb(101, 224, 183);
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
  }

  .sidebar-vertical_menu {
    height: calc(100% - 50px);
    position: relative;

    .sidebar-vertical_collapsed {
      position: absolute;
      right: -12px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      z-index: 998;
    }
  }
}
</style>
