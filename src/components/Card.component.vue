<template>
    <div class="box-card">
        <div class="btn">
            <p>Top Companles</p>
        </div>
        <div class="box-mon">
            <div class="box-reod">
                <div class="fee">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cdcgGM8SveweMgXuYopqCzxAgGUvHh18Cw&s" alt="">

                </div>
                <div class="mee">
                    <p class="a">Haidil Hotpot</p>
                    <p class="b">ສະມັກຊິກພະນັກງານ</p>
                </div>

            </div>
            <div class="box-reod">
                <div class="fee">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cdcgGM8SveweMgXuYopqCzxAgGUvHh18Cw&s" alt="">
                </div>
                <div class="mee">
                    <p class="a">ການສືກສາກັນເຮັດວຽກ</p>
                    <p>ອາຫານການກິນ</p>

                    
                </div>
            </div>
            <div class="box-reod">
                <div class="fee">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cdcgGM8SveweMgXuYopqCzxAgGUvHh18Cw&s" alt="">
                </div>
                <div class="mee">
                    <p class="a">QMB Co ltd</p>
                    <p>ເປີດຮັບພະນັກງານ</p>
                </div>
            </div>

        </div>
    </div>
    <div class="box-moo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.box-card {
    .btn {
        font-size: 30px;
        font-weight: bold;
        margin-left: 20px;
    }
    .box-mon {
        display: flex;
        margin-top: -20px;
        .box-reod {
            border: 1px solid darkgray;
            margin: 20px;
            width: 2050px;
            .fee img {
                width: 100%;
            }
        }
        .mee {
            padding: 10px 15px;
            .a {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
}

.box-moo {
    height: 30vh;
    & img {
        height: 32vh;
        width: 100%;
        /* object-fit: cover; */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    & :hover {
        cursor: pointer;
    }
}
</style>