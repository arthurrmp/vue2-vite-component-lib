<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <p>I'm the first component.</p>
    <p>{{ msg }}</p>
  </div>
</template>
