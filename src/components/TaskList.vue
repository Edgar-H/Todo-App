<template>
  <ul v-if="tasks.length > 0">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @updateTask="(task) => $emit('updateTask', task)"
      @deletTask="(id) => $emit('deletTask', id)"
    />
  </ul>
  <div class="error" v-else>no hay tareas</div>
</template>

<script setup>
import Task from './Task.vue';
defineProps(['tasks', 'updateTask', 'deletTask']);
</script>
