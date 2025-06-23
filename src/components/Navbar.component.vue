<template>

    <nav class="navbar">
        <div class="logo">jobthai</div>
        <ul class="menu">
            <li class="il">ຫາງານ</li>
            <li>ຝາກປະວິຕິ</li>
            <li>ສະມາຊິກ</li>
            <li>ຫາງານ</li>
            <li>ເຂົ້າສູ້ລະບົບ</li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    .logo {
        font-size: 50px;
        font-weight: bold;
        color: orange;
    }
    .menu {
        display: flex;
        font-size: 20px;
        list-style: none;
        .il {
            color: orange;
        }
        li {
            padding: 5px 15px;
            &:hover {
                background-color: darkgray;
                cursor: pointer;
                border-radius: 5px !important;
            }
        }
    }
}
</style>