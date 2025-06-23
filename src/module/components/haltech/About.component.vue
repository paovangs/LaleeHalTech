<script setup lang="ts">

</script>

<template>
    <div class="box-about">
        <div class="about">
            <p>About us</p>
           <div class="with">
               <h2>Empowering Innovation with</h2>
               <span>Cutting-Edge Solutions</span>
           </div>
            <div class="img">
                <img src="https://haltech.la/assets/CZhlx3AE-logo.webp" alt="">
                <span>At Houng Ah Loun Technology</span>
            </div>
           <div class="Leverage">
                <p>Leverage our latest tech stack to drive innovation and</p>
                <p>accelerate your business growth.</p>
           </div>
            <button>About us</button>
           
        </div>
        <div class="pilot">
            <button></button>
            <p>Innovating with The</p>
            <p>Latest Tech Stack</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box-about {
    background-color: rgb(29, 27, 27);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    height: 80vh;
    margin-top: 50px;
    .about {
        .with {
            & h2 {
                color: white;
                font-size: 2.50rem;
                line-height: 0.5;
                font-weight: bold;
            }
            & span {
                font-size: 2.50rem;
                line-height: 0.5;
                font-weight: bold;
                color: rgb(146, 146, 247);
            }
      
        }
        .img {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
          
            & img {
                height: 2.25rem;
            }
            & span {
                font-weight: bold;
                font-size: 18px;
                
            }
        }
        .Leverage {
            line-height: 0.5;
            color: white;
            & p {
                font-size: 20px;
            }
        }
        & button {
            border-radius: 50px;

        }
       
    }
    .pilot {
        padding: 10%;
        text-align: center;
        justify-content: center;
        background-image: url('https://haltech.la/assets/7o5roybQ-about-background.webp');
        background-size: cover;
        background-position: center;
     
        
        // height: 100%;
        // width: 50%;
        & p {
            color: white;
            font-size: 30px;
            line-height: 0.5;
        }
    }
}

</style>