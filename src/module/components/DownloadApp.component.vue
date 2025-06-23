<template>
    <div class="box-near">
        <div class="goes">
            <h2 class="no">ດາວໂຫຼດແອັບ 108 jobs</h2>
            <p class="h">ໃຊ້ງານງ່າຍ ພຽງແຕ່ໃຊ້ໂປຣໄຟລ ຮັບງານແຈ້ງເຕືອນແລະສະໝັກວຽກພຽງແຕ່ຄຣິກ</p>
            <P class="h">ດຽວເທິງແອັບ 108Jobs</P>
            <div class="hee">
                <img src="https://108.jobs/_nuxt/app-store-badge.DrlwaQa1.png" alt="">
                <img src="https://108.jobs/_nuxt/google-play-badge.Dn3-lm13.png" alt="">
            </div>
        </div>
        <div class="img">
            <img src="https://108.jobs/_nuxt/model_small_bg.C2XbiqHC.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-near {
    // border: 1px solid green;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    background-color: whitesmoke;
    .goes {
        padding: 50px;
        // border: 1px solid red;

        .h {
            font-size: 18px;
            margin: 0px;
        }
        .hee {
            & img {
                width: 30%;
                margin: 5px;
                margin-top: 15px;
            }
        } 
    }
    .img {
        & img {
            width: 80%;
        }
    }
}
</style>