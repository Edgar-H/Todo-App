<template>
  <div class="app">
    <h1>TODO</h1>
    <CreateTask @get-task="getTask" />
    <TaskList :tasks="tasks" @updateTask="updateTask" @deletTask="deletTask" />
  </div>
</template>

<script setup>
import CreateTask from './components/CreateTask.vue';
import TaskList from './components/TaskList.vue';

import { onMounted, ref } from 'vue';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from '@firebase/firestore';
import { db } from './utils/firebase.config';

const tasks = ref([]);

const getTask = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todo'));
    const data = querySnapshot.docs.map((doc) => doc.data());
    if (data.length > 0) {
      return (tasks.value = data);
    }
    tasks.value = [];
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  console.clear();
  getTask();
});

const updateTask = async (task) => {
  const taskRef = doc(db, 'todo', `${task.id}`);
  try {
    await updateDoc(taskRef, { done: !task.done });
    console.log('update sucess');
    getTask();
  } catch (error) {
    console.log('update error', error);
  }
};

const deletTask = async (id) => {
  const taskRef = doc(db, 'todo', `${id}`);
  try {
    await deleteDoc(taskRef);
    getTask();
  } catch (error) {
    console.log('error al elimnar');
    console.log(error);
  }
};
</script>
