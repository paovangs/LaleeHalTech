<script setup lang="ts">

</script>

<template>
    <div class="Customers">
        <p>Customers</p>
        <h2>Our Valued Customers</h2>     
    </div>
    <div class="box-logo">
        <div class="logo">
            <img src="https://haltech.la/customer/hal.webp" alt="">
            <img src="https://haltech.la/customer/synergy.webp" alt="">
            <img src="https://haltech.la/customer/vari.webp" alt="">
            <img src="https://haltech.la/customer/4sev.webp" alt="">
            <img src="https://haltech.la/customer/aeon.webp" alt="">
        </div>
        <div class="logo">
            <img src="https://haltech.la/customer/halcenterlive.webp" alt="">
            <img src="https://haltech.la/customer/khoomue.webp" alt="">
            <img src="https://haltech.la/customer/samllb.webp" alt="">
            <img src="https://haltech.la/customer/tplus.webp" alt="">
            <img src="https://haltech.la/customer/namtha.webp" alt="">


        </div>
        <div class="logo">
            <img src="https://haltech.la/customer/arist.webp" alt="">
            <img src="https://haltech.la/customer/cocacola.webp" alt="">
            <img src="https://haltech.la/customer/goteddy.webp" alt="">
            <img src="https://haltech.la/customer/hubbo.webp" alt="">
            <img src="https://haltech.la/customer/immigration.webp" alt="">
        </div>





       

    </div>
</template>

<style lang="scss" scoped>
.Customers {
    line-height: 0.5;
    padding: 10px 50px;
    margin-top: 100px;

   & h2 {
       font-size: 28px;
       font-weight: bold;
    }

}
.box-logo {
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 25px;
        & img {
           padding: 25px;
           width: 8%;
           border-radius: 100% ;
           background-color: #f2f3f3;

        }
    }
       


}

</style>