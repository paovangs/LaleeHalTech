<template>
    <div class="navbar">
        <div class="nav">COV NTXHAIS ZOO NKAUJ 2024 - 2025</div>
        <div class="bar">Ntawm No Yog Peb Cov Ntxhais Zoo Nkauj Nyob Lub Tshiab Peb Caug Xyoo No.</div>
        <div class="box-img">
            <div class="img">
                <img src="../../../../public/img/profile-2.jpg" alt="">

                <div class="new">
                    <p class="spen">31-Sep-20</p>
                    <p class="hunb">HNUB VANG</p>

                </div>
            </div>
            <div class="img">
                <img src="../../../../public/img/profile-1.jpg" alt="">
                <div class="new">
                    <p class="spen">30-Sep-20</p>
                    <p class="hunb">DEJ NAG XIONG</p>

                </div>

            </div>
            <div class="img">
                <img src="../../../../public/img/profile-3.jpg" alt="">
                <div class="new">
                    <p class="spen">30-Sep-20</p>
                    <p class="hunb">SUAB NAG YANG</p>

                </div>

            </div>
            <div class="img">
                <img src="../../../../public/img/profile-4.jpg" alt="">
                <div class="new">
                    <p class="spen">30-Sep-20</p>
                    <p class="hunb">PANA LEE</p>

                </div>

            </div>
    
        </div>
    </div>
    
</template>

<script lang="ts" setup>
        
</script>

<style lang="scss"scoped>
.navbar {
    
    background-color: #f2f2f2;
    margin-top: -15px;
    padding: 30px;
    .nav {
        font-size: 28px;
        font-weight: bold;
        border-bottom: 1px solid orange;
        text-align: center;
        margin-left: 30%;
        margin-right: 30%;
    }
    .bar {
        font-size: 18px;
        text-align: center;
        margin-top: 10px;
    }
    .box-img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        &:hover {
            cursor: pointer;
        }


        .img {
            margin: 20px;
            transition: 0.3s;
            &:hover {
                transform: scale(1.1);
            }
            & img {
                width: 250px;
                height: 260px;
                object-fit: cover;
                object-position: top;
                border-radius: 10px 10px 0 0;
                &:hover {
                    filter: brightness(0.8);
                }
            }
            .new {
                background-color: white;
                margin-top: -8px;
                padding: 5px 10px;
                line-height: 0.6;
                border-radius: 0 0 10px 10px;
                .spen {
                    line-height: 0.5;
                    color: #81848a;;
                }
            
            }
           
            
        }
       
    }
}
</style>