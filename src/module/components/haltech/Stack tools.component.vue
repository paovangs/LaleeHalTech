<script setup lang="ts">

</script>

<template>
    <div class="Stack">
        <p>Stack tools</p>
        <h2>Inside Our Tech Stack</h2>
        <h2>The Tools Powering Innovation</h2>
    </div>
    <div class="Web">
        <div class="menu">
            <li class="black">Web</li>
            <li>Mobile</li>
            <li>Infrasructure</li>
            <li>UX/UI</li>
        </div>
        <div class="logo">
            <div class="ts">
                <img src="https://haltech.la/stack/typescript.webp" alt="">
                <p>TypeScript</p>
            </div>
            <div class="ts">
                <img src="https://haltech.la/stack/vue.webp" alt="">
                <p>Vue</p>
            </div>
            <div class="ts">
                <img src="https://haltech.la/stack/nuxt.webp" alt="">
                <p>Nuxt</p>
            </div>
            <div class="ts">
                <img src="https://haltech.la/stack/laravel.webp" alt="">
                <p>Laravel</p>
            </div>
            <div class="ts">
                <img src="https://haltech.la/stack/nestjs.webp" alt="">
                <p>Nest JS</p>
            </div>
            <div class="ts">
                <img src="https://haltech.la/stack/hono.webp" alt="">
                <p>Hono</p>
            </div>

        </div>
        <div class="ts">
            <img src="https://haltech.la/stack/qwik.webp" alt="">
            <p>Qwik</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Stack {
    margin-top: 100px;
    line-height: 0.5;
    padding: 10px 50px;
    & h2 {
        font-size: 28px;
        font-weight: bold;
    }  
}
.Web {
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        list-style: none;
        font-size: 16px;
        & li {
              border: 1px solid white;
            text-align: center;
            padding: 10px;
            width: 15%;
            border-radius: 25px;
            &:hover{

                border: 1px solid #f2f3f3;
                padding: 10px;
                background-color: #f2f3f3;
                width: 15%;
                cursor: pointer;
            }
        }
        .black {
            background-color: black;
            color: white;
            font-weight: bold;
            &:hover {
                background-color: black;
            }
        }
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
        margin-top: -50px;
        .ts {
            display: flex;
            gap: 10px;
            align-items: center;
            & img {
                width: 45px;
            }
            & p {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
        .ts {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 80px;
            & img {
                width: 45px;
            }
            & p {
                font-size: 18px;
                font-weight: bold;
            }
        }
}

</style>