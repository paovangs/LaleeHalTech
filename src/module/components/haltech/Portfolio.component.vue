<script setup lang="ts">

</script>

<template>
    <div class="box-portfolio">
        <div class="portfolio">
            <span>portfolio</span>
            <h2>Showcase of Excellence</h2>
            <h2>Celebrating Our Success</h2>
            <p>Explore our work and see how we’ve helped businesses transform and grow.</p>
            <div class="box-button">
                <button>Logistic</button>
                <button>E-commerce</button>
                <button>HRM</button>
                <button>Pubilc service</button>
                <button>Devilvery</button>
                <button>ERP</button>
                <button>Website</button>
            </div>
        </div>
        <button class="explore">Explore our portfolio</button>
       
    </div>
    <div class="colums">
        <div class="colums-1">
            <img src="https://haltech.la/portfolio/halexpress.webp" alt="">
            <div>
                <h2>Houng Ah Loun Logistics (HAL Express)</h2>
                <button>Logistic</button>
                <p class="leading">A leading logistics provider in Laos, we delivered customized solutions to streamline their operations, enhance efficiency, and support their growth in the logistics sector.</p>
                <p class="mobile">Mobile Application</p>
                <p class="more">Explore More</p>
            </div>
        </div>

        <div class="colums-1">
            <img src="https://haltech.la/portfolio/aeon.webp" alt="">
            <div>
                <h2>AEON LAO Company Limited</h2>
                <button>Website</button>
                <p class="leading">A leading leasing service in Laos, we developed a user-friendly website to enhance their online presence and improve customer access to leasing services.</p>
                <p class="mobile">website</p>
                <p class="more">Explore More</p>
            </div>
        </div>
        <div class="colums-1">
            <img src="https://haltech.la/portfolio/synergy.webp" alt="">
            <div>
                <h2>Synergy Lao</h2>
                <button>HRN</button>
                <p class="leading">A modern human resource management system, we provided tailored support to enhance their HR functionalities and improve overall user experience for effective workforce management.</p>
                <p class="mobile">Mobile Application</p>
                <p class="more">Explore More</p>
            </div>
        </div>
    </div>
   
</template>

<style lang="scss" scoped>
.box-portfolio {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    margin-top: 60px;
    .portfolio {
        & span {
            color: #696d74cc;
        }
        & h2 {
            line-height: 0.5;
            font-size: 28px;
        }
        & p {
            color: #696d74cc;
            font-size: 22px;
        }

        .box-button {
           display: flex;
           gap: 20px;
           font-weight: bold;
           & button {
              background-color: #d9dfeccc;
              border-radius: 50px;
              border: 1px solid #f2f4f8cc;
               &:hover {
                   background-color: #f0f2f5cc;
                }
            }
        }

    }
    .explore {
        background-color: black;
        color: white;
        font-weight: bold;
        border-radius: 30px;
    }
  
}
.colums {
    padding: 10px 50px;
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    gap: 35px;    
    .colums-1 {
        border: 1px solid rgb(206, 205, 205);
        border-radius: 30px;
        padding: 18px;
        & img {
            width: 100%;
            height: 45vh;
           
        }
        & button {
            background-color: #e2e4e9cc;
            border: white;
            padding: 3px 15px;
            border-radius: 50px;
        }
        .leading {
            font-size: 20px;
            margin-top: 10px;
        }
        .mobile {
            font-weight: bold;
            font-size: 14px;
        }
        .more {
            color: rgb(130, 130, 248);
            font-weight: bold;
        }
       
       
    }
}

</style>