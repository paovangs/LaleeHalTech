<template>
    <section class="box">
        <div class="box-left">
            <div class="box-icon">
                <div class="icon">
                    <p class="m">Icon</p>
                    <p class="title">รถไฟฟ้าและ BRT</p>
                </div>
                <div class="icon">
                    <p class="m">Icon</p>
                    <p class="title">รถเมล์</p>
                </div>
                <div class="icon">
                    <p class="m">Icon</p>
                    <p class="title">นิคมอุตสาหกรรม</p>
                </div>
            </div>
            <div class="box-com">
                <div class="com">
                    <p class="a">ສະຖານທີ່ເຮັດວຽກ</p>
                    <p class="b">ທັງໝົດ</p>
                </div>
                <div class="mom">
                    <div class="m">
                        <p class="ab">ປະເພດການເຮັດວຽກ</p>
                        <p class="ab">1/5</p>


                    </div>
                    <div class="box-la">
                        <p class="c">ທັງໝົດ</p>
                    </div>
                </div>
            </div>
            <div class="box-pem">
                <div class="pem">
                    <button>1</button>
                    <span>Hybrid Work</span>
                </div>
                <div class="nem">
                    <button>1</button>
                    <span>Work from Home</span>
                </div>
            </div>
            <div class="tel">
                ค้นหา
            </div>
        </div>
        
        <div class="box-right">
            <div class="box-title">
                <div class="box-title-left">
                    <p>
                        งานทั้งหมด
                        <span class="total">118,945</span>
                        อัตรา
                    </p>
                    <p class="sub-title">
                        อัปเดตงานใหม่ทุกวันกว่า 200 อาชีพ
                    </p>
                </div>
                <div class="box-title-right">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinA2sqt0LPEvrxC6Mbpn5qnIEKS1wB58Y8A&s" alt="">
                </div>
            </div>
            <div class="box-ton">
                <div class="sing">
                    <p>POPULAR SEARCH</p>
                </div>
                <div class="song">
                    <button class="T">Manager</button>
                    <button class="T">lT 50k+</button>
                    <button class="T">Sustainability</button>
                    <button class="T">E-Commerce</button>
                    <button class="T">Healthcare</button>
                </div>
                <div class="up">
                    <button class="pom">Data Analyst</button>
                    <button class="pom">Digital Marketing</button>
                    <button class="pom">Syetem Engineer</button>
                    <button class="hom">ດູເພີ່ມເຕີມ</button>

                </div>
            </div>
            <div class="box-here">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinA2sqt0LPEvrxC6Mbpn5qnIEKS1wB58Y8A&s" alt="">
            </div>
        </div>
     </section>
</template>

<style lang="scss" scoped>
.box {
    /* border: 1px solid green; */
    /* height: 1000px; */
    justify-content: space-between;
    display: flex;
    margin-top: 20px;

    & .box-left {
        width: 65%;
        border: 1px solid darkgray;
        border-radius: 7px;
    }
    & .box-right {
        width: 110%;
        /* border: 1px solid red; */
        padding: 0 15px;
    }
    .box-icon {
        display: flex;
        /* border: 1px solid red; */



    }
    .icon {
        margin: 15PX;
        text-align: center;

        & .m {
            border: 1px solid darkgray;
            padding: 10px;
            border-radius: 100%;
            display: inline-block;
            white-space: nowrap;
            /* background-color: darkgray; */

        }
        & .title {
            margin-top: -10px;
        } 
    }
    .box-com {
        /* border: 2px solid green; */
        margin-top: 10px;

        & .com {
            padding: 10px 15px;
            margin-top: -15px;
            .a {
                font-weight: bold;
            }
            .b {
                border: 1px solid darkgray;
                padding: 15px;
                border-radius: 6px;
            }
            
            
        }
        & .mom {
            font-weight: 10px;
            padding: 10px 15px;

            .m {
                display: flex;
                justify-content: space-between;
                padding: 15px;
                margin-top: -40px;
            }
            .box-la {
                border: 1px solid darkgray;
                margin-top: -20px;
                border-radius: 6px;

                & .c {
                    border: 1px solid darkgray;
                    width: 50px;
                    /* padding: 5px; */
                    margin-left: 10px;
                    background-color: darkgray;
                    border-radius: 5px;
                }

            }
            
        }
    }
    .box-pem {
        display: flex;
        justify-content: space-between;
        height: 100px;
        padding: 15px;
    }
    .tel {
        border-radius: 5px;
        color: white;
        background-color: orangered;
        padding: 5px;
        width: 100px;
        text-align: center;
        margin: 0 auto;
        margin-top: -40px;
        &:hover {
            cursor: pointer;
        }
    }
    .box-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid red;
        .box-title-left {
            margin: 10px;
            width: 100% !important;
            & .total {
                color: red;
                font-weight: bold;
            }
            & .sub-title {
                color: red;
            }
        }
        & .box-title-right {
            width: 100% !important;
            height: 80px !important;
            img {
                height: 80px !important;
                width: 100%;
                margin-top: 13.5px;
            }
        }
    }
    .box-ton {
        /* border: 1px solid red; */
        /* height: 50vh; */
        .sing {
            font-size: 20px;
            font-weight: bold;
        }
        .song {
            padding: 10px 15px;
            .T {
                padding: 10px 15px;
                border: none;
                border-radius: 6px;
                font-size: 15px;
                &:hover {
                    cursor: pointer;
                    background-color: darkgray;
                }

            }

        }
        .up {
            padding: 10px 15px;
            .pom {
                padding: 10px 15px;
                border: none;
                border-radius: 6px;
                font-size: 15px;
                &:hover {
                    cursor: pointer;
                    background-color: darkgray;
                }
            }
            .hom {
                padding: 10px 15px;
                font-size: 15px;
                background-color: white;
                color: red;
                border: none;
                /* border: 1px solid orangered; */
                border-radius: 6px;

                 &:hover {
                    cursor: pointer;
                    background-color: orangered;
                    color: white;
                    
                }
            }
        }

        
        
    }
    .box-here {
        /* border: 1px solid green; */
        /* height: 50%; */
        padding: 15px;
        /* text-align: center; */
        margin-top: 10px;
       & img {
        width: 100%;
        height: 190px;
        object-fit: cover;
       }

    
    }    
}
</style>