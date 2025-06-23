<script setup lang="ts">

</script>

<template>
    <div class="banner">
        <div class="Innovating">
            <h2 class="growth">Innovating For Your Growth</h2>
            <p>We create tailored web, mobile applications, and customized systems designed to boost your business growth, enhance customer engagement, and streamline operations.</p>
        </div>
        <img src="https://haltech.la/assets/C8ZTQHJ8-hero.webp" alt="">

    </div>
    <div class="detail">
        <p class="transform">Transform your business with :</p>
        <p>Mobile Application|Website Development|E-commerce Development</p>
        <div class="button">
            <button class="about">About Us</button>
            <button class="our">Our portfolio</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.banner {
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    // margin-top: 50px;
    .Innovating {
        width: 50%;
        .growth {
            font-size: 3.75rem;
            line-height: 4rem;
        }
        & p {
            font-size: 1.50rem;
            margin-top: -35px;
            color: #7d7f80;
        }
    }

    & img {
        max-width: 100%;
        height: 80vh;
        margin-top: 25px;
    }

}
.detail {
    padding: 10px 50px;
    margin-top: -10%;
    line-height: 1.25rem;
   .transform {
       color: rgb(134, 134, 248);
       font-size: 18px;
       font-weight: bold;
    }
    & p {
       font-size: 18px;

    }
    .button {
        .about {
            margin: 15px;
            border-radius: 50px;
            padding: 8px 22px;
            border: 1px solid black;

            background-color: white;
            &:hover {
                color: white;
                background-color: black;
            }
        }
        .our {
            margin: 15px;
            border-radius: 50px;
            padding: 8px 22px;
            border: 1px solid black;
            background-color: black;
            color: white;
        }
    }
    
}
</style>