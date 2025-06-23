<template>
    <NavbarComponent/>
    <div>
        <!-- <Tes1Component/> -->
        <Test2Component/>
        <hr>
        Get Msg From Children: {{ getMsg }}
        <br>
        <input v-model="msg" placeholder="please enter.">
        <button @click="sendToChildren">Send To Children</button>
        <Test3Component :sendToChil="sendMsg" @sendToMother="getMsgFromChildren" />
    </div>
</template>

<script lang="ts" setup>
// import Tes1Component from './module/components/Tes/Tes1.component.vue';
import { ref } from 'vue';
import Test2Component from './module/components/Test/Test2.component.vue';
import Test3Component from './module/components/Test/Test3.component.vue';

const msg = ref('');
const sendMsg = ref('');
const getMsg = ref('');

const sendToChildren = () => {
    sendMsg.value = msg.value;
}

const getMsgFromChildren = (e: string) => {
    getMsg.value = e;
}
    
</script>

<style lang="scss" scoped>
  
</style>