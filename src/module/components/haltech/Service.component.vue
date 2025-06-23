<script setup lang="ts">

</script>

<template>
    <div class="service">
        <p>Our Core Services Designed to Drive Your Business Growth</p>
        <button>More service</button>
    </div>
    <div class="box-colums">
        <div class="colums">
            <img src="https://storage.googleapis.com/108-bucket/company-images/ceb9e096-f630-4ac1-815e-c5e00721ca31.png" alt="">
            <div>
                <h2>Website Development</h2>
                <p>We deliver high-quality, visually stunning web development solutions.</p>
            </div>
            <a>Explore More</a>
            
           
        </div>
        <div class="colums">
            <img src="https://storage.googleapis.com/108-bucket/company-images/ceb9e096-f630-4ac1-815e-c5e00721ca31.png" alt="">
            <div>
                <h2>Mobile Application</h2>
                <h2>Development</h2>
                <p>We specialize in creating user-friendly, secure, and scalable mobile applications.</p>
            </div>
            <a>Explore More</a>
            
           
        </div>
        <div class="colums">
            <img src="https://storage.googleapis.com/108-bucket/company-images/ceb9e096-f630-4ac1-815e-c5e00721ca31.png" alt="">
            <div>
                <h2>E-commerce</h2>
                <h2>Development</h2>
                <p>We create seamless online platforms optimized for growth and enhancing user experience.</p>
            </div>
            <a>Explore More</a>
            
           
        </div>
        <div class="colums">
            <img src="https://storage.googleapis.com/108-bucket/company-images/ceb9e096-f630-4ac1-815e-c5e00721ca31.png" alt="">
            <div>
                <h2>Consultant</h2>
                <p>We provide expert guidance, streamline operations, and achieve your business goals.</p>
            </div>
            <a>Explore More</a>
            
           
        </div>
       
       
       
       
    </div>

</template>

<style lang="scss" scoped>
.service {
    padding: 10px 50px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-top: 100px;

    & p {
        font-size: 1.5rem;
        font-weight: bold;

    }
    & button {
        border: 1px solid black;
        border-radius: 50PX;
        background-color: white;
        &:hover {
            color: white;
            background-color: black;
        }
    }
}
.box-colums {
    padding: 10px 50px;
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    gap: 30px;
    .colums {
        border: 1px solid #e9e6e6;
        border-radius: 15px;
        padding: 20px;
        & img {
            width: 50px;
            height: 40px;
        }
        & h2 {
            line-height: 0.5;
        }
        & p {
            font-size: 18px;
            // line-height: 0.5;
            
        }
        & a {
            font-weight: bold;
        }
       
    }
}

</style>