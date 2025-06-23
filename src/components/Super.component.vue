<template>
    <div class="box-soo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg" alt="">

    </div>


    <div class="box-who">
        <div class="were">
            <p>SUPER HOT JOBS</p>
        </div>
        <div class="want">
            <div class="hgg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinA2sqt0LPEvrxC6Mbpn5qnIEKS1wB58Y8A&s" alt="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cdcgGM8SveweMgXuYopqCzxAgGUvHh18Cw&s" alt="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinA2sqt0LPEvrxC6Mbpn5qnIEKS1wB58Y8A&s" alt="">


            </div>
            <div class="hgg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cdcgGM8SveweMgXuYopqCzxAgGUvHh18Cw&s" alt="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinA2sqt0LPEvrxC6Mbpn5qnIEKS1wB58Y8A&s" alt="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cdcgGM8SveweMgXuYopqCzxAgGUvHh18Cw&s" alt="">

            </div>
        </div>
    </div>
    <div class="box-na">
        <img src="https://www.sngwallpaper.com/wp-content/uploads/2021/05/Waterfall-landscape.jpg" alt="">

    </div>
</template>
<style lang="scss">
.box-soo {
    /* border: 1px solid darkgray; */
    width: 92%;
    height: 30vh;
    padding: 20px;
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
.box-who {
    /* border: 1px solid black; */
    margin-top: 20px;
    height: 70vh;
    margin-right: 48px;
    .were {
        font-size: 30px;
        font-weight: bold;
        padding: 10px 15px;
    }
    .want {
        text-align: center;
        margin-top: -30px;
        .hgg {
            /* border: 1px solid red; */

            & img {
                margin: 8px;
                border-radius: 8px;
                height: 25vh;
                width: 30%;            }
            
        }

    }
    & :hover {
        cursor: pointer;
    }

}
.box-na {
    /* border: 1px solid darkgray; */
    width: 92%;
    height: 30vh;
    padding: 20px;
    margin-top: 10px;
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