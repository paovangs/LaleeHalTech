<template>
    <div class="hos">
        ແບ່ງວຽກຕາມອຸດສາຫະກຳ

    </div>
    <div class="box-tite">
        <div class="box-lear">
            <div class="lee">
                <p class="h">Insurance</p>
                <p class="g">1 ວຽກທີ່ເປີດຮັບສະໝັກ </p>

            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/f1bf64f7-b7f4-42fb-b3da-b8a98d3795f9.png" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/bb288d0a-2a2f-4c96-939d-bd2e0a165dec.png" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/2d3c930f-2faf-4e11-a69a-972090f6f14f.jpeg" alt="">
            </div>
        </div>
        <div class="box-lear">
            <div class="lee">
                <p class="h">Hydropower</p>
                <p class="g">2 ວຽກທີ່ເປີດຮັບສະໝັກ </p>
               
            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/d84e46ed-6985-474f-ac1f-d45a5e1fb78a.jpeg" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/ceb9e096-f630-4ac1-815e-c5e00721ca31.png" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/cf6ae6e2-71eb-4b71-957f-db3f56490e5d.png" alt="">
            </div>

        </div>
        <div class="box-lear">
            <div class="lee">
                <p class="h">Banking</p>
                <p class="g">3 ວຽກທີ່ເປີດຮັບສະໝັກ </p>

            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/f6e0a519-a556-4c52-b6d2-55d6fe719c40.png" alt="">
            </div>
        </div>
        <div class="box-lear">
            <div class="lee">
                <p class="h">Real Estate</p>
                <p class="g">4 ວຽກທີ່ເປີດຮັບສະໝັກ </p>

            </div>
            <div class="laa">
                <img src="https://storage.googleapis.com/108-bucket/company-images/92542fa4-27e1-47d3-bfe9-b3880536a89f.jpeg" alt="">
                <img src="https://storage.googleapis.com/108-bucket/company-images/3e48adf9-521c-46fd-bf08-d3aa58f851fd.png" alt="">
                <!-- <button class="de">+1</button> -->
            </div>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.hos {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
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
                background-position: center;

            }
        }
    }
        
    
}

</style>