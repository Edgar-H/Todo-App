<template>
  <form @submit.prevent="createTask">
    <input v-model="task" placeholder="Create a new todo..." />
    <button type="submit">Create</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase.config.js';

const emit = defineEmits(['getTask']);

const task = ref('');

const createTask = async () => {
  console.log('createTask');
  try {
    const idTask = new Date().getTime();
    console.log(idTask);
    await setDoc(doc(db, 'todo', `${idTask}`), {
      id: idTask,
      task: task.value,
      done: false,
    });

    emit('getTask');
  } catch (error) {
    console.log('error', error);
  }
};
</script>
