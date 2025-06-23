<template>
    <div class="box-business">
        <div class="peke">
            <p>แพ็กเกจลงประกาศงาน</p>
        </div>
        <div class="img">
            <img src="https://www.jobthai.com/static/images/package/jobPostingPrice/business-package-icon.svg" alt="">
            <span class="bus">BUSINESS PACKAGE</span>
        </div>
        <div class="button"></div>
        <div class="blame">
            <p>ลงประกาศ</p>
            <p>1 ตำแหน่ง</p>
            <p>2 ตำแหน่ง</p>
            <p>3 ตำแหน่ง
            </p>
        </div>
        <div class="price">
            <div class="promotion">
                <span class="discount">10%</span>
            </div>
            <div class="pricele">
                <p class="total" style="margin-top: 50px;">2</p>
                <p class="oneweek">สัปดาห์</p>
            </div>
            <div class="week">
                <p class="total">฿900</p>
                <p class="vat">+Vat 7% = ฿963</p>
                <p>RVC* 150 ครั้ง</p>
            </div>
            <div class="line"></div>
            <div class="week">
                <p class="total">฿1,800</p>
                <p class="vat">+Vat 7% = ฿1,926</p>
                <p>RVC* 300 ครั้ง</p>
            </div>
            <div class="line"></div>
            <div class="week">
                <p class="total">฿2,700</p>
                <p class="vat">+Vat 7% = ฿2,889</p>
                <p>RVC* 450 ครั้ง</p>
            </div>
        </div>

        <div class="price">
            <div class="promotion">
                <span class="discount">15%</span>
            </div>
            <div class="pricele">
                <p class="total" style="margin-top: 50px;">2</p>
                <p class="oneweek">สัปดาห์</p>
            </div>
            <div class="week">
                <p class="total">฿900</p>
                <p class="vat">+Vat 7% = ฿963</p>
                <p>RVC* 150 ครั้ง</p>
            </div>
            <div class="line"></div>

            <div class="week">
                <p class="total">฿1,800</p>
                <p class="vat">+Vat 7% = ฿1,926</p>
                <p>RVC* 300 ครั้ง</p>
            </div>
            <div class="line"></div>

            <div class="week">
                <p class="total">฿2,700</p>
                <p class="vat">+Vat 7% = ฿2,889</p>
                <p>RVC* 450 ครั้ง</p>
            </div>
        </div>
        <div class="price">
            <div class="pricele">
                <p class="total" style="margin-top: 50px;">2</p>
                <p class="oneweek">สัปดาห์</p>
            </div>
            <div class="week">
                <p class="total">฿900</p>
                <p class="vat">+Vat 7% = ฿963</p>
                <p>RVC* 150 ครั้ง</p>
            </div>
            <div class="line"></div>

            <div class="week">
                <p class="total">฿1,800</p>
                <p class="vat">+Vat 7% = ฿1,926</p>
                <p>RVC* 300 ครั้ง</p>
            </div>
            <div class="line"></div>

            <div class="week">
                <p class="total">฿2,700</p>
                <p class="vat">+Vat 7% = ฿2,889</p>
                <p>RVC* 450 ครั้ง</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-business {
    // border: 1px solid red;
    margin-top: 20px;
    padding: 0 12%;
    .peke {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    .img {
        font-size: 25px;
        font-weight: bold;
        display: flex;
        align-items: center;
        & img {
            width: 2%;
            margin: 10px;
        }
        .bus {
            margin-top: 12px;
        }
    }
    .button {
        border: 2px solid rgba(106, 106, 107, 0.411);
        margin-top: 10px;
    }
    .blame {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        // padding: 0 100px;
        padding: 0 100px 0 0 ;
    }
    .price {
        border: 1px solid rgb(247, 244, 244);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        padding: 0 80px  0 0;
        background-color:  #fff;
        box-shadow: rgb(104, 104, 104) 0px 0px 12px -6px;
        position: relative;
        .promotion {
            text-align: center;
            padding-right: 10px;
            position: absolute;
            width: 8%;
            height: 28px;
            background: rgb(244, 95, 95);
            top: 10px;
            left: -10px;
            box-shadow: rgb(104, 104, 104) -3px 5px 7px -4px;
            &::before {
                content: "";
                position: absolute;
                bottom: -10px;
                left: 0px;
                border-width: 5px;
                border-style: solid;
                border-color: rgb(208, 9, 9) rgb(208, 9, 9) transparent transparent;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: 0px;
                right: 0px;
                border-width: 14px;
                border-style: solid;
                border-color: transparent rgb(250, 188, 209) transparent transparent;
            }
            & .discount {
                font-family: Superstore;
                font-size: 24px;
                color: rgb(255, 255, 255);
                padding-right: 0px;
                padding-left: 0px;
                margin-bottom: 0px;
                display: inline;
                line-height: 30px;
            }
        }
        .line {
            width: 2px;
            height: 90px;
            background: rgb(226, 223, 228);
            margin-top: 30px;
        }
        .week {
            line-height: 0.7;
            text-align: center;
            .total {
                font-size: 30px;
                font-weight: bold;
            }
            .vat {
                font-size: 20px;
                color: rgb(247, 110, 110);
            }

        }
        .pricele {
            // border: 1px solid green;
            line-height: 0.7;
            text-align: center;
            width: 10%;
            background-color: rgb(250, 188, 209);
            border-radius: 10px 0 0 10px ;

            .total {
                font-size: 30px;
              font-weight: bold;
            }
            .oneweek {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
}
</style>