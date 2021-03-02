<template>
  <router-view />

  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">Home</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">Search</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="user-o">Mine</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
