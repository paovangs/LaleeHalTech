<template>
    <div class="navbar">
        <div class="logo">
            <img src="https://www.jobthai.com/static/images/package/header/job-active.svg" alt="">
            <span class="con">ໂຄສະນາຕຳແໜ່ງ</span>     
        </div>
        <div class="logo">
            <img src="https://www.jobthai.com/static/images/package/header/banner.svg" alt="">
            <span>ວິທີການໂຄສະນາ</span>
        </div>
        <div class="logo">
            <img src="https://www.jobthai.com/static/images/package/header/pr.svg" alt="">
            <span>ວີທີລົງໂຄສະນາ</span>
        </div>
        <div class="logo">
            <img src="https://www.jobthai.com/static/images/package/header/pay.svg" alt="">
            <span>ວີທີຊຳລະຄ່າບໍລິການ</span>
        </div>
        <div class="menu">
            <img src="https://www.jobthai.com/static/images/package/header/calculator.svg" alt="">
            <span>ສຳນວນລາຄາໂຄສະນາ</span>
        </div>
        <div class="menu">
            <img src="https://www.jobthai.com/static/images/package/header/pdf.svg" alt="">
            <span>ໄຟລ້ໂຄສະນາ</span>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.navbar {
    display: flex;
    align-items: center;
    padding: 0 200px;
    border-bottom: 1px solid rgb(254, 109, 67);
    & .logo {
        display: flex;
        align-items: center;
        margin: 18px;
        &:hover {
            cursor: pointer;
            color: rgb(254, 109, 67);
        }
        & img {
           width: 35px;
           margin: 5px;
           &:hover {
            cursor: pointer;
            color: rgb(254, 109, 67);
        }
        }

    }

    & .menu {
        display: flex;
        align-items: center;
        margin: 10px;
        background-color: rgb(255, 245, 240);
        padding: 5px 10px;
        border-radius: 10px;
        color: rgb(254, 109, 67);
        &:hover {
            cursor: pointer;
        }
        & img {
            width: 20px;
            margin: 5px;
        }
        span {
            margin-left: 5px;
        }
    }

    
}
</style>