<script setup lang="ts">

</script>

<template>
    <div class="Your-detail">
        <div class="detail">
            <h1>Get in touch</h1>
            <h1>with us</h1>
            <p>Have a question or want to learn more about our services? Contact us today and one of our representatives will be in touch.</p>
        </div>
        <div class="box-detail">
            <h3>Your detail</h3>
            <div class="name">
                <p>Name</p>
                <p>Email</p>
            </div>
            <div class="input">
                <p>Input text</p>
                <p>Input text</p>
            </div>
            <div class="message">
                <h4>You message</h4>
                <p>Write text here...</p>
            </div>
            <button>Submit</button>

            
        </div>

    </div>
</template>

<style lang="scss" scoped>
.Your-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
    background-color: #f1f1f7;
    margin-top: 100px;
    padding: 100px 10px;
    .detail {
        width: 30%;
        & p {
            font-size: 18px;
            font-weight: bold;
        }
        & h1 {
            line-height: 0.3;
        }
    }
    .box-detail {
        width: 50%;
        & h3 {
            font-size: 20px;
            font-weight: bold;
        }
        .name {
            display: flex;
            gap: 45%;
            line-height: 0.1;
            & p {
                font-size: 16px;
                font-weight: bold;
            }
        }
        .input {
            display: flex;
            gap: 20px;
            & p {
                border: 1px solid #9d9d9e;
                background-color: white;
                width: 50%;
                padding: 10px;
                border-radius: 5px;
            }
        }
        .message {
            line-height: 0.5;
            & p {
                font-size: 16px;
                border: 1px solid #9d9d9e;
                height: 15vh;
                padding: 15px  10px ;
                border-radius: 8px;
                background-color: white;
            }
        }
        & button {
            background-color: black;
            color: white;
            font-weight: bold;
            border-radius: 30px;
            width: 20%;
            margin-left: 80%;
        }
    }

}

</style>