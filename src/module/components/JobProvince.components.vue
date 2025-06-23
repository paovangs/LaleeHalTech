<template>
    <div class="hos">
        ແບ່ງວຽກຕາມແຂວງ

    </div>
    <div class="box-tite">
        <div class="box-lear">
            <div class="lee">
                <p class="h">ແຂວງ ຫຼວງພະບາງ</p>
                <p class="g">1 ວຽກທີ່ເປີດຮັບສະໝັກ </p>

            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/e67baed2-df2a-4863-ad00-22ff43cc3c7e.jpeg" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/bee8c4b3-162c-459c-b7c9-b9c14feb3797.jpeg" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/6fa3b601-741a-4288-903c-63474b671aeb.jpeg" alt="">
            </div>
        </div>
        <div class="box-lear">
            <div class="lee">
                <p class="h">ແຂວງ ຫຼວງນໍ້າທາ</p>
                <p class="g">2 ວຽກທີ່ເປີດຮັບສະໝັກ </p>
               
            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/bee8c4b3-162c-459c-b7c9-b9c14feb3797.jpeg" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/d0d1f415-402d-4be3-87e0-3159f06364ce.png" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/de701812-9098-4b50-ad58-19250d48571d.jpeg" alt="">
            </div>

        </div>
        <div class="box-lear">
            <div class="lee">
                <p class="h">ແຂວງ ຄຳມ່ວນ</p>
                <p class="g">3 ວຽກທີ່ເປີດຮັບສະໝັກ </p>

            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/bee8c4b3-162c-459c-b7c9-b9c14feb3797.jpeg" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/5e58f0cd-e321-4592-ac15-c289909b4481.jpeg" alt="">
            </div>
        </div>
        <div class="box-lear">
            <div class="lee">
                <p class="h">ແຂວງ ບໍລິຄຳໄຊ</p>
                <p class="g">4 ວຽກທີ່ເປີດຮັບສະໝັກ </p>

            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/cf75d21a-aa2f-403a-b41c-ca8a33244b1d.jpeg" alt="">
                <!-- <button class="de">+1</button> -->
            </div>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.hos {
    font-size:28px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
}
    

.box-tite {
    // border: 1px solid red;
    width: 100%;
    margin-left: 4px;
    font-size: 18px;
    display: flex;
    margin-top: 10px;
    .box-lear {
        border: 2px solid whitesmoke;
        width:60%;
        margin: 10px;
        height: 6%;
        border-radius: 15px;
        padding: 10px 20px;
        .lee {
            // padding: 0 15px;
            .h {
                font-weight: bold;
                margin-top: 20px;
            }
            .g {
                margin-top: -15px;
            }
        }

        .laa {
            & img {
                border: 2px solid whitesmoke;
                padding: 5px;
                border-radius: 5px;
                margin: 5px;
                height: 30px;
                width: 15%;
                margin-top: -10px;

            }
        }
    }
        
    
}

</style>