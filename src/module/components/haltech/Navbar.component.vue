<script setup lang="ts">

</script>

<template>
    <div class="navbar">
        <div class="logo">
            <img src="https://haltech.la/assets/CZhlx3AE-logo.webp" alt="">
            <div class="HAL">
               <h3>HAL TECH</h3>
               <p class="Houng">Houng Ah loun tachnology</p>
            </div>
        </div>
        <div class="menu">
            <li class="Home">Home</li>
            <li>About us</li>
            <li>Service</li>
            <li>Porfolio</li>

        </div>
        <a>Let’s Connect</a>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    padding: 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        & img {
            height: 2.25rem;
        }
        .HAL {
            line-height: 0.1;
            margin: 12px;
            .Houng {
                font-weight: bold;
                font-size: 0.75rem;
            }
        }
       
    }
    .menu {
        display: flex;
        gap: 40px;
        list-style: none;
        font-size: 18px;
        .Home {
            color: #fff;
            background-color: black;
            padding: 8px 20px;
            border-radius: 8px;
            &:hover {
                background-color: black;
            }
        }
        & li {
            padding: 10px 15px;
            &:hover {
                cursor: pointer;
                border-radius: 8px;
                background-color:  rgb(228, 228, 243);;
            }
        }
    }
    & a {
        font-size: 20px;
        color: black;
    }

}

</style>