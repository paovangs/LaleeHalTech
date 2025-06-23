<template>
    <div class="navbar">
        <div class="logo">HMOOB52</div>
        <ul class="menu">
            <li>HMOOB</li>
            <li>HU NKAUJ</li>
            <li>KEV LOM ZEM</li>
            <li>NTXHAIS ZOO NKAUJ</li>

        </ul>
        <div class="box">
            <button class="in">SIGN IN</button>
            <button class="up">SIGN UP</button>
        </div>
    </div>
    <div class="banner">
        <div class="detail">
            <h1>Hi,NYOB ZOO IB TSOOM HMOOB...!</h1>
            <P class="tail">ZOO SIAB TXAIS TOS PEB IB TSOOM HMOOB</P>
            <P class="tail">PEB LUB TSHIAB PEB CAUG XYOO 2024 - 2025 LOS TXAG LAWM</P>
            <button class="button">NKAUJ HMOOB LAV 52</button>

        </div>
        


       
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -2S0px;
    padding: 0 80px;
    background-color: rgba($color: #857c7c, $alpha: 1.0);
    color: #fff;
    height: 70px;
    .logo {
        font-size: 30px;
        font-weight: bold;
    }
    .menu {
        font-size: 18px;
        display: flex;
        list-style: none;

        li {
            margin: 20px;
            border-bottom: solid transparent 3px;

            &:hover {
                border-bottom: 3px solid black;
                color: black;
                transform: scale(1.1);
                
            }


        }

        
    }
    .box {
        font-size: 18px;
        border-radius: 10px;
        padding: 6px 30px;

        
        .in {
            margin: 20px;
            background-color: white;
            padding: 6px 30px;
        }
        .up {
            margin: 20px;
            background-color: #e6a501;
            padding: 6px 30px;
            color: #fff;
            border-bottom: solid transparent 3px;


            &:hover {
                color: #e6a501;
                border: #e6a501;
                background-color: #fff;
                transform: scale(1.1);
            }

        }
        
    }
}
.banner {
    background-image: url('../../../../public/img/banner.jpg');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    justify-content: center;
    display: flex;
    align-items: center;
    &::before {
        content: ""; /* ຈຳເປັນຕ້ອງໃສ່ */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.375); /* สีดำโปร่งใส */
        z-index: 1; /* วางไว้เบื้องหลังเนื้อหาภายใน */
    }
    .detail {
        text-align: center;
        justify-content: center;
        margin-top: 170px;
        color: #fff;
        z-index: 1000;
        .tail {
            line-height: 5px;
            font-size: 20px;
        }
        .button {
            color: blue;
            margin-top: 30px;
            padding: 8px 25px;
            border: none;
            transition: 0.3s;
            &:hover {
                transform: scale(1.1);


            }

        }
    }
}

    

</style>