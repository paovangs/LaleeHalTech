<script setup lang="ts">

</script>

<template>
    <div class="partner">
        <p>Partner</p>
        <h2>Collaborating for a Brighter Future</h2>
        <h2>Meet Our Partners</h2>
    </div>
    <div class="box-colums">
        <div class="colums">
            <img src="https://haltech.la/partner/dcits.webp" alt="">
            <div>
                <p>Digital China Information Service Company Ltd.</p>
            </div>
        </div>
        <div class="colums">
            <img src="https://haltech.la/partner/jdb.webp" alt="">
            <div>
                <p>Joint Development Bank (JDB)</p>
            </div>
         </div>
        <div class="colums">
            <img src="https://haltech.la/partner/ministry-of-technology.webp" alt="">
            <div>
                <p>Ministry of Technology and Communications of Laos</p>
            </div>
        </div>
        <div class="colums">
            <img src="https://haltech.la/partner/nuol.webp" alt="">
            <div>
                <p>National University of Laos (Nuol)</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.partner {
    line-height: 0.5;
    padding: 10px 50px;
    margin-top: 100px;
    & h2 {
        font-size: 25px;
        font-weight: bold;
    }
}
.box-colums {
    grid-template-columns: repeat(3, 1fr);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    
    .colums {
        display: flex;
        align-items: center;
        width: 16%;
        gap: 1rem;
        & img {
            width: 40%;
        }
        & p {
            font-size: 18px;
            font-weight: bold;
        }
    }
}

</style>