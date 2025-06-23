<template>
    <div class="company">
        <h1>Declaring Reactive state {{ count }}</h1>
        <button @click="increment">(+)increment</button>
        <button @click="decrement">(-)decrement</button>
    </div>

    <hr>
    <div>
    <label for="score">ປ້ອນຄະແນນ (0-10):</label>
    <input type="number" v-model="score" min="0" max="10" />
    <p v-if="scoreText">{{ scoreText }}</p>
  </div>
  <div>

    <hr>
    <div>
       <button 
        @click="toggleText"
        :style="{ backgroundColor: text === 'edit' ? 'yellow' : 'green', color: 'black' }"
        >
        
      {{ text }}
    </button>
   
  </div>
  </div>

  <hr>
  <div>
    <input v-model="input1" placeholder="input1" />
    <input v-model="input2" placeholder="input2" />

    <button @click="addInputs">
      ຊີ້ເພື່ອບວກ input1 + input2
    </button>

    <p :style="{ color: total > 10 ? 'red' : 'black' }">
      ຜົນລວມ: {{ total }}
    </p>

  </div>

  <hr>
  <div>
    <div v-if="showInput">
      <input v-model="textOpen" placeholder="ປ້ອນຂໍ້ມູນ" />
      <button @click="toggleInput(false)">ປິດ</button>
    </div>

    <div v-else>
      <button @click="toggleInput(true)">ເປີດ</button>
    </div>
  </div>

  <hr>
  <h2>ຄຳນວນລາຄາລວມ</h2>
 <label>
    ລາຄາ:
    <input type="number" v-model.number="price" placeholder="ໃສ່ລາຄາ">
 </label>
  <br>
  <label>
    ຈຳນວນ:
    <input type="number" v-model.number="quantity" placeholder="ໃສ່ຈຳນວນ">
  </label>
 <br>
  <button @click="calculateTotal">ຄຳນວນ</button>

    <div class="result" v-if="totalPrice !== null">
      💰 ລາຄາລວມ: {{ totalPrice }} ກີບ
    </div>

    <hr>
  <div>
    <button class="red" @click="showMessage('ສີເດງ')">ສີເດງ</button>
    <button class="black" @click="showMessage('ສີດຳ')">ສີດຳ</button>
    <button class="green" @click="showMessage('ສີຂຽວ')">ສີຂຽວ</button>
    ​<br>
    <p>ທ່ານເລືອກປຸ່ມສີ
      <span class="message" :style="{ color: messageColor }">{{ message }}</span>
    </p>
  </div>

  <hr>
  <h2>ຄຳນວນສ່ວນຫຼຸດ</h2>
  <label>
    ລາຄາ (ກີບ):
    <input type="number" v-model="prices" placeholder="ໃສ່ລາຄາ">
  </label>
 <br>
  <label>
    ເປີເຊັນສ່ວນຫຼຸດ (%):
  <input type="number" v-model="discountPercent" placeholder="ໃສ່ % ສ່ວນຫຼຸດ">
  </label>
  <br>
  <button @click="calculateDiscount">ຄຳນວນ</button>
  <div class="result" v-if="discountAmount !== null">
    💸 ສ່ວນຫຼຸດ: {{ formatCurrency(discountAmount) }}<br>
    ✅ ລາຄາຫຼັງຫຼຸດ: {{ formatCurrency(finalPrice)}}
  </div>

</template>

<script lang="ts" setup>
//  Addyour component logic here
import { reactive } from "vue";
import { computed } from "vue";
import { ref }from "vue";
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

const score = ref(0)

const scoreText = computed(() => {
  if (score.value == 10) {
    return 'ດີຫຼາຍ'
  } else if (score.value == 9) {
    return 'ດີ'
  } else if (score.value == 8) {
    return 'ປານກາງ'
  } else if (score.value == 7) {
    return 'ພໍໃຊ້'
  } else if (score.value == 6) {
    return 'ອ່ອນ'
  } else if (score.value == 5) {
    return 'ຕົກ'
  } else {
    return 'ບໍ່ຜ່ານ'
  }
})
const text = ref('add')

function toggleText() {
  text.value = text.value === 'add' ? 'edit' : 'add'
 
}


const input1 = ref('0')
const input2 = ref('0')
const total = ref(0)

function addInputs() {
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    total.value = num1 + num2;
}


const showInput = ref(true)
const textOpen = ref('');
  function toggleInput(state: boolean) {
  showInput.value = state
}


const message = ref('');
const messageColor = ref('')

const showMessage = (color: string) => {
  message.value = `${color}`;

  if (color === 'ສີເດງ') {
    messageColor.value = 'red';
  } else if (color === 'ສີດຳ') {
    messageColor.value = 'black';
  } else if (color === 'ສີຂຽວ') {
    messageColor.value = 'green';
  }
}

        const price = ref(0);     // ລາຄາ
        const quantity = ref(0);  // ຈຳນວນ
        const totalPrice = ref(0);  // ລາຄາລວມ

        const calculateTotal = () => {
          totalPrice.value = price.value * quantity.value;
        };



        const discountPercent = ref(0);
        const prices = ref(0); 
        const discountAmount = ref(0);
        const finalPrice = ref(0);

        const calculateDiscount = () => {
          discountAmount.value = (prices.value * discountPercent.value) / 100;
          finalPrice.value = prices.value - discountAmount.value;
        };

        const formatCurrency = (value: number) => {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'LAK',
            minimumFractionDigits: 0,
          }).format(value);
        };


</script>

<style lang="scss"scoped>
  input {
      padding: 10px;
      margin: 10px;
      width: 200px;
      font-size: 16px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }

</style>