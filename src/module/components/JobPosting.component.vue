<template>
    <div class="box-near">
        <div class="lee">
            <div class="body">
                <p class="la">Job Posting</p>
                <p class="la">Inquiry:</p>
                <p class="p">How to post a job , Calculate</p>
                <p class="p">your job post budget,Price</p>
                <p class="p">and package</p>
                <div class="mo"></div>
                <div class="p">
                    <p>sales@108.jobs</p>
                    <p>(+856)20 28032221</p>
                    <p>(+856)20 22217369</p>
                </div>
            </div>
            <div class="hena">
                <img src="https://employer.108.jobs/_nuxt/customer-services-assistant.Dgny9ICN.png" alt="">
            </div>
        </div>
        <div class="lee">
            <div class="body">
                <p class="la">Job Posting</p>
                <p class="la">Inquiry:</p>
                <p class="p">How to post a job , Calculate</p>
                <p class="p">your job post budget,Price</p>
                <p class="p">and package</p>
                <div class="mo"></div>
                <p class="p">sales@108.jobs</p>
                <p class="p">(+856)20 28032221</p>
                <p class="p">(+856)20 22217369</p>
            </div>
            <div class="hena">
                <img src="https://employer.108.jobs/_nuxt/businesswoman-hold-with-folder.C2WRxrEZ.png" alt="">
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-near {
    display: flex;
    padding: 10px;
    margin-top: 80px;
    .lee {
        display: flex; 
        border: 1px solid  rgb(233, 249, 253);
        width: 100%;
        margin: 10px;
        background-color: rgb(233, 249, 253);
        height: 42vh;
        .body {
            padding: 0 40px;
            width: 50%;
            .la {
                font-size: 30px;
                font-weight: bold;
                color: blue;
                line-height: 0.4;
            }
            .p {
                font-size: 18px;
                font-weight: bold;
                line-height: 0.5;
            }
            .mo {
                border: 2px solid blue;
                width: 10%;
            }
        }
        .hena {
            text-align: center;
            & img {
                width: 100%;
                height: 36vh;
                object-fit: cover;
                margin-top: 42px;
            }
        }
    }
}
</style>