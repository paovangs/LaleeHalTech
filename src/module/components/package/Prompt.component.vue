<template>
    <div class="box-prompt">
        <div class="prompt">
            <p class="childer">วิธีชำระค่าบริการ</p>
            <p class="chil">สามารถเลือกชำระค่าบริการได้ 3 ช่องทาง </p>
        </div>
        <div class="pay">
            <div class="img1">
                <img src="https://www.jobthai.com/static/images/payment/promptpay.svg" alt="">
                <p class="qr">QR พร้อมเพย์</p>
                <p class="der">ดูรายละเอียด
                </p>
            </div>
            <div class="img2">
                <img src="https://www.jobthai.com/static/images/payment/visa.svg" alt="">
                <p class="chil">บัตรเครดิต</p>
                <p class="der">ดูรายละเอียด</p>
            </div>
            <div class="img3">
                <img src="https://www.jobthai.com/static/images/payment/payment-bank.svg" alt="">
                <p class="alt">บัญชีธนาคาร</p>
                <p class="der">ดูรายละเอียด</p>
            </div>
               

        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-prompt {
    background: rgb(246, 247, 251);
    padding:  5px 20px;
    height: 70vh;
    margin-top: 50px;

    .prompt {
        line-height: 0.8;
        text-align: center;
        .childer {
            font-size: 30px;
            font-weight: bold;
            color: rgb(247, 159, 0);
        }
        .chil {
            font-size: 20px;
        }

    }
    .pay {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .img1 {
            margin: 120px;
            & img {
                width: 150%;
                height: 70%;
            }
            .der {
                color: #fe6d43;
                font-size: 20px;

            }
            .qr {
                font-size: 20px;
                font-weight: bold;
            }
        }
        .img2 {
            margin: 100px;

            & img {
                width: 150%;
                height: 100%;
            }
            .der {
                color: #fe6d43;
                font-size: 20px;
            }
            .chil {
                font-size: 20px;
                font-weight: bold;
            }
            
        }
        .img3 {
            margin: 100px;
            & img {
                width: 100%;
                height: 100%;
            }
            .alt{
                font-size: 20px;
                font-weight: bold;
            }
            .der {
                font-size: 20px;
                color: #fe6d43;

            } 

            
           
        }
    }
}
</style>