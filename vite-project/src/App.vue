
<script setup lang="ts">
import { useRouter } from 'vue-router'
import HelloWorldVue from './components/HelloWorld.vue';
const router = useRouter();
let enterPage1 = () => {
  router.push({
    path: '/page1'
  })
}
let enterPage2 = () => {
  router.push({
    path: '/page2'
  })
}
let logTest = (par:Array<any>) => {
  console.log(par);
  
}
</script>

<template>
  <div @click="enterPage1">进入页面1</div>
  <div @click="enterPage2">进入页面2</div>
  <router-view v-slot="{ Component }">
    <transition name="showRouter" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <HelloWorldVue msg="123" @test="logTest"></HelloWorldVue>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.showRouter-enter-active,
.showRouter-leave-active {
  transition: 0.5s linear;
}

.showRouter-enter,
.showRouter-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.showRouter-enter-to,
.showRouter-leave {
  transform: translateX(0px);
  opacity: 1;
}
</style>
