<script setup lang="ts">

</script>

<template>
    <div class="OurProduct">
        <div class="detail">
            <p class="our">OurProduct</p>
            <img src="https://haltech.la/assets/7ADST8Iu-kaiymuan.webp" alt="">
            <p class="Kaiymuan">
                Kaiymuan
                <span>is live streaming system</span>
            </p>
           <div class="sell">
             <p>Sell easily and securely with Kaiymuan</p>
             <a>Supports automated order management, real-time stock checking, and secure payments</a>
             <p>allowing you to sell smoothly all in one!</p>
           
            </div>
        </div>
        <div class="call">
            <button>
                <p>
                    Kaiymuan -
                    <span>ລະບົບ</span>
                    cf
                    <span>ຂາຍມ່ວນ</span>

                </p>
              
            </button>
            
            <p>020 9639 9349</p>
        </div>
       <div class="img">
           <img src="https://haltech.la/assets/BAn6eERv-kaimuan.webp" alt="">
       </div>
        
    </div>

</template>

<style lang="scss" scoped>
.OurProduct {
    background-color: #fcfafd;
    padding: 3% 10% 0;
    .detail {
        .our {
            padding: 5px 15px;
            border-radius: 50px;
            background-color: #daddda;
            width: 100px;
            text-align: center;
        }
        & img {
            width: 39px;
            height: 29px;
            line-height: -0.5;
        }
        .Kaiymuan {
            font-size: 35px;
            color: rgb(146, 6, 6);
            font-weight: bold;
            & span {
                color: black;
            }         
        }
        .sell {
            line-height: 0.5;
            & p {
              font-size: 25px;
              font-weight: bold;
            }
            & a {
              font-size: 25px;
              color: rgb(155, 5, 5);
            }
        }
    }
    .call {
        display: flex;
        gap: 50px;
        & button {
            border: 1px solid #daddda;
            background-color: white;
            padding: 0 10px;
            border-radius: 50px;
            &:hover {
                background-color: #ebf1eb;
            } 
            & p {
                font-weight: bold;
                & span {
                    color: rgb(131, 127, 127);
                }
            }            
        }
        & p {
            font-weight: bold;
            font-size: 18px;
        }
     
    }
    .img {
        // text-align: center;
        & img {
           margin-top: 40px;
           width: 95%;
           height: 40%;
           border-radius: 20px;
           box-shadow: 0 0 20px 5px #d6d6d6; /* x, y, blur, spread, color */
        }   

    }
   
}

</style>