<template>
    <nav class="navbar">
        <div class="logo">
            <img src="https://storage.googleapis.com/108-bucket/assistant-logo/108.jobs.svg" alt="">
            <div class="icon">
                <i class="fa fa-globe"></i> 
                <span class="name"> English</span>
            </div>
        </div>
        <div class="menu">
            <li class="sub-menu active">ໜ້າຫຼັກ</li>
            <li class="sub-menu">ຄົ້ນຫາວຽກ</li>
            <li class="sub-menu">ຄົ້ນຫາບໍລິສັດ</li>
            <li class="sub-menu">ບົດຄວາມ</li>
            <li class="btn-login">ເຂົ້າສູ້ລະບົບ</li>
            <li class="sub-menu bold">ສຳລັບບໍລິສັດ</li>
        </div>
    </nav>

</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 5px 100px;
    border-bottom: 1px solid rgba(231, 231, 231, 0.856);
    .logo {
        display: flex;
        align-items: center;
        & img {
            height: 35px;
        }
       & .icon {
        margin-left: 20px;
        background-color: #f5f5f5;
        padding: 2px 5px;
        border-radius: 5px;
        text-align: center;
        & i {
            font-size: 13px;
        }
        & .name {
            font-size: 13px;
            margin-left: 5px;
        }
       }
    }
    .menu {
        display: flex;
        list-style: none;
        font-size: 18px;
        justify-content: center; 
        align-items: center;
        li {
            margin: 10px;
            position: relative;
            &.sub-menu {
                &:hover::before {
                    content: ''; /* ไม่ใส่ข้อความแค่เส้นขีด */
                    position: absolute; /* ใช้ position absolute เพื่อจัดตำแหน่งเส้น */
                    bottom: 0px; /* ให้อยู่ติดกับข้อความ */
                    left: 0;
                    right: 0;
                    height: 2px; /* ความหนาของเส้น */
                    background-color: blue; /* สีของเส้นขีด */
                }
                &:hover {
                    cursor: pointer;
                }
            }
            &.btn-login {
                border: 1px solid blue;
                background-color: blue;
                color: white;
                padding: 6px 20px;
                border-radius: 25px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .active {
            color: blue;
            &:before {
                content: ''; /* ไม่ใส่ข้อความแค่เส้นขีด */
                position: absolute; /* ใช้ position absolute เพื่อจัดตำแหน่งเส้น */
                bottom: 0px; /* ให้อยู่ติดกับข้อความ */
                left: 0;
                right: 0;
                height: 2px; /* ความหนาของเส้น */
                background-color: blue; /* สีของเส้นขีด */
            }
        }
        & .bold {
            font-weight: bold;
        }
    }
}

</style>
