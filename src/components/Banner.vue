<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("Banner onMounted");
});
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 360px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
