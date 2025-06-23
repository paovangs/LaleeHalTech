<template>
    <div class="make-profile">
        <div class="hear">
            <p class="neer">We make thirig</p>
            <p class="bee">a little easier.</p>
            <p class="neer">Let's give it a try!</p>
        </div>
        <div class="near">
            <img src="https://employer.108.jobs/_nuxt/home3.BZxuMN1v.png" alt="">
        </div>
    </div>
    <div class="start">
        <div class="check">
            <p> Staet Posting a Job 3 simple steps </p>
        </div>
        <div class="bear">
            <div class="one">
            <div class="noo">
                <p>1</p>
            </div>
            <div class="now">
                <p class="goes">Check the price</p>
                <p class="our">Our price Calculator facliltates effcient </p>
                <p class="our">quote generation,auton matically delivered</p>
                <p class="our">to the sales team foe review</p>
            </div>
            <div class="price">
                <p>Price Calculator</p>
            </div>
            

        </div>
        <div class="one">
            <div class="noo">
                <p>2</p>
            </div>
            <div class="now">
                <p class="goes">Confirm Order</p>
                <p class="our">Our price Calculator facliltates effcient </p>
                <p class="our">quote generation,auton matically delivered</p>
                <p class="our">to the sales team foe review</p>
            </div>

        </div>
        <div class="one">
            <div class="noo">
                <p>3</p>
            </div>
            <div class="now">
                <p class="goes">Make Payment</p>
                <p class="our">Our price Calculator facliltates effcient </p>
                <p class="our">to the sales team foe review</p>
            </div>
            <div class="price">
                <p>Price Calculator</p>
            </div>
            

        </div>
        </div>
       
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.make-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    .hear {
        line-height: 0.5;
        .neer {
            font-size: 50px;
            font-weight: bold;
        }
        .bee {
            font-size: 50px;
            font-weight: bold;
            color: blue;
        }
    }
    .near {
        & img {
            height: 50vh;
        }
    }
} .start {
    // border: 1px solid red;
    text-align: center;
    margin-top: 80px;
    .check {
        font-size: 30px;
        font-weight: bold;
        margin-top: 30px;
    }
    .one {
        // border: 1px solid black;
        background-color: rgb(91, 91, 253);
        width: 35%;
        margin: 10px;
        padding: 30px;
        border-radius: 10px;
        .noo {
            border: 1px solid white;
            width: 60px;
            border-radius: 100%;
            font-weight: bold;
            background-color: white;
            margin-left: auto;
            margin-right: auto;


        }
        .now {
            .goes {
                font-size: 20px;
                font-weight: bold;
                color: white;

            }
            .our {
                color: white;
                line-height: 0.7;

            }
        }
        .price {
            border: 1px solid yellow;
            width: 50%;
            background-color: yellow;
            // text-align: center;
            border-radius: 8px;
            margin-right: auto;
            margin-left: auto;
        }
        
        
    }
}
.bear {
    display: flex;
    // margin: 30px;
}
</style>