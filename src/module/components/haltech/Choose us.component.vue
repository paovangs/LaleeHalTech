<script setup lang="ts">

</script>

<template>
    <div class="box-choose us">
        <div class="choose">
            <p>Why choose us</p>
            <h2>Why We’re</h2>
            <h2>the Best Fit for You</h2>
        </div>
        <div class="box-img">
            <img src="https://haltech.la/assets/vk8RYDkn-why-choose-us.webp" alt="">
            <div class="box-Team">
               <div class="Team">
                   <h2>01  Experienced Team</h2>
                   <p>Our skilled developers specialize in Java, Python, Ruby, React, and more, delivering top-tier mobile and web applications, as well as system maintenance.</p>
               </div>
               <div class="Team">
                  <h2>02  vClient-Focused</h2>
                  <p>We work closely with clients to understand their needs and assign the right developers for tailored solutions.</p>
               </div>
               <div class="Team">
                  <h2>03  Commitment to Quality</h2>
                  <p>Our team stays up-to-date with the latest technologies to provide innovative, high-quality software solutions.</p>
               </div>
               <div class="Team">
                  <h2>04  Collaborative Approach</h2>
                  <p>Strong communication and teamwork ensure efficient project delivery, on time and on budget.</p>
               </div>
            </div>

           
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
.box-choose  {  
    padding: 30px 50px; 
    margin-top: 50px; 
    .choose {
        line-height: 0.5;
    }
    .box-img {
        display: flex;
        gap: 50px;
        margin-top: 50px;
        & img {
            width: 50%;
        }
        .box-Team {
            width: 40%;
            .Team {
                line-height: 1;
                & h2 {
                   font-size: 28px;
                }
                & p {
                   font-size: 18px;
                   line-height: 1.5;
                }
            }  
        }
    }
}

</style>