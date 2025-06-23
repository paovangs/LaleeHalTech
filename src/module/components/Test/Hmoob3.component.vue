<template>
    <div class="box-navbar">
        <div>
            <p class="detail">COV NTXHAIS HU NKAUJ</p>
            <p class="till">Peb Cov Ntxhas Hu Nkauj Suab Qab Zib.</p>
        </div>

       <div class="box-img">
           <div class="box">
              <img src="../../../../public/img/profile-4.jpg" alt="">
              <p>PANA LEE</p>
           </div>
           <div class="box">
              <img src="../../../../public/img/team-13.jpg" alt="">
              <p>YULIA TSAB</p>
           </div>
           <div class="box">
               <img src="../../../../public/img/team-3.jpg" alt="">
              <p>NKAUJ NOOG LEE</p>
           </div>
           <div class="box">
              <img src="../../../../public/img/team-4.jpg" alt="">
              <p>NKAUJ IAB HAWJ</p>
           </div>
       </div>

       <div class="banner">
           <div>
               <p class="tus">TUS NTXHAIS HU NKAUJ TAU ZEEG IB 2024 - 2025</p>
               <p class="nrog">Nrog Koj Zoo Siab Rau Koj Txoj Kev Sib Tw Zaum No.</p>
           </div>
           <div class="img">
                <img src="../../../../public/img/team-2.jpg" alt="">
           </div>
           <div class="chil">
               <p>Nkauj Hnub Yog Peb Ib Tug Ntxhais Hu Nkauj Suab Qab Zib Nws Nyob Lub Zos Lav 20, Nws Muaj 21 Xyoo.</p>
               <p>Peb Lub Tshiab Peb Caug Xyoo No Muaj Coob Tus Ntxhais Hu Nkauj Kawg Li Thiab.</p>
               <p class="nkauj">NKAUJ HNUB VANG</p>
           </div>
       </div>

    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.box-navbar {
    .detail {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px solid orange;
        margin-left: 35%;
        margin-right: 35%;
    }
    .till {
        font-size: 18px;
        text-align: center;
        margin-top: -20px;
    }
    .box-img {
        display: flex;
        justify-content: center;
        align-items: center;
        .box {
           margin: 30px;
            & img {
                width: 100px;
                height: 100px;
                border-radius: 50px;
                border: 3px solid #e6a501;
                object-fit: cover;
                object-position: top;
                transition: 0.3s;
                &:hover {
                    transform: scale(1.1);
                }

            }
        }
    }
    .banner {
        .tus {
            font-size: 28px;
            font-weight: bold;
            border-bottom: 1px solid orange;
            margin-left: 25%;
            margin-right: 25%;
            text-align: center;
           
        }
        .nrog {
            font-size: 18px;
            margin-top: -15px;
            text-align: center;
        }
        .img {
            text-align: center;
            & img {
                width: 100px;
                height: 100px;
                border-radius: 50px;
               border: 3px solid #ec0565;
               object-fit: cover;
               object-position: top;
               text-align: center;
               transition: 0.3s;
               &:hover {
                transform: scale(1.1);
               }
            }
           
        }
        .chil {
            font-size: 18px;
            line-height: 0.6;
            text-align: center;
            .nkauj {
                color: orange;
            }
        }
       
    }
                
               
   
}


       


</style>