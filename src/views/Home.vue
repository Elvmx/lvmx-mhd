<template>
  <div class="home">
    <van-nav-bar>
      <template #title>
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </template>
    </van-nav-bar>

    <banner />

    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Banner from "@/components/Banner.vue";

onMounted(() => {
  console.log("Home onMounted");
});
</script>

<style lang="scss">
.home {
  .logo {
    display: block;
    width: 186px;
    height: 56px;
  }
}
</style>
