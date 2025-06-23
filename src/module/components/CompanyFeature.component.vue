<template>
    <div class="box-name">
        <div class="ku">
            <p>Feattured companies</p>
        </div>
        <div class="beer">
            <div class="bana">
                <img src="https://storage.googleapis.com/108-bucket/company-images/4c545624-54a6-4c4d-941e-58e0c3ae89a3.jpeg" alt="">
            </div>
            <div class="naa">
                <div class="mus">
                    <img src="https://storage.googleapis.com/108-bucket/company-images/3e48adf9-521c-46fd-bf08-d3aa58f851fd.png" alt="">
                    <div class="fee">
                        <p class="lo">ST-Muang Thai Insurance Company Limited</p>
                        <p class="do">Insurance</p>
                    </div>
                </div>
                <div class="hena">
                   <p>ເບີ່ງເພີ່ມ</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-name {
    // border: 1px solid red;
    margin-top: 10px;
    border-radius: 20px;
    .ku {
        font-size: 28px;
        font-weight: bold;
        text-align: center;

    }
    .beer {
        &:hover {
            cursor: pointer;
        }
        .bana {
            & img {
                width: 100%;
                height: 70vh;
                border-radius: 20px 20px 0 0;
            }
        }
        .naa {
            display: flex;
            justify-content: space-between;
            margin-top: -7px;           
            background-color: rgb(255, 0, 128);
            padding: 30px;
            height: 70px;
            border-radius: 0 0 20px 20px;
            .mus {
                display: flex;
                & img {
                    width: 10%;
                    height: 55px;
                    border-radius: 5px;
                    padding: 7px;
                    background-color: white;
                }
                .fee {
                    margin: 20px;
                    margin-top: -2;
                    width: 150%;
                    color: white;
                    .lo {
                        font-size: 18px;
                        font-weight: bold;
                        margin-top: -10px;
                    }
                    .do {
                        margin-top: -18px;
                        font-weight: bold;
                    }
                }
            }
            .hena {
                font-size: 18px;
                font-weight: bold;
                border: 1px solid white;
                width: 10%;
                height: 60px;
                text-align: center;
                color: white;
                border-radius: 40px;
                &:hover {
                    background-color: rgb(255, 0, 157);

                }
            }

        }
    }


}
</style>