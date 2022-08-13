<template>
  <li @click.stop="$emit('updateTask', task)">
    {{ task.task }}
    <pre>{{ task.done }}</pre>
    <button @click.stop="$emit('deletTask', task.id)">Delete</button>
  </li>
</template>

<script setup>
defineProps(['task']);
defineEmits(['updateTask', 'deletTask']);
</script>
