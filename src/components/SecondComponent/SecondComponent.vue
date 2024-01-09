<script setup lang="ts">
defineProps<{
  value: number;
}>();

const emit = defineEmits(["input"]);
</script>

<template>
  <div class="greetings">
    <p>I'm the second component.</p>
    <p>You clicked {{ value }} times.</p>
    <button @click="emit('input', value + 1)">Click me</button>
  </div>
</template>

<style scoped></style>
