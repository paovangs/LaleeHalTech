<template>
    <div class="company">
        <h1>cdlaring ceactive state {{ count }}</h1>
        <button @click="increment">(+)increment</button>
        <button @click="decrement">(-)decrement</button>
    </div>
    <hr>
    <div>
        <label for="score">ປ້ອນຄະແນນ (0-10):</label>
        <input type="number" v-model ="score" min="0" max="10" />
        <p v-if="scoretext">{{ scoretext }}</p>
    </div>
    <hr>
    <div>
        <button 
        @click="toggleText"
        :style="{ backgroundColor: text === 'edit' ? 'yellow' : 'green', color: 'black' }"
        >
        
      {{ text }}            
     </button>
    </div>
    <hr>
    <div>
        <input v-model="input1" placeholder="input1">
        <input v-model="input2" placeholder="input2">
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
            <input v-model="textOpe" placeholder="ປ້ອນຂໍ້ມູນ" />
            <button @click="toggleInput(false)">ປິດ</button>
        </div>
        <div v-else>
            <button @click="toggleInput(true)">ເປີດ</button>
        </div>
    </div>
    <hr>
    <h2>ຈຳນວນລາຄາລວມ</h2>
    <label>
        ລາຄາ
        <input type="number"v-model.number="price" placeholder="ໃສ່ລາຄາ">
    </label>
    <br>
    <label>
        ຈຳນວນ
        <input type="number"v-model.number="quantity" placeholder="ໃສ່ຈຳນວນ">
    </label>
    <br>
    <button @click="calculateTotal">ຄຳນວນ</button>
    <div class="result" v-if="totalPrice !== null">
        ລາຄາລວມ: {{ totalPrice }} ກີບ
    </div>
    <hr>
    <div>
        <button class="red" @click="showMessage('ສີແດງ')">ສີແດງ</button>
        <button class="black" @click="showMessage('ສີດຳ')">ສີດຳ</button>
        <button class="green" @click="showMessage('ສີຂຽວ')">ສີຂຽວ</button>
        <p> ທ່ານເລືອກປຸ່ມສີ
            <span class="message" :style="{ color: messageColor }">{{ message }}</span>

        </p>
    </div>

    <hr>
    <h2>ຄຳນວນສ່ວນຫຼຸດ</h2>
    <label>
       ລາຄາ (ກີບ)
       <input type="number" v-model="prices" placeholder="ໃສ່ລາຄາ">
    </label>
    <br>
    <label>
        ເປີເຊັນສ່ວນຫຼຸດ (%)
        <input type="number" v-model="discountPercent" placeholder="ໃສ່່​ % ຫຼຸດ">
    </label>
    <br>
    <button @click="calculateDiscount">ຄຳນວນ</button>
    <div class="result" v-if="discountAmount !== null">
        ສ່ວນຫຼຸດ%: {{ formatCurrency (discountAmount) }} <br>
        ລາຄາຫຼັງຫຼຸດ: {{ formatCurrency (finalPrice) }}

    </div>

    <hr>
    <div class="calculator">
    <input v-model="current" readonly />
    <div class="buttons">
        <button @click="append('1')">1</button>
        <button @click="append('2')">2</button>
        <button @click="append('3')">3</button>
        <button @click="append('+')">+</button>
        <button @click="append('4')">4</button>
        <button @click="append('5')">5</button>
        <button @click="append('6')">6</button>
        <button @click="append('-')">-</button>
        <button @click="append('7')">7</button>
        <button @click="append('8')">8</button>
        <button @click="append('9')">9</button>
        <button @click="append('*')">*</button>
        <button @click="append('%')">%</button>
        <button @click="append('0')">0</button>
        <button @click="append('.')">.</button>
        <button @click="append('/')">÷</button>
        <button @click="clear">C</button>
        <!-- <button @click="append('=')">=</button> -->
      <button class="equals" @click="calculate">=</button>
      
    </div>
  </div>
   
</template>

<script lang="ts" setup>
// Add your component logic here
import { reactive } from "vue";
import { computed } from "vue";
import { ref } from "vue";
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
        'vue 2 - Anced Guide',
        'vue 3 - Basic Guide',
        'vue 4 - The Mystery'
    ]
    
})
const score = ref(0) 
const scoretext = computed(() => {
    if (score.value ==10) {
        return 'ດີຫຼາຍ'

    } else if (score.value ==9) {
        return 'ດີ'
    } else if (score.value ==8) {
        return 'ປານກາງ'
    } else if (score.value ==7) {
        return 'ພໍໃຊ້'
    } else
     if (score.value ==6) {
        return 'ອ່ອນ'
    } else if (score.value ==5) {
        return 'ຕົກ'
    } else  {
        return 'ບໍ່ຜ່ານ'
    }

})

const text = ref('add') 
function toggleText () {
    text.value = text.value === 'add' ? 'edit' : 'add'

}
const input1 = ref('0')
const input2 = ref('0')
const total = ref(0)
function addInputs () {
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    total.value = num1 + num2;
}
const showInput = ref(true)
const textOpe = ref('')
function toggleInput(state: boolean) {
    showInput.value = state
}

    const price = ref(0);     // ລາຄາ
    const quantity = ref(0);  // ຈຳນວນ
    const totalPrice = ref(0);  // ລາຄາລວມ
    const calculateTotal = () => {
        totalPrice.value = price.value * quantity.value
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

    const message = ref('')
    const messageColor = ref('')
    const showMessage =  (color: string) => {
        message.value = `${color}`;

        if (color === 'ສີແດງ') {
            messageColor.value = 'red';

        } else  if (color === 'ສີດຳ') {
            messageColor.value = 'black';
        }  else if (color === 'ສີຂຽວ') {
            messageColor.value = 'green'

        }
    }

    const current = ref('')

const append = (char: string) => {
  current.value += char
}

const clear = () => {
  current.value = ''
}

const calculate = () => {
  try {
    current.value = eval(current.value).toString()
  } catch (e) {
    current.value = 'Error'
  }
}

    
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
      margin: 5px;
    }

    .calculator {
  width: 300px;
  margin: auto;
}
input {
  width: 100%;
  font-size: 1.5em;
  padding: 10px;
  text-align: right;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
button {
  font-size: 1.2em;
  padding: 10px;
}
.equals {
  grid-column: span 1;
  background-color: #4caf50;
  color: white;
}

   
  

</style>