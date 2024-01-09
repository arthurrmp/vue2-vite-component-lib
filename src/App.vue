<script setup lang="ts">
import { ref } from "vue";
import { FirstComponent, SecondComponent } from ".";

const myValue = ref(0);
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <FirstComponent msg="test" />
      <SecondComponent v-model="myValue" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
}
</style>
