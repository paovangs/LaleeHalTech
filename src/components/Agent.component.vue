<template>
    <div class="box-judy">
        <div class="blo">
            <p>URGENT JOBS</p>
        </div>
        <div class="bond">
            <div class="ben">
                <div class="max">
                    <p class="x">Global Asia </p>
                    <p>Listen again and global the nad the</p>
                </div>
                <div class="xam">
                    <img src="data:image/jpeg;base64,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" alt="">

                </div>
            </div>
            <div class="john">
                <div class="paul">
                    <p class="v">Silkroad Asia</p>
                    <p>Are the other boys listen the and </p>
                    
                </div>
                <div class="donny">
                     <img src="data:image/jpeg;base64,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" alt="">


                </div>

            </div>
                
        </div>
            
        
    </div>
</template>
<style lang="scss" scoped>
.box-judy {
    height: 50vh;
    margin-top: 20px;
    margin-left: 20px;
    .blo {
        /* border: 1px solid red; */
        font-size: 30px;
        font-weight: bold;
    }
    .bond {
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ben {
        /* border: 1px solid blue; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 46%;    
        &:hover {
            cursor: pointer;
            background-color: darkgray;
        }
        .x {
            font-size: 25px;
            font-weight: bold;
        }
        
        .xam {
            border-radius: 6px;
            border: 1px solid darkgray;

        }

    }
    .john {
        /* border: 1px solid blue; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 46%;
        &:hover {
            cursor: pointer;
            background-color: darkgray;
        }
        .v {
            font-size: 25px;
            font-weight: bold;
        }
        .donny {
            border-radius: 6px;
            border: 1px solid darkgray;
        }    
            

    }
}
</style>