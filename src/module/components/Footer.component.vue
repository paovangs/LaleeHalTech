<template>
    <div class="box-banner">
        <div class="hear">
            <div class="ne">
                <h2 class="bee">ກ່ຽວກັບ</h2>
                <p>ກ່ຽວກັບ 108.jobs</p>
                <p>Pivacy Policy</p>
            </div>
            <div class="ne">
                <h2 class="bee">ຜູ້ຫາງານ</h2>
                <p> ລົງທະບຽນ</p>
                <p>ຄົ້ນຫາວຽກ</p>
                <p>ບົດຄວາມ</p>
            </div>
            <div class="ne">
                <h2 class="bee">ບໍລິສັດ</h2>
                <p>ປະກາດວຽກ</p>
                <p>ຄົນຫາ ຊີວະປະຫວັດ</p>
            </div>
            <div class="ne">
                <h2 class="bee">Job Posting Inquiry</h2>
                <p>(+856)20 2221 7639</p>
                <p>(+856)20 2803 4427</p>
                <p>Mon-Fri: 8:30am-5:30pm</p>
                <p>Email: sales@108.jobs</p>
            </div>
            <div class="near">
                <h2 class="ba">Apply on the go</h2>
                <p class="ba">Get real-time job updates on our App</p>
                <img src="https://108.jobs/_nuxt/google-play-badge.Dn3-lm13.png" alt="">
                <img src="https://108.jobs/_nuxt/app-store-badge.DrlwaQa1.png" alt="">
            </div>


        </div>
        <div class="bear">
            <p>Copyright @ 108 Group Co., Ltd. l 1st Floor, 108Hill Buil Dongpaina Road, Saphanthong Village</p>
        </div>
    </div>

</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-banner {
    // border: 1px solid red;
    .hear {
        display: flex;
        justify-content: space-between;
        padding: 30px 50px;
        color: white;
        background-color: black;
        margin-top: -10px;
        .ne {
            font-weight: bold;
            // margin: 10px;
            // border: 1px solid red;
            // width: 30%; 
        }

        .near {
            margin: 10px;
            width: 30%;
            height: 15vh;
            // border: 1px solid red;
            border-radius: 10px;
            padding: 20px;
            background-color: dimgray;
            & img {
                width: 40%;
                margin: 5px;
            }
            &:hover {
                cursor: pointer;
            }
            .ba {
                // border: 1px solid red;
                margin: 0px;
            }
        }
    }
    .bear {
        background-color: black;
        border: 1px solid black;
        color: white;
        text-align: center;
    }
}
</style>