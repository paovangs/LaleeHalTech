<template>
    <div class="box-navbar">
        <div class="navbar">
            <h3>About Us</h3>
            <p class="nkauj">Nyob Zoo Ib Tsoom Kwv Tij Neej Tsa Sawv Daws. Peb Zoo Siab Txais Tos</p>
            <p class="nkauj">Nej Sawv Raws Los Nrog Peb Ua Kev Lom Zem</p>

        </div>
        <div class="detail">
            <h3>Our Team</h3>
            <p class="brands">
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-line"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-regular fa-envelope"></i>
            </p>

        </div>
        <div  class="banner">
            <h3>Contact Us</h3>
            <p>(+856) 20 2221 7639</p>
            <p>Mon - Fri : 8:30am - 5:30pm</p>
            <p>Email: 2018programmer@gmail.com</p>

        </div>


    </div>
    

</template>

<script lang="ts" setup>

</script>

<style lang="scss"scoped>
.box-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 0 200px 0 50px;
    height: 30vh;
    line-height: 0.7;
    margin-top: -50px;
    .navbar {
        .nkauj {
            font-size: 15px;
        }

    }
    .detail {
        .brands {
            & i {
                border: 1px solid white;
                padding: 8px;
                margin: 10px;
                border-radius: 5px;

            }
        }

    }
}
</style>
