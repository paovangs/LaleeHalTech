<template>
    <div>
        <h1>Children Create User</h1>
        <p>Show Data format
            Mother:
            {{ props.sendToChil }}
        </p>
        <input v-model="sendNumder"palceholder="Enter ypur Number"/>
        <button @click="sendNumberToMother">Send Number To Mother</button>
    </div>

    <hr>
    <div class="compang">
        <h1>Declaring Reactive state {{ count }}</h1>
        <button @click="increment">(+)increment</button>
        <button @click="decrement">(-)decrement</button>
    </div>
   
</template>

<script lang="ts"setup>
// import { ref } from "vue";
const props = defineProps(['sendToChil'])
const emit = defineEmits(['sendToMother'])
const sendNumder = ref(0); 

const sendNumberToMother= () => {
    emit('sendToMother', sendNumder.value);
}

//  Addyour component logic here
import { reactive } from "vue";
// import {computed } from "vue"
import { ref } from "vue"
const count = ref(1);
const increment = () => {
    count.value++;
    
};
const decrement = () => {
    count.value--;
};
const author = reactive({
  name: 'John Doe',
  books: [
  'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})







</script>

<style lang="scss"scoped>
</style>

