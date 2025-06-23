<script setup lang="ts">

</script>

<template>
    <div class="footer">
        <div>
            <div class="logo">
                <img src="https://haltech.la/assets/CZhlx3AE-logo.webp" alt="">
                <div class="HAL">
                   <h3>HAL TECH</h3>
                   <p class="Houng">Houng Ah loun tachnology</p>
                </div>
           </div>
           <div>
               <h4>Social media</h4>
           </div>

 
        </div>
        <div class="box-colums">
            <div class="colums">
                <h4>about us</h4>
                <p>Who we are</p>
                <p>Portfolios</p>
                <p>Contact us</p>
            </div>
            <div class="colums">
                <h4>Service</h4>
                <p>E-commerce Develoment</p>
                <p>Web base development</p>
                <p>Application development</p>
            </div>
            <div class="colums">
                <h4>Talk to us</h4>
                <p>info@haltech.la</p>
                <p>+856 20 993 922 45</p>
                <p>Houng ah loun technology, 328Av. Kaysone phomvihane, vientiane</p>
            </div>

        </div>
  
        
    </div>
    <div class="policy ">
        <p>Copyrights 2024 Hal Tech Company Limited. All Right Reserved.</p>
        <h3>Privacy policy     |     Cookie policy</h3>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    padding: 10px 50px;
    background-color: #f1f1f7;

    .logo {
        display: flex;
        align-items: center;
        & img {
            height: 2.25rem;
        }
        .HAL {
            line-height: 0.1;
            margin: 12px;
            font-size: 20px;
            .Houng {
                font-weight: bold;
                font-size: 0.80rem;
            }
        }
       
    }
    .box-colums {
        display: flex;
        justify-content: space-between;
        .colums {
            width: 25%;
            & h4 {
                font-size: 18px;
            }
            & p {
                font-size: 20px;
            }
        }
    }

    
 
}
.policy  {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    background-color: #f1f1f7;

}

</style>